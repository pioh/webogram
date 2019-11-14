import { config } from "const/config";
import { GetDcHref } from "const/dc";
import { errors, findError } from "const/errors";
import {
  GetKeyByFingerPrints,
  GetPublicKeyByDc,
  IPublicKey
} from "const/PublicKyes";
import { assertEquals } from "lib/assertEquals";
import { bytesFromHex } from "lib/BytesFromHex";
import { bytesXor } from "lib/bytesXor";
import { GetRandomValues } from "lib/GetRandomValues";
import { ILong } from "lib/ILong";
import { nextRandomInt } from "lib/nextRandomInt";
import { ungzip } from "lib/pako.js";
import { Sha1 } from "lib/Sha";
import { WorkerClient } from "lib/WorkerClient";

import { ApiInvoker } from "./ApiInvoker";
import { ByteBuffer } from "./ByteBuffer";
import {
  AuthExportAuthorizationM,
  AuthImportAuthorizationM,
  CallAuthExportAuthorizationM,
  CallAuthImportAuthorizationM,
  HelpGetNearestDcM,
  InitConnectionM,
  InvokeWithLayerM,
  NearestDcS
} from "./generator/ApiShema.gen";
import {
  BadServerSaltS,
  GzipPackedS,
  HttpWaitM,
  MessageT,
  MsgContainerS,
  MsgDetailedInfoS,
  MsgNewDetailedInfoS,
  MsgsAckS,
  NewSessionCreatedS,
  PingM,
  PongS,
  RpcErrorS,
  RpcResultS,
  VectorS
} from "./generator/MTprotoShema.gen";
import { NewNonce } from "./nonce";
import {
  MethodReqDHParams,
  MethodReqPq,
  MethodSetClientDHParams,
  TypeClientDHInnerData,
  TypeDHGenOk,
  TypePQInnerData,
  TypeResDHParamsFail,
  TypeResDHParamsInner,
  TypeResDHParamsOk,
  TypeResPQ
} from "./schema";
import { IStruct, OneOf, ProtoLong, TMethod } from "./SchemaHelpers";
import { TimeStore } from "./TimeStore";

export interface IConnectionProps {
  timeStore: TimeStore;
  apiInvoker: ApiInvoker;
  dc: number;
}

const ID = (id: ILong) =>
  id[0]
    .toString(16)
    .toUpperCase()
    .slice(-6, -2);

export interface MethodWrap {
  cb?: (response: IStruct) => void;
  method: TMethod;
  name: string;
}

export interface IWaiter extends MethodWrap {
  time: number;
  retry: number;
  message: MessageT;
  rpcError?: RpcErrorS;
}

export class Connection {
  props: IConnectionProps;
  private worker = new WorkerClient();

  private callbacks: Array<() => Promise<void> | void> = [];

  private publicKey: IPublicKey;
  private retry = 0;
  private nonce = NewNonce();
  private serverNonce = new Uint8Array();
  private newNonce = new Uint8Array();

  private pq = new Uint8Array();
  private p = new Uint8Array();
  private q = new Uint8Array();
  private g = 0;
  private dhPrime = new Uint8Array();
  private tmpAesKey = new Uint8Array();
  private tmpAesIv = new Uint8Array();
  private gA = new Uint8Array();

  private session = GetRandomValues(new Uint8Array(8));
  private authKeyID = new Uint8Array();
  private authKey = new Uint8Array();
  private serverSalt = new Uint8Array();

  private inited = false;
  private initing = false;
  private seq_no = 0;
  connectionInited = false;
  isDebug = true;
  acks: ILong[] = [];
  sentAcks = new Set<string>();

  private sending = new Map<string, IWaiter>();

  constructor(props: IConnectionProps) {
    this.props = props;
    this.publicKey = GetPublicKeyByDc(this.props.dc);
  }
  get user() {
    return this.props.apiInvoker.props.userStore();
  }
  async init() {
    if (this.initing || this.inited) return;
    this.initing = true;
    try {
      await this.initConnection();
    } finally {
      this.initing = false;
    }
  }
  async ready() {
    if (this.inited) return;

    return new Promise(r => {
      this.callbacks.push(r);
    });
  }
  _onNearestDc: Set<(dc: number) => void> = new Set();
  onNearestDc(foo: (dc: number) => void) {
    this._onNearestDc.add(foo);
    return () => this._onNearestDc.delete(foo);
  }
  private async mtpSendPlainRequest(requestBuf: ByteBuffer) {
    let clientMsgID = this.props.timeStore.generateMessageID();

    requestBuf.writeLongAt(clientMsgID, 2);
    requestBuf.writeIntAt((requestBuf.size - 5) * 4, 4);

    let ping = performance.now() / 1000;
    let response = await fetch(GetDcHref(this.props.dc), {
      method: "POST",
      body: requestBuf.getBuffer32(),
      mode: "cors"
    });
    ping = performance.now() / 1000 - ping;

    let responseBuffer = new ByteBuffer(
      new Uint32Array(await response.arrayBuffer())
    );
    let auth_key_id = responseBuffer.readLong();
    let serverMsgID = responseBuffer.readLong();
    let msg_len = responseBuffer.readInt();

    this.props.timeStore.syncWithServer(clientMsgID, serverMsgID, ping);

    return responseBuffer;
  }

  async send(requestWrap: MethodWrap | IWaiter) {
    let wrap = requestWrap as IWaiter;
    wrap = {
      ...requestWrap,
      time: wrap.time || Date.now(),
      retry: wrap.retry !== void 0 ? wrap.retry : 2,
      message: this.nextMsg(wrap.name, !(wrap.method instanceof HttpWaitM))
    };
    let messages = [wrap.message];
    if (wrap.retry <= 0) {
      if (wrap.cb) {
        wrap.cb(
          wrap.rpcError ||
            new RpcErrorS()
              .set_error_message(errors.INTERNAL)
              .set_error_code(500)
        );
      }
      return;
    }

    let request = wrap.method;
    if (!this.connectionInited && !(wrap.method instanceof HttpWaitM)) {
      if (this.isDebug) console.log("send initConnection");
      request = new InvokeWithLayerM().set_layer(config.apiLayer).set_query(
        new InitConnectionM()
          .set_api_id(config.apiID)
          // .set_api_id(2496)
          .set_app_version(config.version)
          .set_device_model(navigator.userAgent || "Unknown UserAgent")
          .set_system_version(navigator.platform || "Unknown Platform")
          .set_lang_code(navigator.language || "en")
          .set_system_lang_code(navigator.language || "en")
          .set_query(request)
      );
    }

    messages[0].set_body(request);
    let wait = wrap.method instanceof HttpWaitM;
    if (!this.longPoolSent) {
      wait = true;
      messages.push(
        this.nextMsg("http_wait", false).set_body(
          new HttpWaitM()
            .set_max_delay(500)
            .set_max_wait(5000)
            .set_wait_after(150)
        )
      );
    }
    let wrapID = messages[0].get_msg_id().join();
    if (wrap.cb) {
      this.sending.set(wrapID, wrap);
    }
    if (!(wrap.method instanceof HttpWaitM)) {
      setTimeout(() => {
        this.checkRpcStatus(wrapID);
      }, 1000);
    }
    if (this.acks.length) {
      messages.push(
        this.nextMsg("acks", false).set_body(
          new MsgsAckS().set_msg_ids(
            new VectorS<ProtoLong>().set_values(this.acks)
          )
        )
      );
      console.log("SEND acks", this.acks);
      this.acks = [];
    }
    let message =
      messages.length === 1
        ? messages[0]
        : this.nextMsg("container", false).set_body(
            new MsgContainerS().set_messages(
              new VectorS<MessageT>().set_values(messages)
            )
          );

    if (this.isDebug) console.log("send " + wrap.name);

    await this.sendMessage(wrap.name, message, wait);
  }
  async checkRpcStatus(wrapID: string) {
    let w = this.sending.get(wrapID);
    if (!w) return;
    if (this.sentAcks.has(w.message.get_msg_id().join())) {
      this.sendMessage(`resend ${w.name}`, w.message, false);
      setTimeout(() => this.checkRpcStatus(wrapID), 1000);
      return;
    }
  }
  async sendMessage(name: string, m: MessageT, wait: boolean) {
    let req = new ByteBuffer();
    req.writeU8A(this.serverSalt);
    req.writeU8A(this.session);
    m._write(req, true);
    // console.log(m);
    let padding = 16 - ((req.size * 4) % 16) + 16 * (1 + nextRandomInt(5));
    req.writeU8A(GetRandomValues(new Uint8Array(padding)));
    let msgKey = await this.getMsgKey(req.getBuffer8(), true);
    let [aesKey, aesIv] = await this.getMsgAesKeyIv(msgKey, true);

    let encrypted = await this.worker.aesEncrypt(
      req.getBuffer8(),
      aesKey,
      aesIv
    );
    let reqWrap = new ByteBuffer();
    reqWrap.writeU8A(this.authKeyID);
    reqWrap.writeU8A(msgKey);
    reqWrap.writeU8A(encrypted);
    let ping = performance.now() / 1000;
    let response = await fetch(GetDcHref(this.props.dc), {
      method: "POST",
      body: reqWrap.getBuffer32(),
      mode: "cors"
    });
    ping = performance.now() / 1000 - ping;

    if (this.isDebug) console.log("sent " + name);
    this.connectionInited = true;
    let data = await this.sendOnResponse(
      response,
      !wait ? ping : 0,
      name,
      m,
      wait
    );
    if (this.sending.size && !this.longPoolSent) {
      this.longPool();
    }
    return data;
  }
  nextMsg(name: string, main = true): MessageT {
    let m = new MessageT();
    this.seq_no++;
    if ((this.seq_no % 2 && !main) || (!(this.seq_no % 2) && main)) {
      this.seq_no++;
    }
    m.set_msg_id(this.props.timeStore.generateMessageID());
    m.set_seqno(this.seq_no);
    if (this.isDebug)
      console.log(`msg id for ${name} ${ID(m.get_msg_id())} ${m.get_msg_id()}`);
    return m;
  }

  async sendOnResponse(
    response: Response,
    ping: number,
    name: string,
    message: MessageT,
    wait: boolean
  ) {
    let responseBuffer = new ByteBuffer(
      new Uint32Array(await response.arrayBuffer())
    );

    let authKeyID = responseBuffer.readU8A(2);
    assertEquals(authKeyID, this.authKeyID);
    let serverMsgKey = responseBuffer.readU8A(4);
    let encrypted = responseBuffer.readU8A(
      responseBuffer.size - responseBuffer.offset
    );
    let [aesKey, aesIv] = await this.getMsgAesKeyIv(serverMsgKey, false);
    let decrypted = await this.worker.aesDecrypt(encrypted, aesKey, aesIv);
    let msgKey = await this.getMsgKey(decrypted, false);
    assertEquals(msgKey, serverMsgKey);

    let decryptedBuffer = new ByteBuffer(decrypted);
    decryptedBuffer.readU8A(2); // salt
    let session = decryptedBuffer.readU8A(2);
    assertEquals(this.session, session);
    let res = new MessageT()._read(decryptedBuffer, true);
    console.log("RESPONSE", res);
    if (ping) {
      this.props.timeStore.syncWithServer(
        message.get_msg_id(),
        res.get_msg_id(),
        ping
      );
    }
    await this.processMessage(res, name, message, wait);
    return res;
  }
  async processMessage(
    m: MessageT | IStruct,
    name: string,
    req: MessageT,
    wait: boolean
  ) {
    let body = m;
    if (m instanceof MessageT) {
      body = m.get_body();
      this.acks.push(m.get_msg_id());
    }

    if (body instanceof OneOf) body = body.unwrap();
    switch (Object.getPrototypeOf(body).constructor) {
      case MsgDetailedInfoS:
      case MsgNewDetailedInfoS:
        return;
    }

    if (body instanceof RpcResultS) {
      this.processRpcResult(body);
    } else if (body instanceof MsgContainerS) {
      for (let msg of body.get_messages().get_values()) {
        await this.processMessage(msg, name, req, wait);
      }
    } else if (body instanceof GzipPackedS) {
      let data = body.get_packed_data();
      let buf = new ByteBuffer(ungzip(data));
      let next = new OneOf()._read(buf);
      await this.processMessage(next, name, req, wait);
    } else if (body instanceof NewSessionCreatedS) {
      if (this.isDebug) console.log("XNewTSessionTCreated");
      this.connectionInited = false;
      this.serverSalt = new Uint8Array(
        new Uint32Array(body.get_server_salt()).buffer
      );
      this.writeSessionToStorage();
    } else if (body instanceof BadServerSaltS) {
      this.connectionInited = false;
      this.serverSalt = new Uint8Array(
        new Uint32Array(body.get_new_server_salt()).buffer
      );
      this.writeSessionToStorage();
      this.sendMessage(name, req, wait);
    } else if (body instanceof MsgsAckS) {
      body
        .get_msg_ids()
        .get_values()
        .forEach(id => this.sentAcks.delete(id.join()));
    } else {
      if ("get_msg_id" in body) {
        let id = (body as any).get_msg_id() as ILong;
        if (Array.isArray(id) && this.sending.has(id.join())) {
          let w = this.sending.get(id.join())!;
          this.sending.delete(id.join());
          if (this.isDebug)
            console.log(
              "receive " + w.name,
              Object.getPrototypeOf(body).constructor.name,
              body
            );
          if (w.cb) w.cb(body);
          return;
        }
      }
      console.error(
        "unexpected msg",
        Object.getPrototypeOf(body).constructor.name,
        body
      );
    }
  }
  async processRpcResult(r: RpcResultS) {
    let id = r.get_req_msg_id();
    let w = this.sending.get(id.join());
    this.sending.delete(id.join());
    let instance = r.get_result();
    if (instance instanceof GzipPackedS) {
      let data = instance.get_packed_data();
      let buf = new ByteBuffer(ungzip(data));
      instance = new OneOf()._read(buf);
    }
    if (instance instanceof OneOf) instance = instance.unwrap();

    if (w) {
      if (!instance) {
        this.connectionInited = false;
        this.send({
          ...w,
          retry: w.retry - 1,
          rpcError: new RpcErrorS()
            .set_error_message("API_ID_INVALID")
            .set_error_code(400)
        });
        return;
      }
      if (this.isDebug)
        console.log(
          "receive " + w.name,
          Object.getPrototypeOf(instance).constructor.name,
          instance
        );
      if (instance instanceof RpcErrorS) {
        let err = findError(instance.get_error_message());
        if (err.type === "AUTH_KEY_UNREGISTERED") {
          if (this.user.isLoggedIn) {
            if (this.user.userDC !== this.props.dc) {
              await this.reimportAuth();
              this.send({
                ...w,
                retry: w.retry - 1,
                rpcError: new RpcErrorS().set_error_message(
                  "AUTH_KEY_UNREGISTERED"
                )
              });
              return;
            } else {
              this.user.setIsLoggedIn(false);
            }
          }
        }
        if (this.isDebug)
          console.error(
            "rpc error for " + w.name,
            instance.get_error_code(),
            instance.get_error_message()
          );
      }
      if (w.cb) w.cb(instance);
      return;
    }
    if (instance instanceof RpcErrorS) {
      if (this.isDebug)
        console.error(
          "rpc error for " + ID(id),
          instance.get_error_code(),
          instance.get_error_message()
        );
      return;
    }
    console.error(
      "unexpected rpc result for " + ID(id),
      Object.getPrototypeOf(instance).constructor.name,
      instance
    );
  }

  async getMsgKey(req: Uint8Array, isOut: boolean) {
    let x = isOut ? 0 : 8;
    let msgKeyLargePlain = new Uint8Array([
      ...this.authKey.subarray(88 + x, 88 + x + 32),
      ...req
    ]);
    let key = await this.worker.sha256Hash(msgKeyLargePlain);
    return new Uint8Array(key).subarray(8, 24);
  }

  async getMsgAesKeyIv(msgKey: Uint8Array, isOut: boolean) {
    let x = isOut ? 0 : 8;
    let sha2aText = new Uint8Array(52);
    let sha2bText = new Uint8Array(52);

    sha2aText.set(msgKey, 0);
    sha2aText.set(this.authKey.subarray(x, x + 36), 16);

    sha2bText.set(this.authKey.subarray(40 + x, 40 + x + 36), 0);
    sha2bText.set(msgKey, 36);

    let [sha2a, sha2b] = await Promise.all([
      this.worker.sha256Hash(sha2aText),
      this.worker.sha256Hash(sha2bText)
    ]);

    let aesKey = new Uint8Array(32);
    let aesIv = new Uint8Array(32);

    aesKey.set(sha2a.subarray(0, 8));
    aesKey.set(sha2b.subarray(8, 24), 8);
    aesKey.set(sha2a.subarray(24, 32), 24);

    aesIv.set(sha2b.subarray(0, 8));
    aesIv.set(sha2a.subarray(8, 24), 8);
    aesIv.set(sha2b.subarray(24, 32), 24);

    return [aesKey, aesIv];
  }

  private writeTempHeader(requestBuf: ByteBuffer) {
    requestBuf.padding(5);
  }
  readSessionFromStorage() {
    try {
      // let sessionS = localStorage.getItem("session");
      let authKeyIDS = localStorage.getItem(`authKeyID${this.props.dc}`);
      let authKeyS = localStorage.getItem(`authKey${this.props.dc}`);
      let serverSaltS = localStorage.getItem(`serverSalt${this.props.dc}`);
      if (serverSaltS && authKeyIDS && authKeyS) {
        // this.session = new Uint8Array(JSON.parse(sessionS));
        this.authKeyID = new Uint8Array(JSON.parse(authKeyIDS));
        this.authKey = new Uint8Array(JSON.parse(authKeyS));
        this.serverSalt = new Uint8Array(JSON.parse(serverSaltS));
        console.log("read session from storage");
        return true;
      }
    } catch (e) {
      console.error("failed read session from local storage", e.stack);
    }
    return false;
  }
  writeSessionToStorage() {
    // localStorage.setItem("session", JSON.stringify([...this.session]));
    localStorage.setItem(
      `authKeyID${this.props.dc}`,
      JSON.stringify([...this.authKeyID])
    );
    localStorage.setItem(
      `authKey${this.props.dc}`,
      JSON.stringify([...this.authKey])
    );
    localStorage.setItem(
      `serverSalt${this.props.dc}`,
      JSON.stringify([...this.serverSalt])
    );
    console.log("write session from storage");
  }
  async ping() {
    let id = [...GetRandomValues(new Int32Array(2))] as ILong;
    let pong = await new Promise(r =>
      this.send({ name: "ping", method: new PingM().set_ping_id(id), cb: r })
    );
    if (pong instanceof PongS && pong.get_ping_id().join() === id.join()) {
      return true;
    }
    return false;
  }
  async getNearestDC() {
    let dc = await new Promise((r, c) =>
      this.send({
        name: "nearest dc",
        method: new HelpGetNearestDcM(),
        cb: r
      }).catch(c)
    );
    if (dc instanceof NearestDcS) {
      let nearest = dc.get_nearest_dc();
      for (let cb of this._onNearestDc) cb(nearest);
      return nearest;
    }
    return 0;
  }
  private async initConnection() {
    let readSession = this.readSessionFromStorage();

    if (!readSession || !(await this.getNearestDC())) {
      for (let i = 0; i < 4; i++) {
        try {
          await this.fetchPQ();
          await this.fetchDHParams();
          await this.mtpSendSetClientDhParams();
          let dc = await this.getNearestDC();
          if (!dc) continue;
          this.writeSessionToStorage();
          this.inited = true;
          if (this.shouldReimportAuth || this.user.isLoggedIn) {
            await this.reimportAuth();
          }
          break;
        } catch (e) {
          console.error(e.stack);
          continue;
        }
      }
    } else {
      this.inited = true;
    }
    if (!this.inited) {
      throw new Error("failed init connection");
    }
    this.longPool();

    while (this.callbacks.length) {
      if (!this.inited) return;
      await this.callbacks.pop()!();
    }
  }
  // longPoolID = "";
  longPoolSent = false;
  longPoolTime = 0;
  longPoolDelay = 1000;
  private async longPool(force = false) {
    if (this.longPoolSent && !force) return;
    this.longPoolSent = true;
    this.longPoolTime = Date.now();
    // if (!force && this.longPoolID) return;
    // let m =
    try {
      await this.send({
        name: "http_wait",
        method: new HttpWaitM()
          .set_max_delay(500)
          .set_max_wait(25000)
          .set_wait_after(150),
        retry: 1
      });
      // this.longPoolDelay = 100;
    } catch (e) {
      this.longPoolDelay *= 2;
      console.error(e.stack);
    } finally {
      setTimeout(() => {
        this.longPool(true);
      }, Math.max(this.longPoolDelay - (Date.now() - this.longPoolTime), 0));
    }
  }
  private async fetchPQ() {
    if (this.isDebug) console.log("fetch pq");
    let req = new ByteBuffer();
    this.writeTempHeader(req);
    req.writeStruct(MethodReqPq, [this.nonce]);

    let res = await this.mtpSendPlainRequest(req);
    req.destroy();

    let [, nonce, serverNonce, pq, fingers] = res.readStruct(TypeResPQ);
    assertEquals(nonce, this.nonce);
    this.publicKey = GetKeyByFingerPrints(fingers);
    this.serverNonce = serverNonce.slice();
    this.pq = pq.slice();
    res.destroy();
    [this.p, this.q] = await this.worker.pqPrimeFactorization(this.pq);
  }
  shouldReimportAuth = false;
  importingAuth = false;
  async reimportAuth() {
    if (this.importingAuth) return;
    if (!this.inited) {
      this.shouldReimportAuth = true;
      return;
    }
    try {
      this.inited = false;
      this.importingAuth = true;
      this.shouldReimportAuth = false;
      let userDC = this.props.apiInvoker.props.userStore().userDC;
      if (userDC === this.props.dc) return;
      let userConn = this.props.apiInvoker.connection(userDC);
      let auth = await CallAuthExportAuthorizationM(
        userConn,
        new AuthExportAuthorizationM().set_dc_id(this.props.dc)
      );
      if (auth instanceof RpcErrorS) return;
      let bytes = auth.get_bytes();
      let id = auth.get_id();
      let response = await new Promise(async cb => {
        // GetRandomValues(this.session);
        // this.connectionInited = false;
        // this.seq_no = 0;
        // this.authKey = bytes;
        // this.authKeyID = (await Sha1(bytes)).slice(-8);
        this.send({
          name: "import auth",
          method: new AuthImportAuthorizationM().set_bytes(bytes).set_id(id),
          cb
        });
      });
      if (response instanceof RpcErrorS) {
        return;
      }
    } finally {
      this.importingAuth = false;
      this.inited = true;
      let cb: undefined | (() => void);
      while ((cb = this.callbacks.pop())) cb();
    }
  }

  private async fetchDHParams() {
    if (this.isDebug) console.log("fetchDHParams");
    let dataWithHash = new ByteBuffer();
    dataWithHash.padding(5); // for sha1
    dataWithHash.writeStruct(TypePQInnerData, [
      this.pq,
      this.p,
      this.q,
      this.nonce,
      this.serverNonce,
      new Uint8Array(32)
    ]);

    let newNonce = dataWithHash.getBuffer8().subarray(-32);
    do {
      GetRandomValues(newNonce);
      let sha1 = await Sha1(dataWithHash.getBuffer32().subarray(5));
      dataWithHash.writeU8Aat(sha1, 0);
    } while (dataWithHash.getBuffer8()[0] > 127);
    this.newNonce = newNonce.slice();

    let encryptedData = await this.worker.rsaEncrypt(
      this.publicKey.finger,
      dataWithHash.getBuffer8()
    );
    dataWithHash.destroy();

    let req = new ByteBuffer();
    this.writeTempHeader(req);
    req.writeStruct(MethodReqDHParams, [
      this.nonce,
      this.serverNonce,
      this.p,
      this.q,
      this.publicKey.finger,
      encryptedData
    ]);
    let responseBuf = await this.mtpSendPlainRequest(req);
    let [type, nonce, serverNonce, encryptedResponse] = responseBuf.readStruct(
      TypeResDHParamsOk,
      TypeResDHParamsFail
    );

    if (type === TypeResDHParamsFail) {
      throw new Error("TypeResDHParamsFail");
    }
    assertEquals(nonce, this.nonce);
    assertEquals(serverNonce, this.serverNonce);

    await this.decryptServerDHData(encryptedResponse);
  }

  private async decryptServerDHData(encryptedData: Uint8Array) {
    if (this.isDebug) console.log("decryptServerDHData");
    let [
      shaServerNewNonce,
      shaNewNewNonce,
      shaNewServerNonce
    ] = await Promise.all([
      Sha1([...this.serverNonce, ...this.newNonce]),
      Sha1([...this.newNonce, ...this.newNonce]),
      Sha1([...this.newNonce, ...this.serverNonce])
    ]);
    // tmp_aes_key := SHA1(new_nonce + server_nonce) + substr (SHA1(server_nonce + new_nonce), 0, 12);
    this.tmpAesKey = new Uint8Array([
      ...shaNewServerNonce,
      ...shaServerNewNonce.slice(0, 12)
    ]);
    // tmp_aes_iv := substr (SHA1(server_nonce + new_nonce), 12, 8) + SHA1(new_nonce + new_nonce) + substr (new_nonce, 0, 4);
    this.tmpAesIv = new Uint8Array([
      ...shaServerNewNonce.slice(12, 12 + 8),
      ...shaNewNewNonce,
      ...this.newNonce.slice(0, 4)
    ]);
    let buffer = new ByteBuffer(
      await this.worker.aesDecrypt(encryptedData, this.tmpAesKey, this.tmpAesIv)
    );
    let hash = buffer.readU8A(5);
    let [, nonce, serverNonce, g, dhPrime, gA] = buffer.readStruct(
      TypeResDHParamsInner
    );
    this.g = g;
    this.dhPrime = dhPrime.slice();
    this.gA = gA.slice();
    assertEquals(nonce, this.nonce);
    assertEquals(serverNonce, this.serverNonce);

    if (g !== 3) throw new Error("bad dh params");
    if (!(await this.worker.verifyDhParams(dhPrime, gA))) {
      throw new Error("bad dh params");
    }
    let clientHash = await Sha1(
      buffer.getBuffer8().subarray(20, buffer.offset * 4)
    );
    assertEquals(hash, clientHash);
  }

  private async mtpSendSetClientDhParams() {
    if (this.isDebug) console.log("mtpSendSetClientDhParams");
    let b = GetRandomValues(new Uint8Array(2048 / 8));
    let gb = await this.worker.modPow(
      bytesFromHex(this.g.toString(16)),
      b,
      this.dhPrime
    );
    let innerData = new ByteBuffer();
    innerData.padding(5); // for sha1
    innerData.writeStruct(TypeClientDHInnerData, [
      this.nonce,
      this.serverNonce,
      [this.retry++, 0],
      gb
    ]);
    let hash = await Sha1(innerData.getBuffer32().subarray(5));
    innerData.writeU8Aat(hash, 0);
    let encryptedInnerData = await this.worker.aesEncrypt(
      innerData.getBuffer8(),
      this.tmpAesKey,
      this.tmpAesIv
    );
    let dec = await this.worker.aesDecrypt(
      encryptedInnerData,
      this.tmpAesKey,
      this.tmpAesIv
    );
    assertEquals(innerData.getBuffer8(), dec);
    innerData.destroy();

    let req = new ByteBuffer();
    this.writeTempHeader(req);
    req.writeStruct(MethodSetClientDHParams, [
      this.nonce,
      this.serverNonce,
      encryptedInnerData
    ]);
    let [res, authKey] = await Promise.all([
      this.mtpSendPlainRequest(req),
      this.worker.modPow(this.gA, b, this.dhPrime)
    ]);
    let [, nonce, serverNonce, newNonceHash] = res.readStruct(TypeDHGenOk);
    assertEquals(nonce, this.nonce);
    assertEquals(serverNonce, this.serverNonce);

    let authKeyHash = await Sha1(authKey);
    let authKeyAux = authKeyHash.slice(0, 8);
    let authKeyID = authKeyHash.slice(-8);

    let newNonceHash1 = (await Sha1([
      ...this.newNonce,
      1,
      ...authKeyAux
    ])).slice(-16);
    assertEquals(newNonceHash1, newNonceHash);

    let serverSalt = bytesXor(
      this.newNonce.slice(0, 8),
      this.serverNonce.slice(0, 8)
    );

    this.authKeyID = authKeyID;
    this.authKey = authKey;
    this.serverSalt = serverSalt;
  }

  async call(req: TMethod): Promise<any> {
    await this.ready();
    return new Promise(r =>
      this.send({
        name: Object.getPrototypeOf(req).constructor.name,
        method: req,
        cb: instance => {
          r(instance);
        }
      })
    );
  }
}

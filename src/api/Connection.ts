import { GetDcHref } from "const/dc";
import { GetKeyByFingerPrints, GetPublicKeyByDc } from "const/PublicKyes";
import { assertEquals } from "lib/assertEquals";
import { bytesFromHex } from "lib/BytesFromHex";
import { bytesXor } from "lib/bytesXor";
import { GetRandomValues } from "lib/GetRandomValues";
import { ILong } from "lib/ILong";
import { nextRandomInt } from "lib/nextRandomInt";
import { Sha1 } from "lib/Sha1";
import { WorkerClient } from "lib/WorkerClient";

import { ByteBuffer } from "./ByteBuffer";
import { NewNonce } from "./nonce";
import {
  BadServerSalt,
  IMethod,
  ITypeStruct,
  MethodReqDHParams,
  MethodReqPq,
  MethodSetClientDHParams,
  RpcError,
  RpcResult,
  TypeClientDHInnerData,
  TypeDHGenOk,
  TypeInitLayer,
  TypeMsgContainer,
  TypeNewSession,
  TypePQInnerData,
  TypeResDHParamsFail,
  TypeResDHParamsInner,
  TypeResDHParamsOk,
  TypeResPQ
} from "./schema";
import { TimeStore } from "./TimeStore";

export interface IConnectionProps {
  timeStore: TimeStore;
}

export class Connection {
  private props: IConnectionProps;
  private worker = new WorkerClient();

  private callbacks: Array<() => Promise<void> | void> = [];

  private dc = 2;
  private publicKey = GetPublicKeyByDc(this.dc);
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

  private requests = new Map<
    string,
    { method: IMethod; params: any[]; next: (...data: any[]) => void }
  >();

  constructor(props: IConnectionProps) {
    this.props = props;
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
  private async mtpSendPlainRequest(requestBuf: ByteBuffer) {
    let clientMsgID = this.props.timeStore.generateMessageID();

    requestBuf.writeLongAt(clientMsgID, 2);
    requestBuf.writeIntAt((requestBuf.size - 5) * 4, 4);

    let ping = performance.now() / 1000;
    let response = await fetch(GetDcHref(2, true), {
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
    console.log(JSON.stringify({ auth_key_id, msg_id: serverMsgID, msg_len }));

    return responseBuffer;
  }

  // async sendInitConnection() {
  //   await this.sendRequest()
  //   requestBuf.writeStruct(TypeInitLayer, [105]);
  //   requestBuf.writeStruct(TypeInitConnection, [
  //     0,
  //     25282,
  //     navigator.userAgent || "Unknown UserAgent",
  //     navigator.platform || "Unknown Platform",
  //     "1.0.0",
  //     navigator.language || "en",
  //     "",
  //     navigator.language || "en"
  //   ]);
  //   this.connectionInited = true;
  // }

  async sendRequest(method: IMethod, params: any[]) {
    let requestBuf = new ByteBuffer();
    requestBuf.writeStruct(TypeInitLayer, [105]);
    requestBuf.writeStruct(method, params);

    let clientMsgID = this.props.timeStore.generateMessageID();
    let waiter = { method, params, next: (...data: any[]) => {} };
    let promise = new Promise<any[]>(r => (waiter.next = r));
    this.requests.set(clientMsgID.join(), waiter);

    let req = new ByteBuffer();

    req.writeU8A(this.serverSalt);
    req.writeU8A(this.session);

    req.writeLong(clientMsgID);
    req.writeInt(this.seq_no++);
    req.writeInt(requestBuf.size * 4);
    req.append(requestBuf);

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

    fetch(GetDcHref(2, true), {
      method: "POST",
      body: reqWrap.getBuffer32(),
      mode: "cors"
    }).then(response => this.sendRequestOnResponse(response));

    return promise;
  }
  async sendRequestOnResponse(response: Response) {
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

    let res = new ByteBuffer(decrypted);
    res.requests = this.requests;
    res.readU8A(2); // salt
    let session = res.readU8A(2);
    let msgId = res.readLong();
    assertEquals(this.session, session);
    let seqNo = res.readInt();
    let msgLen = res.readInt();
    console.log(JSON.stringify({ msgId, seqNo, msgLen }));
    if (msgLen % 4 || msgLen / 4 > res.size - res.offset) {
      throw new Error("bad len");
    }
    res.size = res.offset + msgLen / 4;

    // this.props.timeStore.syncWithServer(clientMsgID, serverMsgID, ping);
    // console.log(JSON.stringify({ auth_key_id, msg_id: serverMsgID, msg_len }));
    // let [t, [...messages]] = res.readStruct();
    // if (t !== TypeMsgContainer) throw new Error("not msg container");

    return this.processMessages(res.readStruct());
  }

  processMessages(m: any): [ITypeStruct, ...any[]] {
    let messages = m[1];
    if (m[0] !== TypeMsgContainer) messages = [[, , , m]];

    return messages
      .map(([id, , , msg]: any) => [id, msg])
      .filter(([id, m]: [ILong, [ITypeStruct, ...any[]]]) => {
        // if (this.requests.has(id.join())) {
        //   let waiter = this.requests.get(id.join())!;
        //   this.requests.delete(id.join());
        //   waiter.next(m);
        //   return false;
        // }
        if (this.requests.has(m[1].join())) {
          let waiter = this.requests.get(m[1].join())!;
          if (
            m[0] === RpcError ||
            waiter.method.slice(2).find(t => m[0] === t)
          ) {
            this.requests.delete(m[1].join());
            waiter.next(m);
            return false;
          }
        }
        let serverSalt;
        switch (m[0]) {
          case BadServerSalt:
            [, , , , serverSalt] = m;
            this.serverSalt = serverSalt.slice();
            return false;
          case TypeNewSession:
            [, , , serverSalt] = m;
            this.serverSalt = serverSalt.slice();
            return false;
          case RpcResult:
            if (this.requests.has(m[1].join())) {
              let waiter = this.requests.get(m[1].join())!;
              if (
                m[2][0] === RpcError ||
                waiter.method.slice(2).find(t => m[2][0] === t)
              ) {
                this.requests.delete(m[1].join());
                waiter.next(m[2]);
                return false;
              }
            }
            return true;
          default:
            return true;
        }
      })
      .map(([id, m]: [ILong, [ITypeStruct, ...any[]]]) => {
        console.error("unexpected message", id.join(), m);
        return m;
      });
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
  private async initConnection() {
    for (let i = 0; i < 4; i++) {
      try {
        await this.fetchPQ();
        await this.fetchDHParams();
        await this.mtpSendSetClientDhParams();
        this.inited = true;

        while (this.callbacks.length) {
          if (!this.inited) return;
          await this.callbacks.pop()!();
        }
        break;
      } catch (e) {
        console.error(e.stack);
        continue;
      }
    }
  }
  private async fetchPQ() {
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

  private async fetchDHParams() {
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
}

import { BigInteger } from "jsbn";

import { GetDcHref } from "const/dc";
import { GetKeyByFingerPrints, IPublicKey } from "const/PublicKyes";
import { Factorize } from "lib/factorization";
import { Factorize2 } from "lib/factorization2";
import { pqPrimeFactorization } from "lib/pqPrimeFactorization";
import { rsaEncrypt } from "lib/RsaEncrypt";

import { ByteBuffer } from "./ByteBuffer";
import { NewNonce } from "./nonce";
import { MethodReqDHParams, MethodReqPq, TypePQInnerData } from "./schema";
import { TimeStore } from "./TimeStore";

export interface IConnectionProps {
  timeStore: TimeStore;
}

export class Connection {
  props: IConnectionProps;
  dc = 2;
  publicKey: IPublicKey | null = null;
  nonce = NewNonce();
  serverNonce: Uint8Array | null = null;
  pq: Uint8Array | null = null;
  p: Uint8Array | null = null;
  q: Uint8Array | null = null;

  constructor(props: IConnectionProps) {
    this.props = props;
  }

  authKey: ArrayBuffer | null = null;
  serverSaltHex: ArrayBuffer | null = null;

  async mtpSendPlainRequest(requestBuf: ByteBuffer) {
    let apiHref = GetDcHref(2, true);
    // console.log(requestBuf.getBuffer());
    let response = await fetch(apiHref, {
      method: "POST",
      body: requestBuf.getBuffer(),
      mode: "cors"
    });
    let responseBuffer = new ByteBuffer(
      new Uint32Array(await response.arrayBuffer())
    );
    let auth_key_id = responseBuffer.readLong();
    let msg_id = responseBuffer.readLong();
    let msg_len = responseBuffer.readInt();

    console.log({ auth_key_id, msg_id, msg_len });
    return responseBuffer;
    // let requestData = xhrSendBuffer ? resultBuffer : resultArray,
    //   requestPromise;
    // let url = MtpDcConfigurator.chooseServer(dcID);
    // let baseError = { code: 406, type: "NETWORK_BAD_RESPONSE", url: url };
    // try {
    //   requestPromise = $http.post(url, requestData, {
    //     responseType: "arraybuffer",
    //     transformRequest: null
    //   });
    // } catch (e) {
    //   requestPromise = $q.reject(
    //     angular.extend(baseError, { originalError: e })
    //   );
    // }
    // return requestPromise.then(
    //   function(result) {
    //     if (!result.data || !result.data.byteLength) {
    //       return $q.reject(baseError);
    //     }

    //     try {
    //       let deserializer = new TLDeserialization(result.data, {
    //         mtproto: true
    //       });
    //       let auth_key_id = deserializer.fetchLong("auth_key_id");
    //       let msg_id = deserializer.fetchLong("msg_id");
    //       let msg_len = deserializer.fetchInt("msg_len");
    //     } catch (e) {
    //       return $q.reject(angular.extend(baseError, { originalError: e }));
    //     }

    //     return deserializer;
    //   },
    //   function(error) {
    //     if (!error.message && !error.type) {
    //       error = angular.extend(baseError, { originalError: error });
    //     }
    //     return $q.reject(error);
    //   }
    // );
  }

  writeTempHeader(requestBuf: ByteBuffer) {
    requestBuf.writeLong([0, 0]); // Auth key
    requestBuf.writeLong(this.props.timeStore.generateMessageID());
    requestBuf.writeInt(0);
  }
  writeHeaderRequestSize(requestBuf: ByteBuffer) {
    requestBuf.writeIntAt((requestBuf.size - 5) * 4, 4);
  }

  async fetchPQ(retry = 3) {
    let requestBuf = new ByteBuffer();
    this.writeTempHeader(requestBuf);
    requestBuf.writeStruct(MethodReqPq, [this.nonce]);
    this.writeHeaderRequestSize(requestBuf);
    let responseBuf = await this.mtpSendPlainRequest(requestBuf);
    requestBuf.destroy();
    let [
      nonce,
      serverNonce,
      pq,
      serverPublicKeyFingerprints
    ] = responseBuf.readStruct(MethodReqPq[2]);
    this.publicKey = GetKeyByFingerPrints(serverPublicKeyFingerprints);
    // console.log(this.nonce.slice(), nonce.slice());
    this.nonce = nonce;
    this.serverNonce = serverNonce;
    this.pq = pq;

    // console.log(
    //   "pq",
    //   [...new Uint32Array(this.pq!.slice().reverse().buffer)].map(v => v | 0)
    // );
    console.time("pqPrimeFactorization");
    [this.p, this.q] = pqPrimeFactorization(this.pq!);
    console.timeEnd("pqPrimeFactorization");
    // console.log(
    //   "p",
    //   [...new Uint32Array(this.p!.slice().reverse().buffer)].map(v => v | 0)
    // );
    // console.log(
    //   "q",
    //   [...new Uint32Array(this.q!.slice().reverse().buffer)].map(v => v | 0)
    // );
    // let t2 = Date.now();
    // let ab = pqPrimeLong([
    //   ...new Uint32Array(this.pq!.slice().reverse().buffer)
    // ] as ILong);
    // let t3 = Date.now();
    // console.log(
    //   t3 - t2,
    //   t2 - t1,
    //   ab,
    //   [...new Uint32Array(this.p!.slice().reverse().buffer)],
    //   [...new Uint32Array(this.q!.slice().reverse().buffer)]
    // );
    // responseBuf.destroy();
    let pqb = toBI(this.pq!);
    console.time("Factorize");
    let pb = Factorize(pqb);
    console.timeEnd("Factorize");

    console.time("Factorize2");
    let pb2 = toBI(
      new Uint8Array(Factorize2(new BigInteger([...this.pq!])).toByteArray())
    );
    console.timeEnd("Factorize2");

    console.log(
      toBI(this.pq!),
      toBI(this.p!) * toBI(this.q!),
      toBI(this.p!),
      toBI(this.q!),
      pb,
      pqb / pb,

      pb2
    );
    await this.fetchDHParams(retry);
  }

  async fetchDHParams(retry = 3) {
    let newNonce = crypto.getRandomValues(new Uint8Array(32));
    let data = new ByteBuffer();
    data.writeStruct(TypePQInnerData, [
      this.pq!,
      this.p!,
      this.q!,
      this.nonce,
      this.serverNonce,
      newNonce
    ]);
    // console.log(data.getBuffer());
    let dataSha1 = await crypto.subtle.digest("SHA-1", data.getBuffer());
    // console.log(dataSha1);
    let dataWithHash = new ByteBuffer();
    dataWithHash.writeU8A(new Uint8Array(dataSha1));
    dataWithHash.append(data);

    // let padding = 190 - dataWithHash.size * 4;
    // if (padding > 0) {
    //   let random = new Uint8Array(padding);
    //   random = crypto.getRandomValues(random);
    //   dataWithHash.writeU8A(random);
    // }

    // console.log(dataWithHash.getBuffer());
    // crypto.subtle.importKey("pkcs8", convertPemToBinary(pemKey), {name:"RSA-OAEP", hash:{name:"SHA-256"}}, true, ["encrypt", "decrypt"]);}
    // let key: CryptoKey | null = null;

    let buf = new Uint8Array(dataWithHash.getBuffer().slice().buffer);
    console.log(buf.length);
    // key = await crypto.subtle.importKey(
    //   "spki",
    //   this.publicKey!.key!,
    //   {
    //     name: "RSA-OAEP",
    //     hash: "SHA-256"
    //   },
    //   true,
    //   ["encrypt"]
    // );

    // console.log(key);
    // let encryptedData = await crypto.subtle.encrypt(
    //   { name: "RSA-OAEP" },
    //   key!,
    //   buf
    // );
    let encryptedData = rsaEncrypt(this.publicKey!, buf);
    console.log(encryptedData);

    let req = new ByteBuffer();
    this.writeTempHeader(req);
    req.writeStruct(MethodReqDHParams, [
      this.nonce,
      this.serverNonce,
      this.p!,
      this.q!,
      this.publicKey!.finger,
      encryptedData
    ]);
    this.writeHeaderRequestSize(req);
    let responseBuf: ByteBuffer;
    try {
      responseBuf = await this.mtpSendPlainRequest(req);
    } catch (e) {
      console.error(e.message);
      if (!retry) throw e;
      await this.fetchPQ(retry - 1);
      return;
    }
    console.log(responseBuf);
  }
}

let toBI = (a: Uint8Array) =>
  [...new Uint32Array(a.slice().reverse().buffer)]
    .map(BigInt)
    .reverse()
    .reduce((a, b) => (a << 32n) + b, 0n);

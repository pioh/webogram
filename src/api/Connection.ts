import { GetDcHref } from "const/dc";

import { ByteBuffer } from "./ByteBuffer";
import { NewNonce } from "./nonce";
import { MethodReqPq } from "./schema";
import { TimeStore } from "./TimeStore";

export interface IConnectionProps {
  timeStore: TimeStore;
}

export class Connection {
  props: IConnectionProps;
  dc = 2;
  nonce = NewNonce();

  constructor(props: IConnectionProps) {
    this.props = props;
  }

  authKey: ArrayBuffer | null = null;
  serverSaltHex: ArrayBuffer | null = null;

  async mtpSendPlainRequest(requestBuf: ByteBuffer) {
    let apiHref = GetDcHref(2, true);
    console.log(requestBuf.getBuffer());
    let response = await fetch(apiHref, {
      method: "POST",
      body: requestBuf.getBuffer(),
      mode: "cors"
    });
    let responseBuffer = await response.arrayBuffer();
    console.log(responseBuffer);
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

  async fetchPQ() {
    let requestBuf = new ByteBuffer();
    this.writeTempHeader(requestBuf);
    requestBuf.writeMethod(MethodReqPq, [this.nonce]);
    this.writeHeaderRequestSize(requestBuf);
    await this.mtpSendPlainRequest(requestBuf);
    requestBuf.destroy();

    //     mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(
    //       function(deserializer) {
    //         let response = deserializer.fetchObject("ResPQ");

    //         if (response._ != "resPQ") {
    //           throw new Error("[MT] resPQ response invalid: " + response._);
    //         }

    //         if (!bytesCmp(auth.nonce, response.nonce)) {
    //           throw new Error("[MT] resPQ nonce mismatch");
    //         }

    //         auth.serverNonce = response.server_nonce;
    //         auth.pq = response.pq;
    //         auth.fingerprints = response.server_public_key_fingerprints;

    //         console.log(
    //           dT(),
    //           "Got ResPQ",
    //           bytesToHex(auth.serverNonce),
    //           bytesToHex(auth.pq),
    //           auth.fingerprints
    //         );

    //         auth.publicKey = MtpRsaKeysManager.select(auth.fingerprints);

    //         if (!auth.publicKey) {
    //           throw new Error("[MT] No public key found");
    //         }

    //         console.log(dT(), "PQ factorization start", auth.pq);
    //         CryptoWorker.factorize(auth.pq).then(
    //           function(pAndQ) {
    //             auth.p = pAndQ[0];
    //             auth.q = pAndQ[1];
    //             console.log(dT(), "PQ factorization done", pAndQ[2]);
    //             mtpSendReqDhParams(auth);
    //           },
    //           function(error) {
    //             console.log("Worker error", error, error.stack);
    //             deferred.reject(error);
    //           }
    //         );
    //       },
    //       function(error) {
    //         console.error(dT(), "req_pq error", error.message);
    //         deferred.reject(error);
    //       }
    //     );

    //     $timeout(function() {
    //       MtpRsaKeysManager.prepare();
    //     });
  }
}

export interface IMtpAuthorizerProps {
  MtpDcConfigurator: any;
  MtpRsaKeysManager: any;
  MtpSecureRandom: any;
  MtpTimeManager: any;
  CryptoWorker: any;
}

export class MtpAuthorizer {}

// let chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/);
// let chromeVersion = (chromeMatches && parseFloat(chromeMatches[1])) || false;
// let xhrSendBuffer =
//   !("ArrayBufferView" in window) && (chromeVersion > 0 && chromeVersion < 30);

// delete $http.defaults.headers.post["Content-Type"];
// delete $http.defaults.headers.common.Accept;

// function mtpSendPlainRequest(dcID, requestBuffer) {
//   let requestLength = requestBuffer.byteLength,
//     requestArray = new Int32Array(requestBuffer);

//   let header = new TLSerialization();
//   header.storeLongP(0, 0, "auth_key_id"); // Auth key
//   header.storeLong(MtpTimeManager.generateID(), "msg_id"); // Msg_id
//   header.storeInt(requestLength, "request_length");

//   let headerBuffer = header.getBuffer(),
//     headerArray = new Int32Array(headerBuffer);
//   let headerLength = headerBuffer.byteLength;

//   let resultBuffer = new ArrayBuffer(headerLength + requestLength),
//     resultArray = new Int32Array(resultBuffer);

//   resultArray.set(headerArray);
//   resultArray.set(requestArray, headerArray.length);

//   let requestData = xhrSendBuffer ? resultBuffer : resultArray,
//     requestPromise;
//   let url = MtpDcConfigurator.chooseServer(dcID);
//   let baseError = { code: 406, type: "NETWORK_BAD_RESPONSE", url: url };
//   try {
//     requestPromise = $http.post(url, requestData, {
//       responseType: "arraybuffer",
//       transformRequest: null
//     });
//   } catch (e) {
//     requestPromise = $q.reject(angular.extend(baseError, { originalError: e }));
//   }
//   return requestPromise.then(
//     function(result) {
//       if (!result.data || !result.data.byteLength) {
//         return $q.reject(baseError);
//       }

//       try {
//         let deserializer = new TLDeserialization(result.data, {
//           mtproto: true
//         });
//         let auth_key_id = deserializer.fetchLong("auth_key_id");
//         let msg_id = deserializer.fetchLong("msg_id");
//         let msg_len = deserializer.fetchInt("msg_len");
//       } catch (e) {
//         return $q.reject(angular.extend(baseError, { originalError: e }));
//       }

//       return deserializer;
//     },
//     function(error) {
//       if (!error.message && !error.type) {
//         error = angular.extend(baseError, { originalError: error });
//       }
//       return $q.reject(error);
//     }
//   );
// }

// function mtpSendReqPQ(auth) {
//   let deferred = auth.deferred;

//   let request = new TLSerialization({ mtproto: true });

//   request.storeMethod("req_pq", { nonce: auth.nonce });

//   console.log(dT(), "Send req_pq", bytesToHex(auth.nonce));
//   mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(
//     function(deserializer) {
//       let response = deserializer.fetchObject("ResPQ");

//       if (response._ != "resPQ") {
//         throw new Error("[MT] resPQ response invalid: " + response._);
//       }

//       if (!bytesCmp(auth.nonce, response.nonce)) {
//         throw new Error("[MT] resPQ nonce mismatch");
//       }

//       auth.serverNonce = response.server_nonce;
//       auth.pq = response.pq;
//       auth.fingerprints = response.server_public_key_fingerprints;

//       console.log(
//         dT(),
//         "Got ResPQ",
//         bytesToHex(auth.serverNonce),
//         bytesToHex(auth.pq),
//         auth.fingerprints
//       );

//       auth.publicKey = MtpRsaKeysManager.select(auth.fingerprints);

//       if (!auth.publicKey) {
//         throw new Error("[MT] No public key found");
//       }

//       console.log(dT(), "PQ factorization start", auth.pq);
//       CryptoWorker.factorize(auth.pq).then(
//         function(pAndQ) {
//           auth.p = pAndQ[0];
//           auth.q = pAndQ[1];
//           console.log(dT(), "PQ factorization done", pAndQ[2]);
//           mtpSendReqDhParams(auth);
//         },
//         function(error) {
//           console.log("Worker error", error, error.stack);
//           deferred.reject(error);
//         }
//       );
//     },
//     function(error) {
//       console.error(dT(), "req_pq error", error.message);
//       deferred.reject(error);
//     }
//   );

//   $timeout(function() {
//     MtpRsaKeysManager.prepare();
//   });
// }

// function mtpSendReqDhParams(auth) {
//   let deferred = auth.deferred;

//   auth.newNonce = new Array(32);
//   MtpSecureRandom.nextBytes(auth.newNonce);

//   let data = new TLSerialization({ mtproto: true });
//   data.storeObject(
//     {
//       _: "p_q_inner_data",
//       pq: auth.pq,
//       p: auth.p,
//       q: auth.q,
//       nonce: auth.nonce,
//       server_nonce: auth.serverNonce,
//       new_nonce: auth.newNonce
//     },
//     "P_Q_inner_data",
//     "DECRYPTED_DATA"
//   );

//   let dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

//   let request = new TLSerialization({ mtproto: true });
//   request.storeMethod("req_DH_params", {
//     nonce: auth.nonce,
//     server_nonce: auth.serverNonce,
//     p: auth.p,
//     q: auth.q,
//     public_key_fingerprint: auth.publicKey.fingerprint,
//     encrypted_data: rsaEncrypt(auth.publicKey, dataWithHash)
//   });

//   console.log(dT(), "Send req_DH_params");
//   mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(
//     function(deserializer) {
//       let response = deserializer.fetchObject("Server_DH_Params", "RESPONSE");

//       if (
//         response._ != "server_DH_params_fail" &&
//         response._ != "server_DH_params_ok"
//       ) {
//         deferred.reject(
//           new Error("[MT] Server_DH_Params response invalid: " + response._)
//         );
//         return false;
//       }

//       if (!bytesCmp(auth.nonce, response.nonce)) {
//         deferred.reject(new Error("[MT] Server_DH_Params nonce mismatch"));
//         return false;
//       }

//       if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
//         deferred.reject(
//           new Error("[MT] Server_DH_Params server_nonce mismatch")
//         );
//         return false;
//       }

//       if (response._ == "server_DH_params_fail") {
//         let newNonceHash = sha1BytesSync(auth.newNonce).slice(-16);
//         if (!bytesCmp(newNonceHash, response.new_nonce_hash)) {
//           deferred.reject(
//             new Error("[MT] server_DH_params_fail new_nonce_hash mismatch")
//           );
//           return false;
//         }
//         deferred.reject(new Error("[MT] server_DH_params_fail"));
//         return false;
//       }

//       try {
//         mtpDecryptServerDhDataAnswer(auth, response.encrypted_answer);
//       } catch (e) {
//         deferred.reject(e);
//         return false;
//       }

//       mtpSendSetClientDhParams(auth);
//     },
//     function(error) {
//       deferred.reject(error);
//     }
//   );
// }

// function mtpDecryptServerDhDataAnswer(auth, encryptedAnswer) {
//   auth.localTime = tsNow();

//   auth.tmpAesKey = sha1BytesSync(auth.newNonce.concat(auth.serverNonce)).concat(
//     sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(0, 12)
//   );
//   auth.tmpAesIv = sha1BytesSync(auth.serverNonce.concat(auth.newNonce))
//     .slice(12)
//     .concat(
//       sha1BytesSync([].concat(auth.newNonce, auth.newNonce)),
//       auth.newNonce.slice(0, 4)
//     );

//   let answerWithHash = aesDecryptSync(
//     encryptedAnswer,
//     auth.tmpAesKey,
//     auth.tmpAesIv
//   );

//   let hash = answerWithHash.slice(0, 20);
//   let answerWithPadding = answerWithHash.slice(20);
//   let buffer = bytesToArrayBuffer(answerWithPadding);

//   let deserializer = new TLDeserialization(buffer, { mtproto: true });
//   let response = deserializer.fetchObject("Server_DH_inner_data");

//   if (response._ != "server_DH_inner_data") {
//     throw new Error(
//       "[MT] server_DH_inner_data response invalid: " + constructor
//     );
//   }

//   if (!bytesCmp(auth.nonce, response.nonce)) {
//     throw new Error("[MT] server_DH_inner_data nonce mismatch");
//   }

//   if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
//     throw new Error("[MT] server_DH_inner_data serverNonce mismatch");
//   }

//   console.log(dT(), "Done decrypting answer");
//   auth.g = response.g;
//   auth.dhPrime = response.dh_prime;
//   auth.gA = response.g_a;
//   auth.serverTime = response.server_time;
//   auth.retry = 0;

//   mtpVerifyDhParams(auth.g, auth.dhPrime, auth.gA);

//   let offset = deserializer.getOffset();

//   if (!bytesCmp(hash, sha1BytesSync(answerWithPadding.slice(0, offset)))) {
//     throw new Error("[MT] server_DH_inner_data SHA1-hash mismatch");
//   }

//   MtpTimeManager.applyServerTime(auth.serverTime, auth.localTime);
// }

// function mtpVerifyDhParams(g, dhPrime, gA) {
//   console.log(dT(), "Verifying DH params");
//   let dhPrimeHex = bytesToHex(dhPrime);
//   if (
//     g != 3 ||
//     dhPrimeHex !==
//       "c71caeb9c6b1c9048e6c522f70f13f73980d40238e3e21c14934d037563d930f48198a0aa7c14058229493d22530f4dbfa336f6e0ac925139543aed44cce7c3720fd51f69458705ac68cd4fe6b6b13abdc9746512969328454f18faf8c595f642477fe96bb2a941d5bcd1d4ac8cc49880708fa9b378e3c4f3a9060bee67cf9a4a4a695811051907e162753b56b0f6b410dba74d8a84b2a14b3144e0ef1284754fd17ed950d5965b4b9dd46582db1178d169c6bc465b0d6ff9ca3928fef5b9ae4e418fc15e83ebea0f87fa9ff5eed70050ded2849f47bf959d956850ce929851f0d8115f635b105ee2e4e15d04b2454bf6f4fadf034b10403119cd8e3b92fcc5b"
//   ) {
//     // The verified value is from https://core.telegram.org/mtproto/security_guidelines
//     throw new Error("[MT] DH params are not verified: unknown dhPrime");
//   }
//   console.log(dT(), "dhPrime cmp OK");

//   let gABigInt = new BigInteger(bytesToHex(gA), 16);
//   let dhPrimeBigInt = new BigInteger(dhPrimeHex, 16);

//   if (gABigInt.compareTo(BigInteger.ONE) <= 0) {
//     throw new Error("[MT] DH params are not verified: gA <= 1");
//   }

//   if (gABigInt.compareTo(dhPrimeBigInt.subtract(BigInteger.ONE)) >= 0) {
//     throw new Error("[MT] DH params are not verified: gA >= dhPrime - 1");
//   }
//   console.log(dT(), "1 < gA < dhPrime-1 OK");

//   let two = new BigInteger(null);
//   two.fromInt(2);
//   let twoPow = two.pow(2048 - 64);

//   if (gABigInt.compareTo(twoPow) < 0) {
//     throw new Error("[MT] DH params are not verified: gA < 2^{2048-64}");
//   }
//   if (gABigInt.compareTo(dhPrimeBigInt.subtract(twoPow)) >= 0) {
//     throw new Error(
//       "[MT] DH params are not verified: gA > dhPrime - 2^{2048-64}"
//     );
//   }
//   console.log(dT(), "2^{2048-64} < gA < dhPrime-2^{2048-64} OK");

//   return true;
// }

// function mtpSendSetClientDhParams(auth) {
//   let deferred = auth.deferred;
//   let gBytes = bytesFromHex(auth.g.toString(16));

//   auth.b = new Array(256);
//   MtpSecureRandom.nextBytes(auth.b);

//   CryptoWorker.modPow(gBytes, auth.b, auth.dhPrime).then(
//     function(gB) {
//       let data = new TLSerialization({ mtproto: true });
//       data.storeObject(
//         {
//           _: "client_DH_inner_data",
//           nonce: auth.nonce,
//           server_nonce: auth.serverNonce,
//           retry_id: [0, auth.retry++],
//           g_b: gB
//         },
//         "Client_DH_Inner_Data"
//       );

//       let dataWithHash = sha1BytesSync(data.getBuffer()).concat(
//         data.getBytes()
//       );

//       let encryptedData = aesEncryptSync(
//         dataWithHash,
//         auth.tmpAesKey,
//         auth.tmpAesIv
//       );

//       let request = new TLSerialization({ mtproto: true });
//       request.storeMethod("set_client_DH_params", {
//         nonce: auth.nonce,
//         server_nonce: auth.serverNonce,
//         encrypted_data: encryptedData
//       });

//       console.log(dT(), "Send set_client_DH_params");
//       mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(
//         function(deserializer) {
//           let response = deserializer.fetchObject(
//             "Set_client_DH_params_answer"
//           );

//           if (
//             response._ != "dh_gen_ok" &&
//             response._ != "dh_gen_retry" &&
//             response._ != "dh_gen_fail"
//           ) {
//             deferred.reject(
//               new Error(
//                 "[MT] Set_client_DH_params_answer response invalid: " +
//                   response._
//               )
//             );
//             return false;
//           }

//           if (!bytesCmp(auth.nonce, response.nonce)) {
//             deferred.reject(
//               new Error("[MT] Set_client_DH_params_answer nonce mismatch")
//             );
//             return false;
//           }

//           if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
//             deferred.reject(
//               new Error(
//                 "[MT] Set_client_DH_params_answer server_nonce mismatch"
//               )
//             );
//             return false;
//           }

//           CryptoWorker.modPow(auth.gA, auth.b, auth.dhPrime).then(
//             function(authKey) {
//               let authKeyHash = sha1BytesSync(authKey),
//                 authKeyAux = authKeyHash.slice(0, 8),
//                 authKeyID = authKeyHash.slice(-8);

//               console.log(dT(), "Got Set_client_DH_params_answer", response._);
//               switch (response._) {
//                 case "dh_gen_ok":
//                   let newNonceHash1 = sha1BytesSync(
//                     auth.newNonce.concat([1], authKeyAux)
//                   ).slice(-16);

//                   if (!bytesCmp(newNonceHash1, response.new_nonce_hash1)) {
//                     deferred.reject(
//                       new Error(
//                         "[MT] Set_client_DH_params_answer new_nonce_hash1 mismatch"
//                       )
//                     );
//                     return false;
//                   }

//                   let serverSalt = bytesXor(
//                     auth.newNonce.slice(0, 8),
//                     auth.serverNonce.slice(0, 8)
//                   );
//                   // console.log('Auth successfull!', authKeyID, authKey, serverSalt)

//                   auth.authKeyID = authKeyID;
//                   auth.authKey = authKey;
//                   auth.serverSalt = serverSalt;

//                   deferred.resolve(auth);
//                   break;

//                 case "dh_gen_retry":
//                   let newNonceHash2 = sha1BytesSync(
//                     auth.newNonce.concat([2], authKeyAux)
//                   ).slice(-16);
//                   if (!bytesCmp(newNonceHash2, response.new_nonce_hash2)) {
//                     deferred.reject(
//                       new Error(
//                         "[MT] Set_client_DH_params_answer new_nonce_hash2 mismatch"
//                       )
//                     );
//                     return false;
//                   }

//                   return mtpSendSetClientDhParams(auth);

//                 case "dh_gen_fail":
//                   let newNonceHash3 = sha1BytesSync(
//                     auth.newNonce.concat([3], authKeyAux)
//                   ).slice(-16);
//                   if (!bytesCmp(newNonceHash3, response.new_nonce_hash3)) {
//                     deferred.reject(
//                       new Error(
//                         "[MT] Set_client_DH_params_answer new_nonce_hash3 mismatch"
//                       )
//                     );
//                     return false;
//                   }

//                   deferred.reject(
//                     new Error("[MT] Set_client_DH_params_answer fail")
//                   );
//                   return false;
//               }
//             },
//             function(error) {
//               deferred.reject(error);
//             }
//           );
//         },
//         function(error) {
//           deferred.reject(error);
//         }
//       );
//     },
//     function(error) {
//       deferred.reject(error);
//     }
//   );
// }

// let cached = {};

// function mtpAuth(dcID) {
//   if (cached[dcID] !== undefined) {
//     return cached[dcID];
//   }

//   let nonce = [];
//   for (let i = 0; i < 16; i++) {
//     nonce.push(nextRandomInt(0xff));
//   }

//   if (!MtpDcConfigurator.chooseServer(dcID)) {
//     return $q.reject(new Error("[MT] No server found for dc " + dcID));
//   }

//   let auth = {
//     dcID: dcID,
//     nonce: nonce,
//     deferred: $q.defer()
//   };

//   $timeout(function() {
//     mtpSendReqPQ(auth);
//   });

//   cached[dcID] = auth.deferred.promise;

//   cached[dcID].catch(function() {
//     delete cached[dcID];
//   });

//   return cached[dcID];
// }

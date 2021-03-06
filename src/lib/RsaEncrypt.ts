import { BigInteger } from "jsbn";

import { IPublicKey } from "const/PublicKyes";

import { bytesFromBigInt } from "./BytesFromBigInt";
import { GetRandomValues } from "./GetRandomValues";

export function addPadding(bytes: Uint8Array, blockSize = 16, zeroes = false) {
  let len = bytes.byteLength;
  let needPadding = blockSize - (len % blockSize);
  if (needPadding > 0 && needPadding < blockSize) {
    let padding = new Uint8Array(needPadding);
    if (zeroes) {
      for (let i = 0; i < needPadding; i++) {
        padding[i] = 0;
      }
    } else {
      GetRandomValues(padding);
    }
    bytes = new Uint8Array([...bytes, ...padding]);
  }

  return bytes;
}

export function RsaEncrypt(publicKey: IPublicKey, bytes: Uint8Array) {
  // let padding = 190 - dataWithHash.size * 4;
  // if (padding > 0) {
  //   let random = new Uint8Array(padding);
  //   random = crypto.getRandomValues(random);
  //   dataWithHash.writeU8A(random);
  // }
  // console.log(dataWithHash.getBuffer());
  // crypto.subtle.importKey("pkcs8", convertPemToBinary(pemKey), {name:"RSA-OAEP", hash:{name:"SHA-256"}}, true, ["encrypt", "decrypt"]);}
  // let encryptedData = await crypto.subtle.encrypt(
  //   { name: "RSA-OAEP" },
  //   key!,
  //   buf
  // );

  bytes = addPadding(bytes, 255);
  // if (b[0] > 127) b[0] *= -1;
  //   console.log(publicKey.modulus);
  // console.log('RSA encrypt start')
  let N = new BigInteger(publicKey.modulus!, 16);
  let E = new BigInteger(publicKey.exponent!, 16);
  let X = new BigInteger([...bytes]);

  let encryptedBigInt = X.modPowInt(E.intValue(), N);
  let encryptedBytes = bytesFromBigInt(encryptedBigInt, 256);
  // console.log('RSA encrypt finish')

  return encryptedBytes;
}

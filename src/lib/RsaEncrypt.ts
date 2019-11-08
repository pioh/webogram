import { BigInteger } from "jsbn";

import { IPublicKey } from "const/PublicKyes";

import { bytesFromBigInt } from "./BytesFromBigInt";

function addPadding(bytes: Uint8Array, blockSize = 16, zeroes = false) {
  let len = bytes.byteLength;
  let needPadding = blockSize - (len % blockSize);
  if (needPadding > 0 && needPadding < blockSize) {
    let padding = new Uint8Array(needPadding);
    if (zeroes) {
      for (let i = 0; i < needPadding; i++) {
        padding[i] = 0;
      }
    } else {
      crypto.getRandomValues(padding);
    }
    bytes = new Uint8Array([...bytes, ...padding]);
  }

  return bytes;
}

export function rsaEncrypt(publicKey: IPublicKey, bytes: Uint8Array) {
  bytes = addPadding(bytes, 255);
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

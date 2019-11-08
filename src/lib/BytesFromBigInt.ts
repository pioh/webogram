import { BigInteger } from "jsbn";

export function bytesFromBigInt(bigInt: BigInteger, len: number) {
  let bytes = bigInt.toByteArray();

  if (len && bytes.length < len) {
    let padding = [];
    for (let i = 0, needPadding = len - bytes.length; i < needPadding; i++) {
      padding[i] = 0;
    }
    if (bytes instanceof ArrayBuffer) bytes = [...new Uint8Array(bytes)];
    bytes = padding.concat(bytes);
  } else {
    while (!bytes[0] && (!len || bytes.length > len)) {
      bytes = bytes.slice(1);
    }
  }

  return new Uint8Array(bytes);
}

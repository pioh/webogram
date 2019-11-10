import { BigInteger } from "jsbn";

import { ILong } from "./ILong";
export function bigint(num: number) {
  return new BigInteger(num.toString(16), 16);
}
export function bigStringInt(strNum: ILong) {
  return new BigInteger(strNum);
}
export function longToInts(sLong: ILong) {
  let divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000));

  return [divRem[0].intValue(), divRem[1].intValue()];
}
export function bytesFromWords(wordArray: {
  words: number[];
  sigBytes: number;
}) {
  let words = wordArray.words;
  let sigBytes = wordArray.sigBytes;
  let bytes = [];

  for (let i = 0; i < sigBytes; i++) {
    bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff);
  }

  return bytes;
}
export function longToBytes(sLong: ILong) {
  return new Uint8Array(
    bytesFromWords({ words: longToInts(sLong), sigBytes: 8 }).reverse()
  );
}

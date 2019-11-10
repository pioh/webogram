import { BigInteger } from "jsbn";
import { bigInt2str, powMod, str2bigInt } from "leemon/es/index.js";

import { bytesFromBigInt } from "./BytesFromBigInt";
import { bytesFromHex } from "./BytesFromHex";
import { bytesToHex } from "./BytesToHex";

export function bytesModPow(x: Uint8Array, y: Uint8Array, m: Uint8Array) {
  try {
    let xBigInt = str2bigInt(bytesToHex(x), 16);
    let yBigInt = str2bigInt(bytesToHex(y), 16);
    let mBigInt = str2bigInt(bytesToHex(m), 16);
    let resBigInt = powMod(xBigInt, yBigInt, mBigInt);

    return bytesFromHex(bigInt2str(resBigInt, 16));
  } catch (e) {
    console.error("mod pow error", e);
  }

  return bytesFromBigInt(
    new BigInteger([...x]).modPow(
      new BigInteger([...y]),
      new BigInteger([...m])
    ),
    256
  );
}

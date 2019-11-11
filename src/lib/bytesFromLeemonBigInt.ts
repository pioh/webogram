import { bigInt2str } from "leemon/es/index.js";

import { bytesFromHex } from "./BytesFromHex";

export function bytesFromLeemonBigInt(bigInt: number[]) {
  let str = bigInt2str(bigInt, 16);
  return bytesFromHex(str);
}

import {
  add_,
  bpe,
  copy_,
  copyInt_,
  divide_,
  eGCD_,
  equalsInt,
  greater,
  isZero,
  one,
  rightShift_,
  str2bigInt,
  sub_
} from "leemon/es/index.js";

import { bytesFromLeemonBigInt } from "./bytesFromLeemonBigInt";
import { bytesToHex } from "./BytesToHex";
import { nextRandomInt } from "./nextRandomInt";

export const mask = 32767;

export function pqPrimeFactorization(pq: Uint8Array) {
  // console.time("pqPrimeFactorization");
  let s = bytesToHex(pq);
  let p_q = pqPrimeLeemon(str2bigInt(s, 16, Math.ceil(64 / bpe) + 1));
  // console.timeEnd("pqPrimeFactorization");
  return p_q;
}

function pqPrimeLeemon(what: number[]) {
  let minBits = 64;
  let minLen = Math.ceil(minBits / bpe) + 1;

  // let i, q;
  // let j, lim;
  // let g, P;
  let Q;
  let a = new Array(minLen);
  let b = new Array(minLen);
  let c = new Array(minLen);
  let g = new Array(minLen);
  let z = new Array(minLen);
  let x = new Array(minLen);
  let y = new Array(minLen);
  let i = 0;
  let j = 0;

  for (i = 0; i < 3; i++) {
    let q = (nextRandomInt(128) & 15) + 17;
    copyInt_(x, nextRandomInt(1000000000) + 1);
    copy_(y, x);
    let lim = 1 << (i + 18);

    for (j = 1; j < lim; j++) {
      copy_(a, x);
      copy_(b, x);
      copyInt_(c, q);

      while (!isZero(b)) {
        if (b[0] & 1) {
          add_(c, a);
          if (greater(c, what)) {
            sub_(c, what);
          }
        }
        add_(a, a);
        if (greater(a, what)) {
          sub_(a, what);
        }
        rightShift_(b, 1);
      }

      copy_(x, c);
      if (greater(x, y)) {
        copy_(z, x);
        sub_(z, y);
      } else {
        copy_(z, y);
        sub_(z, x);
      }
      eGCD_(z, what, g, a, b);
      if (!equalsInt(g, 1)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        copy_(y, x);
      }
    }
    if (greater(g, one)) {
      break;
    }
  }

  divide_(what, g, x, y);
  let P;
  if (greater(g, x)) {
    P = x;
    Q = g;
  } else {
    P = g;
    Q = x;
  }

  return [bytesFromLeemonBigInt(P), bytesFromLeemonBigInt(Q)] as [
    Uint8Array,
    Uint8Array
  ];
}

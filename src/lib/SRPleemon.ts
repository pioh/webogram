import {
  add,
  bpe,
  divInt_,
  equals,
  greater,
  leftShift_,
  millerRabinInt,
  mod,
  mult,
  multMod,
  negative,
  one,
  powMod,
  rightShift_,
  str2bigInt,
  sub,
  zero
} from "leemon/es/index.js";

import { bytesFromLeemonBigInt } from "./bytesFromLeemonBigInt";
import { bytesToHex } from "./BytesToHex";
import { GetRandomValues } from "./GetRandomValues";
import { Sha256 } from "./Sha";
// let pbkdf2 = require("./pbkdf2/browser.js");
let sjcl = require("sjcl");

const padded = (v: Uint8Array, len: number) => {
  let res = new Uint8Array(len);
  for (let i = 0; i < v.length; i++) res[i] = v[i];
  return res;
};

export async function SRPLeemon(
  password: Uint8Array,
  g_number: number,
  p: Uint8Array,
  salt1: Uint8Array,
  salt2: Uint8Array,
  g_b: Uint8Array
): Promise<[Uint8Array, Uint8Array]> {
  let g = new Uint8Array([g_number]);
  let g_padded = new Uint8Array(256);
  g_padded[0] = g_number;
  let p_big = B(p);
  let g_big = B(g);
  await AssertPandGAreGood(p_big, g_big);
  let a = new Uint8Array(2048 / 8);

  a = GetRandomValues(a);

  let a_big = B(a);

  let g_a = padded(U(powMod(g_big, a_big, p_big)), 256);
  let x_big = B(await PH2(password, salt1, salt2));
  let v_big = powMod(g_big, x_big, p_big);
  let k_big = B(await H(new Uint8Array([...p, ...g_padded])));
  let k_v_big = multMod(k_big, v_big, p_big);
  let u_big = B(await H(new Uint8Array([...g_a, ...g_b])));
  let t_big = sub(B(g_b), k_v_big); // mod(, bp);
  if (greater(zero, t_big)) t_big = add(t_big, p_big);

  let s_a = padded(
    U(powMod(t_big, add(a_big, mult(u_big, x_big)), p_big)),
    256
  );
  let k_a = await H(s_a);
  return [await M1(p, g_padded, salt1, salt2, g_a, g_b, k_a), g_a];
}
function U(v_big: number[]) {
  return bytesFromLeemonBigInt(v_big);
}
function B(v: Uint8Array | number[]) {
  if (Array.isArray(v)) v = new Uint8Array(v);
  return str2bigInt(bytesToHex(v), 16, Math.ceil(64 / bpe) + 1);
}

async function H(data: Uint8Array) {
  return new Uint8Array(await self.crypto.subtle.digest("SHA-256", data));
}

async function SH(data: Uint8Array, salt: Uint8Array) {
  return H(
    new Uint8Array([
      ...new Uint8Array(salt),
      ...new Uint8Array(data),
      ...new Uint8Array(salt)
    ])
  );
}

async function PH1(password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) {
  return SH(await SH(password, salt1), salt2);
}
function S(u: Uint8Array) {
  return [...u].map(v => String.fromCharCode(v)).join("");
}

async function PH2(password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) {
  let ph1 = await PH1(password, salt1, salt2);
  // let pbkdf2Key = pbkdf2.pbkdf2Sync(S(ph1), S(salt1), 100000, 64, "sha512");
  // let pbkdf2Key = new Uint8Array(
  //   sjcl.misc.pbkdf2([...ph1], [...salt1], 100000, 512)
  // );
  let ph1Key = await crypto.subtle.importKey(
    "raw",
    ph1,
    { name: "PBKDF2" } as any,
    false,
    ["deriveBits", "deriveKey"]
  );

  const pbkdf2KeyWrap = await crypto.subtle.deriveKey(
    { hash: "SHA-512", iterations: 100000, salt: salt1, name: "PBKDF2" },
    ph1Key,
    { name: "HMAC", length: 512, hash: "SHA-512" },
    true,
    ["sign"]
  );
  const pbkdf2Key = new Uint8Array(
    await crypto.subtle.exportKey("raw", pbkdf2KeyWrap)
  );
  return SH(pbkdf2Key, salt2);
}

async function AssertPandGAreGood(p: number[], g: number[]) {
  let isPrime = millerRabinInt(p, 5);
  if (!isPrime) throw new Error("INTERNAL");
  let pd2 = sub(p, one);
  rightShift_(pd2, 1);
  isPrime = millerRabinInt(pd2, 5);
  if (!isPrime) throw new Error("INTERNAL");
  let pow2 = B([2]);
  for (let i = 0; i < 11; i++) pow2 = mult(pow2, pow2);
  if (greater(p, pow2)) throw new Error("INTERNAL");
  divInt_(pow2, 2);
  if (greater(pow2, p)) throw new Error("INTERNAL");

  if (equals(g, B([2]))) {
    if (!equals(mod(p, B([8])), B([7]))) throw new Error("INTERNAL");
  } else if (equals(g, B([3]))) {
    if (!equals(mod(p, B([3])), B([2]))) throw new Error("INTERNAL");
  } else if (equals(g, B([4]))) {
  } else if (equals(g, B([5]))) {
    let m = mod(p, B([5]));
    if (!equals(m, B([1])) && !equals(m, B([4]))) throw new Error("INTERNAL");
  } else if (equals(g, B([6]))) {
    let m = mod(p, B([24]));
    if (!equals(m, B([19])) && !equals(m, B([23]))) throw new Error("INTERNAL");
  } else if (equals(g, B([7]))) {
    let m = mod(p, B([7]));
    if (!equals(m, B([3])) && !equals(m, B([5])) && !equals(m, B([6])))
      throw new Error("INTERNAL");
  }
}
function xor(a: number[], b: number[]): number[] {
  let m = [...b];
  for (let i = 0; i < a.length; i++) {
    m[i] ^= a[i];
  }
  return m;
}
async function M1(
  p: Uint8Array,
  g_padded: Uint8Array,
  salt1: Uint8Array,
  salt2: Uint8Array,
  g_a: Uint8Array,
  g_b: Uint8Array,
  k_a: Uint8Array
) {
  // let h1 = await H(p);
  return H(
    new Uint8Array([
      ...U(xor(B(await H(p)), B(await H(g_padded)))),
      ...(await H(p)),
      ...(await H(salt1)),
      ...(await H(salt2)),
      ...g_a,
      ...g_b,
      ...k_a
    ])
  );
}

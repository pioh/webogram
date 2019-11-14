import { BigInteger } from "jsbn";

import { GetRandomValues } from "./GetRandomValues";
import { Sha256 } from "./Sha";

export async function SRP(
  password: Uint8Array,
  g_number: number,
  p: Uint8Array,
  salt1: Uint8Array,
  salt2: Uint8Array,
  srp_B: Uint8Array
): Promise<[Uint8Array, Uint8Array]> {
  let g = new Uint8Array(new Int32Array([g_number]).buffer);
  let bp = B(p);
  let bg = B(g);
  // await AssertPandGAreGood(bp, bg);
  let a = new Uint8Array(2048 / 8);
  // let b = new Uint8Array(2048 / 8);
  a = GetRandomValues(a);
  // b = GetRandomValues(b);
  let ba = B(a);
  // let bb = B(b);
  let g_a = new Uint8Array(bg.modPow(ba, bp).toByteArray());
  let bx = B(await PH2(password, salt1, salt2));
  let bv = bg.modPow(bx, bp);
  let bk = B(await H(new Uint8Array([...p, ...g])));
  let k_v = bk.multiply(bv).mod(bp);
  let g_b = srp_B;
  let bu = B(await H(new Uint8Array([...g_a, ...g_b])));
  let bt = B(g_b)
    .subtract(k_v)
    .mod(bp);
  let s_a = bt.modPow(ba.add(bu.multiply(bx)), bp);
  let k_a = await H(new Uint8Array(s_a.toByteArray()));
  return [await M1(p, g, salt1, salt2, g_a, g_b, k_a), g_a];
}

function B(v: Uint8Array | number[]) {
  return new BigInteger([...v]);
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

async function PH2(password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) {
  let ph1 = await PH1(password, salt1, salt2);
  let ph1Key = await crypto.subtle.importKey("raw", ph1, "PBKDF2", false, [
    "deriveKey"
  ]);
  const pbkdf2KeyWrap = await crypto.subtle.deriveKey(
    { hash: "SHA-512", iterations: 100000, salt: salt1, name: "PBKDF2" },
    ph1Key,
    "PBKDF2",
    true,
    ["deriveKey"]
  );
  const pbkdf2Key = new Uint8Array(
    await crypto.subtle.exportKey("raw", pbkdf2KeyWrap)
  );
  return SH(pbkdf2Key, salt2);
}

async function AssertPandGAreGood(p: BigInteger, g: BigInteger) {
  let isPrime = p.isProbablePrime(5);
  if (!isPrime) throw new Error("INTERNAL");
  isPrime = p
    .subtract(BigInteger.ONE)
    .divide(B([2]))
    .isProbablePrime(5);
  if (!isPrime) throw new Error("INTERNAL");
  let pow2 = B([2]).pow(2047);
  if (p.compareTo(pow2) <= 0) throw new Error("INTERNAL");
  pow2 = pow2.multiply(B([2]));
  if (p.compareTo(pow2) >= 0) throw new Error("INTERNAL");
  let GmodP = g.mod(p);
  let found = false;
  for (let x = BigInteger.ZERO; ; x = x.add(BigInteger.ONE)) {
    let x2 = x.square();
    if (x2.equals(GmodP)) {
      found = true;
      break;
    }
    if (x2.compareTo(GmodP) > 0) break;
  }
  if (found) throw new Error("INTERNAL");
}
async function M1(
  p: Uint8Array,
  g: Uint8Array,
  salt1: Uint8Array,
  salt2: Uint8Array,
  g_a: Uint8Array,
  g_b: Uint8Array,
  k_a: Uint8Array
) {
  return H(
    new Uint8Array([
      ...new Uint8Array(
        B(await H(p))
          .xor(B(await H(g)))
          .toByteArray()
      ),
      ...(await Sha256(salt1)),
      ...(await Sha256(salt2)),
      ...g_a,
      ...g_b,
      ...k_a
    ])
  );
}

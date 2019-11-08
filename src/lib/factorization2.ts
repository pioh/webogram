import { BigInteger } from "jsbn";

const MAX_UINT32 = new BigInteger([1]).pow(32).subtract(BigInteger.ONE); // 1 << 32;
const MAX_UINT32p1 = new BigInteger([1]).pow(32); // 1 << 32;

const Big2 = new BigInteger([2]);

function gcd(m: BigInteger, n: BigInteger): BigInteger {
  while (true) {
    let r = m.mod(n);
    if (r.equals(BigInteger.ZERO)) {
      return n;
    }
    m = n;
    n = r;
  }
}
function f(y: BigInteger, c: BigInteger, n: BigInteger) {
  y = y.modPow(Big2, n);
  y = y.add(c);
  if (y < c) y = y.add(MAX_UINT32p1).subtract(n);
  y = y.mod(n);
  return y;
}
function min(a: BigInteger, b: BigInteger) {
  return a.compareTo(b) < 0 ? a : b;
}
function abs(x: BigInteger, y: BigInteger) {
  return x.compareTo(y) > 0 ? x.subtract(y) : y.subtract(x);
}

const buf1 = new Uint8Array(4);
const buf2 = new Uint8Array(8);

function rand(n: BigInteger) {
  if (n <= MAX_UINT32) {
    crypto.getRandomValues(buf1);
    return new BigInteger([...buf1]).mod(n).abs();
  }
  crypto.getRandomValues(buf2);
  return new BigInteger([...buf1]).mod(n).abs();
}

export function Factorize2(n: BigInteger): BigInteger {
  if (n.equals(BigInteger.ONE)) return n;
  if (n.mod(Big2).equals(BigInteger.ZERO)) return Big2;

  let y: BigInteger = rand(n);
  let x: BigInteger;
  let ys: BigInteger = y;
  let c: BigInteger;
  do c = rand(n);
  while (c.equals(BigInteger.ZERO) || c.equals(n.subtract(Big2)));
  let m: BigInteger = new BigInteger([2, 232]);
  let d: BigInteger = BigInteger.ONE;
  let q: BigInteger = BigInteger.ONE;
  let r: BigInteger = BigInteger.ONE;
  do {
    x = y;
    for (let i = 0; i <= r.intValue(); i++) y = f(y, c, n);

    let j = BigInteger.ZERO;
    do {
      ys = y;
      for (
        let i = BigInteger.ZERO;
        i.compareTo(min(m, r.subtract(j))) <= 0;
        i = i.add(BigInteger.ONE)
      ) {
        y = f(y, c, n);
        q = q.multiply(abs(x, y).mod(n));
      }
      d = gcd(q, n);
      j = j.add(m);
    } while (j < r && d.equals(BigInteger.ONE));
    r = r.square();
  } while (d.equals(BigInteger.ONE));
  if (d.equals(n)) {
    do {
      ys = f(ys, c, n);
      d = gcd(abs(x, ys), n);
    } while (d.equals(BigInteger.ONE));
  }
  return d;
}

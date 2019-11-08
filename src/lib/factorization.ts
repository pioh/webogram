const MAX_UINT32 = (1n << 32n) - 1n;

function gcd(m: bigint, n: bigint): bigint {
  while (true) {
    let r = m % n;
    if (r === 0n) {
      return n;
    }
    m = n;
    n = r;
  }
}
function f(y: bigint, c: bigint, n: bigint) {
  y = (y * y) % n;
  y += c;
  if (y < c) y += MAX_UINT32 - n + 1n;
  y %= n;
  return y;
}
function min(a: bigint, b: bigint) {
  return a < b ? a : b;
}
function abs(x: bigint, y: bigint) {
  return x > y ? x - y : y - x;
}

const buf1 = new Uint32Array(1);
const buf2 = new Uint32Array(2);

function rand(n: bigint) {
  if (n <= MAX_UINT32) {
    crypto.getRandomValues(buf1);
    return BigInt(buf1[0]) % n;
  }
  crypto.getRandomValues(buf2);
  return ((BigInt(buf2[0]) << 32n) + BigInt(buf2[1])) % n;
}

export function Factorize(n: bigint): bigint {
  if (n == 1n) return n;
  if (n % 2n == 0n) return 2n;

  let y: bigint = rand(n);
  let x: bigint;
  let ys: bigint = y;
  let c: bigint;
  do c = rand(n);
  while (c == 0n || c == n - 2n);
  let m: bigint = 1000n;
  let d: bigint = 1n;
  let q: bigint = 1n;
  let r: bigint = 1n;
  do {
    x = y;
    for (let i = 0n; i <= r; i++) y = f(y, c, n);

    let j = 0n;
    do {
      ys = y;
      for (let i = 0n; i <= min(m, r - j); i++) {
        y = f(y, c, n);
        q *= abs(x, y) % n;
      }
      d = gcd(q, n);
      j += m;
    } while (j < r && d == 1n);
    r *= 2n;
  } while (d == 1n);
  if (d == n) {
    do {
      ys = f(ys, c, n);
      d = gcd(abs(x, ys), n);
    } while (d == 1n);
  }
  return d;
}

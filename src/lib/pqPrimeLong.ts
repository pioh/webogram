import { ILong } from "./ILong";
import { Long } from "./Long";
import { nextRandomInt } from "./nextRandomInt";

export function pqPrimeLong(pq: ILong): [ILong, ILong] {
  let what = new Long(pq[0], pq[1]);
  //   let it = 0;
  let g = Long.ONE;

  for (let i = 0; i < 3; i++) {
    let q = Long.fromInt((nextRandomInt(128) & 15) + 17);
    let x = Long.fromInt(nextRandomInt(1000000000) + 1);
    let y = x;
    let lim = 1 << (i + 18);

    for (let j = 1; j < lim; j++) {
      //   ++it;
      let a = x;
      let b = x;
      let c = q;

      while (!b.equals(Long.ZERO)) {
        if (!b.and(Long.ONE).equals(Long.ZERO)) {
          c = c.add(a);
          if (c.compare(what) > 0) {
            c = c.subtract(what);
          }
        }
        a = a.add(a);
        if (a.compare(what) > 0) {
          a = a.subtract(what);
        }
        b = b.shiftRight(1);
      }

      x = c;
      let z = x.compare(y) < 0 ? y.subtract(x) : x.subtract(y);
      g = gcdLong(z, what);
      if (!g.equals(Long.ONE)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        y = x;
      }
    }
    if (g.compare(Long.ONE) > 0) {
      break;
    }
  }

  let f = what.div(g);
  let P: Long;
  let Q: Long;

  if (g.compare(f) > 0) {
    P = f;
    Q = g;
  } else {
    P = g;
    Q = f;
  }
  return [P.toILong(), Q.toILong()];
  //   return [bytesFromHex(P.toString(16)), bytesFromHex(Q.toString(16)), it];
}

function gcdLong(a: Long, b: Long) {
  while (!a.equals(Long.ZERO) && !b.equals(Long.ZERO)) {
    while (b.and(Long.ONE).equals(Long.ZERO)) {
      b = b.shiftRight(1);
    }
    while (a.and(Long.ONE).equals(Long.ZERO)) {
      a = a.shiftRight(1);
    }
    if (a.compare(b) > 0) {
      a = a.subtract(b);
    } else {
      b = b.subtract(a);
    }
  }
  return b.equals(Long.ZERO) ? a : b;
}

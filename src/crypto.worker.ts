import { PublicKeys } from "const/PublicKyes";
import { AesDecrypt, AesEncrypt, sha256Hash } from "lib/crypto";
import { bytesModPow } from "lib/modPow";
import { RsaEncrypt } from "lib/RsaEncrypt";
import { verifyDhParams } from "lib/verifyDhParams";

import { pqPrimeFactorization } from "./lib/pqPrimeFactorization";
import { WorkerMethod } from "./lib/WorkerClient";

const ctx: Worker = self as any;

ctx.addEventListener("message", msg => {
  let name = msg.data.name as WorkerMethod;
  switch (name) {
    case "pqPrimeFactorization":
      let [p, q] = pqPrimeFactorization(new Uint8Array(msg.data.pq));
      ctx.postMessage({ id: msg.data.id, p: p.buffer, q: q.buffer }, [
        p.buffer,
        q.buffer
      ]);
      break;
    case "modPow":
      let a = bytesModPow(
        new Uint8Array(msg.data.x),
        new Uint8Array(msg.data.y),
        new Uint8Array(msg.data.m)
      );
      ctx.postMessage({ id: msg.data.id, a: a.buffer }, [a.buffer]);
      break;
    case "rsaEncrypt":
      let x = RsaEncrypt(
        PublicKeys.get(msg.data.f.join())!,
        new Uint8Array(msg.data.d)
      );
      ctx.postMessage({ id: msg.data.id, d: x.buffer }, [x.buffer]);
      break;
    case "sha256Hash":
      let d = sha256Hash(new Uint8Array(msg.data.d));
      ctx.postMessage({ id: msg.data.id, d: d.buffer }, [d.buffer]);
      break;

    case "aesEncrypt":
      let s = AesEncrypt(
        new Uint8Array(msg.data.d),
        new Uint8Array(msg.data.k),
        new Uint8Array(msg.data.i)
      );
      ctx.postMessage({ id: msg.data.id, d: s.buffer }, [s.buffer]);
      break;
    case "aesDecrypt":
      let w = AesDecrypt(
        new Uint8Array(msg.data.d),
        new Uint8Array(msg.data.k),
        new Uint8Array(msg.data.i)
      );
      ctx.postMessage({ id: msg.data.id, d: w.buffer }, [w.buffer]);
      break;
    case "verifyDhParams":
      ctx.postMessage({
        id: msg.data.id,
        r: verifyDhParams(
          new Uint8Array(msg.data.dh),
          new Uint8Array(msg.data.ga)
        )
      });
      break;
  }
});

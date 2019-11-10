import CryptoWorker from "crypto.worker";

import { ILong } from "./ILong";

const workers: Worker[] = [];
let nextID = 0;
let resolvers = new Map<number, (...args: any[]) => void>();
let nextWorkerIndex = 0;

function nextWorker() {
  nextWorkerIndex++;
  if (nextWorkerIndex >= workers.length) nextWorkerIndex = 0;
  return workers[nextWorkerIndex];
}
export type WorkerMethod =
  | "pqPrimeFactorization"
  | "modPow"
  | "sha256Hash"
  | "aesEncrypt"
  | "verifyDhParams"
  | "rsaEncrypt"
  | "aesDecrypt";

export class WorkerClient {
  constructor() {
    while (workers.length < 4) {
      let worker = new CryptoWorker();
      worker.addEventListener("message", msg => {
        let resolve = resolvers.get(msg.data.id);
        resolvers.delete(msg.data.id);
        if (resolve) resolve(msg.data);
      });

      workers.push(worker);
    }
  }

  async fetch<T = any>(
    worker: Worker,
    name: WorkerMethod,
    data: any,
    transfer?: { [key: string]: ArrayBuffer | Uint8Array },
    trans?: ArrayBuffer[]
  ): Promise<T> {
    data.id = nextID++;
    data.name = name;
    if (transfer && !trans) {
      trans = [];
      for (let key in transfer) {
        let v = transfer[key];
        if (v instanceof Uint8Array) v = v.slice().buffer;
        else if (v instanceof Uint32Array) v = v.slice().buffer;
        else if (v instanceof ArrayBuffer) {
        } else continue;
        data[key] = v;
        trans.push(v);
      }
    }
    let promise = new Promise(r => resolvers.set(data.id, r));

    if (trans) {
      worker.postMessage(data, trans);
    } else {
      worker.postMessage(data);
    }
    return promise as Promise<T>;
  }

  async pqPrimeFactorization(
    pq: Uint8Array
  ): Promise<[Uint8Array, Uint8Array]> {
    let p: Array<Promise<{ p: ArrayBuffer; q: ArrayBuffer }>> = [];
    for (let worker of workers) {
      p.push(
        this.fetch<{ p: ArrayBuffer; q: ArrayBuffer }>(
          worker,
          "pqPrimeFactorization",
          { pq }
        )
      );
    }
    let res = await Promise.race(p);

    return [new Uint8Array(res.p), new Uint8Array(res.q)];
  }

  async modPow(
    x: Uint8Array,
    y: Uint8Array,
    m: Uint8Array
  ): Promise<Uint8Array> {
    let res = await this.fetch<{ a: ArrayBuffer }>(nextWorker(), "modPow", {
      x,
      y,
      m
    });

    return new Uint8Array(res.a);
  }

  async sha256Hash(data: Uint8Array): Promise<Uint8Array> {
    let res = await this.fetch<{ d: ArrayBuffer }>(nextWorker(), "sha256Hash", {
      d: data
    });

    return new Uint8Array(res.d);
  }

  async aesEncrypt(
    data: Uint8Array,
    aesKey: Uint8Array,
    aesIv: Uint8Array
  ): Promise<Uint8Array> {
    let res = await this.fetch<{ d: ArrayBuffer }>(nextWorker(), "aesEncrypt", {
      d: data,
      k: aesKey,
      i: aesIv
    });

    return new Uint8Array(res.d);
  }
  async rsaEncrypt(finger: ILong, data: Uint8Array): Promise<Uint8Array> {
    let res = await this.fetch<{ d: ArrayBuffer }>(nextWorker(), "rsaEncrypt", {
      f: finger,
      d: data
    });

    return new Uint8Array(res.d);
  }
  async aesDecrypt(
    data: Uint8Array,
    aesKey: Uint8Array,
    aesIv: Uint8Array
  ): Promise<Uint8Array> {
    let res = await this.fetch<{ d: ArrayBuffer }>(nextWorker(), "aesDecrypt", {
      d: data,
      k: aesKey,
      i: aesIv
    });

    return new Uint8Array(res.d);
  }
  async verifyDhParams(dh: Uint8Array, ga: Uint8Array): Promise<boolean> {
    let res = await this.fetch<{ r: boolean }>(nextWorker(), "verifyDhParams", {
      dh,
      ga
    });

    return res.r;
  }
}

// worker.onmessage = event => {};

// worker.addEventListener("message", event => {});

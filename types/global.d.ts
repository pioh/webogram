declare module "*.scss" {
  const styles: any;
  export = styles;
}
declare module "rusha" {
  export const Rusha: any;
}
declare module "leemon/es/index.js" {
  export const bpe: number;
  export function str2bigInt(s: string, base: number, minLen?: number);
  export function bigInt2str(s: number[], base: number);
  export const copy_: any;
  export const add_: any;
  export const copyInt_: any;
  export const divide_: any;
  export const equalsInt: any;
  export const greater: any;
  export const isZero: any;
  export const one: any;
  export const rightShift_: any;
  export const sub_: any;
  export const eGCD_: any;
  export const powMod: any;
}
declare module "crypto.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}
const __webpack_public_path__: any;

declare module "lib/aes.js" {
  export const CryptoJS: any;
}

// import * as pako from "pako";
declare module "lib/pako.js" {
  export const ungzip: any;
}

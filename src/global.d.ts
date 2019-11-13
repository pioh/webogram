declare module "*.scss" {
  const styles: any;
  export = styles;
}
declare module "rusha" {
  export const Rusha: any;
}
declare module "leemon/es/index.js" {
  export type Bool = 1 | 0;
  export function GCD(x: Array<number>, y: Array<number>): Array<number>;
  export function GCD_(x: Array<number>, y: Array<number>): void;
  export function add(x: Array<number>, y: Array<number>): Array<number>;
  export function addInt(x: Array<number>, n: number): Array<number>;
  export function addInt_(x: Array<number>, n: number): void;
  export function addShift_(
    x: Array<number>,
    y: Array<number>,
    ys: number
  ): void;
  export function add_(x: Array<number>, y: Array<number>): void;
  export function bigInt2str(x: Array<number>, base: number): string;
  export function bitSize(x: Array<number>): number;
  export var bpe: number;
  export function carry_(x: Array<number>): void;
  export function copyInt_(x: Array<number>, n: number): void;
  export function copy_(x: Array<number>, y: Array<number>): void;
  export function divInt_(x: Array<number>, n: number): number;
  export function divide_(
    x: Array<number>,
    y: Array<number>,
    q: Array<number>,
    r: Array<number>
  ): void;
  export function dup(x: Array<number>): Array<number>;
  export function eGCD_(
    x: Array<number>,
    y: Array<number>,
    v: Array<number>,
    a: Array<number>,
    b: Array<number>
  ): void;
  export function equals(x: Array<number>, y: Array<number>): 1 | 0;
  export function equalsInt(x: Array<number>, y: number): 1 | 0;
  export function expand(x: Array<number>, n: number): Array<number>;
  export function findPrimes(n: number): Array<number>;
  export function greater(x: Array<number>, y: Array<number>): 1 | 0;
  export function greaterShift(
    x: Array<number>,
    y: Array<number>,
    shift: number
  ): 1 | 0;
  export function halve_(x: Array<number>): void;
  export function int2bigInt(
    t: number,
    bits: number,
    minSize: number
  ): Array<number>;
  export function inverseMod(
    x: Array<number>,
    n: Array<number>
  ): Array<number> | null;
  export function inverseModInt(x: number, n: number): number;
  export function inverseMod_(x: Array<number>, n: Array<number>): 1 | 0;
  export function isZero(x: Array<number>): 1 | 0;
  export function leftShift_(x: Array<number>, n: number): void;
  export function linCombShift_(
    x: Array<number>,
    y: Array<number>,
    b: number,
    ys: number
  ): void;
  export function linComb_(
    x: Array<number>,
    y: Array<number>,
    a: number,
    b: number
  ): void;
  export function millerRabin(x: Array<number>, b: Array<number>): 1 | 0;
  export function millerRabinInt(x: Array<number>, b: number): 1 | 0;
  export function mod(x: Array<number>, n: Array<number>): Array<number>;
  export function modInt(x: Array<number>, n: number): number;
  export function mod_(x: Array<number>, n: Array<number>): void;
  export function mont_(
    x: Array<number>,
    y: Array<number>,
    n: Array<number>,
    np: number
  ): void;
  export function mult(x: Array<number>, y: Array<number>): Array<number>;
  export function multInt_(x: Array<number>, n: number): void;
  export function multMod(
    x: Array<number>,
    y: Array<number>,
    n: Array<number>
  ): Array<number>;
  export function multMod_(
    x: Array<number>,
    y: Array<number>,
    n: Array<number>
  ): void;
  export function mult_(x: Array<number>, y: Array<number>): void;
  export function negative(x: Array<number>): number;
  export var one: Array<number>;
  export function powMod(
    x: Array<number>,
    y: Array<number>,
    n: Array<number>
  ): Array<number>;
  export function powMod_(
    x: Array<number>,
    y: Array<number>,
    n: Array<number>
  ): void;
  export function randBigInt(n: number, s: number): Array<number>;
  export function randBigInt_(b: Array<number>, n: number, s: number): void;
  export function randProbPrime(k: number): Array<number>;
  export function randProbPrimeRounds(k: number, n: number): Array<number>;
  export function randTruePrime(k: number): Array<number>;
  export function randTruePrime_(ans: Array<number>, k: number): void;
  export function rightShift_(x: Array<number>, n: number): void;
  export function squareMod_(x: Array<number>, n: Array<number>): void;
  export function str2bigInt(
    s: string,
    base: number,
    minSize?: number
  ): Array<number>;
  export function sub(x: Array<number>, y: Array<number>): Array<number>;
  export function subShift_(
    x: Array<number>,
    y: Array<number>,
    ys: number
  ): void;
  export function sub_(x: Array<number>, y: Array<number>): void;
  export function trim(x: Array<number>, k: number): Array<number>;
  export var zero: Array<number>;
}
declare module "crypto.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export = WebpackWorker;
}
const __webpack_public_path__: any;

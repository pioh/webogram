import * as camelCase from "camelcase";
import * as fs from "fs";

import { mtprotoJson } from "./mtprotoJson";
import { jsonApi } from "./schemaJson";

let out: string[][] = [];
let l = (...args: any[]) => out.push(args);
// let globalPrefix = ""

function WriteHeader(file: string) {
  l(`
  import {ByteBuffer} from "../ByteBuffer"
  import {ApiInvoker} from "../ApiInvoker"
  import {Connection} from "../Connection"
  import {r, c, panic, CallDeclareQueue, AllStructs, Optional, ProtoLong, TypeRW, IStruct, OneOf, TMethod, IntRW, LongRW, DoubleRW, StringRW, BytesRW, Int64RW, Int128RW, Int256RW, OneOfRW, TrueRW, VectorRW} from "../SchemaHelpers"
  `);
  if (file !== "./MTprotoShema.gen.ts") {
    l(`import { RpcErrorS } from "./MTprotoShema.gen";`);
  }
  // if (file !== "MRpcErrorS") {
  //   l(`import { RpcErrorS } from "./MRpcErrorS";`);
  // }
  // if (file !== `${globalPrefix}VectorS`) {
  //   l(`import { VectorS } from "./${globalPrefix}VectorS";`);
  // }
  // for (let t of lastTypeUse) {
  //   if (t === "RpcErrorS") continue;
  //   if (t === "VectorS") continue;
  //   l(`import {${t}} from "./${globalPrefix}${t}"`)
  // }
}
let queue:Array<{n: string,deps: Set<string>, desc: string}|null> = []

let types = new Map<string, [string[], boolean]>();

const addType = (t: string, p: string, isMethod: boolean) => {
  if (!types.get(t)) types.set(t, [[], isMethod]);
  types.get(t)![0].push(p);
};
// let declared = new Set<string>();
// let waitForDeclare: Set<[string, string, ...string[]]> = new Set();
let lastTypeUse: Set<string> = new Set();

let usedTypes = new Set<string>();
let methodGeneration = false;
const toName = (n: string, postfix = "S", prefix = "") => {
  // if (n.match("^(input|vector)")) prefix = "TT";

  n = n
    .replace(/\.| /g, "_")
    .split("_")
    .map((v, i) => {
      // if (v.substr(0, 1).toUpperCase() !== v.substr(0, 1))
      //   return (i > 0 ? "T_" : "X_") + v;
      // else return (i > 0 ? "X_" : "T_") + v;
      if (v.substr(0, 1).toUpperCase() !== v.substr(0, 1))
        return (i > 0 ? "_" : "_") + v;
      else return (i > 0 ? "_" : "_") + v;
    })
    .join("_");

  let name =
    prefix +
    camelCase(n, {
      pascalCase: true
    }) +
    postfix;

  if (methodGeneration && !usedTypes.has(name)) name = name.replace(/T$/, "S");
  lastTypeUse.add(name)
  return name;
};

interface TypeDesc {
  type: string;
  value: string;
  // get: string;
  // set: string;
  read: string;
  write: string;
  optionalName?: string;
  optionalIndex?: number;
  rw: string;
  // index: number;
}

let flagIndex: number[] =[]
function mapType(type: string, isType = false): TypeDesc {
  switch (type) {
    case "true":
      return {
        value: "true",
        type: "true",
        read: "val = true",
        write: "",
        rw: "TrueRW",
      };
    case "#":
    case "int":
      return {
        value: "0",
        type: "number",
        read: "val = buf.readInt()",
        write: "buf.writeInt(val)",
        rw: "IntRW",
      };
    case "long":
      return {
        value: "[0, 0]",
        type: "ProtoLong",
        read: "val = buf.readLong()",
        write: "buf.writeLong(val)",
        rw: "LongRW",
      };
    case "double":
      return {
        value: "0.0",
        type: "number",
        read: "val = buf.readDouble()",
        write: "buf.writeDouble(val)",
        rw: "DoubleRW",
      };
    case "string":
      return {
        value: '""',
        type: "string",
        read: "val = buf.readString()",
        write: "buf.writeString(val)",
        rw: "StringRW",
      };
    case "bytes":
      return {
        value: "new Uint8Array()",
        type: "Uint8Array",
        read: "val = buf.readBytes()",
        write: "buf.writeBytes(val)",
        rw: "BytesRW",
      };
    case "int64":
      return {
        value: "new Uint8Array(8)",
        type: "Uint8Array",
        read: "val = buf.readU8A(2)",
        write: "buf.writeU8A(val)",
        rw: "Int64RW",
      };
    case "int128":
      return {
        value: "new Uint8Array(16)",
        type: "Uint8Array",
        read: "val = buf.readU8A(4)",
        write: "buf.writeU8A(val)",
        rw: "Int128RW",
      };
    case "int256":
      return {
        value: "new Uint8Array(32)",
        type: "Uint8Array",
        read: "val = buf.readU8A(8)",
        write: "buf.writeU8A(val)",
        rw: "Int256RW",
      };
    case "X":
    case "Object":
    case "HttpWait":
      return {
        value: `new OneOf()`,
        type: `OneOf|IStruct`,
        read: `
        val = val._read(buf)
        if (val instanceof OneOf) val = val.unwrap();
        `,
        write: "val._write(buf)",
        rw: "OneOfRW",
      };
    case "!X":
      return {
        value: `new OneOf()`,
        type: `TMethod`,
        read: `
          val = val._read(buf)
          if (val instanceof OneOf) val = val.unwrap();
          `,
        write: "val._write(buf)",
        rw: "OneOfRW",
      };
    case "%Message":
      return {
        value: `new ${toName("Message")}()`,
        type: `${toName("Message")}`,
        read: `val = val._read(buf, true)
        if (val instanceof OneOf) val = val.unwrap();
        `,
        write: "val._write(buf, true)",
        rw: "TypeRW(MessageS, true)",
      };
  }

  let flag = type.match(/(\w+)\.(\d+)\?(\S+)/);
  if (flag) {
    let t = mapType(flag[3], true);
    usedTypes.add(t.type);
    return {
      ...t,
      optionalIndex: Number(flag[2]),
      optionalName: flag[1],
      rw: `Optional(${t.rw}, ${flagIndex[flagIndex.length -1]}, ${Number(flag[2])})`
    };
  }

  let Vector = type.match(/^Vector<(.+)>$/i);
  if (Vector) {
    let readId = type.charAt(0) === "V";
    let t = mapType(Vector[1], true);
    usedTypes.add(t.type);
    return {
      value: `new VectorS<${t.type}>()`,
      type: `VectorS<${t.type}>`,
      read: `
        ${
          readId
            ? `
        if (buf.readUInt() !== 481674261) panic("not vector")
        `
            : ""
        }
        let len = buf.readInt();
        val._values.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ${t.type} = ${t.value};
          ${t.read};
          vector.get_values().push(val);
        }
        `,
      write: `
        ${readId ? `buf.writeInt(481674261);` : ""}
        buf.writeInt(val.get_values().length);
        let vector = val;
        for (let i = 0; i < vector._values.length; i++) {
          let val = vector.get_values()[i];
          ${t.write};
        }
    `,
      rw: `VectorRW(${t.rw === "OneOfRW" && readId ? "": t.rw} ${!readId ? ', true' : ''})`,
    };
  }
  if (!type.match(/\w+/)) console.error("unknown type " + type);
  let t = toName(type, isType ? "T" : "T");
  usedTypes.add(t);
  return {
    value: `new ${t}() as unknown as ${t}`,
    type: `${t}`,
    read: `
    val = val._read(buf);
    if (val instanceof OneOf) val = val.unwrap();
    `,
    write: "val._write(buf)",
    rw: `TypeRW(${t})`
  };
}

async function main() {
  // globalPrefix = "shema"
  await processFile(jsonApi, "./ApiShema.gen.ts");
  WriteQueue("./ApiShema.gen.ts")
  // globalPrefix = "mtproto"
  await processFile(mtprotoJson, "./MTprotoShema.gen.ts");
  WriteQueue("./MTprotoShema.gen.ts")
}
async function processFile(json: typeof jsonApi, output: string) {
  out = [];
  types.clear();
  usedTypes.clear();
  // WriteHeader(output);
  for (let c of json.constructors) {
    AddConstructor(c, false);
  }
  let used = new Set([...usedTypes]);
  let tts: typeof types = new Map(
    [...types].map(([t, [p, isMethod]]) => [t, [[...p], isMethod]])
  );
  for (let [t, [p, isMethod]] of tts) {
    lastTypeUse.clear()
    let desc = ""
    t = toName(t, "T");
    // p = p.filter(v => v !== t);
    p = p.map(s => toName(s, isMethod ? "M" : "S"));
    if (p.length > 1) {
      // l(`type I${t} = IOneOf<${p.join(" | ")}>`);
      // const ${t}OneOfTypes: Array<${p
      //   .map(v => `typeof ${v}`)
      //   .join(" | ")}> = [${p.join(", ")}];
      used.add(t);
      usedTypes.add(t);
      desc = `
      export type ${t} = ${p.map(v => `${v}`).join(" | ")};
      export const ${t} = OneOf;
      `;
    } else if (
      p.length === 1 &&
      (used.has(t) || t.slice(0, -1) !== p[0].slice(0, -1))
    ) {
      used.add(t);
      usedTypes.add(t);
      desc = `
      export const ${t} = ${p[0]};
      export type ${t} = ${p[0]};
      `;
    }
    if (desc) {
      lastTypeUse.delete(t)
      // WriteHeader(globalPrefix + t)
      l(desc)
      // fs.writeFileSync(`../proto/${globalPrefix + t}.ts`, out.map(v => v.join(" ")).join("\n"))
      queue.push({n: t, deps: new Set([...lastTypeUse]), desc: out.join('')})
      out = []
      lastTypeUse.clear()
    }
  }
  types.clear();
  tts.clear();
  methodGeneration = true;
  for (let m of json.methods) {
    let o = {
      type: m.method,
      predicate: m.method,
      params: m.params,
      id: m.id,
      returnType: m.type
    };
    AddConstructor(o, true);
  }
  // addAllRemainig()
  tts = new Map(
    [...types].map(([t, [p, isMethod]]) => [t, [[...p], isMethod]])
  );
  for (let [t, [p, isMethod]] of tts) {
    lastTypeUse.clear()
    let desc = ""
    t = toName(t, "T");
    // p = p.filter(v => v !== t);
    p = p.map(s => toName(s, isMethod ? "M" : "S"));
    if (p.length > 1) {
      // l(`type I${t} = IOneOf<${p.join(" | ")}>`);
      // const ${t}OneOfTypes: Array<${p
      //   .map(v => `typeof ${v}`)
      //   .join(" | ")}> = [${p.join(", ")}];
      used.add(t);
      usedTypes.add(t);
      desc = `
      export type ${t} = ${p.map(v => `${v}`).join(" | ")} | OneOf<${p
        .map(v => `typeof ${v}`)
        .join(" | ")}, ${p.map(v => `${v}`).join(" | ")}>;

      export const ${t} = OneOf;
      `;
    } else if (p.length === 1 && t.slice(0, -1) !== p[0].slice(0, -1)) {
      desc = `
      export const ${t} = ${p[0]};
      export type ${t} = ${p[0]};
      `;
    }
    if (desc) {
      lastTypeUse.delete(t)
      // WriteHeader(globalPrefix + t)
      l(desc)
      // fs.writeFileSync(`../proto/${globalPrefix + t}.ts`, out.map(v => v.join(" ")).join("\n"))
      queue.push({n: t, deps: new Set([...lastTypeUse]), desc: out.join('')})
      out = []
      lastTypeUse.clear()
    }
  }
  for (let m of json.methods) {
    AddMethod(m, used);
  }
  methodGeneration = false;
  // return new Promise(r =>
  //   fs.writeFile(output, out.map(v => v.join(" ")).join("\n"), r)
  // );
}

function AddMethod(m: typeof jsonApi.methods[0], used: Set<string>) {
  lastTypeUse.clear()
  // let M = toName(m.method, "M");
  let name = toName(m.method, "M");
  // let t = m.type;
  let W = mapType(m.type, true);
  if (!used.has(W.type)) W.type = W.type.replace(/T$/, "S");
  // let repeated = false;
  // let vector = t.match(/^Vector<(.*)>$/i);
  // if (vector) {
  //   t = vector[1];
  //   repeated = true;
  // }
  let id = Number(m.id);
  if (id < 0) id += Math.pow(2, 32);

  let P = `Call${name}`
  let desc = `
  /**
   * ${m.method}:${m.type}
   * #${id.toString(16)}:${id}:${m.id}
   * ${m.params.map(p => `${p.name}:${p.type}`).join("\n* ")}
   */
  export let Call${name} = c;
  export type Call${name} = (invoker: ApiInvoker|Connection, req: ${name}) => Promise<(${
    W.type
  }|${toName("RpcError")})&{dc: number}>`;
  lastTypeUse.delete(P)
  // WriteHeader(globalPrefix + P)
  l(desc)
  // fs.writeFileSync(`../proto/${globalPrefix + P}.ts`, out.map(v => v.join(" ")).join("\n"))
  queue.push({n: P, deps: new Set([...lastTypeUse]), desc: out.join('')})
  out = []
  lastTypeUse.clear()
}
function AddConstructor(
  c: typeof jsonApi.constructors[0] & { returnType?: string },
  isMethod: boolean
) {

  lastTypeUse.clear()
  let P = toName(c.predicate, isMethod ? "M" : "S");
  addType(c.type, c.predicate, isMethod);

  let id = Number(c.id);
  if (id < 0) id += Math.pow(2, 32);
  // let isMessage = 0x5bb8e511 === id;
  let isVector = 0x1cb5c415 === id;
  flagIndex.push(0)
  let fi = flagIndex.length -1

  let desc = `
      /**
       * ${c.predicate}:${c.type} ${c.returnType || ""}
       * #${id.toString(16)}:${id}:${c.id}
       * ${c.params.map(p => `${p.name}:${p.type}`).join("\n* ")}
       */
      export interface ${P}${isVector?"<T = unknown>":""} {
        _id: number;        ${c.returnType ? `_method(): void;` : ""}
        _values: ${
    isVector && !c.params.length ? "T" : ""
  }[${c.params.map(pr => mapType(pr.type).type).join(", ")}];
        ${c.params
          .map((p, i) => {
            let t = mapType(p.type);
            return `
            get_${p.name} (): ${t.type};
          set_${p.name} (val: ${t.type}): this;
          ${
            t.optionalName
              ? `
          has_${p.name} (): boolean;
          `
              : ""
          }
        `;
          })
          .join("")}
          _write(buf: ByteBuffer, noId: boolean): this;
          _read(buf: ByteBuffer, noId: boolean): this;

          ${isVector ? `
            set_values(v: T[]): this;
            get_values(): T[];
          ` :""}
      }
      export let ${P} = r<new ${isVector?"<T> ":""}() => ${P}${isVector?"<T>":""}>(0x${id.toString(16)}, "${P}", () => [${c.params.map((pr,i) => {
        let t = mapType(pr.type)
        if (t.optionalName) {
          flagIndex[fi] = c.params.findIndex(pr => pr.name === t.optionalName)
          t = mapType(pr.type)
        }
        return `"${pr.name}", ${t.rw}`
      }).join(", ")}]);
    `;
  flagIndex.pop();
  lastTypeUse.delete(P)
  // WriteHeader(globalPrefix + P)
  l(desc)
  // fs.writeFileSync(`../proto/${globalPrefix + P}.ts`, out.map(v => v.join(" ")).join("\n"))
  queue.push({n: P, deps: new Set([...lastTypeUse]), desc: out.join('')})
  out = []
  lastTypeUse.clear()
}

function WriteQueue(file: string) {
  out= []
  WriteHeader(file)
  lastTypeUse.clear()
  // let lastW = 0;
  // lastTypeUse.add()
  if (file !== "./MTprotoShema.gen.ts") {
    lastTypeUse.add("RpcErrorS")
    // lastTypeUse.add("RpcErrorT")
  }
  // let maxW = queue.length;
  // let i = 0
  let rem = queue.length;
  // let l = 0;
  for (let j = 0; rem && j < 1000;j++) {
    for (let i = 0; rem && i < queue.length; i++) {
      // if (i > maxW * 2) break;
      let w = queue[i]
      if (!w) continue;
      let found = false
      for (let t of w.deps) {
        if (!lastTypeUse.has(t)) {
        // queue.push(w)
        // console.log("n", t, w.n)
          found = true
          break
        }
      }
      if (found) continue;
      // console.log(w.n)
      // console.log(w.n, ...w.deps)
      lastTypeUse.add(w.n)
      l(w.desc)
      // maxW = queue.length
      queue[i] = null
      rem--
    }
  }
  for (let i = 0;i<queue.length;i++) {
    let w = queue[i]
    if (!w) continue;
    console.log(w.n, ...w.deps)
    l(w.desc)
  }
  l('CallDeclareQueue()')
  fs.writeFileSync(file, out.map(v => v.join(" ")).join("\n"))
  lastTypeUse.clear();
  queue = []
  out = []
}

main().catch(e => console.error(e.stack));
 // "start": "tsc && node generator.js && rm -rf ./*.js && prettier --write *.gen.ts  &&  yarn tslint --force --fix -q *.gen.ts 2>/dev/null 1>/dev/null",
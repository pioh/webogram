import * as camelCase from "camelcase";
import * as fs from "fs";

import { mtprotoJson } from "./mtprotoJson";
import { jsonApi } from "./schemaJson";

let out: string[][] = [];
let l = (...args: any[]) => out.push(args);
function WriteHeader(file: string) {
  l(`
  import {ByteBuffer} from "../ByteBuffer"
  import {ApiInvoker} from "../ApiInvoker"
  import {Connection} from "../Connection"
  import {panic, AllStructs, ProtoLong, IStruct, OneOf, TMethod} from "../SchemaHelpers"
  `);
  if (file !== "./MTprotoShema.gen.ts") {
    l(`import { RpcErrorS } from "./MTprotoShema.gen";`);
  }
}
let types = new Map<string, [string[], boolean]>();

const addType = (t: string, p: string, isMethod: boolean) => {
  if (!types.get(t)) types.set(t, [[], isMethod]);
  types.get(t)![0].push(p);
};

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
  // index: number;
}

function mapType(type: string, isType = false): TypeDesc {
  switch (type) {
    case "true":
      return {
        value: "true",
        type: "true",
        read: "val = true",
        write: ""
      };
    case "#":
    case "int":
      return {
        value: "0",
        type: "number",
        read: "val = buf.readInt()",
        write: "buf.writeInt(val)"
      };
    case "long":
      return {
        value: "[0, 0]",
        type: "ProtoLong",
        read: "val = buf.readLong()",
        write: "buf.writeLong(val)"
      };
    case "double":
      return {
        value: "0.0",
        type: "number",
        read: "val = buf.readDouble()",
        write: "buf.writeDouble(val)"
      };
    case "string":
      return {
        value: '""',
        type: "string",
        read: "val = buf.readString()",
        write: "buf.writeString(val)"
      };
    case "bytes":
      return {
        value: "new Uint8Array()",
        type: "Uint8Array",
        read: "val = buf.readBytes()",
        write: "buf.writeBytes(val)"
      };
    case "int64":
      return {
        value: "new Uint8Array(8)",
        type: "Uint8Array",
        read: "val = buf.readU8A(2)",
        write: "buf.writeU8A(val)"
      };
    case "int128":
      return {
        value: "new Uint8Array(16)",
        type: "Uint8Array",
        read: "val = buf.readU8A(4)",
        write: "buf.writeU8A(val)"
      };
    case "int256":
      return {
        value: "new Uint8Array(32)",
        type: "Uint8Array",
        read: "val = buf.readU8A(8)",
        write: "buf.writeU8A(val)"
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
        write: "val._write(buf)"
      };
    case "!X":
      return {
        value: `new OneOf()`,
        type: `TMethod`,
        read: `
          val = val._read(buf)
          if (val instanceof OneOf) val = val.unwrap();
          `,
        write: "val._write(buf)"
      };
    case "%Message":
      return {
        value: `new ${toName("Message")}()`,
        type: `${toName("Message")}`,
        read: `val = val._read(buf, true)
        if (val instanceof OneOf) val = val.unwrap();
        `,
        write: "val._write(buf, true)"
      };
  }

  let flag = type.match(/(\w+)\.(\d+)\?(\S+)/);
  if (flag) {
    let t = mapType(flag[3], true);
    usedTypes.add(t.type);
    return {
      ...t,
      optionalIndex: Number(flag[2]),
      optionalName: flag[1]
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
    `
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
    write: "val._write(buf)"
  };
}

async function main() {
  await processFile(jsonApi, "./ApiShema.gen.ts");
  await processFile(mtprotoJson, "./MTprotoShema.gen.ts");
}
async function processFile(json: typeof jsonApi, output: string) {
  out = [];
  types.clear();
  usedTypes.clear();
  WriteHeader(output);
  for (let c of json.constructors) {
    AddConstructor(c, false);
  }

  let used = new Set([...usedTypes]);
  let tts: typeof types = new Map(
    [...types].map(([t, [p, isMethod]]) => [t, [[...p], isMethod]])
  );
  for (let [t, [p, isMethod]] of tts) {
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
      l(`
      export type ${t} = ${p.map(v => `${v}`).join(" | ")};
      export const ${t} = OneOf;
      `);
    } else if (
      p.length === 1 &&
      (used.has(t) || t.slice(0, -1) !== p[0].slice(0, -1))
    ) {
      used.add(t);
      usedTypes.add(t);
      l(`
      export const ${t} = ${p[0]};
      export type ${t} = ${p[0]};
      `);
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
  tts = new Map(
    [...types].map(([t, [p, isMethod]]) => [t, [[...p], isMethod]])
  );
  for (let [t, [p, isMethod]] of tts) {
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
      l(`
      export type ${t} = ${p.map(v => `${v}`).join(" | ")} | OneOf<${p
        .map(v => `typeof ${v}`)
        .join(" | ")}, ${p.map(v => `${v}`).join(" | ")}>;

      export const ${t} = OneOf;
      `);
    } else if (p.length === 1 && t.slice(0, -1) !== p[0].slice(0, -1)) {
      l(`
      export const ${t} = ${p[0]};
      export type ${t} = ${p[0]};
      `);
    }
  }
  for (let m of json.methods) {
    AddMethod(m, used);
  }
  methodGeneration = false;
  return new Promise(r =>
    fs.writeFile(output, out.map(v => v.join(" ")).join("\n"), r)
  );
}

function AddMethod(m: typeof jsonApi.methods[0], used: Set<string>) {
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
  l(`
  /**
   * ${m.method}:${m.type}
   * #${id.toString(16)}:${id}:${m.id}
   * ${m.params.map(p => `${p.name}:${p.type}`).join("\n* ")}
   */
  export function Call${name} (invoker: ApiInvoker|Connection, req: ${name}): Promise<(${
    W.type
  }|${toName("RpcError")})&{dc: number}> {
    return invoker.call(req);
  }
  `);
}
function AddConstructor(
  c: typeof jsonApi.constructors[0] & { returnType?: string },
  isMethod: boolean
) {
  let P = toName(c.predicate, isMethod ? "M" : "S");
  addType(c.type, c.predicate, isMethod);

  let id = Number(c.id);
  if (id < 0) id += Math.pow(2, 32);
  let isMessage = 0x5bb8e511 === id;
  let isVector = 0x1cb5c415 === id;
  l(`
      /**
       * ${c.predicate}:${c.type} ${c.returnType || ""}
       * #${id.toString(16)}:${id}:${c.id}
       * ${c.params.map(p => `${p.name}:${p.type}`).join("\n* ")}
       */
      export class ${P}${isVector?"<T = unknown>":""} {
        static _id = 0x${id.toString(16)}
        ${c.returnType ? `_method() {}` : ""}
        _values = [${c.params
          .map(pr => mapType(pr.type).value)
          .join(", ")}] as unknown as ${
    isVector && !c.params.length ? "T" : ""
  }[${c.params.map(pr => mapType(pr.type).type).join(", ")}];
        ${
          isMessage
            ? `
        buf = new Uint8Array();
        `
            : ""
        }

        ${c.params
          .map((p, i) => {
            let t = mapType(p.type);
            return `
            get_${p.name} (): ${t.type} {
            return this._values[${i}];
          }
          set_${p.name} (val: ${t.type}): this {
            this._values[${i}] = val;
            ${
              t.optionalName
                ? `
            this.set_${t.optionalName}(this.get_${
                    t.optionalName
                  }() | (1<<${t.optionalIndex || 0}));
            `
                : ""
            }
            return this;
          }
          ${
            t.optionalName
              ? `
          has_${p.name} (): boolean {
            return !!(this.get_${t.optionalName}() & (1<<${t.optionalIndex ||
                  0}));
          }
          `
              : ""
          }
        `;
          })
          .join("")}
          _write(buf: ByteBuffer, noId = false): this {
            if (!noId) buf.writeInt(${P}._id);
            ${isMessage ? `let size = buf.size;` : ""}
            ${c.params.length ? "let values = this._values;" : ""}
            ${c.params
              .map((p, i) => {
                let t = mapType(p.type);
                return `
                ${t.optionalName ? `if (this.has_${p.name}())` : ""} {
                  let val = values[${i}] as ${t.type};
                  ${t.write};
                }
              `;
              })
              .join("")}
              ${
                isVector
                  ? `
            buf.writeInt(this._values.length);
            for (let i = 0; i < this._values.length; i++) {
              let val = this._values[i] as any;
              if (Array.isArray(val)) buf.writeLong(val as ProtoLong);
              else if (typeof val === "number") buf.writeInt(val);
              else if (val instanceof Uint8Array) buf.writeBytes(val);
              else if (typeof val === "string") buf.writeString(val);
              else val._write(buf);
            }
            `
                  : ""
              }
            ${
              isMessage
                ? `
                buf.writeIntAt((buf.size - size - 4) * 4, size + 3);
                `
                : ""
            }
            return this;
          }
          _read(buf: ByteBuffer, noId = false): this {
            if (!noId) {
              let id = buf.readUInt();
              if (id !== ${P}._id) panic(id.toString(16));
            }
            ${c.params.length ? "let values = this._values;" : ""}
            ${c.params
              .slice(0, c.params.length - (isMessage ? 1 : 0))
              .map(
                (p, i) => `
                ${
                  mapType(p.type).optionalName
                    ? `if (this.has_${p.name}())`
                    : ""
                }{
                  let val = values[${i}] as ${mapType(p.type).type};
                  ${mapType(p.type).read};
                  values[${i}] = val;
                }
              `
              )
              .join("")}
            ${
              isMessage
                ? `
              this.buf = new Uint8Array(buf.getBuffer8().buffer, buf.offset * 4, this.get_bytes());
              {
                let offset = buf.offset;
                let val = values[${3}] as ${mapType(c.params[3].type).type};
                try {
                  ${mapType(c.params[3].type).read};
                } catch (e) {
                  console.error("skip", e.stack)
                }
                buf.offset = offset + Math.ceil(this.get_bytes() / 4)
                values[${3}] = val;
              }
            `
                : ""
            }
            ${
              isVector
                ? `
            let len = buf.readInt();
            for (let i = 0; i < len; i++) {
              let item = new OneOf()._read(buf);
              this._values.push(item as any);
            }
            `
                : ""
            }

            return this;
          }

          ${isVector ? `
            set_values(v: T[]): this {
              this._values = v as any;
              return this;
            }
            get_values(): T[] {
              return this._values as unknown as T[];
            }
          ` :""}
      }
      AllStructs.set(${P}._id, ${P});
    `);
}

main().catch(e => console.error(e.stack));

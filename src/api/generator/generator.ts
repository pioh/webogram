import * as camelCase from "camelcase";
import * as fs from "fs";

import { mtprotoJson } from "./mtprotoJson";
import { jsonApi } from "./schemaJson";

let out: string[][] = [];
let l = (...args: any[]) => out.push(args);
l(`import {ByteBuffer} from "../ByteBuffer"`);
l(`import {ApiInvoker} from "../ApiInvoker"`);
l(`function panic(...args: any[]) {
  throw new Error("serialization fail\\n" + JSON.stringify(args, void 0, 2));
}`);
l(`
export const AllStructs = new Map<number, typeof IStruct>();
`);
l(`export interface Type<T> extends Function { new (...args: any[]): T; }`);
l("export type ProtoLong = [number, number]");
l(`
export abstract class IStruct {
  static _id: number;
  abstract _read(buf: ByteBuffer): IStruct;
  abstract _write(buf: ByteBuffer): IStruct;
}
`);

l(`
export class OneOf<T extends typeof IStruct = any, K extends IStruct = any> {
  getTypes(): T[] {return []}
  instance: K | null = null;
  _write(buf: ByteBuffer): this {
    if (!this.instance) panic("nothing to write", this);
    return this;
  }
  _read(buf: ByteBuffer): this {
    let id = buf.readUInt();
    let types = this.getTypes();
    let ctor = types.find(c => c._id === id);
    if (types.length !== 0) console.error("got unexpected struct");
    ctor = AllStructs.get(id)  as T|undefined;
    if (!ctor) panic("unknown ctor id " + id, this);
    buf.offset--;
    this.instance = new (ctor as any)();
    this.instance!._read(buf);
    return this;
  }
  unwrap(): K {
    return this.instance!;
  }
  set(instance: K) {
    this.instance = instance;
  }
}`);
let types = new Map<string, string[]>();

const addType = (t: string, p: string) => {
  if (!types.get(t)) types.set(t, []);
  types.get(t)!.push(p);
};

const toName = (n: string, prefix = "") => {
  // if (n.match("^(input|vector)")) prefix = "TT";
  n = n
    .replace(/\.| /g, "_")
    .split("_")
    .map((v, i) => {
      if (v.substr(0, 1).toUpperCase() !== v.substr(0, 1))
        return (i > 0 ? "T_" : "X_") + v;
      else return (i > 0 ? "X_" : "T_") + v;
    })
    .join("_");

  let name =
    prefix +
    camelCase(n, {
      pascalCase: true
    });
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

function mapType(type: string): TypeDesc {
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
    case "!X":
    case "Object":
      return {
        value: `new OneOf()`,
        type: `OneOf`,
        read: "val = val._read(buf)",
        write: "val._write(buf)"
      };
  }

  let flag = type.match(/(\w+)\.(\d+)\?(\S+)/);
  if (flag) {
    let t = mapType(flag[3]);
    return {
      ...t,
      optionalIndex: Number(flag[2]),
      optionalName: flag[1]
    };
  }

  let Vector = type.match(/^Vector<(.+)>$/);
  if (Vector) {
    let t = mapType(Vector[1]);
    return {
      value: `[]`,
      type: `Array<${t.type}>`,
      read: `
        let len = buf.readInt();
        val.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ${t.type} = ${t.value};
          ${t.read};
          vector.push(val);
        }
        `,
      write: `
        buf.writeInt(val.length);
        let vector = val;
        for (let i = 0; i < vector.length; i++) {
          let val = vector[i];
          ${t.write};
        }
    `
    };
  }
  if (!type.match(/\w+/)) console.error("unknown type " + type);

  return {
    value: `new ${toName(type)}()`,
    type: `${toName(type)}`,
    read: "val = val._read(buf)",
    write: "val._write(buf)"
  };
}

async function main() {
  await processFile(jsonApi, "./ApiShema.gen.ts");
  await processFile(mtprotoJson, "./MTprotoShema.gen.ts");
}
async function processFile(json: typeof jsonApi, output: string) {
  out = [];
  for (let c of json.constructors) {
    AddConstructor(c);
  }
  for (let m of json.methods) {
    let o = {
      type: toName(m.method, "M"),
      predicate: toName(m.method, "M"),
      params: m.params,
      id: m.id
    };
    AddConstructor(o);
    AddMethod(m);
  }

  for (let [t, p] of types) {
    p = p.filter(v => v !== t);
    if (p.length > 1) {
      // l(`type I${t} = IOneOf<${p.join(" | ")}>`);
      l(`
      const ${t}OneOfTypes: Array<${p
        .map(v => `typeof ${v}`)
        .join(" | ")}> = [${p.join(", ")}];
      export class ${t} extends OneOf<${p
        .map(v => `typeof ${v}`)
        .join(" | ")}, ${p.map(v => `${v}`).join(" | ")}> {
        getTypes() {
          return ${t}OneOfTypes;
        }
      }`);
    } else if (p.length === 1) {
      l(`export class ${t} extends ${p} {
      }`);
    }
  }

  return new Promise(r =>
    fs.writeFile(output, out.map(v => v.join(" ")).join("\n"), r)
  );
}

function AddMethod(m: typeof jsonApi.methods[0]) {
  // let M = toName(m.method, "M");
  let name = toName(toName(m.method, "M"));
  // let t = m.type;
  let W = mapType(m.type);
  // let repeated = false;
  // let vector = t.match(/^Vector<(.*)>$/i);
  // if (vector) {
  //   t = vector[1];
  //   repeated = true;
  // }
  let id = Number(m.id);
  if (id < 0) id += Math.pow(2, 31);
  l(`
  /**
   * ${m.method}:${m.type}
   * #${id.toString(16)}:${id}:${m.id}
   * ${m.params.map(p => `${p.name}:${p.type}`).join("\n* ")}
   */
  export function Call${name} (invoker: ApiInvoker, req: ${name}): Promise<${
    W.type
  }> {
    return invoker.call(req, (buf: ByteBuffer): ${W.type} => {
      let val: ${W.type} = ${W.value};
      ${W.read};
      return val;
    });
  }
  `);
}
function AddConstructor(c: typeof jsonApi.constructors[0]) {
  let P = toName(c.predicate);
  let t = toName(c.type);
  addType(t, P);
  let id = Number(c.id);
  if (id < 0) id += Math.pow(2, 31);
  l(`
      /**
       * ${c.predicate}:${c.type}
       * #${id.toString(16)}:${id}:${c.id}
       * ${c.params.map(p => `${p.name}:${p.type}`).join("\n* ")}
       */
      export class ${P} {
        static _id = 0x${id.toString(16)}
        _values = [${c.params
          .map(pr => mapType(pr.type).value)
          .join(", ")}] as [${c.params
    .map(pr => mapType(pr.type).type)
    .join(", ")}];

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
          _write(buf: ByteBuffer): this {
            buf.writeInt(${P}._id);
            ${c.params.length ? "let values = this._values;" : ""}
            ${c.params
              .map(
                (p, i) => `
                {
                  let val = values[${i}] as ${mapType(p.type).type};
                  ${mapType(p.type).write};
                }
              `
              )
              .join("")}
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== ${P}._id) panic(id.toString(16));
            ${c.params.length ? "let values = this._values;" : ""}
            ${c.params
              .map(
                (p, i) => `
                {
                  let val = values[${i}] as ${mapType(p.type).type};
                  ${mapType(p.type).read};
                  values[${i}] = val;
                }
              `
              )
              .join("")}
            return this;
          }
      }
      AllStructs.set(${P}._id, ${P});
    `);
}

main().catch(e => console.error(e.stack));

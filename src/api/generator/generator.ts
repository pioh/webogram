import * as camelCase from "camelcase";
import * as fs from "fs";

import { mtprotoJson } from "./mtprotoJson";
import { jsonApi } from "./schemaJson";

let out: string[][] = [];
let l = (...args: any[]) => out.push(args);
function WriteHeader() {
  l(`
  import {ByteBuffer} from "../ByteBuffer"
  import {ApiInvoker} from "../ApiInvoker"
  import {panic, AllStructs, ProtoLong, IStruct, OneOf} from "../SchemaHelpers"
  `);
}
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
    case "HttpWait":
      return {
        value: `new OneOf()`,
        type: `OneOf`,
        read: "val = val._read(buf)",
        write: "val._write(buf)"
      };
    case "%Message":
      return {
        value: `new ${toName("Message")}()`,
        type: `${toName("Message")}`,
        read: "val = val._read(buf, true)",
        write: "val._write(buf, true)"
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

  let Vector = type.match(/^Vector<(.+)>$/i);
  if (Vector) {
    let readId = type.charAt(0) === "V";
    let t = mapType(Vector[1]);
    return {
      value: `[]`,
      type: `Array<${t.type}>`,
      read: `
        ${
          readId
            ? `
        if (buf.readUInt() !== 481674261) panic("not vector")
        `
            : ""
        }
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
        ${readId ? `buf.writeInt(481674261);` : ""}
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
  types.clear();
  WriteHeader();
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
  if (id < 0) id += Math.pow(2, 32);
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
  if (id < 0) id += Math.pow(2, 32);
  let isMessage = 0x5bb8e511 === id;
  let isVector = 0x1cb5c415 === id;
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
          .join(", ")}] as ${
    isVector && !c.params.length ? "any" : ""
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
              .map(
                (p, i) => `
                {
                  let val = values[${i}] as ${mapType(p.type).type};
                  ${mapType(p.type).write};
                }
              `
              )
              .join("")}
              ${
                isVector
                  ? `
            buf.writeInt(this._values.length);
            for (let i = 0; i < this._values.length; i++) {
              this._values[i]._write(buf);
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
                {
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
                  console.error("skip", e.message)
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
              let item = new OneOf()._read(buf).unwrap();
              this._values.push(item);
            }
            `
                : ""
            }

            return this;
          }
      }
      AllStructs.set(${P}._id, ${P});
    `);
}

main().catch(e => console.error(e.stack));

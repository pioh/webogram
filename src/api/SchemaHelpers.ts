import { ApiInvoker } from "./ApiInvoker";
import { ByteBuffer } from "./ByteBuffer";
import { Connection } from "./Connection";
import { VectorS } from "./generator/ApiShema.gen";

export function panic(...args: any[]) {
  throw new Error("serialization fail\n" + JSON.stringify(args, void 0, 2));
}

export const AllStructs = new Map<number, typeof IStruct>();

export type ProtoLong = [number, number];

export abstract class IStruct {
  abstract _id: number;
  abstract _values: unknown[];
  abstract _read(buf: ByteBuffer, noId?: boolean): IStruct;
  abstract _write(buf: ByteBuffer, noId?: boolean): IStruct;
}

export class OneOf<
  T extends typeof IStruct = typeof IStruct,
  K extends IStruct = IStruct
> implements IStruct {
  _values = [];
  _id = 0;
  _method() {}
  instance: K | null = null;
  constructor(instance?: K) {
    if (instance) this.instance = instance;
  }
  // getTypes(): T[] {
  //   return [];
  // }
  _write(buf: ByteBuffer, noId = false): this {
    if (!this.instance) panic("nothing to write", this);
    this.instance!._write(buf, noId);
    return this;
  }
  _read(buf: ByteBuffer): K {
    let id = buf.readUInt();
    // let types = this.getTypes();
    // let ctor = types.find(c => c._id === id);
    // if (types.length !== 0) console.error("got unexpected struct");
    let ctor = AllStructs.get(id) as T | undefined;
    if (!ctor) panic("unknown ctor id " + id, this);
    buf.offset--;
    this.instance = new (ctor as any)();
    this.instance!._read(buf);
    return this.instance!;
  }
  unwrap(): K {
    return this.instance!;
  }
  set(instance: K): this {
    this.instance = instance;
    return this;
  }
}

export interface TMethod extends IStruct {
  _method(): void;
  _read(buf: ByteBuffer, noId?: boolean): TMethod;
  _write(buf: ByteBuffer, noId?: boolean): TMethod;
}
let getters = new Map<number, any>();
let setters = new Map<number, any>();
// let has = new Map<number, any>();
function getter(i: number) {
  let f = getters.get(i);
  if (!f) {
    f = function(this: any) {
      return this._values[i];
    };
    getters.set(i, f);
  }
  return f;
}
function setter(i: number) {
  let f = setters.get(i);
  if (!f) {
    f = function(this: any, v: any) {
      this._values[i] = v;
      return this;
    };
    setters.set(i, f);
  }
  return f;
}
let queue: Array<() => void> = [];
export function CallDeclareQueue() {
  for (let f of queue) f();
  queue = [];
}

export function r<T>(id: number, name: string, props: () => any[]): T {
  let ctor = function(this: any) {
    let p = props();
    this._values = [];
    for (let i = 0; i < p.length; i += 2)
      this._values.push((p[i + 1] as ReadWriter).create());
  };
  ctor.prototype.constructor._id = id;
  Object.defineProperty(ctor, "name", { writable: false, value: name });
  Object.defineProperty(ctor.prototype.constructor, "name", {
    writable: false,
    value: name
  });
  let isMessage = 0x5bb8e511 === id;
  let isVector = 0x1cb5c415 === id;
  queue.push(() => {
    let p = props();
    (ctor as any).prototype.name = name;
    ctor.prototype._id = id;
    ctor.prototype._write = function(
      this: any,
      buf: ByteBuffer,
      noId: boolean
    ) {
      if (!noId && !isMessage) buf.writeInt(id);
      let size = buf.size;
      for (let i = 0; i < p.length; i += 2) {
        (p[i + 1] as ReadWriter).write(
          i / 2,
          buf,
          this._values[i / 2],
          this._values,
          void 0
        );
      }
      if (isVector) {
        buf.writeInt(this._values.length);
        for (let i = 0; i < this._values.length; i++) {
          let val = this._values[i] as any;
          if (Array.isArray(val)) buf.writeLong(val as ProtoLong);
          else if (typeof val === "number") buf.writeInt(val);
          else if (val instanceof Uint8Array) buf.writeBytes(val);
          else if (typeof val === "string") buf.writeString(val);
          else val._write(buf);
        }
      }
      if (isMessage) {
        buf.writeIntAt((buf.size - size - 4) * 4, size + 3);
      }
      return this;
    };
    ctor.prototype._read = function(this: any, buf: ByteBuffer, noId: boolean) {
      if (!noId && !isMessage) {
        let _id = buf.readUInt();
        if (id !== _id) panic(_id.toString(16));
      }
      let size = buf.size;
      try {
        for (let i = 0; i < p.length; i += 2) {
          this._values[i / 2] = (p[i + 1] as ReadWriter).read(
            i / 2,
            buf,
            this._values,
            void 0
          );
        }
      } catch (e) {
        if (isMessage) {
          buf.size = size + this._values[2] / 4 + 4;
          console.error(e.stack);
        } else {
          throw e;
        }
      }
      if (isVector) {
        let len = buf.readInt();
        for (let i = 0; i < len; i++) {
          let item = new OneOf()._read(buf);
          this._values.push(item as any);
        }
      }
      return this;
    };
    ctor.prototype.set_values = function(this: any, values: any[]) {
      this._values = values;
      return this;
    };
    ctor.prototype.get_values = function(this: any) {
      return this._values;
    };

    for (let i = 0; i < p.length; i += 2) {
      let name = p[i];
      let rw = p[i + 1];
      ctor.prototype["get_" + name] = getter(i / 2);

      if (rw.f !== void 0) {
        ctor.prototype["set_" + name] = function(this: any, v: any) {
          this._values[rw.f] |= 1 << rw.m;
          this._values[i] = v;
          return this;
        };
        ctor.prototype["has_" + name] = function() {
          return !!(this._values[rw.f] & (1 << rw.m));
        };
      } else {
        ctor.prototype["set_" + name] = setter(i / 2);
      }
    }
  });
  AllStructs.set(id, ctor as any);
  return (ctor as unknown) as T;
}

interface ReadWriter {
  f?: number;
  m?: number;
  read(
    index: number,
    buf: ByteBuffer,
    values: any[],
    noId: boolean | undefined
  ): any;
  write(
    index: number,
    buf: ByteBuffer,
    val: any,
    values: any[],
    noId: boolean | undefined
  ): void;
  create: () => any;
}

export const IntRW = {
  create: () => 0,
  read: (index: number, buf: ByteBuffer) => buf.readInt(),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeInt(val)
};
export const LongRW = {
  create: () => [0, 0],
  read: (index: number, buf: ByteBuffer) => buf.readLong(),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeLong(val)
};
export const DoubleRW = {
  create: () => 0,
  read: (index: number, buf: ByteBuffer) => buf.readDouble(),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeDouble(val)
};
export const StringRW = {
  create: () => "",
  read: (index: number, buf: ByteBuffer) => buf.readString(),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeString(val)
};
let u = new Uint8Array();
export const BytesRW = {
  create: () => u,
  read: (index: number, buf: ByteBuffer) => buf.readBytes(),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeBytes(val)
};
export const Int64RW = {
  create: () => new Uint8Array(8),
  read: (index: number, buf: ByteBuffer) => buf.readU8A(2),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeU8A(val)
};
export const Int128RW = {
  create: () => new Uint8Array(16),
  read: (index: number, buf: ByteBuffer) => buf.readU8A(4),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeU8A(val)
};
export const Int256RW = {
  create: () => new Uint8Array(32),
  read: (index: number, buf: ByteBuffer) => buf.readU8A(8),
  write: (index: number, buf: ByteBuffer, val: any) => buf.writeU8A(val)
};
export const OneOfRW = {
  create: () => new OneOf(),
  read: (index: number, buf: ByteBuffer, values: any[]) =>
    new OneOf()._read(buf),
  write: (
    index: number,
    buf: ByteBuffer,
    val: any,
    values: any[],
    noId = false
  ) => val._write(buf, noId)
};
export const TypeRW = (t: any, NoID = false) => ({
  create: () => new t(),
  read: (
    index: number,
    buf: ByteBuffer,
    values: any[],
    noId: boolean | undefined
  ) => new t()._read(buf, noId === void 0 ? NoID : noId),
  write: (
    index: number,
    buf: ByteBuffer,
    val: any,
    values: any[],
    noId: boolean | undefined
  ) => val._write(buf, noId === void 0 ? NoID : noId)
});
export const TrueRW = {
  create: () => true,
  read: (index: number, buf: ByteBuffer) => true,
  write: (index: number, buf: ByteBuffer, val: any) => {}
};
export const Optional = (
  rw: ReadWriter,
  flagIndex: number,
  meIndex: number
) => ({
  f: flagIndex,
  m: meIndex,
  create: () => rw.create(),
  read: (index: number, buf: ByteBuffer, values: any[], noId: boolean) => {
    let f = values[flagIndex];
    if (f & (1 << meIndex)) {
      return rw.read(index, buf, values, noId);
    }
    return values[index];
  },
  write: (
    index: number,
    buf: ByteBuffer,
    val: any,
    values: any[],
    noId: boolean
  ) => {
    let f = values[flagIndex];
    if (f & (1 << meIndex)) {
      rw.write(index, buf, values[index], values, noId);
    }
  }
});

export const VectorRW = (rw: ReadWriter = OneOfRW, small = false) => ({
  create: () => new VectorS(),
  read: (index: number, buf: ByteBuffer, values: any[], noId: boolean) => {
    if (!small) {
      let _id = buf.readUInt();
      if (0x1cb5c415 !== _id) panic(_id.toString(16));
    }
    let len = buf.readInt();
    let vector = new VectorS();
    // let vector = new Array(len);
    for (let i = 0; i < len; i++) {
      vector._values.push(rw.read(0, buf, [], false));
    }
    return vector;
  },
  write: (
    index: number,
    buf: ByteBuffer,
    val: any,
    values: any[],
    noId: boolean
  ) => {
    if (!small) buf.writeInt(481674261);
    if (!Array.isArray(val)) val = val.get_values();
    buf.writeInt(val.length);
    for (let i = 0; i < val.length; i++) {
      rw.write(0, buf, val[i], val[i]._values, false);
    }
  }
});

export function c(invoker: ApiInvoker | Connection, req: any): Promise<any> {
  return invoker.call(req);
}

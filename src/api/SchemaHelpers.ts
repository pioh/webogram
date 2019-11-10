import { ByteBuffer } from "./ByteBuffer";

export function panic(...args: any[]) {
  throw new Error("serialization fail\n" + JSON.stringify(args, void 0, 2));
}

export const AllStructs = new Map<number, typeof IStruct>();

export type ProtoLong = [number, number];

export abstract class IStruct {
  static _id: number;
  abstract _read(buf: ByteBuffer, noId?: boolean): IStruct;
  abstract _write(buf: ByteBuffer, noId?: boolean): IStruct;
}

export class OneOf<
  T extends typeof IStruct = typeof IStruct,
  K extends IStruct = IStruct
> {
  instance: K | null = null;
  constructor(instance?: K) {
    if (instance) this.instance = instance;
  }
  getTypes(): T[] {
    return [];
  }
  _write(buf: ByteBuffer, noId = false): this {
    if (!this.instance) panic("nothing to write", this);
    this.instance!._write(buf, noId);
    return this;
  }
  _read(buf: ByteBuffer): this {
    let id = buf.readUInt();
    let types = this.getTypes();
    let ctor = types.find(c => c._id === id);
    if (types.length !== 0) console.error("got unexpected struct");
    ctor = AllStructs.get(id) as T | undefined;
    if (!ctor) panic("unknown ctor id " + id, this);
    buf.offset--;
    this.instance = new (ctor as any)();
    this.instance!._read(buf);
    return this;
  }
  unwrap(): K {
    return this.instance!;
  }
  set(instance: K): this {
    this.instance = instance;
    return this;
  }
}

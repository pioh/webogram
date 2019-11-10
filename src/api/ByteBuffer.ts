import { ILong } from "lib/ILong";

import {
  BoolFalse,
  BoolTrue,
  IMethod,
  IOneOf,
  ITypePrimitive,
  ITypeStruct,
  ITypeVector,
  NoConstructor,
  RpcError,
  RpcResult,
  schema,
  TypeBytes,
  TypeFlag,
  TypeInt,
  TypeInt128,
  TypeInt256,
  TypeInt64,
  TypeLong,
  TypeMessage,
  TypeObject,
  TypeOneOf,
  TypeString,
  TypeTrue,
  TypeVector
} from "./schema";

const Pool: Uint32Array[] = [];

export class ByteBuffer {
  private buf32: Uint32Array;
  private buf8: Uint8Array;
  size: number;
  offset = 0;
  isDebug = false;
  requests?: Map<string, { method: IMethod; params: any[] }>;

  constructor(buf?: Uint32Array | Uint8Array) {
    if (buf instanceof Uint8Array) {
      buf = new Uint32Array(buf.buffer, buf.byteOffset, buf.length / 4);
    }
    this.size = (buf && buf.length) || 0;
    this.buf32 = buf || Pool.pop() || new Uint32Array(new ArrayBuffer(64));
    this.buf8 = new Uint8Array(this.buf32.buffer);
  }

  debug(...args: any[]) {
    if (!this.isDebug) return;
    console.log(...args);
  }

  destroy() {
    if (Pool.length > 128) return;
    this.buf32.fill(0);
    Pool.push(this.buf32);
    this.buf32 = (null as unknown) as Uint32Array; // protect buffer pool
    this.buf8 = (null as unknown) as Uint8Array;
    this.offset = 0;
    this.size = 0;
  }
  clear() {
    this.offset = 0;
    this.size = 0;
    this.buf32.fill(0);
  }
  prepend(buf: ByteBuffer) {
    this.resize(buf.size);
    this.buf32.copyWithin(buf.size, 0, this.size);
    for (let i = 0; i < buf.size; i++) {
      this.buf32[i] = buf.buf32[i];
    }
    this.size += buf.size;
  }
  append(buf: ByteBuffer) {
    this.resize(buf.size);
    for (let i = 0; i < buf.size; i++) {
      this.buf32[this.size++] = buf.buf32[i];
    }
  }
  padding(size: number) {
    this.resize(size);
    this.size += size;
  }
  writeBytes(bytes: Uint8Array) {
    if (bytes instanceof Uint32Array) {
      bytes = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.length * 4);
    } else if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes);
    }
    this.debug(bytes[0] > 1 << 7 ? "W TRUE 2" : "W FALSE 2");
    let len = bytes.length;
    this.resize(Math.ceil(bytes.length / 4) + 1);
    let size = this.size * 4;

    if (len <= 253) {
      this.buf8[size++] = len;
    } else {
      this.buf8[size++] = 254;
      this.buf8[size++] = len & 0xff;
      this.buf8[size++] = (len & 0xff00) >> 8;
      this.buf8[size++] = (len & 0xff0000) >> 16;
    }

    for (let i = 0; i < len; i++) {
      this.buf8[size++] = bytes[i];
    }
    this.size = Math.ceil(size / 4);
  }
  writeU8Aat(bytes: Uint8Array, index: number) {
    if (Math.ceil(bytes.length / 4) + index >= this.size) {
      throw new Error("overflow");
    }
    let size = this.size;
    this.size = index;
    this.writeU8A(bytes);
    this.size = size;
  }
  writeU8A(bytes: Uint8Array) {
    if (bytes instanceof Uint32Array) {
      bytes = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.length * 4);
    } else if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes);
    }
    let sizeDiff = Math.ceil(bytes.length / 4);
    this.debug(bytes[0] > 1 << 7 ? "W TRUE" : "W FALSE");
    this.resize(sizeDiff);
    for (let i = 0; i < bytes.length; i++) {
      this.buf8[this.size * 4 + i] = bytes[i];
    }
    this.size += sizeDiff;
  }
  writeLong(val: ILong) {
    this.writeUInt(val[0], val[1]);
  }
  writeInt(...values: number[]) {
    this.resize(values.length);
    for (let val of values) {
      if (val < 0) val = val + 4294967296;
      this.buf32[this.size++] = val;
    }
  }
  writeUInt(...values: number[]) {
    this.resize(values.length);
    for (let val of values) {
      if (val < 0) val = val + 4294967296;
      this.buf32[this.size++] = val;
    }
  }
  readUInt() {
    return this.buf32[this.offset++];
  }
  readLong(): ILong {
    let a: ILong = [this.readUInt(), this.readInt()];
    if (a[1] < 0) this.debug("READ LONG NEG");
    return a;
  }
  readInt() {
    let val = this.buf32[this.offset++];
    if (val > 2147483647) {
      val = val - 4294967296;
    }
    return val;
  }
  readU8A(size: number) {
    let bytes = this.buf8.subarray(this.offset * 4, this.offset * 4 + size * 4);
    this.offset += size;
    this.debug(bytes[0] > 1 << 7 ? "TRUE" : "FALSE");
    return bytes;
  }
  writeDouble(val: number) {
    this.writeU8A(new Uint8Array(new Float64Array([val]).buffer));
  }
  readDouble(): number {
    return new Float64Array(this.readU8A(2).slice().buffer)[0];
  }
  readBytes() {
    let offset = this.offset * 4;
    let size = this.buf8[offset++];

    if (size == 254) {
      size =
        this.buf8[offset++] |
        (this.buf8[offset++] << 8) |
        (this.buf8[offset++] << 16);
    }

    let bytes = this.buf8.subarray(offset, offset + size);
    offset += size;
    this.offset = Math.ceil(offset / 4);
    this.debug(bytes[0] > 1 << 7 ? "TRUE 2" : "FALSE 2");

    return bytes;
  }
  readString() {
    let offset = this.offset * 4;
    let size = this.buf8[offset++];

    if (size == 254) {
      size =
        this.buf8[offset++] |
        (this.buf8[offset++] << 8) |
        (this.buf8[offset++] << 16);
    }

    let sUTF8 = "";
    for (let i = 0; i < size; i++) {
      sUTF8 += String.fromCharCode(this.buf8[offset++]);
    }
    this.offset = Math.ceil(offset / 4);
    try {
      sUTF8 = decodeURIComponent(escape(sUTF8));
    } catch (e) {}

    return sUTF8;
  }
  writeString(s: string) {
    if (s === undefined) {
      s = "";
    }
    let sUTF8 = unescape(encodeURIComponent(s));
    this.resize(Math.ceil((sUTF8.length + 8) / 4));

    let len = sUTF8.length;
    let size = this.size * 4;
    if (len <= 253) {
      this.buf8[size++] = len;
    } else {
      this.buf8[size++] = 254;
      this.buf8[size++] = len & 0xff;
      this.buf8[size++] = (len & 0xff00) >> 8;
      this.buf8[size++] = (len & 0xff0000) >> 16;
    }
    for (let i = 0; i < len; i++) {
      this.buf8[size++] = sUTF8.charCodeAt(i);
    }
    this.size = Math.ceil(size / 4);
  }
  writeIntAt(val: number, index: number) {
    if (val < 0) val = val + 4294967296;
    this.buf32[index] = val;
  }
  writeLongAt([low, high]: ILong, index: number) {
    if (low < 0) low = low + 4294967296;
    this.buf32[index] = low;
    this.buf32[index + 1] = high;
  }

  writeStruct(method: ITypeStruct | IMethod, params: any[]) {
    this.writeInt(method[0]);
    for (let i = 0; i < method[1].length; i++) {
      this.writeType(method[1][i], params[i]);
    }
  }
  readStruct(...types: ITypeStruct[]): [ITypeStruct, ...any[]] {
    let constructor = this.readUInt();
    if (constructor === 0x3072cfa1) throw new Error("Gzip unimplemented");
    let type: ITypeStruct | IMethod | undefined;
    if (types.length === 0) {
      type = schema.get(constructor);
    } else {
      type = types.find(t => t[0] === constructor);
    }
    switch (type) {
      case BoolTrue:
        return true as any;
      case BoolFalse:
        return false as any;
    }
    if (!type) {
      throw new Error("unknown constructor " + constructor);
    }
    if (type === RpcResult) {
      let msgId = this.readLong();
      if (this.requests && this.requests.has(msgId.join())) {
        let mayBeConstructor = this.readUInt();
        this.offset--;
        if (mayBeConstructor === RpcError[0]) {
          return [type as ITypeStruct, msgId, this.readStruct()];
        }
        let waiter = this.requests.get(msgId.join())!;
        // this.requests.delete(msgId.join())
        if (waiter.method.length !== 3) throw new Error("multi result type");
        let t = waiter.method[2];
        // let message = this.readStruct(...(waiter.method.slice(2) as any));
        let message = [t];
        for (let i = 0; i < t[1].length; i++) {
          message.push(this.readType(t[1][i]));
        }
        return [type as ITypeStruct, msgId, message];
      }
    }

    let result: any[] = [];
    for (let i = 0; i < type[1].length; i++) {
      result.push(this.readType(type[1][i]));
    }
    return [type as ITypeStruct, ...result];
  }
  readVector(
    type: ITypePrimitive | ITypeStruct | IMethod,
    noConstructor = false
  ) {
    if (!noConstructor) {
      let constructor = this.readUInt();
      if (constructor === 0x3072cfa1) throw new Error("Gzip unimplemented");
      if (constructor !== 0x1cb5c415) {
        throw new Error("Invalid vector constructor " + constructor);
      }
    }
    let size = this.readUInt();
    let items = [];
    for (let i = 0; i < size; i++) {
      items.push(this.readType(type));
    }
    return items;
  }
  writeType(
    type: ITypePrimitive | ITypeVector | ITypeStruct | IOneOf,
    value: any
  ) {
    switch (type) {
      case TypeInt128:
        this.writeU8A(value);
        return;
      case TypeInt256:
        this.writeU8A(value);
        return;
      case TypeInt:
        this.writeInt(value);
        return;
      case TypeLong:
        this.writeLong(value);
        return;
      case TypeBytes:
        this.writeBytes(value);
        return;
      case TypeString:
        this.writeString(value);
        return;
    }
    if (type.length >= 2 && Array.isArray(type[1])) {
      this.writeStruct(type as ITypeStruct, value);
      return;
    }
    throw new Error("unimplemented type: " + type);
  }
  readType(
    type: ITypePrimitive | ITypeVector | ITypeStruct | IMethod | IOneOf
  ): any {
    switch (type) {
      case TypeInt64:
        return this.readU8A(2);
      case TypeInt128:
        return this.readU8A(4);
      case TypeTrue:
        return true;
      case TypeInt256:
        return this.readU8A(8);
      case TypeInt:
        return this.readInt();
      case TypeLong:
        return this.readLong();
      case TypeString:
        return this.readString();
      case TypeBytes:
        return this.readBytes();
      case TypeMessage:
        let msgId = this.readLong();
        let seqNo = this.readInt();
        let len = this.readInt();
        return [msgId, seqNo, len, this.readStruct()];
      case TypeObject:
        return this.readStruct();
    }
    if (type.length === 2 && type[0] === TypeVector) {
      return this.readVector(type[1]);
    }
    if (type.length === 3 && type[0] === TypeVector) {
      return this.readVector(type[1], type[2] === NoConstructor);
    }
    if (type.length > 1 && type[0] === TypeOneOf) {
      return this.readStruct(...type.slice(1));
    }
    if (type.length > 1 && type[0] === TypeFlag) {
      let flag = this.readInt();
      let types = type.slice(1);
      let values: any = [];
      for (let i = 0; i < types.length; i++) {
        values.push(null);
        if (typeof types[i] === null) continue;
        if (flag & (1 << 0)) {
          values[i] = this.readType(types[i]);
        }
      }
      return values;
    }
    throw new Error("unimplemented type: " + type);
  }

  getBuffer32() {
    return new Uint32Array(this.buf32.buffer, 0, this.size);
  }

  getBuffer8() {
    return new Uint8Array(this.buf32.buffer, 0, this.size * 4);
  }

  private resize(sizeDiff: number) {
    if ((this.size + sizeDiff) * 4 > this.buf8.buffer.byteLength) {
      let newSize = Math.max(
        this.buf8.buffer.byteLength / 2,
        this.size + sizeDiff + 1
      );
      let newBuffer = new Uint32Array(new ArrayBuffer(newSize * 4));
      for (let i = 0; i < this.size; i++) {
        newBuffer[i] = this.buf32[i];
      }
      this.buf32 = newBuffer;
      this.buf8 = new Uint8Array(this.buf32.buffer);
    }
  }
}

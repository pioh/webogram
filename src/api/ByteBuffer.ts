import { ILong } from "lib/Long";

import {
  IMethod,
  ITypePrimitive,
  ITypeStruct,
  ITypeVector,
  TypeBytes,
  TypeInt128,
  TypeInt256,
  TypeLong,
  TypeString,
  TypeVector
} from "./schema";

const Pool: Uint32Array[] = [];

export class ByteBuffer {
  private buf32: Uint32Array;
  private buf8: Uint8Array;
  size: number;
  offset = 0;

  constructor(buf?: Uint32Array) {
    this.size = (buf && buf.length) || 0;

    this.buf32 = buf || Pool.pop() || new Uint32Array(new ArrayBuffer(64));
    this.buf8 = new Uint8Array(this.buf32.buffer);
  }

  destroy() {
    if (Pool.length > 128) return;
    this.buf32.fill(0);
    Pool.push(this.buf32);
    this.buf32 = (null as unknown) as Uint32Array; // protect buffer pool
    this.buf8 = (null as unknown) as Uint8Array;
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
  writeBytes(bytes: Uint8Array) {
    if (bytes instanceof Uint32Array) {
      bytes = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.length * 4);
    } else if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes);
    }
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
  writeU8A(bytes: Uint8Array) {
    if (bytes instanceof Uint32Array) {
      bytes = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.length * 4);
    } else if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes);
    }
    let sizeDiff = Math.ceil(bytes.length / 4);
    this.resize(sizeDiff);
    for (let i = 0; i < bytes.length; i++) {
      this.buf8[this.size * 4 + i] = bytes[i];
    }
    this.size += sizeDiff;
  }
  writeLong(val: ILong) {
    this.writeInt(...val);
  }
  writeInt(...values: number[]) {
    this.resize(values.length);
    for (let val of values) {
      if (val < 0) val = val + 4294967296;
      this.buf32[this.size++] = val;
    }
  }
  readLong(): ILong {
    return [this.readInt(), this.readInt()];
  }
  readInt() {
    let val = this.buf32[this.offset++];
    if (val > 2147483647) {
      val = val - 4294967296;
    }
    return val;
  }
  readU8A(size: number) {
    let bytes = new Uint8Array(size * 4);
    for (let i = 0; i < size * 4; i++) {
      bytes[i] = this.buf8[this.offset * 4 + i];
    }
    this.offset += size;
    return bytes;
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
  writeIntAt(val: number, index: number) {
    if (val < 0) val = val + 4294967296;
    this.buf32[index] = val;
  }

  writeStruct(method: ITypeStruct | IMethod, params: any[]) {
    this.writeInt(method[0]);
    for (let i = 0; i < method[1].length; i++) {
      this.writeType(method[1][i], params[i]);
    }
  }
  readStruct(type: ITypeStruct): any[] {
    let constructor = this.readInt();
    if (constructor == 0x3072cfa1) throw new Error("Gzip unimplemented");
    if (type[0] !== constructor) throw new Error("type !== constructor");

    let result: any[] = [];
    for (let i = 0; i < type[1].length; i++) {
      result.push(this.readType(type[1][i]));
    }
    return result;
  }
  readVector(type: ITypePrimitive | ITypeVector) {
    let constructor = this.readInt();
    if (constructor === 0x3072cfa1) throw new Error("Gzip unimplemented");
    if (constructor !== 0x1cb5c415) {
      //   throw new Error("Invalid vector constructor " + constructor);
    }
    let size = this.readInt();
    let items = [];
    for (let i = 0; i < size; i++) {
      items.push(this.readType(type));
    }
    return items;
  }
  writeType(type: ITypePrimitive | ITypeVector, value: any) {
    switch (type) {
      case TypeInt128:
        this.writeU8A(value);
        return;
      case TypeInt256:
        this.writeU8A(value);
        return;
      case TypeLong:
        this.writeLong(value);
        return;
      case TypeBytes:
        this.writeBytes(value);
        return;
    }
    throw new Error("unimplemented type: " + type);
  }
  readType(type: ITypePrimitive | ITypeVector): any {
    switch (type) {
      case TypeInt128:
        return this.readU8A(4);
      case TypeInt256:
        return this.readU8A(8);
      case TypeLong:
        return this.readLong();
      case TypeString:
        return this.readString();
      case TypeBytes:
        return this.readBytes();
    }
    if (type.length === 2 && type[0] === TypeVector) {
      return this.readVector(type[1]);
    }
    throw new Error("unimplemented type: " + type);
  }

  getBuffer() {
    return new Uint32Array(this.buf32.buffer, 0, this.size);
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

import { ILong } from "lib/long";

import { IMethod, ITypePrimitive, ITypeVector, TypeInt128 } from "./schema";

const Pool: Uint32Array[] = [];

export class ByteBuffer {
  private buf32: Uint32Array;
  private buf8: Uint8Array;
  size: number;

  constructor(buf?: Uint32Array) {
    this.size = (buf && buf.length) || 0;

    this.buf32 = buf || Pool.pop() || new Uint32Array(new ArrayBuffer(64));
    this.buf8 = new Uint8Array(this.buf32.buffer);
  }

  destroy() {
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

  writeU8A(bytes: Uint8Array) {
    if (bytes instanceof Uint32Array) {
      bytes = new Uint8Array(bytes.buffer);
    } else if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes);
    }
    let sizeDiff = Math.ceil(bytes.buffer.byteLength / 4);
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
  writeIntAt(val: number, index: number) {
    if (val < 0) val = val + 4294967296;
    this.buf32[index] = val;
  }

  writeMethod(method: IMethod, params: any[]) {
    this.writeInt(method[0]);
    for (let i = 0; i < method[1].length; i++) {
      this.writeType(method[1][i], params[i]);
    }
  }
  writeType(type: ITypePrimitive | ITypeVector, value: any) {
    switch (type) {
      case TypeInt128:
        this.writeU8A(value);
        return;
    }
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

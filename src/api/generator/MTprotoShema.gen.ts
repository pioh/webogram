import { ApiInvoker } from "../ApiInvoker";
import { ByteBuffer } from "../ByteBuffer";
import { Connection } from "../Connection";
import {
  AllStructs,
  IStruct,
  OneOf,
  panic,
  ProtoLong,
  TMethod
} from "../SchemaHelpers";

/**
 * vector:Vector t
 * #1cb5c415:481674261:481674261
 *
 */
export class VectorS<T = unknown> {
  static _id = 0x1cb5c415;

  _values = ([] as unknown) as T[];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(VectorS._id);

    buf.writeInt(this._values.length);
    for (let i = 0; i < this._values.length; i++) {
      let val = this._values[i] as any;
      if (Array.isArray(val)) buf.writeLong(val as ProtoLong);
      else if (typeof val === "number") buf.writeInt(val);
      else if (val instanceof Uint8Array) buf.writeBytes(val);
      else if (typeof val === "string") buf.writeString(val);
      else val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== VectorS._id) panic(id.toString(16));
    }

    let len = buf.readInt();
    for (let i = 0; i < len; i++) {
      let item = new OneOf()._read(buf);
      this._values.push(item as any);
    }

    return this;
  }

  set_values(v: T[]): this {
    this._values = v as any;
    return this;
  }
  get_values(): T[] {
    return (this._values as unknown) as T[];
  }
}
AllStructs.set(VectorS._id, VectorS);

/**
 * resPQ:ResPQ
 * #5162463:85337187:85337187
 * nonce:int128
 * server_nonce:int128
 * pq:bytes
 * server_public_key_fingerprints:Vector<long>
 */
export class ResPqS {
  static _id = 0x5162463;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(),
    new VectorS<ProtoLong>()
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array, VectorS<ProtoLong>];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_pq(): Uint8Array {
    return this._values[2];
  }
  set_pq(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_server_public_key_fingerprints(): VectorS<ProtoLong> {
    return this._values[3];
  }
  set_server_public_key_fingerprints(val: VectorS<ProtoLong>): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ResPqS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[3] as VectorS<ProtoLong>;

      buf.writeInt(481674261);
      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ResPqS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    {
      let val = values[3] as VectorS<ProtoLong>;

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.get_values().push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(ResPqS._id, ResPqS);

/**
 * p_q_inner_data:P_Q_inner_data
 * #83c95aec:2211011308:-2083955988
 * pq:bytes
 * p:bytes
 * q:bytes
 * nonce:int128
 * server_nonce:int128
 * new_nonce:int256
 */
export class PQInnerDataS {
  static _id = 0x83c95aec;

  _values = ([
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(32)
  ] as unknown) as [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array
  ];

  get_pq(): Uint8Array {
    return this._values[0];
  }
  set_pq(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_p(): Uint8Array {
    return this._values[1];
  }
  set_p(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_q(): Uint8Array {
    return this._values[2];
  }
  set_q(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_nonce(): Uint8Array {
    return this._values[3];
  }
  set_nonce(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[4];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[4] = val;

    return this;
  }

  get_new_nonce(): Uint8Array {
    return this._values[5];
  }
  set_new_nonce(val: Uint8Array): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PQInnerDataS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[3] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[4] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[5] as Uint8Array;
      buf.writeU8A(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PQInnerDataS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readBytes();
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readBytes();
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    {
      let val = values[3] as Uint8Array;
      val = buf.readU8A(4);
      values[3] = val;
    }

    {
      let val = values[4] as Uint8Array;
      val = buf.readU8A(4);
      values[4] = val;
    }

    {
      let val = values[5] as Uint8Array;
      val = buf.readU8A(8);
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(PQInnerDataS._id, PQInnerDataS);

/**
 * p_q_inner_data_temp:P_Q_inner_data
 * #3c6a84d4:1013613780:1013613780
 * pq:bytes
 * p:bytes
 * q:bytes
 * nonce:int128
 * server_nonce:int128
 * new_nonce:int256
 * expires_in:int
 */
export class PQInnerDataTempS {
  static _id = 0x3c6a84d4;

  _values = ([
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(32),
    0
  ] as unknown) as [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    number
  ];

  get_pq(): Uint8Array {
    return this._values[0];
  }
  set_pq(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_p(): Uint8Array {
    return this._values[1];
  }
  set_p(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_q(): Uint8Array {
    return this._values[2];
  }
  set_q(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_nonce(): Uint8Array {
    return this._values[3];
  }
  set_nonce(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[4];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[4] = val;

    return this;
  }

  get_new_nonce(): Uint8Array {
    return this._values[5];
  }
  set_new_nonce(val: Uint8Array): this {
    this._values[5] = val;

    return this;
  }

  get_expires_in(): number {
    return this._values[6];
  }
  set_expires_in(val: number): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PQInnerDataTempS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[3] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[4] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[5] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PQInnerDataTempS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readBytes();
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readBytes();
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    {
      let val = values[3] as Uint8Array;
      val = buf.readU8A(4);
      values[3] = val;
    }

    {
      let val = values[4] as Uint8Array;
      val = buf.readU8A(4);
      values[4] = val;
    }

    {
      let val = values[5] as Uint8Array;
      val = buf.readU8A(8);
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(PQInnerDataTempS._id, PQInnerDataTempS);

/**
 * server_DH_params_fail:Server_DH_Params
 * #79cb045d:2043348061:2043348061
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash:int128
 */
export class ServerDhParamsFailS {
  static _id = 0x79cb045d;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(16)
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_new_nonce_hash(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ServerDhParamsFailS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeU8A(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ServerDhParamsFailS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readU8A(4);
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ServerDhParamsFailS._id, ServerDhParamsFailS);

/**
 * server_DH_params_ok:Server_DH_Params
 * #d0e8075c:3504867164:-790100132
 * nonce:int128
 * server_nonce:int128
 * encrypted_answer:bytes
 */
export class ServerDhParamsOkS {
  static _id = 0xd0e8075c;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array()
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_encrypted_answer(): Uint8Array {
    return this._values[2];
  }
  set_encrypted_answer(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ServerDhParamsOkS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ServerDhParamsOkS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ServerDhParamsOkS._id, ServerDhParamsOkS);

/**
 * server_DH_inner_data:Server_DH_inner_data
 * #b5890dba:3045658042:-1249309254
 * nonce:int128
 * server_nonce:int128
 * g:int
 * dh_prime:bytes
 * g_a:bytes
 * server_time:int
 */
export class ServerDhInnerDataS {
  static _id = 0xb5890dba;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    0,
    new Uint8Array(),
    new Uint8Array(),
    0
  ] as unknown) as [
    Uint8Array,
    Uint8Array,
    number,
    Uint8Array,
    Uint8Array,
    number
  ];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_g(): number {
    return this._values[2];
  }
  set_g(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_dh_prime(): Uint8Array {
    return this._values[3];
  }
  set_dh_prime(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_g_a(): Uint8Array {
    return this._values[4];
  }
  set_g_a(val: Uint8Array): this {
    this._values[4] = val;

    return this;
  }

  get_server_time(): number {
    return this._values[5];
  }
  set_server_time(val: number): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ServerDhInnerDataS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[4] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ServerDhInnerDataS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    {
      let val = values[4] as Uint8Array;
      val = buf.readBytes();
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(ServerDhInnerDataS._id, ServerDhInnerDataS);

/**
 * client_DH_inner_data:Client_DH_Inner_Data
 * #6643b654:1715713620:1715713620
 * nonce:int128
 * server_nonce:int128
 * retry_id:long
 * g_b:bytes
 */
export class ClientDhInnerDataS {
  static _id = 0x6643b654;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    [0, 0],
    new Uint8Array()
  ] as unknown) as [Uint8Array, Uint8Array, ProtoLong, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_retry_id(): ProtoLong {
    return this._values[2];
  }
  set_retry_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_g_b(): Uint8Array {
    return this._values[3];
  }
  set_g_b(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ClientDhInnerDataS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ClientDhInnerDataS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong;
      val = buf.readLong();
      values[2] = val;
    }

    {
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(ClientDhInnerDataS._id, ClientDhInnerDataS);

/**
 * dh_gen_ok:Set_client_DH_params_answer
 * #3bcbf734:1003222836:1003222836
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash1:int128
 */
export class DhGenOkS {
  static _id = 0x3bcbf734;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(16)
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_new_nonce_hash1(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash1(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DhGenOkS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeU8A(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DhGenOkS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readU8A(4);
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(DhGenOkS._id, DhGenOkS);

/**
 * dh_gen_retry:Set_client_DH_params_answer
 * #46dc1fb9:1188831161:1188831161
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash2:int128
 */
export class DhGenRetryS {
  static _id = 0x46dc1fb9;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(16)
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_new_nonce_hash2(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash2(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DhGenRetryS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeU8A(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DhGenRetryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readU8A(4);
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(DhGenRetryS._id, DhGenRetryS);

/**
 * dh_gen_fail:Set_client_DH_params_answer
 * #a69dae02:2795351554:-1499615742
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash3:int128
 */
export class DhGenFailS {
  static _id = 0xa69dae02;

  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(16)
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_new_nonce_hash3(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash3(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DhGenFailS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeU8A(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DhGenFailS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readU8A(4);
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(DhGenFailS._id, DhGenFailS);

/**
 * rpc_result:RpcResult
 * #f35c6d01:4082920705:-212046591
 * req_msg_id:long
 * result:Object
 */
export class RpcResultS {
  static _id = 0xf35c6d01;

  _values = ([[0, 0], new OneOf()] as unknown) as [ProtoLong, OneOf | IStruct];

  get_req_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_req_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_result(): OneOf | IStruct {
    return this._values[1];
  }
  set_result(val: OneOf | IStruct): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(RpcResultS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as OneOf | IStruct;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== RpcResultS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as OneOf | IStruct;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(RpcResultS._id, RpcResultS);

/**
 * rpc_error:RpcError
 * #2144ca19:558156313:558156313
 * error_code:int
 * error_message:string
 */
export class RpcErrorS {
  static _id = 0x2144ca19;

  _values = ([0, ""] as unknown) as [number, string];

  get_error_code(): number {
    return this._values[0];
  }
  set_error_code(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_error_message(): string {
    return this._values[1];
  }
  set_error_message(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(RpcErrorS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== RpcErrorS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(RpcErrorS._id, RpcErrorS);

/**
 * rpc_answer_unknown:RpcDropAnswer
 * #5e2ad36e:1579864942:1579864942
 *
 */
export class RpcAnswerUnknownS {
  static _id = 0x5e2ad36e;

  _values = ([] as unknown) as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(RpcAnswerUnknownS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== RpcAnswerUnknownS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(RpcAnswerUnknownS._id, RpcAnswerUnknownS);

/**
 * rpc_answer_dropped_running:RpcDropAnswer
 * #cd78e586:3447252358:-847714938
 *
 */
export class RpcAnswerDroppedRunningS {
  static _id = 0xcd78e586;

  _values = ([] as unknown) as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(RpcAnswerDroppedRunningS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== RpcAnswerDroppedRunningS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(RpcAnswerDroppedRunningS._id, RpcAnswerDroppedRunningS);

/**
 * rpc_answer_dropped:RpcDropAnswer
 * #a43ad8b7:2755319991:-1539647305
 * msg_id:long
 * seq_no:int
 * bytes:int
 */
export class RpcAnswerDroppedS {
  static _id = 0xa43ad8b7;

  _values = ([[0, 0], 0, 0] as unknown) as [ProtoLong, number, number];

  get_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_seq_no(): number {
    return this._values[1];
  }
  set_seq_no(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_bytes(): number {
    return this._values[2];
  }
  set_bytes(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(RpcAnswerDroppedS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== RpcAnswerDroppedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(RpcAnswerDroppedS._id, RpcAnswerDroppedS);

/**
 * future_salt:FutureSalt
 * #949d9dc:155834844:155834844
 * valid_since:int
 * valid_until:int
 * salt:long
 */
export class FutureSaltS {
  static _id = 0x949d9dc;

  _values = ([0, 0, [0, 0]] as unknown) as [number, number, ProtoLong];

  get_valid_since(): number {
    return this._values[0];
  }
  set_valid_since(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_valid_until(): number {
    return this._values[1];
  }
  set_valid_until(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_salt(): ProtoLong {
    return this._values[2];
  }
  set_salt(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(FutureSaltS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== FutureSaltS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong;
      val = buf.readLong();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(FutureSaltS._id, FutureSaltS);

/**
 * future_salts:FutureSalts
 * #ae500895:2924480661:-1370486635
 * req_msg_id:long
 * now:int
 * salts:vector<future_salt>
 */
export class FutureSaltsS {
  static _id = 0xae500895;

  _values = ([[0, 0], 0, new VectorS<FutureSaltT>()] as unknown) as [
    ProtoLong,
    number,
    VectorS<FutureSaltT>
  ];

  get_req_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_req_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_now(): number {
    return this._values[1];
  }
  set_now(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_salts(): VectorS<FutureSaltT> {
    return this._values[2];
  }
  set_salts(val: VectorS<FutureSaltT>): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(FutureSaltsS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as VectorS<FutureSaltT>;

      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        val._write(buf);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== FutureSaltsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as VectorS<FutureSaltT>;

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: FutureSaltT = (new FutureSaltT() as unknown) as FutureSaltT;

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.get_values().push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(FutureSaltsS._id, FutureSaltsS);

/**
 * pong:Pong
 * #347773c5:880243653:880243653
 * msg_id:long
 * ping_id:long
 */
export class PongS {
  static _id = 0x347773c5;

  _values = ([[0, 0], [0, 0]] as unknown) as [ProtoLong, ProtoLong];

  get_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_ping_id(): ProtoLong {
    return this._values[1];
  }
  set_ping_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PongS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PongS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong;
      val = buf.readLong();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PongS._id, PongS);

/**
 * destroy_session_ok:DestroySessionRes
 * #e22045fc:3793765884:-501201412
 * session_id:long
 */
export class DestroySessionOkS {
  static _id = 0xe22045fc;

  _values = ([[0, 0]] as unknown) as [ProtoLong];

  get_session_id(): ProtoLong {
    return this._values[0];
  }
  set_session_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DestroySessionOkS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DestroySessionOkS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(DestroySessionOkS._id, DestroySessionOkS);

/**
 * destroy_session_none:DestroySessionRes
 * #62d350c9:1658015945:1658015945
 * session_id:long
 */
export class DestroySessionNoneS {
  static _id = 0x62d350c9;

  _values = ([[0, 0]] as unknown) as [ProtoLong];

  get_session_id(): ProtoLong {
    return this._values[0];
  }
  set_session_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DestroySessionNoneS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DestroySessionNoneS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(DestroySessionNoneS._id, DestroySessionNoneS);

/**
 * new_session_created:NewSession
 * #9ec20908:2663516424:-1631450872
 * first_msg_id:long
 * unique_id:long
 * server_salt:long
 */
export class NewSessionCreatedS {
  static _id = 0x9ec20908;

  _values = ([[0, 0], [0, 0], [0, 0]] as unknown) as [
    ProtoLong,
    ProtoLong,
    ProtoLong
  ];

  get_first_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_first_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_unique_id(): ProtoLong {
    return this._values[1];
  }
  set_unique_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_server_salt(): ProtoLong {
    return this._values[2];
  }
  set_server_salt(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(NewSessionCreatedS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[2] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== NewSessionCreatedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong;
      val = buf.readLong();
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong;
      val = buf.readLong();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(NewSessionCreatedS._id, NewSessionCreatedS);

/**
 * msg_container:MessageContainer
 * #73f1f8dc:1945237724:1945237724
 * messages:vector<%Message>
 */
export class MsgContainerS {
  static _id = 0x73f1f8dc;

  _values = ([new VectorS<MessageS>()] as unknown) as [VectorS<MessageS>];

  get_messages(): VectorS<MessageS> {
    return this._values[0];
  }
  set_messages(val: VectorS<MessageS>): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgContainerS._id);

    let values = this._values;

    {
      let val = values[0] as VectorS<MessageS>;

      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        val._write(buf, true);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgContainerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as VectorS<MessageS>;

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageS = new MessageS();
        val = val._read(buf, true);
        if (val instanceof OneOf) val = val.unwrap();
        vector.get_values().push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MsgContainerS._id, MsgContainerS);

/**
 * message:Message
 * #5bb8e511:1538843921:1538843921
 * msg_id:long
 * seqno:int
 * bytes:int
 * body:Object
 */
export class MessageS {
  static _id = 0x5bb8e511;

  _values = ([[0, 0], 0, 0, new OneOf()] as unknown) as [
    ProtoLong,
    number,
    number,
    OneOf | IStruct
  ];

  buf = new Uint8Array();

  get_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_seqno(): number {
    return this._values[1];
  }
  set_seqno(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_bytes(): number {
    return this._values[2];
  }
  set_bytes(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_body(): OneOf | IStruct {
    return this._values[3];
  }
  set_body(val: OneOf | IStruct): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageS._id);
    let size = buf.size;
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as OneOf | IStruct;
      val._write(buf);
    }

    buf.writeIntAt((buf.size - size - 4) * 4, size + 3);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    this.buf = new Uint8Array(
      buf.getBuffer8().buffer,
      buf.offset * 4,
      this.get_bytes()
    );
    {
      let offset = buf.offset;
      let val = values[3] as OneOf | IStruct;
      try {
        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
      } catch (e) {
        console.error("skip", e.stack);
      }
      buf.offset = offset + Math.ceil(this.get_bytes() / 4);
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(MessageS._id, MessageS);

/**
 * msg_copy:MessageCopy
 * #e06046b2:3764405938:-530561358
 * orig_message:Message
 */
export class MsgCopyS {
  static _id = 0xe06046b2;

  _values = ([(new MessageT() as unknown) as MessageT] as unknown) as [
    MessageT
  ];

  get_orig_message(): MessageT {
    return this._values[0];
  }
  set_orig_message(val: MessageT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgCopyS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgCopyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MsgCopyS._id, MsgCopyS);

/**
 * gzip_packed:Object
 * #3072cfa1:812830625:812830625
 * packed_data:bytes
 */
export class GzipPackedS {
  static _id = 0x3072cfa1;

  _values = ([new Uint8Array()] as unknown) as [Uint8Array];

  get_packed_data(): Uint8Array {
    return this._values[0];
  }
  set_packed_data(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(GzipPackedS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== GzipPackedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readBytes();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(GzipPackedS._id, GzipPackedS);

/**
 * msgs_ack:MsgsAck
 * #62d6b459:1658238041:1658238041
 * msg_ids:Vector<long>
 */
export class MsgsAckS {
  static _id = 0x62d6b459;

  _values = ([new VectorS<ProtoLong>()] as unknown) as [VectorS<ProtoLong>];

  get_msg_ids(): VectorS<ProtoLong> {
    return this._values[0];
  }
  set_msg_ids(val: VectorS<ProtoLong>): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgsAckS._id);

    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      buf.writeInt(481674261);
      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgsAckS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.get_values().push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MsgsAckS._id, MsgsAckS);

/**
 * bad_msg_notification:BadMsgNotification
 * #a7eff811:2817521681:-1477445615
 * bad_msg_id:long
 * bad_msg_seqno:int
 * error_code:int
 */
export class BadMsgNotificationS {
  static _id = 0xa7eff811;

  _values = ([[0, 0], 0, 0] as unknown) as [ProtoLong, number, number];

  get_bad_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_bad_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_bad_msg_seqno(): number {
    return this._values[1];
  }
  set_bad_msg_seqno(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_error_code(): number {
    return this._values[2];
  }
  set_error_code(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BadMsgNotificationS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BadMsgNotificationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(BadMsgNotificationS._id, BadMsgNotificationS);

/**
 * bad_server_salt:BadMsgNotification
 * #edab447b:3987424379:-307542917
 * bad_msg_id:long
 * bad_msg_seqno:int
 * error_code:int
 * new_server_salt:long
 */
export class BadServerSaltS {
  static _id = 0xedab447b;

  _values = ([[0, 0], 0, 0, [0, 0]] as unknown) as [
    ProtoLong,
    number,
    number,
    ProtoLong
  ];

  get_bad_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_bad_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_bad_msg_seqno(): number {
    return this._values[1];
  }
  set_bad_msg_seqno(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_error_code(): number {
    return this._values[2];
  }
  set_error_code(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_new_server_salt(): ProtoLong {
    return this._values[3];
  }
  set_new_server_salt(val: ProtoLong): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BadServerSaltS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BadServerSaltS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as ProtoLong;
      val = buf.readLong();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(BadServerSaltS._id, BadServerSaltS);

/**
 * msg_resend_req:MsgResendReq
 * #7d861a08:2105940488:2105940488
 * msg_ids:Vector<long>
 */
export class MsgResendReqS {
  static _id = 0x7d861a08;

  _values = ([new VectorS<ProtoLong>()] as unknown) as [VectorS<ProtoLong>];

  get_msg_ids(): VectorS<ProtoLong> {
    return this._values[0];
  }
  set_msg_ids(val: VectorS<ProtoLong>): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgResendReqS._id);

    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      buf.writeInt(481674261);
      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgResendReqS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.get_values().push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MsgResendReqS._id, MsgResendReqS);

/**
 * msgs_state_req:MsgsStateReq
 * #da69fb52:3664378706:-630588590
 * msg_ids:Vector<long>
 */
export class MsgsStateReqS {
  static _id = 0xda69fb52;

  _values = ([new VectorS<ProtoLong>()] as unknown) as [VectorS<ProtoLong>];

  get_msg_ids(): VectorS<ProtoLong> {
    return this._values[0];
  }
  set_msg_ids(val: VectorS<ProtoLong>): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgsStateReqS._id);

    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      buf.writeInt(481674261);
      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgsStateReqS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.get_values().push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MsgsStateReqS._id, MsgsStateReqS);

/**
 * msgs_state_info:MsgsStateInfo
 * #4deb57d:81704317:81704317
 * req_msg_id:long
 * info:bytes
 */
export class MsgsStateInfoS {
  static _id = 0x4deb57d;

  _values = ([[0, 0], new Uint8Array()] as unknown) as [ProtoLong, Uint8Array];

  get_req_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_req_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_info(): Uint8Array {
    return this._values[1];
  }
  set_info(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgsStateInfoS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgsStateInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readBytes();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MsgsStateInfoS._id, MsgsStateInfoS);

/**
 * msgs_all_info:MsgsAllInfo
 * #8cc0d131:2361446705:-1933520591
 * msg_ids:Vector<long>
 * info:bytes
 */
export class MsgsAllInfoS {
  static _id = 0x8cc0d131;

  _values = ([new VectorS<ProtoLong>(), new Uint8Array()] as unknown) as [
    VectorS<ProtoLong>,
    Uint8Array
  ];

  get_msg_ids(): VectorS<ProtoLong> {
    return this._values[0];
  }
  set_msg_ids(val: VectorS<ProtoLong>): this {
    this._values[0] = val;

    return this;
  }

  get_info(): Uint8Array {
    return this._values[1];
  }
  set_info(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgsAllInfoS._id);

    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      buf.writeInt(481674261);
      buf.writeInt(val.get_values().length);
      let vector = val;
      for (let i = 0; i < vector._values.length; i++) {
        let val = vector.get_values()[i];
        buf.writeLong(val);
      }
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgsAllInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as VectorS<ProtoLong>;

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val._values.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.get_values().push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readBytes();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MsgsAllInfoS._id, MsgsAllInfoS);

/**
 * msg_detailed_info:MsgDetailedInfo
 * #276d3ec6:661470918:661470918
 * msg_id:long
 * answer_msg_id:long
 * bytes:int
 * status:int
 */
export class MsgDetailedInfoS {
  static _id = 0x276d3ec6;

  _values = ([[0, 0], [0, 0], 0, 0] as unknown) as [
    ProtoLong,
    ProtoLong,
    number,
    number
  ];

  get_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_answer_msg_id(): ProtoLong {
    return this._values[1];
  }
  set_answer_msg_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_bytes(): number {
    return this._values[2];
  }
  set_bytes(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_status(): number {
    return this._values[3];
  }
  set_status(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgDetailedInfoS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgDetailedInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong;
      val = buf.readLong();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(MsgDetailedInfoS._id, MsgDetailedInfoS);

/**
 * msg_new_detailed_info:MsgDetailedInfo
 * #809db6df:2157819615:-2137147681
 * answer_msg_id:long
 * bytes:int
 * status:int
 */
export class MsgNewDetailedInfoS {
  static _id = 0x809db6df;

  _values = ([[0, 0], 0, 0] as unknown) as [ProtoLong, number, number];

  get_answer_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_answer_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_bytes(): number {
    return this._values[1];
  }
  set_bytes(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_status(): number {
    return this._values[2];
  }
  set_status(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MsgNewDetailedInfoS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MsgNewDetailedInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MsgNewDetailedInfoS._id, MsgNewDetailedInfoS);

/**
 * bind_auth_key_inner:BindAuthKeyInner
 * #75a3f765:1973679973:1973679973
 * nonce:long
 * temp_auth_key_id:long
 * perm_auth_key_id:long
 * temp_session_id:long
 * expires_at:int
 */
export class BindAuthKeyInnerS {
  static _id = 0x75a3f765;

  _values = ([[0, 0], [0, 0], [0, 0], [0, 0], 0] as unknown) as [
    ProtoLong,
    ProtoLong,
    ProtoLong,
    ProtoLong,
    number
  ];

  get_nonce(): ProtoLong {
    return this._values[0];
  }
  set_nonce(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_temp_auth_key_id(): ProtoLong {
    return this._values[1];
  }
  set_temp_auth_key_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_perm_auth_key_id(): ProtoLong {
    return this._values[2];
  }
  set_perm_auth_key_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_temp_session_id(): ProtoLong {
    return this._values[3];
  }
  set_temp_session_id(val: ProtoLong): this {
    this._values[3] = val;

    return this;
  }

  get_expires_at(): number {
    return this._values[4];
  }
  set_expires_at(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BindAuthKeyInnerS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[2] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[3] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BindAuthKeyInnerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong;
      val = buf.readLong();
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong;
      val = buf.readLong();
      values[2] = val;
    }

    {
      let val = values[3] as ProtoLong;
      val = buf.readLong();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(BindAuthKeyInnerS._id, BindAuthKeyInnerS);

export const VectorTT = VectorS;
export type VectorTT = VectorS;

export type PQInnerDataT = PQInnerDataS | PQInnerDataTempS;
export const PQInnerDataT = OneOf;

export type ServerDhParamsT = ServerDhParamsFailS | ServerDhParamsOkS;
export const ServerDhParamsT = OneOf;

export type SetClientDhParamsAnswerT = DhGenOkS | DhGenRetryS | DhGenFailS;
export const SetClientDhParamsAnswerT = OneOf;

export type RpcDropAnswerT =
  | RpcAnswerUnknownS
  | RpcAnswerDroppedRunningS
  | RpcAnswerDroppedS;
export const RpcDropAnswerT = OneOf;

export const FutureSaltT = FutureSaltS;
export type FutureSaltT = FutureSaltS;

export type DestroySessionResT = DestroySessionOkS | DestroySessionNoneS;
export const DestroySessionResT = OneOf;

export const NewSessionT = NewSessionCreatedS;
export type NewSessionT = NewSessionCreatedS;

export const MessageContainerT = MsgContainerS;
export type MessageContainerT = MsgContainerS;

export const MessageT = MessageS;
export type MessageT = MessageS;

export const MessageCopyT = MsgCopyS;
export type MessageCopyT = MsgCopyS;

export const ObjectT = GzipPackedS;
export type ObjectT = GzipPackedS;

export type BadMsgNotificationT = BadMsgNotificationS | BadServerSaltS;
export const BadMsgNotificationT = OneOf;

export type MsgDetailedInfoT = MsgDetailedInfoS | MsgNewDetailedInfoS;
export const MsgDetailedInfoT = OneOf;

/**
 * req_pq:req_pq ResPQ
 * #60469778:1615239032:1615239032
 * nonce:int128
 */
export class ReqPqM {
  static _id = 0x60469778;
  _method() {}
  _values = ([new Uint8Array(16)] as unknown) as [Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReqPqM._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ReqPqM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(ReqPqM._id, ReqPqM);

/**
 * req_DH_params:req_DH_params Server_DH_Params
 * #d712e4be:3608339646:-686627650
 * nonce:int128
 * server_nonce:int128
 * p:bytes
 * q:bytes
 * public_key_fingerprint:long
 * encrypted_data:bytes
 */
export class ReqDhParamsM {
  static _id = 0xd712e4be;
  _method() {}
  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(),
    new Uint8Array(),
    [0, 0],
    new Uint8Array()
  ] as unknown) as [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    ProtoLong,
    Uint8Array
  ];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_p(): Uint8Array {
    return this._values[2];
  }
  set_p(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_q(): Uint8Array {
    return this._values[3];
  }
  set_q(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_public_key_fingerprint(): ProtoLong {
    return this._values[4];
  }
  set_public_key_fingerprint(val: ProtoLong): this {
    this._values[4] = val;

    return this;
  }

  get_encrypted_data(): Uint8Array {
    return this._values[5];
  }
  set_encrypted_data(val: Uint8Array): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReqDhParamsM._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[4] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[5] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ReqDhParamsM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    {
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    {
      let val = values[4] as ProtoLong;
      val = buf.readLong();
      values[4] = val;
    }

    {
      let val = values[5] as Uint8Array;
      val = buf.readBytes();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(ReqDhParamsM._id, ReqDhParamsM);

/**
 * set_client_DH_params:set_client_DH_params Set_client_DH_params_answer
 * #f5045f1f:4110704415:-184262881
 * nonce:int128
 * server_nonce:int128
 * encrypted_data:bytes
 */
export class SetClientDhParamsM {
  static _id = 0xf5045f1f;
  _method() {}
  _values = ([
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array()
  ] as unknown) as [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  get_server_nonce(): Uint8Array {
    return this._values[1];
  }
  set_server_nonce(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  get_encrypted_data(): Uint8Array {
    return this._values[2];
  }
  set_encrypted_data(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SetClientDhParamsM._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeU8A(val);
    }

    {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SetClientDhParamsM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readU8A(4);
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readU8A(4);
      values[1] = val;
    }

    {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(SetClientDhParamsM._id, SetClientDhParamsM);

/**
 * rpc_drop_answer:rpc_drop_answer RpcDropAnswer
 * #58e4a740:1491380032:1491380032
 * req_msg_id:long
 */
export class RpcDropAnswerM {
  static _id = 0x58e4a740;
  _method() {}
  _values = ([[0, 0]] as unknown) as [ProtoLong];

  get_req_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_req_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(RpcDropAnswerM._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== RpcDropAnswerM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(RpcDropAnswerM._id, RpcDropAnswerM);

/**
 * get_future_salts:get_future_salts FutureSalts
 * #b921bd04:3105996036:-1188971260
 * num:int
 */
export class GetFutureSaltsM {
  static _id = 0xb921bd04;
  _method() {}
  _values = ([0] as unknown) as [number];

  get_num(): number {
    return this._values[0];
  }
  set_num(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(GetFutureSaltsM._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== GetFutureSaltsM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(GetFutureSaltsM._id, GetFutureSaltsM);

/**
 * ping:ping Pong
 * #7abe77ec:2059302892:2059302892
 * ping_id:long
 */
export class PingM {
  static _id = 0x7abe77ec;
  _method() {}
  _values = ([[0, 0]] as unknown) as [ProtoLong];

  get_ping_id(): ProtoLong {
    return this._values[0];
  }
  set_ping_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PingM._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PingM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PingM._id, PingM);

/**
 * ping_delay_disconnect:ping_delay_disconnect Pong
 * #f3427b8c:4081220492:-213746804
 * ping_id:long
 * disconnect_delay:int
 */
export class PingDelayDisconnectM {
  static _id = 0xf3427b8c;
  _method() {}
  _values = ([[0, 0], 0] as unknown) as [ProtoLong, number];

  get_ping_id(): ProtoLong {
    return this._values[0];
  }
  set_ping_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_disconnect_delay(): number {
    return this._values[1];
  }
  set_disconnect_delay(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PingDelayDisconnectM._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PingDelayDisconnectM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PingDelayDisconnectM._id, PingDelayDisconnectM);

/**
 * destroy_session:destroy_session DestroySessionRes
 * #e7512126:3880853798:-414113498
 * session_id:long
 */
export class DestroySessionM {
  static _id = 0xe7512126;
  _method() {}
  _values = ([[0, 0]] as unknown) as [ProtoLong];

  get_session_id(): ProtoLong {
    return this._values[0];
  }
  set_session_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DestroySessionM._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DestroySessionM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(DestroySessionM._id, DestroySessionM);

/**
 * http_wait:http_wait HttpWait
 * #9299359f:2459514271:-1835453025
 * max_delay:int
 * wait_after:int
 * max_wait:int
 */
export class HttpWaitM {
  static _id = 0x9299359f;
  _method() {}
  _values = ([0, 0, 0] as unknown) as [number, number, number];

  get_max_delay(): number {
    return this._values[0];
  }
  set_max_delay(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_wait_after(): number {
    return this._values[1];
  }
  set_wait_after(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_max_wait(): number {
    return this._values[2];
  }
  set_max_wait(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HttpWaitM._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== HttpWaitM._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(HttpWaitM._id, HttpWaitM);

/**
 * req_pq:ResPQ
 * #60469778:1615239032:1615239032
 * nonce:int128
 */
export function CallReqPqM(
  invoker: ApiInvoker | Connection,
  req: ReqPqM
): Promise<(ResPqS | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * req_DH_params:Server_DH_Params
 * #d712e4be:3608339646:-686627650
 * nonce:int128
 * server_nonce:int128
 * p:bytes
 * q:bytes
 * public_key_fingerprint:long
 * encrypted_data:bytes
 */
export function CallReqDhParamsM(
  invoker: ApiInvoker | Connection,
  req: ReqDhParamsM
): Promise<(ServerDhParamsT | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * set_client_DH_params:Set_client_DH_params_answer
 * #f5045f1f:4110704415:-184262881
 * nonce:int128
 * server_nonce:int128
 * encrypted_data:bytes
 */
export function CallSetClientDhParamsM(
  invoker: ApiInvoker | Connection,
  req: SetClientDhParamsM
): Promise<(SetClientDhParamsAnswerT | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * rpc_drop_answer:RpcDropAnswer
 * #58e4a740:1491380032:1491380032
 * req_msg_id:long
 */
export function CallRpcDropAnswerM(
  invoker: ApiInvoker | Connection,
  req: RpcDropAnswerM
): Promise<(RpcDropAnswerT | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * get_future_salts:FutureSalts
 * #b921bd04:3105996036:-1188971260
 * num:int
 */
export function CallGetFutureSaltsM(
  invoker: ApiInvoker | Connection,
  req: GetFutureSaltsM
): Promise<(FutureSaltsS | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * ping:Pong
 * #7abe77ec:2059302892:2059302892
 * ping_id:long
 */
export function CallPingM(
  invoker: ApiInvoker | Connection,
  req: PingM
): Promise<(PongS | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * ping_delay_disconnect:Pong
 * #f3427b8c:4081220492:-213746804
 * ping_id:long
 * disconnect_delay:int
 */
export function CallPingDelayDisconnectM(
  invoker: ApiInvoker | Connection,
  req: PingDelayDisconnectM
): Promise<(PongS | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * destroy_session:DestroySessionRes
 * #e7512126:3880853798:-414113498
 * session_id:long
 */
export function CallDestroySessionM(
  invoker: ApiInvoker | Connection,
  req: DestroySessionM
): Promise<(DestroySessionResT | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

/**
 * http_wait:HttpWait
 * #9299359f:2459514271:-1835453025
 * max_delay:int
 * wait_after:int
 * max_wait:int
 */
export function CallHttpWaitM(
  invoker: ApiInvoker | Connection,
  req: HttpWaitM
): Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }> {
  return invoker.call(req);
}

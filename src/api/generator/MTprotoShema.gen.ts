import { ApiInvoker } from "../ApiInvoker";
import { ByteBuffer } from "../ByteBuffer";
import { AllStructs, IStruct, OneOf, panic, ProtoLong } from "../SchemaHelpers";

/**
 * vector:Vector t
 * #1cb5c415:481674261:481674261
 *
 */
export class XVector {
  static _id = 0x1cb5c415;
  _values = [] as any[];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XVector._id);

    buf.writeInt(this._values.length);
    for (let i = 0; i < this._values.length; i++) {
      this._values[i]._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XVector._id) panic(id.toString(16));
    }

    let len = buf.readInt();
    for (let i = 0; i < len; i++) {
      let item = new OneOf()._read(buf).unwrap();
      this._values.push(item);
    }

    return this;
  }
}
AllStructs.set(XVector._id, XVector);

/**
 * resPQ:ResPQ
 * #5162463:85337187:85337187
 * nonce:int128
 * server_nonce:int128
 * pq:bytes
 * server_public_key_fingerprints:Vector<long>
 */
export class XResPq {
  static _id = 0x5162463;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(), []] as [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    ProtoLong[]
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

  get_pq(): Uint8Array {
    return this._values[2];
  }
  set_pq(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_server_public_key_fingerprints(): ProtoLong[] {
    return this._values[3];
  }
  set_server_public_key_fingerprints(val: ProtoLong[]): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XResPq._id);

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
      let val = values[3] as ProtoLong[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XResPq._id) panic(id.toString(16));
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
      let val = values[3] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(XResPq._id, XResPq);

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
export class XPTQTInnerTData {
  static _id = 0x83c95aec;
  _values = [
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(32)
  ] as [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array];

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
    if (!noId) buf.writeInt(XPTQTInnerTData._id);

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
      if (id !== XPTQTInnerTData._id) panic(id.toString(16));
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
AllStructs.set(XPTQTInnerTData._id, XPTQTInnerTData);

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
export class XPTQTInnerTDataTTemp {
  static _id = 0x3c6a84d4;
  _values = [
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(),
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(32),
    0
  ] as [
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
    if (!noId) buf.writeInt(XPTQTInnerTDataTTemp._id);

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
      if (id !== XPTQTInnerTDataTTemp._id) panic(id.toString(16));
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
AllStructs.set(XPTQTInnerTDataTTemp._id, XPTQTInnerTDataTTemp);

/**
 * server_DH_params_fail:Server_DH_Params
 * #79cb045d:2043348061:2043348061
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash:int128
 */
export class XServerXDhTParamsTFail {
  static _id = 0x79cb045d;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [
    Uint8Array,
    Uint8Array,
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

  get_new_nonce_hash(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XServerXDhTParamsTFail._id);

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
      if (id !== XServerXDhTParamsTFail._id) panic(id.toString(16));
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
AllStructs.set(XServerXDhTParamsTFail._id, XServerXDhTParamsTFail);

/**
 * server_DH_params_ok:Server_DH_Params
 * #d0e8075c:3504867164:-790100132
 * nonce:int128
 * server_nonce:int128
 * encrypted_answer:bytes
 */
export class XServerXDhTParamsTOk {
  static _id = 0xd0e8075c;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array()] as [
    Uint8Array,
    Uint8Array,
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

  get_encrypted_answer(): Uint8Array {
    return this._values[2];
  }
  set_encrypted_answer(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XServerXDhTParamsTOk._id);

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
      if (id !== XServerXDhTParamsTOk._id) panic(id.toString(16));
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
AllStructs.set(XServerXDhTParamsTOk._id, XServerXDhTParamsTOk);

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
export class XServerXDhTInnerTData {
  static _id = 0xb5890dba;
  _values = [
    new Uint8Array(16),
    new Uint8Array(16),
    0,
    new Uint8Array(),
    new Uint8Array(),
    0
  ] as [Uint8Array, Uint8Array, number, Uint8Array, Uint8Array, number];

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
    if (!noId) buf.writeInt(XServerXDhTInnerTData._id);

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
      if (id !== XServerXDhTInnerTData._id) panic(id.toString(16));
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
AllStructs.set(XServerXDhTInnerTData._id, XServerXDhTInnerTData);

/**
 * client_DH_inner_data:Client_DH_Inner_Data
 * #6643b654:1715713620:1715713620
 * nonce:int128
 * server_nonce:int128
 * retry_id:long
 * g_b:bytes
 */
export class XClientXDhTInnerTData {
  static _id = 0x6643b654;
  _values = [
    new Uint8Array(16),
    new Uint8Array(16),
    [0, 0],
    new Uint8Array()
  ] as [Uint8Array, Uint8Array, ProtoLong, Uint8Array];

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
    if (!noId) buf.writeInt(XClientXDhTInnerTData._id);

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
      if (id !== XClientXDhTInnerTData._id) panic(id.toString(16));
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
AllStructs.set(XClientXDhTInnerTData._id, XClientXDhTInnerTData);

/**
 * dh_gen_ok:Set_client_DH_params_answer
 * #3bcbf734:1003222836:1003222836
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash1:int128
 */
export class XDhTGenTOk {
  static _id = 0x3bcbf734;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [
    Uint8Array,
    Uint8Array,
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

  get_new_nonce_hash1(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash1(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XDhTGenTOk._id);

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
      if (id !== XDhTGenTOk._id) panic(id.toString(16));
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
AllStructs.set(XDhTGenTOk._id, XDhTGenTOk);

/**
 * dh_gen_retry:Set_client_DH_params_answer
 * #46dc1fb9:1188831161:1188831161
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash2:int128
 */
export class XDhTGenTRetry {
  static _id = 0x46dc1fb9;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [
    Uint8Array,
    Uint8Array,
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

  get_new_nonce_hash2(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash2(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XDhTGenTRetry._id);

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
      if (id !== XDhTGenTRetry._id) panic(id.toString(16));
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
AllStructs.set(XDhTGenTRetry._id, XDhTGenTRetry);

/**
 * dh_gen_fail:Set_client_DH_params_answer
 * #a69dae02:2795351554:-1499615742
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash3:int128
 */
export class XDhTGenTFail {
  static _id = 0xa69dae02;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [
    Uint8Array,
    Uint8Array,
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

  get_new_nonce_hash3(): Uint8Array {
    return this._values[2];
  }
  set_new_nonce_hash3(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XDhTGenTFail._id);

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
      if (id !== XDhTGenTFail._id) panic(id.toString(16));
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
AllStructs.set(XDhTGenTFail._id, XDhTGenTFail);

/**
 * rpc_result:RpcResult
 * #f35c6d01:4082920705:-212046591
 * req_msg_id:long
 * result:Object
 */
export class XRpcTResult {
  static _id = 0xf35c6d01;
  _values = [[0, 0], new OneOf()] as [ProtoLong, OneOf];

  get_req_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_req_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_result(): OneOf {
    return this._values[1];
  }
  set_result(val: OneOf): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XRpcTResult._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as OneOf;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XRpcTResult._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as OneOf;
      val = val._read(buf);
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(XRpcTResult._id, XRpcTResult);

/**
 * rpc_error:RpcError
 * #2144ca19:558156313:558156313
 * error_code:int
 * error_message:string
 */
export class XRpcTError {
  static _id = 0x2144ca19;
  _values = [0, ""] as [number, string];

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
    if (!noId) buf.writeInt(XRpcTError._id);

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
      if (id !== XRpcTError._id) panic(id.toString(16));
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
AllStructs.set(XRpcTError._id, XRpcTError);

/**
 * rpc_answer_unknown:RpcDropAnswer
 * #5e2ad36e:1579864942:1579864942
 *
 */
export class XRpcTAnswerTUnknown {
  static _id = 0x5e2ad36e;
  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XRpcTAnswerTUnknown._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XRpcTAnswerTUnknown._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(XRpcTAnswerTUnknown._id, XRpcTAnswerTUnknown);

/**
 * rpc_answer_dropped_running:RpcDropAnswer
 * #cd78e586:3447252358:-847714938
 *
 */
export class XRpcTAnswerTDroppedTRunning {
  static _id = 0xcd78e586;
  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XRpcTAnswerTDroppedTRunning._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XRpcTAnswerTDroppedTRunning._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(XRpcTAnswerTDroppedTRunning._id, XRpcTAnswerTDroppedTRunning);

/**
 * rpc_answer_dropped:RpcDropAnswer
 * #a43ad8b7:2755319991:-1539647305
 * msg_id:long
 * seq_no:int
 * bytes:int
 */
export class XRpcTAnswerTDropped {
  static _id = 0xa43ad8b7;
  _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

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
    if (!noId) buf.writeInt(XRpcTAnswerTDropped._id);

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
      if (id !== XRpcTAnswerTDropped._id) panic(id.toString(16));
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
AllStructs.set(XRpcTAnswerTDropped._id, XRpcTAnswerTDropped);

/**
 * future_salt:FutureSalt
 * #949d9dc:155834844:155834844
 * valid_since:int
 * valid_until:int
 * salt:long
 */
export class XFutureTSalt {
  static _id = 0x949d9dc;
  _values = [0, 0, [0, 0]] as [number, number, ProtoLong];

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
    if (!noId) buf.writeInt(XFutureTSalt._id);

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
      if (id !== XFutureTSalt._id) panic(id.toString(16));
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
AllStructs.set(XFutureTSalt._id, XFutureTSalt);

/**
 * future_salts:FutureSalts
 * #ae500895:2924480661:-1370486635
 * req_msg_id:long
 * now:int
 * salts:vector<future_salt>
 */
export class XFutureTSalts {
  static _id = 0xae500895;
  _values = [[0, 0], 0, []] as [ProtoLong, number, XFutureTSalt[]];

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

  get_salts(): XFutureTSalt[] {
    return this._values[2];
  }
  set_salts(val: XFutureTSalt[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XFutureTSalts._id);

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
      let val = values[2] as XFutureTSalt[];

      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XFutureTSalts._id) panic(id.toString(16));
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
      let val = values[2] as XFutureTSalt[];

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: XFutureTSalt = new XFutureTSalt();
        val = val._read(buf);
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(XFutureTSalts._id, XFutureTSalts);

/**
 * pong:Pong
 * #347773c5:880243653:880243653
 * msg_id:long
 * ping_id:long
 */
export class XPong {
  static _id = 0x347773c5;
  _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

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
    if (!noId) buf.writeInt(XPong._id);

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
      if (id !== XPong._id) panic(id.toString(16));
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
AllStructs.set(XPong._id, XPong);

/**
 * destroy_session_ok:DestroySessionRes
 * #e22045fc:3793765884:-501201412
 * session_id:long
 */
export class XDestroyTSessionTOk {
  static _id = 0xe22045fc;
  _values = [[0, 0]] as [ProtoLong];

  get_session_id(): ProtoLong {
    return this._values[0];
  }
  set_session_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XDestroyTSessionTOk._id);

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
      if (id !== XDestroyTSessionTOk._id) panic(id.toString(16));
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
AllStructs.set(XDestroyTSessionTOk._id, XDestroyTSessionTOk);

/**
 * destroy_session_none:DestroySessionRes
 * #62d350c9:1658015945:1658015945
 * session_id:long
 */
export class XDestroyTSessionTNone {
  static _id = 0x62d350c9;
  _values = [[0, 0]] as [ProtoLong];

  get_session_id(): ProtoLong {
    return this._values[0];
  }
  set_session_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XDestroyTSessionTNone._id);

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
      if (id !== XDestroyTSessionTNone._id) panic(id.toString(16));
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
AllStructs.set(XDestroyTSessionTNone._id, XDestroyTSessionTNone);

/**
 * new_session_created:NewSession
 * #9ec20908:2663516424:-1631450872
 * first_msg_id:long
 * unique_id:long
 * server_salt:long
 */
export class XNewTSessionTCreated {
  static _id = 0x9ec20908;
  _values = [[0, 0], [0, 0], [0, 0]] as [ProtoLong, ProtoLong, ProtoLong];

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
    if (!noId) buf.writeInt(XNewTSessionTCreated._id);

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
      if (id !== XNewTSessionTCreated._id) panic(id.toString(16));
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
AllStructs.set(XNewTSessionTCreated._id, XNewTSessionTCreated);

/**
 * msg_container:MessageContainer
 * #73f1f8dc:1945237724:1945237724
 * messages:vector<%Message>
 */
export class XMsgTContainer {
  static _id = 0x73f1f8dc;
  _values = [[]] as [TMessage[]];

  get_messages(): TMessage[] {
    return this._values[0];
  }
  set_messages(val: TMessage[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XMsgTContainer._id);

    let values = this._values;

    {
      let val = values[0] as TMessage[];

      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf, true);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XMsgTContainer._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as TMessage[];

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: TMessage = new TMessage();
        val = val._read(buf, true);
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(XMsgTContainer._id, XMsgTContainer);

/**
 * message:Message
 * #5bb8e511:1538843921:1538843921
 * msg_id:long
 * seqno:int
 * bytes:int
 * body:Object
 */
export class XMessage {
  static _id = 0x5bb8e511;
  _values = [[0, 0], 0, 0, new OneOf()] as [ProtoLong, number, number, OneOf];

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

  get_body(): OneOf {
    return this._values[3];
  }
  set_body(val: OneOf): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XMessage._id);
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
      let val = values[3] as OneOf;
      val._write(buf);
    }

    buf.writeIntAt((buf.size - size - 4) * 4, size + 3);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XMessage._id) panic(id.toString(16));
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
      let val = values[3] as OneOf;
      try {
        val = val._read(buf);
      } catch (e) {
        console.error("skip", e.message);
      }
      buf.offset = offset + Math.ceil(this.get_bytes() / 4);
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(XMessage._id, XMessage);

/**
 * msg_copy:MessageCopy
 * #e06046b2:3764405938:-530561358
 * orig_message:Message
 */
export class XMsgTCopy {
  static _id = 0xe06046b2;
  _values = [new TMessage()] as [TMessage];

  get_orig_message(): TMessage {
    return this._values[0];
  }
  set_orig_message(val: TMessage): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XMsgTCopy._id);

    let values = this._values;

    {
      let val = values[0] as TMessage;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XMsgTCopy._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as TMessage;
      val = val._read(buf);
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(XMsgTCopy._id, XMsgTCopy);

/**
 * gzip_packed:Object
 * #3072cfa1:812830625:812830625
 * packed_data:bytes
 */
export class XGzipTPacked {
  static _id = 0x3072cfa1;
  _values = [new Uint8Array()] as [Uint8Array];

  get_packed_data(): Uint8Array {
    return this._values[0];
  }
  set_packed_data(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XGzipTPacked._id);

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
      if (id !== XGzipTPacked._id) panic(id.toString(16));
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
AllStructs.set(XGzipTPacked._id, XGzipTPacked);

/**
 * msgs_ack:MsgsAck
 * #62d6b459:1658238041:1658238041
 * msg_ids:Vector<long>
 */
export class XMsgsTAck {
  static _id = 0x62d6b459;
  _values = [[]] as [ProtoLong[]];

  get_msg_ids(): ProtoLong[] {
    return this._values[0];
  }
  set_msg_ids(val: ProtoLong[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XMsgsTAck._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XMsgsTAck._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(XMsgsTAck._id, XMsgsTAck);

/**
 * bad_msg_notification:BadMsgNotification
 * #a7eff811:2817521681:-1477445615
 * bad_msg_id:long
 * bad_msg_seqno:int
 * error_code:int
 */
export class XBadTMsgTNotification {
  static _id = 0xa7eff811;
  _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

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
    if (!noId) buf.writeInt(XBadTMsgTNotification._id);

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
      if (id !== XBadTMsgTNotification._id) panic(id.toString(16));
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
AllStructs.set(XBadTMsgTNotification._id, XBadTMsgTNotification);

/**
 * bad_server_salt:BadMsgNotification
 * #edab447b:3987424379:-307542917
 * bad_msg_id:long
 * bad_msg_seqno:int
 * error_code:int
 * new_server_salt:long
 */
export class XBadTServerTSalt {
  static _id = 0xedab447b;
  _values = [[0, 0], 0, 0, [0, 0]] as [ProtoLong, number, number, ProtoLong];

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
    if (!noId) buf.writeInt(XBadTServerTSalt._id);

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
      if (id !== XBadTServerTSalt._id) panic(id.toString(16));
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
AllStructs.set(XBadTServerTSalt._id, XBadTServerTSalt);

/**
 * msg_resend_req:MsgResendReq
 * #7d861a08:2105940488:2105940488
 * msg_ids:Vector<long>
 */
export class XMsgTResendTReq {
  static _id = 0x7d861a08;
  _values = [[]] as [ProtoLong[]];

  get_msg_ids(): ProtoLong[] {
    return this._values[0];
  }
  set_msg_ids(val: ProtoLong[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XMsgTResendTReq._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XMsgTResendTReq._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(XMsgTResendTReq._id, XMsgTResendTReq);

/**
 * msgs_state_req:MsgsStateReq
 * #da69fb52:3664378706:-630588590
 * msg_ids:Vector<long>
 */
export class XMsgsTStateTReq {
  static _id = 0xda69fb52;
  _values = [[]] as [ProtoLong[]];

  get_msg_ids(): ProtoLong[] {
    return this._values[0];
  }
  set_msg_ids(val: ProtoLong[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(XMsgsTStateTReq._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeLong(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== XMsgsTStateTReq._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(XMsgsTStateTReq._id, XMsgsTStateTReq);

/**
 * msgs_state_info:MsgsStateInfo
 * #4deb57d:81704317:81704317
 * req_msg_id:long
 * info:bytes
 */
export class XMsgsTStateTInfo {
  static _id = 0x4deb57d;
  _values = [[0, 0], new Uint8Array()] as [ProtoLong, Uint8Array];

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
    if (!noId) buf.writeInt(XMsgsTStateTInfo._id);

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
      if (id !== XMsgsTStateTInfo._id) panic(id.toString(16));
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
AllStructs.set(XMsgsTStateTInfo._id, XMsgsTStateTInfo);

/**
 * msgs_all_info:MsgsAllInfo
 * #8cc0d131:2361446705:-1933520591
 * msg_ids:Vector<long>
 * info:bytes
 */
export class XMsgsTAllTInfo {
  static _id = 0x8cc0d131;
  _values = [[], new Uint8Array()] as [ProtoLong[], Uint8Array];

  get_msg_ids(): ProtoLong[] {
    return this._values[0];
  }
  set_msg_ids(val: ProtoLong[]): this {
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
    if (!noId) buf.writeInt(XMsgsTAllTInfo._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
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
      if (id !== XMsgsTAllTInfo._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
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
AllStructs.set(XMsgsTAllTInfo._id, XMsgsTAllTInfo);

/**
 * msg_detailed_info:MsgDetailedInfo
 * #276d3ec6:661470918:661470918
 * msg_id:long
 * answer_msg_id:long
 * bytes:int
 * status:int
 */
export class XMsgTDetailedTInfo {
  static _id = 0x276d3ec6;
  _values = [[0, 0], [0, 0], 0, 0] as [ProtoLong, ProtoLong, number, number];

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
    if (!noId) buf.writeInt(XMsgTDetailedTInfo._id);

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
      if (id !== XMsgTDetailedTInfo._id) panic(id.toString(16));
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
AllStructs.set(XMsgTDetailedTInfo._id, XMsgTDetailedTInfo);

/**
 * msg_new_detailed_info:MsgDetailedInfo
 * #809db6df:2157819615:-2137147681
 * answer_msg_id:long
 * bytes:int
 * status:int
 */
export class XMsgTNewTDetailedTInfo {
  static _id = 0x809db6df;
  _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

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
    if (!noId) buf.writeInt(XMsgTNewTDetailedTInfo._id);

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
      if (id !== XMsgTNewTDetailedTInfo._id) panic(id.toString(16));
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
AllStructs.set(XMsgTNewTDetailedTInfo._id, XMsgTNewTDetailedTInfo);

/**
 * bind_auth_key_inner:BindAuthKeyInner
 * #75a3f765:1973679973:1973679973
 * nonce:long
 * temp_auth_key_id:long
 * perm_auth_key_id:long
 * temp_session_id:long
 * expires_at:int
 */
export class XBindTAuthTKeyTInner {
  static _id = 0x75a3f765;
  _values = [[0, 0], [0, 0], [0, 0], [0, 0], 0] as [
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
    if (!noId) buf.writeInt(XBindTAuthTKeyTInner._id);

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
      if (id !== XBindTAuthTKeyTInner._id) panic(id.toString(16));
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
AllStructs.set(XBindTAuthTKeyTInner._id, XBindTAuthTKeyTInner);

/**
 * MXReqTPq:MXReqTPq
 * #60469778:1615239032:1615239032
 * nonce:int128
 */
export class TMxReqTPq {
  static _id = 0x60469778;
  _values = [new Uint8Array(16)] as [Uint8Array];

  get_nonce(): Uint8Array {
    return this._values[0];
  }
  set_nonce(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TMxReqTPq._id);

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
      if (id !== TMxReqTPq._id) panic(id.toString(16));
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
AllStructs.set(TMxReqTPq._id, TMxReqTPq);

/**
 * req_pq:ResPQ
 * #60469778:1615239032:1615239032
 * nonce:int128
 */
export function CallTMxReqTPq(
  invoker: ApiInvoker,
  req: TMxReqTPq
): Promise<TResPq> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TResPq => {
      let val: TResPq = new TResPq();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXReqXDhTParams:MXReqXDhTParams
 * #d712e4be:3608339646:-686627650
 * nonce:int128
 * server_nonce:int128
 * p:bytes
 * q:bytes
 * public_key_fingerprint:long
 * encrypted_data:bytes
 */
export class TMxReqXDhTParams {
  static _id = 0xd712e4be;
  _values = [
    new Uint8Array(16),
    new Uint8Array(16),
    new Uint8Array(),
    new Uint8Array(),
    [0, 0],
    new Uint8Array()
  ] as [Uint8Array, Uint8Array, Uint8Array, Uint8Array, ProtoLong, Uint8Array];

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
    if (!noId) buf.writeInt(TMxReqXDhTParams._id);

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
      if (id !== TMxReqXDhTParams._id) panic(id.toString(16));
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
AllStructs.set(TMxReqXDhTParams._id, TMxReqXDhTParams);

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
export function CallTMxReqXDhTParams(
  invoker: ApiInvoker,
  req: TMxReqXDhTParams
): Promise<TServerXDhXParams> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TServerXDhXParams => {
      let val: TServerXDhXParams = new TServerXDhXParams();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXSetTClientXDhTParams:MXSetTClientXDhTParams
 * #f5045f1f:4110704415:-184262881
 * nonce:int128
 * server_nonce:int128
 * encrypted_data:bytes
 */
export class TMxSetTClientXDhTParams {
  static _id = 0xf5045f1f;
  _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array()] as [
    Uint8Array,
    Uint8Array,
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

  get_encrypted_data(): Uint8Array {
    return this._values[2];
  }
  set_encrypted_data(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TMxSetTClientXDhTParams._id);

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
      if (id !== TMxSetTClientXDhTParams._id) panic(id.toString(16));
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
AllStructs.set(TMxSetTClientXDhTParams._id, TMxSetTClientXDhTParams);

/**
 * set_client_DH_params:Set_client_DH_params_answer
 * #f5045f1f:4110704415:-184262881
 * nonce:int128
 * server_nonce:int128
 * encrypted_data:bytes
 */
export function CallTMxSetTClientXDhTParams(
  invoker: ApiInvoker,
  req: TMxSetTClientXDhTParams
): Promise<TSetTClientXDhTParamsTAnswer> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TSetTClientXDhTParamsTAnswer => {
      let val: TSetTClientXDhTParamsTAnswer = new TSetTClientXDhTParamsTAnswer();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXRpcTDropTAnswer:MXRpcTDropTAnswer
 * #58e4a740:1491380032:1491380032
 * req_msg_id:long
 */
export class TMxRpcTDropTAnswer {
  static _id = 0x58e4a740;
  _values = [[0, 0]] as [ProtoLong];

  get_req_msg_id(): ProtoLong {
    return this._values[0];
  }
  set_req_msg_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TMxRpcTDropTAnswer._id);

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
      if (id !== TMxRpcTDropTAnswer._id) panic(id.toString(16));
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
AllStructs.set(TMxRpcTDropTAnswer._id, TMxRpcTDropTAnswer);

/**
 * rpc_drop_answer:RpcDropAnswer
 * #58e4a740:1491380032:1491380032
 * req_msg_id:long
 */
export function CallTMxRpcTDropTAnswer(
  invoker: ApiInvoker,
  req: TMxRpcTDropTAnswer
): Promise<TRpcDropAnswer> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TRpcDropAnswer => {
      let val: TRpcDropAnswer = new TRpcDropAnswer();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXGetTFutureTSalts:MXGetTFutureTSalts
 * #b921bd04:3105996036:-1188971260
 * num:int
 */
export class TMxGetTFutureTSalts {
  static _id = 0xb921bd04;
  _values = [0] as [number];

  get_num(): number {
    return this._values[0];
  }
  set_num(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TMxGetTFutureTSalts._id);

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
      if (id !== TMxGetTFutureTSalts._id) panic(id.toString(16));
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
AllStructs.set(TMxGetTFutureTSalts._id, TMxGetTFutureTSalts);

/**
 * get_future_salts:FutureSalts
 * #b921bd04:3105996036:-1188971260
 * num:int
 */
export function CallTMxGetTFutureTSalts(
  invoker: ApiInvoker,
  req: TMxGetTFutureTSalts
): Promise<TFutureSalts> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TFutureSalts => {
      let val: TFutureSalts = new TFutureSalts();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXPing:MXPing
 * #7abe77ec:2059302892:2059302892
 * ping_id:long
 */
export class TMxPing {
  static _id = 0x7abe77ec;
  _values = [[0, 0]] as [ProtoLong];

  get_ping_id(): ProtoLong {
    return this._values[0];
  }
  set_ping_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TMxPing._id);

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
      if (id !== TMxPing._id) panic(id.toString(16));
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
AllStructs.set(TMxPing._id, TMxPing);

/**
 * ping:Pong
 * #7abe77ec:2059302892:2059302892
 * ping_id:long
 */
export function CallTMxPing(invoker: ApiInvoker, req: TMxPing): Promise<TPong> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TPong => {
      let val: TPong = new TPong();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXPingTDelayTDisconnect:MXPingTDelayTDisconnect
 * #f3427b8c:4081220492:-213746804
 * ping_id:long
 * disconnect_delay:int
 */
export class TMxPingTDelayTDisconnect {
  static _id = 0xf3427b8c;
  _values = [[0, 0], 0] as [ProtoLong, number];

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
    if (!noId) buf.writeInt(TMxPingTDelayTDisconnect._id);

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
      if (id !== TMxPingTDelayTDisconnect._id) panic(id.toString(16));
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
AllStructs.set(TMxPingTDelayTDisconnect._id, TMxPingTDelayTDisconnect);

/**
 * ping_delay_disconnect:Pong
 * #f3427b8c:4081220492:-213746804
 * ping_id:long
 * disconnect_delay:int
 */
export function CallTMxPingTDelayTDisconnect(
  invoker: ApiInvoker,
  req: TMxPingTDelayTDisconnect
): Promise<TPong> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TPong => {
      let val: TPong = new TPong();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXDestroyTSession:MXDestroyTSession
 * #e7512126:3880853798:-414113498
 * session_id:long
 */
export class TMxDestroyTSession {
  static _id = 0xe7512126;
  _values = [[0, 0]] as [ProtoLong];

  get_session_id(): ProtoLong {
    return this._values[0];
  }
  set_session_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TMxDestroyTSession._id);

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
      if (id !== TMxDestroyTSession._id) panic(id.toString(16));
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
AllStructs.set(TMxDestroyTSession._id, TMxDestroyTSession);

/**
 * destroy_session:DestroySessionRes
 * #e7512126:3880853798:-414113498
 * session_id:long
 */
export function CallTMxDestroyTSession(
  invoker: ApiInvoker,
  req: TMxDestroyTSession
): Promise<TDestroySessionRes> {
  return invoker.call(
    req,
    (buf: ByteBuffer): TDestroySessionRes => {
      let val: TDestroySessionRes = new TDestroySessionRes();
      val = val._read(buf);
      return val;
    }
  );
}

/**
 * MXHttpTWait:MXHttpTWait
 * #9299359f:2459514271:-1835453025
 * max_delay:int
 * wait_after:int
 * max_wait:int
 */
export class TMxHttpTWait {
  static _id = 0x9299359f;
  _values = [0, 0, 0] as [number, number, number];

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
    if (!noId) buf.writeInt(TMxHttpTWait._id);

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
      if (id !== TMxHttpTWait._id) panic(id.toString(16));
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
AllStructs.set(TMxHttpTWait._id, TMxHttpTWait);

/**
 * http_wait:HttpWait
 * #9299359f:2459514271:-1835453025
 * max_delay:int
 * wait_after:int
 * max_wait:int
 */
export function CallTMxHttpTWait(
  invoker: ApiInvoker,
  req: TMxHttpTWait
): Promise<OneOf> {
  return invoker.call(
    req,
    (buf: ByteBuffer): OneOf => {
      let val: OneOf = new OneOf();
      val = val._read(buf);
      return val;
    }
  );
}

export class TVectorTT extends XVector {}
export class TResPq extends XResPq {}

const TPXQTInnerTDataOneOfTypes: Array<
  typeof XPTQTInnerTData | typeof XPTQTInnerTDataTTemp
> = [XPTQTInnerTData, XPTQTInnerTDataTTemp];
export class TPXQTInnerTData extends OneOf<
  typeof XPTQTInnerTData | typeof XPTQTInnerTDataTTemp,
  XPTQTInnerTData | XPTQTInnerTDataTTemp
> {
  getTypes() {
    return TPXQTInnerTDataOneOfTypes;
  }
}

const TServerXDhXParamsOneOfTypes: Array<
  typeof XServerXDhTParamsTFail | typeof XServerXDhTParamsTOk
> = [XServerXDhTParamsTFail, XServerXDhTParamsTOk];
export class TServerXDhXParams extends OneOf<
  typeof XServerXDhTParamsTFail | typeof XServerXDhTParamsTOk,
  XServerXDhTParamsTFail | XServerXDhTParamsTOk
> {
  getTypes() {
    return TServerXDhXParamsOneOfTypes;
  }
}
export class TServerXDhTInnerTData extends XServerXDhTInnerTData {}
export class TClientXDhXInnerXData extends XClientXDhTInnerTData {}

const TSetTClientXDhTParamsTAnswerOneOfTypes: Array<
  typeof XDhTGenTOk | typeof XDhTGenTRetry | typeof XDhTGenTFail
> = [XDhTGenTOk, XDhTGenTRetry, XDhTGenTFail];
export class TSetTClientXDhTParamsTAnswer extends OneOf<
  typeof XDhTGenTOk | typeof XDhTGenTRetry | typeof XDhTGenTFail,
  XDhTGenTOk | XDhTGenTRetry | XDhTGenTFail
> {
  getTypes() {
    return TSetTClientXDhTParamsTAnswerOneOfTypes;
  }
}
export class TRpcResult extends XRpcTResult {}
export class TRpcError extends XRpcTError {}

const TRpcDropAnswerOneOfTypes: Array<
  | typeof XRpcTAnswerTUnknown
  | typeof XRpcTAnswerTDroppedTRunning
  | typeof XRpcTAnswerTDropped
> = [XRpcTAnswerTUnknown, XRpcTAnswerTDroppedTRunning, XRpcTAnswerTDropped];
export class TRpcDropAnswer extends OneOf<
  | typeof XRpcTAnswerTUnknown
  | typeof XRpcTAnswerTDroppedTRunning
  | typeof XRpcTAnswerTDropped,
  XRpcTAnswerTUnknown | XRpcTAnswerTDroppedTRunning | XRpcTAnswerTDropped
> {
  getTypes() {
    return TRpcDropAnswerOneOfTypes;
  }
}
export class TFutureSalt extends XFutureTSalt {}
export class TFutureSalts extends XFutureTSalts {}
export class TPong extends XPong {}

const TDestroySessionResOneOfTypes: Array<
  typeof XDestroyTSessionTOk | typeof XDestroyTSessionTNone
> = [XDestroyTSessionTOk, XDestroyTSessionTNone];
export class TDestroySessionRes extends OneOf<
  typeof XDestroyTSessionTOk | typeof XDestroyTSessionTNone,
  XDestroyTSessionTOk | XDestroyTSessionTNone
> {
  getTypes() {
    return TDestroySessionResOneOfTypes;
  }
}
export class TNewSession extends XNewTSessionTCreated {}
export class TMessageContainer extends XMsgTContainer {}
export class TMessage extends XMessage {}
export class TMessageCopy extends XMsgTCopy {}
export class TObject extends XGzipTPacked {}
export class TMsgsAck extends XMsgsTAck {}

const TBadMsgNotificationOneOfTypes: Array<
  typeof XBadTMsgTNotification | typeof XBadTServerTSalt
> = [XBadTMsgTNotification, XBadTServerTSalt];
export class TBadMsgNotification extends OneOf<
  typeof XBadTMsgTNotification | typeof XBadTServerTSalt,
  XBadTMsgTNotification | XBadTServerTSalt
> {
  getTypes() {
    return TBadMsgNotificationOneOfTypes;
  }
}
export class TMsgResendReq extends XMsgTResendTReq {}
export class TMsgsStateReq extends XMsgsTStateTReq {}
export class TMsgsStateInfo extends XMsgsTStateTInfo {}
export class TMsgsAllInfo extends XMsgsTAllTInfo {}

const TMsgDetailedInfoOneOfTypes: Array<
  typeof XMsgTDetailedTInfo | typeof XMsgTNewTDetailedTInfo
> = [XMsgTDetailedTInfo, XMsgTNewTDetailedTInfo];
export class TMsgDetailedInfo extends OneOf<
  typeof XMsgTDetailedTInfo | typeof XMsgTNewTDetailedTInfo,
  XMsgTDetailedTInfo | XMsgTNewTDetailedTInfo
> {
  getTypes() {
    return TMsgDetailedInfoOneOfTypes;
  }
}
export class TBindAuthKeyInner extends XBindTAuthTKeyTInner {}

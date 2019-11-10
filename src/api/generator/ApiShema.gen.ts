import { ApiInvoker } from "../ApiInvoker";
import { ByteBuffer } from "../ByteBuffer";
import {
  AllStructs,
  IStruct,
  OneOf,
  panic,
  ProtoLong,
  TMethod
} from "../SchemaHelpers";

import { RpcErrorS } from "./MTprotoShema.gen";

/**
 * boolFalse:Bool
 * #bc799737:3162085175:-1132882121
 *
 */
export class BoolFalseS {
  static _id = 0xbc799737;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BoolFalseS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BoolFalseS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(BoolFalseS._id, BoolFalseS);

/**
 * boolTrue:Bool
 * #997275b5:2574415285:-1720552011
 *
 */
export class BoolTrueS {
  static _id = 0x997275b5;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BoolTrueS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BoolTrueS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(BoolTrueS._id, BoolTrueS);

/**
 * true:True
 * #3fedd339:1072550713:1072550713
 *
 */
export class TrueS {
  static _id = 0x3fedd339;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TrueS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TrueS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(TrueS._id, TrueS);

/**
 * vector:Vector t
 * #1cb5c415:481674261:481674261
 *
 */
export class VectorS {
  static _id = 0x1cb5c415;

  _values = [] as any[];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(VectorS._id);

    buf.writeInt(this._values.length);
    for (let i = 0; i < this._values.length; i++) {
      this._values[i]._write(buf);
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
      this._values.push(item);
    }

    return this;
  }
}
AllStructs.set(VectorS._id, VectorS);

/**
 * error:Error
 * #c4b9f9bb:3300522427:-994444869
 * code:int
 * text:string
 */
export class ErrorS {
  static _id = 0xc4b9f9bb;

  _values = [0, ""] as [number, string];

  get_code(): number {
    return this._values[0];
  }
  set_code(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_text(): string {
    return this._values[1];
  }
  set_text(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ErrorS._id);

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
      if (id !== ErrorS._id) panic(id.toString(16));
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
AllStructs.set(ErrorS._id, ErrorS);

/**
 * null:Null
 * #56730bcc:1450380236:1450380236
 *
 */
export class NullS {
  static _id = 0x56730bcc;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(NullS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== NullS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(NullS._id, NullS);

/**
 * inputPeerEmpty:InputPeer
 * #7f3b18ea:2134579434:2134579434
 *
 */
export class InputPeerEmptyS {
  static _id = 0x7f3b18ea;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPeerEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPeerEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputPeerEmptyS._id, InputPeerEmptyS);

/**
 * inputPeerSelf:InputPeer
 * #7da07ec9:2107670217:2107670217
 *
 */
export class InputPeerSelfS {
  static _id = 0x7da07ec9;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPeerSelfS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPeerSelfS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputPeerSelfS._id, InputPeerSelfS);

/**
 * inputPeerChat:InputPeer
 * #179be863:396093539:396093539
 * chat_id:int
 */
export class InputPeerChatS {
  static _id = 0x179be863;

  _values = [0] as [number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPeerChatS._id);

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
      if (id !== InputPeerChatS._id) panic(id.toString(16));
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
AllStructs.set(InputPeerChatS._id, InputPeerChatS);

/**
 * inputUserEmpty:InputUser
 * #b98886cf:3112732367:-1182234929
 *
 */
export class InputUserEmptyS {
  static _id = 0xb98886cf;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputUserEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputUserEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputUserEmptyS._id, InputUserEmptyS);

/**
 * inputUserSelf:InputUser
 * #f7c1b13f:4156666175:-138301121
 *
 */
export class InputUserSelfS {
  static _id = 0xf7c1b13f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputUserSelfS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputUserSelfS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputUserSelfS._id, InputUserSelfS);

/**
 * inputPhoneContact:InputContact
 * #f392b7f4:4086478836:-208488460
 * client_id:long
 * phone:string
 * first_name:string
 * last_name:string
 */
export class InputPhoneContactS {
  static _id = 0xf392b7f4;

  _values = [[0, 0], "", "", ""] as [ProtoLong, string, string, string];

  get_client_id(): ProtoLong {
    return this._values[0];
  }
  set_client_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_phone(): string {
    return this._values[1];
  }
  set_phone(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_first_name(): string {
    return this._values[2];
  }
  set_first_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_last_name(): string {
    return this._values[3];
  }
  set_last_name(val: string): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPhoneContactS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPhoneContactS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputPhoneContactS._id, InputPhoneContactS);

/**
 * inputFile:InputFile
 * #f52ff27f:4113560191:-181407105
 * id:long
 * parts:int
 * name:string
 * md5_checksum:string
 */
export class InputFileS {
  static _id = 0xf52ff27f;

  _values = [[0, 0], 0, "", ""] as [ProtoLong, number, string, string];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_parts(): number {
    return this._values[1];
  }
  set_parts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_name(): string {
    return this._values[2];
  }
  set_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_md5_checksum(): string {
    return this._values[3];
  }
  set_md5_checksum(val: string): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputFileS._id);

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
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputFileS._id) panic(id.toString(16));
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
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputFileS._id, InputFileS);

/**
 * inputMediaEmpty:InputMedia
 * #9664f57f:2523198847:-1771768449
 *
 */
export class InputMediaEmptyS {
  static _id = 0x9664f57f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMediaEmptyS._id, InputMediaEmptyS);

/**
 * inputMediaUploadedPhoto:InputMedia
 * #1e287d04:505969924:505969924
 * flags:#
 * file:InputFile
 * stickers:flags.0?Vector<InputDocument>
 * ttl_seconds:flags.1?int
 */
export class InputMediaUploadedPhotoS {
  static _id = 0x1e287d04;

  _values = [0, new InputFileT(), [], 0] as [
    number,
    InputFileT,
    InputDocumentT[],
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_file(): InputFileT {
    return this._values[1];
  }
  set_file(val: InputFileT): this {
    this._values[1] = val;

    return this;
  }

  get_stickers(): InputDocumentT[] {
    return this._values[2];
  }
  set_stickers(val: InputDocumentT[]): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_stickers(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_ttl_seconds(): number {
    return this._values[3];
  }
  set_ttl_seconds(val: number): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaUploadedPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as InputFileT;
      val._write(buf);
    }

    if (this.has_stickers()) {
      let val = values[2] as InputDocumentT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_ttl_seconds()) {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaUploadedPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as InputFileT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_stickers()) {
      let val = values[2] as InputDocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: InputDocumentT = new InputDocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    if (this.has_ttl_seconds()) {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaUploadedPhotoS._id, InputMediaUploadedPhotoS);

/**
 * inputMediaPhoto:InputMedia
 * #b3ba0635:3015312949:-1279654347
 * flags:#
 * id:InputPhoto
 * ttl_seconds:flags.0?int
 */
export class InputMediaPhotoS {
  static _id = 0xb3ba0635;

  _values = [0, new InputPhotoT(), 0] as [number, InputPhotoT, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): InputPhotoT {
    return this._values[1];
  }
  set_id(val: InputPhotoT): this {
    this._values[1] = val;

    return this;
  }

  get_ttl_seconds(): number {
    return this._values[2];
  }
  set_ttl_seconds(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as InputPhotoT;
      val._write(buf);
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as InputPhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaPhotoS._id, InputMediaPhotoS);

/**
 * inputMediaGeoPoint:InputMedia
 * #f9c44144:4190388548:-104578748
 * geo_point:InputGeoPoint
 */
export class InputMediaGeoPointS {
  static _id = 0xf9c44144;

  _values = [new InputGeoPointT()] as [InputGeoPointT];

  get_geo_point(): InputGeoPointT {
    return this._values[0];
  }
  set_geo_point(val: InputGeoPointT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaGeoPointS._id);

    let values = this._values;

    {
      let val = values[0] as InputGeoPointT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaGeoPointS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputGeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaGeoPointS._id, InputMediaGeoPointS);

/**
 * inputMediaContact:InputMedia
 * #f8ab7dfb:4171988475:-122978821
 * phone_number:string
 * first_name:string
 * last_name:string
 * vcard:string
 */
export class InputMediaContactS {
  static _id = 0xf8ab7dfb;

  _values = ["", "", "", ""] as [string, string, string, string];

  get_phone_number(): string {
    return this._values[0];
  }
  set_phone_number(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_first_name(): string {
    return this._values[1];
  }
  set_first_name(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_last_name(): string {
    return this._values[2];
  }
  set_last_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_vcard(): string {
    return this._values[3];
  }
  set_vcard(val: string): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaContactS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaContactS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaContactS._id, InputMediaContactS);

/**
 * inputChatPhotoEmpty:InputChatPhoto
 * #1ca48f57:480546647:480546647
 *
 */
export class InputChatPhotoEmptyS {
  static _id = 0x1ca48f57;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputChatPhotoEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputChatPhotoEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputChatPhotoEmptyS._id, InputChatPhotoEmptyS);

/**
 * inputChatUploadedPhoto:InputChatPhoto
 * #927c55b4:2457621940:-1837345356
 * file:InputFile
 */
export class InputChatUploadedPhotoS {
  static _id = 0x927c55b4;

  _values = [new InputFileT()] as [InputFileT];

  get_file(): InputFileT {
    return this._values[0];
  }
  set_file(val: InputFileT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputChatUploadedPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as InputFileT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputChatUploadedPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputFileT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputChatUploadedPhotoS._id, InputChatUploadedPhotoS);

/**
 * inputChatPhoto:InputChatPhoto
 * #8953ad37:2303962423:-1991004873
 * id:InputPhoto
 */
export class InputChatPhotoS {
  static _id = 0x8953ad37;

  _values = [new InputPhotoT()] as [InputPhotoT];

  get_id(): InputPhotoT {
    return this._values[0];
  }
  set_id(val: InputPhotoT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputChatPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as InputPhotoT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputChatPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputPhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputChatPhotoS._id, InputChatPhotoS);

/**
 * inputGeoPointEmpty:InputGeoPoint
 * #e4c123d6:3837862870:-457104426
 *
 */
export class InputGeoPointEmptyS {
  static _id = 0xe4c123d6;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputGeoPointEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputGeoPointEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputGeoPointEmptyS._id, InputGeoPointEmptyS);

/**
 * inputGeoPoint:InputGeoPoint
 * #f3b7acc9:4088900809:-206066487
 * lat:double
 * long:double
 */
export class InputGeoPointS {
  static _id = 0xf3b7acc9;

  _values = [0.0, 0.0] as [number, number];

  get_lat(): number {
    return this._values[0];
  }
  set_lat(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_long(): number {
    return this._values[1];
  }
  set_long(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputGeoPointS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeDouble(val);
    }

    {
      let val = values[1] as number;
      buf.writeDouble(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputGeoPointS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readDouble();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readDouble();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(InputGeoPointS._id, InputGeoPointS);

/**
 * inputPhotoEmpty:InputPhoto
 * #1cd7bf0d:483901197:483901197
 *
 */
export class InputPhotoEmptyS {
  static _id = 0x1cd7bf0d;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPhotoEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPhotoEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputPhotoEmptyS._id, InputPhotoEmptyS);

/**
 * inputPhoto:InputPhoto
 * #3bb3b94a:1001634122:1001634122
 * id:long
 * access_hash:long
 * file_reference:bytes
 */
export class InputPhotoS {
  static _id = 0x3bb3b94a;

  _values = [[0, 0], [0, 0], new Uint8Array()] as [
    ProtoLong,
    ProtoLong,
    Uint8Array
  ];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_file_reference(): Uint8Array {
    return this._values[2];
  }
  set_file_reference(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPhotoS._id);

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
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPhotoS._id) panic(id.toString(16));
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
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputPhotoS._id, InputPhotoS);

/**
 * inputFileLocation:InputFileLocation
 * #dfdaabe1:3755650017:-539317279
 * volume_id:long
 * local_id:int
 * secret:long
 * file_reference:bytes
 */
export class InputFileLocationS {
  static _id = 0xdfdaabe1;

  _values = [[0, 0], 0, [0, 0], new Uint8Array()] as [
    ProtoLong,
    number,
    ProtoLong,
    Uint8Array
  ];

  get_volume_id(): ProtoLong {
    return this._values[0];
  }
  set_volume_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_local_id(): number {
    return this._values[1];
  }
  set_local_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_secret(): ProtoLong {
    return this._values[2];
  }
  set_secret(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_file_reference(): Uint8Array {
    return this._values[3];
  }
  set_file_reference(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputFileLocationS._id);

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
      if (id !== InputFileLocationS._id) panic(id.toString(16));
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
AllStructs.set(InputFileLocationS._id, InputFileLocationS);

/**
 * peerUser:Peer
 * #9db1bc6d:2645671021:-1649296275
 * user_id:int
 */
export class PeerUserS {
  static _id = 0x9db1bc6d;

  _values = [0] as [number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PeerUserS._id);

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
      if (id !== PeerUserS._id) panic(id.toString(16));
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
AllStructs.set(PeerUserS._id, PeerUserS);

/**
 * peerChat:Peer
 * #bad0e5bb:3134252475:-1160714821
 * chat_id:int
 */
export class PeerChatS {
  static _id = 0xbad0e5bb;

  _values = [0] as [number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PeerChatS._id);

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
      if (id !== PeerChatS._id) panic(id.toString(16));
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
AllStructs.set(PeerChatS._id, PeerChatS);

/**
 * storage.fileUnknown:storage.FileType
 * #aa963b05:2861972229:-1432995067
 *
 */
export class StorageFileUnknownS {
  static _id = 0xaa963b05;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileUnknownS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileUnknownS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileUnknownS._id, StorageFileUnknownS);

/**
 * storage.filePartial:storage.FileType
 * #40bc6f52:1086091090:1086091090
 *
 */
export class StorageFilePartialS {
  static _id = 0x40bc6f52;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFilePartialS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFilePartialS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFilePartialS._id, StorageFilePartialS);

/**
 * storage.fileJpeg:storage.FileType
 * #7efe0e:8322574:8322574
 *
 */
export class StorageFileJpegS {
  static _id = 0x7efe0e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileJpegS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileJpegS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileJpegS._id, StorageFileJpegS);

/**
 * storage.fileGif:storage.FileType
 * #cae1aadf:3403786975:-891180321
 *
 */
export class StorageFileGifS {
  static _id = 0xcae1aadf;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileGifS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileGifS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileGifS._id, StorageFileGifS);

/**
 * storage.filePng:storage.FileType
 * #a4f63c0:172975040:172975040
 *
 */
export class StorageFilePngS {
  static _id = 0xa4f63c0;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFilePngS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFilePngS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFilePngS._id, StorageFilePngS);

/**
 * storage.filePdf:storage.FileType
 * #ae1e508d:2921222285:-1373745011
 *
 */
export class StorageFilePdfS {
  static _id = 0xae1e508d;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFilePdfS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFilePdfS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFilePdfS._id, StorageFilePdfS);

/**
 * storage.fileMp3:storage.FileType
 * #528a0677:1384777335:1384777335
 *
 */
export class StorageFileMp3S {
  static _id = 0x528a0677;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileMp3S._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileMp3S._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileMp3S._id, StorageFileMp3S);

/**
 * storage.fileMov:storage.FileType
 * #4b09ebbc:1258941372:1258941372
 *
 */
export class StorageFileMovS {
  static _id = 0x4b09ebbc;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileMovS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileMovS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileMovS._id, StorageFileMovS);

/**
 * storage.fileMp4:storage.FileType
 * #b3cea0e4:3016663268:-1278304028
 *
 */
export class StorageFileMp4S {
  static _id = 0xb3cea0e4;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileMp4S._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileMp4S._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileMp4S._id, StorageFileMp4S);

/**
 * storage.fileWebp:storage.FileType
 * #1081464c:276907596:276907596
 *
 */
export class StorageFileWebpS {
  static _id = 0x1081464c;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StorageFileWebpS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StorageFileWebpS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(StorageFileWebpS._id, StorageFileWebpS);

/**
 * userEmpty:User
 * #200250ba:537022650:537022650
 * id:int
 */
export class UserEmptyS {
  static _id = 0x200250ba;

  _values = [0] as [number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserEmptyS._id);

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
      if (id !== UserEmptyS._id) panic(id.toString(16));
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
AllStructs.set(UserEmptyS._id, UserEmptyS);

/**
 * userProfilePhotoEmpty:UserProfilePhoto
 * #4f11bae1:1326562017:1326562017
 *
 */
export class UserProfilePhotoEmptyS {
  static _id = 0x4f11bae1;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserProfilePhotoEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserProfilePhotoEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UserProfilePhotoEmptyS._id, UserProfilePhotoEmptyS);

/**
 * userProfilePhoto:UserProfilePhoto
 * #ecd75d8c:3973537164:-321430132
 * photo_id:long
 * photo_small:FileLocation
 * photo_big:FileLocation
 * dc_id:int
 */
export class UserProfilePhotoS {
  static _id = 0xecd75d8c;

  _values = [[0, 0], new FileLocationT(), new FileLocationT(), 0] as [
    ProtoLong,
    FileLocationT,
    FileLocationT,
    number
  ];

  get_photo_id(): ProtoLong {
    return this._values[0];
  }
  set_photo_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_photo_small(): FileLocationT {
    return this._values[1];
  }
  set_photo_small(val: FileLocationT): this {
    this._values[1] = val;

    return this;
  }

  get_photo_big(): FileLocationT {
    return this._values[2];
  }
  set_photo_big(val: FileLocationT): this {
    this._values[2] = val;

    return this;
  }

  get_dc_id(): number {
    return this._values[3];
  }
  set_dc_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserProfilePhotoS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as FileLocationT;
      val._write(buf);
    }

    {
      let val = values[2] as FileLocationT;
      val._write(buf);
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
      if (id !== UserProfilePhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as FileLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as FileLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UserProfilePhotoS._id, UserProfilePhotoS);

/**
 * userStatusEmpty:UserStatus
 * #9d05049:164646985:164646985
 *
 */
export class UserStatusEmptyS {
  static _id = 0x9d05049;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserStatusEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserStatusEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UserStatusEmptyS._id, UserStatusEmptyS);

/**
 * userStatusOnline:UserStatus
 * #edb93949:3988339017:-306628279
 * expires:int
 */
export class UserStatusOnlineS {
  static _id = 0xedb93949;

  _values = [0] as [number];

  get_expires(): number {
    return this._values[0];
  }
  set_expires(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserStatusOnlineS._id);

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
      if (id !== UserStatusOnlineS._id) panic(id.toString(16));
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
AllStructs.set(UserStatusOnlineS._id, UserStatusOnlineS);

/**
 * userStatusOffline:UserStatus
 * #8c703f:9203775:9203775
 * was_online:int
 */
export class UserStatusOfflineS {
  static _id = 0x8c703f;

  _values = [0] as [number];

  get_was_online(): number {
    return this._values[0];
  }
  set_was_online(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserStatusOfflineS._id);

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
      if (id !== UserStatusOfflineS._id) panic(id.toString(16));
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
AllStructs.set(UserStatusOfflineS._id, UserStatusOfflineS);

/**
 * chatEmpty:Chat
 * #9ba2d800:2611140608:-1683826688
 * id:int
 */
export class ChatEmptyS {
  static _id = 0x9ba2d800;

  _values = [0] as [number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatEmptyS._id);

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
      if (id !== ChatEmptyS._id) panic(id.toString(16));
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
AllStructs.set(ChatEmptyS._id, ChatEmptyS);

/**
 * chat:Chat
 * #3bda1bde:1004149726:1004149726
 * flags:#
 * creator:flags.0?true
 * kicked:flags.1?true
 * left:flags.2?true
 * deactivated:flags.5?true
 * id:int
 * title:string
 * photo:ChatPhoto
 * participants_count:int
 * date:int
 * version:int
 * migrated_to:flags.6?InputChannel
 * admin_rights:flags.14?ChatAdminRights
 * default_banned_rights:flags.18?ChatBannedRights
 */
export class ChatS {
  static _id = 0x3bda1bde;

  _values = [
    0,
    true,
    true,
    true,
    true,
    0,
    "",
    new ChatPhotoT(),
    0,
    0,
    0,
    new InputChannelT(),
    new ChatAdminRightsT(),
    new ChatBannedRightsT()
  ] as [
    number,
    true,
    true,
    true,
    true,
    number,
    string,
    ChatPhotoT,
    number,
    number,
    number,
    InputChannelT,
    ChatAdminRightsT,
    ChatBannedRightsT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_creator(): true {
    return this._values[1];
  }
  set_creator(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_creator(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_kicked(): true {
    return this._values[2];
  }
  set_kicked(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_kicked(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_left(): true {
    return this._values[3];
  }
  set_left(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_left(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_deactivated(): true {
    return this._values[4];
  }
  set_deactivated(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_deactivated(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_id(): number {
    return this._values[5];
  }
  set_id(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_title(): string {
    return this._values[6];
  }
  set_title(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_photo(): ChatPhotoT {
    return this._values[7];
  }
  set_photo(val: ChatPhotoT): this {
    this._values[7] = val;

    return this;
  }

  get_participants_count(): number {
    return this._values[8];
  }
  set_participants_count(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_date(): number {
    return this._values[9];
  }
  set_date(val: number): this {
    this._values[9] = val;

    return this;
  }

  get_version(): number {
    return this._values[10];
  }
  set_version(val: number): this {
    this._values[10] = val;

    return this;
  }

  get_migrated_to(): InputChannelT {
    return this._values[11];
  }
  set_migrated_to(val: InputChannelT): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_migrated_to(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_admin_rights(): ChatAdminRightsT {
    return this._values[12];
  }
  set_admin_rights(val: ChatAdminRightsT): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_admin_rights(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_default_banned_rights(): ChatBannedRightsT {
    return this._values[13];
  }
  set_default_banned_rights(val: ChatBannedRightsT): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 18));

    return this;
  }

  has_default_banned_rights(): boolean {
    return !!(this.get_flags() & (1 << 18));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_creator()) {
      let val = values[1] as true;
    }

    if (this.has_kicked()) {
      let val = values[2] as true;
    }

    if (this.has_left()) {
      let val = values[3] as true;
    }

    if (this.has_deactivated()) {
      let val = values[4] as true;
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    {
      let val = values[7] as ChatPhotoT;
      val._write(buf);
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as number;
      buf.writeInt(val);
    }

    {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    if (this.has_migrated_to()) {
      let val = values[11] as InputChannelT;
      val._write(buf);
    }

    if (this.has_admin_rights()) {
      let val = values[12] as ChatAdminRightsT;
      val._write(buf);
    }

    if (this.has_default_banned_rights()) {
      let val = values[13] as ChatBannedRightsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_creator()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_kicked()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_left()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_deactivated()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    {
      let val = values[7] as ChatPhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as number;
      val = buf.readInt();
      values[9] = val;
    }

    {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    if (this.has_migrated_to()) {
      let val = values[11] as InputChannelT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[11] = val;
    }

    if (this.has_admin_rights()) {
      let val = values[12] as ChatAdminRightsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[12] = val;
    }

    if (this.has_default_banned_rights()) {
      let val = values[13] as ChatBannedRightsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[13] = val;
    }

    return this;
  }
}
AllStructs.set(ChatS._id, ChatS);

/**
 * chatForbidden:Chat
 * #7328bdb:120753115:120753115
 * id:int
 * title:string
 */
export class ChatForbiddenS {
  static _id = 0x7328bdb;

  _values = [0, ""] as [number, string];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_title(): string {
    return this._values[1];
  }
  set_title(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatForbiddenS._id);

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
      if (id !== ChatForbiddenS._id) panic(id.toString(16));
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
AllStructs.set(ChatForbiddenS._id, ChatForbiddenS);

/**
 * chatFull:ChatFull
 * #1b7c9db3:461151667:461151667
 * flags:#
 * can_set_username:flags.7?true
 * has_scheduled:flags.8?true
 * id:int
 * about:string
 * participants:ChatParticipants
 * chat_photo:flags.2?Photo
 * notify_settings:PeerNotifySettings
 * exported_invite:ExportedChatInvite
 * bot_info:flags.3?Vector<BotInfo>
 * pinned_msg_id:flags.6?int
 * folder_id:flags.11?int
 */
export class ChatFullS {
  static _id = 0x1b7c9db3;

  _values = [
    0,
    true,
    true,
    0,
    "",
    new ChatParticipantsT(),
    new PhotoT(),
    new PeerNotifySettingsT(),
    new ExportedChatInviteT(),
    [],
    0,
    0
  ] as [
    number,
    true,
    true,
    number,
    string,
    ChatParticipantsT,
    PhotoT,
    PeerNotifySettingsT,
    ExportedChatInviteT,
    BotInfoT[],
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_can_set_username(): true {
    return this._values[1];
  }
  set_can_set_username(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_can_set_username(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_has_scheduled(): true {
    return this._values[2];
  }
  set_has_scheduled(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_has_scheduled(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_id(): number {
    return this._values[3];
  }
  set_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_about(): string {
    return this._values[4];
  }
  set_about(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_participants(): ChatParticipantsT {
    return this._values[5];
  }
  set_participants(val: ChatParticipantsT): this {
    this._values[5] = val;

    return this;
  }

  get_chat_photo(): PhotoT {
    return this._values[6];
  }
  set_chat_photo(val: PhotoT): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_chat_photo(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_notify_settings(): PeerNotifySettingsT {
    return this._values[7];
  }
  set_notify_settings(val: PeerNotifySettingsT): this {
    this._values[7] = val;

    return this;
  }

  get_exported_invite(): ExportedChatInviteT {
    return this._values[8];
  }
  set_exported_invite(val: ExportedChatInviteT): this {
    this._values[8] = val;

    return this;
  }

  get_bot_info(): BotInfoT[] {
    return this._values[9];
  }
  set_bot_info(val: BotInfoT[]): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_bot_info(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_pinned_msg_id(): number {
    return this._values[10];
  }
  set_pinned_msg_id(val: number): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_pinned_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_folder_id(): number {
    return this._values[11];
  }
  set_folder_id(val: number): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatFullS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_can_set_username()) {
      let val = values[1] as true;
    }

    if (this.has_has_scheduled()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as ChatParticipantsT;
      val._write(buf);
    }

    if (this.has_chat_photo()) {
      let val = values[6] as PhotoT;
      val._write(buf);
    }

    {
      let val = values[7] as PeerNotifySettingsT;
      val._write(buf);
    }

    {
      let val = values[8] as ExportedChatInviteT;
      val._write(buf);
    }

    if (this.has_bot_info()) {
      let val = values[9] as BotInfoT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_pinned_msg_id()) {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    if (this.has_folder_id()) {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatFullS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_can_set_username()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_has_scheduled()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as ChatParticipantsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    if (this.has_chat_photo()) {
      let val = values[6] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    {
      let val = values[7] as PeerNotifySettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    {
      let val = values[8] as ExportedChatInviteT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    if (this.has_bot_info()) {
      let val = values[9] as BotInfoT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: BotInfoT = new BotInfoT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[9] = val;
    }

    if (this.has_pinned_msg_id()) {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    if (this.has_folder_id()) {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    return this;
  }
}
AllStructs.set(ChatFullS._id, ChatFullS);

/**
 * chatParticipant:ChatParticipant
 * #c8d7493e:3369552190:-925415106
 * user_id:int
 * inviter_id:int
 * date:int
 */
export class ChatParticipantS {
  static _id = 0xc8d7493e;

  _values = [0, 0, 0] as [number, number, number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_inviter_id(): number {
    return this._values[1];
  }
  set_inviter_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatParticipantS._id);

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
      if (id !== ChatParticipantS._id) panic(id.toString(16));
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
AllStructs.set(ChatParticipantS._id, ChatParticipantS);

/**
 * chatParticipantsForbidden:ChatParticipants
 * #fc900c2b:4237298731:-57668565
 * flags:#
 * chat_id:int
 * self_participant:flags.0?ChatParticipant
 */
export class ChatParticipantsForbiddenS {
  static _id = 0xfc900c2b;

  _values = [0, 0, new ChatParticipantT()] as [
    number,
    number,
    ChatParticipantT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_chat_id(): number {
    return this._values[1];
  }
  set_chat_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_self_participant(): ChatParticipantT {
    return this._values[2];
  }
  set_self_participant(val: ChatParticipantT): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_self_participant(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatParticipantsForbiddenS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    if (this.has_self_participant()) {
      let val = values[2] as ChatParticipantT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatParticipantsForbiddenS._id) panic(id.toString(16));
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

    if (this.has_self_participant()) {
      let val = values[2] as ChatParticipantT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ChatParticipantsForbiddenS._id, ChatParticipantsForbiddenS);

/**
 * chatParticipants:ChatParticipants
 * #3f460fed:1061556205:1061556205
 * chat_id:int
 * participants:Vector<ChatParticipant>
 * version:int
 */
export class ChatParticipantsS {
  static _id = 0x3f460fed;

  _values = [0, [], 0] as [number, ChatParticipantT[], number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_participants(): ChatParticipantT[] {
    return this._values[1];
  }
  set_participants(val: ChatParticipantT[]): this {
    this._values[1] = val;

    return this;
  }

  get_version(): number {
    return this._values[2];
  }
  set_version(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatParticipantsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as ChatParticipantT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
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
      if (id !== ChatParticipantsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as ChatParticipantT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatParticipantT = new ChatParticipantT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
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
AllStructs.set(ChatParticipantsS._id, ChatParticipantsS);

/**
 * chatPhotoEmpty:ChatPhoto
 * #37c1011c:935395612:935395612
 *
 */
export class ChatPhotoEmptyS {
  static _id = 0x37c1011c;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatPhotoEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatPhotoEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ChatPhotoEmptyS._id, ChatPhotoEmptyS);

/**
 * chatPhoto:ChatPhoto
 * #475cdbd5:1197267925:1197267925
 * photo_small:FileLocation
 * photo_big:FileLocation
 * dc_id:int
 */
export class ChatPhotoS {
  static _id = 0x475cdbd5;

  _values = [new FileLocationT(), new FileLocationT(), 0] as [
    FileLocationT,
    FileLocationT,
    number
  ];

  get_photo_small(): FileLocationT {
    return this._values[0];
  }
  set_photo_small(val: FileLocationT): this {
    this._values[0] = val;

    return this;
  }

  get_photo_big(): FileLocationT {
    return this._values[1];
  }
  set_photo_big(val: FileLocationT): this {
    this._values[1] = val;

    return this;
  }

  get_dc_id(): number {
    return this._values[2];
  }
  set_dc_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as FileLocationT;
      val._write(buf);
    }

    {
      let val = values[1] as FileLocationT;
      val._write(buf);
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
      if (id !== ChatPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as FileLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as FileLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(ChatPhotoS._id, ChatPhotoS);

/**
 * messageEmpty:Message
 * #83e5de54:2212879956:-2082087340
 * id:int
 */
export class MessageEmptyS {
  static _id = 0x83e5de54;

  _values = [0] as [number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEmptyS._id);

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
      if (id !== MessageEmptyS._id) panic(id.toString(16));
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
AllStructs.set(MessageEmptyS._id, MessageEmptyS);

/**
 * message:Message
 * #452c0e65:1160515173:1160515173
 * flags:#
 * out:flags.1?true
 * mentioned:flags.4?true
 * media_unread:flags.5?true
 * silent:flags.13?true
 * post:flags.14?true
 * from_scheduled:flags.18?true
 * legacy:flags.19?true
 * edit_hide:flags.21?true
 * id:int
 * from_id:flags.8?int
 * to_id:Peer
 * fwd_from:flags.2?MessageFwdHeader
 * via_bot_id:flags.11?int
 * reply_to_msg_id:flags.3?int
 * date:int
 * message:string
 * media:flags.9?MessageMedia
 * reply_markup:flags.6?ReplyMarkup
 * entities:flags.7?Vector<MessageEntity>
 * views:flags.10?int
 * edit_date:flags.15?int
 * post_author:flags.16?string
 * grouped_id:flags.17?long
 * restriction_reason:flags.22?Vector<RestrictionReason>
 */
export class MessageS {
  static _id = 0x452c0e65;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    0,
    0,
    new PeerT(),
    new MessageFwdHeaderT(),
    0,
    0,
    0,
    "",
    new MessageMediaT(),
    new ReplyMarkupT(),
    [],
    0,
    0,
    "",
    [0, 0],
    []
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    number,
    number,
    PeerT,
    MessageFwdHeaderT,
    number,
    number,
    number,
    string,
    MessageMediaT,
    ReplyMarkupT,
    MessageEntityT[],
    number,
    number,
    string,
    ProtoLong,
    RestrictionReasonT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_out(): true {
    return this._values[1];
  }
  set_out(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_out(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_mentioned(): true {
    return this._values[2];
  }
  set_mentioned(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_mentioned(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_media_unread(): true {
    return this._values[3];
  }
  set_media_unread(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_media_unread(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_silent(): true {
    return this._values[4];
  }
  set_silent(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_silent(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_post(): true {
    return this._values[5];
  }
  set_post(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_post(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_from_scheduled(): true {
    return this._values[6];
  }
  set_from_scheduled(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 18));

    return this;
  }

  has_from_scheduled(): boolean {
    return !!(this.get_flags() & (1 << 18));
  }

  get_legacy(): true {
    return this._values[7];
  }
  set_legacy(val: true): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 19));

    return this;
  }

  has_legacy(): boolean {
    return !!(this.get_flags() & (1 << 19));
  }

  get_edit_hide(): true {
    return this._values[8];
  }
  set_edit_hide(val: true): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 21));

    return this;
  }

  has_edit_hide(): boolean {
    return !!(this.get_flags() & (1 << 21));
  }

  get_id(): number {
    return this._values[9];
  }
  set_id(val: number): this {
    this._values[9] = val;

    return this;
  }

  get_from_id(): number {
    return this._values[10];
  }
  set_from_id(val: number): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_from_id(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_to_id(): PeerT {
    return this._values[11];
  }
  set_to_id(val: PeerT): this {
    this._values[11] = val;

    return this;
  }

  get_fwd_from(): MessageFwdHeaderT {
    return this._values[12];
  }
  set_fwd_from(val: MessageFwdHeaderT): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_fwd_from(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_via_bot_id(): number {
    return this._values[13];
  }
  set_via_bot_id(val: number): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_via_bot_id(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_reply_to_msg_id(): number {
    return this._values[14];
  }
  set_reply_to_msg_id(val: number): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_reply_to_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_date(): number {
    return this._values[15];
  }
  set_date(val: number): this {
    this._values[15] = val;

    return this;
  }

  get_message(): string {
    return this._values[16];
  }
  set_message(val: string): this {
    this._values[16] = val;

    return this;
  }

  get_media(): MessageMediaT {
    return this._values[17];
  }
  set_media(val: MessageMediaT): this {
    this._values[17] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_media(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[18];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[18] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_entities(): MessageEntityT[] {
    return this._values[19];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[19] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_views(): number {
    return this._values[20];
  }
  set_views(val: number): this {
    this._values[20] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_views(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  get_edit_date(): number {
    return this._values[21];
  }
  set_edit_date(val: number): this {
    this._values[21] = val;

    this.set_flags(this.get_flags() | (1 << 15));

    return this;
  }

  has_edit_date(): boolean {
    return !!(this.get_flags() & (1 << 15));
  }

  get_post_author(): string {
    return this._values[22];
  }
  set_post_author(val: string): this {
    this._values[22] = val;

    this.set_flags(this.get_flags() | (1 << 16));

    return this;
  }

  has_post_author(): boolean {
    return !!(this.get_flags() & (1 << 16));
  }

  get_grouped_id(): ProtoLong {
    return this._values[23];
  }
  set_grouped_id(val: ProtoLong): this {
    this._values[23] = val;

    this.set_flags(this.get_flags() | (1 << 17));

    return this;
  }

  has_grouped_id(): boolean {
    return !!(this.get_flags() & (1 << 17));
  }

  get_restriction_reason(): RestrictionReasonT[] {
    return this._values[24];
  }
  set_restriction_reason(val: RestrictionReasonT[]): this {
    this._values[24] = val;

    this.set_flags(this.get_flags() | (1 << 22));

    return this;
  }

  has_restriction_reason(): boolean {
    return !!(this.get_flags() & (1 << 22));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_out()) {
      let val = values[1] as true;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
    }

    if (this.has_post()) {
      let val = values[5] as true;
    }

    if (this.has_from_scheduled()) {
      let val = values[6] as true;
    }

    if (this.has_legacy()) {
      let val = values[7] as true;
    }

    if (this.has_edit_hide()) {
      let val = values[8] as true;
    }

    {
      let val = values[9] as number;
      buf.writeInt(val);
    }

    if (this.has_from_id()) {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    {
      let val = values[11] as PeerT;
      val._write(buf);
    }

    if (this.has_fwd_from()) {
      let val = values[12] as MessageFwdHeaderT;
      val._write(buf);
    }

    if (this.has_via_bot_id()) {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    {
      let val = values[15] as number;
      buf.writeInt(val);
    }

    {
      let val = values[16] as string;
      buf.writeString(val);
    }

    if (this.has_media()) {
      let val = values[17] as MessageMediaT;
      val._write(buf);
    }

    if (this.has_reply_markup()) {
      let val = values[18] as ReplyMarkupT;
      val._write(buf);
    }

    if (this.has_entities()) {
      let val = values[19] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_views()) {
      let val = values[20] as number;
      buf.writeInt(val);
    }

    if (this.has_edit_date()) {
      let val = values[21] as number;
      buf.writeInt(val);
    }

    if (this.has_post_author()) {
      let val = values[22] as string;
      buf.writeString(val);
    }

    if (this.has_grouped_id()) {
      let val = values[23] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_restriction_reason()) {
      let val = values[24] as RestrictionReasonT[];

      buf.writeInt(481674261);
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
      if (id !== MessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_out()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_post()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_from_scheduled()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    if (this.has_legacy()) {
      let val = values[7] as true;
      val = true;
      values[7] = val;
    }

    if (this.has_edit_hide()) {
      let val = values[8] as true;
      val = true;
      values[8] = val;
    }

    {
      let val = values[9] as number;
      val = buf.readInt();
      values[9] = val;
    }

    if (this.has_from_id()) {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    {
      let val = values[11] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[11] = val;
    }

    if (this.has_fwd_from()) {
      let val = values[12] as MessageFwdHeaderT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[12] = val;
    }

    if (this.has_via_bot_id()) {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    {
      let val = values[15] as number;
      val = buf.readInt();
      values[15] = val;
    }

    {
      let val = values[16] as string;
      val = buf.readString();
      values[16] = val;
    }

    if (this.has_media()) {
      let val = values[17] as MessageMediaT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[17] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[18] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[18] = val;
    }

    if (this.has_entities()) {
      let val = values[19] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[19] = val;
    }

    if (this.has_views()) {
      let val = values[20] as number;
      val = buf.readInt();
      values[20] = val;
    }

    if (this.has_edit_date()) {
      let val = values[21] as number;
      val = buf.readInt();
      values[21] = val;
    }

    if (this.has_post_author()) {
      let val = values[22] as string;
      val = buf.readString();
      values[22] = val;
    }

    if (this.has_grouped_id()) {
      let val = values[23] as ProtoLong;
      val = buf.readLong();
      values[23] = val;
    }

    if (this.has_restriction_reason()) {
      let val = values[24] as RestrictionReasonT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: RestrictionReasonT = new RestrictionReasonT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[24] = val;
    }

    return this;
  }
}
AllStructs.set(MessageS._id, MessageS);

/**
 * messageService:Message
 * #9e19a1f6:2652479990:-1642487306
 * flags:#
 * out:flags.1?true
 * mentioned:flags.4?true
 * media_unread:flags.5?true
 * silent:flags.13?true
 * post:flags.14?true
 * legacy:flags.19?true
 * id:int
 * from_id:flags.8?int
 * to_id:Peer
 * reply_to_msg_id:flags.3?int
 * date:int
 * action:MessageAction
 */
export class MessageServiceS {
  static _id = 0x9e19a1f6;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    true,
    0,
    0,
    new PeerT(),
    0,
    0,
    new MessageActionT()
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    number,
    number,
    PeerT,
    number,
    number,
    MessageActionT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_out(): true {
    return this._values[1];
  }
  set_out(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_out(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_mentioned(): true {
    return this._values[2];
  }
  set_mentioned(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_mentioned(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_media_unread(): true {
    return this._values[3];
  }
  set_media_unread(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_media_unread(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_silent(): true {
    return this._values[4];
  }
  set_silent(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_silent(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_post(): true {
    return this._values[5];
  }
  set_post(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_post(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_legacy(): true {
    return this._values[6];
  }
  set_legacy(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 19));

    return this;
  }

  has_legacy(): boolean {
    return !!(this.get_flags() & (1 << 19));
  }

  get_id(): number {
    return this._values[7];
  }
  set_id(val: number): this {
    this._values[7] = val;

    return this;
  }

  get_from_id(): number {
    return this._values[8];
  }
  set_from_id(val: number): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_from_id(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_to_id(): PeerT {
    return this._values[9];
  }
  set_to_id(val: PeerT): this {
    this._values[9] = val;

    return this;
  }

  get_reply_to_msg_id(): number {
    return this._values[10];
  }
  set_reply_to_msg_id(val: number): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_reply_to_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_date(): number {
    return this._values[11];
  }
  set_date(val: number): this {
    this._values[11] = val;

    return this;
  }

  get_action(): MessageActionT {
    return this._values[12];
  }
  set_action(val: MessageActionT): this {
    this._values[12] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageServiceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_out()) {
      let val = values[1] as true;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
    }

    if (this.has_post()) {
      let val = values[5] as true;
    }

    if (this.has_legacy()) {
      let val = values[6] as true;
    }

    {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    if (this.has_from_id()) {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as PeerT;
      val._write(buf);
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    {
      let val = values[12] as MessageActionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageServiceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_out()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_post()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_legacy()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    if (this.has_from_id()) {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    {
      let val = values[12] as MessageActionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[12] = val;
    }

    return this;
  }
}
AllStructs.set(MessageServiceS._id, MessageServiceS);

/**
 * messageMediaEmpty:MessageMedia
 * #3ded6320:1038967584:1038967584
 *
 */
export class MessageMediaEmptyS {
  static _id = 0x3ded6320;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(MessageMediaEmptyS._id, MessageMediaEmptyS);

/**
 * messageMediaPhoto:MessageMedia
 * #695150d7:1766936791:1766936791
 * flags:#
 * photo:flags.0?Photo
 * ttl_seconds:flags.2?int
 */
export class MessageMediaPhotoS {
  static _id = 0x695150d7;

  _values = [0, new PhotoT(), 0] as [number, PhotoT, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_photo(): PhotoT {
    return this._values[1];
  }
  set_photo(val: PhotoT): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_photo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_ttl_seconds(): number {
    return this._values[2];
  }
  set_ttl_seconds(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_photo()) {
      let val = values[1] as PhotoT;
      val._write(buf);
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_photo()) {
      let val = values[1] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaPhotoS._id, MessageMediaPhotoS);

/**
 * messageMediaGeo:MessageMedia
 * #56e0d474:1457575028:1457575028
 * geo:GeoPoint
 */
export class MessageMediaGeoS {
  static _id = 0x56e0d474;

  _values = [new GeoPointT()] as [GeoPointT];

  get_geo(): GeoPointT {
    return this._values[0];
  }
  set_geo(val: GeoPointT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaGeoS._id);

    let values = this._values;

    {
      let val = values[0] as GeoPointT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaGeoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as GeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaGeoS._id, MessageMediaGeoS);

/**
 * messageMediaContact:MessageMedia
 * #cbf24940:3421653312:-873313984
 * phone_number:string
 * first_name:string
 * last_name:string
 * vcard:string
 * user_id:int
 */
export class MessageMediaContactS {
  static _id = 0xcbf24940;

  _values = ["", "", "", "", 0] as [string, string, string, string, number];

  get_phone_number(): string {
    return this._values[0];
  }
  set_phone_number(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_first_name(): string {
    return this._values[1];
  }
  set_first_name(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_last_name(): string {
    return this._values[2];
  }
  set_last_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_vcard(): string {
    return this._values[3];
  }
  set_vcard(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[4];
  }
  set_user_id(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaContactS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
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
      if (id !== MessageMediaContactS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
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
AllStructs.set(MessageMediaContactS._id, MessageMediaContactS);

/**
 * messageMediaUnsupported:MessageMedia
 * #9f84f49e:2676290718:-1618676578
 *
 */
export class MessageMediaUnsupportedS {
  static _id = 0x9f84f49e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaUnsupportedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaUnsupportedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(MessageMediaUnsupportedS._id, MessageMediaUnsupportedS);

/**
 * messageActionEmpty:MessageAction
 * #b6aef7b0:3064919984:-1230047312
 *
 */
export class MessageActionEmptyS {
  static _id = 0xb6aef7b0;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(MessageActionEmptyS._id, MessageActionEmptyS);

/**
 * messageActionChatCreate:MessageAction
 * #a6638b9a:2791541658:-1503425638
 * title:string
 * users:Vector<int>
 */
export class MessageActionChatCreateS {
  static _id = 0xa6638b9a;

  _values = ["", []] as [string, number[]];

  get_title(): string {
    return this._values[0];
  }
  set_title(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_users(): number[] {
    return this._values[1];
  }
  set_users(val: number[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatCreateS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionChatCreateS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessageActionChatCreateS._id, MessageActionChatCreateS);

/**
 * messageActionChatEditTitle:MessageAction
 * #b5a1ce5a:3047280218:-1247687078
 * title:string
 */
export class MessageActionChatEditTitleS {
  static _id = 0xb5a1ce5a;

  _values = [""] as [string];

  get_title(): string {
    return this._values[0];
  }
  set_title(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatEditTitleS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionChatEditTitleS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageActionChatEditTitleS._id, MessageActionChatEditTitleS);

/**
 * messageActionChatEditPhoto:MessageAction
 * #7fcb13a8:2144015272:2144015272
 * photo:Photo
 */
export class MessageActionChatEditPhotoS {
  static _id = 0x7fcb13a8;

  _values = [new PhotoT()] as [PhotoT];

  get_photo(): PhotoT {
    return this._values[0];
  }
  set_photo(val: PhotoT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatEditPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as PhotoT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionChatEditPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageActionChatEditPhotoS._id, MessageActionChatEditPhotoS);

/**
 * messageActionChatDeletePhoto:MessageAction
 * #95e3fbef:2514746351:-1780220945
 *
 */
export class MessageActionChatDeletePhotoS {
  static _id = 0x95e3fbef;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatDeletePhotoS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionChatDeletePhotoS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  MessageActionChatDeletePhotoS._id,
  MessageActionChatDeletePhotoS
);

/**
 * messageActionChatAddUser:MessageAction
 * #488a7337:1217033015:1217033015
 * users:Vector<int>
 */
export class MessageActionChatAddUserS {
  static _id = 0x488a7337;

  _values = [[]] as [number[]];

  get_users(): number[] {
    return this._values[0];
  }
  set_users(val: number[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatAddUserS._id);

    let values = this._values;

    {
      let val = values[0] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionChatAddUserS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageActionChatAddUserS._id, MessageActionChatAddUserS);

/**
 * messageActionChatDeleteUser:MessageAction
 * #b2ae9b0c:2997787404:-1297179892
 * user_id:int
 */
export class MessageActionChatDeleteUserS {
  static _id = 0xb2ae9b0c;

  _values = [0] as [number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatDeleteUserS._id);

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
      if (id !== MessageActionChatDeleteUserS._id) panic(id.toString(16));
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
AllStructs.set(MessageActionChatDeleteUserS._id, MessageActionChatDeleteUserS);

/**
 * dialog:Dialog
 * #2c171f72:739712882:739712882
 * flags:#
 * pinned:flags.2?true
 * unread_mark:flags.3?true
 * peer:Peer
 * top_message:int
 * read_inbox_max_id:int
 * read_outbox_max_id:int
 * unread_count:int
 * unread_mentions_count:int
 * notify_settings:PeerNotifySettings
 * pts:flags.0?int
 * draft:flags.1?DraftMessage
 * folder_id:flags.4?int
 */
export class DialogS {
  static _id = 0x2c171f72;

  _values = [
    0,
    true,
    true,
    new PeerT(),
    0,
    0,
    0,
    0,
    0,
    new PeerNotifySettingsT(),
    0,
    new DraftMessageT(),
    0
  ] as [
    number,
    true,
    true,
    PeerT,
    number,
    number,
    number,
    number,
    number,
    PeerNotifySettingsT,
    number,
    DraftMessageT,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_pinned(): true {
    return this._values[1];
  }
  set_pinned(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_pinned(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_unread_mark(): true {
    return this._values[2];
  }
  set_unread_mark(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_unread_mark(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_peer(): PeerT {
    return this._values[3];
  }
  set_peer(val: PeerT): this {
    this._values[3] = val;

    return this;
  }

  get_top_message(): number {
    return this._values[4];
  }
  set_top_message(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_read_inbox_max_id(): number {
    return this._values[5];
  }
  set_read_inbox_max_id(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_read_outbox_max_id(): number {
    return this._values[6];
  }
  set_read_outbox_max_id(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_unread_count(): number {
    return this._values[7];
  }
  set_unread_count(val: number): this {
    this._values[7] = val;

    return this;
  }

  get_unread_mentions_count(): number {
    return this._values[8];
  }
  set_unread_mentions_count(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_notify_settings(): PeerNotifySettingsT {
    return this._values[9];
  }
  set_notify_settings(val: PeerNotifySettingsT): this {
    this._values[9] = val;

    return this;
  }

  get_pts(): number {
    return this._values[10];
  }
  set_pts(val: number): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_pts(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_draft(): DraftMessageT {
    return this._values[11];
  }
  set_draft(val: DraftMessageT): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_draft(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_folder_id(): number {
    return this._values[12];
  }
  set_folder_id(val: number): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DialogS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_pinned()) {
      let val = values[1] as true;
    }

    if (this.has_unread_mark()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as PeerT;
      val._write(buf);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as PeerNotifySettingsT;
      val._write(buf);
    }

    if (this.has_pts()) {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    if (this.has_draft()) {
      let val = values[11] as DraftMessageT;
      val._write(buf);
    }

    if (this.has_folder_id()) {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DialogS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_pinned()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_unread_mark()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as PeerNotifySettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    if (this.has_pts()) {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    if (this.has_draft()) {
      let val = values[11] as DraftMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[11] = val;
    }

    if (this.has_folder_id()) {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    return this;
  }
}
AllStructs.set(DialogS._id, DialogS);

/**
 * photoEmpty:Photo
 * #2331b22d:590459437:590459437
 * id:long
 */
export class PhotoEmptyS {
  static _id = 0x2331b22d;

  _values = [[0, 0]] as [ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotoEmptyS._id);

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
      if (id !== PhotoEmptyS._id) panic(id.toString(16));
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
AllStructs.set(PhotoEmptyS._id, PhotoEmptyS);

/**
 * photo:Photo
 * #d07504a5:3497329829:-797637467
 * flags:#
 * has_stickers:flags.0?true
 * id:long
 * access_hash:long
 * file_reference:bytes
 * date:int
 * sizes:Vector<PhotoSize>
 * dc_id:int
 */
export class PhotoS {
  static _id = 0xd07504a5;

  _values = [0, true, [0, 0], [0, 0], new Uint8Array(), 0, [], 0] as [
    number,
    true,
    ProtoLong,
    ProtoLong,
    Uint8Array,
    number,
    PhotoSizeT[],
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_has_stickers(): true {
    return this._values[1];
  }
  set_has_stickers(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_has_stickers(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_id(): ProtoLong {
    return this._values[2];
  }
  set_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[3];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[3] = val;

    return this;
  }

  get_file_reference(): Uint8Array {
    return this._values[4];
  }
  set_file_reference(val: Uint8Array): this {
    this._values[4] = val;

    return this;
  }

  get_date(): number {
    return this._values[5];
  }
  set_date(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_sizes(): PhotoSizeT[] {
    return this._values[6];
  }
  set_sizes(val: PhotoSizeT[]): this {
    this._values[6] = val;

    return this;
  }

  get_dc_id(): number {
    return this._values[7];
  }
  set_dc_id(val: number): this {
    this._values[7] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_has_stickers()) {
      let val = values[1] as true;
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
      let val = values[4] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as PhotoSizeT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_has_stickers()) {
      let val = values[1] as true;
      val = true;
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
      let val = values[4] as Uint8Array;
      val = buf.readBytes();
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as PhotoSizeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PhotoSizeT = new PhotoSizeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(PhotoS._id, PhotoS);

/**
 * photoSizeEmpty:PhotoSize
 * #e17e23c:236446268:236446268
 * type:string
 */
export class PhotoSizeEmptyS {
  static _id = 0xe17e23c;

  _values = [""] as [string];

  get_type(): string {
    return this._values[0];
  }
  set_type(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotoSizeEmptyS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhotoSizeEmptyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PhotoSizeEmptyS._id, PhotoSizeEmptyS);

/**
 * photoSize:PhotoSize
 * #77bfb61b:2009052699:2009052699
 * type:string
 * location:FileLocation
 * w:int
 * h:int
 * size:int
 */
export class PhotoSizeS {
  static _id = 0x77bfb61b;

  _values = ["", new FileLocationT(), 0, 0, 0] as [
    string,
    FileLocationT,
    number,
    number,
    number
  ];

  get_type(): string {
    return this._values[0];
  }
  set_type(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_location(): FileLocationT {
    return this._values[1];
  }
  set_location(val: FileLocationT): this {
    this._values[1] = val;

    return this;
  }

  get_w(): number {
    return this._values[2];
  }
  set_w(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_h(): number {
    return this._values[3];
  }
  set_h(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_size(): number {
    return this._values[4];
  }
  set_size(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotoSizeS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as FileLocationT;
      val._write(buf);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
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
      if (id !== PhotoSizeS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as FileLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(PhotoSizeS._id, PhotoSizeS);

/**
 * photoCachedSize:PhotoSize
 * #e9a734fa:3920049402:-374917894
 * type:string
 * location:FileLocation
 * w:int
 * h:int
 * bytes:bytes
 */
export class PhotoCachedSizeS {
  static _id = 0xe9a734fa;

  _values = ["", new FileLocationT(), 0, 0, new Uint8Array()] as [
    string,
    FileLocationT,
    number,
    number,
    Uint8Array
  ];

  get_type(): string {
    return this._values[0];
  }
  set_type(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_location(): FileLocationT {
    return this._values[1];
  }
  set_location(val: FileLocationT): this {
    this._values[1] = val;

    return this;
  }

  get_w(): number {
    return this._values[2];
  }
  set_w(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_h(): number {
    return this._values[3];
  }
  set_h(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_bytes(): Uint8Array {
    return this._values[4];
  }
  set_bytes(val: Uint8Array): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotoCachedSizeS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as FileLocationT;
      val._write(buf);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhotoCachedSizeS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as FileLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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

    {
      let val = values[4] as Uint8Array;
      val = buf.readBytes();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(PhotoCachedSizeS._id, PhotoCachedSizeS);

/**
 * geoPointEmpty:GeoPoint
 * #1117dd5f:286776671:286776671
 *
 */
export class GeoPointEmptyS {
  static _id = 0x1117dd5f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(GeoPointEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== GeoPointEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(GeoPointEmptyS._id, GeoPointEmptyS);

/**
 * geoPoint:GeoPoint
 * #296f104:43446532:43446532
 * long:double
 * lat:double
 * access_hash:long
 */
export class GeoPointS {
  static _id = 0x296f104;

  _values = [0.0, 0.0, [0, 0]] as [number, number, ProtoLong];

  get_long(): number {
    return this._values[0];
  }
  set_long(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_lat(): number {
    return this._values[1];
  }
  set_lat(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[2];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(GeoPointS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeDouble(val);
    }

    {
      let val = values[1] as number;
      buf.writeDouble(val);
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
      if (id !== GeoPointS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readDouble();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readDouble();
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
AllStructs.set(GeoPointS._id, GeoPointS);

/**
 * auth.sentCode:auth.SentCode
 * #5e002502:1577067778:1577067778
 * flags:#
 * type:auth.SentCodeType
 * phone_code_hash:string
 * next_type:flags.1?auth.CodeType
 * timeout:flags.2?int
 */
export class AuthSentCodeS {
  static _id = 0x5e002502;

  _values = [0, new AuthSentCodeTypeT(), "", new AuthCodeTypeT(), 0] as [
    number,
    AuthSentCodeTypeT,
    string,
    AuthCodeTypeT,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_type(): AuthSentCodeTypeT {
    return this._values[1];
  }
  set_type(val: AuthSentCodeTypeT): this {
    this._values[1] = val;

    return this;
  }

  get_phone_code_hash(): string {
    return this._values[2];
  }
  set_phone_code_hash(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_next_type(): AuthCodeTypeT {
    return this._values[3];
  }
  set_next_type(val: AuthCodeTypeT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_next_type(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_timeout(): number {
    return this._values[4];
  }
  set_timeout(val: number): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_timeout(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthSentCodeS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as AuthSentCodeTypeT;
      val._write(buf);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_next_type()) {
      let val = values[3] as AuthCodeTypeT;
      val._write(buf);
    }

    if (this.has_timeout()) {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthSentCodeS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as AuthSentCodeTypeT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_next_type()) {
      let val = values[3] as AuthCodeTypeT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    if (this.has_timeout()) {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(AuthSentCodeS._id, AuthSentCodeS);

/**
 * auth.authorization:auth.Authorization
 * #cd050916:3439659286:-855308010
 * flags:#
 * tmp_sessions:flags.0?int
 * user:User
 */
export class AuthAuthorizationS {
  static _id = 0xcd050916;

  _values = [0, 0, new UserT()] as [number, number, UserT];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_tmp_sessions(): number {
    return this._values[1];
  }
  set_tmp_sessions(val: number): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_tmp_sessions(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_user(): UserT {
    return this._values[2];
  }
  set_user(val: UserT): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthAuthorizationS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_tmp_sessions()) {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as UserT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthAuthorizationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_tmp_sessions()) {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as UserT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(AuthAuthorizationS._id, AuthAuthorizationS);

/**
 * auth.exportedAuthorization:auth.ExportedAuthorization
 * #df969c2d:3751189549:-543777747
 * id:int
 * bytes:bytes
 */
export class AuthExportedAuthorizationS {
  static _id = 0xdf969c2d;

  _values = [0, new Uint8Array()] as [number, Uint8Array];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_bytes(): Uint8Array {
    return this._values[1];
  }
  set_bytes(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthExportedAuthorizationS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== AuthExportedAuthorizationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(AuthExportedAuthorizationS._id, AuthExportedAuthorizationS);

/**
 * inputNotifyPeer:InputNotifyPeer
 * #b8bc5b0c:3099351820:-1195615476
 * peer:InputPeer
 */
export class InputNotifyPeerS {
  static _id = 0xb8bc5b0c;

  _values = [new InputPeerT()] as [InputPeerT];

  get_peer(): InputPeerT {
    return this._values[0];
  }
  set_peer(val: InputPeerT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputNotifyPeerS._id);

    let values = this._values;

    {
      let val = values[0] as InputPeerT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputNotifyPeerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputPeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputNotifyPeerS._id, InputNotifyPeerS);

/**
 * inputNotifyUsers:InputNotifyPeer
 * #193b4417:423314455:423314455
 *
 */
export class InputNotifyUsersS {
  static _id = 0x193b4417;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputNotifyUsersS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputNotifyUsersS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputNotifyUsersS._id, InputNotifyUsersS);

/**
 * inputNotifyChats:InputNotifyPeer
 * #4a95e84e:1251338318:1251338318
 *
 */
export class InputNotifyChatsS {
  static _id = 0x4a95e84e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputNotifyChatsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputNotifyChatsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputNotifyChatsS._id, InputNotifyChatsS);

/**
 * inputPeerNotifySettings:InputPeerNotifySettings
 * #9c3d198e:2621249934:-1673717362
 * flags:#
 * show_previews:flags.0?Bool
 * silent:flags.1?Bool
 * mute_until:flags.2?int
 * sound:flags.3?string
 */
export class InputPeerNotifySettingsS {
  static _id = 0x9c3d198e;

  _values = [0, new BoolT(), new BoolT(), 0, ""] as [
    number,
    BoolT,
    BoolT,
    number,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_show_previews(): BoolT {
    return this._values[1];
  }
  set_show_previews(val: BoolT): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_show_previews(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_silent(): BoolT {
    return this._values[2];
  }
  set_silent(val: BoolT): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_silent(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_mute_until(): number {
    return this._values[3];
  }
  set_mute_until(val: number): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_mute_until(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_sound(): string {
    return this._values[4];
  }
  set_sound(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_sound(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPeerNotifySettingsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_show_previews()) {
      let val = values[1] as BoolT;
      val._write(buf);
    }

    if (this.has_silent()) {
      let val = values[2] as BoolT;
      val._write(buf);
    }

    if (this.has_mute_until()) {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    if (this.has_sound()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPeerNotifySettingsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_show_previews()) {
      let val = values[1] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_silent()) {
      let val = values[2] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    if (this.has_mute_until()) {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    if (this.has_sound()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(InputPeerNotifySettingsS._id, InputPeerNotifySettingsS);

/**
 * peerNotifySettings:PeerNotifySettings
 * #af509d20:2941295904:-1353671392
 * flags:#
 * show_previews:flags.0?Bool
 * silent:flags.1?Bool
 * mute_until:flags.2?int
 * sound:flags.3?string
 */
export class PeerNotifySettingsS {
  static _id = 0xaf509d20;

  _values = [0, new BoolT(), new BoolT(), 0, ""] as [
    number,
    BoolT,
    BoolT,
    number,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_show_previews(): BoolT {
    return this._values[1];
  }
  set_show_previews(val: BoolT): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_show_previews(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_silent(): BoolT {
    return this._values[2];
  }
  set_silent(val: BoolT): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_silent(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_mute_until(): number {
    return this._values[3];
  }
  set_mute_until(val: number): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_mute_until(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_sound(): string {
    return this._values[4];
  }
  set_sound(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_sound(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PeerNotifySettingsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_show_previews()) {
      let val = values[1] as BoolT;
      val._write(buf);
    }

    if (this.has_silent()) {
      let val = values[2] as BoolT;
      val._write(buf);
    }

    if (this.has_mute_until()) {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    if (this.has_sound()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PeerNotifySettingsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_show_previews()) {
      let val = values[1] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_silent()) {
      let val = values[2] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    if (this.has_mute_until()) {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    if (this.has_sound()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(PeerNotifySettingsS._id, PeerNotifySettingsS);

/**
 * peerSettings:PeerSettings
 * #818426cd:2172921549:-2122045747
 * flags:#
 * report_spam:flags.0?true
 * add_contact:flags.1?true
 * block_contact:flags.2?true
 * share_contact:flags.3?true
 * need_contacts_exception:flags.4?true
 * report_geo:flags.5?true
 */
export class PeerSettingsS {
  static _id = 0x818426cd;

  _values = [0, true, true, true, true, true, true] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_report_spam(): true {
    return this._values[1];
  }
  set_report_spam(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_report_spam(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_add_contact(): true {
    return this._values[2];
  }
  set_add_contact(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_add_contact(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_block_contact(): true {
    return this._values[3];
  }
  set_block_contact(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_block_contact(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_share_contact(): true {
    return this._values[4];
  }
  set_share_contact(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_share_contact(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_need_contacts_exception(): true {
    return this._values[5];
  }
  set_need_contacts_exception(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_need_contacts_exception(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_report_geo(): true {
    return this._values[6];
  }
  set_report_geo(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_report_geo(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PeerSettingsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_report_spam()) {
      let val = values[1] as true;
    }

    if (this.has_add_contact()) {
      let val = values[2] as true;
    }

    if (this.has_block_contact()) {
      let val = values[3] as true;
    }

    if (this.has_share_contact()) {
      let val = values[4] as true;
    }

    if (this.has_need_contacts_exception()) {
      let val = values[5] as true;
    }

    if (this.has_report_geo()) {
      let val = values[6] as true;
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PeerSettingsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_report_spam()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_add_contact()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_block_contact()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_share_contact()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_need_contacts_exception()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_report_geo()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(PeerSettingsS._id, PeerSettingsS);

/**
 * wallPaper:WallPaper
 * #a437c3ed:2755118061:-1539849235
 * id:long
 * flags:#
 * creator:flags.0?true
 * default:flags.1?true
 * pattern:flags.3?true
 * dark:flags.4?true
 * access_hash:long
 * slug:string
 * document:Document
 * settings:flags.2?WallPaperSettings
 */
export class WallPaperS {
  static _id = 0xa437c3ed;

  _values = [
    [0, 0],
    0,
    true,
    true,
    true,
    true,
    [0, 0],
    "",
    new DocumentT(),
    new WallPaperSettingsT()
  ] as [
    ProtoLong,
    number,
    true,
    true,
    true,
    true,
    ProtoLong,
    string,
    DocumentT,
    WallPaperSettingsT
  ];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_flags(): number {
    return this._values[1];
  }
  set_flags(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_creator(): true {
    return this._values[2];
  }
  set_creator(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_creator(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_default(): true {
    return this._values[3];
  }
  set_default(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_default(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_pattern(): true {
    return this._values[4];
  }
  set_pattern(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_pattern(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_dark(): true {
    return this._values[5];
  }
  set_dark(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_dark(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_access_hash(): ProtoLong {
    return this._values[6];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[6] = val;

    return this;
  }

  get_slug(): string {
    return this._values[7];
  }
  set_slug(val: string): this {
    this._values[7] = val;

    return this;
  }

  get_document(): DocumentT {
    return this._values[8];
  }
  set_document(val: DocumentT): this {
    this._values[8] = val;

    return this;
  }

  get_settings(): WallPaperSettingsT {
    return this._values[9];
  }
  set_settings(val: WallPaperSettingsT): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_settings(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(WallPaperS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    if (this.has_creator()) {
      let val = values[2] as true;
    }

    if (this.has_default()) {
      let val = values[3] as true;
    }

    if (this.has_pattern()) {
      let val = values[4] as true;
    }

    if (this.has_dark()) {
      let val = values[5] as true;
    }

    {
      let val = values[6] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as DocumentT;
      val._write(buf);
    }

    if (this.has_settings()) {
      let val = values[9] as WallPaperSettingsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== WallPaperS._id) panic(id.toString(16));
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

    if (this.has_creator()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_default()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_pattern()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_dark()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    {
      let val = values[6] as ProtoLong;
      val = buf.readLong();
      values[6] = val;
    }

    {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    if (this.has_settings()) {
      let val = values[9] as WallPaperSettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    return this;
  }
}
AllStructs.set(WallPaperS._id, WallPaperS);

/**
 * inputReportReasonSpam:ReportReason
 * #58dbcab8:1490799288:1490799288
 *
 */
export class InputReportReasonSpamS {
  static _id = 0x58dbcab8;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputReportReasonSpamS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputReportReasonSpamS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputReportReasonSpamS._id, InputReportReasonSpamS);

/**
 * inputReportReasonViolence:ReportReason
 * #1e22c78d:505595789:505595789
 *
 */
export class InputReportReasonViolenceS {
  static _id = 0x1e22c78d;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputReportReasonViolenceS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputReportReasonViolenceS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputReportReasonViolenceS._id, InputReportReasonViolenceS);

/**
 * inputReportReasonPornography:ReportReason
 * #2e59d922:777640226:777640226
 *
 */
export class InputReportReasonPornographyS {
  static _id = 0x2e59d922;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputReportReasonPornographyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputReportReasonPornographyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputReportReasonPornographyS._id,
  InputReportReasonPornographyS
);

/**
 * inputReportReasonChildAbuse:ReportReason
 * #adf44ee3:2918469347:-1376497949
 *
 */
export class InputReportReasonChildAbuseS {
  static _id = 0xadf44ee3;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputReportReasonChildAbuseS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputReportReasonChildAbuseS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputReportReasonChildAbuseS._id, InputReportReasonChildAbuseS);

/**
 * inputReportReasonOther:ReportReason
 * #e1746d0a:3782503690:-512463606
 * text:string
 */
export class InputReportReasonOtherS {
  static _id = 0xe1746d0a;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputReportReasonOtherS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputReportReasonOtherS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputReportReasonOtherS._id, InputReportReasonOtherS);

/**
 * userFull:UserFull
 * #edf17c12:3992026130:-302941166
 * flags:#
 * blocked:flags.0?true
 * phone_calls_available:flags.4?true
 * phone_calls_private:flags.5?true
 * can_pin_message:flags.7?true
 * has_scheduled:flags.12?true
 * user:User
 * about:flags.1?string
 * settings:PeerSettings
 * profile_photo:flags.2?Photo
 * notify_settings:PeerNotifySettings
 * bot_info:flags.3?BotInfo
 * pinned_msg_id:flags.6?int
 * common_chats_count:int
 * folder_id:flags.11?int
 */
export class UserFullS {
  static _id = 0xedf17c12;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    new UserT(),
    "",
    new PeerSettingsT(),
    new PhotoT(),
    new PeerNotifySettingsT(),
    new BotInfoT(),
    0,
    0,
    0
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    UserT,
    string,
    PeerSettingsT,
    PhotoT,
    PeerNotifySettingsT,
    BotInfoT,
    number,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_blocked(): true {
    return this._values[1];
  }
  set_blocked(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_blocked(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_phone_calls_available(): true {
    return this._values[2];
  }
  set_phone_calls_available(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_phone_calls_available(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_phone_calls_private(): true {
    return this._values[3];
  }
  set_phone_calls_private(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_phone_calls_private(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_can_pin_message(): true {
    return this._values[4];
  }
  set_can_pin_message(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_can_pin_message(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_has_scheduled(): true {
    return this._values[5];
  }
  set_has_scheduled(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 12));

    return this;
  }

  has_has_scheduled(): boolean {
    return !!(this.get_flags() & (1 << 12));
  }

  get_user(): UserT {
    return this._values[6];
  }
  set_user(val: UserT): this {
    this._values[6] = val;

    return this;
  }

  get_about(): string {
    return this._values[7];
  }
  set_about(val: string): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_about(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_settings(): PeerSettingsT {
    return this._values[8];
  }
  set_settings(val: PeerSettingsT): this {
    this._values[8] = val;

    return this;
  }

  get_profile_photo(): PhotoT {
    return this._values[9];
  }
  set_profile_photo(val: PhotoT): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_profile_photo(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_notify_settings(): PeerNotifySettingsT {
    return this._values[10];
  }
  set_notify_settings(val: PeerNotifySettingsT): this {
    this._values[10] = val;

    return this;
  }

  get_bot_info(): BotInfoT {
    return this._values[11];
  }
  set_bot_info(val: BotInfoT): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_bot_info(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_pinned_msg_id(): number {
    return this._values[12];
  }
  set_pinned_msg_id(val: number): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_pinned_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_common_chats_count(): number {
    return this._values[13];
  }
  set_common_chats_count(val: number): this {
    this._values[13] = val;

    return this;
  }

  get_folder_id(): number {
    return this._values[14];
  }
  set_folder_id(val: number): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserFullS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_blocked()) {
      let val = values[1] as true;
    }

    if (this.has_phone_calls_available()) {
      let val = values[2] as true;
    }

    if (this.has_phone_calls_private()) {
      let val = values[3] as true;
    }

    if (this.has_can_pin_message()) {
      let val = values[4] as true;
    }

    if (this.has_has_scheduled()) {
      let val = values[5] as true;
    }

    {
      let val = values[6] as UserT;
      val._write(buf);
    }

    if (this.has_about()) {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as PeerSettingsT;
      val._write(buf);
    }

    if (this.has_profile_photo()) {
      let val = values[9] as PhotoT;
      val._write(buf);
    }

    {
      let val = values[10] as PeerNotifySettingsT;
      val._write(buf);
    }

    if (this.has_bot_info()) {
      let val = values[11] as BotInfoT;
      val._write(buf);
    }

    if (this.has_pinned_msg_id()) {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_folder_id()) {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserFullS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_blocked()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_phone_calls_available()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_phone_calls_private()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_can_pin_message()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_has_scheduled()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    {
      let val = values[6] as UserT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    if (this.has_about()) {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as PeerSettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    if (this.has_profile_photo()) {
      let val = values[9] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    {
      let val = values[10] as PeerNotifySettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[10] = val;
    }

    if (this.has_bot_info()) {
      let val = values[11] as BotInfoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[11] = val;
    }

    if (this.has_pinned_msg_id()) {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_folder_id()) {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    return this;
  }
}
AllStructs.set(UserFullS._id, UserFullS);

/**
 * contact:Contact
 * #f911c994:4178692500:-116274796
 * user_id:int
 * mutual:Bool
 */
export class ContactS {
  static _id = 0xf911c994;

  _values = [0, new BoolT()] as [number, BoolT];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_mutual(): BoolT {
    return this._values[1];
  }
  set_mutual(val: BoolT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as BoolT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ContactS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(ContactS._id, ContactS);

/**
 * importedContact:ImportedContact
 * #d0028438:3489825848:-805141448
 * user_id:int
 * client_id:long
 */
export class ImportedContactS {
  static _id = 0xd0028438;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_client_id(): ProtoLong {
    return this._values[1];
  }
  set_client_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ImportedContactS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== ImportedContactS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(ImportedContactS._id, ImportedContactS);

/**
 * contactBlocked:ContactBlocked
 * #561bc879:1444661369:1444661369
 * user_id:int
 * date:int
 */
export class ContactBlockedS {
  static _id = 0x561bc879;

  _values = [0, 0] as [number, number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactBlockedS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== ContactBlockedS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(ContactBlockedS._id, ContactBlockedS);

/**
 * contactStatus:ContactStatus
 * #d3680c61:3546811489:-748155807
 * user_id:int
 * status:UserStatus
 */
export class ContactStatusS {
  static _id = 0xd3680c61;

  _values = [0, new UserStatusT()] as [number, UserStatusT];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_status(): UserStatusT {
    return this._values[1];
  }
  set_status(val: UserStatusT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactStatusS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as UserStatusT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ContactStatusS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as UserStatusT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(ContactStatusS._id, ContactStatusS);

/**
 * contacts.contactsNotModified:contacts.Contacts
 * #b74ba9d2:3075189202:-1219778094
 *
 */
export class ContactsContactsNotModifiedS {
  static _id = 0xb74ba9d2;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsContactsNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ContactsContactsNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ContactsContactsNotModifiedS._id, ContactsContactsNotModifiedS);

/**
 * contacts.contacts:contacts.Contacts
 * #eae87e42:3941105218:-353862078
 * contacts:Vector<Contact>
 * saved_count:int
 * users:Vector<User>
 */
export class ContactsContactsS {
  static _id = 0xeae87e42;

  _values = [[], 0, []] as [ContactT[], number, UserT[]];

  get_contacts(): ContactT[] {
    return this._values[0];
  }
  set_contacts(val: ContactT[]): this {
    this._values[0] = val;

    return this;
  }

  get_saved_count(): number {
    return this._values[1];
  }
  set_saved_count(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsContactsS._id);

    let values = this._values;

    {
      let val = values[0] as ContactT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsContactsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ContactT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ContactT = new ContactT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsContactsS._id, ContactsContactsS);

/**
 * contacts.importedContacts:contacts.ImportedContacts
 * #77d01c3b:2010127419:2010127419
 * imported:Vector<ImportedContact>
 * popular_invites:Vector<PopularContact>
 * retry_contacts:Vector<long>
 * users:Vector<User>
 */
export class ContactsImportedContactsS {
  static _id = 0x77d01c3b;

  _values = [[], [], [], []] as [
    ImportedContactT[],
    PopularContactT[],
    ProtoLong[],
    UserT[]
  ];

  get_imported(): ImportedContactT[] {
    return this._values[0];
  }
  set_imported(val: ImportedContactT[]): this {
    this._values[0] = val;

    return this;
  }

  get_popular_invites(): PopularContactT[] {
    return this._values[1];
  }
  set_popular_invites(val: PopularContactT[]): this {
    this._values[1] = val;

    return this;
  }

  get_retry_contacts(): ProtoLong[] {
    return this._values[2];
  }
  set_retry_contacts(val: ProtoLong[]): this {
    this._values[2] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[3];
  }
  set_users(val: UserT[]): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsImportedContactsS._id);

    let values = this._values;

    {
      let val = values[0] as ImportedContactT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as PopularContactT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ProtoLong[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeLong(val);
      }
    }

    {
      let val = values[3] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsImportedContactsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ImportedContactT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ImportedContactT = new ImportedContactT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as PopularContactT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PopularContactT = new PopularContactT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsImportedContactsS._id, ContactsImportedContactsS);

/**
 * contacts.blocked:contacts.Blocked
 * #1c138d15:471043349:471043349
 * blocked:Vector<ContactBlocked>
 * users:Vector<User>
 */
export class ContactsBlockedS {
  static _id = 0x1c138d15;

  _values = [[], []] as [ContactBlockedT[], UserT[]];

  get_blocked(): ContactBlockedT[] {
    return this._values[0];
  }
  set_blocked(val: ContactBlockedT[]): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsBlockedS._id);

    let values = this._values;

    {
      let val = values[0] as ContactBlockedT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsBlockedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ContactBlockedT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ContactBlockedT = new ContactBlockedT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsBlockedS._id, ContactsBlockedS);

/**
 * contacts.blockedSlice:contacts.Blocked
 * #900802a1:2416444065:-1878523231
 * count:int
 * blocked:Vector<ContactBlocked>
 * users:Vector<User>
 */
export class ContactsBlockedSliceS {
  static _id = 0x900802a1;

  _values = [0, [], []] as [number, ContactBlockedT[], UserT[]];

  get_count(): number {
    return this._values[0];
  }
  set_count(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_blocked(): ContactBlockedT[] {
    return this._values[1];
  }
  set_blocked(val: ContactBlockedT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsBlockedSliceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as ContactBlockedT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsBlockedSliceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as ContactBlockedT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ContactBlockedT = new ContactBlockedT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsBlockedSliceS._id, ContactsBlockedSliceS);

/**
 * messages.dialogs:messages.Dialogs
 * #15ba6c40:364538944:364538944
 * dialogs:Vector<Dialog>
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class MessagesDialogsS {
  static _id = 0x15ba6c40;

  _values = [[], [], [], []] as [
    DialogT[],
    MessageT[],
    ChatT[],
    UserT[]
  ];

  get_dialogs(): DialogT[] {
    return this._values[0];
  }
  set_dialogs(val: DialogT[]): this {
    this._values[0] = val;

    return this;
  }

  get_messages(): MessageT[] {
    return this._values[1];
  }
  set_messages(val: MessageT[]): this {
    this._values[1] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[2];
  }
  set_chats(val: ChatT[]): this {
    this._values[2] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[3];
  }
  set_users(val: UserT[]): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesDialogsS._id);

    let values = this._values;

    {
      let val = values[0] as DialogT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesDialogsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as DialogT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DialogT = new DialogT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesDialogsS._id, MessagesDialogsS);

/**
 * messages.dialogsSlice:messages.Dialogs
 * #71e094f3:1910543603:1910543603
 * count:int
 * dialogs:Vector<Dialog>
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class MessagesDialogsSliceS {
  static _id = 0x71e094f3;

  _values = [0, [], [], [], []] as [
    number,
    DialogT[],
    MessageT[],
    ChatT[],
    UserT[]
  ];

  get_count(): number {
    return this._values[0];
  }
  set_count(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_dialogs(): DialogT[] {
    return this._values[1];
  }
  set_dialogs(val: DialogT[]): this {
    this._values[1] = val;

    return this;
  }

  get_messages(): MessageT[] {
    return this._values[2];
  }
  set_messages(val: MessageT[]): this {
    this._values[2] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[3];
  }
  set_chats(val: ChatT[]): this {
    this._values[3] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[4];
  }
  set_users(val: UserT[]): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesDialogsSliceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as DialogT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[4] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesDialogsSliceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as DialogT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DialogT = new DialogT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    {
      let val = values[4] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesDialogsSliceS._id, MessagesDialogsSliceS);

/**
 * messages.messages:messages.Messages
 * #8c718e87:2356252295:-1938715001
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class MessagesMessagesS {
  static _id = 0x8c718e87;

  _values = [[], [], []] as [MessageT[], ChatT[], UserT[]];

  get_messages(): MessageT[] {
    return this._values[0];
  }
  set_messages(val: MessageT[]): this {
    this._values[0] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[1];
  }
  set_chats(val: ChatT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesMessagesS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesMessagesS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesMessagesS._id, MessagesMessagesS);

/**
 * messages.messagesSlice:messages.Messages
 * #c8edce1e:3371027998:-923939298
 * flags:#
 * inexact:flags.1?true
 * count:int
 * next_rate:flags.0?int
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class MessagesMessagesSliceS {
  static _id = 0xc8edce1e;

  _values = [0, true, 0, 0, [], [], []] as [
    number,
    true,
    number,
    number,
    MessageT[],
    ChatT[],
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_inexact(): true {
    return this._values[1];
  }
  set_inexact(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_inexact(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_count(): number {
    return this._values[2];
  }
  set_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_next_rate(): number {
    return this._values[3];
  }
  set_next_rate(val: number): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_next_rate(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_messages(): MessageT[] {
    return this._values[4];
  }
  set_messages(val: MessageT[]): this {
    this._values[4] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[5];
  }
  set_chats(val: ChatT[]): this {
    this._values[5] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[6];
  }
  set_users(val: UserT[]): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesMessagesSliceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_inexact()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    if (this.has_next_rate()) {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[5] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[6] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesMessagesSliceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_inexact()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    if (this.has_next_rate()) {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    {
      let val = values[5] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    {
      let val = values[6] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesMessagesSliceS._id, MessagesMessagesSliceS);

/**
 * messages.chats:messages.Chats
 * #64ff9fd5:1694474197:1694474197
 * chats:Vector<Chat>
 */
export class MessagesChatsS {
  static _id = 0x64ff9fd5;

  _values = [[]] as [ChatT[]];

  get_chats(): ChatT[] {
    return this._values[0];
  }
  set_chats(val: ChatT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesChatsS._id);

    let values = this._values;

    {
      let val = values[0] as ChatT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesChatsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesChatsS._id, MessagesChatsS);

/**
 * messages.chatFull:messages.ChatFull
 * #e5d7d19c:3856126364:-438840932
 * full_chat:ChatFull
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class MessagesChatFullS {
  static _id = 0xe5d7d19c;

  _values = [new ChatFullT(), [], []] as [
    ChatFullT,
    ChatT[],
    UserT[]
  ];

  get_full_chat(): ChatFullT {
    return this._values[0];
  }
  set_full_chat(val: ChatFullT): this {
    this._values[0] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[1];
  }
  set_chats(val: ChatT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesChatFullS._id);

    let values = this._values;

    {
      let val = values[0] as ChatFullT;
      val._write(buf);
    }

    {
      let val = values[1] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesChatFullS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ChatFullT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesChatFullS._id, MessagesChatFullS);

/**
 * messages.affectedHistory:messages.AffectedHistory
 * #b45c69d1:3025955281:-1269012015
 * pts:int
 * pts_count:int
 * offset:int
 */
export class MessagesAffectedHistoryS {
  static _id = 0xb45c69d1;

  _values = [0, 0, 0] as [number, number, number];

  get_pts(): number {
    return this._values[0];
  }
  set_pts(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[1];
  }
  set_pts_count(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_offset(): number {
    return this._values[2];
  }
  set_offset(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesAffectedHistoryS._id);

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
      if (id !== MessagesAffectedHistoryS._id) panic(id.toString(16));
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
AllStructs.set(MessagesAffectedHistoryS._id, MessagesAffectedHistoryS);

/**
 * inputMessagesFilterEmpty:MessagesFilter
 * #57e2f66c:1474492012:1474492012
 *
 */
export class InputMessagesFilterEmptyS {
  static _id = 0x57e2f66c;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterEmptyS._id, InputMessagesFilterEmptyS);

/**
 * inputMessagesFilterPhotos:MessagesFilter
 * #9609a51c:2517214492:-1777752804
 *
 */
export class InputMessagesFilterPhotosS {
  static _id = 0x9609a51c;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterPhotosS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterPhotosS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterPhotosS._id, InputMessagesFilterPhotosS);

/**
 * inputMessagesFilterVideo:MessagesFilter
 * #9fc00e65:2680163941:-1614803355
 *
 */
export class InputMessagesFilterVideoS {
  static _id = 0x9fc00e65;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterVideoS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterVideoS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterVideoS._id, InputMessagesFilterVideoS);

/**
 * inputMessagesFilterPhotoVideo:MessagesFilter
 * #56e9f0e4:1458172132:1458172132
 *
 */
export class InputMessagesFilterPhotoVideoS {
  static _id = 0x56e9f0e4;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterPhotoVideoS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterPhotoVideoS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputMessagesFilterPhotoVideoS._id,
  InputMessagesFilterPhotoVideoS
);

/**
 * inputMessagesFilterDocument:MessagesFilter
 * #9eddf188:2665345416:-1629621880
 *
 */
export class InputMessagesFilterDocumentS {
  static _id = 0x9eddf188;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterDocumentS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterDocumentS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterDocumentS._id, InputMessagesFilterDocumentS);

/**
 * inputMessagesFilterUrl:MessagesFilter
 * #7ef0dd87:2129714567:2129714567
 *
 */
export class InputMessagesFilterUrlS {
  static _id = 0x7ef0dd87;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterUrlS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterUrlS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterUrlS._id, InputMessagesFilterUrlS);

/**
 * inputMessagesFilterGif:MessagesFilter
 * #ffc86587:4291323271:-3644025
 *
 */
export class InputMessagesFilterGifS {
  static _id = 0xffc86587;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterGifS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterGifS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterGifS._id, InputMessagesFilterGifS);

/**
 * updateNewMessage:Update
 * #1f2b0afd:522914557:522914557
 * message:Message
 * pts:int
 * pts_count:int
 */
export class UpdateNewMessageS {
  static _id = 0x1f2b0afd;

  _values = [new MessageT(), 0, 0] as [MessageT, number, number];

  get_message(): MessageT {
    return this._values[0];
  }
  set_message(val: MessageT): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateNewMessageS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT;
      val._write(buf);
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
      if (id !== UpdateNewMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateNewMessageS._id, UpdateNewMessageS);

/**
 * updateMessageID:Update
 * #4e90bfd6:1318109142:1318109142
 * id:int
 * random_id:long
 */
export class UpdateMessageIdS {
  static _id = 0x4e90bfd6;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_random_id(): ProtoLong {
    return this._values[1];
  }
  set_random_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateMessageIdS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== UpdateMessageIdS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(UpdateMessageIdS._id, UpdateMessageIdS);

/**
 * updateDeleteMessages:Update
 * #a20db0e5:2718806245:-1576161051
 * messages:Vector<int>
 * pts:int
 * pts_count:int
 */
export class UpdateDeleteMessagesS {
  static _id = 0xa20db0e5;

  _values = [[], 0, 0] as [number[], number, number];

  get_messages(): number[] {
    return this._values[0];
  }
  set_messages(val: number[]): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateDeleteMessagesS._id);

    let values = this._values;

    {
      let val = values[0] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
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
      if (id !== UpdateDeleteMessagesS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
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
AllStructs.set(UpdateDeleteMessagesS._id, UpdateDeleteMessagesS);

/**
 * updateUserTyping:Update
 * #5c486927:1548249383:1548249383
 * user_id:int
 * action:SendMessageAction
 */
export class UpdateUserTypingS {
  static _id = 0x5c486927;

  _values = [0, new SendMessageActionT()] as [number, SendMessageActionT];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_action(): SendMessageActionT {
    return this._values[1];
  }
  set_action(val: SendMessageActionT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateUserTypingS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as SendMessageActionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateUserTypingS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as SendMessageActionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateUserTypingS._id, UpdateUserTypingS);

/**
 * updateChatUserTyping:Update
 * #9a65ea1f:2590370335:-1704596961
 * chat_id:int
 * user_id:int
 * action:SendMessageAction
 */
export class UpdateChatUserTypingS {
  static _id = 0x9a65ea1f;

  _values = [0, 0, new SendMessageActionT()] as [
    number,
    number,
    SendMessageActionT
  ];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_action(): SendMessageActionT {
    return this._values[2];
  }
  set_action(val: SendMessageActionT): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChatUserTypingS._id);

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
      let val = values[2] as SendMessageActionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateChatUserTypingS._id) panic(id.toString(16));
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
      let val = values[2] as SendMessageActionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateChatUserTypingS._id, UpdateChatUserTypingS);

/**
 * updateChatParticipants:Update
 * #7761198:125178264:125178264
 * participants:ChatParticipants
 */
export class UpdateChatParticipantsS {
  static _id = 0x7761198;

  _values = [new ChatParticipantsT()] as [ChatParticipantsT];

  get_participants(): ChatParticipantsT {
    return this._values[0];
  }
  set_participants(val: ChatParticipantsT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChatParticipantsS._id);

    let values = this._values;

    {
      let val = values[0] as ChatParticipantsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateChatParticipantsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ChatParticipantsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateChatParticipantsS._id, UpdateChatParticipantsS);

/**
 * updateUserStatus:Update
 * #1bfbd823:469489699:469489699
 * user_id:int
 * status:UserStatus
 */
export class UpdateUserStatusS {
  static _id = 0x1bfbd823;

  _values = [0, new UserStatusT()] as [number, UserStatusT];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_status(): UserStatusT {
    return this._values[1];
  }
  set_status(val: UserStatusT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateUserStatusS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as UserStatusT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateUserStatusS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as UserStatusT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateUserStatusS._id, UpdateUserStatusS);

/**
 * updateUserName:Update
 * #a7332b73:2805148531:-1489818765
 * user_id:int
 * first_name:string
 * last_name:string
 * username:string
 */
export class UpdateUserNameS {
  static _id = 0xa7332b73;

  _values = [0, "", "", ""] as [number, string, string, string];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_first_name(): string {
    return this._values[1];
  }
  set_first_name(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_last_name(): string {
    return this._values[2];
  }
  set_last_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_username(): string {
    return this._values[3];
  }
  set_username(val: string): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateUserNameS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateUserNameS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateUserNameS._id, UpdateUserNameS);

/**
 * updateUserPhoto:Update
 * #95313b0c:2503031564:-1791935732
 * user_id:int
 * date:int
 * photo:UserProfilePhoto
 * previous:Bool
 */
export class UpdateUserPhotoS {
  static _id = 0x95313b0c;

  _values = [0, 0, new UserProfilePhotoT(), new BoolT()] as [
    number,
    number,
    UserProfilePhotoT,
    BoolT
  ];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_photo(): UserProfilePhotoT {
    return this._values[2];
  }
  set_photo(val: UserProfilePhotoT): this {
    this._values[2] = val;

    return this;
  }

  get_previous(): BoolT {
    return this._values[3];
  }
  set_previous(val: BoolT): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateUserPhotoS._id);

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
      let val = values[2] as UserProfilePhotoT;
      val._write(buf);
    }

    {
      let val = values[3] as BoolT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateUserPhotoS._id) panic(id.toString(16));
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
      let val = values[2] as UserProfilePhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    {
      let val = values[3] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateUserPhotoS._id, UpdateUserPhotoS);

/**
 * updates.state:updates.State
 * #a56c2a3e:2775329342:-1519637954
 * pts:int
 * qts:int
 * date:int
 * seq:int
 * unread_count:int
 */
export class UpdatesStateS {
  static _id = 0xa56c2a3e;

  _values = [0, 0, 0, 0, 0] as [number, number, number, number, number];

  get_pts(): number {
    return this._values[0];
  }
  set_pts(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_qts(): number {
    return this._values[1];
  }
  set_qts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_seq(): number {
    return this._values[3];
  }
  set_seq(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_unread_count(): number {
    return this._values[4];
  }
  set_unread_count(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesStateS._id);

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

    {
      let val = values[3] as number;
      buf.writeInt(val);
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
      if (id !== UpdatesStateS._id) panic(id.toString(16));
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

    {
      let val = values[3] as number;
      val = buf.readInt();
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
AllStructs.set(UpdatesStateS._id, UpdatesStateS);

/**
 * updates.differenceEmpty:updates.Difference
 * #5d75a138:1567990072:1567990072
 * date:int
 * seq:int
 */
export class UpdatesDifferenceEmptyS {
  static _id = 0x5d75a138;

  _values = [0, 0] as [number, number];

  get_date(): number {
    return this._values[0];
  }
  set_date(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_seq(): number {
    return this._values[1];
  }
  set_seq(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesDifferenceEmptyS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== UpdatesDifferenceEmptyS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(UpdatesDifferenceEmptyS._id, UpdatesDifferenceEmptyS);

/**
 * updates.difference:updates.Difference
 * #f49ca0:16030880:16030880
 * new_messages:Vector<Message>
 * new_encrypted_messages:Vector<EncryptedMessage>
 * other_updates:Vector<Update>
 * chats:Vector<Chat>
 * users:Vector<User>
 * state:updates.State
 */
export class UpdatesDifferenceS {
  static _id = 0xf49ca0;

  _values = [[], [], [], [], [], new UpdatesStateT()] as [
    MessageT[],
    EncryptedMessageT[],
    UpdateT[],
    ChatT[],
    UserT[],
    UpdatesStateT
  ];

  get_new_messages(): MessageT[] {
    return this._values[0];
  }
  set_new_messages(val: MessageT[]): this {
    this._values[0] = val;

    return this;
  }

  get_new_encrypted_messages(): EncryptedMessageT[] {
    return this._values[1];
  }
  set_new_encrypted_messages(val: EncryptedMessageT[]): this {
    this._values[1] = val;

    return this;
  }

  get_other_updates(): UpdateT[] {
    return this._values[2];
  }
  set_other_updates(val: UpdateT[]): this {
    this._values[2] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[3];
  }
  set_chats(val: ChatT[]): this {
    this._values[3] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[4];
  }
  set_users(val: UserT[]): this {
    this._values[4] = val;

    return this;
  }

  get_state(): UpdatesStateT {
    return this._values[5];
  }
  set_state(val: UpdatesStateT): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesDifferenceS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as EncryptedMessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UpdateT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[4] as UserT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[5] as UpdatesStateT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdatesDifferenceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as EncryptedMessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: EncryptedMessageT = new EncryptedMessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UpdateT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UpdateT = new UpdateT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    {
      let val = values[4] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    {
      let val = values[5] as UpdatesStateT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(UpdatesDifferenceS._id, UpdatesDifferenceS);

/**
 * updates.differenceSlice:updates.Difference
 * #a8fb1981:2835028353:-1459938943
 * new_messages:Vector<Message>
 * new_encrypted_messages:Vector<EncryptedMessage>
 * other_updates:Vector<Update>
 * chats:Vector<Chat>
 * users:Vector<User>
 * intermediate_state:updates.State
 */
export class UpdatesDifferenceSliceS {
  static _id = 0xa8fb1981;

  _values = [[], [], [], [], [], new UpdatesStateT()] as [
    MessageT[],
    EncryptedMessageT[],
    UpdateT[],
    ChatT[],
    UserT[],
    UpdatesStateT
  ];

  get_new_messages(): MessageT[] {
    return this._values[0];
  }
  set_new_messages(val: MessageT[]): this {
    this._values[0] = val;

    return this;
  }

  get_new_encrypted_messages(): EncryptedMessageT[] {
    return this._values[1];
  }
  set_new_encrypted_messages(val: EncryptedMessageT[]): this {
    this._values[1] = val;

    return this;
  }

  get_other_updates(): UpdateT[] {
    return this._values[2];
  }
  set_other_updates(val: UpdateT[]): this {
    this._values[2] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[3];
  }
  set_chats(val: ChatT[]): this {
    this._values[3] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[4];
  }
  set_users(val: UserT[]): this {
    this._values[4] = val;

    return this;
  }

  get_intermediate_state(): UpdatesStateT {
    return this._values[5];
  }
  set_intermediate_state(val: UpdatesStateT): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesDifferenceSliceS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as EncryptedMessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UpdateT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[4] as UserT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[5] as UpdatesStateT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdatesDifferenceSliceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as EncryptedMessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: EncryptedMessageT = new EncryptedMessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UpdateT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UpdateT = new UpdateT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    {
      let val = values[4] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    {
      let val = values[5] as UpdatesStateT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(UpdatesDifferenceSliceS._id, UpdatesDifferenceSliceS);

/**
 * updatesTooLong:Updates
 * #e317af7e:3809980286:-484987010
 *
 */
export class UpdatesTooLongS {
  static _id = 0xe317af7e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesTooLongS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdatesTooLongS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdatesTooLongS._id, UpdatesTooLongS);

/**
 * updateShortMessage:Updates
 * #914fbf11:2437922577:-1857044719
 * flags:#
 * out:flags.1?true
 * mentioned:flags.4?true
 * media_unread:flags.5?true
 * silent:flags.13?true
 * id:int
 * user_id:int
 * message:string
 * pts:int
 * pts_count:int
 * date:int
 * fwd_from:flags.2?MessageFwdHeader
 * via_bot_id:flags.11?int
 * reply_to_msg_id:flags.3?int
 * entities:flags.7?Vector<MessageEntity>
 */
export class UpdateShortMessageS {
  static _id = 0x914fbf11;

  _values = [
    0,
    true,
    true,
    true,
    true,
    0,
    0,
    "",
    0,
    0,
    0,
    new MessageFwdHeaderT(),
    0,
    0,
    []
  ] as [
    number,
    true,
    true,
    true,
    true,
    number,
    number,
    string,
    number,
    number,
    number,
    MessageFwdHeaderT,
    number,
    number,
    MessageEntityT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_out(): true {
    return this._values[1];
  }
  set_out(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_out(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_mentioned(): true {
    return this._values[2];
  }
  set_mentioned(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_mentioned(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_media_unread(): true {
    return this._values[3];
  }
  set_media_unread(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_media_unread(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_silent(): true {
    return this._values[4];
  }
  set_silent(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_silent(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_id(): number {
    return this._values[5];
  }
  set_id(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[6];
  }
  set_user_id(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_message(): string {
    return this._values[7];
  }
  set_message(val: string): this {
    this._values[7] = val;

    return this;
  }

  get_pts(): number {
    return this._values[8];
  }
  set_pts(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[9];
  }
  set_pts_count(val: number): this {
    this._values[9] = val;

    return this;
  }

  get_date(): number {
    return this._values[10];
  }
  set_date(val: number): this {
    this._values[10] = val;

    return this;
  }

  get_fwd_from(): MessageFwdHeaderT {
    return this._values[11];
  }
  set_fwd_from(val: MessageFwdHeaderT): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_fwd_from(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_via_bot_id(): number {
    return this._values[12];
  }
  set_via_bot_id(val: number): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_via_bot_id(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_reply_to_msg_id(): number {
    return this._values[13];
  }
  set_reply_to_msg_id(val: number): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_reply_to_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_entities(): MessageEntityT[] {
    return this._values[14];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateShortMessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_out()) {
      let val = values[1] as true;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as number;
      buf.writeInt(val);
    }

    {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    if (this.has_fwd_from()) {
      let val = values[11] as MessageFwdHeaderT;
      val._write(buf);
    }

    if (this.has_via_bot_id()) {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_entities()) {
      let val = values[14] as MessageEntityT[];

      buf.writeInt(481674261);
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
      if (id !== UpdateShortMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_out()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as number;
      val = buf.readInt();
      values[9] = val;
    }

    {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    if (this.has_fwd_from()) {
      let val = values[11] as MessageFwdHeaderT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[11] = val;
    }

    if (this.has_via_bot_id()) {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_entities()) {
      let val = values[14] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[14] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateShortMessageS._id, UpdateShortMessageS);

/**
 * updateShortChatMessage:Updates
 * #16812688:377562760:377562760
 * flags:#
 * out:flags.1?true
 * mentioned:flags.4?true
 * media_unread:flags.5?true
 * silent:flags.13?true
 * id:int
 * from_id:int
 * chat_id:int
 * message:string
 * pts:int
 * pts_count:int
 * date:int
 * fwd_from:flags.2?MessageFwdHeader
 * via_bot_id:flags.11?int
 * reply_to_msg_id:flags.3?int
 * entities:flags.7?Vector<MessageEntity>
 */
export class UpdateShortChatMessageS {
  static _id = 0x16812688;

  _values = [
    0,
    true,
    true,
    true,
    true,
    0,
    0,
    0,
    "",
    0,
    0,
    0,
    new MessageFwdHeaderT(),
    0,
    0,
    []
  ] as [
    number,
    true,
    true,
    true,
    true,
    number,
    number,
    number,
    string,
    number,
    number,
    number,
    MessageFwdHeaderT,
    number,
    number,
    MessageEntityT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_out(): true {
    return this._values[1];
  }
  set_out(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_out(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_mentioned(): true {
    return this._values[2];
  }
  set_mentioned(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_mentioned(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_media_unread(): true {
    return this._values[3];
  }
  set_media_unread(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_media_unread(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_silent(): true {
    return this._values[4];
  }
  set_silent(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_silent(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_id(): number {
    return this._values[5];
  }
  set_id(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_from_id(): number {
    return this._values[6];
  }
  set_from_id(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_chat_id(): number {
    return this._values[7];
  }
  set_chat_id(val: number): this {
    this._values[7] = val;

    return this;
  }

  get_message(): string {
    return this._values[8];
  }
  set_message(val: string): this {
    this._values[8] = val;

    return this;
  }

  get_pts(): number {
    return this._values[9];
  }
  set_pts(val: number): this {
    this._values[9] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[10];
  }
  set_pts_count(val: number): this {
    this._values[10] = val;

    return this;
  }

  get_date(): number {
    return this._values[11];
  }
  set_date(val: number): this {
    this._values[11] = val;

    return this;
  }

  get_fwd_from(): MessageFwdHeaderT {
    return this._values[12];
  }
  set_fwd_from(val: MessageFwdHeaderT): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_fwd_from(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_via_bot_id(): number {
    return this._values[13];
  }
  set_via_bot_id(val: number): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_via_bot_id(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_reply_to_msg_id(): number {
    return this._values[14];
  }
  set_reply_to_msg_id(val: number): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_reply_to_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_entities(): MessageEntityT[] {
    return this._values[15];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[15] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateShortChatMessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_out()) {
      let val = values[1] as true;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    {
      let val = values[8] as string;
      buf.writeString(val);
    }

    {
      let val = values[9] as number;
      buf.writeInt(val);
    }

    {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    if (this.has_fwd_from()) {
      let val = values[12] as MessageFwdHeaderT;
      val._write(buf);
    }

    if (this.has_via_bot_id()) {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    if (this.has_entities()) {
      let val = values[15] as MessageEntityT[];

      buf.writeInt(481674261);
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
      if (id !== UpdateShortChatMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_out()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_mentioned()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_media_unread()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_silent()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    {
      let val = values[8] as string;
      val = buf.readString();
      values[8] = val;
    }

    {
      let val = values[9] as number;
      val = buf.readInt();
      values[9] = val;
    }

    {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    if (this.has_fwd_from()) {
      let val = values[12] as MessageFwdHeaderT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[12] = val;
    }

    if (this.has_via_bot_id()) {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    if (this.has_entities()) {
      let val = values[15] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[15] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateShortChatMessageS._id, UpdateShortChatMessageS);

/**
 * updateShort:Updates
 * #78d4dec1:2027216577:2027216577
 * update:Update
 * date:int
 */
export class UpdateShortS {
  static _id = 0x78d4dec1;

  _values = [new UpdateT(), 0] as [UpdateT, number];

  get_update(): UpdateT {
    return this._values[0];
  }
  set_update(val: UpdateT): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateShortS._id);

    let values = this._values;

    {
      let val = values[0] as UpdateT;
      val._write(buf);
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
      if (id !== UpdateShortS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as UpdateT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateShortS._id, UpdateShortS);

/**
 * updatesCombined:Updates
 * #725b04c3:1918567619:1918567619
 * updates:Vector<Update>
 * users:Vector<User>
 * chats:Vector<Chat>
 * date:int
 * seq_start:int
 * seq:int
 */
export class UpdatesCombinedS {
  static _id = 0x725b04c3;

  _values = [[], [], [], 0, 0, 0] as [
    UpdateT[],
    UserT[],
    ChatT[],
    number,
    number,
    number
  ];

  get_updates(): UpdateT[] {
    return this._values[0];
  }
  set_updates(val: UpdateT[]): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[2];
  }
  set_chats(val: ChatT[]): this {
    this._values[2] = val;

    return this;
  }

  get_date(): number {
    return this._values[3];
  }
  set_date(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_seq_start(): number {
    return this._values[4];
  }
  set_seq_start(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_seq(): number {
    return this._values[5];
  }
  set_seq(val: number): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesCombinedS._id);

    let values = this._values;

    {
      let val = values[0] as UpdateT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
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
      if (id !== UpdatesCombinedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as UpdateT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UpdateT = new UpdateT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
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
AllStructs.set(UpdatesCombinedS._id, UpdatesCombinedS);

/**
 * updates:Updates
 * #74ae4240:1957577280:1957577280
 * updates:Vector<Update>
 * users:Vector<User>
 * chats:Vector<Chat>
 * date:int
 * seq:int
 */
export class UpdatesS {
  static _id = 0x74ae4240;

  _values = [[], [], [], 0, 0] as [
    UpdateT[],
    UserT[],
    ChatT[],
    number,
    number
  ];

  get_updates(): UpdateT[] {
    return this._values[0];
  }
  set_updates(val: UpdateT[]): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[2];
  }
  set_chats(val: ChatT[]): this {
    this._values[2] = val;

    return this;
  }

  get_date(): number {
    return this._values[3];
  }
  set_date(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_seq(): number {
    return this._values[4];
  }
  set_seq(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesS._id);

    let values = this._values;

    {
      let val = values[0] as UpdateT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
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
      if (id !== UpdatesS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as UpdateT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UpdateT = new UpdateT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
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
AllStructs.set(UpdatesS._id, UpdatesS);

/**
 * photos.photos:photos.Photos
 * #8dca6aa5:2378853029:-1916114267
 * photos:Vector<Photo>
 * users:Vector<User>
 */
export class PhotosPhotosS {
  static _id = 0x8dca6aa5;

  _values = [[], []] as [PhotoT[], UserT[]];

  get_photos(): PhotoT[] {
    return this._values[0];
  }
  set_photos(val: PhotoT[]): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotosPhotosS._id);

    let values = this._values;

    {
      let val = values[0] as PhotoT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== PhotosPhotosS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PhotoT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PhotoT = new PhotoT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PhotosPhotosS._id, PhotosPhotosS);

/**
 * photos.photosSlice:photos.Photos
 * #15051f54:352657236:352657236
 * count:int
 * photos:Vector<Photo>
 * users:Vector<User>
 */
export class PhotosPhotosSliceS {
  static _id = 0x15051f54;

  _values = [0, [], []] as [number, PhotoT[], UserT[]];

  get_count(): number {
    return this._values[0];
  }
  set_count(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_photos(): PhotoT[] {
    return this._values[1];
  }
  set_photos(val: PhotoT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotosPhotosSliceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as PhotoT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== PhotosPhotosSliceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as PhotoT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PhotoT = new PhotoT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(PhotosPhotosSliceS._id, PhotosPhotosSliceS);

/**
 * photos.photo:photos.Photo
 * #20212ca8:539045032:539045032
 * photo:Photo
 * users:Vector<User>
 */
export class PhotosPhotoS {
  static _id = 0x20212ca8;

  _values = [new PhotoT(), []] as [PhotoT, UserT[]];

  get_photo(): PhotoT {
    return this._values[0];
  }
  set_photo(val: PhotoT): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhotosPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as PhotoT;
      val._write(buf);
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== PhotosPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PhotosPhotoS._id, PhotosPhotoS);

/**
 * upload.file:upload.File
 * #96a18d5:157948117:157948117
 * type:storage.FileType
 * mtime:int
 * bytes:bytes
 */
export class UploadFileS {
  static _id = 0x96a18d5;

  _values = [new StorageFileTypeT(), 0, new Uint8Array()] as [
    StorageFileTypeT,
    number,
    Uint8Array
  ];

  get_type(): StorageFileTypeT {
    return this._values[0];
  }
  set_type(val: StorageFileTypeT): this {
    this._values[0] = val;

    return this;
  }

  get_mtime(): number {
    return this._values[1];
  }
  set_mtime(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_bytes(): Uint8Array {
    return this._values[2];
  }
  set_bytes(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UploadFileS._id);

    let values = this._values;

    {
      let val = values[0] as StorageFileTypeT;
      val._write(buf);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
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
      if (id !== UploadFileS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as StorageFileTypeT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
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
AllStructs.set(UploadFileS._id, UploadFileS);

/**
 * dcOption:DcOption
 * #18b7a10d:414687501:414687501
 * flags:#
 * ipv6:flags.0?true
 * media_only:flags.1?true
 * tcpo_only:flags.2?true
 * cdn:flags.3?true
 * static:flags.4?true
 * id:int
 * ip_address:string
 * port:int
 * secret:flags.10?bytes
 */
export class DcOptionS {
  static _id = 0x18b7a10d;

  _values = [0, true, true, true, true, true, 0, "", 0, new Uint8Array()] as [
    number,
    true,
    true,
    true,
    true,
    true,
    number,
    string,
    number,
    Uint8Array
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_ipv6(): true {
    return this._values[1];
  }
  set_ipv6(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_ipv6(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_media_only(): true {
    return this._values[2];
  }
  set_media_only(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_media_only(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_tcpo_only(): true {
    return this._values[3];
  }
  set_tcpo_only(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_tcpo_only(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_cdn(): true {
    return this._values[4];
  }
  set_cdn(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_cdn(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_static(): true {
    return this._values[5];
  }
  set_static(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_static(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_id(): number {
    return this._values[6];
  }
  set_id(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_ip_address(): string {
    return this._values[7];
  }
  set_ip_address(val: string): this {
    this._values[7] = val;

    return this;
  }

  get_port(): number {
    return this._values[8];
  }
  set_port(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_secret(): Uint8Array {
    return this._values[9];
  }
  set_secret(val: Uint8Array): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_secret(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DcOptionS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_ipv6()) {
      let val = values[1] as true;
    }

    if (this.has_media_only()) {
      let val = values[2] as true;
    }

    if (this.has_tcpo_only()) {
      let val = values[3] as true;
    }

    if (this.has_cdn()) {
      let val = values[4] as true;
    }

    if (this.has_static()) {
      let val = values[5] as true;
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    if (this.has_secret()) {
      let val = values[9] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DcOptionS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_ipv6()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_media_only()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_tcpo_only()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_cdn()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_static()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    if (this.has_secret()) {
      let val = values[9] as Uint8Array;
      val = buf.readBytes();
      values[9] = val;
    }

    return this;
  }
}
AllStructs.set(DcOptionS._id, DcOptionS);

/**
 * config:Config
 * #330b4067:856375399:856375399
 * flags:#
 * phonecalls_enabled:flags.1?true
 * default_p2p_contacts:flags.3?true
 * preload_featured_stickers:flags.4?true
 * ignore_phone_entities:flags.5?true
 * revoke_pm_inbox:flags.6?true
 * blocked_mode:flags.8?true
 * pfs_enabled:flags.13?true
 * date:int
 * expires:int
 * test_mode:Bool
 * this_dc:int
 * dc_options:Vector<DcOption>
 * dc_txt_domain_name:string
 * chat_size_max:int
 * megagroup_size_max:int
 * forwarded_count_max:int
 * online_update_period_ms:int
 * offline_blur_timeout_ms:int
 * offline_idle_timeout_ms:int
 * online_cloud_timeout_ms:int
 * notify_cloud_delay_ms:int
 * notify_default_delay_ms:int
 * push_chat_period_ms:int
 * push_chat_limit:int
 * saved_gifs_limit:int
 * edit_time_limit:int
 * revoke_time_limit:int
 * revoke_pm_time_limit:int
 * rating_e_decay:int
 * stickers_recent_limit:int
 * stickers_faved_limit:int
 * channels_read_media_period:int
 * tmp_sessions:flags.0?int
 * pinned_dialogs_count_max:int
 * pinned_infolder_count_max:int
 * call_receive_timeout_ms:int
 * call_ring_timeout_ms:int
 * call_connect_timeout_ms:int
 * call_packet_timeout_ms:int
 * me_url_prefix:string
 * autoupdate_url_prefix:flags.7?string
 * gif_search_username:flags.9?string
 * venue_search_username:flags.10?string
 * img_search_username:flags.11?string
 * static_maps_provider:flags.12?string
 * caption_length_max:int
 * message_length_max:int
 * webfile_dc_id:int
 * suggested_lang_code:flags.2?string
 * lang_pack_version:flags.2?int
 * base_lang_pack_version:flags.2?int
 */
export class ConfigS {
  static _id = 0x330b4067;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    0,
    0,
    new BoolT(),
    0,
    [],
    "",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    "",
    "",
    "",
    "",
    "",
    "",
    0,
    0,
    0,
    "",
    0,
    0
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    number,
    number,
    BoolT,
    number,
    DcOptionT[],
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    string,
    string,
    number,
    number,
    number,
    string,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_phonecalls_enabled(): true {
    return this._values[1];
  }
  set_phonecalls_enabled(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_phonecalls_enabled(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_default_p2p_contacts(): true {
    return this._values[2];
  }
  set_default_p2p_contacts(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_default_p2p_contacts(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_preload_featured_stickers(): true {
    return this._values[3];
  }
  set_preload_featured_stickers(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_preload_featured_stickers(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_ignore_phone_entities(): true {
    return this._values[4];
  }
  set_ignore_phone_entities(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_ignore_phone_entities(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_revoke_pm_inbox(): true {
    return this._values[5];
  }
  set_revoke_pm_inbox(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_revoke_pm_inbox(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_blocked_mode(): true {
    return this._values[6];
  }
  set_blocked_mode(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_blocked_mode(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_pfs_enabled(): true {
    return this._values[7];
  }
  set_pfs_enabled(val: true): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_pfs_enabled(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_date(): number {
    return this._values[8];
  }
  set_date(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_expires(): number {
    return this._values[9];
  }
  set_expires(val: number): this {
    this._values[9] = val;

    return this;
  }

  get_test_mode(): BoolT {
    return this._values[10];
  }
  set_test_mode(val: BoolT): this {
    this._values[10] = val;

    return this;
  }

  get_this_dc(): number {
    return this._values[11];
  }
  set_this_dc(val: number): this {
    this._values[11] = val;

    return this;
  }

  get_dc_options(): DcOptionT[] {
    return this._values[12];
  }
  set_dc_options(val: DcOptionT[]): this {
    this._values[12] = val;

    return this;
  }

  get_dc_txt_domain_name(): string {
    return this._values[13];
  }
  set_dc_txt_domain_name(val: string): this {
    this._values[13] = val;

    return this;
  }

  get_chat_size_max(): number {
    return this._values[14];
  }
  set_chat_size_max(val: number): this {
    this._values[14] = val;

    return this;
  }

  get_megagroup_size_max(): number {
    return this._values[15];
  }
  set_megagroup_size_max(val: number): this {
    this._values[15] = val;

    return this;
  }

  get_forwarded_count_max(): number {
    return this._values[16];
  }
  set_forwarded_count_max(val: number): this {
    this._values[16] = val;

    return this;
  }

  get_online_update_period_ms(): number {
    return this._values[17];
  }
  set_online_update_period_ms(val: number): this {
    this._values[17] = val;

    return this;
  }

  get_offline_blur_timeout_ms(): number {
    return this._values[18];
  }
  set_offline_blur_timeout_ms(val: number): this {
    this._values[18] = val;

    return this;
  }

  get_offline_idle_timeout_ms(): number {
    return this._values[19];
  }
  set_offline_idle_timeout_ms(val: number): this {
    this._values[19] = val;

    return this;
  }

  get_online_cloud_timeout_ms(): number {
    return this._values[20];
  }
  set_online_cloud_timeout_ms(val: number): this {
    this._values[20] = val;

    return this;
  }

  get_notify_cloud_delay_ms(): number {
    return this._values[21];
  }
  set_notify_cloud_delay_ms(val: number): this {
    this._values[21] = val;

    return this;
  }

  get_notify_default_delay_ms(): number {
    return this._values[22];
  }
  set_notify_default_delay_ms(val: number): this {
    this._values[22] = val;

    return this;
  }

  get_push_chat_period_ms(): number {
    return this._values[23];
  }
  set_push_chat_period_ms(val: number): this {
    this._values[23] = val;

    return this;
  }

  get_push_chat_limit(): number {
    return this._values[24];
  }
  set_push_chat_limit(val: number): this {
    this._values[24] = val;

    return this;
  }

  get_saved_gifs_limit(): number {
    return this._values[25];
  }
  set_saved_gifs_limit(val: number): this {
    this._values[25] = val;

    return this;
  }

  get_edit_time_limit(): number {
    return this._values[26];
  }
  set_edit_time_limit(val: number): this {
    this._values[26] = val;

    return this;
  }

  get_revoke_time_limit(): number {
    return this._values[27];
  }
  set_revoke_time_limit(val: number): this {
    this._values[27] = val;

    return this;
  }

  get_revoke_pm_time_limit(): number {
    return this._values[28];
  }
  set_revoke_pm_time_limit(val: number): this {
    this._values[28] = val;

    return this;
  }

  get_rating_e_decay(): number {
    return this._values[29];
  }
  set_rating_e_decay(val: number): this {
    this._values[29] = val;

    return this;
  }

  get_stickers_recent_limit(): number {
    return this._values[30];
  }
  set_stickers_recent_limit(val: number): this {
    this._values[30] = val;

    return this;
  }

  get_stickers_faved_limit(): number {
    return this._values[31];
  }
  set_stickers_faved_limit(val: number): this {
    this._values[31] = val;

    return this;
  }

  get_channels_read_media_period(): number {
    return this._values[32];
  }
  set_channels_read_media_period(val: number): this {
    this._values[32] = val;

    return this;
  }

  get_tmp_sessions(): number {
    return this._values[33];
  }
  set_tmp_sessions(val: number): this {
    this._values[33] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_tmp_sessions(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_pinned_dialogs_count_max(): number {
    return this._values[34];
  }
  set_pinned_dialogs_count_max(val: number): this {
    this._values[34] = val;

    return this;
  }

  get_pinned_infolder_count_max(): number {
    return this._values[35];
  }
  set_pinned_infolder_count_max(val: number): this {
    this._values[35] = val;

    return this;
  }

  get_call_receive_timeout_ms(): number {
    return this._values[36];
  }
  set_call_receive_timeout_ms(val: number): this {
    this._values[36] = val;

    return this;
  }

  get_call_ring_timeout_ms(): number {
    return this._values[37];
  }
  set_call_ring_timeout_ms(val: number): this {
    this._values[37] = val;

    return this;
  }

  get_call_connect_timeout_ms(): number {
    return this._values[38];
  }
  set_call_connect_timeout_ms(val: number): this {
    this._values[38] = val;

    return this;
  }

  get_call_packet_timeout_ms(): number {
    return this._values[39];
  }
  set_call_packet_timeout_ms(val: number): this {
    this._values[39] = val;

    return this;
  }

  get_me_url_prefix(): string {
    return this._values[40];
  }
  set_me_url_prefix(val: string): this {
    this._values[40] = val;

    return this;
  }

  get_autoupdate_url_prefix(): string {
    return this._values[41];
  }
  set_autoupdate_url_prefix(val: string): this {
    this._values[41] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_autoupdate_url_prefix(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_gif_search_username(): string {
    return this._values[42];
  }
  set_gif_search_username(val: string): this {
    this._values[42] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_gif_search_username(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_venue_search_username(): string {
    return this._values[43];
  }
  set_venue_search_username(val: string): this {
    this._values[43] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_venue_search_username(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  get_img_search_username(): string {
    return this._values[44];
  }
  set_img_search_username(val: string): this {
    this._values[44] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_img_search_username(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_static_maps_provider(): string {
    return this._values[45];
  }
  set_static_maps_provider(val: string): this {
    this._values[45] = val;

    this.set_flags(this.get_flags() | (1 << 12));

    return this;
  }

  has_static_maps_provider(): boolean {
    return !!(this.get_flags() & (1 << 12));
  }

  get_caption_length_max(): number {
    return this._values[46];
  }
  set_caption_length_max(val: number): this {
    this._values[46] = val;

    return this;
  }

  get_message_length_max(): number {
    return this._values[47];
  }
  set_message_length_max(val: number): this {
    this._values[47] = val;

    return this;
  }

  get_webfile_dc_id(): number {
    return this._values[48];
  }
  set_webfile_dc_id(val: number): this {
    this._values[48] = val;

    return this;
  }

  get_suggested_lang_code(): string {
    return this._values[49];
  }
  set_suggested_lang_code(val: string): this {
    this._values[49] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_suggested_lang_code(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_lang_pack_version(): number {
    return this._values[50];
  }
  set_lang_pack_version(val: number): this {
    this._values[50] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_lang_pack_version(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_base_lang_pack_version(): number {
    return this._values[51];
  }
  set_base_lang_pack_version(val: number): this {
    this._values[51] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_base_lang_pack_version(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ConfigS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_phonecalls_enabled()) {
      let val = values[1] as true;
    }

    if (this.has_default_p2p_contacts()) {
      let val = values[2] as true;
    }

    if (this.has_preload_featured_stickers()) {
      let val = values[3] as true;
    }

    if (this.has_ignore_phone_entities()) {
      let val = values[4] as true;
    }

    if (this.has_revoke_pm_inbox()) {
      let val = values[5] as true;
    }

    if (this.has_blocked_mode()) {
      let val = values[6] as true;
    }

    if (this.has_pfs_enabled()) {
      let val = values[7] as true;
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as number;
      buf.writeInt(val);
    }

    {
      let val = values[10] as BoolT;
      val._write(buf);
    }

    {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    {
      let val = values[12] as DcOptionT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[13] as string;
      buf.writeString(val);
    }

    {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    {
      let val = values[15] as number;
      buf.writeInt(val);
    }

    {
      let val = values[16] as number;
      buf.writeInt(val);
    }

    {
      let val = values[17] as number;
      buf.writeInt(val);
    }

    {
      let val = values[18] as number;
      buf.writeInt(val);
    }

    {
      let val = values[19] as number;
      buf.writeInt(val);
    }

    {
      let val = values[20] as number;
      buf.writeInt(val);
    }

    {
      let val = values[21] as number;
      buf.writeInt(val);
    }

    {
      let val = values[22] as number;
      buf.writeInt(val);
    }

    {
      let val = values[23] as number;
      buf.writeInt(val);
    }

    {
      let val = values[24] as number;
      buf.writeInt(val);
    }

    {
      let val = values[25] as number;
      buf.writeInt(val);
    }

    {
      let val = values[26] as number;
      buf.writeInt(val);
    }

    {
      let val = values[27] as number;
      buf.writeInt(val);
    }

    {
      let val = values[28] as number;
      buf.writeInt(val);
    }

    {
      let val = values[29] as number;
      buf.writeInt(val);
    }

    {
      let val = values[30] as number;
      buf.writeInt(val);
    }

    {
      let val = values[31] as number;
      buf.writeInt(val);
    }

    {
      let val = values[32] as number;
      buf.writeInt(val);
    }

    if (this.has_tmp_sessions()) {
      let val = values[33] as number;
      buf.writeInt(val);
    }

    {
      let val = values[34] as number;
      buf.writeInt(val);
    }

    {
      let val = values[35] as number;
      buf.writeInt(val);
    }

    {
      let val = values[36] as number;
      buf.writeInt(val);
    }

    {
      let val = values[37] as number;
      buf.writeInt(val);
    }

    {
      let val = values[38] as number;
      buf.writeInt(val);
    }

    {
      let val = values[39] as number;
      buf.writeInt(val);
    }

    {
      let val = values[40] as string;
      buf.writeString(val);
    }

    if (this.has_autoupdate_url_prefix()) {
      let val = values[41] as string;
      buf.writeString(val);
    }

    if (this.has_gif_search_username()) {
      let val = values[42] as string;
      buf.writeString(val);
    }

    if (this.has_venue_search_username()) {
      let val = values[43] as string;
      buf.writeString(val);
    }

    if (this.has_img_search_username()) {
      let val = values[44] as string;
      buf.writeString(val);
    }

    if (this.has_static_maps_provider()) {
      let val = values[45] as string;
      buf.writeString(val);
    }

    {
      let val = values[46] as number;
      buf.writeInt(val);
    }

    {
      let val = values[47] as number;
      buf.writeInt(val);
    }

    {
      let val = values[48] as number;
      buf.writeInt(val);
    }

    if (this.has_suggested_lang_code()) {
      let val = values[49] as string;
      buf.writeString(val);
    }

    if (this.has_lang_pack_version()) {
      let val = values[50] as number;
      buf.writeInt(val);
    }

    if (this.has_base_lang_pack_version()) {
      let val = values[51] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ConfigS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_phonecalls_enabled()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_default_p2p_contacts()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_preload_featured_stickers()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_ignore_phone_entities()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_revoke_pm_inbox()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_blocked_mode()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    if (this.has_pfs_enabled()) {
      let val = values[7] as true;
      val = true;
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as number;
      val = buf.readInt();
      values[9] = val;
    }

    {
      let val = values[10] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[10] = val;
    }

    {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    {
      let val = values[12] as DcOptionT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DcOptionT = new DcOptionT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[12] = val;
    }

    {
      let val = values[13] as string;
      val = buf.readString();
      values[13] = val;
    }

    {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    {
      let val = values[15] as number;
      val = buf.readInt();
      values[15] = val;
    }

    {
      let val = values[16] as number;
      val = buf.readInt();
      values[16] = val;
    }

    {
      let val = values[17] as number;
      val = buf.readInt();
      values[17] = val;
    }

    {
      let val = values[18] as number;
      val = buf.readInt();
      values[18] = val;
    }

    {
      let val = values[19] as number;
      val = buf.readInt();
      values[19] = val;
    }

    {
      let val = values[20] as number;
      val = buf.readInt();
      values[20] = val;
    }

    {
      let val = values[21] as number;
      val = buf.readInt();
      values[21] = val;
    }

    {
      let val = values[22] as number;
      val = buf.readInt();
      values[22] = val;
    }

    {
      let val = values[23] as number;
      val = buf.readInt();
      values[23] = val;
    }

    {
      let val = values[24] as number;
      val = buf.readInt();
      values[24] = val;
    }

    {
      let val = values[25] as number;
      val = buf.readInt();
      values[25] = val;
    }

    {
      let val = values[26] as number;
      val = buf.readInt();
      values[26] = val;
    }

    {
      let val = values[27] as number;
      val = buf.readInt();
      values[27] = val;
    }

    {
      let val = values[28] as number;
      val = buf.readInt();
      values[28] = val;
    }

    {
      let val = values[29] as number;
      val = buf.readInt();
      values[29] = val;
    }

    {
      let val = values[30] as number;
      val = buf.readInt();
      values[30] = val;
    }

    {
      let val = values[31] as number;
      val = buf.readInt();
      values[31] = val;
    }

    {
      let val = values[32] as number;
      val = buf.readInt();
      values[32] = val;
    }

    if (this.has_tmp_sessions()) {
      let val = values[33] as number;
      val = buf.readInt();
      values[33] = val;
    }

    {
      let val = values[34] as number;
      val = buf.readInt();
      values[34] = val;
    }

    {
      let val = values[35] as number;
      val = buf.readInt();
      values[35] = val;
    }

    {
      let val = values[36] as number;
      val = buf.readInt();
      values[36] = val;
    }

    {
      let val = values[37] as number;
      val = buf.readInt();
      values[37] = val;
    }

    {
      let val = values[38] as number;
      val = buf.readInt();
      values[38] = val;
    }

    {
      let val = values[39] as number;
      val = buf.readInt();
      values[39] = val;
    }

    {
      let val = values[40] as string;
      val = buf.readString();
      values[40] = val;
    }

    if (this.has_autoupdate_url_prefix()) {
      let val = values[41] as string;
      val = buf.readString();
      values[41] = val;
    }

    if (this.has_gif_search_username()) {
      let val = values[42] as string;
      val = buf.readString();
      values[42] = val;
    }

    if (this.has_venue_search_username()) {
      let val = values[43] as string;
      val = buf.readString();
      values[43] = val;
    }

    if (this.has_img_search_username()) {
      let val = values[44] as string;
      val = buf.readString();
      values[44] = val;
    }

    if (this.has_static_maps_provider()) {
      let val = values[45] as string;
      val = buf.readString();
      values[45] = val;
    }

    {
      let val = values[46] as number;
      val = buf.readInt();
      values[46] = val;
    }

    {
      let val = values[47] as number;
      val = buf.readInt();
      values[47] = val;
    }

    {
      let val = values[48] as number;
      val = buf.readInt();
      values[48] = val;
    }

    if (this.has_suggested_lang_code()) {
      let val = values[49] as string;
      val = buf.readString();
      values[49] = val;
    }

    if (this.has_lang_pack_version()) {
      let val = values[50] as number;
      val = buf.readInt();
      values[50] = val;
    }

    if (this.has_base_lang_pack_version()) {
      let val = values[51] as number;
      val = buf.readInt();
      values[51] = val;
    }

    return this;
  }
}
AllStructs.set(ConfigS._id, ConfigS);

/**
 * nearestDc:NearestDc
 * #8e1a1775:2384074613:-1910892683
 * country:string
 * this_dc:int
 * nearest_dc:int
 */
export class NearestDcS {
  static _id = 0x8e1a1775;

  _values = ["", 0, 0] as [string, number, number];

  get_country(): string {
    return this._values[0];
  }
  set_country(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_this_dc(): number {
    return this._values[1];
  }
  set_this_dc(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_nearest_dc(): number {
    return this._values[2];
  }
  set_nearest_dc(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(NearestDcS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== NearestDcS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(NearestDcS._id, NearestDcS);

/**
 * help.appUpdate:help.AppUpdate
 * #1da7158f:497489295:497489295
 * flags:#
 * can_not_skip:flags.0?true
 * id:int
 * version:string
 * text:string
 * entities:Vector<MessageEntity>
 * document:flags.1?Document
 * url:flags.2?string
 */
export class HelpAppUpdateS {
  static _id = 0x1da7158f;

  _values = [0, true, 0, "", "", [], new DocumentT(), ""] as [
    number,
    true,
    number,
    string,
    string,
    MessageEntityT[],
    DocumentT,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_can_not_skip(): true {
    return this._values[1];
  }
  set_can_not_skip(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_can_not_skip(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_id(): number {
    return this._values[2];
  }
  set_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_version(): string {
    return this._values[3];
  }
  set_version(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_text(): string {
    return this._values[4];
  }
  set_text(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[5];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[5] = val;

    return this;
  }

  get_document(): DocumentT {
    return this._values[6];
  }
  set_document(val: DocumentT): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_document(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_url(): string {
    return this._values[7];
  }
  set_url(val: string): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_url(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HelpAppUpdateS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_can_not_skip()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_document()) {
      let val = values[6] as DocumentT;
      val._write(buf);
    }

    if (this.has_url()) {
      let val = values[7] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== HelpAppUpdateS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_can_not_skip()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    if (this.has_document()) {
      let val = values[6] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    if (this.has_url()) {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(HelpAppUpdateS._id, HelpAppUpdateS);

/**
 * help.noAppUpdate:help.AppUpdate
 * #c45a6536:3294258486:-1000708810
 *
 */
export class HelpNoAppUpdateS {
  static _id = 0xc45a6536;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HelpNoAppUpdateS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== HelpNoAppUpdateS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(HelpNoAppUpdateS._id, HelpNoAppUpdateS);

/**
 * help.inviteText:help.InviteText
 * #18cb9f78:415997816:415997816
 * message:string
 */
export class HelpInviteTextS {
  static _id = 0x18cb9f78;

  _values = [""] as [string];

  get_message(): string {
    return this._values[0];
  }
  set_message(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HelpInviteTextS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== HelpInviteTextS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(HelpInviteTextS._id, HelpInviteTextS);

/**
 * updateNewEncryptedMessage:Update
 * #12bcbd9a:314359194:314359194
 * message:EncryptedMessage
 * qts:int
 */
export class UpdateNewEncryptedMessageS {
  static _id = 0x12bcbd9a;

  _values = [new EncryptedMessageT(), 0] as [EncryptedMessageT, number];

  get_message(): EncryptedMessageT {
    return this._values[0];
  }
  set_message(val: EncryptedMessageT): this {
    this._values[0] = val;

    return this;
  }

  get_qts(): number {
    return this._values[1];
  }
  set_qts(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateNewEncryptedMessageS._id);

    let values = this._values;

    {
      let val = values[0] as EncryptedMessageT;
      val._write(buf);
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
      if (id !== UpdateNewEncryptedMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as EncryptedMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateNewEncryptedMessageS._id, UpdateNewEncryptedMessageS);

/**
 * updateEncryptedChatTyping:Update
 * #1710f156:386986326:386986326
 * chat_id:int
 */
export class UpdateEncryptedChatTypingS {
  static _id = 0x1710f156;

  _values = [0] as [number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateEncryptedChatTypingS._id);

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
      if (id !== UpdateEncryptedChatTypingS._id) panic(id.toString(16));
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
AllStructs.set(UpdateEncryptedChatTypingS._id, UpdateEncryptedChatTypingS);

/**
 * updateEncryption:Update
 * #b4a2e88d:3030575245:-1264392051
 * chat:EncryptedChat
 * date:int
 */
export class UpdateEncryptionS {
  static _id = 0xb4a2e88d;

  _values = [new EncryptedChatT(), 0] as [EncryptedChatT, number];

  get_chat(): EncryptedChatT {
    return this._values[0];
  }
  set_chat(val: EncryptedChatT): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateEncryptionS._id);

    let values = this._values;

    {
      let val = values[0] as EncryptedChatT;
      val._write(buf);
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
      if (id !== UpdateEncryptionS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as EncryptedChatT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateEncryptionS._id, UpdateEncryptionS);

/**
 * updateEncryptedMessagesRead:Update
 * #38fe25b7:956179895:956179895
 * chat_id:int
 * max_date:int
 * date:int
 */
export class UpdateEncryptedMessagesReadS {
  static _id = 0x38fe25b7;

  _values = [0, 0, 0] as [number, number, number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_max_date(): number {
    return this._values[1];
  }
  set_max_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateEncryptedMessagesReadS._id);

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
      if (id !== UpdateEncryptedMessagesReadS._id) panic(id.toString(16));
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
AllStructs.set(UpdateEncryptedMessagesReadS._id, UpdateEncryptedMessagesReadS);

/**
 * encryptedChatEmpty:EncryptedChat
 * #ab7ec0a0:2877210784:-1417756512
 * id:int
 */
export class EncryptedChatEmptyS {
  static _id = 0xab7ec0a0;

  _values = [0] as [number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedChatEmptyS._id);

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
      if (id !== EncryptedChatEmptyS._id) panic(id.toString(16));
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
AllStructs.set(EncryptedChatEmptyS._id, EncryptedChatEmptyS);

/**
 * encryptedChatWaiting:EncryptedChat
 * #3bf703dc:1006044124:1006044124
 * id:int
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 */
export class EncryptedChatWaitingS {
  static _id = 0x3bf703dc;

  _values = [0, [0, 0], 0, 0, 0] as [number, ProtoLong, number, number, number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_admin_id(): number {
    return this._values[3];
  }
  set_admin_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_participant_id(): number {
    return this._values[4];
  }
  set_participant_id(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedChatWaitingS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== EncryptedChatWaitingS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(EncryptedChatWaitingS._id, EncryptedChatWaitingS);

/**
 * encryptedChatRequested:EncryptedChat
 * #c878527e:3363328638:-931638658
 * id:int
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 * g_a:bytes
 */
export class EncryptedChatRequestedS {
  static _id = 0xc878527e;

  _values = [0, [0, 0], 0, 0, 0, new Uint8Array()] as [
    number,
    ProtoLong,
    number,
    number,
    number,
    Uint8Array
  ];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_admin_id(): number {
    return this._values[3];
  }
  set_admin_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_participant_id(): number {
    return this._values[4];
  }
  set_participant_id(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_g_a(): Uint8Array {
    return this._values[5];
  }
  set_g_a(val: Uint8Array): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedChatRequestedS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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

    {
      let val = values[4] as number;
      buf.writeInt(val);
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
      if (id !== EncryptedChatRequestedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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

    {
      let val = values[4] as number;
      val = buf.readInt();
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
AllStructs.set(EncryptedChatRequestedS._id, EncryptedChatRequestedS);

/**
 * encryptedChat:EncryptedChat
 * #fa56ce36:4199992886:-94974410
 * id:int
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 * g_a_or_b:bytes
 * key_fingerprint:long
 */
export class EncryptedChatS {
  static _id = 0xfa56ce36;

  _values = [0, [0, 0], 0, 0, 0, new Uint8Array(), [0, 0]] as [
    number,
    ProtoLong,
    number,
    number,
    number,
    Uint8Array,
    ProtoLong
  ];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_admin_id(): number {
    return this._values[3];
  }
  set_admin_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_participant_id(): number {
    return this._values[4];
  }
  set_participant_id(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_g_a_or_b(): Uint8Array {
    return this._values[5];
  }
  set_g_a_or_b(val: Uint8Array): this {
    this._values[5] = val;

    return this;
  }

  get_key_fingerprint(): ProtoLong {
    return this._values[6];
  }
  set_key_fingerprint(val: ProtoLong): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedChatS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[6] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== EncryptedChatS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as Uint8Array;
      val = buf.readBytes();
      values[5] = val;
    }

    {
      let val = values[6] as ProtoLong;
      val = buf.readLong();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(EncryptedChatS._id, EncryptedChatS);

/**
 * encryptedChatDiscarded:EncryptedChat
 * #13d6dd27:332848423:332848423
 * id:int
 */
export class EncryptedChatDiscardedS {
  static _id = 0x13d6dd27;

  _values = [0] as [number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedChatDiscardedS._id);

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
      if (id !== EncryptedChatDiscardedS._id) panic(id.toString(16));
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
AllStructs.set(EncryptedChatDiscardedS._id, EncryptedChatDiscardedS);

/**
 * inputEncryptedChat:InputEncryptedChat
 * #f141b5e1:4047615457:-247351839
 * chat_id:int
 * access_hash:long
 */
export class InputEncryptedChatS {
  static _id = 0xf141b5e1;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputEncryptedChatS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== InputEncryptedChatS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(InputEncryptedChatS._id, InputEncryptedChatS);

/**
 * encryptedFileEmpty:EncryptedFile
 * #c21f497e:3256830334:-1038136962
 *
 */
export class EncryptedFileEmptyS {
  static _id = 0xc21f497e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedFileEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== EncryptedFileEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(EncryptedFileEmptyS._id, EncryptedFileEmptyS);

/**
 * encryptedFile:EncryptedFile
 * #4a70994c:1248893260:1248893260
 * id:long
 * access_hash:long
 * size:int
 * dc_id:int
 * key_fingerprint:int
 */
export class EncryptedFileS {
  static _id = 0x4a70994c;

  _values = [[0, 0], [0, 0], 0, 0, 0] as [
    ProtoLong,
    ProtoLong,
    number,
    number,
    number
  ];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_size(): number {
    return this._values[2];
  }
  set_size(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_dc_id(): number {
    return this._values[3];
  }
  set_dc_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_key_fingerprint(): number {
    return this._values[4];
  }
  set_key_fingerprint(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedFileS._id);

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

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== EncryptedFileS._id) panic(id.toString(16));
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

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(EncryptedFileS._id, EncryptedFileS);

/**
 * inputEncryptedFileEmpty:InputEncryptedFile
 * #1837c364:406307684:406307684
 *
 */
export class InputEncryptedFileEmptyS {
  static _id = 0x1837c364;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputEncryptedFileEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputEncryptedFileEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputEncryptedFileEmptyS._id, InputEncryptedFileEmptyS);

/**
 * inputEncryptedFileUploaded:InputEncryptedFile
 * #64bd0306:1690108678:1690108678
 * id:long
 * parts:int
 * md5_checksum:string
 * key_fingerprint:int
 */
export class InputEncryptedFileUploadedS {
  static _id = 0x64bd0306;

  _values = [[0, 0], 0, "", 0] as [ProtoLong, number, string, number];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_parts(): number {
    return this._values[1];
  }
  set_parts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_md5_checksum(): string {
    return this._values[2];
  }
  set_md5_checksum(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_key_fingerprint(): number {
    return this._values[3];
  }
  set_key_fingerprint(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputEncryptedFileUploadedS._id);

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
      let val = values[2] as string;
      buf.writeString(val);
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
      if (id !== InputEncryptedFileUploadedS._id) panic(id.toString(16));
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
      let val = values[2] as string;
      val = buf.readString();
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
AllStructs.set(InputEncryptedFileUploadedS._id, InputEncryptedFileUploadedS);

/**
 * inputEncryptedFile:InputEncryptedFile
 * #5a17b5e5:1511503333:1511503333
 * id:long
 * access_hash:long
 */
export class InputEncryptedFileS {
  static _id = 0x5a17b5e5;

  _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputEncryptedFileS._id);

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
      if (id !== InputEncryptedFileS._id) panic(id.toString(16));
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
AllStructs.set(InputEncryptedFileS._id, InputEncryptedFileS);

/**
 * inputEncryptedFileLocation:InputFileLocation
 * #f5235d55:4112735573:-182231723
 * id:long
 * access_hash:long
 */
export class InputEncryptedFileLocationS {
  static _id = 0xf5235d55;

  _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputEncryptedFileLocationS._id);

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
      if (id !== InputEncryptedFileLocationS._id) panic(id.toString(16));
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
AllStructs.set(InputEncryptedFileLocationS._id, InputEncryptedFileLocationS);

/**
 * encryptedMessage:EncryptedMessage
 * #ed18c118:3977822488:-317144808
 * random_id:long
 * chat_id:int
 * date:int
 * bytes:bytes
 * file:EncryptedFile
 */
export class EncryptedMessageS {
  static _id = 0xed18c118;

  _values = [[0, 0], 0, 0, new Uint8Array(), new EncryptedFileT()] as [
    ProtoLong,
    number,
    number,
    Uint8Array,
    EncryptedFileT
  ];

  get_random_id(): ProtoLong {
    return this._values[0];
  }
  set_random_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_chat_id(): number {
    return this._values[1];
  }
  set_chat_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_bytes(): Uint8Array {
    return this._values[3];
  }
  set_bytes(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_file(): EncryptedFileT {
    return this._values[4];
  }
  set_file(val: EncryptedFileT): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedMessageS._id);

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
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[4] as EncryptedFileT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== EncryptedMessageS._id) panic(id.toString(16));
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
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    {
      let val = values[4] as EncryptedFileT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(EncryptedMessageS._id, EncryptedMessageS);

/**
 * encryptedMessageService:EncryptedMessage
 * #23734b06:594758406:594758406
 * random_id:long
 * chat_id:int
 * date:int
 * bytes:bytes
 */
export class EncryptedMessageServiceS {
  static _id = 0x23734b06;

  _values = [[0, 0], 0, 0, new Uint8Array()] as [
    ProtoLong,
    number,
    number,
    Uint8Array
  ];

  get_random_id(): ProtoLong {
    return this._values[0];
  }
  set_random_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_chat_id(): number {
    return this._values[1];
  }
  set_chat_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_bytes(): Uint8Array {
    return this._values[3];
  }
  set_bytes(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(EncryptedMessageServiceS._id);

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
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== EncryptedMessageServiceS._id) panic(id.toString(16));
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
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(EncryptedMessageServiceS._id, EncryptedMessageServiceS);

/**
 * messages.dhConfigNotModified:messages.DhConfig
 * #c0e24635:3236054581:-1058912715
 * random:bytes
 */
export class MessagesDhConfigNotModifiedS {
  static _id = 0xc0e24635;

  _values = [new Uint8Array()] as [Uint8Array];

  get_random(): Uint8Array {
    return this._values[0];
  }
  set_random(val: Uint8Array): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesDhConfigNotModifiedS._id);

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
      if (id !== MessagesDhConfigNotModifiedS._id) panic(id.toString(16));
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
AllStructs.set(MessagesDhConfigNotModifiedS._id, MessagesDhConfigNotModifiedS);

/**
 * messages.dhConfig:messages.DhConfig
 * #2c221edd:740433629:740433629
 * g:int
 * p:bytes
 * version:int
 * random:bytes
 */
export class MessagesDhConfigS {
  static _id = 0x2c221edd;

  _values = [0, new Uint8Array(), 0, new Uint8Array()] as [
    number,
    Uint8Array,
    number,
    Uint8Array
  ];

  get_g(): number {
    return this._values[0];
  }
  set_g(val: number): this {
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

  get_version(): number {
    return this._values[2];
  }
  set_version(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_random(): Uint8Array {
    return this._values[3];
  }
  set_random(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesDhConfigS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
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
      if (id !== MessagesDhConfigS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as Uint8Array;
      val = buf.readBytes();
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

    return this;
  }
}
AllStructs.set(MessagesDhConfigS._id, MessagesDhConfigS);

/**
 * messages.sentEncryptedMessage:messages.SentEncryptedMessage
 * #560f8935:1443858741:1443858741
 * date:int
 */
export class MessagesSentEncryptedMessageS {
  static _id = 0x560f8935;

  _values = [0] as [number];

  get_date(): number {
    return this._values[0];
  }
  set_date(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesSentEncryptedMessageS._id);

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
      if (id !== MessagesSentEncryptedMessageS._id) panic(id.toString(16));
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
AllStructs.set(
  MessagesSentEncryptedMessageS._id,
  MessagesSentEncryptedMessageS
);

/**
 * messages.sentEncryptedFile:messages.SentEncryptedMessage
 * #9493ff32:2492727090:-1802240206
 * date:int
 * file:EncryptedFile
 */
export class MessagesSentEncryptedFileS {
  static _id = 0x9493ff32;

  _values = [0, new EncryptedFileT()] as [number, EncryptedFileT];

  get_date(): number {
    return this._values[0];
  }
  set_date(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_file(): EncryptedFileT {
    return this._values[1];
  }
  set_file(val: EncryptedFileT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesSentEncryptedFileS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as EncryptedFileT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesSentEncryptedFileS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as EncryptedFileT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesSentEncryptedFileS._id, MessagesSentEncryptedFileS);

/**
 * inputFileBig:InputFile
 * #fa4f0bb5:4199484341:-95482955
 * id:long
 * parts:int
 * name:string
 */
export class InputFileBigS {
  static _id = 0xfa4f0bb5;

  _values = [[0, 0], 0, ""] as [ProtoLong, number, string];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_parts(): number {
    return this._values[1];
  }
  set_parts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_name(): string {
    return this._values[2];
  }
  set_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputFileBigS._id);

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
      let val = values[2] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputFileBigS._id) panic(id.toString(16));
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
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputFileBigS._id, InputFileBigS);

/**
 * inputEncryptedFileBigUploaded:InputEncryptedFile
 * #2dc173c8:767652808:767652808
 * id:long
 * parts:int
 * key_fingerprint:int
 */
export class InputEncryptedFileBigUploadedS {
  static _id = 0x2dc173c8;

  _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_parts(): number {
    return this._values[1];
  }
  set_parts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_key_fingerprint(): number {
    return this._values[2];
  }
  set_key_fingerprint(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputEncryptedFileBigUploadedS._id);

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
      if (id !== InputEncryptedFileBigUploadedS._id) panic(id.toString(16));
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
AllStructs.set(
  InputEncryptedFileBigUploadedS._id,
  InputEncryptedFileBigUploadedS
);

/**
 * updateChatParticipantAdd:Update
 * #ea4b0e5c:3930787420:-364179876
 * chat_id:int
 * user_id:int
 * inviter_id:int
 * date:int
 * version:int
 */
export class UpdateChatParticipantAddS {
  static _id = 0xea4b0e5c;

  _values = [0, 0, 0, 0, 0] as [number, number, number, number, number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_inviter_id(): number {
    return this._values[2];
  }
  set_inviter_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_date(): number {
    return this._values[3];
  }
  set_date(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_version(): number {
    return this._values[4];
  }
  set_version(val: number): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChatParticipantAddS._id);

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

    {
      let val = values[3] as number;
      buf.writeInt(val);
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
      if (id !== UpdateChatParticipantAddS._id) panic(id.toString(16));
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

    {
      let val = values[3] as number;
      val = buf.readInt();
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
AllStructs.set(UpdateChatParticipantAddS._id, UpdateChatParticipantAddS);

/**
 * updateChatParticipantDelete:Update
 * #6e5f8c22:1851755554:1851755554
 * chat_id:int
 * user_id:int
 * version:int
 */
export class UpdateChatParticipantDeleteS {
  static _id = 0x6e5f8c22;

  _values = [0, 0, 0] as [number, number, number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_version(): number {
    return this._values[2];
  }
  set_version(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChatParticipantDeleteS._id);

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
      if (id !== UpdateChatParticipantDeleteS._id) panic(id.toString(16));
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
AllStructs.set(UpdateChatParticipantDeleteS._id, UpdateChatParticipantDeleteS);

/**
 * updateDcOptions:Update
 * #8e5e9873:2388564083:-1906403213
 * dc_options:Vector<DcOption>
 */
export class UpdateDcOptionsS {
  static _id = 0x8e5e9873;

  _values = [[]] as [DcOptionT[]];

  get_dc_options(): DcOptionT[] {
    return this._values[0];
  }
  set_dc_options(val: DcOptionT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateDcOptionsS._id);

    let values = this._values;

    {
      let val = values[0] as DcOptionT[];

      buf.writeInt(481674261);
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
      if (id !== UpdateDcOptionsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as DcOptionT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DcOptionT = new DcOptionT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateDcOptionsS._id, UpdateDcOptionsS);

/**
 * inputMediaUploadedDocument:InputMedia
 * #5b38c6c1:1530447553:1530447553
 * flags:#
 * nosound_video:flags.3?true
 * file:InputFile
 * thumb:flags.2?InputFile
 * mime_type:string
 * attributes:Vector<DocumentAttribute>
 * stickers:flags.0?Vector<InputDocument>
 * ttl_seconds:flags.1?int
 */
export class InputMediaUploadedDocumentS {
  static _id = 0x5b38c6c1;

  _values = [0, true, new InputFileT(), new InputFileT(), "", [], [], 0] as [
    number,
    true,
    InputFileT,
    InputFileT,
    string,
    DocumentAttributeT[],
    InputDocumentT[],
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_nosound_video(): true {
    return this._values[1];
  }
  set_nosound_video(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_nosound_video(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_file(): InputFileT {
    return this._values[2];
  }
  set_file(val: InputFileT): this {
    this._values[2] = val;

    return this;
  }

  get_thumb(): InputFileT {
    return this._values[3];
  }
  set_thumb(val: InputFileT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_thumb(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_mime_type(): string {
    return this._values[4];
  }
  set_mime_type(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_attributes(): DocumentAttributeT[] {
    return this._values[5];
  }
  set_attributes(val: DocumentAttributeT[]): this {
    this._values[5] = val;

    return this;
  }

  get_stickers(): InputDocumentT[] {
    return this._values[6];
  }
  set_stickers(val: InputDocumentT[]): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_stickers(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_ttl_seconds(): number {
    return this._values[7];
  }
  set_ttl_seconds(val: number): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaUploadedDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_nosound_video()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as InputFileT;
      val._write(buf);
    }

    if (this.has_thumb()) {
      let val = values[3] as InputFileT;
      val._write(buf);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as DocumentAttributeT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_stickers()) {
      let val = values[6] as InputDocumentT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_ttl_seconds()) {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaUploadedDocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_nosound_video()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as InputFileT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    if (this.has_thumb()) {
      let val = values[3] as InputFileT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as DocumentAttributeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentAttributeT = new DocumentAttributeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    if (this.has_stickers()) {
      let val = values[6] as InputDocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: InputDocumentT = new InputDocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    if (this.has_ttl_seconds()) {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaUploadedDocumentS._id, InputMediaUploadedDocumentS);

/**
 * inputMediaDocument:InputMedia
 * #23ab23d2:598418386:598418386
 * flags:#
 * id:InputDocument
 * ttl_seconds:flags.0?int
 */
export class InputMediaDocumentS {
  static _id = 0x23ab23d2;

  _values = [0, new InputDocumentT(), 0] as [number, InputDocumentT, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): InputDocumentT {
    return this._values[1];
  }
  set_id(val: InputDocumentT): this {
    this._values[1] = val;

    return this;
  }

  get_ttl_seconds(): number {
    return this._values[2];
  }
  set_ttl_seconds(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as InputDocumentT;
      val._write(buf);
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaDocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as InputDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaDocumentS._id, InputMediaDocumentS);

/**
 * messageMediaDocument:MessageMedia
 * #9cb070d7:2628808919:-1666158377
 * flags:#
 * document:flags.0?Document
 * ttl_seconds:flags.2?int
 */
export class MessageMediaDocumentS {
  static _id = 0x9cb070d7;

  _values = [0, new DocumentT(), 0] as [number, DocumentT, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_document(): DocumentT {
    return this._values[1];
  }
  set_document(val: DocumentT): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_document(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_ttl_seconds(): number {
    return this._values[2];
  }
  set_ttl_seconds(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_document()) {
      let val = values[1] as DocumentT;
      val._write(buf);
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaDocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_document()) {
      let val = values[1] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaDocumentS._id, MessageMediaDocumentS);

/**
 * inputDocumentEmpty:InputDocument
 * #72f0eaae:1928391342:1928391342
 *
 */
export class InputDocumentEmptyS {
  static _id = 0x72f0eaae;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputDocumentEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputDocumentEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputDocumentEmptyS._id, InputDocumentEmptyS);

/**
 * inputDocument:InputDocument
 * #1abfb575:448771445:448771445
 * id:long
 * access_hash:long
 * file_reference:bytes
 */
export class InputDocumentS {
  static _id = 0x1abfb575;

  _values = [[0, 0], [0, 0], new Uint8Array()] as [
    ProtoLong,
    ProtoLong,
    Uint8Array
  ];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_file_reference(): Uint8Array {
    return this._values[2];
  }
  set_file_reference(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputDocumentS._id);

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
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputDocumentS._id) panic(id.toString(16));
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
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputDocumentS._id, InputDocumentS);

/**
 * inputDocumentFileLocation:InputFileLocation
 * #bad07584:3134223748:-1160743548
 * id:long
 * access_hash:long
 * file_reference:bytes
 * thumb_size:string
 */
export class InputDocumentFileLocationS {
  static _id = 0xbad07584;

  _values = [[0, 0], [0, 0], new Uint8Array(), ""] as [
    ProtoLong,
    ProtoLong,
    Uint8Array,
    string
  ];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_file_reference(): Uint8Array {
    return this._values[2];
  }
  set_file_reference(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_thumb_size(): string {
    return this._values[3];
  }
  set_thumb_size(val: string): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputDocumentFileLocationS._id);

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
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputDocumentFileLocationS._id) panic(id.toString(16));
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
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputDocumentFileLocationS._id, InputDocumentFileLocationS);

/**
 * documentEmpty:Document
 * #36f8c871:922273905:922273905
 * id:long
 */
export class DocumentEmptyS {
  static _id = 0x36f8c871;

  _values = [[0, 0]] as [ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentEmptyS._id);

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
      if (id !== DocumentEmptyS._id) panic(id.toString(16));
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
AllStructs.set(DocumentEmptyS._id, DocumentEmptyS);

/**
 * document:Document
 * #9ba29cc1:2611125441:-1683841855
 * flags:#
 * id:long
 * access_hash:long
 * file_reference:bytes
 * date:int
 * mime_type:string
 * size:int
 * thumbs:flags.0?Vector<PhotoSize>
 * dc_id:int
 * attributes:Vector<DocumentAttribute>
 */
export class DocumentS {
  static _id = 0x9ba29cc1;

  _values = [0, [0, 0], [0, 0], new Uint8Array(), 0, "", 0, [], 0, []] as [
    number,
    ProtoLong,
    ProtoLong,
    Uint8Array,
    number,
    string,
    number,
    PhotoSizeT[],
    number,
    DocumentAttributeT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): ProtoLong {
    return this._values[1];
  }
  set_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[2];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_file_reference(): Uint8Array {
    return this._values[3];
  }
  set_file_reference(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_date(): number {
    return this._values[4];
  }
  set_date(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_mime_type(): string {
    return this._values[5];
  }
  set_mime_type(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_size(): number {
    return this._values[6];
  }
  set_size(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_thumbs(): PhotoSizeT[] {
    return this._values[7];
  }
  set_thumbs(val: PhotoSizeT[]): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_thumbs(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_dc_id(): number {
    return this._values[8];
  }
  set_dc_id(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_attributes(): DocumentAttributeT[] {
    return this._values[9];
  }
  set_attributes(val: DocumentAttributeT[]): this {
    this._values[9] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    if (this.has_thumbs()) {
      let val = values[7] as PhotoSizeT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as DocumentAttributeT[];

      buf.writeInt(481674261);
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
      if (id !== DocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    if (this.has_thumbs()) {
      let val = values[7] as PhotoSizeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PhotoSizeT = new PhotoSizeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as DocumentAttributeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentAttributeT = new DocumentAttributeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[9] = val;
    }

    return this;
  }
}
AllStructs.set(DocumentS._id, DocumentS);

/**
 * help.support:help.Support
 * #17c6b5f6:398898678:398898678
 * phone_number:string
 * user:User
 */
export class HelpSupportS {
  static _id = 0x17c6b5f6;

  _values = ["", new UserT()] as [string, UserT];

  get_phone_number(): string {
    return this._values[0];
  }
  set_phone_number(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_user(): UserT {
    return this._values[1];
  }
  set_user(val: UserT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HelpSupportS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as UserT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== HelpSupportS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as UserT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(HelpSupportS._id, HelpSupportS);

/**
 * notifyPeer:NotifyPeer
 * #9fd40bd8:2681474008:-1613493288
 * peer:Peer
 */
export class NotifyPeerS {
  static _id = 0x9fd40bd8;

  _values = [new PeerT()] as [PeerT];

  get_peer(): PeerT {
    return this._values[0];
  }
  set_peer(val: PeerT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(NotifyPeerS._id);

    let values = this._values;

    {
      let val = values[0] as PeerT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== NotifyPeerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(NotifyPeerS._id, NotifyPeerS);

/**
 * notifyUsers:NotifyPeer
 * #b4c83b4c:3033021260:-1261946036
 *
 */
export class NotifyUsersS {
  static _id = 0xb4c83b4c;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(NotifyUsersS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== NotifyUsersS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(NotifyUsersS._id, NotifyUsersS);

/**
 * notifyChats:NotifyPeer
 * #c007cec3:3221737155:-1073230141
 *
 */
export class NotifyChatsS {
  static _id = 0xc007cec3;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(NotifyChatsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== NotifyChatsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(NotifyChatsS._id, NotifyChatsS);

/**
 * updateUserBlocked:Update
 * #80ece81a:2163009562:-2131957734
 * user_id:int
 * blocked:Bool
 */
export class UpdateUserBlockedS {
  static _id = 0x80ece81a;

  _values = [0, new BoolT()] as [number, BoolT];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_blocked(): BoolT {
    return this._values[1];
  }
  set_blocked(val: BoolT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateUserBlockedS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as BoolT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateUserBlockedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateUserBlockedS._id, UpdateUserBlockedS);

/**
 * updateNotifySettings:Update
 * #bec268ef:3200411887:-1094555409
 * peer:NotifyPeer
 * notify_settings:PeerNotifySettings
 */
export class UpdateNotifySettingsS {
  static _id = 0xbec268ef;

  _values = [new NotifyPeerT(), new PeerNotifySettingsT()] as [
    NotifyPeerT,
    PeerNotifySettingsT
  ];

  get_peer(): NotifyPeerT {
    return this._values[0];
  }
  set_peer(val: NotifyPeerT): this {
    this._values[0] = val;

    return this;
  }

  get_notify_settings(): PeerNotifySettingsT {
    return this._values[1];
  }
  set_notify_settings(val: PeerNotifySettingsT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateNotifySettingsS._id);

    let values = this._values;

    {
      let val = values[0] as NotifyPeerT;
      val._write(buf);
    }

    {
      let val = values[1] as PeerNotifySettingsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateNotifySettingsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as NotifyPeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as PeerNotifySettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateNotifySettingsS._id, UpdateNotifySettingsS);

/**
 * sendMessageTypingAction:SendMessageAction
 * #16bf744e:381645902:381645902
 *
 */
export class SendMessageTypingActionS {
  static _id = 0x16bf744e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageTypingActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageTypingActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(SendMessageTypingActionS._id, SendMessageTypingActionS);

/**
 * sendMessageCancelAction:SendMessageAction
 * #fd5ec8f5:4250847477:-44119819
 *
 */
export class SendMessageCancelActionS {
  static _id = 0xfd5ec8f5;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageCancelActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageCancelActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(SendMessageCancelActionS._id, SendMessageCancelActionS);

/**
 * sendMessageRecordVideoAction:SendMessageAction
 * #a187d66f:2710034031:-1584933265
 *
 */
export class SendMessageRecordVideoActionS {
  static _id = 0xa187d66f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageRecordVideoActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageRecordVideoActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  SendMessageRecordVideoActionS._id,
  SendMessageRecordVideoActionS
);

/**
 * sendMessageUploadVideoAction:SendMessageAction
 * #e9763aec:3916839660:-378127636
 * progress:int
 */
export class SendMessageUploadVideoActionS {
  static _id = 0xe9763aec;

  _values = [0] as [number];

  get_progress(): number {
    return this._values[0];
  }
  set_progress(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageUploadVideoActionS._id);

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
      if (id !== SendMessageUploadVideoActionS._id) panic(id.toString(16));
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
AllStructs.set(
  SendMessageUploadVideoActionS._id,
  SendMessageUploadVideoActionS
);

/**
 * sendMessageRecordAudioAction:SendMessageAction
 * #d52f73f7:3576656887:-718310409
 *
 */
export class SendMessageRecordAudioActionS {
  static _id = 0xd52f73f7;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageRecordAudioActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageRecordAudioActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  SendMessageRecordAudioActionS._id,
  SendMessageRecordAudioActionS
);

/**
 * sendMessageUploadAudioAction:SendMessageAction
 * #f351d7ab:4082227115:-212740181
 * progress:int
 */
export class SendMessageUploadAudioActionS {
  static _id = 0xf351d7ab;

  _values = [0] as [number];

  get_progress(): number {
    return this._values[0];
  }
  set_progress(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageUploadAudioActionS._id);

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
      if (id !== SendMessageUploadAudioActionS._id) panic(id.toString(16));
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
AllStructs.set(
  SendMessageUploadAudioActionS._id,
  SendMessageUploadAudioActionS
);

/**
 * sendMessageUploadPhotoAction:SendMessageAction
 * #d1d34a26:3520285222:-774682074
 * progress:int
 */
export class SendMessageUploadPhotoActionS {
  static _id = 0xd1d34a26;

  _values = [0] as [number];

  get_progress(): number {
    return this._values[0];
  }
  set_progress(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageUploadPhotoActionS._id);

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
      if (id !== SendMessageUploadPhotoActionS._id) panic(id.toString(16));
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
AllStructs.set(
  SendMessageUploadPhotoActionS._id,
  SendMessageUploadPhotoActionS
);

/**
 * sendMessageUploadDocumentAction:SendMessageAction
 * #aa0cd9e4:2852968932:-1441998364
 * progress:int
 */
export class SendMessageUploadDocumentActionS {
  static _id = 0xaa0cd9e4;

  _values = [0] as [number];

  get_progress(): number {
    return this._values[0];
  }
  set_progress(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageUploadDocumentActionS._id);

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
      if (id !== SendMessageUploadDocumentActionS._id) panic(id.toString(16));
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
AllStructs.set(
  SendMessageUploadDocumentActionS._id,
  SendMessageUploadDocumentActionS
);

/**
 * sendMessageGeoLocationAction:SendMessageAction
 * #176f8ba1:393186209:393186209
 *
 */
export class SendMessageGeoLocationActionS {
  static _id = 0x176f8ba1;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageGeoLocationActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageGeoLocationActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  SendMessageGeoLocationActionS._id,
  SendMessageGeoLocationActionS
);

/**
 * sendMessageChooseContactAction:SendMessageAction
 * #628cbc6f:1653390447:1653390447
 *
 */
export class SendMessageChooseContactActionS {
  static _id = 0x628cbc6f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageChooseContactActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageChooseContactActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  SendMessageChooseContactActionS._id,
  SendMessageChooseContactActionS
);

/**
 * contacts.found:contacts.Found
 * #b3134d9d:3004386717:-1290580579
 * my_results:Vector<Peer>
 * results:Vector<Peer>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class ContactsFoundS {
  static _id = 0xb3134d9d;

  _values = [[], [], [], []] as [
    PeerT[],
    PeerT[],
    ChatT[],
    UserT[]
  ];

  get_my_results(): PeerT[] {
    return this._values[0];
  }
  set_my_results(val: PeerT[]): this {
    this._values[0] = val;

    return this;
  }

  get_results(): PeerT[] {
    return this._values[1];
  }
  set_results(val: PeerT[]): this {
    this._values[1] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[2];
  }
  set_chats(val: ChatT[]): this {
    this._values[2] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[3];
  }
  set_users(val: UserT[]): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsFoundS._id);

    let values = this._values;

    {
      let val = values[0] as PeerT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as PeerT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsFoundS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PeerT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PeerT = new PeerT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as PeerT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PeerT = new PeerT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsFoundS._id, ContactsFoundS);

/**
 * updateServiceNotification:Update
 * #ebe46819:3957614617:-337352679
 * flags:#
 * popup:flags.0?true
 * inbox_date:flags.1?int
 * type:string
 * message:string
 * media:MessageMedia
 * entities:Vector<MessageEntity>
 */
export class UpdateServiceNotificationS {
  static _id = 0xebe46819;

  _values = [0, true, 0, "", "", new MessageMediaT(), []] as [
    number,
    true,
    number,
    string,
    string,
    MessageMediaT,
    MessageEntityT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_popup(): true {
    return this._values[1];
  }
  set_popup(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_popup(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_inbox_date(): number {
    return this._values[2];
  }
  set_inbox_date(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_inbox_date(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_type(): string {
    return this._values[3];
  }
  set_type(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_message(): string {
    return this._values[4];
  }
  set_message(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_media(): MessageMediaT {
    return this._values[5];
  }
  set_media(val: MessageMediaT): this {
    this._values[5] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[6];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateServiceNotificationS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_popup()) {
      let val = values[1] as true;
    }

    if (this.has_inbox_date()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as MessageMediaT;
      val._write(buf);
    }

    {
      let val = values[6] as MessageEntityT[];

      buf.writeInt(481674261);
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
      if (id !== UpdateServiceNotificationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_popup()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_inbox_date()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as MessageMediaT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    {
      let val = values[6] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateServiceNotificationS._id, UpdateServiceNotificationS);

/**
 * userStatusRecently:UserStatus
 * #e26f42f1:3798942449:-496024847
 *
 */
export class UserStatusRecentlyS {
  static _id = 0xe26f42f1;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserStatusRecentlyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserStatusRecentlyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UserStatusRecentlyS._id, UserStatusRecentlyS);

/**
 * userStatusLastWeek:UserStatus
 * #7bf09fc:129960444:129960444
 *
 */
export class UserStatusLastWeekS {
  static _id = 0x7bf09fc;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserStatusLastWeekS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserStatusLastWeekS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UserStatusLastWeekS._id, UserStatusLastWeekS);

/**
 * userStatusLastMonth:UserStatus
 * #77ebc742:2011940674:2011940674
 *
 */
export class UserStatusLastMonthS {
  static _id = 0x77ebc742;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserStatusLastMonthS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserStatusLastMonthS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UserStatusLastMonthS._id, UserStatusLastMonthS);

/**
 * updatePrivacy:Update
 * #ee3b272a:3996854058:-298113238
 * key:PrivacyKey
 * rules:Vector<PrivacyRule>
 */
export class UpdatePrivacyS {
  static _id = 0xee3b272a;

  _values = [new PrivacyKeyT(), []] as [PrivacyKeyT, PrivacyRuleT[]];

  get_key(): PrivacyKeyT {
    return this._values[0];
  }
  set_key(val: PrivacyKeyT): this {
    this._values[0] = val;

    return this;
  }

  get_rules(): PrivacyRuleT[] {
    return this._values[1];
  }
  set_rules(val: PrivacyRuleT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatePrivacyS._id);

    let values = this._values;

    {
      let val = values[0] as PrivacyKeyT;
      val._write(buf);
    }

    {
      let val = values[1] as PrivacyRuleT[];

      buf.writeInt(481674261);
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
      if (id !== UpdatePrivacyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PrivacyKeyT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as PrivacyRuleT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PrivacyRuleT = new PrivacyRuleT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(UpdatePrivacyS._id, UpdatePrivacyS);

/**
 * inputPrivacyKeyStatusTimestamp:InputPrivacyKey
 * #4f96cb18:1335282456:1335282456
 *
 */
export class InputPrivacyKeyStatusTimestampS {
  static _id = 0x4f96cb18;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyKeyStatusTimestampS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyKeyStatusTimestampS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputPrivacyKeyStatusTimestampS._id,
  InputPrivacyKeyStatusTimestampS
);

/**
 * privacyKeyStatusTimestamp:PrivacyKey
 * #bc2eab30:3157175088:-1137792208
 *
 */
export class PrivacyKeyStatusTimestampS {
  static _id = 0xbc2eab30;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyKeyStatusTimestampS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyKeyStatusTimestampS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PrivacyKeyStatusTimestampS._id, PrivacyKeyStatusTimestampS);

/**
 * inputPrivacyValueAllowContacts:InputPrivacyRule
 * #d09e07b:218751099:218751099
 *
 */
export class InputPrivacyValueAllowContactsS {
  static _id = 0xd09e07b;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyValueAllowContactsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyValueAllowContactsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputPrivacyValueAllowContactsS._id,
  InputPrivacyValueAllowContactsS
);

/**
 * inputPrivacyValueAllowAll:InputPrivacyRule
 * #184b35ce:407582158:407582158
 *
 */
export class InputPrivacyValueAllowAllS {
  static _id = 0x184b35ce;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyValueAllowAllS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyValueAllowAllS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputPrivacyValueAllowAllS._id, InputPrivacyValueAllowAllS);

/**
 * inputPrivacyValueAllowUsers:InputPrivacyRule
 * #131cc67f:320652927:320652927
 * users:Vector<InputUser>
 */
export class InputPrivacyValueAllowUsersS {
  static _id = 0x131cc67f;

  _values = [[]] as [InputUserT[]];

  get_users(): InputUserT[] {
    return this._values[0];
  }
  set_users(val: InputUserT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyValueAllowUsersS._id);

    let values = this._values;

    {
      let val = values[0] as InputUserT[];

      buf.writeInt(481674261);
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
      if (id !== InputPrivacyValueAllowUsersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputUserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: InputUserT = new InputUserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputPrivacyValueAllowUsersS._id, InputPrivacyValueAllowUsersS);

/**
 * inputPrivacyValueDisallowContacts:InputPrivacyRule
 * #ba52007:195371015:195371015
 *
 */
export class InputPrivacyValueDisallowContactsS {
  static _id = 0xba52007;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyValueDisallowContactsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyValueDisallowContactsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputPrivacyValueDisallowContactsS._id,
  InputPrivacyValueDisallowContactsS
);

/**
 * inputPrivacyValueDisallowAll:InputPrivacyRule
 * #d66b66c9:3597362889:-697604407
 *
 */
export class InputPrivacyValueDisallowAllS {
  static _id = 0xd66b66c9;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyValueDisallowAllS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyValueDisallowAllS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputPrivacyValueDisallowAllS._id,
  InputPrivacyValueDisallowAllS
);

/**
 * inputPrivacyValueDisallowUsers:InputPrivacyRule
 * #90110467:2417034343:-1877932953
 * users:Vector<InputUser>
 */
export class InputPrivacyValueDisallowUsersS {
  static _id = 0x90110467;

  _values = [[]] as [InputUserT[]];

  get_users(): InputUserT[] {
    return this._values[0];
  }
  set_users(val: InputUserT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyValueDisallowUsersS._id);

    let values = this._values;

    {
      let val = values[0] as InputUserT[];

      buf.writeInt(481674261);
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
      if (id !== InputPrivacyValueDisallowUsersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputUserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: InputUserT = new InputUserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputPrivacyValueDisallowUsersS._id,
  InputPrivacyValueDisallowUsersS
);

/**
 * privacyValueAllowContacts:PrivacyRule
 * #fffe1bac:4294843308:-123988
 *
 */
export class PrivacyValueAllowContactsS {
  static _id = 0xfffe1bac;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyValueAllowContactsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyValueAllowContactsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PrivacyValueAllowContactsS._id, PrivacyValueAllowContactsS);

/**
 * privacyValueAllowAll:PrivacyRule
 * #65427b82:1698855810:1698855810
 *
 */
export class PrivacyValueAllowAllS {
  static _id = 0x65427b82;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyValueAllowAllS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyValueAllowAllS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PrivacyValueAllowAllS._id, PrivacyValueAllowAllS);

/**
 * privacyValueAllowUsers:PrivacyRule
 * #4d5bbe0c:1297858060:1297858060
 * users:Vector<int>
 */
export class PrivacyValueAllowUsersS {
  static _id = 0x4d5bbe0c;

  _values = [[]] as [number[]];

  get_users(): number[] {
    return this._values[0];
  }
  set_users(val: number[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyValueAllowUsersS._id);

    let values = this._values;

    {
      let val = values[0] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyValueAllowUsersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PrivacyValueAllowUsersS._id, PrivacyValueAllowUsersS);

/**
 * privacyValueDisallowContacts:PrivacyRule
 * #f888fa1a:4169726490:-125240806
 *
 */
export class PrivacyValueDisallowContactsS {
  static _id = 0xf888fa1a;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyValueDisallowContactsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyValueDisallowContactsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  PrivacyValueDisallowContactsS._id,
  PrivacyValueDisallowContactsS
);

/**
 * privacyValueDisallowAll:PrivacyRule
 * #8b73e763:2339628899:-1955338397
 *
 */
export class PrivacyValueDisallowAllS {
  static _id = 0x8b73e763;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyValueDisallowAllS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyValueDisallowAllS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PrivacyValueDisallowAllS._id, PrivacyValueDisallowAllS);

/**
 * privacyValueDisallowUsers:PrivacyRule
 * #c7f49b7:209668535:209668535
 * users:Vector<int>
 */
export class PrivacyValueDisallowUsersS {
  static _id = 0xc7f49b7;

  _values = [[]] as [number[]];

  get_users(): number[] {
    return this._values[0];
  }
  set_users(val: number[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyValueDisallowUsersS._id);

    let values = this._values;

    {
      let val = values[0] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyValueDisallowUsersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PrivacyValueDisallowUsersS._id, PrivacyValueDisallowUsersS);

/**
 * account.privacyRules:account.PrivacyRules
 * #50a04e45:1352683077:1352683077
 * rules:Vector<PrivacyRule>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class AccountPrivacyRulesS {
  static _id = 0x50a04e45;

  _values = [[], [], []] as [PrivacyRuleT[], ChatT[], UserT[]];

  get_rules(): PrivacyRuleT[] {
    return this._values[0];
  }
  set_rules(val: PrivacyRuleT[]): this {
    this._values[0] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[1];
  }
  set_chats(val: ChatT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountPrivacyRulesS._id);

    let values = this._values;

    {
      let val = values[0] as PrivacyRuleT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== AccountPrivacyRulesS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PrivacyRuleT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PrivacyRuleT = new PrivacyRuleT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(AccountPrivacyRulesS._id, AccountPrivacyRulesS);

/**
 * accountDaysTTL:AccountDaysTTL
 * #b8d0afdf:3100684255:-1194283041
 * days:int
 */
export class AccountDaysTtlS {
  static _id = 0xb8d0afdf;

  _values = [0] as [number];

  get_days(): number {
    return this._values[0];
  }
  set_days(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountDaysTtlS._id);

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
      if (id !== AccountDaysTtlS._id) panic(id.toString(16));
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
AllStructs.set(AccountDaysTtlS._id, AccountDaysTtlS);

/**
 * updateUserPhone:Update
 * #12b9417b:314130811:314130811
 * user_id:int
 * phone:string
 */
export class UpdateUserPhoneS {
  static _id = 0x12b9417b;

  _values = [0, ""] as [number, string];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_phone(): string {
    return this._values[1];
  }
  set_phone(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateUserPhoneS._id);

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
      if (id !== UpdateUserPhoneS._id) panic(id.toString(16));
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
AllStructs.set(UpdateUserPhoneS._id, UpdateUserPhoneS);

/**
 * documentAttributeImageSize:DocumentAttribute
 * #6c37c15c:1815593308:1815593308
 * w:int
 * h:int
 */
export class DocumentAttributeImageSizeS {
  static _id = 0x6c37c15c;

  _values = [0, 0] as [number, number];

  get_w(): number {
    return this._values[0];
  }
  set_w(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_h(): number {
    return this._values[1];
  }
  set_h(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeImageSizeS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== DocumentAttributeImageSizeS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(DocumentAttributeImageSizeS._id, DocumentAttributeImageSizeS);

/**
 * documentAttributeAnimated:DocumentAttribute
 * #11b58939:297109817:297109817
 *
 */
export class DocumentAttributeAnimatedS {
  static _id = 0x11b58939;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeAnimatedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DocumentAttributeAnimatedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(DocumentAttributeAnimatedS._id, DocumentAttributeAnimatedS);

/**
 * documentAttributeSticker:DocumentAttribute
 * #6319d612:1662637586:1662637586
 * flags:#
 * mask:flags.1?true
 * alt:string
 * stickerset:InputStickerSet
 * mask_coords:flags.0?MaskCoords
 */
export class DocumentAttributeStickerS {
  static _id = 0x6319d612;

  _values = [0, true, "", new InputStickerSetT(), new MaskCoordsT()] as [
    number,
    true,
    string,
    InputStickerSetT,
    MaskCoordsT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_mask(): true {
    return this._values[1];
  }
  set_mask(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_mask(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_alt(): string {
    return this._values[2];
  }
  set_alt(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_stickerset(): InputStickerSetT {
    return this._values[3];
  }
  set_stickerset(val: InputStickerSetT): this {
    this._values[3] = val;

    return this;
  }

  get_mask_coords(): MaskCoordsT {
    return this._values[4];
  }
  set_mask_coords(val: MaskCoordsT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_mask_coords(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeStickerS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_mask()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as InputStickerSetT;
      val._write(buf);
    }

    if (this.has_mask_coords()) {
      let val = values[4] as MaskCoordsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DocumentAttributeStickerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_mask()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as InputStickerSetT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    if (this.has_mask_coords()) {
      let val = values[4] as MaskCoordsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(DocumentAttributeStickerS._id, DocumentAttributeStickerS);

/**
 * documentAttributeVideo:DocumentAttribute
 * #ef02ce6:250621158:250621158
 * flags:#
 * round_message:flags.0?true
 * supports_streaming:flags.1?true
 * duration:int
 * w:int
 * h:int
 */
export class DocumentAttributeVideoS {
  static _id = 0xef02ce6;

  _values = [0, true, true, 0, 0, 0] as [
    number,
    true,
    true,
    number,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_round_message(): true {
    return this._values[1];
  }
  set_round_message(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_round_message(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_supports_streaming(): true {
    return this._values[2];
  }
  set_supports_streaming(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_supports_streaming(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_duration(): number {
    return this._values[3];
  }
  set_duration(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_w(): number {
    return this._values[4];
  }
  set_w(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_h(): number {
    return this._values[5];
  }
  set_h(val: number): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeVideoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_round_message()) {
      let val = values[1] as true;
    }

    if (this.has_supports_streaming()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
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
      if (id !== DocumentAttributeVideoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_round_message()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_supports_streaming()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
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
AllStructs.set(DocumentAttributeVideoS._id, DocumentAttributeVideoS);

/**
 * documentAttributeAudio:DocumentAttribute
 * #9852f9c6:2555574726:-1739392570
 * flags:#
 * voice:flags.10?true
 * duration:int
 * title:flags.0?string
 * performer:flags.1?string
 * waveform:flags.2?bytes
 */
export class DocumentAttributeAudioS {
  static _id = 0x9852f9c6;

  _values = [0, true, 0, "", "", new Uint8Array()] as [
    number,
    true,
    number,
    string,
    string,
    Uint8Array
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_voice(): true {
    return this._values[1];
  }
  set_voice(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_voice(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  get_duration(): number {
    return this._values[2];
  }
  set_duration(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_title(): string {
    return this._values[3];
  }
  set_title(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_title(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_performer(): string {
    return this._values[4];
  }
  set_performer(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_performer(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_waveform(): Uint8Array {
    return this._values[5];
  }
  set_waveform(val: Uint8Array): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_waveform(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeAudioS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_voice()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    if (this.has_title()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_performer()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_waveform()) {
      let val = values[5] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DocumentAttributeAudioS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_voice()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    if (this.has_title()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_performer()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_waveform()) {
      let val = values[5] as Uint8Array;
      val = buf.readBytes();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(DocumentAttributeAudioS._id, DocumentAttributeAudioS);

/**
 * documentAttributeFilename:DocumentAttribute
 * #15590068:358154344:358154344
 * file_name:string
 */
export class DocumentAttributeFilenameS {
  static _id = 0x15590068;

  _values = [""] as [string];

  get_file_name(): string {
    return this._values[0];
  }
  set_file_name(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeFilenameS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DocumentAttributeFilenameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(DocumentAttributeFilenameS._id, DocumentAttributeFilenameS);

/**
 * messages.stickersNotModified:messages.Stickers
 * #f1749a22:4050950690:-244016606
 *
 */
export class MessagesStickersNotModifiedS {
  static _id = 0xf1749a22;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesStickersNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesStickersNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(MessagesStickersNotModifiedS._id, MessagesStickersNotModifiedS);

/**
 * messages.stickers:messages.Stickers
 * #e4599bbd:3831077821:-463889475
 * hash:int
 * stickers:Vector<Document>
 */
export class MessagesStickersS {
  static _id = 0xe4599bbd;

  _values = [0, []] as [number, DocumentT[]];

  get_hash(): number {
    return this._values[0];
  }
  set_hash(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_stickers(): DocumentT[] {
    return this._values[1];
  }
  set_stickers(val: DocumentT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesStickersS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as DocumentT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesStickersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as DocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentT = new DocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesStickersS._id, MessagesStickersS);

/**
 * stickerPack:StickerPack
 * #12b299d4:313694676:313694676
 * emoticon:string
 * documents:Vector<long>
 */
export class StickerPackS {
  static _id = 0x12b299d4;

  _values = ["", []] as [string, ProtoLong[]];

  get_emoticon(): string {
    return this._values[0];
  }
  set_emoticon(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_documents(): ProtoLong[] {
    return this._values[1];
  }
  set_documents(val: ProtoLong[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StickerPackS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as ProtoLong[];

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
      if (id !== StickerPackS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(StickerPackS._id, StickerPackS);

/**
 * messages.allStickersNotModified:messages.AllStickers
 * #e86602c3:3898999491:-395967805
 *
 */
export class MessagesAllStickersNotModifiedS {
  static _id = 0xe86602c3;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesAllStickersNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesAllStickersNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  MessagesAllStickersNotModifiedS._id,
  MessagesAllStickersNotModifiedS
);

/**
 * messages.allStickers:messages.AllStickers
 * #edfd405f:3992797279:-302170017
 * hash:int
 * sets:Vector<StickerSet>
 */
export class MessagesAllStickersS {
  static _id = 0xedfd405f;

  _values = [0, []] as [number, StickerSetT[]];

  get_hash(): number {
    return this._values[0];
  }
  set_hash(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_sets(): StickerSetT[] {
    return this._values[1];
  }
  set_sets(val: StickerSetT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesAllStickersS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as StickerSetT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesAllStickersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as StickerSetT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: StickerSetT = new StickerSetT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesAllStickersS._id, MessagesAllStickersS);

/**
 * updateReadHistoryInbox:Update
 * #9c974fdf:2627162079:-1667805217
 * flags:#
 * folder_id:flags.0?int
 * peer:Peer
 * max_id:int
 * still_unread_count:int
 * pts:int
 * pts_count:int
 */
export class UpdateReadHistoryInboxS {
  static _id = 0x9c974fdf;

  _values = [0, 0, new PeerT(), 0, 0, 0, 0] as [
    number,
    number,
    PeerT,
    number,
    number,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_folder_id(): number {
    return this._values[1];
  }
  set_folder_id(val: number): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_peer(): PeerT {
    return this._values[2];
  }
  set_peer(val: PeerT): this {
    this._values[2] = val;

    return this;
  }

  get_max_id(): number {
    return this._values[3];
  }
  set_max_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_still_unread_count(): number {
    return this._values[4];
  }
  set_still_unread_count(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_pts(): number {
    return this._values[5];
  }
  set_pts(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[6];
  }
  set_pts_count(val: number): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateReadHistoryInboxS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_folder_id()) {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as PeerT;
      val._write(buf);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
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
      if (id !== UpdateReadHistoryInboxS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_folder_id()) {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
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
AllStructs.set(UpdateReadHistoryInboxS._id, UpdateReadHistoryInboxS);

/**
 * updateReadHistoryOutbox:Update
 * #2f2f21bf:791617983:791617983
 * peer:Peer
 * max_id:int
 * pts:int
 * pts_count:int
 */
export class UpdateReadHistoryOutboxS {
  static _id = 0x2f2f21bf;

  _values = [new PeerT(), 0, 0, 0] as [PeerT, number, number, number];

  get_peer(): PeerT {
    return this._values[0];
  }
  set_peer(val: PeerT): this {
    this._values[0] = val;

    return this;
  }

  get_max_id(): number {
    return this._values[1];
  }
  set_max_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[3];
  }
  set_pts_count(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateReadHistoryOutboxS._id);

    let values = this._values;

    {
      let val = values[0] as PeerT;
      val._write(buf);
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
      let val = values[3] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateReadHistoryOutboxS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateReadHistoryOutboxS._id, UpdateReadHistoryOutboxS);

/**
 * messages.affectedMessages:messages.AffectedMessages
 * #84d19185:2228326789:-2066640507
 * pts:int
 * pts_count:int
 */
export class MessagesAffectedMessagesS {
  static _id = 0x84d19185;

  _values = [0, 0] as [number, number];

  get_pts(): number {
    return this._values[0];
  }
  set_pts(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[1];
  }
  set_pts_count(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesAffectedMessagesS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessagesAffectedMessagesS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessagesAffectedMessagesS._id, MessagesAffectedMessagesS);

/**
 * updateWebPage:Update
 * #7f891213:2139689491:2139689491
 * webpage:WebPage
 * pts:int
 * pts_count:int
 */
export class UpdateWebPageS {
  static _id = 0x7f891213;

  _values = [new WebPageT(), 0, 0] as [WebPageT, number, number];

  get_webpage(): WebPageT {
    return this._values[0];
  }
  set_webpage(val: WebPageT): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateWebPageS._id);

    let values = this._values;

    {
      let val = values[0] as WebPageT;
      val._write(buf);
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
      if (id !== UpdateWebPageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as WebPageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateWebPageS._id, UpdateWebPageS);

/**
 * webPageEmpty:WebPage
 * #eb1477e8:3943987176:-350980120
 * id:long
 */
export class WebPageEmptyS {
  static _id = 0xeb1477e8;

  _values = [[0, 0]] as [ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(WebPageEmptyS._id);

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
      if (id !== WebPageEmptyS._id) panic(id.toString(16));
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
AllStructs.set(WebPageEmptyS._id, WebPageEmptyS);

/**
 * webPagePending:WebPage
 * #c586da1c:3313949212:-981018084
 * id:long
 * date:int
 */
export class WebPagePendingS {
  static _id = 0xc586da1c;

  _values = [[0, 0], 0] as [ProtoLong, number];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(WebPagePendingS._id);

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
      if (id !== WebPagePendingS._id) panic(id.toString(16));
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
AllStructs.set(WebPagePendingS._id, WebPagePendingS);

/**
 * webPage:WebPage
 * #fa64e172:4200915314:-94051982
 * flags:#
 * id:long
 * url:string
 * display_url:string
 * hash:int
 * type:flags.0?string
 * site_name:flags.1?string
 * title:flags.2?string
 * description:flags.3?string
 * photo:flags.4?Photo
 * embed_url:flags.5?string
 * embed_type:flags.5?string
 * embed_width:flags.6?int
 * embed_height:flags.6?int
 * duration:flags.7?int
 * author:flags.8?string
 * document:flags.9?Document
 * documents:flags.11?Vector<Document>
 * cached_page:flags.10?Page
 */
export class WebPageS {
  static _id = 0xfa64e172;

  _values = [
    0,
    [0, 0],
    "",
    "",
    0,
    "",
    "",
    "",
    "",
    new PhotoT(),
    "",
    "",
    0,
    0,
    0,
    "",
    new DocumentT(),
    [],
    new PageT()
  ] as [
    number,
    ProtoLong,
    string,
    string,
    number,
    string,
    string,
    string,
    string,
    PhotoT,
    string,
    string,
    number,
    number,
    number,
    string,
    DocumentT,
    DocumentT[],
    PageT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): ProtoLong {
    return this._values[1];
  }
  set_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_url(): string {
    return this._values[2];
  }
  set_url(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_display_url(): string {
    return this._values[3];
  }
  set_display_url(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_hash(): number {
    return this._values[4];
  }
  set_hash(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_type(): string {
    return this._values[5];
  }
  set_type(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_type(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_site_name(): string {
    return this._values[6];
  }
  set_site_name(val: string): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_site_name(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_title(): string {
    return this._values[7];
  }
  set_title(val: string): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_title(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_description(): string {
    return this._values[8];
  }
  set_description(val: string): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_description(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_photo(): PhotoT {
    return this._values[9];
  }
  set_photo(val: PhotoT): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_photo(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_embed_url(): string {
    return this._values[10];
  }
  set_embed_url(val: string): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_embed_url(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_embed_type(): string {
    return this._values[11];
  }
  set_embed_type(val: string): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_embed_type(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_embed_width(): number {
    return this._values[12];
  }
  set_embed_width(val: number): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_embed_width(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_embed_height(): number {
    return this._values[13];
  }
  set_embed_height(val: number): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_embed_height(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_duration(): number {
    return this._values[14];
  }
  set_duration(val: number): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_duration(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_author(): string {
    return this._values[15];
  }
  set_author(val: string): this {
    this._values[15] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_author(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_document(): DocumentT {
    return this._values[16];
  }
  set_document(val: DocumentT): this {
    this._values[16] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_document(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_documents(): DocumentT[] {
    return this._values[17];
  }
  set_documents(val: DocumentT[]): this {
    this._values[17] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_documents(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_cached_page(): PageT {
    return this._values[18];
  }
  set_cached_page(val: PageT): this {
    this._values[18] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_cached_page(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(WebPageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    if (this.has_type()) {
      let val = values[5] as string;
      buf.writeString(val);
    }

    if (this.has_site_name()) {
      let val = values[6] as string;
      buf.writeString(val);
    }

    if (this.has_title()) {
      let val = values[7] as string;
      buf.writeString(val);
    }

    if (this.has_description()) {
      let val = values[8] as string;
      buf.writeString(val);
    }

    if (this.has_photo()) {
      let val = values[9] as PhotoT;
      val._write(buf);
    }

    if (this.has_embed_url()) {
      let val = values[10] as string;
      buf.writeString(val);
    }

    if (this.has_embed_type()) {
      let val = values[11] as string;
      buf.writeString(val);
    }

    if (this.has_embed_width()) {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    if (this.has_embed_height()) {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_duration()) {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    if (this.has_author()) {
      let val = values[15] as string;
      buf.writeString(val);
    }

    if (this.has_document()) {
      let val = values[16] as DocumentT;
      val._write(buf);
    }

    if (this.has_documents()) {
      let val = values[17] as DocumentT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_cached_page()) {
      let val = values[18] as PageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== WebPageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong;
      val = buf.readLong();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    if (this.has_type()) {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    if (this.has_site_name()) {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    if (this.has_title()) {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    if (this.has_description()) {
      let val = values[8] as string;
      val = buf.readString();
      values[8] = val;
    }

    if (this.has_photo()) {
      let val = values[9] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    if (this.has_embed_url()) {
      let val = values[10] as string;
      val = buf.readString();
      values[10] = val;
    }

    if (this.has_embed_type()) {
      let val = values[11] as string;
      val = buf.readString();
      values[11] = val;
    }

    if (this.has_embed_width()) {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    if (this.has_embed_height()) {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_duration()) {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    if (this.has_author()) {
      let val = values[15] as string;
      val = buf.readString();
      values[15] = val;
    }

    if (this.has_document()) {
      let val = values[16] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[16] = val;
    }

    if (this.has_documents()) {
      let val = values[17] as DocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentT = new DocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[17] = val;
    }

    if (this.has_cached_page()) {
      let val = values[18] as PageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[18] = val;
    }

    return this;
  }
}
AllStructs.set(WebPageS._id, WebPageS);

/**
 * messageMediaWebPage:MessageMedia
 * #a32dd600:2737690112:-1557277184
 * webpage:WebPage
 */
export class MessageMediaWebPageS {
  static _id = 0xa32dd600;

  _values = [new WebPageT()] as [WebPageT];

  get_webpage(): WebPageT {
    return this._values[0];
  }
  set_webpage(val: WebPageT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaWebPageS._id);

    let values = this._values;

    {
      let val = values[0] as WebPageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaWebPageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as WebPageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaWebPageS._id, MessageMediaWebPageS);

/**
 * authorization:Authorization
 * #ad01d61d:2902578717:-1392388579
 * flags:#
 * current:flags.0?true
 * official_app:flags.1?true
 * password_pending:flags.2?true
 * hash:long
 * device_model:string
 * platform:string
 * system_version:string
 * api_id:int
 * app_name:string
 * app_version:string
 * date_created:int
 * date_active:int
 * ip:string
 * country:string
 * region:string
 */
export class AuthorizationS {
  static _id = 0xad01d61d;

  _values = [
    0,
    true,
    true,
    true,
    [0, 0],
    "",
    "",
    "",
    0,
    "",
    "",
    0,
    0,
    "",
    "",
    ""
  ] as [
    number,
    true,
    true,
    true,
    ProtoLong,
    string,
    string,
    string,
    number,
    string,
    string,
    number,
    number,
    string,
    string,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_current(): true {
    return this._values[1];
  }
  set_current(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_current(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_official_app(): true {
    return this._values[2];
  }
  set_official_app(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_official_app(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_password_pending(): true {
    return this._values[3];
  }
  set_password_pending(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_password_pending(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_hash(): ProtoLong {
    return this._values[4];
  }
  set_hash(val: ProtoLong): this {
    this._values[4] = val;

    return this;
  }

  get_device_model(): string {
    return this._values[5];
  }
  set_device_model(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_platform(): string {
    return this._values[6];
  }
  set_platform(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_system_version(): string {
    return this._values[7];
  }
  set_system_version(val: string): this {
    this._values[7] = val;

    return this;
  }

  get_api_id(): number {
    return this._values[8];
  }
  set_api_id(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_app_name(): string {
    return this._values[9];
  }
  set_app_name(val: string): this {
    this._values[9] = val;

    return this;
  }

  get_app_version(): string {
    return this._values[10];
  }
  set_app_version(val: string): this {
    this._values[10] = val;

    return this;
  }

  get_date_created(): number {
    return this._values[11];
  }
  set_date_created(val: number): this {
    this._values[11] = val;

    return this;
  }

  get_date_active(): number {
    return this._values[12];
  }
  set_date_active(val: number): this {
    this._values[12] = val;

    return this;
  }

  get_ip(): string {
    return this._values[13];
  }
  set_ip(val: string): this {
    this._values[13] = val;

    return this;
  }

  get_country(): string {
    return this._values[14];
  }
  set_country(val: string): this {
    this._values[14] = val;

    return this;
  }

  get_region(): string {
    return this._values[15];
  }
  set_region(val: string): this {
    this._values[15] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthorizationS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_current()) {
      let val = values[1] as true;
    }

    if (this.has_official_app()) {
      let val = values[2] as true;
    }

    if (this.has_password_pending()) {
      let val = values[3] as true;
    }

    {
      let val = values[4] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as string;
      buf.writeString(val);
    }

    {
      let val = values[10] as string;
      buf.writeString(val);
    }

    {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    {
      let val = values[13] as string;
      buf.writeString(val);
    }

    {
      let val = values[14] as string;
      buf.writeString(val);
    }

    {
      let val = values[15] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthorizationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_current()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_official_app()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_password_pending()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    {
      let val = values[4] as ProtoLong;
      val = buf.readLong();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as string;
      val = buf.readString();
      values[9] = val;
    }

    {
      let val = values[10] as string;
      val = buf.readString();
      values[10] = val;
    }

    {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    {
      let val = values[13] as string;
      val = buf.readString();
      values[13] = val;
    }

    {
      let val = values[14] as string;
      val = buf.readString();
      values[14] = val;
    }

    {
      let val = values[15] as string;
      val = buf.readString();
      values[15] = val;
    }

    return this;
  }
}
AllStructs.set(AuthorizationS._id, AuthorizationS);

/**
 * account.authorizations:account.Authorizations
 * #1250abde:307276766:307276766
 * authorizations:Vector<Authorization>
 */
export class AccountAuthorizationsS {
  static _id = 0x1250abde;

  _values = [[]] as [AuthorizationT[]];

  get_authorizations(): AuthorizationT[] {
    return this._values[0];
  }
  set_authorizations(val: AuthorizationT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountAuthorizationsS._id);

    let values = this._values;

    {
      let val = values[0] as AuthorizationT[];

      buf.writeInt(481674261);
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
      if (id !== AccountAuthorizationsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as AuthorizationT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: AuthorizationT = new AuthorizationT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(AccountAuthorizationsS._id, AccountAuthorizationsS);

/**
 * account.password:account.Password
 * #ad2641f8:2904965624:-1390001672
 * flags:#
 * has_recovery:flags.0?true
 * has_secure_values:flags.1?true
 * has_password:flags.2?true
 * current_algo:flags.2?PasswordKdfAlgo
 * srp_B:flags.2?bytes
 * srp_id:flags.2?long
 * hint:flags.3?string
 * email_unconfirmed_pattern:flags.4?string
 * new_algo:PasswordKdfAlgo
 * new_secure_algo:SecurePasswordKdfAlgo
 * secure_random:bytes
 */
export class AccountPasswordS {
  static _id = 0xad2641f8;

  _values = [
    0,
    true,
    true,
    true,
    new PasswordKdfAlgoT(),
    new Uint8Array(),
    [0, 0],
    "",
    "",
    new PasswordKdfAlgoT(),
    new SecurePasswordKdfAlgoT(),
    new Uint8Array()
  ] as [
    number,
    true,
    true,
    true,
    PasswordKdfAlgoT,
    Uint8Array,
    ProtoLong,
    string,
    string,
    PasswordKdfAlgoT,
    SecurePasswordKdfAlgoT,
    Uint8Array
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_has_recovery(): true {
    return this._values[1];
  }
  set_has_recovery(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_has_recovery(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_has_secure_values(): true {
    return this._values[2];
  }
  set_has_secure_values(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_has_secure_values(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_has_password(): true {
    return this._values[3];
  }
  set_has_password(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_has_password(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_current_algo(): PasswordKdfAlgoT {
    return this._values[4];
  }
  set_current_algo(val: PasswordKdfAlgoT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_current_algo(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_srp_B(): Uint8Array {
    return this._values[5];
  }
  set_srp_B(val: Uint8Array): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_srp_B(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_srp_id(): ProtoLong {
    return this._values[6];
  }
  set_srp_id(val: ProtoLong): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_srp_id(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_hint(): string {
    return this._values[7];
  }
  set_hint(val: string): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_hint(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_email_unconfirmed_pattern(): string {
    return this._values[8];
  }
  set_email_unconfirmed_pattern(val: string): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_email_unconfirmed_pattern(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_new_algo(): PasswordKdfAlgoT {
    return this._values[9];
  }
  set_new_algo(val: PasswordKdfAlgoT): this {
    this._values[9] = val;

    return this;
  }

  get_new_secure_algo(): SecurePasswordKdfAlgoT {
    return this._values[10];
  }
  set_new_secure_algo(val: SecurePasswordKdfAlgoT): this {
    this._values[10] = val;

    return this;
  }

  get_secure_random(): Uint8Array {
    return this._values[11];
  }
  set_secure_random(val: Uint8Array): this {
    this._values[11] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountPasswordS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_has_recovery()) {
      let val = values[1] as true;
    }

    if (this.has_has_secure_values()) {
      let val = values[2] as true;
    }

    if (this.has_has_password()) {
      let val = values[3] as true;
    }

    if (this.has_current_algo()) {
      let val = values[4] as PasswordKdfAlgoT;
      val._write(buf);
    }

    if (this.has_srp_B()) {
      let val = values[5] as Uint8Array;
      buf.writeBytes(val);
    }

    if (this.has_srp_id()) {
      let val = values[6] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_hint()) {
      let val = values[7] as string;
      buf.writeString(val);
    }

    if (this.has_email_unconfirmed_pattern()) {
      let val = values[8] as string;
      buf.writeString(val);
    }

    {
      let val = values[9] as PasswordKdfAlgoT;
      val._write(buf);
    }

    {
      let val = values[10] as SecurePasswordKdfAlgoT;
      val._write(buf);
    }

    {
      let val = values[11] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AccountPasswordS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_has_recovery()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_has_secure_values()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_has_password()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_current_algo()) {
      let val = values[4] as PasswordKdfAlgoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    if (this.has_srp_B()) {
      let val = values[5] as Uint8Array;
      val = buf.readBytes();
      values[5] = val;
    }

    if (this.has_srp_id()) {
      let val = values[6] as ProtoLong;
      val = buf.readLong();
      values[6] = val;
    }

    if (this.has_hint()) {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    if (this.has_email_unconfirmed_pattern()) {
      let val = values[8] as string;
      val = buf.readString();
      values[8] = val;
    }

    {
      let val = values[9] as PasswordKdfAlgoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    {
      let val = values[10] as SecurePasswordKdfAlgoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[10] = val;
    }

    {
      let val = values[11] as Uint8Array;
      val = buf.readBytes();
      values[11] = val;
    }

    return this;
  }
}
AllStructs.set(AccountPasswordS._id, AccountPasswordS);

/**
 * account.passwordSettings:account.PasswordSettings
 * #9a5c33e5:2589733861:-1705233435
 * flags:#
 * email:flags.0?string
 * secure_settings:flags.1?SecureSecretSettings
 */
export class AccountPasswordSettingsS {
  static _id = 0x9a5c33e5;

  _values = [0, "", new SecureSecretSettingsT()] as [
    number,
    string,
    SecureSecretSettingsT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_email(): string {
    return this._values[1];
  }
  set_email(val: string): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_email(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_secure_settings(): SecureSecretSettingsT {
    return this._values[2];
  }
  set_secure_settings(val: SecureSecretSettingsT): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_secure_settings(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountPasswordSettingsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_email()) {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_secure_settings()) {
      let val = values[2] as SecureSecretSettingsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AccountPasswordSettingsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_email()) {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    if (this.has_secure_settings()) {
      let val = values[2] as SecureSecretSettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(AccountPasswordSettingsS._id, AccountPasswordSettingsS);

/**
 * account.passwordInputSettings:account.PasswordInputSettings
 * #c23727c9:3258394569:-1036572727
 * flags:#
 * new_algo:flags.0?PasswordKdfAlgo
 * new_password_hash:flags.0?bytes
 * hint:flags.0?string
 * email:flags.1?string
 * new_secure_settings:flags.2?SecureSecretSettings
 */
export class AccountPasswordInputSettingsS {
  static _id = 0xc23727c9;

  _values = [
    0,
    new PasswordKdfAlgoT(),
    new Uint8Array(),
    "",
    "",
    new SecureSecretSettingsT()
  ] as [
    number,
    PasswordKdfAlgoT,
    Uint8Array,
    string,
    string,
    SecureSecretSettingsT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_new_algo(): PasswordKdfAlgoT {
    return this._values[1];
  }
  set_new_algo(val: PasswordKdfAlgoT): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_new_algo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_new_password_hash(): Uint8Array {
    return this._values[2];
  }
  set_new_password_hash(val: Uint8Array): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_new_password_hash(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_hint(): string {
    return this._values[3];
  }
  set_hint(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_hint(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_email(): string {
    return this._values[4];
  }
  set_email(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_email(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_new_secure_settings(): SecureSecretSettingsT {
    return this._values[5];
  }
  set_new_secure_settings(val: SecureSecretSettingsT): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_new_secure_settings(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountPasswordInputSettingsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_new_algo()) {
      let val = values[1] as PasswordKdfAlgoT;
      val._write(buf);
    }

    if (this.has_new_password_hash()) {
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    if (this.has_hint()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_email()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_new_secure_settings()) {
      let val = values[5] as SecureSecretSettingsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AccountPasswordInputSettingsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_new_algo()) {
      let val = values[1] as PasswordKdfAlgoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    if (this.has_new_password_hash()) {
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    if (this.has_hint()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_email()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_new_secure_settings()) {
      let val = values[5] as SecureSecretSettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(
  AccountPasswordInputSettingsS._id,
  AccountPasswordInputSettingsS
);

/**
 * auth.passwordRecovery:auth.PasswordRecovery
 * #137948a5:326715557:326715557
 * email_pattern:string
 */
export class AuthPasswordRecoveryS {
  static _id = 0x137948a5;

  _values = [""] as [string];

  get_email_pattern(): string {
    return this._values[0];
  }
  set_email_pattern(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthPasswordRecoveryS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthPasswordRecoveryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(AuthPasswordRecoveryS._id, AuthPasswordRecoveryS);

/**
 * inputMediaVenue:InputMedia
 * #c13d1c11:3242007569:-1052959727
 * geo_point:InputGeoPoint
 * title:string
 * address:string
 * provider:string
 * venue_id:string
 * venue_type:string
 */
export class InputMediaVenueS {
  static _id = 0xc13d1c11;

  _values = [new InputGeoPointT(), "", "", "", "", ""] as [
    InputGeoPointT,
    string,
    string,
    string,
    string,
    string
  ];

  get_geo_point(): InputGeoPointT {
    return this._values[0];
  }
  set_geo_point(val: InputGeoPointT): this {
    this._values[0] = val;

    return this;
  }

  get_title(): string {
    return this._values[1];
  }
  set_title(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_address(): string {
    return this._values[2];
  }
  set_address(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_provider(): string {
    return this._values[3];
  }
  set_provider(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_venue_id(): string {
    return this._values[4];
  }
  set_venue_id(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_venue_type(): string {
    return this._values[5];
  }
  set_venue_type(val: string): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaVenueS._id);

    let values = this._values;

    {
      let val = values[0] as InputGeoPointT;
      val._write(buf);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaVenueS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputGeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaVenueS._id, InputMediaVenueS);

/**
 * messageMediaVenue:MessageMedia
 * #2ec0533f:784356159:784356159
 * geo:GeoPoint
 * title:string
 * address:string
 * provider:string
 * venue_id:string
 * venue_type:string
 */
export class MessageMediaVenueS {
  static _id = 0x2ec0533f;

  _values = [new GeoPointT(), "", "", "", "", ""] as [
    GeoPointT,
    string,
    string,
    string,
    string,
    string
  ];

  get_geo(): GeoPointT {
    return this._values[0];
  }
  set_geo(val: GeoPointT): this {
    this._values[0] = val;

    return this;
  }

  get_title(): string {
    return this._values[1];
  }
  set_title(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_address(): string {
    return this._values[2];
  }
  set_address(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_provider(): string {
    return this._values[3];
  }
  set_provider(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_venue_id(): string {
    return this._values[4];
  }
  set_venue_id(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_venue_type(): string {
    return this._values[5];
  }
  set_venue_type(val: string): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaVenueS._id);

    let values = this._values;

    {
      let val = values[0] as GeoPointT;
      val._write(buf);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaVenueS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as GeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaVenueS._id, MessageMediaVenueS);

/**
 * receivedNotifyMessage:ReceivedNotifyMessage
 * #a384b779:2743383929:-1551583367
 * id:int
 * flags:int
 */
export class ReceivedNotifyMessageS {
  static _id = 0xa384b779;

  _values = [0, 0] as [number, number];

  get_id(): number {
    return this._values[0];
  }
  set_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_flags(): number {
    return this._values[1];
  }
  set_flags(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReceivedNotifyMessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== ReceivedNotifyMessageS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(ReceivedNotifyMessageS._id, ReceivedNotifyMessageS);

/**
 * chatInviteEmpty:ExportedChatInvite
 * #69df3769:1776236393:1776236393
 *
 */
export class ChatInviteEmptyS {
  static _id = 0x69df3769;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatInviteEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatInviteEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ChatInviteEmptyS._id, ChatInviteEmptyS);

/**
 * chatInviteExported:ExportedChatInvite
 * #fc2e05bc:4230874556:-64092740
 * link:string
 */
export class ChatInviteExportedS {
  static _id = 0xfc2e05bc;

  _values = [""] as [string];

  get_link(): string {
    return this._values[0];
  }
  set_link(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatInviteExportedS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatInviteExportedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(ChatInviteExportedS._id, ChatInviteExportedS);

/**
 * chatInviteAlready:ChatInvite
 * #5a686d7c:1516793212:1516793212
 * chat:Chat
 */
export class ChatInviteAlreadyS {
  static _id = 0x5a686d7c;

  _values = [new ChatT()] as [ChatT];

  get_chat(): ChatT {
    return this._values[0];
  }
  set_chat(val: ChatT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatInviteAlreadyS._id);

    let values = this._values;

    {
      let val = values[0] as ChatT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChatInviteAlreadyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ChatT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(ChatInviteAlreadyS._id, ChatInviteAlreadyS);

/**
 * chatInvite:ChatInvite
 * #dfc2f58e:3754096014:-540871282
 * flags:#
 * channel:flags.0?true
 * broadcast:flags.1?true
 * public:flags.2?true
 * megagroup:flags.3?true
 * title:string
 * photo:Photo
 * participants_count:int
 * participants:flags.4?Vector<User>
 */
export class ChatInviteS {
  static _id = 0xdfc2f58e;

  _values = [0, true, true, true, true, "", new PhotoT(), 0, []] as [
    number,
    true,
    true,
    true,
    true,
    string,
    PhotoT,
    number,
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_channel(): true {
    return this._values[1];
  }
  set_channel(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_channel(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_broadcast(): true {
    return this._values[2];
  }
  set_broadcast(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_broadcast(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_public(): true {
    return this._values[3];
  }
  set_public(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_public(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_megagroup(): true {
    return this._values[4];
  }
  set_megagroup(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_megagroup(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_title(): string {
    return this._values[5];
  }
  set_title(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_photo(): PhotoT {
    return this._values[6];
  }
  set_photo(val: PhotoT): this {
    this._values[6] = val;

    return this;
  }

  get_participants_count(): number {
    return this._values[7];
  }
  set_participants_count(val: number): this {
    this._values[7] = val;

    return this;
  }

  get_participants(): UserT[] {
    return this._values[8];
  }
  set_participants(val: UserT[]): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_participants(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatInviteS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_channel()) {
      let val = values[1] as true;
    }

    if (this.has_broadcast()) {
      let val = values[2] as true;
    }

    if (this.has_public()) {
      let val = values[3] as true;
    }

    if (this.has_megagroup()) {
      let val = values[4] as true;
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as PhotoT;
      val._write(buf);
    }

    {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    if (this.has_participants()) {
      let val = values[8] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ChatInviteS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_channel()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_broadcast()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_public()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_megagroup()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    if (this.has_participants()) {
      let val = values[8] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(ChatInviteS._id, ChatInviteS);

/**
 * messageActionChatJoinedByLink:MessageAction
 * #f89cf5e8:4171036136:-123931160
 * inviter_id:int
 */
export class MessageActionChatJoinedByLinkS {
  static _id = 0xf89cf5e8;

  _values = [0] as [number];

  get_inviter_id(): number {
    return this._values[0];
  }
  set_inviter_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatJoinedByLinkS._id);

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
      if (id !== MessageActionChatJoinedByLinkS._id) panic(id.toString(16));
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
AllStructs.set(
  MessageActionChatJoinedByLinkS._id,
  MessageActionChatJoinedByLinkS
);

/**
 * updateReadMessagesContents:Update
 * #68c13933:1757493555:1757493555
 * messages:Vector<int>
 * pts:int
 * pts_count:int
 */
export class UpdateReadMessagesContentsS {
  static _id = 0x68c13933;

  _values = [[], 0, 0] as [number[], number, number];

  get_messages(): number[] {
    return this._values[0];
  }
  set_messages(val: number[]): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateReadMessagesContentsS._id);

    let values = this._values;

    {
      let val = values[0] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
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
      if (id !== UpdateReadMessagesContentsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
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
AllStructs.set(UpdateReadMessagesContentsS._id, UpdateReadMessagesContentsS);

/**
 * inputStickerSetEmpty:InputStickerSet
 * #ffb62b95:4290128789:-4838507
 *
 */
export class InputStickerSetEmptyS {
  static _id = 0xffb62b95;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputStickerSetEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputStickerSetEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputStickerSetEmptyS._id, InputStickerSetEmptyS);

/**
 * inputStickerSetID:InputStickerSet
 * #9de7a269:2649203305:-1645763991
 * id:long
 * access_hash:long
 */
export class InputStickerSetIdS {
  static _id = 0x9de7a269;

  _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputStickerSetIdS._id);

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
      if (id !== InputStickerSetIdS._id) panic(id.toString(16));
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
AllStructs.set(InputStickerSetIdS._id, InputStickerSetIdS);

/**
 * inputStickerSetShortName:InputStickerSet
 * #861cc8a0:2250033312:-2044933984
 * short_name:string
 */
export class InputStickerSetShortNameS {
  static _id = 0x861cc8a0;

  _values = [""] as [string];

  get_short_name(): string {
    return this._values[0];
  }
  set_short_name(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputStickerSetShortNameS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputStickerSetShortNameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputStickerSetShortNameS._id, InputStickerSetShortNameS);

/**
 * stickerSet:StickerSet
 * #eeb46f27:4004802343:-290164953
 * flags:#
 * archived:flags.1?true
 * official:flags.2?true
 * masks:flags.3?true
 * animated:flags.5?true
 * installed_date:flags.0?int
 * id:long
 * access_hash:long
 * title:string
 * short_name:string
 * thumb:flags.4?PhotoSize
 * thumb_dc_id:flags.4?int
 * count:int
 * hash:int
 */
export class StickerSetS {
  static _id = 0xeeb46f27;

  _values = [
    0,
    true,
    true,
    true,
    true,
    0,
    [0, 0],
    [0, 0],
    "",
    "",
    new PhotoSizeT(),
    0,
    0,
    0
  ] as [
    number,
    true,
    true,
    true,
    true,
    number,
    ProtoLong,
    ProtoLong,
    string,
    string,
    PhotoSizeT,
    number,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_archived(): true {
    return this._values[1];
  }
  set_archived(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_archived(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_official(): true {
    return this._values[2];
  }
  set_official(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_official(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_masks(): true {
    return this._values[3];
  }
  set_masks(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_masks(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_animated(): true {
    return this._values[4];
  }
  set_animated(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_animated(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_installed_date(): number {
    return this._values[5];
  }
  set_installed_date(val: number): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_installed_date(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_id(): ProtoLong {
    return this._values[6];
  }
  set_id(val: ProtoLong): this {
    this._values[6] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[7];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[7] = val;

    return this;
  }

  get_title(): string {
    return this._values[8];
  }
  set_title(val: string): this {
    this._values[8] = val;

    return this;
  }

  get_short_name(): string {
    return this._values[9];
  }
  set_short_name(val: string): this {
    this._values[9] = val;

    return this;
  }

  get_thumb(): PhotoSizeT {
    return this._values[10];
  }
  set_thumb(val: PhotoSizeT): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_thumb(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_thumb_dc_id(): number {
    return this._values[11];
  }
  set_thumb_dc_id(val: number): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_thumb_dc_id(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_count(): number {
    return this._values[12];
  }
  set_count(val: number): this {
    this._values[12] = val;

    return this;
  }

  get_hash(): number {
    return this._values[13];
  }
  set_hash(val: number): this {
    this._values[13] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StickerSetS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_archived()) {
      let val = values[1] as true;
    }

    if (this.has_official()) {
      let val = values[2] as true;
    }

    if (this.has_masks()) {
      let val = values[3] as true;
    }

    if (this.has_animated()) {
      let val = values[4] as true;
    }

    if (this.has_installed_date()) {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[7] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[8] as string;
      buf.writeString(val);
    }

    {
      let val = values[9] as string;
      buf.writeString(val);
    }

    if (this.has_thumb()) {
      let val = values[10] as PhotoSizeT;
      val._write(buf);
    }

    if (this.has_thumb_dc_id()) {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StickerSetS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_archived()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_official()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_masks()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_animated()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_installed_date()) {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as ProtoLong;
      val = buf.readLong();
      values[6] = val;
    }

    {
      let val = values[7] as ProtoLong;
      val = buf.readLong();
      values[7] = val;
    }

    {
      let val = values[8] as string;
      val = buf.readString();
      values[8] = val;
    }

    {
      let val = values[9] as string;
      val = buf.readString();
      values[9] = val;
    }

    if (this.has_thumb()) {
      let val = values[10] as PhotoSizeT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[10] = val;
    }

    if (this.has_thumb_dc_id()) {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    return this;
  }
}
AllStructs.set(StickerSetS._id, StickerSetS);

/**
 * messages.stickerSet:messages.StickerSet
 * #b60a24a6:3054118054:-1240849242
 * set:StickerSet
 * packs:Vector<StickerPack>
 * documents:Vector<Document>
 */
export class MessagesStickerSetS {
  static _id = 0xb60a24a6;

  _values = [new StickerSetT(), [], []] as [
    StickerSetT,
    StickerPackT[],
    DocumentT[]
  ];

  get_set(): StickerSetT {
    return this._values[0];
  }
  set_set(val: StickerSetT): this {
    this._values[0] = val;

    return this;
  }

  get_packs(): StickerPackT[] {
    return this._values[1];
  }
  set_packs(val: StickerPackT[]): this {
    this._values[1] = val;

    return this;
  }

  get_documents(): DocumentT[] {
    return this._values[2];
  }
  set_documents(val: DocumentT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesStickerSetS._id);

    let values = this._values;

    {
      let val = values[0] as StickerSetT;
      val._write(buf);
    }

    {
      let val = values[1] as StickerPackT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as DocumentT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesStickerSetS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as StickerSetT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as StickerPackT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: StickerPackT = new StickerPackT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as DocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentT = new DocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesStickerSetS._id, MessagesStickerSetS);

/**
 * user:User
 * #938458c1:2474924225:-1820043071
 * flags:#
 * self:flags.10?true
 * contact:flags.11?true
 * mutual_contact:flags.12?true
 * deleted:flags.13?true
 * bot:flags.14?true
 * bot_chat_history:flags.15?true
 * bot_nochats:flags.16?true
 * verified:flags.17?true
 * restricted:flags.18?true
 * min:flags.20?true
 * bot_inline_geo:flags.21?true
 * support:flags.23?true
 * scam:flags.24?true
 * id:int
 * access_hash:flags.0?long
 * first_name:flags.1?string
 * last_name:flags.2?string
 * username:flags.3?string
 * phone:flags.4?string
 * photo:flags.5?UserProfilePhoto
 * status:flags.6?UserStatus
 * bot_info_version:flags.14?int
 * restriction_reason:flags.18?Vector<RestrictionReason>
 * bot_inline_placeholder:flags.19?string
 * lang_code:flags.22?string
 */
export class UserS {
  static _id = 0x938458c1;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    0,
    [0, 0],
    "",
    "",
    "",
    "",
    new UserProfilePhotoT(),
    new UserStatusT(),
    0,
    [],
    "",
    ""
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    number,
    ProtoLong,
    string,
    string,
    string,
    string,
    UserProfilePhotoT,
    UserStatusT,
    number,
    RestrictionReasonT[],
    string,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_self(): true {
    return this._values[1];
  }
  set_self(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_self(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  get_contact(): true {
    return this._values[2];
  }
  set_contact(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_contact(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_mutual_contact(): true {
    return this._values[3];
  }
  set_mutual_contact(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 12));

    return this;
  }

  has_mutual_contact(): boolean {
    return !!(this.get_flags() & (1 << 12));
  }

  get_deleted(): true {
    return this._values[4];
  }
  set_deleted(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_deleted(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_bot(): true {
    return this._values[5];
  }
  set_bot(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_bot(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_bot_chat_history(): true {
    return this._values[6];
  }
  set_bot_chat_history(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 15));

    return this;
  }

  has_bot_chat_history(): boolean {
    return !!(this.get_flags() & (1 << 15));
  }

  get_bot_nochats(): true {
    return this._values[7];
  }
  set_bot_nochats(val: true): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 16));

    return this;
  }

  has_bot_nochats(): boolean {
    return !!(this.get_flags() & (1 << 16));
  }

  get_verified(): true {
    return this._values[8];
  }
  set_verified(val: true): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 17));

    return this;
  }

  has_verified(): boolean {
    return !!(this.get_flags() & (1 << 17));
  }

  get_restricted(): true {
    return this._values[9];
  }
  set_restricted(val: true): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 18));

    return this;
  }

  has_restricted(): boolean {
    return !!(this.get_flags() & (1 << 18));
  }

  get_min(): true {
    return this._values[10];
  }
  set_min(val: true): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 20));

    return this;
  }

  has_min(): boolean {
    return !!(this.get_flags() & (1 << 20));
  }

  get_bot_inline_geo(): true {
    return this._values[11];
  }
  set_bot_inline_geo(val: true): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 21));

    return this;
  }

  has_bot_inline_geo(): boolean {
    return !!(this.get_flags() & (1 << 21));
  }

  get_support(): true {
    return this._values[12];
  }
  set_support(val: true): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 23));

    return this;
  }

  has_support(): boolean {
    return !!(this.get_flags() & (1 << 23));
  }

  get_scam(): true {
    return this._values[13];
  }
  set_scam(val: true): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 24));

    return this;
  }

  has_scam(): boolean {
    return !!(this.get_flags() & (1 << 24));
  }

  get_id(): number {
    return this._values[14];
  }
  set_id(val: number): this {
    this._values[14] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[15];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[15] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_access_hash(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_first_name(): string {
    return this._values[16];
  }
  set_first_name(val: string): this {
    this._values[16] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_first_name(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_last_name(): string {
    return this._values[17];
  }
  set_last_name(val: string): this {
    this._values[17] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_last_name(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_username(): string {
    return this._values[18];
  }
  set_username(val: string): this {
    this._values[18] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_username(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_phone(): string {
    return this._values[19];
  }
  set_phone(val: string): this {
    this._values[19] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_phone(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_photo(): UserProfilePhotoT {
    return this._values[20];
  }
  set_photo(val: UserProfilePhotoT): this {
    this._values[20] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_photo(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_status(): UserStatusT {
    return this._values[21];
  }
  set_status(val: UserStatusT): this {
    this._values[21] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_status(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_bot_info_version(): number {
    return this._values[22];
  }
  set_bot_info_version(val: number): this {
    this._values[22] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_bot_info_version(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_restriction_reason(): RestrictionReasonT[] {
    return this._values[23];
  }
  set_restriction_reason(val: RestrictionReasonT[]): this {
    this._values[23] = val;

    this.set_flags(this.get_flags() | (1 << 18));

    return this;
  }

  has_restriction_reason(): boolean {
    return !!(this.get_flags() & (1 << 18));
  }

  get_bot_inline_placeholder(): string {
    return this._values[24];
  }
  set_bot_inline_placeholder(val: string): this {
    this._values[24] = val;

    this.set_flags(this.get_flags() | (1 << 19));

    return this;
  }

  has_bot_inline_placeholder(): boolean {
    return !!(this.get_flags() & (1 << 19));
  }

  get_lang_code(): string {
    return this._values[25];
  }
  set_lang_code(val: string): this {
    this._values[25] = val;

    this.set_flags(this.get_flags() | (1 << 22));

    return this;
  }

  has_lang_code(): boolean {
    return !!(this.get_flags() & (1 << 22));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UserS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_self()) {
      let val = values[1] as true;
    }

    if (this.has_contact()) {
      let val = values[2] as true;
    }

    if (this.has_mutual_contact()) {
      let val = values[3] as true;
    }

    if (this.has_deleted()) {
      let val = values[4] as true;
    }

    if (this.has_bot()) {
      let val = values[5] as true;
    }

    if (this.has_bot_chat_history()) {
      let val = values[6] as true;
    }

    if (this.has_bot_nochats()) {
      let val = values[7] as true;
    }

    if (this.has_verified()) {
      let val = values[8] as true;
    }

    if (this.has_restricted()) {
      let val = values[9] as true;
    }

    if (this.has_min()) {
      let val = values[10] as true;
    }

    if (this.has_bot_inline_geo()) {
      let val = values[11] as true;
    }

    if (this.has_support()) {
      let val = values[12] as true;
    }

    if (this.has_scam()) {
      let val = values[13] as true;
    }

    {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    if (this.has_access_hash()) {
      let val = values[15] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_first_name()) {
      let val = values[16] as string;
      buf.writeString(val);
    }

    if (this.has_last_name()) {
      let val = values[17] as string;
      buf.writeString(val);
    }

    if (this.has_username()) {
      let val = values[18] as string;
      buf.writeString(val);
    }

    if (this.has_phone()) {
      let val = values[19] as string;
      buf.writeString(val);
    }

    if (this.has_photo()) {
      let val = values[20] as UserProfilePhotoT;
      val._write(buf);
    }

    if (this.has_status()) {
      let val = values[21] as UserStatusT;
      val._write(buf);
    }

    if (this.has_bot_info_version()) {
      let val = values[22] as number;
      buf.writeInt(val);
    }

    if (this.has_restriction_reason()) {
      let val = values[23] as RestrictionReasonT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_bot_inline_placeholder()) {
      let val = values[24] as string;
      buf.writeString(val);
    }

    if (this.has_lang_code()) {
      let val = values[25] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UserS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_self()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_contact()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_mutual_contact()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_deleted()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_bot()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_bot_chat_history()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    if (this.has_bot_nochats()) {
      let val = values[7] as true;
      val = true;
      values[7] = val;
    }

    if (this.has_verified()) {
      let val = values[8] as true;
      val = true;
      values[8] = val;
    }

    if (this.has_restricted()) {
      let val = values[9] as true;
      val = true;
      values[9] = val;
    }

    if (this.has_min()) {
      let val = values[10] as true;
      val = true;
      values[10] = val;
    }

    if (this.has_bot_inline_geo()) {
      let val = values[11] as true;
      val = true;
      values[11] = val;
    }

    if (this.has_support()) {
      let val = values[12] as true;
      val = true;
      values[12] = val;
    }

    if (this.has_scam()) {
      let val = values[13] as true;
      val = true;
      values[13] = val;
    }

    {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    if (this.has_access_hash()) {
      let val = values[15] as ProtoLong;
      val = buf.readLong();
      values[15] = val;
    }

    if (this.has_first_name()) {
      let val = values[16] as string;
      val = buf.readString();
      values[16] = val;
    }

    if (this.has_last_name()) {
      let val = values[17] as string;
      val = buf.readString();
      values[17] = val;
    }

    if (this.has_username()) {
      let val = values[18] as string;
      val = buf.readString();
      values[18] = val;
    }

    if (this.has_phone()) {
      let val = values[19] as string;
      val = buf.readString();
      values[19] = val;
    }

    if (this.has_photo()) {
      let val = values[20] as UserProfilePhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[20] = val;
    }

    if (this.has_status()) {
      let val = values[21] as UserStatusT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[21] = val;
    }

    if (this.has_bot_info_version()) {
      let val = values[22] as number;
      val = buf.readInt();
      values[22] = val;
    }

    if (this.has_restriction_reason()) {
      let val = values[23] as RestrictionReasonT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: RestrictionReasonT = new RestrictionReasonT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[23] = val;
    }

    if (this.has_bot_inline_placeholder()) {
      let val = values[24] as string;
      val = buf.readString();
      values[24] = val;
    }

    if (this.has_lang_code()) {
      let val = values[25] as string;
      val = buf.readString();
      values[25] = val;
    }

    return this;
  }
}
AllStructs.set(UserS._id, UserS);

/**
 * botCommand:BotCommand
 * #c27ac8c7:3262826695:-1032140601
 * command:string
 * description:string
 */
export class BotCommandS {
  static _id = 0xc27ac8c7;

  _values = ["", ""] as [string, string];

  get_command(): string {
    return this._values[0];
  }
  set_command(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_description(): string {
    return this._values[1];
  }
  set_description(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotCommandS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== BotCommandS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(BotCommandS._id, BotCommandS);

/**
 * botInfo:BotInfo
 * #98e81d3a:2565348666:-1729618630
 * user_id:int
 * description:string
 * commands:Vector<BotCommand>
 */
export class BotInfoS {
  static _id = 0x98e81d3a;

  _values = [0, "", []] as [number, string, BotCommandT[]];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_description(): string {
    return this._values[1];
  }
  set_description(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_commands(): BotCommandT[] {
    return this._values[2];
  }
  set_commands(val: BotCommandT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInfoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as BotCommandT[];

      buf.writeInt(481674261);
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
      if (id !== BotInfoS._id) panic(id.toString(16));
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

    {
      let val = values[2] as BotCommandT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: BotCommandT = new BotCommandT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(BotInfoS._id, BotInfoS);

/**
 * keyboardButton:KeyboardButton
 * #a2fa4880:2734311552:-1560655744
 * text:string
 */
export class KeyboardButtonS {
  static _id = 0xa2fa4880;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== KeyboardButtonS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(KeyboardButtonS._id, KeyboardButtonS);

/**
 * keyboardButtonRow:KeyboardButtonRow
 * #77608b83:2002815875:2002815875
 * buttons:Vector<KeyboardButton>
 */
export class KeyboardButtonRowS {
  static _id = 0x77608b83;

  _values = [[]] as [KeyboardButtonT[]];

  get_buttons(): KeyboardButtonT[] {
    return this._values[0];
  }
  set_buttons(val: KeyboardButtonT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonRowS._id);

    let values = this._values;

    {
      let val = values[0] as KeyboardButtonT[];

      buf.writeInt(481674261);
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
      if (id !== KeyboardButtonRowS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as KeyboardButtonT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: KeyboardButtonT = new KeyboardButtonT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(KeyboardButtonRowS._id, KeyboardButtonRowS);

/**
 * replyKeyboardHide:ReplyMarkup
 * #a03e5b85:2688441221:-1606526075
 * flags:#
 * selective:flags.2?true
 */
export class ReplyKeyboardHideS {
  static _id = 0xa03e5b85;

  _values = [0, true] as [number, true];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_selective(): true {
    return this._values[1];
  }
  set_selective(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_selective(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReplyKeyboardHideS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_selective()) {
      let val = values[1] as true;
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ReplyKeyboardHideS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_selective()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(ReplyKeyboardHideS._id, ReplyKeyboardHideS);

/**
 * replyKeyboardForceReply:ReplyMarkup
 * #f4108aa0:4094724768:-200242528
 * flags:#
 * single_use:flags.1?true
 * selective:flags.2?true
 */
export class ReplyKeyboardForceReplyS {
  static _id = 0xf4108aa0;

  _values = [0, true, true] as [number, true, true];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_single_use(): true {
    return this._values[1];
  }
  set_single_use(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_single_use(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_selective(): true {
    return this._values[2];
  }
  set_selective(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_selective(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReplyKeyboardForceReplyS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_single_use()) {
      let val = values[1] as true;
    }

    if (this.has_selective()) {
      let val = values[2] as true;
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ReplyKeyboardForceReplyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_single_use()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_selective()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ReplyKeyboardForceReplyS._id, ReplyKeyboardForceReplyS);

/**
 * replyKeyboardMarkup:ReplyMarkup
 * #3502758c:889353612:889353612
 * flags:#
 * resize:flags.0?true
 * single_use:flags.1?true
 * selective:flags.2?true
 * rows:Vector<KeyboardButtonRow>
 */
export class ReplyKeyboardMarkupS {
  static _id = 0x3502758c;

  _values = [0, true, true, true, []] as [
    number,
    true,
    true,
    true,
    KeyboardButtonRowT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_resize(): true {
    return this._values[1];
  }
  set_resize(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_resize(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_single_use(): true {
    return this._values[2];
  }
  set_single_use(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_single_use(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_selective(): true {
    return this._values[3];
  }
  set_selective(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_selective(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_rows(): KeyboardButtonRowT[] {
    return this._values[4];
  }
  set_rows(val: KeyboardButtonRowT[]): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReplyKeyboardMarkupS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_resize()) {
      let val = values[1] as true;
    }

    if (this.has_single_use()) {
      let val = values[2] as true;
    }

    if (this.has_selective()) {
      let val = values[3] as true;
    }

    {
      let val = values[4] as KeyboardButtonRowT[];

      buf.writeInt(481674261);
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
      if (id !== ReplyKeyboardMarkupS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_resize()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_single_use()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_selective()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    {
      let val = values[4] as KeyboardButtonRowT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: KeyboardButtonRowT = new KeyboardButtonRowT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(ReplyKeyboardMarkupS._id, ReplyKeyboardMarkupS);

/**
 * inputPeerUser:InputPeer
 * #7b8e7de6:2072935910:2072935910
 * user_id:int
 * access_hash:long
 */
export class InputPeerUserS {
  static _id = 0x7b8e7de6;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPeerUserS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== InputPeerUserS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(InputPeerUserS._id, InputPeerUserS);

/**
 * inputUser:InputUser
 * #d8292816:3626575894:-668391402
 * user_id:int
 * access_hash:long
 */
export class InputUserS {
  static _id = 0xd8292816;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputUserS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== InputUserS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(InputUserS._id, InputUserS);

/**
 * messageEntityUnknown:MessageEntity
 * #bb92ba95:3146955413:-1148011883
 * offset:int
 * length:int
 */
export class MessageEntityUnknownS {
  static _id = 0xbb92ba95;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityUnknownS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityUnknownS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityUnknownS._id, MessageEntityUnknownS);

/**
 * messageEntityMention:MessageEntity
 * #fa04579d:4194588573:-100378723
 * offset:int
 * length:int
 */
export class MessageEntityMentionS {
  static _id = 0xfa04579d;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityMentionS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityMentionS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityMentionS._id, MessageEntityMentionS);

/**
 * messageEntityHashtag:MessageEntity
 * #6f635b0d:1868782349:1868782349
 * offset:int
 * length:int
 */
export class MessageEntityHashtagS {
  static _id = 0x6f635b0d;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityHashtagS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityHashtagS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityHashtagS._id, MessageEntityHashtagS);

/**
 * messageEntityBotCommand:MessageEntity
 * #6cef8ac7:1827637959:1827637959
 * offset:int
 * length:int
 */
export class MessageEntityBotCommandS {
  static _id = 0x6cef8ac7;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityBotCommandS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityBotCommandS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityBotCommandS._id, MessageEntityBotCommandS);

/**
 * messageEntityUrl:MessageEntity
 * #6ed02538:1859134776:1859134776
 * offset:int
 * length:int
 */
export class MessageEntityUrlS {
  static _id = 0x6ed02538;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityUrlS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityUrlS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityUrlS._id, MessageEntityUrlS);

/**
 * messageEntityEmail:MessageEntity
 * #64e475c2:1692693954:1692693954
 * offset:int
 * length:int
 */
export class MessageEntityEmailS {
  static _id = 0x64e475c2;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityEmailS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityEmailS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityEmailS._id, MessageEntityEmailS);

/**
 * messageEntityBold:MessageEntity
 * #bd610bc9:3177253833:-1117713463
 * offset:int
 * length:int
 */
export class MessageEntityBoldS {
  static _id = 0xbd610bc9;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityBoldS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityBoldS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityBoldS._id, MessageEntityBoldS);

/**
 * messageEntityItalic:MessageEntity
 * #826f8b60:2188348256:-2106619040
 * offset:int
 * length:int
 */
export class MessageEntityItalicS {
  static _id = 0x826f8b60;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityItalicS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityItalicS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityItalicS._id, MessageEntityItalicS);

/**
 * messageEntityCode:MessageEntity
 * #28a20571:681706865:681706865
 * offset:int
 * length:int
 */
export class MessageEntityCodeS {
  static _id = 0x28a20571;

  _values = [0, 0] as [number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityCodeS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageEntityCodeS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageEntityCodeS._id, MessageEntityCodeS);

/**
 * messageEntityPre:MessageEntity
 * #73924be0:1938967520:1938967520
 * offset:int
 * length:int
 * language:string
 */
export class MessageEntityPreS {
  static _id = 0x73924be0;

  _values = [0, 0, ""] as [number, number, string];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_language(): string {
    return this._values[2];
  }
  set_language(val: string): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityPreS._id);

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
      let val = values[2] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageEntityPreS._id) panic(id.toString(16));
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
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessageEntityPreS._id, MessageEntityPreS);

/**
 * messageEntityTextUrl:MessageEntity
 * #76a6d327:1990644519:1990644519
 * offset:int
 * length:int
 * url:string
 */
export class MessageEntityTextUrlS {
  static _id = 0x76a6d327;

  _values = [0, 0, ""] as [number, number, string];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_url(): string {
    return this._values[2];
  }
  set_url(val: string): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityTextUrlS._id);

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
      let val = values[2] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageEntityTextUrlS._id) panic(id.toString(16));
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
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessageEntityTextUrlS._id, MessageEntityTextUrlS);

/**
 * updateShortSentMessage:Updates
 * #11f1331c:301019932:301019932
 * flags:#
 * out:flags.1?true
 * id:int
 * pts:int
 * pts_count:int
 * date:int
 * media:flags.9?MessageMedia
 * entities:flags.7?Vector<MessageEntity>
 */
export class UpdateShortSentMessageS {
  static _id = 0x11f1331c;

  _values = [0, true, 0, 0, 0, 0, new MessageMediaT(), []] as [
    number,
    true,
    number,
    number,
    number,
    number,
    MessageMediaT,
    MessageEntityT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_out(): true {
    return this._values[1];
  }
  set_out(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_out(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_id(): number {
    return this._values[2];
  }
  set_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_pts(): number {
    return this._values[3];
  }
  set_pts(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[4];
  }
  set_pts_count(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_date(): number {
    return this._values[5];
  }
  set_date(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_media(): MessageMediaT {
    return this._values[6];
  }
  set_media(val: MessageMediaT): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_media(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_entities(): MessageEntityT[] {
    return this._values[7];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateShortSentMessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_out()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    if (this.has_media()) {
      let val = values[6] as MessageMediaT;
      val._write(buf);
    }

    if (this.has_entities()) {
      let val = values[7] as MessageEntityT[];

      buf.writeInt(481674261);
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
      if (id !== UpdateShortSentMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_out()) {
      let val = values[1] as true;
      val = true;
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

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    if (this.has_media()) {
      let val = values[6] as MessageMediaT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    if (this.has_entities()) {
      let val = values[7] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateShortSentMessageS._id, UpdateShortSentMessageS);

/**
 * inputChannelEmpty:InputChannel
 * #ee8c1e86:4002160262:-292807034
 *
 */
export class InputChannelEmptyS {
  static _id = 0xee8c1e86;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputChannelEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputChannelEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputChannelEmptyS._id, InputChannelEmptyS);

/**
 * inputChannel:InputChannel
 * #afeb712e:2951442734:-1343524562
 * channel_id:int
 * access_hash:long
 */
export class InputChannelS {
  static _id = 0xafeb712e;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputChannelS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== InputChannelS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(InputChannelS._id, InputChannelS);

/**
 * peerChannel:Peer
 * #bddde532:3185435954:-1109531342
 * channel_id:int
 */
export class PeerChannelS {
  static _id = 0xbddde532;

  _values = [0] as [number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PeerChannelS._id);

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
      if (id !== PeerChannelS._id) panic(id.toString(16));
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
AllStructs.set(PeerChannelS._id, PeerChannelS);

/**
 * inputPeerChannel:InputPeer
 * #20adaef8:548253432:548253432
 * channel_id:int
 * access_hash:long
 */
export class InputPeerChannelS {
  static _id = 0x20adaef8;

  _values = [0, [0, 0]] as [number, ProtoLong];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPeerChannelS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== InputPeerChannelS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(InputPeerChannelS._id, InputPeerChannelS);

/**
 * channel:Chat
 * #d31a961e:3541734942:-753232354
 * flags:#
 * creator:flags.0?true
 * left:flags.2?true
 * broadcast:flags.5?true
 * verified:flags.7?true
 * megagroup:flags.8?true
 * restricted:flags.9?true
 * signatures:flags.11?true
 * min:flags.12?true
 * scam:flags.19?true
 * has_link:flags.20?true
 * has_geo:flags.21?true
 * slowmode_enabled:flags.22?true
 * id:int
 * access_hash:flags.13?long
 * title:string
 * username:flags.6?string
 * photo:ChatPhoto
 * date:int
 * version:int
 * restriction_reason:flags.9?Vector<RestrictionReason>
 * admin_rights:flags.14?ChatAdminRights
 * banned_rights:flags.15?ChatBannedRights
 * default_banned_rights:flags.18?ChatBannedRights
 * participants_count:flags.17?int
 */
export class ChannelS {
  static _id = 0xd31a961e;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    0,
    [0, 0],
    "",
    "",
    new ChatPhotoT(),
    0,
    0,
    [],
    new ChatAdminRightsT(),
    new ChatBannedRightsT(),
    new ChatBannedRightsT(),
    0
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    number,
    ProtoLong,
    string,
    string,
    ChatPhotoT,
    number,
    number,
    RestrictionReasonT[],
    ChatAdminRightsT,
    ChatBannedRightsT,
    ChatBannedRightsT,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_creator(): true {
    return this._values[1];
  }
  set_creator(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_creator(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_left(): true {
    return this._values[2];
  }
  set_left(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_left(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_broadcast(): true {
    return this._values[3];
  }
  set_broadcast(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_broadcast(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_verified(): true {
    return this._values[4];
  }
  set_verified(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_verified(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_megagroup(): true {
    return this._values[5];
  }
  set_megagroup(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_megagroup(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_restricted(): true {
    return this._values[6];
  }
  set_restricted(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_restricted(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_signatures(): true {
    return this._values[7];
  }
  set_signatures(val: true): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_signatures(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_min(): true {
    return this._values[8];
  }
  set_min(val: true): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 12));

    return this;
  }

  has_min(): boolean {
    return !!(this.get_flags() & (1 << 12));
  }

  get_scam(): true {
    return this._values[9];
  }
  set_scam(val: true): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 19));

    return this;
  }

  has_scam(): boolean {
    return !!(this.get_flags() & (1 << 19));
  }

  get_has_link(): true {
    return this._values[10];
  }
  set_has_link(val: true): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 20));

    return this;
  }

  has_has_link(): boolean {
    return !!(this.get_flags() & (1 << 20));
  }

  get_has_geo(): true {
    return this._values[11];
  }
  set_has_geo(val: true): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 21));

    return this;
  }

  has_has_geo(): boolean {
    return !!(this.get_flags() & (1 << 21));
  }

  get_slowmode_enabled(): true {
    return this._values[12];
  }
  set_slowmode_enabled(val: true): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 22));

    return this;
  }

  has_slowmode_enabled(): boolean {
    return !!(this.get_flags() & (1 << 22));
  }

  get_id(): number {
    return this._values[13];
  }
  set_id(val: number): this {
    this._values[13] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[14];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_access_hash(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_title(): string {
    return this._values[15];
  }
  set_title(val: string): this {
    this._values[15] = val;

    return this;
  }

  get_username(): string {
    return this._values[16];
  }
  set_username(val: string): this {
    this._values[16] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_username(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_photo(): ChatPhotoT {
    return this._values[17];
  }
  set_photo(val: ChatPhotoT): this {
    this._values[17] = val;

    return this;
  }

  get_date(): number {
    return this._values[18];
  }
  set_date(val: number): this {
    this._values[18] = val;

    return this;
  }

  get_version(): number {
    return this._values[19];
  }
  set_version(val: number): this {
    this._values[19] = val;

    return this;
  }

  get_restriction_reason(): RestrictionReasonT[] {
    return this._values[20];
  }
  set_restriction_reason(val: RestrictionReasonT[]): this {
    this._values[20] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_restriction_reason(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_admin_rights(): ChatAdminRightsT {
    return this._values[21];
  }
  set_admin_rights(val: ChatAdminRightsT): this {
    this._values[21] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_admin_rights(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_banned_rights(): ChatBannedRightsT {
    return this._values[22];
  }
  set_banned_rights(val: ChatBannedRightsT): this {
    this._values[22] = val;

    this.set_flags(this.get_flags() | (1 << 15));

    return this;
  }

  has_banned_rights(): boolean {
    return !!(this.get_flags() & (1 << 15));
  }

  get_default_banned_rights(): ChatBannedRightsT {
    return this._values[23];
  }
  set_default_banned_rights(val: ChatBannedRightsT): this {
    this._values[23] = val;

    this.set_flags(this.get_flags() | (1 << 18));

    return this;
  }

  has_default_banned_rights(): boolean {
    return !!(this.get_flags() & (1 << 18));
  }

  get_participants_count(): number {
    return this._values[24];
  }
  set_participants_count(val: number): this {
    this._values[24] = val;

    this.set_flags(this.get_flags() | (1 << 17));

    return this;
  }

  has_participants_count(): boolean {
    return !!(this.get_flags() & (1 << 17));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_creator()) {
      let val = values[1] as true;
    }

    if (this.has_left()) {
      let val = values[2] as true;
    }

    if (this.has_broadcast()) {
      let val = values[3] as true;
    }

    if (this.has_verified()) {
      let val = values[4] as true;
    }

    if (this.has_megagroup()) {
      let val = values[5] as true;
    }

    if (this.has_restricted()) {
      let val = values[6] as true;
    }

    if (this.has_signatures()) {
      let val = values[7] as true;
    }

    if (this.has_min()) {
      let val = values[8] as true;
    }

    if (this.has_scam()) {
      let val = values[9] as true;
    }

    if (this.has_has_link()) {
      let val = values[10] as true;
    }

    if (this.has_has_geo()) {
      let val = values[11] as true;
    }

    if (this.has_slowmode_enabled()) {
      let val = values[12] as true;
    }

    {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_access_hash()) {
      let val = values[14] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[15] as string;
      buf.writeString(val);
    }

    if (this.has_username()) {
      let val = values[16] as string;
      buf.writeString(val);
    }

    {
      let val = values[17] as ChatPhotoT;
      val._write(buf);
    }

    {
      let val = values[18] as number;
      buf.writeInt(val);
    }

    {
      let val = values[19] as number;
      buf.writeInt(val);
    }

    if (this.has_restriction_reason()) {
      let val = values[20] as RestrictionReasonT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_admin_rights()) {
      let val = values[21] as ChatAdminRightsT;
      val._write(buf);
    }

    if (this.has_banned_rights()) {
      let val = values[22] as ChatBannedRightsT;
      val._write(buf);
    }

    if (this.has_default_banned_rights()) {
      let val = values[23] as ChatBannedRightsT;
      val._write(buf);
    }

    if (this.has_participants_count()) {
      let val = values[24] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_creator()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_left()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_broadcast()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_verified()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_megagroup()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_restricted()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    if (this.has_signatures()) {
      let val = values[7] as true;
      val = true;
      values[7] = val;
    }

    if (this.has_min()) {
      let val = values[8] as true;
      val = true;
      values[8] = val;
    }

    if (this.has_scam()) {
      let val = values[9] as true;
      val = true;
      values[9] = val;
    }

    if (this.has_has_link()) {
      let val = values[10] as true;
      val = true;
      values[10] = val;
    }

    if (this.has_has_geo()) {
      let val = values[11] as true;
      val = true;
      values[11] = val;
    }

    if (this.has_slowmode_enabled()) {
      let val = values[12] as true;
      val = true;
      values[12] = val;
    }

    {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_access_hash()) {
      let val = values[14] as ProtoLong;
      val = buf.readLong();
      values[14] = val;
    }

    {
      let val = values[15] as string;
      val = buf.readString();
      values[15] = val;
    }

    if (this.has_username()) {
      let val = values[16] as string;
      val = buf.readString();
      values[16] = val;
    }

    {
      let val = values[17] as ChatPhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[17] = val;
    }

    {
      let val = values[18] as number;
      val = buf.readInt();
      values[18] = val;
    }

    {
      let val = values[19] as number;
      val = buf.readInt();
      values[19] = val;
    }

    if (this.has_restriction_reason()) {
      let val = values[20] as RestrictionReasonT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: RestrictionReasonT = new RestrictionReasonT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[20] = val;
    }

    if (this.has_admin_rights()) {
      let val = values[21] as ChatAdminRightsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[21] = val;
    }

    if (this.has_banned_rights()) {
      let val = values[22] as ChatBannedRightsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[22] = val;
    }

    if (this.has_default_banned_rights()) {
      let val = values[23] as ChatBannedRightsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[23] = val;
    }

    if (this.has_participants_count()) {
      let val = values[24] as number;
      val = buf.readInt();
      values[24] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelS._id, ChannelS);

/**
 * channelForbidden:Chat
 * #289da732:681420594:681420594
 * flags:#
 * broadcast:flags.5?true
 * megagroup:flags.8?true
 * id:int
 * access_hash:long
 * title:string
 * until_date:flags.16?int
 */
export class ChannelForbiddenS {
  static _id = 0x289da732;

  _values = [0, true, true, 0, [0, 0], "", 0] as [
    number,
    true,
    true,
    number,
    ProtoLong,
    string,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_broadcast(): true {
    return this._values[1];
  }
  set_broadcast(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_broadcast(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_megagroup(): true {
    return this._values[2];
  }
  set_megagroup(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_megagroup(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_id(): number {
    return this._values[3];
  }
  set_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[4];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[4] = val;

    return this;
  }

  get_title(): string {
    return this._values[5];
  }
  set_title(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_until_date(): number {
    return this._values[6];
  }
  set_until_date(val: number): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 16));

    return this;
  }

  has_until_date(): boolean {
    return !!(this.get_flags() & (1 << 16));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelForbiddenS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_broadcast()) {
      let val = values[1] as true;
    }

    if (this.has_megagroup()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    if (this.has_until_date()) {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelForbiddenS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_broadcast()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_megagroup()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as ProtoLong;
      val = buf.readLong();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    if (this.has_until_date()) {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelForbiddenS._id, ChannelForbiddenS);

/**
 * contacts.resolvedPeer:contacts.ResolvedPeer
 * #7f077ad9:2131196633:2131196633
 * peer:Peer
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class ContactsResolvedPeerS {
  static _id = 0x7f077ad9;

  _values = [new PeerT(), [], []] as [PeerT, ChatT[], UserT[]];

  get_peer(): PeerT {
    return this._values[0];
  }
  set_peer(val: PeerT): this {
    this._values[0] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[1];
  }
  set_chats(val: ChatT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsResolvedPeerS._id);

    let values = this._values;

    {
      let val = values[0] as PeerT;
      val._write(buf);
    }

    {
      let val = values[1] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsResolvedPeerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsResolvedPeerS._id, ContactsResolvedPeerS);

/**
 * channelFull:ChatFull
 * #2d895c74:763976820:763976820
 * flags:#
 * can_view_participants:flags.3?true
 * can_set_username:flags.6?true
 * can_set_stickers:flags.7?true
 * hidden_prehistory:flags.10?true
 * can_view_stats:flags.12?true
 * can_set_location:flags.16?true
 * has_scheduled:flags.19?true
 * id:int
 * about:string
 * participants_count:flags.0?int
 * admins_count:flags.1?int
 * kicked_count:flags.2?int
 * banned_count:flags.2?int
 * online_count:flags.13?int
 * read_inbox_max_id:int
 * read_outbox_max_id:int
 * unread_count:int
 * chat_photo:Photo
 * notify_settings:PeerNotifySettings
 * exported_invite:ExportedChatInvite
 * bot_info:Vector<BotInfo>
 * migrated_from_chat_id:flags.4?int
 * migrated_from_max_id:flags.4?int
 * pinned_msg_id:flags.5?int
 * stickerset:flags.8?StickerSet
 * available_min_id:flags.9?int
 * folder_id:flags.11?int
 * linked_chat_id:flags.14?int
 * location:flags.15?ChannelLocation
 * slowmode_seconds:flags.17?int
 * slowmode_next_send_date:flags.18?int
 * pts:int
 */
export class ChannelFullS {
  static _id = 0x2d895c74;

  _values = [
    0,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    0,
    "",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    new PhotoT(),
    new PeerNotifySettingsT(),
    new ExportedChatInviteT(),
    [],
    0,
    0,
    0,
    new StickerSetT(),
    0,
    0,
    0,
    new ChannelLocationT(),
    0,
    0,
    0
  ] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    number,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    PhotoT,
    PeerNotifySettingsT,
    ExportedChatInviteT,
    BotInfoT[],
    number,
    number,
    number,
    StickerSetT,
    number,
    number,
    number,
    ChannelLocationT,
    number,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_can_view_participants(): true {
    return this._values[1];
  }
  set_can_view_participants(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_can_view_participants(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_can_set_username(): true {
    return this._values[2];
  }
  set_can_set_username(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_can_set_username(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_can_set_stickers(): true {
    return this._values[3];
  }
  set_can_set_stickers(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_can_set_stickers(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_hidden_prehistory(): true {
    return this._values[4];
  }
  set_hidden_prehistory(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 10));

    return this;
  }

  has_hidden_prehistory(): boolean {
    return !!(this.get_flags() & (1 << 10));
  }

  get_can_view_stats(): true {
    return this._values[5];
  }
  set_can_view_stats(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 12));

    return this;
  }

  has_can_view_stats(): boolean {
    return !!(this.get_flags() & (1 << 12));
  }

  get_can_set_location(): true {
    return this._values[6];
  }
  set_can_set_location(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 16));

    return this;
  }

  has_can_set_location(): boolean {
    return !!(this.get_flags() & (1 << 16));
  }

  get_has_scheduled(): true {
    return this._values[7];
  }
  set_has_scheduled(val: true): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 19));

    return this;
  }

  has_has_scheduled(): boolean {
    return !!(this.get_flags() & (1 << 19));
  }

  get_id(): number {
    return this._values[8];
  }
  set_id(val: number): this {
    this._values[8] = val;

    return this;
  }

  get_about(): string {
    return this._values[9];
  }
  set_about(val: string): this {
    this._values[9] = val;

    return this;
  }

  get_participants_count(): number {
    return this._values[10];
  }
  set_participants_count(val: number): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_participants_count(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_admins_count(): number {
    return this._values[11];
  }
  set_admins_count(val: number): this {
    this._values[11] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_admins_count(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_kicked_count(): number {
    return this._values[12];
  }
  set_kicked_count(val: number): this {
    this._values[12] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_kicked_count(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_banned_count(): number {
    return this._values[13];
  }
  set_banned_count(val: number): this {
    this._values[13] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_banned_count(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_online_count(): number {
    return this._values[14];
  }
  set_online_count(val: number): this {
    this._values[14] = val;

    this.set_flags(this.get_flags() | (1 << 13));

    return this;
  }

  has_online_count(): boolean {
    return !!(this.get_flags() & (1 << 13));
  }

  get_read_inbox_max_id(): number {
    return this._values[15];
  }
  set_read_inbox_max_id(val: number): this {
    this._values[15] = val;

    return this;
  }

  get_read_outbox_max_id(): number {
    return this._values[16];
  }
  set_read_outbox_max_id(val: number): this {
    this._values[16] = val;

    return this;
  }

  get_unread_count(): number {
    return this._values[17];
  }
  set_unread_count(val: number): this {
    this._values[17] = val;

    return this;
  }

  get_chat_photo(): PhotoT {
    return this._values[18];
  }
  set_chat_photo(val: PhotoT): this {
    this._values[18] = val;

    return this;
  }

  get_notify_settings(): PeerNotifySettingsT {
    return this._values[19];
  }
  set_notify_settings(val: PeerNotifySettingsT): this {
    this._values[19] = val;

    return this;
  }

  get_exported_invite(): ExportedChatInviteT {
    return this._values[20];
  }
  set_exported_invite(val: ExportedChatInviteT): this {
    this._values[20] = val;

    return this;
  }

  get_bot_info(): BotInfoT[] {
    return this._values[21];
  }
  set_bot_info(val: BotInfoT[]): this {
    this._values[21] = val;

    return this;
  }

  get_migrated_from_chat_id(): number {
    return this._values[22];
  }
  set_migrated_from_chat_id(val: number): this {
    this._values[22] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_migrated_from_chat_id(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_migrated_from_max_id(): number {
    return this._values[23];
  }
  set_migrated_from_max_id(val: number): this {
    this._values[23] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_migrated_from_max_id(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_pinned_msg_id(): number {
    return this._values[24];
  }
  set_pinned_msg_id(val: number): this {
    this._values[24] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_pinned_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_stickerset(): StickerSetT {
    return this._values[25];
  }
  set_stickerset(val: StickerSetT): this {
    this._values[25] = val;

    this.set_flags(this.get_flags() | (1 << 8));

    return this;
  }

  has_stickerset(): boolean {
    return !!(this.get_flags() & (1 << 8));
  }

  get_available_min_id(): number {
    return this._values[26];
  }
  set_available_min_id(val: number): this {
    this._values[26] = val;

    this.set_flags(this.get_flags() | (1 << 9));

    return this;
  }

  has_available_min_id(): boolean {
    return !!(this.get_flags() & (1 << 9));
  }

  get_folder_id(): number {
    return this._values[27];
  }
  set_folder_id(val: number): this {
    this._values[27] = val;

    this.set_flags(this.get_flags() | (1 << 11));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 11));
  }

  get_linked_chat_id(): number {
    return this._values[28];
  }
  set_linked_chat_id(val: number): this {
    this._values[28] = val;

    this.set_flags(this.get_flags() | (1 << 14));

    return this;
  }

  has_linked_chat_id(): boolean {
    return !!(this.get_flags() & (1 << 14));
  }

  get_location(): ChannelLocationT {
    return this._values[29];
  }
  set_location(val: ChannelLocationT): this {
    this._values[29] = val;

    this.set_flags(this.get_flags() | (1 << 15));

    return this;
  }

  has_location(): boolean {
    return !!(this.get_flags() & (1 << 15));
  }

  get_slowmode_seconds(): number {
    return this._values[30];
  }
  set_slowmode_seconds(val: number): this {
    this._values[30] = val;

    this.set_flags(this.get_flags() | (1 << 17));

    return this;
  }

  has_slowmode_seconds(): boolean {
    return !!(this.get_flags() & (1 << 17));
  }

  get_slowmode_next_send_date(): number {
    return this._values[31];
  }
  set_slowmode_next_send_date(val: number): this {
    this._values[31] = val;

    this.set_flags(this.get_flags() | (1 << 18));

    return this;
  }

  has_slowmode_next_send_date(): boolean {
    return !!(this.get_flags() & (1 << 18));
  }

  get_pts(): number {
    return this._values[32];
  }
  set_pts(val: number): this {
    this._values[32] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelFullS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_can_view_participants()) {
      let val = values[1] as true;
    }

    if (this.has_can_set_username()) {
      let val = values[2] as true;
    }

    if (this.has_can_set_stickers()) {
      let val = values[3] as true;
    }

    if (this.has_hidden_prehistory()) {
      let val = values[4] as true;
    }

    if (this.has_can_view_stats()) {
      let val = values[5] as true;
    }

    if (this.has_can_set_location()) {
      let val = values[6] as true;
    }

    if (this.has_has_scheduled()) {
      let val = values[7] as true;
    }

    {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    {
      let val = values[9] as string;
      buf.writeString(val);
    }

    if (this.has_participants_count()) {
      let val = values[10] as number;
      buf.writeInt(val);
    }

    if (this.has_admins_count()) {
      let val = values[11] as number;
      buf.writeInt(val);
    }

    if (this.has_kicked_count()) {
      let val = values[12] as number;
      buf.writeInt(val);
    }

    if (this.has_banned_count()) {
      let val = values[13] as number;
      buf.writeInt(val);
    }

    if (this.has_online_count()) {
      let val = values[14] as number;
      buf.writeInt(val);
    }

    {
      let val = values[15] as number;
      buf.writeInt(val);
    }

    {
      let val = values[16] as number;
      buf.writeInt(val);
    }

    {
      let val = values[17] as number;
      buf.writeInt(val);
    }

    {
      let val = values[18] as PhotoT;
      val._write(buf);
    }

    {
      let val = values[19] as PeerNotifySettingsT;
      val._write(buf);
    }

    {
      let val = values[20] as ExportedChatInviteT;
      val._write(buf);
    }

    {
      let val = values[21] as BotInfoT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_migrated_from_chat_id()) {
      let val = values[22] as number;
      buf.writeInt(val);
    }

    if (this.has_migrated_from_max_id()) {
      let val = values[23] as number;
      buf.writeInt(val);
    }

    if (this.has_pinned_msg_id()) {
      let val = values[24] as number;
      buf.writeInt(val);
    }

    if (this.has_stickerset()) {
      let val = values[25] as StickerSetT;
      val._write(buf);
    }

    if (this.has_available_min_id()) {
      let val = values[26] as number;
      buf.writeInt(val);
    }

    if (this.has_folder_id()) {
      let val = values[27] as number;
      buf.writeInt(val);
    }

    if (this.has_linked_chat_id()) {
      let val = values[28] as number;
      buf.writeInt(val);
    }

    if (this.has_location()) {
      let val = values[29] as ChannelLocationT;
      val._write(buf);
    }

    if (this.has_slowmode_seconds()) {
      let val = values[30] as number;
      buf.writeInt(val);
    }

    if (this.has_slowmode_next_send_date()) {
      let val = values[31] as number;
      buf.writeInt(val);
    }

    {
      let val = values[32] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelFullS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_can_view_participants()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_can_set_username()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_can_set_stickers()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_hidden_prehistory()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_can_view_stats()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_can_set_location()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    if (this.has_has_scheduled()) {
      let val = values[7] as true;
      val = true;
      values[7] = val;
    }

    {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    {
      let val = values[9] as string;
      val = buf.readString();
      values[9] = val;
    }

    if (this.has_participants_count()) {
      let val = values[10] as number;
      val = buf.readInt();
      values[10] = val;
    }

    if (this.has_admins_count()) {
      let val = values[11] as number;
      val = buf.readInt();
      values[11] = val;
    }

    if (this.has_kicked_count()) {
      let val = values[12] as number;
      val = buf.readInt();
      values[12] = val;
    }

    if (this.has_banned_count()) {
      let val = values[13] as number;
      val = buf.readInt();
      values[13] = val;
    }

    if (this.has_online_count()) {
      let val = values[14] as number;
      val = buf.readInt();
      values[14] = val;
    }

    {
      let val = values[15] as number;
      val = buf.readInt();
      values[15] = val;
    }

    {
      let val = values[16] as number;
      val = buf.readInt();
      values[16] = val;
    }

    {
      let val = values[17] as number;
      val = buf.readInt();
      values[17] = val;
    }

    {
      let val = values[18] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[18] = val;
    }

    {
      let val = values[19] as PeerNotifySettingsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[19] = val;
    }

    {
      let val = values[20] as ExportedChatInviteT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[20] = val;
    }

    {
      let val = values[21] as BotInfoT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: BotInfoT = new BotInfoT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[21] = val;
    }

    if (this.has_migrated_from_chat_id()) {
      let val = values[22] as number;
      val = buf.readInt();
      values[22] = val;
    }

    if (this.has_migrated_from_max_id()) {
      let val = values[23] as number;
      val = buf.readInt();
      values[23] = val;
    }

    if (this.has_pinned_msg_id()) {
      let val = values[24] as number;
      val = buf.readInt();
      values[24] = val;
    }

    if (this.has_stickerset()) {
      let val = values[25] as StickerSetT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[25] = val;
    }

    if (this.has_available_min_id()) {
      let val = values[26] as number;
      val = buf.readInt();
      values[26] = val;
    }

    if (this.has_folder_id()) {
      let val = values[27] as number;
      val = buf.readInt();
      values[27] = val;
    }

    if (this.has_linked_chat_id()) {
      let val = values[28] as number;
      val = buf.readInt();
      values[28] = val;
    }

    if (this.has_location()) {
      let val = values[29] as ChannelLocationT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[29] = val;
    }

    if (this.has_slowmode_seconds()) {
      let val = values[30] as number;
      val = buf.readInt();
      values[30] = val;
    }

    if (this.has_slowmode_next_send_date()) {
      let val = values[31] as number;
      val = buf.readInt();
      values[31] = val;
    }

    {
      let val = values[32] as number;
      val = buf.readInt();
      values[32] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelFullS._id, ChannelFullS);

/**
 * messageRange:MessageRange
 * #ae30253:182649427:182649427
 * min_id:int
 * max_id:int
 */
export class MessageRangeS {
  static _id = 0xae30253;

  _values = [0, 0] as [number, number];

  get_min_id(): number {
    return this._values[0];
  }
  set_min_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_max_id(): number {
    return this._values[1];
  }
  set_max_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageRangeS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== MessageRangeS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(MessageRangeS._id, MessageRangeS);

/**
 * messages.channelMessages:messages.Messages
 * #99262e37:2569416247:-1725551049
 * flags:#
 * inexact:flags.1?true
 * pts:int
 * count:int
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class MessagesChannelMessagesS {
  static _id = 0x99262e37;

  _values = [0, true, 0, 0, [], [], []] as [
    number,
    true,
    number,
    number,
    MessageT[],
    ChatT[],
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_inexact(): true {
    return this._values[1];
  }
  set_inexact(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_inexact(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_count(): number {
    return this._values[3];
  }
  set_count(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_messages(): MessageT[] {
    return this._values[4];
  }
  set_messages(val: MessageT[]): this {
    this._values[4] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[5];
  }
  set_chats(val: ChatT[]): this {
    this._values[5] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[6];
  }
  set_users(val: UserT[]): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesChannelMessagesS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_inexact()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[5] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[6] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesChannelMessagesS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_inexact()) {
      let val = values[1] as true;
      val = true;
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

    {
      let val = values[4] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    {
      let val = values[5] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    {
      let val = values[6] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesChannelMessagesS._id, MessagesChannelMessagesS);

/**
 * messageActionChannelCreate:MessageAction
 * #95d2ac92:2513611922:-1781355374
 * title:string
 */
export class MessageActionChannelCreateS {
  static _id = 0x95d2ac92;

  _values = [""] as [string];

  get_title(): string {
    return this._values[0];
  }
  set_title(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChannelCreateS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionChannelCreateS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageActionChannelCreateS._id, MessageActionChannelCreateS);

/**
 * updateChannelTooLong:Update
 * #eb0467fb:3942934523:-352032773
 * flags:#
 * channel_id:int
 * pts:flags.0?int
 */
export class UpdateChannelTooLongS {
  static _id = 0xeb0467fb;

  _values = [0, 0, 0] as [number, number, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_channel_id(): number {
    return this._values[1];
  }
  set_channel_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_pts(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChannelTooLongS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    if (this.has_pts()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateChannelTooLongS._id) panic(id.toString(16));
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

    if (this.has_pts()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateChannelTooLongS._id, UpdateChannelTooLongS);

/**
 * updateChannel:Update
 * #b6d45656:3067369046:-1227598250
 * channel_id:int
 */
export class UpdateChannelS {
  static _id = 0xb6d45656;

  _values = [0] as [number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChannelS._id);

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
      if (id !== UpdateChannelS._id) panic(id.toString(16));
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
AllStructs.set(UpdateChannelS._id, UpdateChannelS);

/**
 * updateNewChannelMessage:Update
 * #62ba04d9:1656358105:1656358105
 * message:Message
 * pts:int
 * pts_count:int
 */
export class UpdateNewChannelMessageS {
  static _id = 0x62ba04d9;

  _values = [new MessageT(), 0, 0] as [MessageT, number, number];

  get_message(): MessageT {
    return this._values[0];
  }
  set_message(val: MessageT): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateNewChannelMessageS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT;
      val._write(buf);
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
      if (id !== UpdateNewChannelMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateNewChannelMessageS._id, UpdateNewChannelMessageS);

/**
 * updateReadChannelInbox:Update
 * #330b5424:856380452:856380452
 * flags:#
 * folder_id:flags.0?int
 * channel_id:int
 * max_id:int
 * still_unread_count:int
 * pts:int
 */
export class UpdateReadChannelInboxS {
  static _id = 0x330b5424;

  _values = [0, 0, 0, 0, 0, 0] as [
    number,
    number,
    number,
    number,
    number,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_folder_id(): number {
    return this._values[1];
  }
  set_folder_id(val: number): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_channel_id(): number {
    return this._values[2];
  }
  set_channel_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_max_id(): number {
    return this._values[3];
  }
  set_max_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_still_unread_count(): number {
    return this._values[4];
  }
  set_still_unread_count(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_pts(): number {
    return this._values[5];
  }
  set_pts(val: number): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateReadChannelInboxS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_folder_id()) {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
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
      if (id !== UpdateReadChannelInboxS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_folder_id()) {
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
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
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
AllStructs.set(UpdateReadChannelInboxS._id, UpdateReadChannelInboxS);

/**
 * updateDeleteChannelMessages:Update
 * #c37521c9:3279233481:-1015733815
 * channel_id:int
 * messages:Vector<int>
 * pts:int
 * pts_count:int
 */
export class UpdateDeleteChannelMessagesS {
  static _id = 0xc37521c9;

  _values = [0, [], 0, 0] as [number, number[], number, number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_messages(): number[] {
    return this._values[1];
  }
  set_messages(val: number[]): this {
    this._values[1] = val;

    return this;
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[3];
  }
  set_pts_count(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateDeleteChannelMessagesS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
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
      if (id !== UpdateDeleteChannelMessagesS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
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
AllStructs.set(UpdateDeleteChannelMessagesS._id, UpdateDeleteChannelMessagesS);

/**
 * updateChannelMessageViews:Update
 * #98a12b4b:2560699211:-1734268085
 * channel_id:int
 * id:int
 * views:int
 */
export class UpdateChannelMessageViewsS {
  static _id = 0x98a12b4b;

  _values = [0, 0, 0] as [number, number, number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): number {
    return this._values[1];
  }
  set_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_views(): number {
    return this._values[2];
  }
  set_views(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChannelMessageViewsS._id);

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
      if (id !== UpdateChannelMessageViewsS._id) panic(id.toString(16));
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
AllStructs.set(UpdateChannelMessageViewsS._id, UpdateChannelMessageViewsS);

/**
 * updates.channelDifferenceEmpty:updates.ChannelDifference
 * #3e11affb:1041346555:1041346555
 * flags:#
 * final:flags.0?true
 * pts:int
 * timeout:flags.1?int
 */
export class UpdatesChannelDifferenceEmptyS {
  static _id = 0x3e11affb;

  _values = [0, true, 0, 0] as [number, true, number, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_final(): true {
    return this._values[1];
  }
  set_final(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_final(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_timeout(): number {
    return this._values[3];
  }
  set_timeout(val: number): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_timeout(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesChannelDifferenceEmptyS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_final()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    if (this.has_timeout()) {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdatesChannelDifferenceEmptyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_final()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    if (this.has_timeout()) {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(
  UpdatesChannelDifferenceEmptyS._id,
  UpdatesChannelDifferenceEmptyS
);

/**
 * updates.channelDifferenceTooLong:updates.ChannelDifference
 * #a4bcc6fe:2763835134:-1531132162
 * flags:#
 * final:flags.0?true
 * timeout:flags.1?int
 * dialog:Dialog
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class UpdatesChannelDifferenceTooLongS {
  static _id = 0xa4bcc6fe;

  _values = [0, true, 0, new DialogT(), [], [], []] as [
    number,
    true,
    number,
    DialogT,
    MessageT[],
    ChatT[],
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_final(): true {
    return this._values[1];
  }
  set_final(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_final(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_timeout(): number {
    return this._values[2];
  }
  set_timeout(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_timeout(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_dialog(): DialogT {
    return this._values[3];
  }
  set_dialog(val: DialogT): this {
    this._values[3] = val;

    return this;
  }

  get_messages(): MessageT[] {
    return this._values[4];
  }
  set_messages(val: MessageT[]): this {
    this._values[4] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[5];
  }
  set_chats(val: ChatT[]): this {
    this._values[5] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[6];
  }
  set_users(val: UserT[]): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesChannelDifferenceTooLongS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_final()) {
      let val = values[1] as true;
    }

    if (this.has_timeout()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as DialogT;
      val._write(buf);
    }

    {
      let val = values[4] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[5] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[6] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== UpdatesChannelDifferenceTooLongS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_final()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_timeout()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as DialogT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    {
      let val = values[5] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    {
      let val = values[6] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(
  UpdatesChannelDifferenceTooLongS._id,
  UpdatesChannelDifferenceTooLongS
);

/**
 * updates.channelDifference:updates.ChannelDifference
 * #2064674e:543450958:543450958
 * flags:#
 * final:flags.0?true
 * pts:int
 * timeout:flags.1?int
 * new_messages:Vector<Message>
 * other_updates:Vector<Update>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class UpdatesChannelDifferenceS {
  static _id = 0x2064674e;

  _values = [0, true, 0, 0, [], [], [], []] as [
    number,
    true,
    number,
    number,
    MessageT[],
    UpdateT[],
    ChatT[],
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_final(): true {
    return this._values[1];
  }
  set_final(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_final(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_timeout(): number {
    return this._values[3];
  }
  set_timeout(val: number): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_timeout(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_new_messages(): MessageT[] {
    return this._values[4];
  }
  set_new_messages(val: MessageT[]): this {
    this._values[4] = val;

    return this;
  }

  get_other_updates(): UpdateT[] {
    return this._values[5];
  }
  set_other_updates(val: UpdateT[]): this {
    this._values[5] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[6];
  }
  set_chats(val: ChatT[]): this {
    this._values[6] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[7];
  }
  set_users(val: UserT[]): this {
    this._values[7] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesChannelDifferenceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_final()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    if (this.has_timeout()) {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[5] as UpdateT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[6] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[7] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== UpdatesChannelDifferenceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_final()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    if (this.has_timeout()) {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    {
      let val = values[5] as UpdateT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UpdateT = new UpdateT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    {
      let val = values[6] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[6] = val;
    }

    {
      let val = values[7] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(UpdatesChannelDifferenceS._id, UpdatesChannelDifferenceS);

/**
 * channelMessagesFilterEmpty:ChannelMessagesFilter
 * #94d42ee7:2496933607:-1798033689
 *
 */
export class ChannelMessagesFilterEmptyS {
  static _id = 0x94d42ee7;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelMessagesFilterEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelMessagesFilterEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ChannelMessagesFilterEmptyS._id, ChannelMessagesFilterEmptyS);

/**
 * channelMessagesFilter:ChannelMessagesFilter
 * #cd77d957:3447183703:-847783593
 * flags:#
 * exclude_new_messages:flags.1?true
 * ranges:Vector<MessageRange>
 */
export class ChannelMessagesFilterS {
  static _id = 0xcd77d957;

  _values = [0, true, []] as [number, true, MessageRangeT[]];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_exclude_new_messages(): true {
    return this._values[1];
  }
  set_exclude_new_messages(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_exclude_new_messages(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_ranges(): MessageRangeT[] {
    return this._values[2];
  }
  set_ranges(val: MessageRangeT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelMessagesFilterS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_exclude_new_messages()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as MessageRangeT[];

      buf.writeInt(481674261);
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
      if (id !== ChannelMessagesFilterS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_exclude_new_messages()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as MessageRangeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageRangeT = new MessageRangeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelMessagesFilterS._id, ChannelMessagesFilterS);

/**
 * channelParticipant:ChannelParticipant
 * #15ebac1d:367766557:367766557
 * user_id:int
 * date:int
 */
export class ChannelParticipantS {
  static _id = 0x15ebac1d;

  _values = [0, 0] as [number, number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== ChannelParticipantS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(ChannelParticipantS._id, ChannelParticipantS);

/**
 * channelParticipantSelf:ChannelParticipant
 * #a3289a6d:2737347181:-1557620115
 * user_id:int
 * inviter_id:int
 * date:int
 */
export class ChannelParticipantSelfS {
  static _id = 0xa3289a6d;

  _values = [0, 0, 0] as [number, number, number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_inviter_id(): number {
    return this._values[1];
  }
  set_inviter_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantSelfS._id);

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
      if (id !== ChannelParticipantSelfS._id) panic(id.toString(16));
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
AllStructs.set(ChannelParticipantSelfS._id, ChannelParticipantSelfS);

/**
 * channelParticipantCreator:ChannelParticipant
 * #808d15a4:2156729764:-2138237532
 * flags:#
 * user_id:int
 * rank:flags.0?string
 */
export class ChannelParticipantCreatorS {
  static _id = 0x808d15a4;

  _values = [0, 0, ""] as [number, number, string];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_rank(): string {
    return this._values[2];
  }
  set_rank(val: string): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_rank(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantCreatorS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    if (this.has_rank()) {
      let val = values[2] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelParticipantCreatorS._id) panic(id.toString(16));
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

    if (this.has_rank()) {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelParticipantCreatorS._id, ChannelParticipantCreatorS);

/**
 * channelParticipantsRecent:ChannelParticipantsFilter
 * #de3f3c79:3728686201:-566281095
 *
 */
export class ChannelParticipantsRecentS {
  static _id = 0xde3f3c79;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantsRecentS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelParticipantsRecentS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ChannelParticipantsRecentS._id, ChannelParticipantsRecentS);

/**
 * channelParticipantsAdmins:ChannelParticipantsFilter
 * #b4608969:3026225513:-1268741783
 *
 */
export class ChannelParticipantsAdminsS {
  static _id = 0xb4608969;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantsAdminsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelParticipantsAdminsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ChannelParticipantsAdminsS._id, ChannelParticipantsAdminsS);

/**
 * channelParticipantsKicked:ChannelParticipantsFilter
 * #a3b54985:2746567045:-1548400251
 * q:string
 */
export class ChannelParticipantsKickedS {
  static _id = 0xa3b54985;

  _values = [""] as [string];

  get_q(): string {
    return this._values[0];
  }
  set_q(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantsKickedS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelParticipantsKickedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelParticipantsKickedS._id, ChannelParticipantsKickedS);

/**
 * channels.channelParticipants:channels.ChannelParticipants
 * #f56ee2a8:4117684904:-177282392
 * count:int
 * participants:Vector<ChannelParticipant>
 * users:Vector<User>
 */
export class ChannelsChannelParticipantsS {
  static _id = 0xf56ee2a8;

  _values = [0, [], []] as [number, ChannelParticipantT[], UserT[]];

  get_count(): number {
    return this._values[0];
  }
  set_count(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_participants(): ChannelParticipantT[] {
    return this._values[1];
  }
  set_participants(val: ChannelParticipantT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelsChannelParticipantsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as ChannelParticipantT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ChannelsChannelParticipantsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as ChannelParticipantT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChannelParticipantT = new ChannelParticipantT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelsChannelParticipantsS._id, ChannelsChannelParticipantsS);

/**
 * channels.channelParticipant:channels.ChannelParticipant
 * #d0d9b163:3503927651:-791039645
 * participant:ChannelParticipant
 * users:Vector<User>
 */
export class ChannelsChannelParticipantS {
  static _id = 0xd0d9b163;

  _values = [new ChannelParticipantT(), []] as [
    ChannelParticipantT,
    UserT[]
  ];

  get_participant(): ChannelParticipantT {
    return this._values[0];
  }
  set_participant(val: ChannelParticipantT): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelsChannelParticipantS._id);

    let values = this._values;

    {
      let val = values[0] as ChannelParticipantT;
      val._write(buf);
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ChannelsChannelParticipantS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ChannelParticipantT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(ChannelsChannelParticipantS._id, ChannelsChannelParticipantS);

/**
 * chatParticipantCreator:ChatParticipant
 * #da13538a:3658699658:-636267638
 * user_id:int
 */
export class ChatParticipantCreatorS {
  static _id = 0xda13538a;

  _values = [0] as [number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatParticipantCreatorS._id);

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
      if (id !== ChatParticipantCreatorS._id) panic(id.toString(16));
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
AllStructs.set(ChatParticipantCreatorS._id, ChatParticipantCreatorS);

/**
 * chatParticipantAdmin:ChatParticipant
 * #e2d6e436:3805733942:-489233354
 * user_id:int
 * inviter_id:int
 * date:int
 */
export class ChatParticipantAdminS {
  static _id = 0xe2d6e436;

  _values = [0, 0, 0] as [number, number, number];

  get_user_id(): number {
    return this._values[0];
  }
  set_user_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_inviter_id(): number {
    return this._values[1];
  }
  set_inviter_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_date(): number {
    return this._values[2];
  }
  set_date(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChatParticipantAdminS._id);

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
      if (id !== ChatParticipantAdminS._id) panic(id.toString(16));
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
AllStructs.set(ChatParticipantAdminS._id, ChatParticipantAdminS);

/**
 * updateChatParticipantAdmin:Update
 * #b6901959:3062896985:-1232070311
 * chat_id:int
 * user_id:int
 * is_admin:Bool
 * version:int
 */
export class UpdateChatParticipantAdminS {
  static _id = 0xb6901959;

  _values = [0, 0, new BoolT(), 0] as [number, number, BoolT, number];

  get_chat_id(): number {
    return this._values[0];
  }
  set_chat_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_is_admin(): BoolT {
    return this._values[2];
  }
  set_is_admin(val: BoolT): this {
    this._values[2] = val;

    return this;
  }

  get_version(): number {
    return this._values[3];
  }
  set_version(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChatParticipantAdminS._id);

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
      let val = values[2] as BoolT;
      val._write(buf);
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
      if (id !== UpdateChatParticipantAdminS._id) panic(id.toString(16));
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
      let val = values[2] as BoolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateChatParticipantAdminS._id, UpdateChatParticipantAdminS);

/**
 * messageActionChatMigrateTo:MessageAction
 * #51bdb021:1371385889:1371385889
 * channel_id:int
 */
export class MessageActionChatMigrateToS {
  static _id = 0x51bdb021;

  _values = [0] as [number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChatMigrateToS._id);

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
      if (id !== MessageActionChatMigrateToS._id) panic(id.toString(16));
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
AllStructs.set(MessageActionChatMigrateToS._id, MessageActionChatMigrateToS);

/**
 * messageActionChannelMigrateFrom:MessageAction
 * #b055eaee:2958420718:-1336546578
 * title:string
 * chat_id:int
 */
export class MessageActionChannelMigrateFromS {
  static _id = 0xb055eaee;

  _values = ["", 0] as [string, number];

  get_title(): string {
    return this._values[0];
  }
  set_title(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_chat_id(): number {
    return this._values[1];
  }
  set_chat_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionChannelMigrateFromS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== MessageActionChannelMigrateFromS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(
  MessageActionChannelMigrateFromS._id,
  MessageActionChannelMigrateFromS
);

/**
 * channelParticipantsBots:ChannelParticipantsFilter
 * #b0d1865b:2966521435:-1328445861
 *
 */
export class ChannelParticipantsBotsS {
  static _id = 0xb0d1865b;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ChannelParticipantsBotsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ChannelParticipantsBotsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ChannelParticipantsBotsS._id, ChannelParticipantsBotsS);

/**
 * help.termsOfService:help.TermsOfService
 * #780a0310:2013922064:2013922064
 * flags:#
 * popup:flags.0?true
 * id:DataJSON
 * text:string
 * entities:Vector<MessageEntity>
 * min_age_confirm:flags.1?int
 */
export class HelpTermsOfServiceS {
  static _id = 0x780a0310;

  _values = [0, true, new DataJsonT(), "", [], 0] as [
    number,
    true,
    DataJsonT,
    string,
    MessageEntityT[],
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_popup(): true {
    return this._values[1];
  }
  set_popup(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_popup(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_id(): DataJsonT {
    return this._values[2];
  }
  set_id(val: DataJsonT): this {
    this._values[2] = val;

    return this;
  }

  get_text(): string {
    return this._values[3];
  }
  set_text(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[4];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[4] = val;

    return this;
  }

  get_min_age_confirm(): number {
    return this._values[5];
  }
  set_min_age_confirm(val: number): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_min_age_confirm(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HelpTermsOfServiceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_popup()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as DataJsonT;
      val._write(buf);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_min_age_confirm()) {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== HelpTermsOfServiceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_popup()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as DataJsonT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    if (this.has_min_age_confirm()) {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(HelpTermsOfServiceS._id, HelpTermsOfServiceS);

/**
 * updateNewStickerSet:Update
 * #688a30aa:1753886890:1753886890
 * stickerset:messages.StickerSet
 */
export class UpdateNewStickerSetS {
  static _id = 0x688a30aa;

  _values = [new MessagesStickerSetT()] as [MessagesStickerSetT];

  get_stickerset(): MessagesStickerSetT {
    return this._values[0];
  }
  set_stickerset(val: MessagesStickerSetT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateNewStickerSetS._id);

    let values = this._values;

    {
      let val = values[0] as MessagesStickerSetT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateNewStickerSetS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessagesStickerSetT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateNewStickerSetS._id, UpdateNewStickerSetS);

/**
 * updateStickerSetsOrder:Update
 * #bb2d201:196268545:196268545
 * flags:#
 * masks:flags.0?true
 * order:Vector<long>
 */
export class UpdateStickerSetsOrderS {
  static _id = 0xbb2d201;

  _values = [0, true, []] as [number, true, ProtoLong[]];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_masks(): true {
    return this._values[1];
  }
  set_masks(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_masks(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_order(): ProtoLong[] {
    return this._values[2];
  }
  set_order(val: ProtoLong[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateStickerSetsOrderS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_masks()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as ProtoLong[];

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
      if (id !== UpdateStickerSetsOrderS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_masks()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateStickerSetsOrderS._id, UpdateStickerSetsOrderS);

/**
 * updateStickerSets:Update
 * #43ae3dec:1135492588:1135492588
 *
 */
export class UpdateStickerSetsS {
  static _id = 0x43ae3dec;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateStickerSetsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateStickerSetsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdateStickerSetsS._id, UpdateStickerSetsS);

/**
 * foundGif:FoundGif
 * #162ecc1f:372165663:372165663
 * url:string
 * thumb_url:string
 * content_url:string
 * content_type:string
 * w:int
 * h:int
 */
export class FoundGifS {
  static _id = 0x162ecc1f;

  _values = ["", "", "", "", 0, 0] as [
    string,
    string,
    string,
    string,
    number,
    number
  ];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_thumb_url(): string {
    return this._values[1];
  }
  set_thumb_url(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_content_url(): string {
    return this._values[2];
  }
  set_content_url(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_content_type(): string {
    return this._values[3];
  }
  set_content_type(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_w(): number {
    return this._values[4];
  }
  set_w(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_h(): number {
    return this._values[5];
  }
  set_h(val: number): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(FoundGifS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
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
      if (id !== FoundGifS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
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
AllStructs.set(FoundGifS._id, FoundGifS);

/**
 * foundGifCached:FoundGif
 * #9c750409:2624914441:-1670052855
 * url:string
 * photo:Photo
 * document:Document
 */
export class FoundGifCachedS {
  static _id = 0x9c750409;

  _values = ["", new PhotoT(), new DocumentT()] as [string, PhotoT, DocumentT];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_photo(): PhotoT {
    return this._values[1];
  }
  set_photo(val: PhotoT): this {
    this._values[1] = val;

    return this;
  }

  get_document(): DocumentT {
    return this._values[2];
  }
  set_document(val: DocumentT): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(FoundGifCachedS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as PhotoT;
      val._write(buf);
    }

    {
      let val = values[2] as DocumentT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== FoundGifCachedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(FoundGifCachedS._id, FoundGifCachedS);

/**
 * inputMediaGifExternal:InputMedia
 * #4843b0fd:1212395773:1212395773
 * url:string
 * q:string
 */
export class InputMediaGifExternalS {
  static _id = 0x4843b0fd;

  _values = ["", ""] as [string, string];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_q(): string {
    return this._values[1];
  }
  set_q(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaGifExternalS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== InputMediaGifExternalS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(InputMediaGifExternalS._id, InputMediaGifExternalS);

/**
 * messages.foundGifs:messages.FoundGifs
 * #450a1c0a:1158290442:1158290442
 * next_offset:int
 * results:Vector<FoundGif>
 */
export class MessagesFoundGifsS {
  static _id = 0x450a1c0a;

  _values = [0, []] as [number, FoundGifT[]];

  get_next_offset(): number {
    return this._values[0];
  }
  set_next_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_results(): FoundGifT[] {
    return this._values[1];
  }
  set_results(val: FoundGifT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesFoundGifsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as FoundGifT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesFoundGifsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as FoundGifT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: FoundGifT = new FoundGifT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesFoundGifsS._id, MessagesFoundGifsS);

/**
 * messages.savedGifsNotModified:messages.SavedGifs
 * #e8025ca2:3892468898:-402498398
 *
 */
export class MessagesSavedGifsNotModifiedS {
  static _id = 0xe8025ca2;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesSavedGifsNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesSavedGifsNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  MessagesSavedGifsNotModifiedS._id,
  MessagesSavedGifsNotModifiedS
);

/**
 * messages.savedGifs:messages.SavedGifs
 * #2e0709a5:772213157:772213157
 * hash:int
 * gifs:Vector<Document>
 */
export class MessagesSavedGifsS {
  static _id = 0x2e0709a5;

  _values = [0, []] as [number, DocumentT[]];

  get_hash(): number {
    return this._values[0];
  }
  set_hash(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_gifs(): DocumentT[] {
    return this._values[1];
  }
  set_gifs(val: DocumentT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesSavedGifsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as DocumentT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesSavedGifsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as DocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentT = new DocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesSavedGifsS._id, MessagesSavedGifsS);

/**
 * updateSavedGifs:Update
 * #9375341e:2473931806:-1821035490
 *
 */
export class UpdateSavedGifsS {
  static _id = 0x9375341e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateSavedGifsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateSavedGifsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdateSavedGifsS._id, UpdateSavedGifsS);

/**
 * inputBotInlineMessageMediaAuto:InputBotInlineMessage
 * #3380c786:864077702:864077702
 * flags:#
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export class InputBotInlineMessageMediaAutoS {
  static _id = 0x3380c786;

  _values = [0, "", [], new ReplyMarkupT()] as [
    number,
    string,
    MessageEntityT[],
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_message(): string {
    return this._values[1];
  }
  set_message(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[2];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[3];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageMediaAutoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_entities()) {
      let val = values[2] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineMessageMediaAutoS._id) panic(id.toString(16));
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

    if (this.has_entities()) {
      let val = values[2] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputBotInlineMessageMediaAutoS._id,
  InputBotInlineMessageMediaAutoS
);

/**
 * inputBotInlineMessageText:InputBotInlineMessage
 * #3dcd7a87:1036876423:1036876423
 * flags:#
 * no_webpage:flags.0?true
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export class InputBotInlineMessageTextS {
  static _id = 0x3dcd7a87;

  _values = [0, true, "", [], new ReplyMarkupT()] as [
    number,
    true,
    string,
    MessageEntityT[],
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_no_webpage(): true {
    return this._values[1];
  }
  set_no_webpage(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_no_webpage(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_message(): string {
    return this._values[2];
  }
  set_message(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[3];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[4];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageTextS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_no_webpage()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_entities()) {
      let val = values[3] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_reply_markup()) {
      let val = values[4] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineMessageTextS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_no_webpage()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_entities()) {
      let val = values[3] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[4] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(InputBotInlineMessageTextS._id, InputBotInlineMessageTextS);

/**
 * inputBotInlineResult:InputBotInlineResult
 * #88bf9319:2294256409:-2000710887
 * flags:#
 * id:string
 * type:string
 * title:flags.1?string
 * description:flags.2?string
 * url:flags.3?string
 * thumb:flags.4?InputWebDocument
 * content:flags.5?InputWebDocument
 * send_message:InputBotInlineMessage
 */
export class InputBotInlineResultS {
  static _id = 0x88bf9319;

  _values = [
    0,
    "",
    "",
    "",
    "",
    "",
    new InputWebDocumentT(),
    new InputWebDocumentT(),
    new InputBotInlineMessageT()
  ] as [
    number,
    string,
    string,
    string,
    string,
    string,
    InputWebDocumentT,
    InputWebDocumentT,
    InputBotInlineMessageT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): string {
    return this._values[1];
  }
  set_id(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_type(): string {
    return this._values[2];
  }
  set_type(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_title(): string {
    return this._values[3];
  }
  set_title(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_title(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_description(): string {
    return this._values[4];
  }
  set_description(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_description(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_url(): string {
    return this._values[5];
  }
  set_url(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_url(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_thumb(): InputWebDocumentT {
    return this._values[6];
  }
  set_thumb(val: InputWebDocumentT): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_thumb(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_content(): InputWebDocumentT {
    return this._values[7];
  }
  set_content(val: InputWebDocumentT): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_content(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_send_message(): InputBotInlineMessageT {
    return this._values[8];
  }
  set_send_message(val: InputBotInlineMessageT): this {
    this._values[8] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineResultS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_title()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_description()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_url()) {
      let val = values[5] as string;
      buf.writeString(val);
    }

    if (this.has_thumb()) {
      let val = values[6] as InputWebDocumentT;
      val._write(buf);
    }

    if (this.has_content()) {
      let val = values[7] as InputWebDocumentT;
      val._write(buf);
    }

    {
      let val = values[8] as InputBotInlineMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineResultS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_title()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_description()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_url()) {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    if (this.has_thumb()) {
      let val = values[6] as InputWebDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    if (this.has_content()) {
      let val = values[7] as InputWebDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    {
      let val = values[8] as InputBotInlineMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(InputBotInlineResultS._id, InputBotInlineResultS);

/**
 * botInlineMessageMediaAuto:BotInlineMessage
 * #764cf810:1984755728:1984755728
 * flags:#
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export class BotInlineMessageMediaAutoS {
  static _id = 0x764cf810;

  _values = [0, "", [], new ReplyMarkupT()] as [
    number,
    string,
    MessageEntityT[],
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_message(): string {
    return this._values[1];
  }
  set_message(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[2];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[3];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineMessageMediaAutoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_entities()) {
      let val = values[2] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineMessageMediaAutoS._id) panic(id.toString(16));
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

    if (this.has_entities()) {
      let val = values[2] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(BotInlineMessageMediaAutoS._id, BotInlineMessageMediaAutoS);

/**
 * botInlineMessageText:BotInlineMessage
 * #8c7f65e2:2357159394:-1937807902
 * flags:#
 * no_webpage:flags.0?true
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export class BotInlineMessageTextS {
  static _id = 0x8c7f65e2;

  _values = [0, true, "", [], new ReplyMarkupT()] as [
    number,
    true,
    string,
    MessageEntityT[],
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_no_webpage(): true {
    return this._values[1];
  }
  set_no_webpage(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_no_webpage(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_message(): string {
    return this._values[2];
  }
  set_message(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[3];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[4];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineMessageTextS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_no_webpage()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_entities()) {
      let val = values[3] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    if (this.has_reply_markup()) {
      let val = values[4] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineMessageTextS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_no_webpage()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_entities()) {
      let val = values[3] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[4] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(BotInlineMessageTextS._id, BotInlineMessageTextS);

/**
 * botInlineResult:BotInlineResult
 * #11965f3a:295067450:295067450
 * flags:#
 * id:string
 * type:string
 * title:flags.1?string
 * description:flags.2?string
 * url:flags.3?string
 * thumb:flags.4?WebDocument
 * content:flags.5?WebDocument
 * send_message:BotInlineMessage
 */
export class BotInlineResultS {
  static _id = 0x11965f3a;

  _values = [
    0,
    "",
    "",
    "",
    "",
    "",
    new WebDocumentT(),
    new WebDocumentT(),
    new BotInlineMessageT()
  ] as [
    number,
    string,
    string,
    string,
    string,
    string,
    WebDocumentT,
    WebDocumentT,
    BotInlineMessageT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): string {
    return this._values[1];
  }
  set_id(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_type(): string {
    return this._values[2];
  }
  set_type(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_title(): string {
    return this._values[3];
  }
  set_title(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_title(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_description(): string {
    return this._values[4];
  }
  set_description(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_description(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_url(): string {
    return this._values[5];
  }
  set_url(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_url(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_thumb(): WebDocumentT {
    return this._values[6];
  }
  set_thumb(val: WebDocumentT): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_thumb(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_content(): WebDocumentT {
    return this._values[7];
  }
  set_content(val: WebDocumentT): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_content(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_send_message(): BotInlineMessageT {
    return this._values[8];
  }
  set_send_message(val: BotInlineMessageT): this {
    this._values[8] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineResultS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_title()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_description()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_url()) {
      let val = values[5] as string;
      buf.writeString(val);
    }

    if (this.has_thumb()) {
      let val = values[6] as WebDocumentT;
      val._write(buf);
    }

    if (this.has_content()) {
      let val = values[7] as WebDocumentT;
      val._write(buf);
    }

    {
      let val = values[8] as BotInlineMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineResultS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_title()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_description()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_url()) {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    if (this.has_thumb()) {
      let val = values[6] as WebDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    if (this.has_content()) {
      let val = values[7] as WebDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    {
      let val = values[8] as BotInlineMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(BotInlineResultS._id, BotInlineResultS);

/**
 * messages.botResults:messages.BotResults
 * #947ca848:2491197512:-1803769784
 * flags:#
 * gallery:flags.0?true
 * query_id:long
 * next_offset:flags.1?string
 * switch_pm:flags.2?InlineBotSwitchPM
 * results:Vector<BotInlineResult>
 * cache_time:int
 * users:Vector<User>
 */
export class MessagesBotResultsS {
  static _id = 0x947ca848;

  _values = [0, true, [0, 0], "", new InlineBotSwitchPmT(), [], 0, []] as [
    number,
    true,
    ProtoLong,
    string,
    InlineBotSwitchPmT,
    BotInlineResultT[],
    number,
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_gallery(): true {
    return this._values[1];
  }
  set_gallery(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_gallery(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_query_id(): ProtoLong {
    return this._values[2];
  }
  set_query_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_next_offset(): string {
    return this._values[3];
  }
  set_next_offset(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_next_offset(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_switch_pm(): InlineBotSwitchPmT {
    return this._values[4];
  }
  set_switch_pm(val: InlineBotSwitchPmT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_switch_pm(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_results(): BotInlineResultT[] {
    return this._values[5];
  }
  set_results(val: BotInlineResultT[]): this {
    this._values[5] = val;

    return this;
  }

  get_cache_time(): number {
    return this._values[6];
  }
  set_cache_time(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[7];
  }
  set_users(val: UserT[]): this {
    this._values[7] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesBotResultsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_gallery()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_next_offset()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_switch_pm()) {
      let val = values[4] as InlineBotSwitchPmT;
      val._write(buf);
    }

    {
      let val = values[5] as BotInlineResultT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesBotResultsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_gallery()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong;
      val = buf.readLong();
      values[2] = val;
    }

    if (this.has_next_offset()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_switch_pm()) {
      let val = values[4] as InlineBotSwitchPmT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    {
      let val = values[5] as BotInlineResultT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: BotInlineResultT = new BotInlineResultT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesBotResultsS._id, MessagesBotResultsS);

/**
 * updateBotInlineQuery:Update
 * #54826690:1417832080:1417832080
 * flags:#
 * query_id:long
 * user_id:int
 * query:string
 * geo:flags.0?GeoPoint
 * offset:string
 */
export class UpdateBotInlineQueryS {
  static _id = 0x54826690;

  _values = [0, [0, 0], 0, "", new GeoPointT(), ""] as [
    number,
    ProtoLong,
    number,
    string,
    GeoPointT,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_query_id(): ProtoLong {
    return this._values[1];
  }
  set_query_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[2];
  }
  set_user_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_query(): string {
    return this._values[3];
  }
  set_query(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_geo(): GeoPointT {
    return this._values[4];
  }
  set_geo(val: GeoPointT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_geo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_offset(): string {
    return this._values[5];
  }
  set_offset(val: string): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotInlineQueryS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_geo()) {
      let val = values[4] as GeoPointT;
      val._write(buf);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateBotInlineQueryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_geo()) {
      let val = values[4] as GeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateBotInlineQueryS._id, UpdateBotInlineQueryS);

/**
 * updateBotInlineSend:Update
 * #e48f964:239663460:239663460
 * flags:#
 * user_id:int
 * query:string
 * geo:flags.0?GeoPoint
 * id:string
 * msg_id:flags.1?InputBotInlineMessageID
 */
export class UpdateBotInlineSendS {
  static _id = 0xe48f964;

  _values = [0, 0, "", new GeoPointT(), "", new InputBotInlineMessageIdT()] as [
    number,
    number,
    string,
    GeoPointT,
    string,
    InputBotInlineMessageIdT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_query(): string {
    return this._values[2];
  }
  set_query(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_geo(): GeoPointT {
    return this._values[3];
  }
  set_geo(val: GeoPointT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_geo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_id(): string {
    return this._values[4];
  }
  set_id(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_msg_id(): InputBotInlineMessageIdT {
    return this._values[5];
  }
  set_msg_id(val: InputBotInlineMessageIdT): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotInlineSendS._id);

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
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_geo()) {
      let val = values[3] as GeoPointT;
      val._write(buf);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_msg_id()) {
      let val = values[5] as InputBotInlineMessageIdT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateBotInlineSendS._id) panic(id.toString(16));
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
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_geo()) {
      let val = values[3] as GeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_msg_id()) {
      let val = values[5] as InputBotInlineMessageIdT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateBotInlineSendS._id, UpdateBotInlineSendS);

/**
 * inputMessagesFilterVoice:MessagesFilter
 * #50f5c392:1358283666:1358283666
 *
 */
export class InputMessagesFilterVoiceS {
  static _id = 0x50f5c392;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterVoiceS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterVoiceS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterVoiceS._id, InputMessagesFilterVoiceS);

/**
 * inputMessagesFilterMusic:MessagesFilter
 * #3751b49e:928101534:928101534
 *
 */
export class InputMessagesFilterMusicS {
  static _id = 0x3751b49e;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterMusicS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterMusicS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputMessagesFilterMusicS._id, InputMessagesFilterMusicS);

/**
 * inputPrivacyKeyChatInvite:InputPrivacyKey
 * #bdfb0426:3187344422:-1107622874
 *
 */
export class InputPrivacyKeyChatInviteS {
  static _id = 0xbdfb0426;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyKeyChatInviteS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyKeyChatInviteS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputPrivacyKeyChatInviteS._id, InputPrivacyKeyChatInviteS);

/**
 * privacyKeyChatInvite:PrivacyKey
 * #500e6dfa:1343122938:1343122938
 *
 */
export class PrivacyKeyChatInviteS {
  static _id = 0x500e6dfa;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyKeyChatInviteS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyKeyChatInviteS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PrivacyKeyChatInviteS._id, PrivacyKeyChatInviteS);

/**
 * exportedMessageLink:ExportedMessageLink
 * #5dab1af4:1571494644:1571494644
 * link:string
 * html:string
 */
export class ExportedMessageLinkS {
  static _id = 0x5dab1af4;

  _values = ["", ""] as [string, string];

  get_link(): string {
    return this._values[0];
  }
  set_link(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_html(): string {
    return this._values[1];
  }
  set_html(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ExportedMessageLinkS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== ExportedMessageLinkS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(ExportedMessageLinkS._id, ExportedMessageLinkS);

/**
 * messageFwdHeader:MessageFwdHeader
 * #ec338270:3962798704:-332168592
 * flags:#
 * from_id:flags.0?int
 * from_name:flags.5?string
 * date:int
 * channel_id:flags.1?int
 * channel_post:flags.2?int
 * post_author:flags.3?string
 * saved_from_peer:flags.4?Peer
 * saved_from_msg_id:flags.4?int
 */
export class MessageFwdHeaderS {
  static _id = 0xec338270;

  _values = [0, 0, "", 0, 0, 0, "", new PeerT(), 0] as [
    number,
    number,
    string,
    number,
    number,
    number,
    string,
    PeerT,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_from_id(): number {
    return this._values[1];
  }
  set_from_id(val: number): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_from_id(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_from_name(): string {
    return this._values[2];
  }
  set_from_name(val: string): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_from_name(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_date(): number {
    return this._values[3];
  }
  set_date(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_channel_id(): number {
    return this._values[4];
  }
  set_channel_id(val: number): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_channel_id(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_channel_post(): number {
    return this._values[5];
  }
  set_channel_post(val: number): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_channel_post(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_post_author(): string {
    return this._values[6];
  }
  set_post_author(val: string): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_post_author(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_saved_from_peer(): PeerT {
    return this._values[7];
  }
  set_saved_from_peer(val: PeerT): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_saved_from_peer(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_saved_from_msg_id(): number {
    return this._values[8];
  }
  set_saved_from_msg_id(val: number): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_saved_from_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageFwdHeaderS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_from_id()) {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    if (this.has_from_name()) {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    if (this.has_channel_id()) {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    if (this.has_channel_post()) {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    if (this.has_post_author()) {
      let val = values[6] as string;
      buf.writeString(val);
    }

    if (this.has_saved_from_peer()) {
      let val = values[7] as PeerT;
      val._write(buf);
    }

    if (this.has_saved_from_msg_id()) {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageFwdHeaderS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_from_id()) {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    if (this.has_from_name()) {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    if (this.has_channel_id()) {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    if (this.has_channel_post()) {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    if (this.has_post_author()) {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    if (this.has_saved_from_peer()) {
      let val = values[7] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    if (this.has_saved_from_msg_id()) {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(MessageFwdHeaderS._id, MessageFwdHeaderS);

/**
 * updateEditChannelMessage:Update
 * #1b3f4df7:457133559:457133559
 * message:Message
 * pts:int
 * pts_count:int
 */
export class UpdateEditChannelMessageS {
  static _id = 0x1b3f4df7;

  _values = [new MessageT(), 0, 0] as [MessageT, number, number];

  get_message(): MessageT {
    return this._values[0];
  }
  set_message(val: MessageT): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateEditChannelMessageS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT;
      val._write(buf);
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
      if (id !== UpdateEditChannelMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateEditChannelMessageS._id, UpdateEditChannelMessageS);

/**
 * updateChannelPinnedMessage:Update
 * #98592475:2555978869:-1738988427
 * channel_id:int
 * id:int
 */
export class UpdateChannelPinnedMessageS {
  static _id = 0x98592475;

  _values = [0, 0] as [number, number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): number {
    return this._values[1];
  }
  set_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChannelPinnedMessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== UpdateChannelPinnedMessageS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(UpdateChannelPinnedMessageS._id, UpdateChannelPinnedMessageS);

/**
 * messageActionPinMessage:MessageAction
 * #94bd38ed:2495428845:-1799538451
 *
 */
export class MessageActionPinMessageS {
  static _id = 0x94bd38ed;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionPinMessageS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionPinMessageS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(MessageActionPinMessageS._id, MessageActionPinMessageS);

/**
 * auth.codeTypeSms:auth.CodeType
 * #72a3158c:1923290508:1923290508
 *
 */
export class AuthCodeTypeSmsS {
  static _id = 0x72a3158c;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthCodeTypeSmsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthCodeTypeSmsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(AuthCodeTypeSmsS._id, AuthCodeTypeSmsS);

/**
 * auth.codeTypeCall:auth.CodeType
 * #741cd3e3:1948046307:1948046307
 *
 */
export class AuthCodeTypeCallS {
  static _id = 0x741cd3e3;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthCodeTypeCallS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthCodeTypeCallS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(AuthCodeTypeCallS._id, AuthCodeTypeCallS);

/**
 * auth.codeTypeFlashCall:auth.CodeType
 * #226ccefb:577556219:577556219
 *
 */
export class AuthCodeTypeFlashCallS {
  static _id = 0x226ccefb;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthCodeTypeFlashCallS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthCodeTypeFlashCallS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(AuthCodeTypeFlashCallS._id, AuthCodeTypeFlashCallS);

/**
 * auth.sentCodeTypeApp:auth.SentCodeType
 * #3dbb5986:1035688326:1035688326
 * length:int
 */
export class AuthSentCodeTypeAppS {
  static _id = 0x3dbb5986;

  _values = [0] as [number];

  get_length(): number {
    return this._values[0];
  }
  set_length(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthSentCodeTypeAppS._id);

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
      if (id !== AuthSentCodeTypeAppS._id) panic(id.toString(16));
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
AllStructs.set(AuthSentCodeTypeAppS._id, AuthSentCodeTypeAppS);

/**
 * auth.sentCodeTypeSms:auth.SentCodeType
 * #c000bba2:3221273506:-1073693790
 * length:int
 */
export class AuthSentCodeTypeSmsS {
  static _id = 0xc000bba2;

  _values = [0] as [number];

  get_length(): number {
    return this._values[0];
  }
  set_length(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthSentCodeTypeSmsS._id);

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
      if (id !== AuthSentCodeTypeSmsS._id) panic(id.toString(16));
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
AllStructs.set(AuthSentCodeTypeSmsS._id, AuthSentCodeTypeSmsS);

/**
 * auth.sentCodeTypeCall:auth.SentCodeType
 * #5353e5a7:1398007207:1398007207
 * length:int
 */
export class AuthSentCodeTypeCallS {
  static _id = 0x5353e5a7;

  _values = [0] as [number];

  get_length(): number {
    return this._values[0];
  }
  set_length(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthSentCodeTypeCallS._id);

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
      if (id !== AuthSentCodeTypeCallS._id) panic(id.toString(16));
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
AllStructs.set(AuthSentCodeTypeCallS._id, AuthSentCodeTypeCallS);

/**
 * auth.sentCodeTypeFlashCall:auth.SentCodeType
 * #ab03c6d9:2869151449:-1425815847
 * pattern:string
 */
export class AuthSentCodeTypeFlashCallS {
  static _id = 0xab03c6d9;

  _values = [""] as [string];

  get_pattern(): string {
    return this._values[0];
  }
  set_pattern(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AuthSentCodeTypeFlashCallS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== AuthSentCodeTypeFlashCallS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(AuthSentCodeTypeFlashCallS._id, AuthSentCodeTypeFlashCallS);

/**
 * keyboardButtonUrl:KeyboardButton
 * #258aff05:629866245:629866245
 * text:string
 * url:string
 */
export class KeyboardButtonUrlS {
  static _id = 0x258aff05;

  _values = ["", ""] as [string, string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_url(): string {
    return this._values[1];
  }
  set_url(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonUrlS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== KeyboardButtonUrlS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(KeyboardButtonUrlS._id, KeyboardButtonUrlS);

/**
 * keyboardButtonCallback:KeyboardButton
 * #683a5e46:1748655686:1748655686
 * text:string
 * data:bytes
 */
export class KeyboardButtonCallbackS {
  static _id = 0x683a5e46;

  _values = ["", new Uint8Array()] as [string, Uint8Array];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_data(): Uint8Array {
    return this._values[1];
  }
  set_data(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonCallbackS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== KeyboardButtonCallbackS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(KeyboardButtonCallbackS._id, KeyboardButtonCallbackS);

/**
 * keyboardButtonRequestPhone:KeyboardButton
 * #b16a6c29:2976541737:-1318425559
 * text:string
 */
export class KeyboardButtonRequestPhoneS {
  static _id = 0xb16a6c29;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonRequestPhoneS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== KeyboardButtonRequestPhoneS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(KeyboardButtonRequestPhoneS._id, KeyboardButtonRequestPhoneS);

/**
 * keyboardButtonRequestGeoLocation:KeyboardButton
 * #fc796b3f:4235815743:-59151553
 * text:string
 */
export class KeyboardButtonRequestGeoLocationS {
  static _id = 0xfc796b3f;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonRequestGeoLocationS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== KeyboardButtonRequestGeoLocationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(
  KeyboardButtonRequestGeoLocationS._id,
  KeyboardButtonRequestGeoLocationS
);

/**
 * keyboardButtonSwitchInline:KeyboardButton
 * #568a748:90744648:90744648
 * flags:#
 * same_peer:flags.0?true
 * text:string
 * query:string
 */
export class KeyboardButtonSwitchInlineS {
  static _id = 0x568a748;

  _values = [0, true, "", ""] as [number, true, string, string];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_same_peer(): true {
    return this._values[1];
  }
  set_same_peer(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_same_peer(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_text(): string {
    return this._values[2];
  }
  set_text(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_query(): string {
    return this._values[3];
  }
  set_query(val: string): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonSwitchInlineS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_same_peer()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== KeyboardButtonSwitchInlineS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_same_peer()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(KeyboardButtonSwitchInlineS._id, KeyboardButtonSwitchInlineS);

/**
 * replyInlineMarkup:ReplyMarkup
 * #48a30254:1218642516:1218642516
 * rows:Vector<KeyboardButtonRow>
 */
export class ReplyInlineMarkupS {
  static _id = 0x48a30254;

  _values = [[]] as [KeyboardButtonRowT[]];

  get_rows(): KeyboardButtonRowT[] {
    return this._values[0];
  }
  set_rows(val: KeyboardButtonRowT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ReplyInlineMarkupS._id);

    let values = this._values;

    {
      let val = values[0] as KeyboardButtonRowT[];

      buf.writeInt(481674261);
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
      if (id !== ReplyInlineMarkupS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as KeyboardButtonRowT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: KeyboardButtonRowT = new KeyboardButtonRowT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(ReplyInlineMarkupS._id, ReplyInlineMarkupS);

/**
 * messages.botCallbackAnswer:messages.BotCallbackAnswer
 * #36585ea4:911761060:911761060
 * flags:#
 * alert:flags.1?true
 * has_url:flags.3?true
 * native_ui:flags.4?true
 * message:flags.0?string
 * url:flags.2?string
 * cache_time:int
 */
export class MessagesBotCallbackAnswerS {
  static _id = 0x36585ea4;

  _values = [0, true, true, true, "", "", 0] as [
    number,
    true,
    true,
    true,
    string,
    string,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_alert(): true {
    return this._values[1];
  }
  set_alert(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_alert(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_has_url(): true {
    return this._values[2];
  }
  set_has_url(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_has_url(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_native_ui(): true {
    return this._values[3];
  }
  set_native_ui(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_native_ui(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_message(): string {
    return this._values[4];
  }
  set_message(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_message(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_url(): string {
    return this._values[5];
  }
  set_url(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_url(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_cache_time(): number {
    return this._values[6];
  }
  set_cache_time(val: number): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesBotCallbackAnswerS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_alert()) {
      let val = values[1] as true;
    }

    if (this.has_has_url()) {
      let val = values[2] as true;
    }

    if (this.has_native_ui()) {
      let val = values[3] as true;
    }

    if (this.has_message()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_url()) {
      let val = values[5] as string;
      buf.writeString(val);
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
      if (id !== MessagesBotCallbackAnswerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_alert()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_has_url()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_native_ui()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_message()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_url()) {
      let val = values[5] as string;
      val = buf.readString();
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
AllStructs.set(MessagesBotCallbackAnswerS._id, MessagesBotCallbackAnswerS);

/**
 * updateBotCallbackQuery:Update
 * #e73547e1:3879028705:-415938591
 * flags:#
 * query_id:long
 * user_id:int
 * peer:Peer
 * msg_id:int
 * chat_instance:long
 * data:flags.0?bytes
 * game_short_name:flags.1?string
 */
export class UpdateBotCallbackQueryS {
  static _id = 0xe73547e1;

  _values = [0, [0, 0], 0, new PeerT(), 0, [0, 0], new Uint8Array(), ""] as [
    number,
    ProtoLong,
    number,
    PeerT,
    number,
    ProtoLong,
    Uint8Array,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_query_id(): ProtoLong {
    return this._values[1];
  }
  set_query_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[2];
  }
  set_user_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_peer(): PeerT {
    return this._values[3];
  }
  set_peer(val: PeerT): this {
    this._values[3] = val;

    return this;
  }

  get_msg_id(): number {
    return this._values[4];
  }
  set_msg_id(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_chat_instance(): ProtoLong {
    return this._values[5];
  }
  set_chat_instance(val: ProtoLong): this {
    this._values[5] = val;

    return this;
  }

  get_data(): Uint8Array {
    return this._values[6];
  }
  set_data(val: Uint8Array): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_data(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_game_short_name(): string {
    return this._values[7];
  }
  set_game_short_name(val: string): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_game_short_name(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotCallbackQueryS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      let val = values[3] as PeerT;
      val._write(buf);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_data()) {
      let val = values[6] as Uint8Array;
      buf.writeBytes(val);
    }

    if (this.has_game_short_name()) {
      let val = values[7] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateBotCallbackQueryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
      let val = values[3] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as ProtoLong;
      val = buf.readLong();
      values[5] = val;
    }

    if (this.has_data()) {
      let val = values[6] as Uint8Array;
      val = buf.readBytes();
      values[6] = val;
    }

    if (this.has_game_short_name()) {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateBotCallbackQueryS._id, UpdateBotCallbackQueryS);

/**
 * messages.messageEditData:messages.MessageEditData
 * #26b5dde6:649453030:649453030
 * flags:#
 * caption:flags.0?true
 */
export class MessagesMessageEditDataS {
  static _id = 0x26b5dde6;

  _values = [0, true] as [number, true];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_caption(): true {
    return this._values[1];
  }
  set_caption(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_caption(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesMessageEditDataS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_caption()) {
      let val = values[1] as true;
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesMessageEditDataS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_caption()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesMessageEditDataS._id, MessagesMessageEditDataS);

/**
 * updateEditMessage:Update
 * #e40370a3:3825430691:-469536605
 * message:Message
 * pts:int
 * pts_count:int
 */
export class UpdateEditMessageS {
  static _id = 0xe40370a3;

  _values = [new MessageT(), 0, 0] as [MessageT, number, number];

  get_message(): MessageT {
    return this._values[0];
  }
  set_message(val: MessageT): this {
    this._values[0] = val;

    return this;
  }

  get_pts(): number {
    return this._values[1];
  }
  set_pts(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[2];
  }
  set_pts_count(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateEditMessageS._id);

    let values = this._values;

    {
      let val = values[0] as MessageT;
      val._write(buf);
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
      if (id !== UpdateEditMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as MessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateEditMessageS._id, UpdateEditMessageS);

/**
 * inputBotInlineMessageMediaGeo:InputBotInlineMessage
 * #c1b15d65:3249626469:-1045340827
 * flags:#
 * geo_point:InputGeoPoint
 * period:int
 * reply_markup:flags.2?ReplyMarkup
 */
export class InputBotInlineMessageMediaGeoS {
  static _id = 0xc1b15d65;

  _values = [0, new InputGeoPointT(), 0, new ReplyMarkupT()] as [
    number,
    InputGeoPointT,
    number,
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_geo_point(): InputGeoPointT {
    return this._values[1];
  }
  set_geo_point(val: InputGeoPointT): this {
    this._values[1] = val;

    return this;
  }

  get_period(): number {
    return this._values[2];
  }
  set_period(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[3];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageMediaGeoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as InputGeoPointT;
      val._write(buf);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineMessageMediaGeoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as InputGeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputBotInlineMessageMediaGeoS._id,
  InputBotInlineMessageMediaGeoS
);

/**
 * inputBotInlineMessageMediaVenue:InputBotInlineMessage
 * #417bbf11:1098628881:1098628881
 * flags:#
 * geo_point:InputGeoPoint
 * title:string
 * address:string
 * provider:string
 * venue_id:string
 * venue_type:string
 * reply_markup:flags.2?ReplyMarkup
 */
export class InputBotInlineMessageMediaVenueS {
  static _id = 0x417bbf11;

  _values = [
    0,
    new InputGeoPointT(),
    "",
    "",
    "",
    "",
    "",
    new ReplyMarkupT()
  ] as [
    number,
    InputGeoPointT,
    string,
    string,
    string,
    string,
    string,
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_geo_point(): InputGeoPointT {
    return this._values[1];
  }
  set_geo_point(val: InputGeoPointT): this {
    this._values[1] = val;

    return this;
  }

  get_title(): string {
    return this._values[2];
  }
  set_title(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_address(): string {
    return this._values[3];
  }
  set_address(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_provider(): string {
    return this._values[4];
  }
  set_provider(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_venue_id(): string {
    return this._values[5];
  }
  set_venue_id(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_venue_type(): string {
    return this._values[6];
  }
  set_venue_type(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[7];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageMediaVenueS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as InputGeoPointT;
      val._write(buf);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    if (this.has_reply_markup()) {
      let val = values[7] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineMessageMediaVenueS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as InputGeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[7] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputBotInlineMessageMediaVenueS._id,
  InputBotInlineMessageMediaVenueS
);

/**
 * inputBotInlineMessageMediaContact:InputBotInlineMessage
 * #a6edbffd:2800599037:-1494368259
 * flags:#
 * phone_number:string
 * first_name:string
 * last_name:string
 * vcard:string
 * reply_markup:flags.2?ReplyMarkup
 */
export class InputBotInlineMessageMediaContactS {
  static _id = 0xa6edbffd;

  _values = [0, "", "", "", "", new ReplyMarkupT()] as [
    number,
    string,
    string,
    string,
    string,
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_phone_number(): string {
    return this._values[1];
  }
  set_phone_number(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_first_name(): string {
    return this._values[2];
  }
  set_first_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_last_name(): string {
    return this._values[3];
  }
  set_last_name(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_vcard(): string {
    return this._values[4];
  }
  set_vcard(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[5];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageMediaContactS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_reply_markup()) {
      let val = values[5] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineMessageMediaContactS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[5] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputBotInlineMessageMediaContactS._id,
  InputBotInlineMessageMediaContactS
);

/**
 * botInlineMessageMediaGeo:BotInlineMessage
 * #b722de65:3072515685:-1222451611
 * flags:#
 * geo:GeoPoint
 * period:int
 * reply_markup:flags.2?ReplyMarkup
 */
export class BotInlineMessageMediaGeoS {
  static _id = 0xb722de65;

  _values = [0, new GeoPointT(), 0, new ReplyMarkupT()] as [
    number,
    GeoPointT,
    number,
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_geo(): GeoPointT {
    return this._values[1];
  }
  set_geo(val: GeoPointT): this {
    this._values[1] = val;

    return this;
  }

  get_period(): number {
    return this._values[2];
  }
  set_period(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[3];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineMessageMediaGeoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as GeoPointT;
      val._write(buf);
    }

    {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineMessageMediaGeoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as GeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[3] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(BotInlineMessageMediaGeoS._id, BotInlineMessageMediaGeoS);

/**
 * botInlineMessageMediaVenue:BotInlineMessage
 * #8a86659c:2324063644:-1970903652
 * flags:#
 * geo:GeoPoint
 * title:string
 * address:string
 * provider:string
 * venue_id:string
 * venue_type:string
 * reply_markup:flags.2?ReplyMarkup
 */
export class BotInlineMessageMediaVenueS {
  static _id = 0x8a86659c;

  _values = [0, new GeoPointT(), "", "", "", "", "", new ReplyMarkupT()] as [
    number,
    GeoPointT,
    string,
    string,
    string,
    string,
    string,
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_geo(): GeoPointT {
    return this._values[1];
  }
  set_geo(val: GeoPointT): this {
    this._values[1] = val;

    return this;
  }

  get_title(): string {
    return this._values[2];
  }
  set_title(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_address(): string {
    return this._values[3];
  }
  set_address(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_provider(): string {
    return this._values[4];
  }
  set_provider(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_venue_id(): string {
    return this._values[5];
  }
  set_venue_id(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_venue_type(): string {
    return this._values[6];
  }
  set_venue_type(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[7];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineMessageMediaVenueS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as GeoPointT;
      val._write(buf);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    if (this.has_reply_markup()) {
      let val = values[7] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineMessageMediaVenueS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as GeoPointT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[7] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(BotInlineMessageMediaVenueS._id, BotInlineMessageMediaVenueS);

/**
 * botInlineMessageMediaContact:BotInlineMessage
 * #18d1cdc2:416402882:416402882
 * flags:#
 * phone_number:string
 * first_name:string
 * last_name:string
 * vcard:string
 * reply_markup:flags.2?ReplyMarkup
 */
export class BotInlineMessageMediaContactS {
  static _id = 0x18d1cdc2;

  _values = [0, "", "", "", "", new ReplyMarkupT()] as [
    number,
    string,
    string,
    string,
    string,
    ReplyMarkupT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_phone_number(): string {
    return this._values[1];
  }
  set_phone_number(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_first_name(): string {
    return this._values[2];
  }
  set_first_name(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_last_name(): string {
    return this._values[3];
  }
  set_last_name(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_vcard(): string {
    return this._values[4];
  }
  set_vcard(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[5];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineMessageMediaContactS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_reply_markup()) {
      let val = values[5] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineMessageMediaContactS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[5] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(
  BotInlineMessageMediaContactS._id,
  BotInlineMessageMediaContactS
);

/**
 * inputBotInlineResultPhoto:InputBotInlineResult
 * #a8d864a7:2832753831:-1462213465
 * id:string
 * type:string
 * photo:InputPhoto
 * send_message:InputBotInlineMessage
 */
export class InputBotInlineResultPhotoS {
  static _id = 0xa8d864a7;

  _values = ["", "", new InputPhotoT(), new InputBotInlineMessageT()] as [
    string,
    string,
    InputPhotoT,
    InputBotInlineMessageT
  ];

  get_id(): string {
    return this._values[0];
  }
  set_id(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_type(): string {
    return this._values[1];
  }
  set_type(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_photo(): InputPhotoT {
    return this._values[2];
  }
  set_photo(val: InputPhotoT): this {
    this._values[2] = val;

    return this;
  }

  get_send_message(): InputBotInlineMessageT {
    return this._values[3];
  }
  set_send_message(val: InputBotInlineMessageT): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineResultPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as InputPhotoT;
      val._write(buf);
    }

    {
      let val = values[3] as InputBotInlineMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineResultPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as InputPhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    {
      let val = values[3] as InputBotInlineMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputBotInlineResultPhotoS._id, InputBotInlineResultPhotoS);

/**
 * inputBotInlineResultDocument:InputBotInlineResult
 * #fff8fdc4:4294507972:-459324
 * flags:#
 * id:string
 * type:string
 * title:flags.1?string
 * description:flags.2?string
 * document:InputDocument
 * send_message:InputBotInlineMessage
 */
export class InputBotInlineResultDocumentS {
  static _id = 0xfff8fdc4;

  _values = [
    0,
    "",
    "",
    "",
    "",
    new InputDocumentT(),
    new InputBotInlineMessageT()
  ] as [
    number,
    string,
    string,
    string,
    string,
    InputDocumentT,
    InputBotInlineMessageT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): string {
    return this._values[1];
  }
  set_id(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_type(): string {
    return this._values[2];
  }
  set_type(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_title(): string {
    return this._values[3];
  }
  set_title(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_title(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_description(): string {
    return this._values[4];
  }
  set_description(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_description(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_document(): InputDocumentT {
    return this._values[5];
  }
  set_document(val: InputDocumentT): this {
    this._values[5] = val;

    return this;
  }

  get_send_message(): InputBotInlineMessageT {
    return this._values[6];
  }
  set_send_message(val: InputBotInlineMessageT): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineResultDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_title()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_description()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as InputDocumentT;
      val._write(buf);
    }

    {
      let val = values[6] as InputBotInlineMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineResultDocumentS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_title()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_description()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as InputDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    {
      let val = values[6] as InputBotInlineMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputBotInlineResultDocumentS._id,
  InputBotInlineResultDocumentS
);

/**
 * botInlineMediaResult:BotInlineResult
 * #17db940b:400266251:400266251
 * flags:#
 * id:string
 * type:string
 * photo:flags.0?Photo
 * document:flags.1?Document
 * title:flags.2?string
 * description:flags.3?string
 * send_message:BotInlineMessage
 */
export class BotInlineMediaResultS {
  static _id = 0x17db940b;

  _values = [
    0,
    "",
    "",
    new PhotoT(),
    new DocumentT(),
    "",
    "",
    new BotInlineMessageT()
  ] as [
    number,
    string,
    string,
    PhotoT,
    DocumentT,
    string,
    string,
    BotInlineMessageT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): string {
    return this._values[1];
  }
  set_id(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_type(): string {
    return this._values[2];
  }
  set_type(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_photo(): PhotoT {
    return this._values[3];
  }
  set_photo(val: PhotoT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_photo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_document(): DocumentT {
    return this._values[4];
  }
  set_document(val: DocumentT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_document(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_title(): string {
    return this._values[5];
  }
  set_title(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_title(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_description(): string {
    return this._values[6];
  }
  set_description(val: string): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_description(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_send_message(): BotInlineMessageT {
    return this._values[7];
  }
  set_send_message(val: BotInlineMessageT): this {
    this._values[7] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(BotInlineMediaResultS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_photo()) {
      let val = values[3] as PhotoT;
      val._write(buf);
    }

    if (this.has_document()) {
      let val = values[4] as DocumentT;
      val._write(buf);
    }

    if (this.has_title()) {
      let val = values[5] as string;
      buf.writeString(val);
    }

    if (this.has_description()) {
      let val = values[6] as string;
      buf.writeString(val);
    }

    {
      let val = values[7] as BotInlineMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== BotInlineMediaResultS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_photo()) {
      let val = values[3] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    if (this.has_document()) {
      let val = values[4] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    if (this.has_title()) {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    if (this.has_description()) {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    {
      let val = values[7] as BotInlineMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(BotInlineMediaResultS._id, BotInlineMediaResultS);

/**
 * inputBotInlineMessageID:InputBotInlineMessageID
 * #890c3d89:2299280777:-1995686519
 * dc_id:int
 * id:long
 * access_hash:long
 */
export class InputBotInlineMessageIdS {
  static _id = 0x890c3d89;

  _values = [0, [0, 0], [0, 0]] as [number, ProtoLong, ProtoLong];

  get_dc_id(): number {
    return this._values[0];
  }
  set_dc_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): ProtoLong {
    return this._values[1];
  }
  set_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[2];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageIdS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== InputBotInlineMessageIdS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
AllStructs.set(InputBotInlineMessageIdS._id, InputBotInlineMessageIdS);

/**
 * updateInlineBotCallbackQuery:Update
 * #f9d27a5a:4191320666:-103646630
 * flags:#
 * query_id:long
 * user_id:int
 * msg_id:InputBotInlineMessageID
 * chat_instance:long
 * data:flags.0?bytes
 * game_short_name:flags.1?string
 */
export class UpdateInlineBotCallbackQueryS {
  static _id = 0xf9d27a5a;

  _values = [
    0,
    [0, 0],
    0,
    new InputBotInlineMessageIdT(),
    [0, 0],
    new Uint8Array(),
    ""
  ] as [
    number,
    ProtoLong,
    number,
    InputBotInlineMessageIdT,
    ProtoLong,
    Uint8Array,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_query_id(): ProtoLong {
    return this._values[1];
  }
  set_query_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[2];
  }
  set_user_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_msg_id(): InputBotInlineMessageIdT {
    return this._values[3];
  }
  set_msg_id(val: InputBotInlineMessageIdT): this {
    this._values[3] = val;

    return this;
  }

  get_chat_instance(): ProtoLong {
    return this._values[4];
  }
  set_chat_instance(val: ProtoLong): this {
    this._values[4] = val;

    return this;
  }

  get_data(): Uint8Array {
    return this._values[5];
  }
  set_data(val: Uint8Array): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_data(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_game_short_name(): string {
    return this._values[6];
  }
  set_game_short_name(val: string): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_game_short_name(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateInlineBotCallbackQueryS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      let val = values[3] as InputBotInlineMessageIdT;
      val._write(buf);
    }

    {
      let val = values[4] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_data()) {
      let val = values[5] as Uint8Array;
      buf.writeBytes(val);
    }

    if (this.has_game_short_name()) {
      let val = values[6] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateInlineBotCallbackQueryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
      let val = values[3] as InputBotInlineMessageIdT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as ProtoLong;
      val = buf.readLong();
      values[4] = val;
    }

    if (this.has_data()) {
      let val = values[5] as Uint8Array;
      val = buf.readBytes();
      values[5] = val;
    }

    if (this.has_game_short_name()) {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(
  UpdateInlineBotCallbackQueryS._id,
  UpdateInlineBotCallbackQueryS
);

/**
 * inlineBotSwitchPM:InlineBotSwitchPM
 * #3c20629f:1008755359:1008755359
 * text:string
 * start_param:string
 */
export class InlineBotSwitchPmS {
  static _id = 0x3c20629f;

  _values = ["", ""] as [string, string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_start_param(): string {
    return this._values[1];
  }
  set_start_param(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InlineBotSwitchPmS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== InlineBotSwitchPmS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(InlineBotSwitchPmS._id, InlineBotSwitchPmS);

/**
 * messages.peerDialogs:messages.PeerDialogs
 * #3371c354:863093588:863093588
 * dialogs:Vector<Dialog>
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 * state:updates.State
 */
export class MessagesPeerDialogsS {
  static _id = 0x3371c354;

  _values = [[], [], [], [], new UpdatesStateT()] as [
    DialogT[],
    MessageT[],
    ChatT[],
    UserT[],
    UpdatesStateT
  ];

  get_dialogs(): DialogT[] {
    return this._values[0];
  }
  set_dialogs(val: DialogT[]): this {
    this._values[0] = val;

    return this;
  }

  get_messages(): MessageT[] {
    return this._values[1];
  }
  set_messages(val: MessageT[]): this {
    this._values[1] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[2];
  }
  set_chats(val: ChatT[]): this {
    this._values[2] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[3];
  }
  set_users(val: UserT[]): this {
    this._values[3] = val;

    return this;
  }

  get_state(): UpdatesStateT {
    return this._values[4];
  }
  set_state(val: UpdatesStateT): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesPeerDialogsS._id);

    let values = this._values;

    {
      let val = values[0] as DialogT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as MessageT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as UserT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[4] as UpdatesStateT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesPeerDialogsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as DialogT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DialogT = new DialogT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as MessageT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageT = new MessageT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    {
      let val = values[4] as UpdatesStateT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesPeerDialogsS._id, MessagesPeerDialogsS);

/**
 * topPeer:TopPeer
 * #edcdc05b:3989684315:-305282981
 * peer:Peer
 * rating:double
 */
export class TopPeerS {
  static _id = 0xedcdc05b;

  _values = [new PeerT(), 0.0] as [PeerT, number];

  get_peer(): PeerT {
    return this._values[0];
  }
  set_peer(val: PeerT): this {
    this._values[0] = val;

    return this;
  }

  get_rating(): number {
    return this._values[1];
  }
  set_rating(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerS._id);

    let values = this._values;

    {
      let val = values[0] as PeerT;
      val._write(buf);
    }

    {
      let val = values[1] as number;
      buf.writeDouble(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TopPeerS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readDouble();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(TopPeerS._id, TopPeerS);

/**
 * topPeerCategoryBotsPM:TopPeerCategory
 * #ab661b5b:2875595611:-1419371685
 *
 */
export class TopPeerCategoryBotsPmS {
  static _id = 0xab661b5b;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerCategoryBotsPmS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TopPeerCategoryBotsPmS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(TopPeerCategoryBotsPmS._id, TopPeerCategoryBotsPmS);

/**
 * topPeerCategoryBotsInline:TopPeerCategory
 * #148677e2:344356834:344356834
 *
 */
export class TopPeerCategoryBotsInlineS {
  static _id = 0x148677e2;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerCategoryBotsInlineS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TopPeerCategoryBotsInlineS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(TopPeerCategoryBotsInlineS._id, TopPeerCategoryBotsInlineS);

/**
 * topPeerCategoryCorrespondents:TopPeerCategory
 * #637b7ed:104314861:104314861
 *
 */
export class TopPeerCategoryCorrespondentsS {
  static _id = 0x637b7ed;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerCategoryCorrespondentsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TopPeerCategoryCorrespondentsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  TopPeerCategoryCorrespondentsS._id,
  TopPeerCategoryCorrespondentsS
);

/**
 * topPeerCategoryGroups:TopPeerCategory
 * #bd17a14a:3172442442:-1122524854
 *
 */
export class TopPeerCategoryGroupsS {
  static _id = 0xbd17a14a;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerCategoryGroupsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TopPeerCategoryGroupsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(TopPeerCategoryGroupsS._id, TopPeerCategoryGroupsS);

/**
 * topPeerCategoryChannels:TopPeerCategory
 * #161d9628:371037736:371037736
 *
 */
export class TopPeerCategoryChannelsS {
  static _id = 0x161d9628;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerCategoryChannelsS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TopPeerCategoryChannelsS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(TopPeerCategoryChannelsS._id, TopPeerCategoryChannelsS);

/**
 * topPeerCategoryPeers:TopPeerCategoryPeers
 * #fb834291:4219683473:-75283823
 * category:TopPeerCategory
 * count:int
 * peers:Vector<TopPeer>
 */
export class TopPeerCategoryPeersS {
  static _id = 0xfb834291;

  _values = [new TopPeerCategoryT(), 0, []] as [
    TopPeerCategoryT,
    number,
    TopPeerT[]
  ];

  get_category(): TopPeerCategoryT {
    return this._values[0];
  }
  set_category(val: TopPeerCategoryT): this {
    this._values[0] = val;

    return this;
  }

  get_count(): number {
    return this._values[1];
  }
  set_count(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_peers(): TopPeerT[] {
    return this._values[2];
  }
  set_peers(val: TopPeerT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TopPeerCategoryPeersS._id);

    let values = this._values;

    {
      let val = values[0] as TopPeerCategoryT;
      val._write(buf);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as TopPeerT[];

      buf.writeInt(481674261);
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
      if (id !== TopPeerCategoryPeersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as TopPeerCategoryT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as TopPeerT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: TopPeerT = new TopPeerT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(TopPeerCategoryPeersS._id, TopPeerCategoryPeersS);

/**
 * contacts.topPeersNotModified:contacts.TopPeers
 * #de266ef5:3727060725:-567906571
 *
 */
export class ContactsTopPeersNotModifiedS {
  static _id = 0xde266ef5;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsTopPeersNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== ContactsTopPeersNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(ContactsTopPeersNotModifiedS._id, ContactsTopPeersNotModifiedS);

/**
 * contacts.topPeers:contacts.TopPeers
 * #70b772a8:1891070632:1891070632
 * categories:Vector<TopPeerCategoryPeers>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export class ContactsTopPeersS {
  static _id = 0x70b772a8;

  _values = [[], [], []] as [
    TopPeerCategoryPeersT[],
    ChatT[],
    UserT[]
  ];

  get_categories(): TopPeerCategoryPeersT[] {
    return this._values[0];
  }
  set_categories(val: TopPeerCategoryPeersT[]): this {
    this._values[0] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[1];
  }
  set_chats(val: ChatT[]): this {
    this._values[1] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[2];
  }
  set_users(val: UserT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ContactsTopPeersS._id);

    let values = this._values;

    {
      let val = values[0] as TopPeerCategoryPeersT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as ChatT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== ContactsTopPeersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as TopPeerCategoryPeersT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: TopPeerCategoryPeersT = new TopPeerCategoryPeersT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ContactsTopPeersS._id, ContactsTopPeersS);

/**
 * messageEntityMentionName:MessageEntity
 * #352dca58:892193368:892193368
 * offset:int
 * length:int
 * user_id:int
 */
export class MessageEntityMentionNameS {
  static _id = 0x352dca58;

  _values = [0, 0, 0] as [number, number, number];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[2];
  }
  set_user_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageEntityMentionNameS._id);

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
      if (id !== MessageEntityMentionNameS._id) panic(id.toString(16));
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
AllStructs.set(MessageEntityMentionNameS._id, MessageEntityMentionNameS);

/**
 * inputMessageEntityMentionName:MessageEntity
 * #208e68c9:546203849:546203849
 * offset:int
 * length:int
 * user_id:InputUser
 */
export class InputMessageEntityMentionNameS {
  static _id = 0x208e68c9;

  _values = [0, 0, new InputUserT()] as [number, number, InputUserT];

  get_offset(): number {
    return this._values[0];
  }
  set_offset(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_length(): number {
    return this._values[1];
  }
  set_length(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_user_id(): InputUserT {
    return this._values[2];
  }
  set_user_id(val: InputUserT): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessageEntityMentionNameS._id);

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
      let val = values[2] as InputUserT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessageEntityMentionNameS._id) panic(id.toString(16));
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
      let val = values[2] as InputUserT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(
  InputMessageEntityMentionNameS._id,
  InputMessageEntityMentionNameS
);

/**
 * inputMessagesFilterChatPhotos:MessagesFilter
 * #3a20ecb8:975236280:975236280
 *
 */
export class InputMessagesFilterChatPhotosS {
  static _id = 0x3a20ecb8;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMessagesFilterChatPhotosS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMessagesFilterChatPhotosS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  InputMessagesFilterChatPhotosS._id,
  InputMessagesFilterChatPhotosS
);

/**
 * updateReadChannelOutbox:Update
 * #25d6c9c7:634833351:634833351
 * channel_id:int
 * max_id:int
 */
export class UpdateReadChannelOutboxS {
  static _id = 0x25d6c9c7;

  _values = [0, 0] as [number, number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_max_id(): number {
    return this._values[1];
  }
  set_max_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateReadChannelOutboxS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      if (id !== UpdateReadChannelOutboxS._id) panic(id.toString(16));
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

    return this;
  }
}
AllStructs.set(UpdateReadChannelOutboxS._id, UpdateReadChannelOutboxS);

/**
 * updateDraftMessage:Update
 * #ee2bb969:3995842921:-299124375
 * peer:Peer
 * draft:DraftMessage
 */
export class UpdateDraftMessageS {
  static _id = 0xee2bb969;

  _values = [new PeerT(), new DraftMessageT()] as [PeerT, DraftMessageT];

  get_peer(): PeerT {
    return this._values[0];
  }
  set_peer(val: PeerT): this {
    this._values[0] = val;

    return this;
  }

  get_draft(): DraftMessageT {
    return this._values[1];
  }
  set_draft(val: DraftMessageT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateDraftMessageS._id);

    let values = this._values;

    {
      let val = values[0] as PeerT;
      val._write(buf);
    }

    {
      let val = values[1] as DraftMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateDraftMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as DraftMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateDraftMessageS._id, UpdateDraftMessageS);

/**
 * draftMessageEmpty:DraftMessage
 * #1b0c841a:453805082:453805082
 * flags:#
 * date:flags.0?int
 */
export class DraftMessageEmptyS {
  static _id = 0x1b0c841a;

  _values = [0, 0] as [number, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_date(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DraftMessageEmptyS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_date()) {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DraftMessageEmptyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_date()) {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(DraftMessageEmptyS._id, DraftMessageEmptyS);

/**
 * draftMessage:DraftMessage
 * #fd8e711f:4253970719:-40996577
 * flags:#
 * no_webpage:flags.1?true
 * reply_to_msg_id:flags.0?int
 * message:string
 * entities:flags.3?Vector<MessageEntity>
 * date:int
 */
export class DraftMessageS {
  static _id = 0xfd8e711f;

  _values = [0, true, 0, "", [], 0] as [
    number,
    true,
    number,
    string,
    MessageEntityT[],
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_no_webpage(): true {
    return this._values[1];
  }
  set_no_webpage(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_no_webpage(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_reply_to_msg_id(): number {
    return this._values[2];
  }
  set_reply_to_msg_id(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_reply_to_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_message(): string {
    return this._values[3];
  }
  set_message(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_entities(): MessageEntityT[] {
    return this._values[4];
  }
  set_entities(val: MessageEntityT[]): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_entities(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_date(): number {
    return this._values[5];
  }
  set_date(val: number): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DraftMessageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_no_webpage()) {
      let val = values[1] as true;
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_entities()) {
      let val = values[4] as MessageEntityT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
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
      if (id !== DraftMessageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_no_webpage()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_reply_to_msg_id()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_entities()) {
      let val = values[4] as MessageEntityT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: MessageEntityT = new MessageEntityT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
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
AllStructs.set(DraftMessageS._id, DraftMessageS);

/**
 * messageActionHistoryClear:MessageAction
 * #9fbab604:2679813636:-1615153660
 *
 */
export class MessageActionHistoryClearS {
  static _id = 0x9fbab604;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionHistoryClearS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionHistoryClearS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(MessageActionHistoryClearS._id, MessageActionHistoryClearS);

/**
 * messages.featuredStickersNotModified:messages.FeaturedStickers
 * #4ede3cf:82699215:82699215
 *
 */
export class MessagesFeaturedStickersNotModifiedS {
  static _id = 0x4ede3cf;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesFeaturedStickersNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesFeaturedStickersNotModifiedS._id)
        panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  MessagesFeaturedStickersNotModifiedS._id,
  MessagesFeaturedStickersNotModifiedS
);

/**
 * messages.featuredStickers:messages.FeaturedStickers
 * #f89d88e5:4171073765:-123893531
 * hash:int
 * sets:Vector<StickerSetCovered>
 * unread:Vector<long>
 */
export class MessagesFeaturedStickersS {
  static _id = 0xf89d88e5;

  _values = [0, [], []] as [
    number,
    StickerSetCoveredT[],
    ProtoLong[]
  ];

  get_hash(): number {
    return this._values[0];
  }
  set_hash(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_sets(): StickerSetCoveredT[] {
    return this._values[1];
  }
  set_sets(val: StickerSetCoveredT[]): this {
    this._values[1] = val;

    return this;
  }

  get_unread(): ProtoLong[] {
    return this._values[2];
  }
  set_unread(val: ProtoLong[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesFeaturedStickersS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as StickerSetCoveredT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as ProtoLong[];

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
      if (id !== MessagesFeaturedStickersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as StickerSetCoveredT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: StickerSetCoveredT = new StickerSetCoveredT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as ProtoLong[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ProtoLong = [0, 0];
        val = buf.readLong();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesFeaturedStickersS._id, MessagesFeaturedStickersS);

/**
 * updateReadFeaturedStickers:Update
 * #571d2742:1461528386:1461528386
 *
 */
export class UpdateReadFeaturedStickersS {
  static _id = 0x571d2742;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateReadFeaturedStickersS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateReadFeaturedStickersS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdateReadFeaturedStickersS._id, UpdateReadFeaturedStickersS);

/**
 * messages.recentStickersNotModified:messages.RecentStickers
 * #b17f890:186120336:186120336
 *
 */
export class MessagesRecentStickersNotModifiedS {
  static _id = 0xb17f890;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesRecentStickersNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesRecentStickersNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  MessagesRecentStickersNotModifiedS._id,
  MessagesRecentStickersNotModifiedS
);

/**
 * messages.recentStickers:messages.RecentStickers
 * #22f3afb3:586395571:586395571
 * hash:int
 * packs:Vector<StickerPack>
 * stickers:Vector<Document>
 * dates:Vector<int>
 */
export class MessagesRecentStickersS {
  static _id = 0x22f3afb3;

  _values = [0, [], [], []] as [
    number,
    StickerPackT[],
    DocumentT[],
    number[]
  ];

  get_hash(): number {
    return this._values[0];
  }
  set_hash(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_packs(): StickerPackT[] {
    return this._values[1];
  }
  set_packs(val: StickerPackT[]): this {
    this._values[1] = val;

    return this;
  }

  get_stickers(): DocumentT[] {
    return this._values[2];
  }
  set_stickers(val: DocumentT[]): this {
    this._values[2] = val;

    return this;
  }

  get_dates(): number[] {
    return this._values[3];
  }
  set_dates(val: number[]): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesRecentStickersS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as StickerPackT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[2] as DocumentT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[3] as number[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        buf.writeInt(val);
      }
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesRecentStickersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as StickerPackT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: StickerPackT = new StickerPackT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    {
      let val = values[2] as DocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentT = new DocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    {
      let val = values[3] as number[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: number = 0;
        val = buf.readInt();
        vector.push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesRecentStickersS._id, MessagesRecentStickersS);

/**
 * updateRecentStickers:Update
 * #9a422c20:2588027936:-1706939360
 *
 */
export class UpdateRecentStickersS {
  static _id = 0x9a422c20;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateRecentStickersS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateRecentStickersS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdateRecentStickersS._id, UpdateRecentStickersS);

/**
 * messages.archivedStickers:messages.ArchivedStickers
 * #4fcba9c8:1338747336:1338747336
 * count:int
 * sets:Vector<StickerSetCovered>
 */
export class MessagesArchivedStickersS {
  static _id = 0x4fcba9c8;

  _values = [0, []] as [number, StickerSetCoveredT[]];

  get_count(): number {
    return this._values[0];
  }
  set_count(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_sets(): StickerSetCoveredT[] {
    return this._values[1];
  }
  set_sets(val: StickerSetCoveredT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesArchivedStickersS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as StickerSetCoveredT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesArchivedStickersS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as StickerSetCoveredT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: StickerSetCoveredT = new StickerSetCoveredT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesArchivedStickersS._id, MessagesArchivedStickersS);

/**
 * messages.stickerSetInstallResultSuccess:messages.StickerSetInstallResult
 * #38641628:946083368:946083368
 *
 */
export class MessagesStickerSetInstallResultSuccessS {
  static _id = 0x38641628;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesStickerSetInstallResultSuccessS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessagesStickerSetInstallResultSuccessS._id)
        panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  MessagesStickerSetInstallResultSuccessS._id,
  MessagesStickerSetInstallResultSuccessS
);

/**
 * messages.stickerSetInstallResultArchive:messages.StickerSetInstallResult
 * #35e410a8:904138920:904138920
 * sets:Vector<StickerSetCovered>
 */
export class MessagesStickerSetInstallResultArchiveS {
  static _id = 0x35e410a8;

  _values = [[]] as [StickerSetCoveredT[]];

  get_sets(): StickerSetCoveredT[] {
    return this._values[0];
  }
  set_sets(val: StickerSetCoveredT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesStickerSetInstallResultArchiveS._id);

    let values = this._values;

    {
      let val = values[0] as StickerSetCoveredT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesStickerSetInstallResultArchiveS._id)
        panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as StickerSetCoveredT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: StickerSetCoveredT = new StickerSetCoveredT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(
  MessagesStickerSetInstallResultArchiveS._id,
  MessagesStickerSetInstallResultArchiveS
);

/**
 * stickerSetCovered:StickerSetCovered
 * #6410a5d2:1678812626:1678812626
 * set:StickerSet
 * cover:Document
 */
export class StickerSetCoveredS {
  static _id = 0x6410a5d2;

  _values = [new StickerSetT(), new DocumentT()] as [StickerSetT, DocumentT];

  get_set(): StickerSetT {
    return this._values[0];
  }
  set_set(val: StickerSetT): this {
    this._values[0] = val;

    return this;
  }

  get_cover(): DocumentT {
    return this._values[1];
  }
  set_cover(val: DocumentT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StickerSetCoveredS._id);

    let values = this._values;

    {
      let val = values[0] as StickerSetT;
      val._write(buf);
    }

    {
      let val = values[1] as DocumentT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== StickerSetCoveredS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as StickerSetT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(StickerSetCoveredS._id, StickerSetCoveredS);

/**
 * updateConfig:Update
 * #a229dd06:2720652550:-1574314746
 *
 */
export class UpdateConfigS {
  static _id = 0xa229dd06;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateConfigS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateConfigS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdateConfigS._id, UpdateConfigS);

/**
 * updatePtsChanged:Update
 * #3354678f:861169551:861169551
 *
 */
export class UpdatePtsChangedS {
  static _id = 0x3354678f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatePtsChangedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdatePtsChangedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(UpdatePtsChangedS._id, UpdatePtsChangedS);

/**
 * inputMediaPhotoExternal:InputMedia
 * #e5bbfe1a:3854302746:-440664550
 * flags:#
 * url:string
 * ttl_seconds:flags.0?int
 */
export class InputMediaPhotoExternalS {
  static _id = 0xe5bbfe1a;

  _values = [0, "", 0] as [number, string, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_url(): string {
    return this._values[1];
  }
  set_url(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_ttl_seconds(): number {
    return this._values[2];
  }
  set_ttl_seconds(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaPhotoExternalS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaPhotoExternalS._id) panic(id.toString(16));
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

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaPhotoExternalS._id, InputMediaPhotoExternalS);

/**
 * inputMediaDocumentExternal:InputMedia
 * #fb52dc99:4216511641:-78455655
 * flags:#
 * url:string
 * ttl_seconds:flags.0?int
 */
export class InputMediaDocumentExternalS {
  static _id = 0xfb52dc99;

  _values = [0, "", 0] as [number, string, number];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_url(): string {
    return this._values[1];
  }
  set_url(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_ttl_seconds(): number {
    return this._values[2];
  }
  set_ttl_seconds(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_ttl_seconds(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaDocumentExternalS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaDocumentExternalS._id) panic(id.toString(16));
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

    if (this.has_ttl_seconds()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaDocumentExternalS._id, InputMediaDocumentExternalS);

/**
 * stickerSetMultiCovered:StickerSetCovered
 * #3407e51b:872932635:872932635
 * set:StickerSet
 * covers:Vector<Document>
 */
export class StickerSetMultiCoveredS {
  static _id = 0x3407e51b;

  _values = [new StickerSetT(), []] as [StickerSetT, DocumentT[]];

  get_set(): StickerSetT {
    return this._values[0];
  }
  set_set(val: StickerSetT): this {
    this._values[0] = val;

    return this;
  }

  get_covers(): DocumentT[] {
    return this._values[1];
  }
  set_covers(val: DocumentT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(StickerSetMultiCoveredS._id);

    let values = this._values;

    {
      let val = values[0] as StickerSetT;
      val._write(buf);
    }

    {
      let val = values[1] as DocumentT[];

      buf.writeInt(481674261);
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
      if (id !== StickerSetMultiCoveredS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as StickerSetT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as DocumentT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentT = new DocumentT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(StickerSetMultiCoveredS._id, StickerSetMultiCoveredS);

/**
 * maskCoords:MaskCoords
 * #aed6dbb2:2933316530:-1361650766
 * n:int
 * x:double
 * y:double
 * zoom:double
 */
export class MaskCoordsS {
  static _id = 0xaed6dbb2;

  _values = [0, 0.0, 0.0, 0.0] as [number, number, number, number];

  get_n(): number {
    return this._values[0];
  }
  set_n(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_x(): number {
    return this._values[1];
  }
  set_x(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_y(): number {
    return this._values[2];
  }
  set_y(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_zoom(): number {
    return this._values[3];
  }
  set_zoom(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MaskCoordsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as number;
      buf.writeDouble(val);
    }

    {
      let val = values[2] as number;
      buf.writeDouble(val);
    }

    {
      let val = values[3] as number;
      buf.writeDouble(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MaskCoordsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readDouble();
      values[1] = val;
    }

    {
      let val = values[2] as number;
      val = buf.readDouble();
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readDouble();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(MaskCoordsS._id, MaskCoordsS);

/**
 * documentAttributeHasStickers:DocumentAttribute
 * #9801d2f7:2550256375:-1744710921
 *
 */
export class DocumentAttributeHasStickersS {
  static _id = 0x9801d2f7;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DocumentAttributeHasStickersS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DocumentAttributeHasStickersS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  DocumentAttributeHasStickersS._id,
  DocumentAttributeHasStickersS
);

/**
 * inputStickeredMediaPhoto:InputStickeredMedia
 * #4a992157:1251549527:1251549527
 * id:InputPhoto
 */
export class InputStickeredMediaPhotoS {
  static _id = 0x4a992157;

  _values = [new InputPhotoT()] as [InputPhotoT];

  get_id(): InputPhotoT {
    return this._values[0];
  }
  set_id(val: InputPhotoT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputStickeredMediaPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as InputPhotoT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputStickeredMediaPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputPhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputStickeredMediaPhotoS._id, InputStickeredMediaPhotoS);

/**
 * inputStickeredMediaDocument:InputStickeredMedia
 * #438865b:70813275:70813275
 * id:InputDocument
 */
export class InputStickeredMediaDocumentS {
  static _id = 0x438865b;

  _values = [new InputDocumentT()] as [InputDocumentT];

  get_id(): InputDocumentT {
    return this._values[0];
  }
  set_id(val: InputDocumentT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputStickeredMediaDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as InputDocumentT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputStickeredMediaDocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputStickeredMediaDocumentS._id, InputStickeredMediaDocumentS);

/**
 * game:Game
 * #bdf9653b:3187238203:-1107729093
 * flags:#
 * id:long
 * access_hash:long
 * short_name:string
 * title:string
 * description:string
 * photo:Photo
 * document:flags.0?Document
 */
export class GameS {
  static _id = 0xbdf9653b;

  _values = [0, [0, 0], [0, 0], "", "", "", new PhotoT(), new DocumentT()] as [
    number,
    ProtoLong,
    ProtoLong,
    string,
    string,
    string,
    PhotoT,
    DocumentT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): ProtoLong {
    return this._values[1];
  }
  set_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[2];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_short_name(): string {
    return this._values[3];
  }
  set_short_name(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_title(): string {
    return this._values[4];
  }
  set_title(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_description(): string {
    return this._values[5];
  }
  set_description(val: string): this {
    this._values[5] = val;

    return this;
  }

  get_photo(): PhotoT {
    return this._values[6];
  }
  set_photo(val: PhotoT): this {
    this._values[6] = val;

    return this;
  }

  get_document(): DocumentT {
    return this._values[7];
  }
  set_document(val: DocumentT): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_document(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(GameS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as PhotoT;
      val._write(buf);
    }

    if (this.has_document()) {
      let val = values[7] as DocumentT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== GameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as PhotoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    if (this.has_document()) {
      let val = values[7] as DocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(GameS._id, GameS);

/**
 * inputBotInlineResultGame:InputBotInlineResult
 * #4fa417f2:1336154098:1336154098
 * id:string
 * short_name:string
 * send_message:InputBotInlineMessage
 */
export class InputBotInlineResultGameS {
  static _id = 0x4fa417f2;

  _values = ["", "", new InputBotInlineMessageT()] as [
    string,
    string,
    InputBotInlineMessageT
  ];

  get_id(): string {
    return this._values[0];
  }
  set_id(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_short_name(): string {
    return this._values[1];
  }
  set_short_name(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_send_message(): InputBotInlineMessageT {
    return this._values[2];
  }
  set_send_message(val: InputBotInlineMessageT): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineResultGameS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as InputBotInlineMessageT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineResultGameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as InputBotInlineMessageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputBotInlineResultGameS._id, InputBotInlineResultGameS);

/**
 * inputBotInlineMessageGame:InputBotInlineMessage
 * #4b425864:1262639204:1262639204
 * flags:#
 * reply_markup:flags.2?ReplyMarkup
 */
export class InputBotInlineMessageGameS {
  static _id = 0x4b425864;

  _values = [0, new ReplyMarkupT()] as [number, ReplyMarkupT];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_reply_markup(): ReplyMarkupT {
    return this._values[1];
  }
  set_reply_markup(val: ReplyMarkupT): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_reply_markup(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputBotInlineMessageGameS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_reply_markup()) {
      let val = values[1] as ReplyMarkupT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputBotInlineMessageGameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_reply_markup()) {
      let val = values[1] as ReplyMarkupT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(InputBotInlineMessageGameS._id, InputBotInlineMessageGameS);

/**
 * messageMediaGame:MessageMedia
 * #fdb19008:4256272392:-38694904
 * game:Game
 */
export class MessageMediaGameS {
  static _id = 0xfdb19008;

  _values = [new GameT()] as [GameT];

  get_game(): GameT {
    return this._values[0];
  }
  set_game(val: GameT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaGameS._id);

    let values = this._values;

    {
      let val = values[0] as GameT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaGameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as GameT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaGameS._id, MessageMediaGameS);

/**
 * inputMediaGame:InputMedia
 * #d33f43f3:3544138739:-750828557
 * id:InputGame
 */
export class InputMediaGameS {
  static _id = 0xd33f43f3;

  _values = [new InputGameT()] as [InputGameT];

  get_id(): InputGameT {
    return this._values[0];
  }
  set_id(val: InputGameT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaGameS._id);

    let values = this._values;

    {
      let val = values[0] as InputGameT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaGameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputGameT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaGameS._id, InputMediaGameS);

/**
 * inputGameID:InputGame
 * #32c3e77:53231223:53231223
 * id:long
 * access_hash:long
 */
export class InputGameIdS {
  static _id = 0x32c3e77;

  _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputGameIdS._id);

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
      if (id !== InputGameIdS._id) panic(id.toString(16));
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
AllStructs.set(InputGameIdS._id, InputGameIdS);

/**
 * inputGameShortName:InputGame
 * #c331e80a:3274827786:-1020139510
 * bot_id:InputUser
 * short_name:string
 */
export class InputGameShortNameS {
  static _id = 0xc331e80a;

  _values = [new InputUserT(), ""] as [InputUserT, string];

  get_bot_id(): InputUserT {
    return this._values[0];
  }
  set_bot_id(val: InputUserT): this {
    this._values[0] = val;

    return this;
  }

  get_short_name(): string {
    return this._values[1];
  }
  set_short_name(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputGameShortNameS._id);

    let values = this._values;

    {
      let val = values[0] as InputUserT;
      val._write(buf);
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
      if (id !== InputGameShortNameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as InputUserT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(InputGameShortNameS._id, InputGameShortNameS);

/**
 * keyboardButtonGame:KeyboardButton
 * #50f41ccf:1358175439:1358175439
 * text:string
 */
export class KeyboardButtonGameS {
  static _id = 0x50f41ccf;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonGameS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== KeyboardButtonGameS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(KeyboardButtonGameS._id, KeyboardButtonGameS);

/**
 * messageActionGameScore:MessageAction
 * #92a72876:2460428406:-1834538890
 * game_id:long
 * score:int
 */
export class MessageActionGameScoreS {
  static _id = 0x92a72876;

  _values = [[0, 0], 0] as [ProtoLong, number];

  get_game_id(): ProtoLong {
    return this._values[0];
  }
  set_game_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_score(): number {
    return this._values[1];
  }
  set_score(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionGameScoreS._id);

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
      if (id !== MessageActionGameScoreS._id) panic(id.toString(16));
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
AllStructs.set(MessageActionGameScoreS._id, MessageActionGameScoreS);

/**
 * highScore:HighScore
 * #58fffcd0:1493171408:1493171408
 * pos:int
 * user_id:int
 * score:int
 */
export class HighScoreS {
  static _id = 0x58fffcd0;

  _values = [0, 0, 0] as [number, number, number];

  get_pos(): number {
    return this._values[0];
  }
  set_pos(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_score(): number {
    return this._values[2];
  }
  set_score(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(HighScoreS._id);

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
      if (id !== HighScoreS._id) panic(id.toString(16));
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
AllStructs.set(HighScoreS._id, HighScoreS);

/**
 * messages.highScores:messages.HighScores
 * #9a3bfd99:2587622809:-1707344487
 * scores:Vector<HighScore>
 * users:Vector<User>
 */
export class MessagesHighScoresS {
  static _id = 0x9a3bfd99;

  _values = [[], []] as [HighScoreT[], UserT[]];

  get_scores(): HighScoreT[] {
    return this._values[0];
  }
  set_scores(val: HighScoreT[]): this {
    this._values[0] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[1];
  }
  set_users(val: UserT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesHighScoresS._id);

    let values = this._values;

    {
      let val = values[0] as HighScoreT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesHighScoresS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as HighScoreT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: HighScoreT = new HighScoreT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesHighScoresS._id, MessagesHighScoresS);

/**
 * updates.differenceTooLong:updates.Difference
 * #4afe8f6d:1258196845:1258196845
 * pts:int
 */
export class UpdatesDifferenceTooLongS {
  static _id = 0x4afe8f6d;

  _values = [0] as [number];

  get_pts(): number {
    return this._values[0];
  }
  set_pts(val: number): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatesDifferenceTooLongS._id);

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
      if (id !== UpdatesDifferenceTooLongS._id) panic(id.toString(16));
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
AllStructs.set(UpdatesDifferenceTooLongS._id, UpdatesDifferenceTooLongS);

/**
 * updateChannelWebPage:Update
 * #40771900:1081547008:1081547008
 * channel_id:int
 * webpage:WebPage
 * pts:int
 * pts_count:int
 */
export class UpdateChannelWebPageS {
  static _id = 0x40771900;

  _values = [0, new WebPageT(), 0, 0] as [number, WebPageT, number, number];

  get_channel_id(): number {
    return this._values[0];
  }
  set_channel_id(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_webpage(): WebPageT {
    return this._values[1];
  }
  set_webpage(val: WebPageT): this {
    this._values[1] = val;

    return this;
  }

  get_pts(): number {
    return this._values[2];
  }
  set_pts(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_pts_count(): number {
    return this._values[3];
  }
  set_pts_count(val: number): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateChannelWebPageS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as WebPageT;
      val._write(buf);
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
      if (id !== UpdateChannelWebPageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as WebPageT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateChannelWebPageS._id, UpdateChannelWebPageS);

/**
 * messages.chatsSlice:messages.Chats
 * #9cd81144:2631405892:-1663561404
 * count:int
 * chats:Vector<Chat>
 */
export class MessagesChatsSliceS {
  static _id = 0x9cd81144;

  _values = [0, []] as [number, ChatT[]];

  get_count(): number {
    return this._values[0];
  }
  set_count(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_chats(): ChatT[] {
    return this._values[1];
  }
  set_chats(val: ChatT[]): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessagesChatsSliceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as ChatT[];

      buf.writeInt(481674261);
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
      if (id !== MessagesChatsSliceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as ChatT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ChatT = new ChatT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(MessagesChatsSliceS._id, MessagesChatsSliceS);

/**
 * textEmpty:RichText
 * #dc3d824f:3695018575:-599948721
 *
 */
export class TextEmptyS {
  static _id = 0xdc3d824f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextEmptyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextEmptyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(TextEmptyS._id, TextEmptyS);

/**
 * textPlain:RichText
 * #744694e0:1950782688:1950782688
 * text:string
 */
export class TextPlainS {
  static _id = 0x744694e0;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextPlainS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextPlainS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextPlainS._id, TextPlainS);

/**
 * textBold:RichText
 * #6724abc4:1730456516:1730456516
 * text:RichText
 */
export class TextBoldS {
  static _id = 0x6724abc4;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextBoldS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextBoldS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextBoldS._id, TextBoldS);

/**
 * textItalic:RichText
 * #d912a59c:3641877916:-653089380
 * text:RichText
 */
export class TextItalicS {
  static _id = 0xd912a59c;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextItalicS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextItalicS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextItalicS._id, TextItalicS);

/**
 * textUnderline:RichText
 * #c12622c4:3240501956:-1054465340
 * text:RichText
 */
export class TextUnderlineS {
  static _id = 0xc12622c4;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextUnderlineS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextUnderlineS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextUnderlineS._id, TextUnderlineS);

/**
 * textStrike:RichText
 * #9bf8bb95:2616769429:-1678197867
 * text:RichText
 */
export class TextStrikeS {
  static _id = 0x9bf8bb95;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextStrikeS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextStrikeS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextStrikeS._id, TextStrikeS);

/**
 * textFixed:RichText
 * #6c3f19b9:1816074681:1816074681
 * text:RichText
 */
export class TextFixedS {
  static _id = 0x6c3f19b9;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextFixedS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== TextFixedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextFixedS._id, TextFixedS);

/**
 * textUrl:RichText
 * #3c2884c1:1009288385:1009288385
 * text:RichText
 * url:string
 * webpage_id:long
 */
export class TextUrlS {
  static _id = 0x3c2884c1;

  _values = [new RichTextT(), "", [0, 0]] as [RichTextT, string, ProtoLong];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  get_url(): string {
    return this._values[1];
  }
  set_url(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_webpage_id(): ProtoLong {
    return this._values[2];
  }
  set_webpage_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextUrlS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
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
      if (id !== TextUrlS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
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
AllStructs.set(TextUrlS._id, TextUrlS);

/**
 * textEmail:RichText
 * #de5a0dd6:3730443734:-564523562
 * text:RichText
 * email:string
 */
export class TextEmailS {
  static _id = 0xde5a0dd6;

  _values = [new RichTextT(), ""] as [RichTextT, string];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  get_email(): string {
    return this._values[1];
  }
  set_email(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextEmailS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
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
      if (id !== TextEmailS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(TextEmailS._id, TextEmailS);

/**
 * textConcat:RichText
 * #7e6260d7:2120376535:2120376535
 * texts:Vector<RichText>
 */
export class TextConcatS {
  static _id = 0x7e6260d7;

  _values = [[]] as [RichTextT[]];

  get_texts(): RichTextT[] {
    return this._values[0];
  }
  set_texts(val: RichTextT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(TextConcatS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT[];

      buf.writeInt(481674261);
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
      if (id !== TextConcatS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: RichTextT = new RichTextT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(TextConcatS._id, TextConcatS);

/**
 * pageBlockUnsupported:PageBlock
 * #13567e8a:324435594:324435594
 *
 */
export class PageBlockUnsupportedS {
  static _id = 0x13567e8a;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockUnsupportedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockUnsupportedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PageBlockUnsupportedS._id, PageBlockUnsupportedS);

/**
 * pageBlockTitle:PageBlock
 * #70abc3fd:1890305021:1890305021
 * text:RichText
 */
export class PageBlockTitleS {
  static _id = 0x70abc3fd;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockTitleS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockTitleS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockTitleS._id, PageBlockTitleS);

/**
 * pageBlockSubtitle:PageBlock
 * #8ffa9a1f:2415565343:-1879401953
 * text:RichText
 */
export class PageBlockSubtitleS {
  static _id = 0x8ffa9a1f;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockSubtitleS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockSubtitleS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockSubtitleS._id, PageBlockSubtitleS);

/**
 * pageBlockAuthorDate:PageBlock
 * #baafe5e0:3132089824:-1162877472
 * author:RichText
 * published_date:int
 */
export class PageBlockAuthorDateS {
  static _id = 0xbaafe5e0;

  _values = [new RichTextT(), 0] as [RichTextT, number];

  get_author(): RichTextT {
    return this._values[0];
  }
  set_author(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  get_published_date(): number {
    return this._values[1];
  }
  set_published_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockAuthorDateS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
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
      if (id !== PageBlockAuthorDateS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(PageBlockAuthorDateS._id, PageBlockAuthorDateS);

/**
 * pageBlockHeader:PageBlock
 * #bfd064ec:3218105580:-1076861716
 * text:RichText
 */
export class PageBlockHeaderS {
  static _id = 0xbfd064ec;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockHeaderS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockHeaderS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockHeaderS._id, PageBlockHeaderS);

/**
 * pageBlockSubheader:PageBlock
 * #f12bb6e1:4046173921:-248793375
 * text:RichText
 */
export class PageBlockSubheaderS {
  static _id = 0xf12bb6e1;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockSubheaderS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockSubheaderS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockSubheaderS._id, PageBlockSubheaderS);

/**
 * pageBlockParagraph:PageBlock
 * #467a0766:1182402406:1182402406
 * text:RichText
 */
export class PageBlockParagraphS {
  static _id = 0x467a0766;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockParagraphS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockParagraphS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockParagraphS._id, PageBlockParagraphS);

/**
 * pageBlockPreformatted:PageBlock
 * #c070d93e:3228621118:-1066346178
 * text:RichText
 * language:string
 */
export class PageBlockPreformattedS {
  static _id = 0xc070d93e;

  _values = [new RichTextT(), ""] as [RichTextT, string];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  get_language(): string {
    return this._values[1];
  }
  set_language(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockPreformattedS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
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
      if (id !== PageBlockPreformattedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(PageBlockPreformattedS._id, PageBlockPreformattedS);

/**
 * pageBlockFooter:PageBlock
 * #48870999:1216809369:1216809369
 * text:RichText
 */
export class PageBlockFooterS {
  static _id = 0x48870999;

  _values = [new RichTextT()] as [RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockFooterS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockFooterS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockFooterS._id, PageBlockFooterS);

/**
 * pageBlockDivider:PageBlock
 * #db20b188:3676352904:-618614392
 *
 */
export class PageBlockDividerS {
  static _id = 0xdb20b188;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockDividerS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockDividerS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PageBlockDividerS._id, PageBlockDividerS);

/**
 * pageBlockAnchor:PageBlock
 * #ce0d37b0:3456972720:-837994576
 * name:string
 */
export class PageBlockAnchorS {
  static _id = 0xce0d37b0;

  _values = [""] as [string];

  get_name(): string {
    return this._values[0];
  }
  set_name(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockAnchorS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockAnchorS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockAnchorS._id, PageBlockAnchorS);

/**
 * pageBlockList:PageBlock
 * #e4e88011:3840442385:-454524911
 * items:Vector<PageListItem>
 */
export class PageBlockListS {
  static _id = 0xe4e88011;

  _values = [[]] as [PageListItemT[]];

  get_items(): PageListItemT[] {
    return this._values[0];
  }
  set_items(val: PageListItemT[]): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockListS._id);

    let values = this._values;

    {
      let val = values[0] as PageListItemT[];

      buf.writeInt(481674261);
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
      if (id !== PageBlockListS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PageListItemT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PageListItemT = new PageListItemT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockListS._id, PageBlockListS);

/**
 * pageBlockBlockquote:PageBlock
 * #263d7c26:641563686:641563686
 * text:RichText
 * caption:RichText
 */
export class PageBlockBlockquoteS {
  static _id = 0x263d7c26;

  _values = [new RichTextT(), new RichTextT()] as [RichTextT, RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  get_caption(): RichTextT {
    return this._values[1];
  }
  set_caption(val: RichTextT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockBlockquoteS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    {
      let val = values[1] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockBlockquoteS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockBlockquoteS._id, PageBlockBlockquoteS);

/**
 * pageBlockPullquote:PageBlock
 * #4f4456d3:1329878739:1329878739
 * text:RichText
 * caption:RichText
 */
export class PageBlockPullquoteS {
  static _id = 0x4f4456d3;

  _values = [new RichTextT(), new RichTextT()] as [RichTextT, RichTextT];

  get_text(): RichTextT {
    return this._values[0];
  }
  set_text(val: RichTextT): this {
    this._values[0] = val;

    return this;
  }

  get_caption(): RichTextT {
    return this._values[1];
  }
  set_caption(val: RichTextT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockPullquoteS._id);

    let values = this._values;

    {
      let val = values[0] as RichTextT;
      val._write(buf);
    }

    {
      let val = values[1] as RichTextT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockPullquoteS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    {
      let val = values[1] as RichTextT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockPullquoteS._id, PageBlockPullquoteS);

/**
 * pageBlockPhoto:PageBlock
 * #1759c560:391759200:391759200
 * flags:#
 * photo_id:long
 * caption:PageCaption
 * url:flags.0?string
 * webpage_id:flags.0?long
 */
export class PageBlockPhotoS {
  static _id = 0x1759c560;

  _values = [0, [0, 0], new PageCaptionT(), "", [0, 0]] as [
    number,
    ProtoLong,
    PageCaptionT,
    string,
    ProtoLong
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_photo_id(): ProtoLong {
    return this._values[1];
  }
  set_photo_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_caption(): PageCaptionT {
    return this._values[2];
  }
  set_caption(val: PageCaptionT): this {
    this._values[2] = val;

    return this;
  }

  get_url(): string {
    return this._values[3];
  }
  set_url(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_url(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_webpage_id(): ProtoLong {
    return this._values[4];
  }
  set_webpage_id(val: ProtoLong): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_webpage_id(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockPhotoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[2] as PageCaptionT;
      val._write(buf);
    }

    if (this.has_url()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_webpage_id()) {
      let val = values[4] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockPhotoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as ProtoLong;
      val = buf.readLong();
      values[1] = val;
    }

    {
      let val = values[2] as PageCaptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    if (this.has_url()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_webpage_id()) {
      let val = values[4] as ProtoLong;
      val = buf.readLong();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockPhotoS._id, PageBlockPhotoS);

/**
 * pageBlockVideo:PageBlock
 * #7c8fe7b6:2089805750:2089805750
 * flags:#
 * autoplay:flags.0?true
 * loop:flags.1?true
 * video_id:long
 * caption:PageCaption
 */
export class PageBlockVideoS {
  static _id = 0x7c8fe7b6;

  _values = [0, true, true, [0, 0], new PageCaptionT()] as [
    number,
    true,
    true,
    ProtoLong,
    PageCaptionT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_autoplay(): true {
    return this._values[1];
  }
  set_autoplay(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_autoplay(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_loop(): true {
    return this._values[2];
  }
  set_loop(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_loop(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_video_id(): ProtoLong {
    return this._values[3];
  }
  set_video_id(val: ProtoLong): this {
    this._values[3] = val;

    return this;
  }

  get_caption(): PageCaptionT {
    return this._values[4];
  }
  set_caption(val: PageCaptionT): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockVideoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_autoplay()) {
      let val = values[1] as true;
    }

    if (this.has_loop()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[4] as PageCaptionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockVideoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_autoplay()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_loop()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as ProtoLong;
      val = buf.readLong();
      values[3] = val;
    }

    {
      let val = values[4] as PageCaptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockVideoS._id, PageBlockVideoS);

/**
 * pageBlockCover:PageBlock
 * #39f23300:972174080:972174080
 * cover:PageBlock
 */
export class PageBlockCoverS {
  static _id = 0x39f23300;

  _values = [new PageBlockT()] as [PageBlockT];

  get_cover(): PageBlockT {
    return this._values[0];
  }
  set_cover(val: PageBlockT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockCoverS._id);

    let values = this._values;

    {
      let val = values[0] as PageBlockT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockCoverS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PageBlockT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockCoverS._id, PageBlockCoverS);

/**
 * pageBlockEmbed:PageBlock
 * #a8718dc5:2826014149:-1468953147
 * flags:#
 * full_width:flags.0?true
 * allow_scrolling:flags.3?true
 * url:flags.1?string
 * html:flags.2?string
 * poster_photo_id:flags.4?long
 * w:flags.5?int
 * h:flags.5?int
 * caption:PageCaption
 */
export class PageBlockEmbedS {
  static _id = 0xa8718dc5;

  _values = [0, true, true, "", "", [0, 0], 0, 0, new PageCaptionT()] as [
    number,
    true,
    true,
    string,
    string,
    ProtoLong,
    number,
    number,
    PageCaptionT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_full_width(): true {
    return this._values[1];
  }
  set_full_width(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_full_width(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_allow_scrolling(): true {
    return this._values[2];
  }
  set_allow_scrolling(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_allow_scrolling(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_url(): string {
    return this._values[3];
  }
  set_url(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_url(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_html(): string {
    return this._values[4];
  }
  set_html(val: string): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_html(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_poster_photo_id(): ProtoLong {
    return this._values[5];
  }
  set_poster_photo_id(val: ProtoLong): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_poster_photo_id(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_w(): number {
    return this._values[6];
  }
  set_w(val: number): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_w(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_h(): number {
    return this._values[7];
  }
  set_h(val: number): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_h(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_caption(): PageCaptionT {
    return this._values[8];
  }
  set_caption(val: PageCaptionT): this {
    this._values[8] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockEmbedS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_full_width()) {
      let val = values[1] as true;
    }

    if (this.has_allow_scrolling()) {
      let val = values[2] as true;
    }

    if (this.has_url()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_html()) {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_poster_photo_id()) {
      let val = values[5] as ProtoLong;
      buf.writeLong(val);
    }

    if (this.has_w()) {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    if (this.has_h()) {
      let val = values[7] as number;
      buf.writeInt(val);
    }

    {
      let val = values[8] as PageCaptionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockEmbedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_full_width()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_allow_scrolling()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_url()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_html()) {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_poster_photo_id()) {
      let val = values[5] as ProtoLong;
      val = buf.readLong();
      values[5] = val;
    }

    if (this.has_w()) {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    if (this.has_h()) {
      let val = values[7] as number;
      val = buf.readInt();
      values[7] = val;
    }

    {
      let val = values[8] as PageCaptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockEmbedS._id, PageBlockEmbedS);

/**
 * pageBlockEmbedPost:PageBlock
 * #f259a80b:4065961995:-229005301
 * url:string
 * webpage_id:long
 * author_photo_id:long
 * author:string
 * date:int
 * blocks:Vector<PageBlock>
 * caption:PageCaption
 */
export class PageBlockEmbedPostS {
  static _id = 0xf259a80b;

  _values = ["", [0, 0], [0, 0], "", 0, [], new PageCaptionT()] as [
    string,
    ProtoLong,
    ProtoLong,
    string,
    number,
    PageBlockT[],
    PageCaptionT
  ];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_webpage_id(): ProtoLong {
    return this._values[1];
  }
  set_webpage_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_author_photo_id(): ProtoLong {
    return this._values[2];
  }
  set_author_photo_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_author(): string {
    return this._values[3];
  }
  set_author(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_date(): number {
    return this._values[4];
  }
  set_date(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_blocks(): PageBlockT[] {
    return this._values[5];
  }
  set_blocks(val: PageBlockT[]): this {
    this._values[5] = val;

    return this;
  }

  get_caption(): PageCaptionT {
    return this._values[6];
  }
  set_caption(val: PageCaptionT): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockEmbedPostS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    {
      let val = values[5] as PageBlockT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[6] as PageCaptionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockEmbedPostS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    {
      let val = values[5] as PageBlockT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PageBlockT = new PageBlockT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[5] = val;
    }

    {
      let val = values[6] as PageCaptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockEmbedPostS._id, PageBlockEmbedPostS);

/**
 * pageBlockCollage:PageBlock
 * #65a0fa4d:1705048653:1705048653
 * items:Vector<PageBlock>
 * caption:PageCaption
 */
export class PageBlockCollageS {
  static _id = 0x65a0fa4d;

  _values = [[], new PageCaptionT()] as [PageBlockT[], PageCaptionT];

  get_items(): PageBlockT[] {
    return this._values[0];
  }
  set_items(val: PageBlockT[]): this {
    this._values[0] = val;

    return this;
  }

  get_caption(): PageCaptionT {
    return this._values[1];
  }
  set_caption(val: PageCaptionT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockCollageS._id);

    let values = this._values;

    {
      let val = values[0] as PageBlockT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as PageCaptionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockCollageS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PageBlockT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PageBlockT = new PageBlockT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as PageCaptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockCollageS._id, PageBlockCollageS);

/**
 * pageBlockSlideshow:PageBlock
 * #31f9590:52401552:52401552
 * items:Vector<PageBlock>
 * caption:PageCaption
 */
export class PageBlockSlideshowS {
  static _id = 0x31f9590;

  _values = [[], new PageCaptionT()] as [PageBlockT[], PageCaptionT];

  get_items(): PageBlockT[] {
    return this._values[0];
  }
  set_items(val: PageBlockT[]): this {
    this._values[0] = val;

    return this;
  }

  get_caption(): PageCaptionT {
    return this._values[1];
  }
  set_caption(val: PageCaptionT): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PageBlockSlideshowS._id);

    let values = this._values;

    {
      let val = values[0] as PageBlockT[];

      buf.writeInt(481674261);
      buf.writeInt(val.length);
      let vector = val;
      for (let i = 0; i < vector.length; i++) {
        let val = vector[i];
        val._write(buf);
      }
    }

    {
      let val = values[1] as PageCaptionT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PageBlockSlideshowS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PageBlockT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: PageBlockT = new PageBlockT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[0] = val;
    }

    {
      let val = values[1] as PageCaptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    return this;
  }
}
AllStructs.set(PageBlockSlideshowS._id, PageBlockSlideshowS);

/**
 * webPageNotModified:WebPage
 * #85849473:2240058483:-2054908813
 *
 */
export class WebPageNotModifiedS {
  static _id = 0x85849473;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(WebPageNotModifiedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== WebPageNotModifiedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(WebPageNotModifiedS._id, WebPageNotModifiedS);

/**
 * inputPrivacyKeyPhoneCall:InputPrivacyKey
 * #fabadc5f:4206550111:-88417185
 *
 */
export class InputPrivacyKeyPhoneCallS {
  static _id = 0xfabadc5f;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPrivacyKeyPhoneCallS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPrivacyKeyPhoneCallS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(InputPrivacyKeyPhoneCallS._id, InputPrivacyKeyPhoneCallS);

/**
 * privacyKeyPhoneCall:PrivacyKey
 * #3d662b7b:1030105979:1030105979
 *
 */
export class PrivacyKeyPhoneCallS {
  static _id = 0x3d662b7b;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PrivacyKeyPhoneCallS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PrivacyKeyPhoneCallS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PrivacyKeyPhoneCallS._id, PrivacyKeyPhoneCallS);

/**
 * sendMessageGamePlayAction:SendMessageAction
 * #dd6a8f48:3714748232:-580219064
 *
 */
export class SendMessageGamePlayActionS {
  static _id = 0xdd6a8f48;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(SendMessageGamePlayActionS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== SendMessageGamePlayActionS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(SendMessageGamePlayActionS._id, SendMessageGamePlayActionS);

/**
 * phoneCallDiscardReasonMissed:PhoneCallDiscardReason
 * #85e42301:2246320897:-2048646399
 *
 */
export class PhoneCallDiscardReasonMissedS {
  static _id = 0x85e42301;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhoneCallDiscardReasonMissedS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhoneCallDiscardReasonMissedS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  PhoneCallDiscardReasonMissedS._id,
  PhoneCallDiscardReasonMissedS
);

/**
 * phoneCallDiscardReasonDisconnect:PhoneCallDiscardReason
 * #e095c1a0:3767910816:-527056480
 *
 */
export class PhoneCallDiscardReasonDisconnectS {
  static _id = 0xe095c1a0;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhoneCallDiscardReasonDisconnectS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhoneCallDiscardReasonDisconnectS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  PhoneCallDiscardReasonDisconnectS._id,
  PhoneCallDiscardReasonDisconnectS
);

/**
 * phoneCallDiscardReasonHangup:PhoneCallDiscardReason
 * #57adc690:1471006352:1471006352
 *
 */
export class PhoneCallDiscardReasonHangupS {
  static _id = 0x57adc690;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhoneCallDiscardReasonHangupS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhoneCallDiscardReasonHangupS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(
  PhoneCallDiscardReasonHangupS._id,
  PhoneCallDiscardReasonHangupS
);

/**
 * phoneCallDiscardReasonBusy:PhoneCallDiscardReason
 * #faf7e8c9:4210550985:-84416311
 *
 */
export class PhoneCallDiscardReasonBusyS {
  static _id = 0xfaf7e8c9;

  _values = [] as [];

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhoneCallDiscardReasonBusyS._id);

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhoneCallDiscardReasonBusyS._id) panic(id.toString(16));
    }

    return this;
  }
}
AllStructs.set(PhoneCallDiscardReasonBusyS._id, PhoneCallDiscardReasonBusyS);

/**
 * updateDialogPinned:Update
 * #6e6fe51c:1852826908:1852826908
 * flags:#
 * pinned:flags.0?true
 * folder_id:flags.1?int
 * peer:DialogPeer
 */
export class UpdateDialogPinnedS {
  static _id = 0x6e6fe51c;

  _values = [0, true, 0, new DialogPeerT()] as [
    number,
    true,
    number,
    DialogPeerT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_pinned(): true {
    return this._values[1];
  }
  set_pinned(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_pinned(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_folder_id(): number {
    return this._values[2];
  }
  set_folder_id(val: number): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_peer(): DialogPeerT {
    return this._values[3];
  }
  set_peer(val: DialogPeerT): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateDialogPinnedS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_pinned()) {
      let val = values[1] as true;
    }

    if (this.has_folder_id()) {
      let val = values[2] as number;
      buf.writeInt(val);
    }

    {
      let val = values[3] as DialogPeerT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateDialogPinnedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_pinned()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_folder_id()) {
      let val = values[2] as number;
      val = buf.readInt();
      values[2] = val;
    }

    {
      let val = values[3] as DialogPeerT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateDialogPinnedS._id, UpdateDialogPinnedS);

/**
 * updatePinnedDialogs:Update
 * #fa0f3ca2:4195302562:-99664734
 * flags:#
 * folder_id:flags.1?int
 * order:flags.0?Vector<DialogPeer>
 */
export class UpdatePinnedDialogsS {
  static _id = 0xfa0f3ca2;

  _values = [0, 0, []] as [number, number, DialogPeerT[]];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_folder_id(): number {
    return this._values[1];
  }
  set_folder_id(val: number): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_folder_id(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_order(): DialogPeerT[] {
    return this._values[2];
  }
  set_order(val: DialogPeerT[]): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_order(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatePinnedDialogsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_folder_id()) {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    if (this.has_order()) {
      let val = values[2] as DialogPeerT[];

      buf.writeInt(481674261);
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
      if (id !== UpdatePinnedDialogsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_folder_id()) {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    if (this.has_order()) {
      let val = values[2] as DialogPeerT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DialogPeerT = new DialogPeerT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(UpdatePinnedDialogsS._id, UpdatePinnedDialogsS);

/**
 * dataJSON:DataJSON
 * #7d748d04:2104790276:2104790276
 * data:string
 */
export class DataJsonS {
  static _id = 0x7d748d04;

  _values = [""] as [string];

  get_data(): string {
    return this._values[0];
  }
  set_data(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(DataJsonS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== DataJsonS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(DataJsonS._id, DataJsonS);

/**
 * updateBotWebhookJSON:Update
 * #8317c0c3:2199371971:-2095595325
 * data:DataJSON
 */
export class UpdateBotWebhookJsonS {
  static _id = 0x8317c0c3;

  _values = [new DataJsonT()] as [DataJsonT];

  get_data(): DataJsonT {
    return this._values[0];
  }
  set_data(val: DataJsonT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotWebhookJsonS._id);

    let values = this._values;

    {
      let val = values[0] as DataJsonT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateBotWebhookJsonS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as DataJsonT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateBotWebhookJsonS._id, UpdateBotWebhookJsonS);

/**
 * updateBotWebhookJSONQuery:Update
 * #9b9240a6:2610053286:-1684914010
 * query_id:long
 * data:DataJSON
 * timeout:int
 */
export class UpdateBotWebhookJsonQueryS {
  static _id = 0x9b9240a6;

  _values = [[0, 0], new DataJsonT(), 0] as [ProtoLong, DataJsonT, number];

  get_query_id(): ProtoLong {
    return this._values[0];
  }
  set_query_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_data(): DataJsonT {
    return this._values[1];
  }
  set_data(val: DataJsonT): this {
    this._values[1] = val;

    return this;
  }

  get_timeout(): number {
    return this._values[2];
  }
  set_timeout(val: number): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotWebhookJsonQueryS._id);

    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[1] as DataJsonT;
      val._write(buf);
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
      if (id !== UpdateBotWebhookJsonQueryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as ProtoLong;
      val = buf.readLong();
      values[0] = val;
    }

    {
      let val = values[1] as DataJsonT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
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
AllStructs.set(UpdateBotWebhookJsonQueryS._id, UpdateBotWebhookJsonQueryS);

/**
 * labeledPrice:LabeledPrice
 * #cb296bf8:3408489464:-886477832
 * label:string
 * amount:long
 */
export class LabeledPriceS {
  static _id = 0xcb296bf8;

  _values = ["", [0, 0]] as [string, ProtoLong];

  get_label(): string {
    return this._values[0];
  }
  set_label(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_amount(): ProtoLong {
    return this._values[1];
  }
  set_amount(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(LabeledPriceS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== LabeledPriceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(LabeledPriceS._id, LabeledPriceS);

/**
 * invoice:Invoice
 * #c30aa358:3272254296:-1022713000
 * flags:#
 * test:flags.0?true
 * name_requested:flags.1?true
 * phone_requested:flags.2?true
 * email_requested:flags.3?true
 * shipping_address_requested:flags.4?true
 * flexible:flags.5?true
 * phone_to_provider:flags.6?true
 * email_to_provider:flags.7?true
 * currency:string
 * prices:Vector<LabeledPrice>
 */
export class InvoiceS {
  static _id = 0xc30aa358;

  _values = [0, true, true, true, true, true, true, true, true, "", []] as [
    number,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    string,
    LabeledPriceT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_test(): true {
    return this._values[1];
  }
  set_test(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_test(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_name_requested(): true {
    return this._values[2];
  }
  set_name_requested(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_name_requested(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_phone_requested(): true {
    return this._values[3];
  }
  set_phone_requested(val: true): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_phone_requested(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_email_requested(): true {
    return this._values[4];
  }
  set_email_requested(val: true): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_email_requested(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_shipping_address_requested(): true {
    return this._values[5];
  }
  set_shipping_address_requested(val: true): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_shipping_address_requested(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_flexible(): true {
    return this._values[6];
  }
  set_flexible(val: true): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_flexible(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_phone_to_provider(): true {
    return this._values[7];
  }
  set_phone_to_provider(val: true): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 6));

    return this;
  }

  has_phone_to_provider(): boolean {
    return !!(this.get_flags() & (1 << 6));
  }

  get_email_to_provider(): true {
    return this._values[8];
  }
  set_email_to_provider(val: true): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 7));

    return this;
  }

  has_email_to_provider(): boolean {
    return !!(this.get_flags() & (1 << 7));
  }

  get_currency(): string {
    return this._values[9];
  }
  set_currency(val: string): this {
    this._values[9] = val;

    return this;
  }

  get_prices(): LabeledPriceT[] {
    return this._values[10];
  }
  set_prices(val: LabeledPriceT[]): this {
    this._values[10] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InvoiceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_test()) {
      let val = values[1] as true;
    }

    if (this.has_name_requested()) {
      let val = values[2] as true;
    }

    if (this.has_phone_requested()) {
      let val = values[3] as true;
    }

    if (this.has_email_requested()) {
      let val = values[4] as true;
    }

    if (this.has_shipping_address_requested()) {
      let val = values[5] as true;
    }

    if (this.has_flexible()) {
      let val = values[6] as true;
    }

    if (this.has_phone_to_provider()) {
      let val = values[7] as true;
    }

    if (this.has_email_to_provider()) {
      let val = values[8] as true;
    }

    {
      let val = values[9] as string;
      buf.writeString(val);
    }

    {
      let val = values[10] as LabeledPriceT[];

      buf.writeInt(481674261);
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
      if (id !== InvoiceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_test()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_name_requested()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    if (this.has_phone_requested()) {
      let val = values[3] as true;
      val = true;
      values[3] = val;
    }

    if (this.has_email_requested()) {
      let val = values[4] as true;
      val = true;
      values[4] = val;
    }

    if (this.has_shipping_address_requested()) {
      let val = values[5] as true;
      val = true;
      values[5] = val;
    }

    if (this.has_flexible()) {
      let val = values[6] as true;
      val = true;
      values[6] = val;
    }

    if (this.has_phone_to_provider()) {
      let val = values[7] as true;
      val = true;
      values[7] = val;
    }

    if (this.has_email_to_provider()) {
      let val = values[8] as true;
      val = true;
      values[8] = val;
    }

    {
      let val = values[9] as string;
      val = buf.readString();
      values[9] = val;
    }

    {
      let val = values[10] as LabeledPriceT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: LabeledPriceT = new LabeledPriceT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[10] = val;
    }

    return this;
  }
}
AllStructs.set(InvoiceS._id, InvoiceS);

/**
 * inputMediaInvoice:InputMedia
 * #f4e096c3:4108359363:-186607933
 * flags:#
 * title:string
 * description:string
 * photo:flags.0?InputWebDocument
 * invoice:Invoice
 * payload:bytes
 * provider:string
 * provider_data:DataJSON
 * start_param:string
 */
export class InputMediaInvoiceS {
  static _id = 0xf4e096c3;

  _values = [
    0,
    "",
    "",
    new InputWebDocumentT(),
    new InvoiceT(),
    new Uint8Array(),
    "",
    new DataJsonT(),
    ""
  ] as [
    number,
    string,
    string,
    InputWebDocumentT,
    InvoiceT,
    Uint8Array,
    string,
    DataJsonT,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_title(): string {
    return this._values[1];
  }
  set_title(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_description(): string {
    return this._values[2];
  }
  set_description(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_photo(): InputWebDocumentT {
    return this._values[3];
  }
  set_photo(val: InputWebDocumentT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_photo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_invoice(): InvoiceT {
    return this._values[4];
  }
  set_invoice(val: InvoiceT): this {
    this._values[4] = val;

    return this;
  }

  get_payload(): Uint8Array {
    return this._values[5];
  }
  set_payload(val: Uint8Array): this {
    this._values[5] = val;

    return this;
  }

  get_provider(): string {
    return this._values[6];
  }
  set_provider(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_provider_data(): DataJsonT {
    return this._values[7];
  }
  set_provider_data(val: DataJsonT): this {
    this._values[7] = val;

    return this;
  }

  get_start_param(): string {
    return this._values[8];
  }
  set_start_param(val: string): this {
    this._values[8] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputMediaInvoiceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_photo()) {
      let val = values[3] as InputWebDocumentT;
      val._write(buf);
    }

    {
      let val = values[4] as InvoiceT;
      val._write(buf);
    }

    {
      let val = values[5] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    {
      let val = values[7] as DataJsonT;
      val._write(buf);
    }

    {
      let val = values[8] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputMediaInvoiceS._id) panic(id.toString(16));
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

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_photo()) {
      let val = values[3] as InputWebDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as InvoiceT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    {
      let val = values[5] as Uint8Array;
      val = buf.readBytes();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    {
      let val = values[7] as DataJsonT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    {
      let val = values[8] as string;
      val = buf.readString();
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(InputMediaInvoiceS._id, InputMediaInvoiceS);

/**
 * paymentCharge:PaymentCharge
 * #ea02c27e:3926049406:-368917890
 * id:string
 * provider_charge_id:string
 */
export class PaymentChargeS {
  static _id = 0xea02c27e;

  _values = ["", ""] as [string, string];

  get_id(): string {
    return this._values[0];
  }
  set_id(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_provider_charge_id(): string {
    return this._values[1];
  }
  set_provider_charge_id(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentChargeS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== PaymentChargeS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(PaymentChargeS._id, PaymentChargeS);

/**
 * messageActionPaymentSentMe:MessageAction
 * #8f31b327:2402399015:-1892568281
 * flags:#
 * currency:string
 * total_amount:long
 * payload:bytes
 * info:flags.0?PaymentRequestedInfo
 * shipping_option_id:flags.1?string
 * charge:PaymentCharge
 */
export class MessageActionPaymentSentMeS {
  static _id = 0x8f31b327;

  _values = [
    0,
    "",
    [0, 0],
    new Uint8Array(),
    new PaymentRequestedInfoT(),
    "",
    new PaymentChargeT()
  ] as [
    number,
    string,
    ProtoLong,
    Uint8Array,
    PaymentRequestedInfoT,
    string,
    PaymentChargeT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_currency(): string {
    return this._values[1];
  }
  set_currency(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_total_amount(): ProtoLong {
    return this._values[2];
  }
  set_total_amount(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_payload(): Uint8Array {
    return this._values[3];
  }
  set_payload(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_info(): PaymentRequestedInfoT {
    return this._values[4];
  }
  set_info(val: PaymentRequestedInfoT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_info(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_shipping_option_id(): string {
    return this._values[5];
  }
  set_shipping_option_id(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_shipping_option_id(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_charge(): PaymentChargeT {
    return this._values[6];
  }
  set_charge(val: PaymentChargeT): this {
    this._values[6] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionPaymentSentMeS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    if (this.has_info()) {
      let val = values[4] as PaymentRequestedInfoT;
      val._write(buf);
    }

    if (this.has_shipping_option_id()) {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as PaymentChargeT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageActionPaymentSentMeS._id) panic(id.toString(16));
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

    if (this.has_info()) {
      let val = values[4] as PaymentRequestedInfoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    if (this.has_shipping_option_id()) {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as PaymentChargeT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    return this;
  }
}
AllStructs.set(MessageActionPaymentSentMeS._id, MessageActionPaymentSentMeS);

/**
 * messageMediaInvoice:MessageMedia
 * #84551347:2220168007:-2074799289
 * flags:#
 * shipping_address_requested:flags.1?true
 * test:flags.3?true
 * title:string
 * description:string
 * photo:flags.0?WebDocument
 * receipt_msg_id:flags.2?int
 * currency:string
 * total_amount:long
 * start_param:string
 */
export class MessageMediaInvoiceS {
  static _id = 0x84551347;

  _values = [0, true, true, "", "", new WebDocumentT(), 0, "", [0, 0], ""] as [
    number,
    true,
    true,
    string,
    string,
    WebDocumentT,
    number,
    string,
    ProtoLong,
    string
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_shipping_address_requested(): true {
    return this._values[1];
  }
  set_shipping_address_requested(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_shipping_address_requested(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_test(): true {
    return this._values[2];
  }
  set_test(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_test(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_title(): string {
    return this._values[3];
  }
  set_title(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_description(): string {
    return this._values[4];
  }
  set_description(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_photo(): WebDocumentT {
    return this._values[5];
  }
  set_photo(val: WebDocumentT): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_photo(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_receipt_msg_id(): number {
    return this._values[6];
  }
  set_receipt_msg_id(val: number): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_receipt_msg_id(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_currency(): string {
    return this._values[7];
  }
  set_currency(val: string): this {
    this._values[7] = val;

    return this;
  }

  get_total_amount(): ProtoLong {
    return this._values[8];
  }
  set_total_amount(val: ProtoLong): this {
    this._values[8] = val;

    return this;
  }

  get_start_param(): string {
    return this._values[9];
  }
  set_start_param(val: string): this {
    this._values[9] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageMediaInvoiceS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_shipping_address_requested()) {
      let val = values[1] as true;
    }

    if (this.has_test()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    if (this.has_photo()) {
      let val = values[5] as WebDocumentT;
      val._write(buf);
    }

    if (this.has_receipt_msg_id()) {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[9] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== MessageMediaInvoiceS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_shipping_address_requested()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_test()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    if (this.has_photo()) {
      let val = values[5] as WebDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    if (this.has_receipt_msg_id()) {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as ProtoLong;
      val = buf.readLong();
      values[8] = val;
    }

    {
      let val = values[9] as string;
      val = buf.readString();
      values[9] = val;
    }

    return this;
  }
}
AllStructs.set(MessageMediaInvoiceS._id, MessageMediaInvoiceS);

/**
 * postAddress:PostAddress
 * #1e8caaeb:512535275:512535275
 * street_line1:string
 * street_line2:string
 * city:string
 * state:string
 * country_iso2:string
 * post_code:string
 */
export class PostAddressS {
  static _id = 0x1e8caaeb;

  _values = ["", "", "", "", "", ""] as [
    string,
    string,
    string,
    string,
    string,
    string
  ];

  get_street_line1(): string {
    return this._values[0];
  }
  set_street_line1(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_street_line2(): string {
    return this._values[1];
  }
  set_street_line2(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_city(): string {
    return this._values[2];
  }
  set_city(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_state(): string {
    return this._values[3];
  }
  set_state(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_country_iso2(): string {
    return this._values[4];
  }
  set_country_iso2(val: string): this {
    this._values[4] = val;

    return this;
  }

  get_post_code(): string {
    return this._values[5];
  }
  set_post_code(val: string): this {
    this._values[5] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PostAddressS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as string;
      buf.writeString(val);
    }

    {
      let val = values[5] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PostAddressS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as string;
      val = buf.readString();
      values[4] = val;
    }

    {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    return this;
  }
}
AllStructs.set(PostAddressS._id, PostAddressS);

/**
 * paymentRequestedInfo:PaymentRequestedInfo
 * #909c3f94:2426158996:-1868808300
 * flags:#
 * name:flags.0?string
 * phone:flags.1?string
 * email:flags.2?string
 * shipping_address:flags.3?PostAddress
 */
export class PaymentRequestedInfoS {
  static _id = 0x909c3f94;

  _values = [0, "", "", "", new PostAddressT()] as [
    number,
    string,
    string,
    string,
    PostAddressT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_name(): string {
    return this._values[1];
  }
  set_name(val: string): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_name(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_phone(): string {
    return this._values[2];
  }
  set_phone(val: string): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_phone(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_email(): string {
    return this._values[3];
  }
  set_email(val: string): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_email(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_shipping_address(): PostAddressT {
    return this._values[4];
  }
  set_shipping_address(val: PostAddressT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_shipping_address(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentRequestedInfoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_name()) {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_phone()) {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_email()) {
      let val = values[3] as string;
      buf.writeString(val);
    }

    if (this.has_shipping_address()) {
      let val = values[4] as PostAddressT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PaymentRequestedInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_name()) {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    if (this.has_phone()) {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_email()) {
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    if (this.has_shipping_address()) {
      let val = values[4] as PostAddressT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(PaymentRequestedInfoS._id, PaymentRequestedInfoS);

/**
 * keyboardButtonBuy:KeyboardButton
 * #afd93fbb:2950250427:-1344716869
 * text:string
 */
export class KeyboardButtonBuyS {
  static _id = 0xafd93fbb;

  _values = [""] as [string];

  get_text(): string {
    return this._values[0];
  }
  set_text(val: string): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(KeyboardButtonBuyS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== KeyboardButtonBuyS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(KeyboardButtonBuyS._id, KeyboardButtonBuyS);

/**
 * messageActionPaymentSent:MessageAction
 * #40699cd0:1080663248:1080663248
 * currency:string
 * total_amount:long
 */
export class MessageActionPaymentSentS {
  static _id = 0x40699cd0;

  _values = ["", [0, 0]] as [string, ProtoLong];

  get_currency(): string {
    return this._values[0];
  }
  set_currency(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_total_amount(): ProtoLong {
    return this._values[1];
  }
  set_total_amount(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(MessageActionPaymentSentS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== MessageActionPaymentSentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(MessageActionPaymentSentS._id, MessageActionPaymentSentS);

/**
 * paymentSavedCredentialsCard:PaymentSavedCredentials
 * #cdc27a1f:3452074527:-842892769
 * id:string
 * title:string
 */
export class PaymentSavedCredentialsCardS {
  static _id = 0xcdc27a1f;

  _values = ["", ""] as [string, string];

  get_id(): string {
    return this._values[0];
  }
  set_id(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_title(): string {
    return this._values[1];
  }
  set_title(val: string): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentSavedCredentialsCardS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== PaymentSavedCredentialsCardS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(PaymentSavedCredentialsCardS._id, PaymentSavedCredentialsCardS);

/**
 * webDocument:WebDocument
 * #1c570ed1:475467473:475467473
 * url:string
 * access_hash:long
 * size:int
 * mime_type:string
 * attributes:Vector<DocumentAttribute>
 */
export class WebDocumentS {
  static _id = 0x1c570ed1;

  _values = ["", [0, 0], 0, "", []] as [
    string,
    ProtoLong,
    number,
    string,
    DocumentAttributeT[]
  ];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_size(): number {
    return this._values[2];
  }
  set_size(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_mime_type(): string {
    return this._values[3];
  }
  set_mime_type(val: string): this {
    this._values[3] = val;

    return this;
  }

  get_attributes(): DocumentAttributeT[] {
    return this._values[4];
  }
  set_attributes(val: DocumentAttributeT[]): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(WebDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      let val = values[3] as string;
      buf.writeString(val);
    }

    {
      let val = values[4] as DocumentAttributeT[];

      buf.writeInt(481674261);
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
      if (id !== WebDocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
      let val = values[3] as string;
      val = buf.readString();
      values[3] = val;
    }

    {
      let val = values[4] as DocumentAttributeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentAttributeT = new DocumentAttributeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(WebDocumentS._id, WebDocumentS);

/**
 * inputWebDocument:InputWebDocument
 * #9bed434d:2616017741:-1678949555
 * url:string
 * size:int
 * mime_type:string
 * attributes:Vector<DocumentAttribute>
 */
export class InputWebDocumentS {
  static _id = 0x9bed434d;

  _values = ["", 0, "", []] as [
    string,
    number,
    string,
    DocumentAttributeT[]
  ];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_size(): number {
    return this._values[1];
  }
  set_size(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_mime_type(): string {
    return this._values[2];
  }
  set_mime_type(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_attributes(): DocumentAttributeT[] {
    return this._values[3];
  }
  set_attributes(val: DocumentAttributeT[]): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputWebDocumentS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as number;
      buf.writeInt(val);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    {
      let val = values[3] as DocumentAttributeT[];

      buf.writeInt(481674261);
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
      if (id !== InputWebDocumentS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as number;
      val = buf.readInt();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    {
      let val = values[3] as DocumentAttributeT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: DocumentAttributeT = new DocumentAttributeT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputWebDocumentS._id, InputWebDocumentS);

/**
 * inputWebFileLocation:InputWebFileLocation
 * #c239d686:3258570374:-1036396922
 * url:string
 * access_hash:long
 */
export class InputWebFileLocationS {
  static _id = 0xc239d686;

  _values = ["", [0, 0]] as [string, ProtoLong];

  get_url(): string {
    return this._values[0];
  }
  set_url(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputWebFileLocationS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== InputWebFileLocationS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(InputWebFileLocationS._id, InputWebFileLocationS);

/**
 * upload.webFile:upload.WebFile
 * #21e753bc:568808380:568808380
 * size:int
 * mime_type:string
 * file_type:storage.FileType
 * mtime:int
 * bytes:bytes
 */
export class UploadWebFileS {
  static _id = 0x21e753bc;

  _values = [0, "", new StorageFileTypeT(), 0, new Uint8Array()] as [
    number,
    string,
    StorageFileTypeT,
    number,
    Uint8Array
  ];

  get_size(): number {
    return this._values[0];
  }
  set_size(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_mime_type(): string {
    return this._values[1];
  }
  set_mime_type(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_file_type(): StorageFileTypeT {
    return this._values[2];
  }
  set_file_type(val: StorageFileTypeT): this {
    this._values[2] = val;

    return this;
  }

  get_mtime(): number {
    return this._values[3];
  }
  set_mtime(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_bytes(): Uint8Array {
    return this._values[4];
  }
  set_bytes(val: Uint8Array): this {
    this._values[4] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UploadWebFileS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as StorageFileTypeT;
      val._write(buf);
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as Uint8Array;
      buf.writeBytes(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UploadWebFileS._id) panic(id.toString(16));
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

    {
      let val = values[2] as StorageFileTypeT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as Uint8Array;
      val = buf.readBytes();
      values[4] = val;
    }

    return this;
  }
}
AllStructs.set(UploadWebFileS._id, UploadWebFileS);

/**
 * payments.paymentForm:payments.PaymentForm
 * #3f56aea3:1062645411:1062645411
 * flags:#
 * can_save_credentials:flags.2?true
 * password_missing:flags.3?true
 * bot_id:int
 * invoice:Invoice
 * provider_id:int
 * url:string
 * native_provider:flags.4?string
 * native_params:flags.4?DataJSON
 * saved_info:flags.0?PaymentRequestedInfo
 * saved_credentials:flags.1?PaymentSavedCredentials
 * users:Vector<User>
 */
export class PaymentsPaymentFormS {
  static _id = 0x3f56aea3;

  _values = [
    0,
    true,
    true,
    0,
    new InvoiceT(),
    0,
    "",
    "",
    new DataJsonT(),
    new PaymentRequestedInfoT(),
    new PaymentSavedCredentialsT(),
    []
  ] as [
    number,
    true,
    true,
    number,
    InvoiceT,
    number,
    string,
    string,
    DataJsonT,
    PaymentRequestedInfoT,
    PaymentSavedCredentialsT,
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_can_save_credentials(): true {
    return this._values[1];
  }
  set_can_save_credentials(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 2));

    return this;
  }

  has_can_save_credentials(): boolean {
    return !!(this.get_flags() & (1 << 2));
  }

  get_password_missing(): true {
    return this._values[2];
  }
  set_password_missing(val: true): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 3));

    return this;
  }

  has_password_missing(): boolean {
    return !!(this.get_flags() & (1 << 3));
  }

  get_bot_id(): number {
    return this._values[3];
  }
  set_bot_id(val: number): this {
    this._values[3] = val;

    return this;
  }

  get_invoice(): InvoiceT {
    return this._values[4];
  }
  set_invoice(val: InvoiceT): this {
    this._values[4] = val;

    return this;
  }

  get_provider_id(): number {
    return this._values[5];
  }
  set_provider_id(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_url(): string {
    return this._values[6];
  }
  set_url(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_native_provider(): string {
    return this._values[7];
  }
  set_native_provider(val: string): this {
    this._values[7] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_native_provider(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_native_params(): DataJsonT {
    return this._values[8];
  }
  set_native_params(val: DataJsonT): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 4));

    return this;
  }

  has_native_params(): boolean {
    return !!(this.get_flags() & (1 << 4));
  }

  get_saved_info(): PaymentRequestedInfoT {
    return this._values[9];
  }
  set_saved_info(val: PaymentRequestedInfoT): this {
    this._values[9] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_saved_info(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_saved_credentials(): PaymentSavedCredentialsT {
    return this._values[10];
  }
  set_saved_credentials(val: PaymentSavedCredentialsT): this {
    this._values[10] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_saved_credentials(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_users(): UserT[] {
    return this._values[11];
  }
  set_users(val: UserT[]): this {
    this._values[11] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentsPaymentFormS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_can_save_credentials()) {
      let val = values[1] as true;
    }

    if (this.has_password_missing()) {
      let val = values[2] as true;
    }

    {
      let val = values[3] as number;
      buf.writeInt(val);
    }

    {
      let val = values[4] as InvoiceT;
      val._write(buf);
    }

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    if (this.has_native_provider()) {
      let val = values[7] as string;
      buf.writeString(val);
    }

    if (this.has_native_params()) {
      let val = values[8] as DataJsonT;
      val._write(buf);
    }

    if (this.has_saved_info()) {
      let val = values[9] as PaymentRequestedInfoT;
      val._write(buf);
    }

    if (this.has_saved_credentials()) {
      let val = values[10] as PaymentSavedCredentialsT;
      val._write(buf);
    }

    {
      let val = values[11] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== PaymentsPaymentFormS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_can_save_credentials()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_password_missing()) {
      let val = values[2] as true;
      val = true;
      values[2] = val;
    }

    {
      let val = values[3] as number;
      val = buf.readInt();
      values[3] = val;
    }

    {
      let val = values[4] as InvoiceT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    if (this.has_native_provider()) {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    if (this.has_native_params()) {
      let val = values[8] as DataJsonT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[8] = val;
    }

    if (this.has_saved_info()) {
      let val = values[9] as PaymentRequestedInfoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[9] = val;
    }

    if (this.has_saved_credentials()) {
      let val = values[10] as PaymentSavedCredentialsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[10] = val;
    }

    {
      let val = values[11] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[11] = val;
    }

    return this;
  }
}
AllStructs.set(PaymentsPaymentFormS._id, PaymentsPaymentFormS);

/**
 * payments.validatedRequestedInfo:payments.ValidatedRequestedInfo
 * #d1451883:3510966403:-784000893
 * flags:#
 * id:flags.0?string
 * shipping_options:flags.1?Vector<ShippingOption>
 */
export class PaymentsValidatedRequestedInfoS {
  static _id = 0xd1451883;

  _values = [0, "", []] as [number, string, ShippingOptionT[]];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_id(): string {
    return this._values[1];
  }
  set_id(val: string): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_id(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_shipping_options(): ShippingOptionT[] {
    return this._values[2];
  }
  set_shipping_options(val: ShippingOptionT[]): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_shipping_options(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentsValidatedRequestedInfoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_id()) {
      let val = values[1] as string;
      buf.writeString(val);
    }

    if (this.has_shipping_options()) {
      let val = values[2] as ShippingOptionT[];

      buf.writeInt(481674261);
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
      if (id !== PaymentsValidatedRequestedInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_id()) {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    if (this.has_shipping_options()) {
      let val = values[2] as ShippingOptionT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: ShippingOptionT = new ShippingOptionT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(
  PaymentsValidatedRequestedInfoS._id,
  PaymentsValidatedRequestedInfoS
);

/**
 * payments.paymentResult:payments.PaymentResult
 * #4e5f810d:1314881805:1314881805
 * updates:Updates
 */
export class PaymentsPaymentResultS {
  static _id = 0x4e5f810d;

  _values = [new UpdatesT()] as [UpdatesT];

  get_updates(): UpdatesT {
    return this._values[0];
  }
  set_updates(val: UpdatesT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentsPaymentResultS._id);

    let values = this._values;

    {
      let val = values[0] as UpdatesT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PaymentsPaymentResultS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as UpdatesT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(PaymentsPaymentResultS._id, PaymentsPaymentResultS);

/**
 * payments.paymentReceipt:payments.PaymentReceipt
 * #500911e1:1342771681:1342771681
 * flags:#
 * date:int
 * bot_id:int
 * invoice:Invoice
 * provider_id:int
 * info:flags.0?PaymentRequestedInfo
 * shipping:flags.1?ShippingOption
 * currency:string
 * total_amount:long
 * credentials_title:string
 * users:Vector<User>
 */
export class PaymentsPaymentReceiptS {
  static _id = 0x500911e1;

  _values = [
    0,
    0,
    0,
    new InvoiceT(),
    0,
    new PaymentRequestedInfoT(),
    new ShippingOptionT(),
    "",
    [0, 0],
    "",
    []
  ] as [
    number,
    number,
    number,
    InvoiceT,
    number,
    PaymentRequestedInfoT,
    ShippingOptionT,
    string,
    ProtoLong,
    string,
    UserT[]
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_date(): number {
    return this._values[1];
  }
  set_date(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_bot_id(): number {
    return this._values[2];
  }
  set_bot_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_invoice(): InvoiceT {
    return this._values[3];
  }
  set_invoice(val: InvoiceT): this {
    this._values[3] = val;

    return this;
  }

  get_provider_id(): number {
    return this._values[4];
  }
  set_provider_id(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_info(): PaymentRequestedInfoT {
    return this._values[5];
  }
  set_info(val: PaymentRequestedInfoT): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_info(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_shipping(): ShippingOptionT {
    return this._values[6];
  }
  set_shipping(val: ShippingOptionT): this {
    this._values[6] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_shipping(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_currency(): string {
    return this._values[7];
  }
  set_currency(val: string): this {
    this._values[7] = val;

    return this;
  }

  get_total_amount(): ProtoLong {
    return this._values[8];
  }
  set_total_amount(val: ProtoLong): this {
    this._values[8] = val;

    return this;
  }

  get_credentials_title(): string {
    return this._values[9];
  }
  set_credentials_title(val: string): this {
    this._values[9] = val;

    return this;
  }

  get_users(): UserT[] {
    return this._values[10];
  }
  set_users(val: UserT[]): this {
    this._values[10] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentsPaymentReceiptS._id);

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

    {
      let val = values[3] as InvoiceT;
      val._write(buf);
    }

    {
      let val = values[4] as number;
      buf.writeInt(val);
    }

    if (this.has_info()) {
      let val = values[5] as PaymentRequestedInfoT;
      val._write(buf);
    }

    if (this.has_shipping()) {
      let val = values[6] as ShippingOptionT;
      val._write(buf);
    }

    {
      let val = values[7] as string;
      buf.writeString(val);
    }

    {
      let val = values[8] as ProtoLong;
      buf.writeLong(val);
    }

    {
      let val = values[9] as string;
      buf.writeString(val);
    }

    {
      let val = values[10] as UserT[];

      buf.writeInt(481674261);
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
      if (id !== PaymentsPaymentReceiptS._id) panic(id.toString(16));
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

    {
      let val = values[3] as InvoiceT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    {
      let val = values[4] as number;
      val = buf.readInt();
      values[4] = val;
    }

    if (this.has_info()) {
      let val = values[5] as PaymentRequestedInfoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[5] = val;
    }

    if (this.has_shipping()) {
      let val = values[6] as ShippingOptionT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[6] = val;
    }

    {
      let val = values[7] as string;
      val = buf.readString();
      values[7] = val;
    }

    {
      let val = values[8] as ProtoLong;
      val = buf.readLong();
      values[8] = val;
    }

    {
      let val = values[9] as string;
      val = buf.readString();
      values[9] = val;
    }

    {
      let val = values[10] as UserT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: UserT = new UserT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[10] = val;
    }

    return this;
  }
}
AllStructs.set(PaymentsPaymentReceiptS._id, PaymentsPaymentReceiptS);

/**
 * payments.savedInfo:payments.SavedInfo
 * #fb8fe43c:4220511292:-74456004
 * flags:#
 * has_saved_credentials:flags.1?true
 * saved_info:flags.0?PaymentRequestedInfo
 */
export class PaymentsSavedInfoS {
  static _id = 0xfb8fe43c;

  _values = [0, true, new PaymentRequestedInfoT()] as [
    number,
    true,
    PaymentRequestedInfoT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_has_saved_credentials(): true {
    return this._values[1];
  }
  set_has_saved_credentials(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_has_saved_credentials(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_saved_info(): PaymentRequestedInfoT {
    return this._values[2];
  }
  set_saved_info(val: PaymentRequestedInfoT): this {
    this._values[2] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_saved_info(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PaymentsSavedInfoS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_has_saved_credentials()) {
      let val = values[1] as true;
    }

    if (this.has_saved_info()) {
      let val = values[2] as PaymentRequestedInfoT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PaymentsSavedInfoS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_has_saved_credentials()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    if (this.has_saved_info()) {
      let val = values[2] as PaymentRequestedInfoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(PaymentsSavedInfoS._id, PaymentsSavedInfoS);

/**
 * inputPaymentCredentialsSaved:InputPaymentCredentials
 * #c10eb2cf:3238965967:-1056001329
 * id:string
 * tmp_password:bytes
 */
export class InputPaymentCredentialsSavedS {
  static _id = 0xc10eb2cf;

  _values = ["", new Uint8Array()] as [string, Uint8Array];

  get_id(): string {
    return this._values[0];
  }
  set_id(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_tmp_password(): Uint8Array {
    return this._values[1];
  }
  set_tmp_password(val: Uint8Array): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPaymentCredentialsSavedS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
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
      if (id !== InputPaymentCredentialsSavedS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
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
AllStructs.set(
  InputPaymentCredentialsSavedS._id,
  InputPaymentCredentialsSavedS
);

/**
 * inputPaymentCredentials:InputPaymentCredentials
 * #3417d728:873977640:873977640
 * flags:#
 * save:flags.0?true
 * data:DataJSON
 */
export class InputPaymentCredentialsS {
  static _id = 0x3417d728;

  _values = [0, true, new DataJsonT()] as [number, true, DataJsonT];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_save(): true {
    return this._values[1];
  }
  set_save(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_save(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_data(): DataJsonT {
    return this._values[2];
  }
  set_data(val: DataJsonT): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPaymentCredentialsS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_save()) {
      let val = values[1] as true;
    }

    {
      let val = values[2] as DataJsonT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputPaymentCredentialsS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_save()) {
      let val = values[1] as true;
      val = true;
      values[1] = val;
    }

    {
      let val = values[2] as DataJsonT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(InputPaymentCredentialsS._id, InputPaymentCredentialsS);

/**
 * account.tmpPassword:account.TmpPassword
 * #db64fd34:3680828724:-614138572
 * tmp_password:bytes
 * valid_until:int
 */
export class AccountTmpPasswordS {
  static _id = 0xdb64fd34;

  _values = [new Uint8Array(), 0] as [Uint8Array, number];

  get_tmp_password(): Uint8Array {
    return this._values[0];
  }
  set_tmp_password(val: Uint8Array): this {
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

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(AccountTmpPasswordS._id);

    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      buf.writeBytes(val);
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
      if (id !== AccountTmpPasswordS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as Uint8Array;
      val = buf.readBytes();
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
AllStructs.set(AccountTmpPasswordS._id, AccountTmpPasswordS);

/**
 * shippingOption:ShippingOption
 * #b6213cdf:3055631583:-1239335713
 * id:string
 * title:string
 * prices:Vector<LabeledPrice>
 */
export class ShippingOptionS {
  static _id = 0xb6213cdf;

  _values = ["", "", []] as [string, string, LabeledPriceT[]];

  get_id(): string {
    return this._values[0];
  }
  set_id(val: string): this {
    this._values[0] = val;

    return this;
  }

  get_title(): string {
    return this._values[1];
  }
  set_title(val: string): this {
    this._values[1] = val;

    return this;
  }

  get_prices(): LabeledPriceT[] {
    return this._values[2];
  }
  set_prices(val: LabeledPriceT[]): this {
    this._values[2] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(ShippingOptionS._id);

    let values = this._values;

    {
      let val = values[0] as string;
      buf.writeString(val);
    }

    {
      let val = values[1] as string;
      buf.writeString(val);
    }

    {
      let val = values[2] as LabeledPriceT[];

      buf.writeInt(481674261);
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
      if (id !== ShippingOptionS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as string;
      val = buf.readString();
      values[0] = val;
    }

    {
      let val = values[1] as string;
      val = buf.readString();
      values[1] = val;
    }

    {
      let val = values[2] as LabeledPriceT[];

      if (buf.readUInt() !== 481674261) panic("not vector");

      let len = buf.readInt();
      val.splice(0);
      let vector = val;
      for (let i = 0; i < len; i++) {
        let val: LabeledPriceT = new LabeledPriceT();

        val = val._read(buf);
        if (val instanceof OneOf) val = val.unwrap();
        vector.push(val);
      }
      values[2] = val;
    }

    return this;
  }
}
AllStructs.set(ShippingOptionS._id, ShippingOptionS);

/**
 * updateBotShippingQuery:Update
 * #e0cdc940:3771582784:-523384512
 * query_id:long
 * user_id:int
 * payload:bytes
 * shipping_address:PostAddress
 */
export class UpdateBotShippingQueryS {
  static _id = 0xe0cdc940;

  _values = [[0, 0], 0, new Uint8Array(), new PostAddressT()] as [
    ProtoLong,
    number,
    Uint8Array,
    PostAddressT
  ];

  get_query_id(): ProtoLong {
    return this._values[0];
  }
  set_query_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[1];
  }
  set_user_id(val: number): this {
    this._values[1] = val;

    return this;
  }

  get_payload(): Uint8Array {
    return this._values[2];
  }
  set_payload(val: Uint8Array): this {
    this._values[2] = val;

    return this;
  }

  get_shipping_address(): PostAddressT {
    return this._values[3];
  }
  set_shipping_address(val: PostAddressT): this {
    this._values[3] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotShippingQueryS._id);

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
      let val = values[2] as Uint8Array;
      buf.writeBytes(val);
    }

    {
      let val = values[3] as PostAddressT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateBotShippingQueryS._id) panic(id.toString(16));
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
      let val = values[2] as Uint8Array;
      val = buf.readBytes();
      values[2] = val;
    }

    {
      let val = values[3] as PostAddressT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateBotShippingQueryS._id, UpdateBotShippingQueryS);

/**
 * updateBotPrecheckoutQuery:Update
 * #5d2f3aa9:1563376297:1563376297
 * flags:#
 * query_id:long
 * user_id:int
 * payload:bytes
 * info:flags.0?PaymentRequestedInfo
 * shipping_option_id:flags.1?string
 * currency:string
 * total_amount:long
 */
export class UpdateBotPrecheckoutQueryS {
  static _id = 0x5d2f3aa9;

  _values = [
    0,
    [0, 0],
    0,
    new Uint8Array(),
    new PaymentRequestedInfoT(),
    "",
    "",
    [0, 0]
  ] as [
    number,
    ProtoLong,
    number,
    Uint8Array,
    PaymentRequestedInfoT,
    string,
    string,
    ProtoLong
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_query_id(): ProtoLong {
    return this._values[1];
  }
  set_query_id(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  get_user_id(): number {
    return this._values[2];
  }
  set_user_id(val: number): this {
    this._values[2] = val;

    return this;
  }

  get_payload(): Uint8Array {
    return this._values[3];
  }
  set_payload(val: Uint8Array): this {
    this._values[3] = val;

    return this;
  }

  get_info(): PaymentRequestedInfoT {
    return this._values[4];
  }
  set_info(val: PaymentRequestedInfoT): this {
    this._values[4] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_info(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  get_shipping_option_id(): string {
    return this._values[5];
  }
  set_shipping_option_id(val: string): this {
    this._values[5] = val;

    this.set_flags(this.get_flags() | (1 << 1));

    return this;
  }

  has_shipping_option_id(): boolean {
    return !!(this.get_flags() & (1 << 1));
  }

  get_currency(): string {
    return this._values[6];
  }
  set_currency(val: string): this {
    this._values[6] = val;

    return this;
  }

  get_total_amount(): ProtoLong {
    return this._values[7];
  }
  set_total_amount(val: ProtoLong): this {
    this._values[7] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdateBotPrecheckoutQueryS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
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
      let val = values[3] as Uint8Array;
      buf.writeBytes(val);
    }

    if (this.has_info()) {
      let val = values[4] as PaymentRequestedInfoT;
      val._write(buf);
    }

    if (this.has_shipping_option_id()) {
      let val = values[5] as string;
      buf.writeString(val);
    }

    {
      let val = values[6] as string;
      buf.writeString(val);
    }

    {
      let val = values[7] as ProtoLong;
      buf.writeLong(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdateBotPrecheckoutQueryS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
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
      let val = values[3] as Uint8Array;
      val = buf.readBytes();
      values[3] = val;
    }

    if (this.has_info()) {
      let val = values[4] as PaymentRequestedInfoT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[4] = val;
    }

    if (this.has_shipping_option_id()) {
      let val = values[5] as string;
      val = buf.readString();
      values[5] = val;
    }

    {
      let val = values[6] as string;
      val = buf.readString();
      values[6] = val;
    }

    {
      let val = values[7] as ProtoLong;
      val = buf.readLong();
      values[7] = val;
    }

    return this;
  }
}
AllStructs.set(UpdateBotPrecheckoutQueryS._id, UpdateBotPrecheckoutQueryS);

/**
 * inputStickerSetItem:InputStickerSetItem
 * #ffa0a496:4288717974:-6249322
 * flags:#
 * document:InputDocument
 * emoji:string
 * mask_coords:flags.0?MaskCoords
 */
export class InputStickerSetItemS {
  static _id = 0xffa0a496;

  _values = [0, new InputDocumentT(), "", new MaskCoordsT()] as [
    number,
    InputDocumentT,
    string,
    MaskCoordsT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_document(): InputDocumentT {
    return this._values[1];
  }
  set_document(val: InputDocumentT): this {
    this._values[1] = val;

    return this;
  }

  get_emoji(): string {
    return this._values[2];
  }
  set_emoji(val: string): this {
    this._values[2] = val;

    return this;
  }

  get_mask_coords(): MaskCoordsT {
    return this._values[3];
  }
  set_mask_coords(val: MaskCoordsT): this {
    this._values[3] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_mask_coords(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputStickerSetItemS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    {
      let val = values[1] as InputDocumentT;
      val._write(buf);
    }

    {
      let val = values[2] as string;
      buf.writeString(val);
    }

    if (this.has_mask_coords()) {
      let val = values[3] as MaskCoordsT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== InputStickerSetItemS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    {
      let val = values[1] as InputDocumentT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[1] = val;
    }

    {
      let val = values[2] as string;
      val = buf.readString();
      values[2] = val;
    }

    if (this.has_mask_coords()) {
      let val = values[3] as MaskCoordsT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[3] = val;
    }

    return this;
  }
}
AllStructs.set(InputStickerSetItemS._id, InputStickerSetItemS);

/**
 * updatePhoneCall:Update
 * #ab0f6b1e:2869914398:-1425052898
 * phone_call:PhoneCall
 */
export class UpdatePhoneCallS {
  static _id = 0xab0f6b1e;

  _values = [new PhoneCallT()] as [PhoneCallT];

  get_phone_call(): PhoneCallT {
    return this._values[0];
  }
  set_phone_call(val: PhoneCallT): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(UpdatePhoneCallS._id);

    let values = this._values;

    {
      let val = values[0] as PhoneCallT;
      val._write(buf);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== UpdatePhoneCallS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as PhoneCallT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[0] = val;
    }

    return this;
  }
}
AllStructs.set(UpdatePhoneCallS._id, UpdatePhoneCallS);

/**
 * inputPhoneCall:InputPhoneCall
 * #1e36fded:506920429:506920429
 * id:long
 * access_hash:long
 */
export class InputPhoneCallS {
  static _id = 0x1e36fded;

  _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[1];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[1] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(InputPhoneCallS._id);

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
      if (id !== InputPhoneCallS._id) panic(id.toString(16));
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
AllStructs.set(InputPhoneCallS._id, InputPhoneCallS);

/**
 * phoneCallEmpty:PhoneCall
 * #5366c915:1399245077:1399245077
 * id:long
 */
export class PhoneCallEmptyS {
  static _id = 0x5366c915;

  _values = [[0, 0]] as [ProtoLong];

  get_id(): ProtoLong {
    return this._values[0];
  }
  set_id(val: ProtoLong): this {
    this._values[0] = val;

    return this;
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhoneCallEmptyS._id);

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
      if (id !== PhoneCallEmptyS._id) panic(id.toString(16));
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
AllStructs.set(PhoneCallEmptyS._id, PhoneCallEmptyS);

/**
 * phoneCallWaiting:PhoneCall
 * #1b8f4ad1:462375633:462375633
 * flags:#
 * video:flags.5?true
 * id:long
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 * protocol:PhoneCallProtocol
 * receive_date:flags.0?int
 */
export class PhoneCallWaitingS {
  static _id = 0x1b8f4ad1;

  _values = [0, true, [0, 0], [0, 0], 0, 0, 0, new PhoneCallProtocolT(), 0] as [
    number,
    true,
    ProtoLong,
    ProtoLong,
    number,
    number,
    number,
    PhoneCallProtocolT,
    number
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_video(): true {
    return this._values[1];
  }
  set_video(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_video(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_id(): ProtoLong {
    return this._values[2];
  }
  set_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[3];
  }
  set_access_hash(val: ProtoLong): this {
    this._values[3] = val;

    return this;
  }

  get_date(): number {
    return this._values[4];
  }
  set_date(val: number): this {
    this._values[4] = val;

    return this;
  }

  get_admin_id(): number {
    return this._values[5];
  }
  set_admin_id(val: number): this {
    this._values[5] = val;

    return this;
  }

  get_participant_id(): number {
    return this._values[6];
  }
  set_participant_id(val: number): this {
    this._values[6] = val;

    return this;
  }

  get_protocol(): PhoneCallProtocolT {
    return this._values[7];
  }
  set_protocol(val: PhoneCallProtocolT): this {
    this._values[7] = val;

    return this;
  }

  get_receive_date(): number {
    return this._values[8];
  }
  set_receive_date(val: number): this {
    this._values[8] = val;

    this.set_flags(this.get_flags() | (1 << 0));

    return this;
  }

  has_receive_date(): boolean {
    return !!(this.get_flags() & (1 << 0));
  }

  _write(buf: ByteBuffer, noId = false): this {
    if (!noId) buf.writeInt(PhoneCallWaitingS._id);

    let values = this._values;

    {
      let val = values[0] as number;
      buf.writeInt(val);
    }

    if (this.has_video()) {
      let val = values[1] as true;
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

    {
      let val = values[5] as number;
      buf.writeInt(val);
    }

    {
      let val = values[6] as number;
      buf.writeInt(val);
    }

    {
      let val = values[7] as PhoneCallProtocolT;
      val._write(buf);
    }

    if (this.has_receive_date()) {
      let val = values[8] as number;
      buf.writeInt(val);
    }

    return this;
  }
  _read(buf: ByteBuffer, noId = false): this {
    if (!noId) {
      let id = buf.readUInt();
      if (id !== PhoneCallWaitingS._id) panic(id.toString(16));
    }
    let values = this._values;

    {
      let val = values[0] as number;
      val = buf.readInt();
      values[0] = val;
    }

    if (this.has_video()) {
      let val = values[1] as true;
      val = true;
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

    {
      let val = values[5] as number;
      val = buf.readInt();
      values[5] = val;
    }

    {
      let val = values[6] as number;
      val = buf.readInt();
      values[6] = val;
    }

    {
      let val = values[7] as PhoneCallProtocolT;

      val = val._read(buf);
      if (val instanceof OneOf) val = val.unwrap();
      values[7] = val;
    }

    if (this.has_receive_date()) {
      let val = values[8] as number;
      val = buf.readInt();
      values[8] = val;
    }

    return this;
  }
}
AllStructs.set(PhoneCallWaitingS._id, PhoneCallWaitingS);

/**
 * phoneCallRequested:PhoneCall
 * #87eabb53:2280307539:-2014659757
 * flags:#
 * video:flags.5?true
 * id:long
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 * g_a_hash:bytes
 * protocol:PhoneCallProtocol
 */
export class PhoneCallRequestedS {
  static _id = 0x87eabb53;

  _values = [
    0,
    true,
    [0, 0],
    [0, 0],
    0,
    0,
    0,
    new Uint8Array(),
    new PhoneCallProtocolT()
  ] as [
    number,
    true,
    ProtoLong,
    ProtoLong,
    number,
    number,
    number,
    Uint8Array,
    PhoneCallProtocolT
  ];

  get_flags(): number {
    return this._values[0];
  }
  set_flags(val: number): this {
    this._values[0] = val;

    return this;
  }

  get_video(): true {
    return this._values[1];
  }
  set_video(val: true): this {
    this._values[1] = val;

    this.set_flags(this.get_flags() | (1 << 5));

    return this;
  }

  has_video(): boolean {
    return !!(this.get_flags() & (1 << 5));
  }

  get_id(): ProtoLong {
    return this._values[2];
  }
  set_id(val: ProtoLong): this {
    this._values[2] = val;

    return this;
  }

  get_access_hash(): ProtoLong {
    return this._values[3];
  }

    return this;
  }

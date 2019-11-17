import { ApiInvoker } from "../ApiInvoker";
import { ByteBuffer } from "../ByteBuffer";
import { Connection } from "../Connection";
import {
  AllStructs,
  BytesRW,
  c,
  CallDeclareQueue,
  DoubleRW,
  Int128RW,
  Int256RW,
  Int64RW,
  IntRW,
  IStruct,
  LongRW,
  OneOf,
  OneOfRW,
  Optional,
  panic,
  ProtoLong,
  r,
  StringRW,
  TMethod,
  TrueRW,
  TypeRW,
  VectorRW
} from "../SchemaHelpers";

import { RpcErrorS } from "./MTprotoShema.gen";

/**
 * boolFalse:Bool
 * #bc799737:3162085175:-1132882121
 *
 */
export interface BoolFalseS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BoolFalseS = r<new () => BoolFalseS>(
  0xbc799737,
  "BoolFalseS",
  () => []
);

/**
 * boolTrue:Bool
 * #997275b5:2574415285:-1720552011
 *
 */
export interface BoolTrueS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BoolTrueS = r<new () => BoolTrueS>(
  0x997275b5,
  "BoolTrueS",
  () => []
);

/**
 * true:True
 * #3fedd339:1072550713:1072550713
 *
 */
export interface TrueS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TrueS = r<new () => TrueS>(0x3fedd339, "TrueS", () => []);

/**
 * vector:Vector t
 * #1cb5c415:481674261:481674261
 *
 */
export interface VectorS<T = unknown> {
  _id: number;
  _values: T[];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;

  set_values(v: T[]): this;
  get_values(): T[];
}
export let VectorS = r<new <T>() => VectorS<T>>(
  0x1cb5c415,
  "VectorS",
  () => []
);

/**
 * error:Error
 * #c4b9f9bb:3300522427:-994444869
 * code:int
 * text:string
 */
export interface ErrorS {
  _id: number;
  _values: [number, string];

  get_code(): number;
  set_code(val: number): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ErrorS = r<new () => ErrorS>(0xc4b9f9bb, "ErrorS", () => [
  "code",
  IntRW,
  "text",
  StringRW
]);

/**
 * null:Null
 * #56730bcc:1450380236:1450380236
 *
 */
export interface NullS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NullS = r<new () => NullS>(0x56730bcc, "NullS", () => []);

/**
 * inputPeerEmpty:InputPeer
 * #7f3b18ea:2134579434:2134579434
 *
 */
export interface InputPeerEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerEmptyS = r<new () => InputPeerEmptyS>(
  0x7f3b18ea,
  "InputPeerEmptyS",
  () => []
);

/**
 * inputPeerSelf:InputPeer
 * #7da07ec9:2107670217:2107670217
 *
 */
export interface InputPeerSelfS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerSelfS = r<new () => InputPeerSelfS>(
  0x7da07ec9,
  "InputPeerSelfS",
  () => []
);

/**
 * inputPeerChat:InputPeer
 * #179be863:396093539:396093539
 * chat_id:int
 */
export interface InputPeerChatS {
  _id: number;
  _values: [number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerChatS = r<new () => InputPeerChatS>(
  0x179be863,
  "InputPeerChatS",
  () => ["chat_id", IntRW]
);

/**
 * inputUserEmpty:InputUser
 * #b98886cf:3112732367:-1182234929
 *
 */
export interface InputUserEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputUserEmptyS = r<new () => InputUserEmptyS>(
  0xb98886cf,
  "InputUserEmptyS",
  () => []
);

/**
 * inputUserSelf:InputUser
 * #f7c1b13f:4156666175:-138301121
 *
 */
export interface InputUserSelfS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputUserSelfS = r<new () => InputUserSelfS>(
  0xf7c1b13f,
  "InputUserSelfS",
  () => []
);

/**
 * inputPhoneContact:InputContact
 * #f392b7f4:4086478836:-208488460
 * client_id:long
 * phone:string
 * first_name:string
 * last_name:string
 */
export interface InputPhoneContactS {
  _id: number;
  _values: [ProtoLong, string, string, string];

  get_client_id(): ProtoLong;
  set_client_id(val: ProtoLong): this;

  get_phone(): string;
  set_phone(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPhoneContactS = r<new () => InputPhoneContactS>(
  0xf392b7f4,
  "InputPhoneContactS",
  () => [
    "client_id",
    LongRW,
    "phone",
    StringRW,
    "first_name",
    StringRW,
    "last_name",
    StringRW
  ]
);

/**
 * inputFile:InputFile
 * #f52ff27f:4113560191:-181407105
 * id:long
 * parts:int
 * name:string
 * md5_checksum:string
 */
export interface InputFileS {
  _id: number;
  _values: [ProtoLong, number, string, string];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_parts(): number;
  set_parts(val: number): this;

  get_name(): string;
  set_name(val: string): this;

  get_md5_checksum(): string;
  set_md5_checksum(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputFileS = r<new () => InputFileS>(
  0xf52ff27f,
  "InputFileS",
  () => [
    "id",
    LongRW,
    "parts",
    IntRW,
    "name",
    StringRW,
    "md5_checksum",
    StringRW
  ]
);

/**
 * inputMediaEmpty:InputMedia
 * #9664f57f:2523198847:-1771768449
 *
 */
export interface InputMediaEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaEmptyS = r<new () => InputMediaEmptyS>(
  0x9664f57f,
  "InputMediaEmptyS",
  () => []
);

/**
 * inputMediaContact:InputMedia
 * #f8ab7dfb:4171988475:-122978821
 * phone_number:string
 * first_name:string
 * last_name:string
 * vcard:string
 */
export interface InputMediaContactS {
  _id: number;
  _values: [string, string, string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_vcard(): string;
  set_vcard(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaContactS = r<new () => InputMediaContactS>(
  0xf8ab7dfb,
  "InputMediaContactS",
  () => [
    "phone_number",
    StringRW,
    "first_name",
    StringRW,
    "last_name",
    StringRW,
    "vcard",
    StringRW
  ]
);

/**
 * inputChatPhotoEmpty:InputChatPhoto
 * #1ca48f57:480546647:480546647
 *
 */
export interface InputChatPhotoEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputChatPhotoEmptyS = r<new () => InputChatPhotoEmptyS>(
  0x1ca48f57,
  "InputChatPhotoEmptyS",
  () => []
);

/**
 * inputGeoPointEmpty:InputGeoPoint
 * #e4c123d6:3837862870:-457104426
 *
 */
export interface InputGeoPointEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputGeoPointEmptyS = r<new () => InputGeoPointEmptyS>(
  0xe4c123d6,
  "InputGeoPointEmptyS",
  () => []
);

/**
 * inputGeoPoint:InputGeoPoint
 * #f3b7acc9:4088900809:-206066487
 * lat:double
 * long:double
 */
export interface InputGeoPointS {
  _id: number;
  _values: [number, number];

  get_lat(): number;
  set_lat(val: number): this;

  get_long(): number;
  set_long(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputGeoPointS = r<new () => InputGeoPointS>(
  0xf3b7acc9,
  "InputGeoPointS",
  () => ["lat", DoubleRW, "long", DoubleRW]
);

/**
 * inputPhotoEmpty:InputPhoto
 * #1cd7bf0d:483901197:483901197
 *
 */
export interface InputPhotoEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPhotoEmptyS = r<new () => InputPhotoEmptyS>(
  0x1cd7bf0d,
  "InputPhotoEmptyS",
  () => []
);

/**
 * inputPhoto:InputPhoto
 * #3bb3b94a:1001634122:1001634122
 * id:long
 * access_hash:long
 * file_reference:bytes
 */
export interface InputPhotoS {
  _id: number;
  _values: [ProtoLong, ProtoLong, Uint8Array];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPhotoS = r<new () => InputPhotoS>(
  0x3bb3b94a,
  "InputPhotoS",
  () => ["id", LongRW, "access_hash", LongRW, "file_reference", BytesRW]
);

/**
 * inputFileLocation:InputFileLocation
 * #dfdaabe1:3755650017:-539317279
 * volume_id:long
 * local_id:int
 * secret:long
 * file_reference:bytes
 */
export interface InputFileLocationS {
  _id: number;
  _values: [ProtoLong, number, ProtoLong, Uint8Array];

  get_volume_id(): ProtoLong;
  set_volume_id(val: ProtoLong): this;

  get_local_id(): number;
  set_local_id(val: number): this;

  get_secret(): ProtoLong;
  set_secret(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputFileLocationS = r<new () => InputFileLocationS>(
  0xdfdaabe1,
  "InputFileLocationS",
  () => [
    "volume_id",
    LongRW,
    "local_id",
    IntRW,
    "secret",
    LongRW,
    "file_reference",
    BytesRW
  ]
);

/**
 * peerUser:Peer
 * #9db1bc6d:2645671021:-1649296275
 * user_id:int
 */
export interface PeerUserS {
  _id: number;
  _values: [number];

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PeerUserS = r<new () => PeerUserS>(0x9db1bc6d, "PeerUserS", () => [
  "user_id",
  IntRW
]);

/**
 * peerChat:Peer
 * #bad0e5bb:3134252475:-1160714821
 * chat_id:int
 */
export interface PeerChatS {
  _id: number;
  _values: [number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PeerChatS = r<new () => PeerChatS>(0xbad0e5bb, "PeerChatS", () => [
  "chat_id",
  IntRW
]);

/**
 * storage.fileUnknown:storage.FileType
 * #aa963b05:2861972229:-1432995067
 *
 */
export interface StorageFileUnknownS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileUnknownS = r<new () => StorageFileUnknownS>(
  0xaa963b05,
  "StorageFileUnknownS",
  () => []
);

/**
 * storage.filePartial:storage.FileType
 * #40bc6f52:1086091090:1086091090
 *
 */
export interface StorageFilePartialS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFilePartialS = r<new () => StorageFilePartialS>(
  0x40bc6f52,
  "StorageFilePartialS",
  () => []
);

/**
 * storage.fileJpeg:storage.FileType
 * #7efe0e:8322574:8322574
 *
 */
export interface StorageFileJpegS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileJpegS = r<new () => StorageFileJpegS>(
  0x7efe0e,
  "StorageFileJpegS",
  () => []
);

/**
 * storage.fileGif:storage.FileType
 * #cae1aadf:3403786975:-891180321
 *
 */
export interface StorageFileGifS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileGifS = r<new () => StorageFileGifS>(
  0xcae1aadf,
  "StorageFileGifS",
  () => []
);

/**
 * storage.filePng:storage.FileType
 * #a4f63c0:172975040:172975040
 *
 */
export interface StorageFilePngS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFilePngS = r<new () => StorageFilePngS>(
  0xa4f63c0,
  "StorageFilePngS",
  () => []
);

/**
 * storage.filePdf:storage.FileType
 * #ae1e508d:2921222285:-1373745011
 *
 */
export interface StorageFilePdfS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFilePdfS = r<new () => StorageFilePdfS>(
  0xae1e508d,
  "StorageFilePdfS",
  () => []
);

/**
 * storage.fileMp3:storage.FileType
 * #528a0677:1384777335:1384777335
 *
 */
export interface StorageFileMp3S {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileMp3S = r<new () => StorageFileMp3S>(
  0x528a0677,
  "StorageFileMp3S",
  () => []
);

/**
 * storage.fileMov:storage.FileType
 * #4b09ebbc:1258941372:1258941372
 *
 */
export interface StorageFileMovS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileMovS = r<new () => StorageFileMovS>(
  0x4b09ebbc,
  "StorageFileMovS",
  () => []
);

/**
 * storage.fileMp4:storage.FileType
 * #b3cea0e4:3016663268:-1278304028
 *
 */
export interface StorageFileMp4S {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileMp4S = r<new () => StorageFileMp4S>(
  0xb3cea0e4,
  "StorageFileMp4S",
  () => []
);

/**
 * storage.fileWebp:storage.FileType
 * #1081464c:276907596:276907596
 *
 */
export interface StorageFileWebpS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StorageFileWebpS = r<new () => StorageFileWebpS>(
  0x1081464c,
  "StorageFileWebpS",
  () => []
);

/**
 * userEmpty:User
 * #200250ba:537022650:537022650
 * id:int
 */
export interface UserEmptyS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserEmptyS = r<new () => UserEmptyS>(
  0x200250ba,
  "UserEmptyS",
  () => ["id", IntRW]
);

/**
 * userProfilePhotoEmpty:UserProfilePhoto
 * #4f11bae1:1326562017:1326562017
 *
 */
export interface UserProfilePhotoEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserProfilePhotoEmptyS = r<new () => UserProfilePhotoEmptyS>(
  0x4f11bae1,
  "UserProfilePhotoEmptyS",
  () => []
);

/**
 * userStatusEmpty:UserStatus
 * #9d05049:164646985:164646985
 *
 */
export interface UserStatusEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserStatusEmptyS = r<new () => UserStatusEmptyS>(
  0x9d05049,
  "UserStatusEmptyS",
  () => []
);

/**
 * userStatusOnline:UserStatus
 * #edb93949:3988339017:-306628279
 * expires:int
 */
export interface UserStatusOnlineS {
  _id: number;
  _values: [number];

  get_expires(): number;
  set_expires(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserStatusOnlineS = r<new () => UserStatusOnlineS>(
  0xedb93949,
  "UserStatusOnlineS",
  () => ["expires", IntRW]
);

/**
 * userStatusOffline:UserStatus
 * #8c703f:9203775:9203775
 * was_online:int
 */
export interface UserStatusOfflineS {
  _id: number;
  _values: [number];

  get_was_online(): number;
  set_was_online(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserStatusOfflineS = r<new () => UserStatusOfflineS>(
  0x8c703f,
  "UserStatusOfflineS",
  () => ["was_online", IntRW]
);

/**
 * chatEmpty:Chat
 * #9ba2d800:2611140608:-1683826688
 * id:int
 */
export interface ChatEmptyS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatEmptyS = r<new () => ChatEmptyS>(
  0x9ba2d800,
  "ChatEmptyS",
  () => ["id", IntRW]
);

/**
 * chatForbidden:Chat
 * #7328bdb:120753115:120753115
 * id:int
 * title:string
 */
export interface ChatForbiddenS {
  _id: number;
  _values: [number, string];

  get_id(): number;
  set_id(val: number): this;

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatForbiddenS = r<new () => ChatForbiddenS>(
  0x7328bdb,
  "ChatForbiddenS",
  () => ["id", IntRW, "title", StringRW]
);

/**
 * chatParticipant:ChatParticipant
 * #c8d7493e:3369552190:-925415106
 * user_id:int
 * inviter_id:int
 * date:int
 */
export interface ChatParticipantS {
  _id: number;
  _values: [number, number, number];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_inviter_id(): number;
  set_inviter_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatParticipantS = r<new () => ChatParticipantS>(
  0xc8d7493e,
  "ChatParticipantS",
  () => ["user_id", IntRW, "inviter_id", IntRW, "date", IntRW]
);

/**
 * chatPhotoEmpty:ChatPhoto
 * #37c1011c:935395612:935395612
 *
 */
export interface ChatPhotoEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatPhotoEmptyS = r<new () => ChatPhotoEmptyS>(
  0x37c1011c,
  "ChatPhotoEmptyS",
  () => []
);

/**
 * messageEmpty:Message
 * #83e5de54:2212879956:-2082087340
 * id:int
 */
export interface MessageEmptyS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEmptyS = r<new () => MessageEmptyS>(
  0x83e5de54,
  "MessageEmptyS",
  () => ["id", IntRW]
);

/**
 * messageMediaEmpty:MessageMedia
 * #3ded6320:1038967584:1038967584
 *
 */
export interface MessageMediaEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaEmptyS = r<new () => MessageMediaEmptyS>(
  0x3ded6320,
  "MessageMediaEmptyS",
  () => []
);

/**
 * messageMediaContact:MessageMedia
 * #cbf24940:3421653312:-873313984
 * phone_number:string
 * first_name:string
 * last_name:string
 * vcard:string
 * user_id:int
 */
export interface MessageMediaContactS {
  _id: number;
  _values: [string, string, string, string, number];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_vcard(): string;
  set_vcard(val: string): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaContactS = r<new () => MessageMediaContactS>(
  0xcbf24940,
  "MessageMediaContactS",
  () => [
    "phone_number",
    StringRW,
    "first_name",
    StringRW,
    "last_name",
    StringRW,
    "vcard",
    StringRW,
    "user_id",
    IntRW
  ]
);

/**
 * messageMediaUnsupported:MessageMedia
 * #9f84f49e:2676290718:-1618676578
 *
 */
export interface MessageMediaUnsupportedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaUnsupportedS = r<new () => MessageMediaUnsupportedS>(
  0x9f84f49e,
  "MessageMediaUnsupportedS",
  () => []
);

/**
 * messageActionEmpty:MessageAction
 * #b6aef7b0:3064919984:-1230047312
 *
 */
export interface MessageActionEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionEmptyS = r<new () => MessageActionEmptyS>(
  0xb6aef7b0,
  "MessageActionEmptyS",
  () => []
);

/**
 * messageActionChatCreate:MessageAction
 * #a6638b9a:2791541658:-1503425638
 * title:string
 * users:Vector<int>
 */
export interface MessageActionChatCreateS {
  _id: number;
  _values: [string, VectorS<number>];

  get_title(): string;
  set_title(val: string): this;

  get_users(): VectorS<number>;
  set_users(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatCreateS = r<new () => MessageActionChatCreateS>(
  0xa6638b9a,
  "MessageActionChatCreateS",
  () => ["title", StringRW, "users", VectorRW(IntRW)]
);

/**
 * messageActionChatEditTitle:MessageAction
 * #b5a1ce5a:3047280218:-1247687078
 * title:string
 */
export interface MessageActionChatEditTitleS {
  _id: number;
  _values: [string];

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatEditTitleS = r<
  new () => MessageActionChatEditTitleS
>(0xb5a1ce5a, "MessageActionChatEditTitleS", () => ["title", StringRW]);

/**
 * messageActionChatDeletePhoto:MessageAction
 * #95e3fbef:2514746351:-1780220945
 *
 */
export interface MessageActionChatDeletePhotoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatDeletePhotoS = r<
  new () => MessageActionChatDeletePhotoS
>(0x95e3fbef, "MessageActionChatDeletePhotoS", () => []);

/**
 * messageActionChatAddUser:MessageAction
 * #488a7337:1217033015:1217033015
 * users:Vector<int>
 */
export interface MessageActionChatAddUserS {
  _id: number;
  _values: [VectorS<number>];

  get_users(): VectorS<number>;
  set_users(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatAddUserS = r<new () => MessageActionChatAddUserS>(
  0x488a7337,
  "MessageActionChatAddUserS",
  () => ["users", VectorRW(IntRW)]
);

/**
 * messageActionChatDeleteUser:MessageAction
 * #b2ae9b0c:2997787404:-1297179892
 * user_id:int
 */
export interface MessageActionChatDeleteUserS {
  _id: number;
  _values: [number];

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatDeleteUserS = r<
  new () => MessageActionChatDeleteUserS
>(0xb2ae9b0c, "MessageActionChatDeleteUserS", () => ["user_id", IntRW]);

/**
 * photoEmpty:Photo
 * #2331b22d:590459437:590459437
 * id:long
 */
export interface PhotoEmptyS {
  _id: number;
  _values: [ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotoEmptyS = r<new () => PhotoEmptyS>(
  0x2331b22d,
  "PhotoEmptyS",
  () => ["id", LongRW]
);

/**
 * photoSizeEmpty:PhotoSize
 * #e17e23c:236446268:236446268
 * type:string
 */
export interface PhotoSizeEmptyS {
  _id: number;
  _values: [string];

  get_type(): string;
  set_type(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotoSizeEmptyS = r<new () => PhotoSizeEmptyS>(
  0xe17e23c,
  "PhotoSizeEmptyS",
  () => ["type", StringRW]
);

/**
 * geoPointEmpty:GeoPoint
 * #1117dd5f:286776671:286776671
 *
 */
export interface GeoPointEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let GeoPointEmptyS = r<new () => GeoPointEmptyS>(
  0x1117dd5f,
  "GeoPointEmptyS",
  () => []
);

/**
 * geoPoint:GeoPoint
 * #296f104:43446532:43446532
 * long:double
 * lat:double
 * access_hash:long
 */
export interface GeoPointS {
  _id: number;
  _values: [number, number, ProtoLong];

  get_long(): number;
  set_long(val: number): this;

  get_lat(): number;
  set_lat(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let GeoPointS = r<new () => GeoPointS>(0x296f104, "GeoPointS", () => [
  "long",
  DoubleRW,
  "lat",
  DoubleRW,
  "access_hash",
  LongRW
]);

/**
 * auth.exportedAuthorization:auth.ExportedAuthorization
 * #df969c2d:3751189549:-543777747
 * id:int
 * bytes:bytes
 */
export interface AuthExportedAuthorizationS {
  _id: number;
  _values: [number, Uint8Array];

  get_id(): number;
  set_id(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthExportedAuthorizationS = r<new () => AuthExportedAuthorizationS>(
  0xdf969c2d,
  "AuthExportedAuthorizationS",
  () => ["id", IntRW, "bytes", BytesRW]
);

/**
 * inputNotifyUsers:InputNotifyPeer
 * #193b4417:423314455:423314455
 *
 */
export interface InputNotifyUsersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputNotifyUsersS = r<new () => InputNotifyUsersS>(
  0x193b4417,
  "InputNotifyUsersS",
  () => []
);

/**
 * inputNotifyChats:InputNotifyPeer
 * #4a95e84e:1251338318:1251338318
 *
 */
export interface InputNotifyChatsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputNotifyChatsS = r<new () => InputNotifyChatsS>(
  0x4a95e84e,
  "InputNotifyChatsS",
  () => []
);

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
export interface PeerSettingsS {
  _id: number;
  _values: [number, true, true, true, true, true, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_report_spam(): true;
  set_report_spam(val: true): this;

  has_report_spam(): boolean;

  get_add_contact(): true;
  set_add_contact(val: true): this;

  has_add_contact(): boolean;

  get_block_contact(): true;
  set_block_contact(val: true): this;

  has_block_contact(): boolean;

  get_share_contact(): true;
  set_share_contact(val: true): this;

  has_share_contact(): boolean;

  get_need_contacts_exception(): true;
  set_need_contacts_exception(val: true): this;

  has_need_contacts_exception(): boolean;

  get_report_geo(): true;
  set_report_geo(val: true): this;

  has_report_geo(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PeerSettingsS = r<new () => PeerSettingsS>(
  0x818426cd,
  "PeerSettingsS",
  () => [
    "flags",
    IntRW,
    "report_spam",
    Optional(TrueRW, 0, 0),
    "add_contact",
    Optional(TrueRW, 0, 1),
    "block_contact",
    Optional(TrueRW, 0, 2),
    "share_contact",
    Optional(TrueRW, 0, 3),
    "need_contacts_exception",
    Optional(TrueRW, 0, 4),
    "report_geo",
    Optional(TrueRW, 0, 5)
  ]
);

/**
 * inputReportReasonSpam:ReportReason
 * #58dbcab8:1490799288:1490799288
 *
 */
export interface InputReportReasonSpamS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonSpamS = r<new () => InputReportReasonSpamS>(
  0x58dbcab8,
  "InputReportReasonSpamS",
  () => []
);

/**
 * inputReportReasonViolence:ReportReason
 * #1e22c78d:505595789:505595789
 *
 */
export interface InputReportReasonViolenceS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonViolenceS = r<new () => InputReportReasonViolenceS>(
  0x1e22c78d,
  "InputReportReasonViolenceS",
  () => []
);

/**
 * inputReportReasonPornography:ReportReason
 * #2e59d922:777640226:777640226
 *
 */
export interface InputReportReasonPornographyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonPornographyS = r<
  new () => InputReportReasonPornographyS
>(0x2e59d922, "InputReportReasonPornographyS", () => []);

/**
 * inputReportReasonChildAbuse:ReportReason
 * #adf44ee3:2918469347:-1376497949
 *
 */
export interface InputReportReasonChildAbuseS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonChildAbuseS = r<
  new () => InputReportReasonChildAbuseS
>(0xadf44ee3, "InputReportReasonChildAbuseS", () => []);

/**
 * inputReportReasonOther:ReportReason
 * #e1746d0a:3782503690:-512463606
 * text:string
 */
export interface InputReportReasonOtherS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonOtherS = r<new () => InputReportReasonOtherS>(
  0xe1746d0a,
  "InputReportReasonOtherS",
  () => ["text", StringRW]
);

/**
 * importedContact:ImportedContact
 * #d0028438:3489825848:-805141448
 * user_id:int
 * client_id:long
 */
export interface ImportedContactS {
  _id: number;
  _values: [number, ProtoLong];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_client_id(): ProtoLong;
  set_client_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ImportedContactS = r<new () => ImportedContactS>(
  0xd0028438,
  "ImportedContactS",
  () => ["user_id", IntRW, "client_id", LongRW]
);

/**
 * contactBlocked:ContactBlocked
 * #561bc879:1444661369:1444661369
 * user_id:int
 * date:int
 */
export interface ContactBlockedS {
  _id: number;
  _values: [number, number];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactBlockedS = r<new () => ContactBlockedS>(
  0x561bc879,
  "ContactBlockedS",
  () => ["user_id", IntRW, "date", IntRW]
);

/**
 * contacts.contactsNotModified:contacts.Contacts
 * #b74ba9d2:3075189202:-1219778094
 *
 */
export interface ContactsContactsNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsContactsNotModifiedS = r<
  new () => ContactsContactsNotModifiedS
>(0xb74ba9d2, "ContactsContactsNotModifiedS", () => []);

/**
 * messages.affectedHistory:messages.AffectedHistory
 * #b45c69d1:3025955281:-1269012015
 * pts:int
 * pts_count:int
 * offset:int
 */
export interface MessagesAffectedHistoryS {
  _id: number;
  _values: [number, number, number];

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  get_offset(): number;
  set_offset(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAffectedHistoryS = r<new () => MessagesAffectedHistoryS>(
  0xb45c69d1,
  "MessagesAffectedHistoryS",
  () => ["pts", IntRW, "pts_count", IntRW, "offset", IntRW]
);

/**
 * inputMessagesFilterEmpty:MessagesFilter
 * #57e2f66c:1474492012:1474492012
 *
 */
export interface InputMessagesFilterEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterEmptyS = r<new () => InputMessagesFilterEmptyS>(
  0x57e2f66c,
  "InputMessagesFilterEmptyS",
  () => []
);

/**
 * inputMessagesFilterPhotos:MessagesFilter
 * #9609a51c:2517214492:-1777752804
 *
 */
export interface InputMessagesFilterPhotosS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterPhotosS = r<new () => InputMessagesFilterPhotosS>(
  0x9609a51c,
  "InputMessagesFilterPhotosS",
  () => []
);

/**
 * inputMessagesFilterVideo:MessagesFilter
 * #9fc00e65:2680163941:-1614803355
 *
 */
export interface InputMessagesFilterVideoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterVideoS = r<new () => InputMessagesFilterVideoS>(
  0x9fc00e65,
  "InputMessagesFilterVideoS",
  () => []
);

/**
 * inputMessagesFilterPhotoVideo:MessagesFilter
 * #56e9f0e4:1458172132:1458172132
 *
 */
export interface InputMessagesFilterPhotoVideoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterPhotoVideoS = r<
  new () => InputMessagesFilterPhotoVideoS
>(0x56e9f0e4, "InputMessagesFilterPhotoVideoS", () => []);

/**
 * inputMessagesFilterDocument:MessagesFilter
 * #9eddf188:2665345416:-1629621880
 *
 */
export interface InputMessagesFilterDocumentS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterDocumentS = r<
  new () => InputMessagesFilterDocumentS
>(0x9eddf188, "InputMessagesFilterDocumentS", () => []);

/**
 * inputMessagesFilterUrl:MessagesFilter
 * #7ef0dd87:2129714567:2129714567
 *
 */
export interface InputMessagesFilterUrlS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterUrlS = r<new () => InputMessagesFilterUrlS>(
  0x7ef0dd87,
  "InputMessagesFilterUrlS",
  () => []
);

/**
 * inputMessagesFilterGif:MessagesFilter
 * #ffc86587:4291323271:-3644025
 *
 */
export interface InputMessagesFilterGifS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterGifS = r<new () => InputMessagesFilterGifS>(
  0xffc86587,
  "InputMessagesFilterGifS",
  () => []
);

/**
 * updateMessageID:Update
 * #4e90bfd6:1318109142:1318109142
 * id:int
 * random_id:long
 */
export interface UpdateMessageIdS {
  _id: number;
  _values: [number, ProtoLong];

  get_id(): number;
  set_id(val: number): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateMessageIdS = r<new () => UpdateMessageIdS>(
  0x4e90bfd6,
  "UpdateMessageIdS",
  () => ["id", IntRW, "random_id", LongRW]
);

/**
 * updateDeleteMessages:Update
 * #a20db0e5:2718806245:-1576161051
 * messages:Vector<int>
 * pts:int
 * pts_count:int
 */
export interface UpdateDeleteMessagesS {
  _id: number;
  _values: [VectorS<number>, number, number];

  get_messages(): VectorS<number>;
  set_messages(val: VectorS<number>): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDeleteMessagesS = r<new () => UpdateDeleteMessagesS>(
  0xa20db0e5,
  "UpdateDeleteMessagesS",
  () => ["messages", VectorRW(IntRW), "pts", IntRW, "pts_count", IntRW]
);

/**
 * updateUserName:Update
 * #a7332b73:2805148531:-1489818765
 * user_id:int
 * first_name:string
 * last_name:string
 * username:string
 */
export interface UpdateUserNameS {
  _id: number;
  _values: [number, string, string, string];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_username(): string;
  set_username(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserNameS = r<new () => UpdateUserNameS>(
  0xa7332b73,
  "UpdateUserNameS",
  () => [
    "user_id",
    IntRW,
    "first_name",
    StringRW,
    "last_name",
    StringRW,
    "username",
    StringRW
  ]
);

/**
 * updates.state:updates.State
 * #a56c2a3e:2775329342:-1519637954
 * pts:int
 * qts:int
 * date:int
 * seq:int
 * unread_count:int
 */
export interface UpdatesStateS {
  _id: number;
  _values: [number, number, number, number, number];

  get_pts(): number;
  set_pts(val: number): this;

  get_qts(): number;
  set_qts(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_seq(): number;
  set_seq(val: number): this;

  get_unread_count(): number;
  set_unread_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesStateS = r<new () => UpdatesStateS>(
  0xa56c2a3e,
  "UpdatesStateS",
  () => [
    "pts",
    IntRW,
    "qts",
    IntRW,
    "date",
    IntRW,
    "seq",
    IntRW,
    "unread_count",
    IntRW
  ]
);

/**
 * updates.differenceEmpty:updates.Difference
 * #5d75a138:1567990072:1567990072
 * date:int
 * seq:int
 */
export interface UpdatesDifferenceEmptyS {
  _id: number;
  _values: [number, number];

  get_date(): number;
  set_date(val: number): this;

  get_seq(): number;
  set_seq(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesDifferenceEmptyS = r<new () => UpdatesDifferenceEmptyS>(
  0x5d75a138,
  "UpdatesDifferenceEmptyS",
  () => ["date", IntRW, "seq", IntRW]
);

/**
 * updatesTooLong:Updates
 * #e317af7e:3809980286:-484987010
 *
 */
export interface UpdatesTooLongS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesTooLongS = r<new () => UpdatesTooLongS>(
  0xe317af7e,
  "UpdatesTooLongS",
  () => []
);

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
export interface DcOptionS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_ipv6(): true;
  set_ipv6(val: true): this;

  has_ipv6(): boolean;

  get_media_only(): true;
  set_media_only(val: true): this;

  has_media_only(): boolean;

  get_tcpo_only(): true;
  set_tcpo_only(val: true): this;

  has_tcpo_only(): boolean;

  get_cdn(): true;
  set_cdn(val: true): this;

  has_cdn(): boolean;

  get_static(): true;
  set_static(val: true): this;

  has_static(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_ip_address(): string;
  set_ip_address(val: string): this;

  get_port(): number;
  set_port(val: number): this;

  get_secret(): Uint8Array;
  set_secret(val: Uint8Array): this;

  has_secret(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DcOptionS = r<new () => DcOptionS>(0x18b7a10d, "DcOptionS", () => [
  "flags",
  IntRW,
  "ipv6",
  Optional(TrueRW, 0, 0),
  "media_only",
  Optional(TrueRW, 0, 1),
  "tcpo_only",
  Optional(TrueRW, 0, 2),
  "cdn",
  Optional(TrueRW, 0, 3),
  "static",
  Optional(TrueRW, 0, 4),
  "id",
  IntRW,
  "ip_address",
  StringRW,
  "port",
  IntRW,
  "secret",
  Optional(BytesRW, 0, 10)
]);

/**
 * nearestDc:NearestDc
 * #8e1a1775:2384074613:-1910892683
 * country:string
 * this_dc:int
 * nearest_dc:int
 */
export interface NearestDcS {
  _id: number;
  _values: [string, number, number];

  get_country(): string;
  set_country(val: string): this;

  get_this_dc(): number;
  set_this_dc(val: number): this;

  get_nearest_dc(): number;
  set_nearest_dc(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NearestDcS = r<new () => NearestDcS>(
  0x8e1a1775,
  "NearestDcS",
  () => ["country", StringRW, "this_dc", IntRW, "nearest_dc", IntRW]
);

/**
 * help.noAppUpdate:help.AppUpdate
 * #c45a6536:3294258486:-1000708810
 *
 */
export interface HelpNoAppUpdateS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpNoAppUpdateS = r<new () => HelpNoAppUpdateS>(
  0xc45a6536,
  "HelpNoAppUpdateS",
  () => []
);

/**
 * help.inviteText:help.InviteText
 * #18cb9f78:415997816:415997816
 * message:string
 */
export interface HelpInviteTextS {
  _id: number;
  _values: [string];

  get_message(): string;
  set_message(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpInviteTextS = r<new () => HelpInviteTextS>(
  0x18cb9f78,
  "HelpInviteTextS",
  () => ["message", StringRW]
);

/**
 * updateEncryptedChatTyping:Update
 * #1710f156:386986326:386986326
 * chat_id:int
 */
export interface UpdateEncryptedChatTypingS {
  _id: number;
  _values: [number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateEncryptedChatTypingS = r<new () => UpdateEncryptedChatTypingS>(
  0x1710f156,
  "UpdateEncryptedChatTypingS",
  () => ["chat_id", IntRW]
);

/**
 * updateEncryptedMessagesRead:Update
 * #38fe25b7:956179895:956179895
 * chat_id:int
 * max_date:int
 * date:int
 */
export interface UpdateEncryptedMessagesReadS {
  _id: number;
  _values: [number, number, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_max_date(): number;
  set_max_date(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateEncryptedMessagesReadS = r<
  new () => UpdateEncryptedMessagesReadS
>(0x38fe25b7, "UpdateEncryptedMessagesReadS", () => [
  "chat_id",
  IntRW,
  "max_date",
  IntRW,
  "date",
  IntRW
]);

/**
 * encryptedChatEmpty:EncryptedChat
 * #ab7ec0a0:2877210784:-1417756512
 * id:int
 */
export interface EncryptedChatEmptyS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedChatEmptyS = r<new () => EncryptedChatEmptyS>(
  0xab7ec0a0,
  "EncryptedChatEmptyS",
  () => ["id", IntRW]
);

/**
 * encryptedChatWaiting:EncryptedChat
 * #3bf703dc:1006044124:1006044124
 * id:int
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 */
export interface EncryptedChatWaitingS {
  _id: number;
  _values: [number, ProtoLong, number, number, number];

  get_id(): number;
  set_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedChatWaitingS = r<new () => EncryptedChatWaitingS>(
  0x3bf703dc,
  "EncryptedChatWaitingS",
  () => [
    "id",
    IntRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW
  ]
);

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
export interface EncryptedChatRequestedS {
  _id: number;
  _values: [number, ProtoLong, number, number, number, Uint8Array];

  get_id(): number;
  set_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  get_g_a(): Uint8Array;
  set_g_a(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedChatRequestedS = r<new () => EncryptedChatRequestedS>(
  0xc878527e,
  "EncryptedChatRequestedS",
  () => [
    "id",
    IntRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW,
    "g_a",
    BytesRW
  ]
);

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
export interface EncryptedChatS {
  _id: number;
  _values: [number, ProtoLong, number, number, number, Uint8Array, ProtoLong];

  get_id(): number;
  set_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  get_g_a_or_b(): Uint8Array;
  set_g_a_or_b(val: Uint8Array): this;

  get_key_fingerprint(): ProtoLong;
  set_key_fingerprint(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedChatS = r<new () => EncryptedChatS>(
  0xfa56ce36,
  "EncryptedChatS",
  () => [
    "id",
    IntRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW,
    "g_a_or_b",
    BytesRW,
    "key_fingerprint",
    LongRW
  ]
);

/**
 * encryptedChatDiscarded:EncryptedChat
 * #13d6dd27:332848423:332848423
 * id:int
 */
export interface EncryptedChatDiscardedS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedChatDiscardedS = r<new () => EncryptedChatDiscardedS>(
  0x13d6dd27,
  "EncryptedChatDiscardedS",
  () => ["id", IntRW]
);

/**
 * inputEncryptedChat:InputEncryptedChat
 * #f141b5e1:4047615457:-247351839
 * chat_id:int
 * access_hash:long
 */
export interface InputEncryptedChatS {
  _id: number;
  _values: [number, ProtoLong];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputEncryptedChatS = r<new () => InputEncryptedChatS>(
  0xf141b5e1,
  "InputEncryptedChatS",
  () => ["chat_id", IntRW, "access_hash", LongRW]
);

/**
 * encryptedFileEmpty:EncryptedFile
 * #c21f497e:3256830334:-1038136962
 *
 */
export interface EncryptedFileEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedFileEmptyS = r<new () => EncryptedFileEmptyS>(
  0xc21f497e,
  "EncryptedFileEmptyS",
  () => []
);

/**
 * encryptedFile:EncryptedFile
 * #4a70994c:1248893260:1248893260
 * id:long
 * access_hash:long
 * size:int
 * dc_id:int
 * key_fingerprint:int
 */
export interface EncryptedFileS {
  _id: number;
  _values: [ProtoLong, ProtoLong, number, number, number];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_size(): number;
  set_size(val: number): this;

  get_dc_id(): number;
  set_dc_id(val: number): this;

  get_key_fingerprint(): number;
  set_key_fingerprint(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedFileS = r<new () => EncryptedFileS>(
  0x4a70994c,
  "EncryptedFileS",
  () => [
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "size",
    IntRW,
    "dc_id",
    IntRW,
    "key_fingerprint",
    IntRW
  ]
);

/**
 * inputEncryptedFileEmpty:InputEncryptedFile
 * #1837c364:406307684:406307684
 *
 */
export interface InputEncryptedFileEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputEncryptedFileEmptyS = r<new () => InputEncryptedFileEmptyS>(
  0x1837c364,
  "InputEncryptedFileEmptyS",
  () => []
);

/**
 * inputEncryptedFileUploaded:InputEncryptedFile
 * #64bd0306:1690108678:1690108678
 * id:long
 * parts:int
 * md5_checksum:string
 * key_fingerprint:int
 */
export interface InputEncryptedFileUploadedS {
  _id: number;
  _values: [ProtoLong, number, string, number];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_parts(): number;
  set_parts(val: number): this;

  get_md5_checksum(): string;
  set_md5_checksum(val: string): this;

  get_key_fingerprint(): number;
  set_key_fingerprint(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputEncryptedFileUploadedS = r<
  new () => InputEncryptedFileUploadedS
>(0x64bd0306, "InputEncryptedFileUploadedS", () => [
  "id",
  LongRW,
  "parts",
  IntRW,
  "md5_checksum",
  StringRW,
  "key_fingerprint",
  IntRW
]);

/**
 * inputEncryptedFile:InputEncryptedFile
 * #5a17b5e5:1511503333:1511503333
 * id:long
 * access_hash:long
 */
export interface InputEncryptedFileS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputEncryptedFileS = r<new () => InputEncryptedFileS>(
  0x5a17b5e5,
  "InputEncryptedFileS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * inputEncryptedFileLocation:InputFileLocation
 * #f5235d55:4112735573:-182231723
 * id:long
 * access_hash:long
 */
export interface InputEncryptedFileLocationS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputEncryptedFileLocationS = r<
  new () => InputEncryptedFileLocationS
>(0xf5235d55, "InputEncryptedFileLocationS", () => [
  "id",
  LongRW,
  "access_hash",
  LongRW
]);

/**
 * encryptedMessageService:EncryptedMessage
 * #23734b06:594758406:594758406
 * random_id:long
 * chat_id:int
 * date:int
 * bytes:bytes
 */
export interface EncryptedMessageServiceS {
  _id: number;
  _values: [ProtoLong, number, number, Uint8Array];

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedMessageServiceS = r<new () => EncryptedMessageServiceS>(
  0x23734b06,
  "EncryptedMessageServiceS",
  () => ["random_id", LongRW, "chat_id", IntRW, "date", IntRW, "bytes", BytesRW]
);

/**
 * messages.dhConfigNotModified:messages.DhConfig
 * #c0e24635:3236054581:-1058912715
 * random:bytes
 */
export interface MessagesDhConfigNotModifiedS {
  _id: number;
  _values: [Uint8Array];

  get_random(): Uint8Array;
  set_random(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDhConfigNotModifiedS = r<
  new () => MessagesDhConfigNotModifiedS
>(0xc0e24635, "MessagesDhConfigNotModifiedS", () => ["random", BytesRW]);

/**
 * messages.dhConfig:messages.DhConfig
 * #2c221edd:740433629:740433629
 * g:int
 * p:bytes
 * version:int
 * random:bytes
 */
export interface MessagesDhConfigS {
  _id: number;
  _values: [number, Uint8Array, number, Uint8Array];

  get_g(): number;
  set_g(val: number): this;

  get_p(): Uint8Array;
  set_p(val: Uint8Array): this;

  get_version(): number;
  set_version(val: number): this;

  get_random(): Uint8Array;
  set_random(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDhConfigS = r<new () => MessagesDhConfigS>(
  0x2c221edd,
  "MessagesDhConfigS",
  () => ["g", IntRW, "p", BytesRW, "version", IntRW, "random", BytesRW]
);

/**
 * messages.sentEncryptedMessage:messages.SentEncryptedMessage
 * #560f8935:1443858741:1443858741
 * date:int
 */
export interface MessagesSentEncryptedMessageS {
  _id: number;
  _values: [number];

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSentEncryptedMessageS = r<
  new () => MessagesSentEncryptedMessageS
>(0x560f8935, "MessagesSentEncryptedMessageS", () => ["date", IntRW]);

/**
 * inputFileBig:InputFile
 * #fa4f0bb5:4199484341:-95482955
 * id:long
 * parts:int
 * name:string
 */
export interface InputFileBigS {
  _id: number;
  _values: [ProtoLong, number, string];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_parts(): number;
  set_parts(val: number): this;

  get_name(): string;
  set_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputFileBigS = r<new () => InputFileBigS>(
  0xfa4f0bb5,
  "InputFileBigS",
  () => ["id", LongRW, "parts", IntRW, "name", StringRW]
);

/**
 * inputEncryptedFileBigUploaded:InputEncryptedFile
 * #2dc173c8:767652808:767652808
 * id:long
 * parts:int
 * key_fingerprint:int
 */
export interface InputEncryptedFileBigUploadedS {
  _id: number;
  _values: [ProtoLong, number, number];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_parts(): number;
  set_parts(val: number): this;

  get_key_fingerprint(): number;
  set_key_fingerprint(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputEncryptedFileBigUploadedS = r<
  new () => InputEncryptedFileBigUploadedS
>(0x2dc173c8, "InputEncryptedFileBigUploadedS", () => [
  "id",
  LongRW,
  "parts",
  IntRW,
  "key_fingerprint",
  IntRW
]);

/**
 * updateChatParticipantAdd:Update
 * #ea4b0e5c:3930787420:-364179876
 * chat_id:int
 * user_id:int
 * inviter_id:int
 * date:int
 * version:int
 */
export interface UpdateChatParticipantAddS {
  _id: number;
  _values: [number, number, number, number, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_inviter_id(): number;
  set_inviter_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatParticipantAddS = r<new () => UpdateChatParticipantAddS>(
  0xea4b0e5c,
  "UpdateChatParticipantAddS",
  () => [
    "chat_id",
    IntRW,
    "user_id",
    IntRW,
    "inviter_id",
    IntRW,
    "date",
    IntRW,
    "version",
    IntRW
  ]
);

/**
 * updateChatParticipantDelete:Update
 * #6e5f8c22:1851755554:1851755554
 * chat_id:int
 * user_id:int
 * version:int
 */
export interface UpdateChatParticipantDeleteS {
  _id: number;
  _values: [number, number, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatParticipantDeleteS = r<
  new () => UpdateChatParticipantDeleteS
>(0x6e5f8c22, "UpdateChatParticipantDeleteS", () => [
  "chat_id",
  IntRW,
  "user_id",
  IntRW,
  "version",
  IntRW
]);

/**
 * inputDocumentEmpty:InputDocument
 * #72f0eaae:1928391342:1928391342
 *
 */
export interface InputDocumentEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputDocumentEmptyS = r<new () => InputDocumentEmptyS>(
  0x72f0eaae,
  "InputDocumentEmptyS",
  () => []
);

/**
 * inputDocument:InputDocument
 * #1abfb575:448771445:448771445
 * id:long
 * access_hash:long
 * file_reference:bytes
 */
export interface InputDocumentS {
  _id: number;
  _values: [ProtoLong, ProtoLong, Uint8Array];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputDocumentS = r<new () => InputDocumentS>(
  0x1abfb575,
  "InputDocumentS",
  () => ["id", LongRW, "access_hash", LongRW, "file_reference", BytesRW]
);

/**
 * inputDocumentFileLocation:InputFileLocation
 * #bad07584:3134223748:-1160743548
 * id:long
 * access_hash:long
 * file_reference:bytes
 * thumb_size:string
 */
export interface InputDocumentFileLocationS {
  _id: number;
  _values: [ProtoLong, ProtoLong, Uint8Array, string];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  get_thumb_size(): string;
  set_thumb_size(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputDocumentFileLocationS = r<new () => InputDocumentFileLocationS>(
  0xbad07584,
  "InputDocumentFileLocationS",
  () => [
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "file_reference",
    BytesRW,
    "thumb_size",
    StringRW
  ]
);

/**
 * documentEmpty:Document
 * #36f8c871:922273905:922273905
 * id:long
 */
export interface DocumentEmptyS {
  _id: number;
  _values: [ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentEmptyS = r<new () => DocumentEmptyS>(
  0x36f8c871,
  "DocumentEmptyS",
  () => ["id", LongRW]
);

/**
 * notifyUsers:NotifyPeer
 * #b4c83b4c:3033021260:-1261946036
 *
 */
export interface NotifyUsersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NotifyUsersS = r<new () => NotifyUsersS>(
  0xb4c83b4c,
  "NotifyUsersS",
  () => []
);

/**
 * notifyChats:NotifyPeer
 * #c007cec3:3221737155:-1073230141
 *
 */
export interface NotifyChatsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NotifyChatsS = r<new () => NotifyChatsS>(
  0xc007cec3,
  "NotifyChatsS",
  () => []
);

/**
 * sendMessageTypingAction:SendMessageAction
 * #16bf744e:381645902:381645902
 *
 */
export interface SendMessageTypingActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageTypingActionS = r<new () => SendMessageTypingActionS>(
  0x16bf744e,
  "SendMessageTypingActionS",
  () => []
);

/**
 * sendMessageCancelAction:SendMessageAction
 * #fd5ec8f5:4250847477:-44119819
 *
 */
export interface SendMessageCancelActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageCancelActionS = r<new () => SendMessageCancelActionS>(
  0xfd5ec8f5,
  "SendMessageCancelActionS",
  () => []
);

/**
 * sendMessageRecordVideoAction:SendMessageAction
 * #a187d66f:2710034031:-1584933265
 *
 */
export interface SendMessageRecordVideoActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageRecordVideoActionS = r<
  new () => SendMessageRecordVideoActionS
>(0xa187d66f, "SendMessageRecordVideoActionS", () => []);

/**
 * sendMessageUploadVideoAction:SendMessageAction
 * #e9763aec:3916839660:-378127636
 * progress:int
 */
export interface SendMessageUploadVideoActionS {
  _id: number;
  _values: [number];

  get_progress(): number;
  set_progress(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageUploadVideoActionS = r<
  new () => SendMessageUploadVideoActionS
>(0xe9763aec, "SendMessageUploadVideoActionS", () => ["progress", IntRW]);

/**
 * sendMessageRecordAudioAction:SendMessageAction
 * #d52f73f7:3576656887:-718310409
 *
 */
export interface SendMessageRecordAudioActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageRecordAudioActionS = r<
  new () => SendMessageRecordAudioActionS
>(0xd52f73f7, "SendMessageRecordAudioActionS", () => []);

/**
 * sendMessageUploadAudioAction:SendMessageAction
 * #f351d7ab:4082227115:-212740181
 * progress:int
 */
export interface SendMessageUploadAudioActionS {
  _id: number;
  _values: [number];

  get_progress(): number;
  set_progress(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageUploadAudioActionS = r<
  new () => SendMessageUploadAudioActionS
>(0xf351d7ab, "SendMessageUploadAudioActionS", () => ["progress", IntRW]);

/**
 * sendMessageUploadPhotoAction:SendMessageAction
 * #d1d34a26:3520285222:-774682074
 * progress:int
 */
export interface SendMessageUploadPhotoActionS {
  _id: number;
  _values: [number];

  get_progress(): number;
  set_progress(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageUploadPhotoActionS = r<
  new () => SendMessageUploadPhotoActionS
>(0xd1d34a26, "SendMessageUploadPhotoActionS", () => ["progress", IntRW]);

/**
 * sendMessageUploadDocumentAction:SendMessageAction
 * #aa0cd9e4:2852968932:-1441998364
 * progress:int
 */
export interface SendMessageUploadDocumentActionS {
  _id: number;
  _values: [number];

  get_progress(): number;
  set_progress(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageUploadDocumentActionS = r<
  new () => SendMessageUploadDocumentActionS
>(0xaa0cd9e4, "SendMessageUploadDocumentActionS", () => ["progress", IntRW]);

/**
 * sendMessageGeoLocationAction:SendMessageAction
 * #176f8ba1:393186209:393186209
 *
 */
export interface SendMessageGeoLocationActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageGeoLocationActionS = r<
  new () => SendMessageGeoLocationActionS
>(0x176f8ba1, "SendMessageGeoLocationActionS", () => []);

/**
 * sendMessageChooseContactAction:SendMessageAction
 * #628cbc6f:1653390447:1653390447
 *
 */
export interface SendMessageChooseContactActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageChooseContactActionS = r<
  new () => SendMessageChooseContactActionS
>(0x628cbc6f, "SendMessageChooseContactActionS", () => []);

/**
 * userStatusRecently:UserStatus
 * #e26f42f1:3798942449:-496024847
 *
 */
export interface UserStatusRecentlyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserStatusRecentlyS = r<new () => UserStatusRecentlyS>(
  0xe26f42f1,
  "UserStatusRecentlyS",
  () => []
);

/**
 * userStatusLastWeek:UserStatus
 * #7bf09fc:129960444:129960444
 *
 */
export interface UserStatusLastWeekS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserStatusLastWeekS = r<new () => UserStatusLastWeekS>(
  0x7bf09fc,
  "UserStatusLastWeekS",
  () => []
);

/**
 * userStatusLastMonth:UserStatus
 * #77ebc742:2011940674:2011940674
 *
 */
export interface UserStatusLastMonthS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserStatusLastMonthS = r<new () => UserStatusLastMonthS>(
  0x77ebc742,
  "UserStatusLastMonthS",
  () => []
);

/**
 * inputPrivacyKeyStatusTimestamp:InputPrivacyKey
 * #4f96cb18:1335282456:1335282456
 *
 */
export interface InputPrivacyKeyStatusTimestampS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyStatusTimestampS = r<
  new () => InputPrivacyKeyStatusTimestampS
>(0x4f96cb18, "InputPrivacyKeyStatusTimestampS", () => []);

/**
 * privacyKeyStatusTimestamp:PrivacyKey
 * #bc2eab30:3157175088:-1137792208
 *
 */
export interface PrivacyKeyStatusTimestampS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyStatusTimestampS = r<new () => PrivacyKeyStatusTimestampS>(
  0xbc2eab30,
  "PrivacyKeyStatusTimestampS",
  () => []
);

/**
 * inputPrivacyValueAllowContacts:InputPrivacyRule
 * #d09e07b:218751099:218751099
 *
 */
export interface InputPrivacyValueAllowContactsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueAllowContactsS = r<
  new () => InputPrivacyValueAllowContactsS
>(0xd09e07b, "InputPrivacyValueAllowContactsS", () => []);

/**
 * inputPrivacyValueAllowAll:InputPrivacyRule
 * #184b35ce:407582158:407582158
 *
 */
export interface InputPrivacyValueAllowAllS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueAllowAllS = r<new () => InputPrivacyValueAllowAllS>(
  0x184b35ce,
  "InputPrivacyValueAllowAllS",
  () => []
);

/**
 * inputPrivacyValueDisallowContacts:InputPrivacyRule
 * #ba52007:195371015:195371015
 *
 */
export interface InputPrivacyValueDisallowContactsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueDisallowContactsS = r<
  new () => InputPrivacyValueDisallowContactsS
>(0xba52007, "InputPrivacyValueDisallowContactsS", () => []);

/**
 * inputPrivacyValueDisallowAll:InputPrivacyRule
 * #d66b66c9:3597362889:-697604407
 *
 */
export interface InputPrivacyValueDisallowAllS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueDisallowAllS = r<
  new () => InputPrivacyValueDisallowAllS
>(0xd66b66c9, "InputPrivacyValueDisallowAllS", () => []);

/**
 * privacyValueAllowContacts:PrivacyRule
 * #fffe1bac:4294843308:-123988
 *
 */
export interface PrivacyValueAllowContactsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueAllowContactsS = r<new () => PrivacyValueAllowContactsS>(
  0xfffe1bac,
  "PrivacyValueAllowContactsS",
  () => []
);

/**
 * privacyValueAllowAll:PrivacyRule
 * #65427b82:1698855810:1698855810
 *
 */
export interface PrivacyValueAllowAllS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueAllowAllS = r<new () => PrivacyValueAllowAllS>(
  0x65427b82,
  "PrivacyValueAllowAllS",
  () => []
);

/**
 * privacyValueAllowUsers:PrivacyRule
 * #4d5bbe0c:1297858060:1297858060
 * users:Vector<int>
 */
export interface PrivacyValueAllowUsersS {
  _id: number;
  _values: [VectorS<number>];

  get_users(): VectorS<number>;
  set_users(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueAllowUsersS = r<new () => PrivacyValueAllowUsersS>(
  0x4d5bbe0c,
  "PrivacyValueAllowUsersS",
  () => ["users", VectorRW(IntRW)]
);

/**
 * privacyValueDisallowContacts:PrivacyRule
 * #f888fa1a:4169726490:-125240806
 *
 */
export interface PrivacyValueDisallowContactsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueDisallowContactsS = r<
  new () => PrivacyValueDisallowContactsS
>(0xf888fa1a, "PrivacyValueDisallowContactsS", () => []);

/**
 * privacyValueDisallowAll:PrivacyRule
 * #8b73e763:2339628899:-1955338397
 *
 */
export interface PrivacyValueDisallowAllS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueDisallowAllS = r<new () => PrivacyValueDisallowAllS>(
  0x8b73e763,
  "PrivacyValueDisallowAllS",
  () => []
);

/**
 * privacyValueDisallowUsers:PrivacyRule
 * #c7f49b7:209668535:209668535
 * users:Vector<int>
 */
export interface PrivacyValueDisallowUsersS {
  _id: number;
  _values: [VectorS<number>];

  get_users(): VectorS<number>;
  set_users(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueDisallowUsersS = r<new () => PrivacyValueDisallowUsersS>(
  0xc7f49b7,
  "PrivacyValueDisallowUsersS",
  () => ["users", VectorRW(IntRW)]
);

/**
 * accountDaysTTL:AccountDaysTTL
 * #b8d0afdf:3100684255:-1194283041
 * days:int
 */
export interface AccountDaysTtlS {
  _id: number;
  _values: [number];

  get_days(): number;
  set_days(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountDaysTtlS = r<new () => AccountDaysTtlS>(
  0xb8d0afdf,
  "AccountDaysTtlS",
  () => ["days", IntRW]
);

/**
 * updateUserPhone:Update
 * #12b9417b:314130811:314130811
 * user_id:int
 * phone:string
 */
export interface UpdateUserPhoneS {
  _id: number;
  _values: [number, string];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_phone(): string;
  set_phone(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserPhoneS = r<new () => UpdateUserPhoneS>(
  0x12b9417b,
  "UpdateUserPhoneS",
  () => ["user_id", IntRW, "phone", StringRW]
);

/**
 * documentAttributeImageSize:DocumentAttribute
 * #6c37c15c:1815593308:1815593308
 * w:int
 * h:int
 */
export interface DocumentAttributeImageSizeS {
  _id: number;
  _values: [number, number];

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeImageSizeS = r<
  new () => DocumentAttributeImageSizeS
>(0x6c37c15c, "DocumentAttributeImageSizeS", () => ["w", IntRW, "h", IntRW]);

/**
 * documentAttributeAnimated:DocumentAttribute
 * #11b58939:297109817:297109817
 *
 */
export interface DocumentAttributeAnimatedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeAnimatedS = r<new () => DocumentAttributeAnimatedS>(
  0x11b58939,
  "DocumentAttributeAnimatedS",
  () => []
);

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
export interface DocumentAttributeVideoS {
  _id: number;
  _values: [number, true, true, number, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_round_message(): true;
  set_round_message(val: true): this;

  has_round_message(): boolean;

  get_supports_streaming(): true;
  set_supports_streaming(val: true): this;

  has_supports_streaming(): boolean;

  get_duration(): number;
  set_duration(val: number): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeVideoS = r<new () => DocumentAttributeVideoS>(
  0xef02ce6,
  "DocumentAttributeVideoS",
  () => [
    "flags",
    IntRW,
    "round_message",
    Optional(TrueRW, 0, 0),
    "supports_streaming",
    Optional(TrueRW, 0, 1),
    "duration",
    IntRW,
    "w",
    IntRW,
    "h",
    IntRW
  ]
);

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
export interface DocumentAttributeAudioS {
  _id: number;
  _values: [number, true, number, string, string, Uint8Array];

  get_flags(): number;
  set_flags(val: number): this;

  get_voice(): true;
  set_voice(val: true): this;

  has_voice(): boolean;

  get_duration(): number;
  set_duration(val: number): this;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_performer(): string;
  set_performer(val: string): this;

  has_performer(): boolean;

  get_waveform(): Uint8Array;
  set_waveform(val: Uint8Array): this;

  has_waveform(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeAudioS = r<new () => DocumentAttributeAudioS>(
  0x9852f9c6,
  "DocumentAttributeAudioS",
  () => [
    "flags",
    IntRW,
    "voice",
    Optional(TrueRW, 0, 10),
    "duration",
    IntRW,
    "title",
    Optional(StringRW, 0, 0),
    "performer",
    Optional(StringRW, 0, 1),
    "waveform",
    Optional(BytesRW, 0, 2)
  ]
);

/**
 * documentAttributeFilename:DocumentAttribute
 * #15590068:358154344:358154344
 * file_name:string
 */
export interface DocumentAttributeFilenameS {
  _id: number;
  _values: [string];

  get_file_name(): string;
  set_file_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeFilenameS = r<new () => DocumentAttributeFilenameS>(
  0x15590068,
  "DocumentAttributeFilenameS",
  () => ["file_name", StringRW]
);

/**
 * messages.stickersNotModified:messages.Stickers
 * #f1749a22:4050950690:-244016606
 *
 */
export interface MessagesStickersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesStickersNotModifiedS = r<
  new () => MessagesStickersNotModifiedS
>(0xf1749a22, "MessagesStickersNotModifiedS", () => []);

/**
 * stickerPack:StickerPack
 * #12b299d4:313694676:313694676
 * emoticon:string
 * documents:Vector<long>
 */
export interface StickerPackS {
  _id: number;
  _values: [string, VectorS<ProtoLong>];

  get_emoticon(): string;
  set_emoticon(val: string): this;

  get_documents(): VectorS<ProtoLong>;
  set_documents(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickerPackS = r<new () => StickerPackS>(
  0x12b299d4,
  "StickerPackS",
  () => ["emoticon", StringRW, "documents", VectorRW(LongRW)]
);

/**
 * messages.allStickersNotModified:messages.AllStickers
 * #e86602c3:3898999491:-395967805
 *
 */
export interface MessagesAllStickersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAllStickersNotModifiedS = r<
  new () => MessagesAllStickersNotModifiedS
>(0xe86602c3, "MessagesAllStickersNotModifiedS", () => []);

/**
 * messages.affectedMessages:messages.AffectedMessages
 * #84d19185:2228326789:-2066640507
 * pts:int
 * pts_count:int
 */
export interface MessagesAffectedMessagesS {
  _id: number;
  _values: [number, number];

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAffectedMessagesS = r<new () => MessagesAffectedMessagesS>(
  0x84d19185,
  "MessagesAffectedMessagesS",
  () => ["pts", IntRW, "pts_count", IntRW]
);

/**
 * webPageEmpty:WebPage
 * #eb1477e8:3943987176:-350980120
 * id:long
 */
export interface WebPageEmptyS {
  _id: number;
  _values: [ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebPageEmptyS = r<new () => WebPageEmptyS>(
  0xeb1477e8,
  "WebPageEmptyS",
  () => ["id", LongRW]
);

/**
 * webPagePending:WebPage
 * #c586da1c:3313949212:-981018084
 * id:long
 * date:int
 */
export interface WebPagePendingS {
  _id: number;
  _values: [ProtoLong, number];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebPagePendingS = r<new () => WebPagePendingS>(
  0xc586da1c,
  "WebPagePendingS",
  () => ["id", LongRW, "date", IntRW]
);

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
export interface AuthorizationS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_current(): true;
  set_current(val: true): this;

  has_current(): boolean;

  get_official_app(): true;
  set_official_app(val: true): this;

  has_official_app(): boolean;

  get_password_pending(): true;
  set_password_pending(val: true): this;

  has_password_pending(): boolean;

  get_hash(): ProtoLong;
  set_hash(val: ProtoLong): this;

  get_device_model(): string;
  set_device_model(val: string): this;

  get_platform(): string;
  set_platform(val: string): this;

  get_system_version(): string;
  set_system_version(val: string): this;

  get_api_id(): number;
  set_api_id(val: number): this;

  get_app_name(): string;
  set_app_name(val: string): this;

  get_app_version(): string;
  set_app_version(val: string): this;

  get_date_created(): number;
  set_date_created(val: number): this;

  get_date_active(): number;
  set_date_active(val: number): this;

  get_ip(): string;
  set_ip(val: string): this;

  get_country(): string;
  set_country(val: string): this;

  get_region(): string;
  set_region(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthorizationS = r<new () => AuthorizationS>(
  0xad01d61d,
  "AuthorizationS",
  () => [
    "flags",
    IntRW,
    "current",
    Optional(TrueRW, 0, 0),
    "official_app",
    Optional(TrueRW, 0, 1),
    "password_pending",
    Optional(TrueRW, 0, 2),
    "hash",
    LongRW,
    "device_model",
    StringRW,
    "platform",
    StringRW,
    "system_version",
    StringRW,
    "api_id",
    IntRW,
    "app_name",
    StringRW,
    "app_version",
    StringRW,
    "date_created",
    IntRW,
    "date_active",
    IntRW,
    "ip",
    StringRW,
    "country",
    StringRW,
    "region",
    StringRW
  ]
);

/**
 * auth.passwordRecovery:auth.PasswordRecovery
 * #137948a5:326715557:326715557
 * email_pattern:string
 */
export interface AuthPasswordRecoveryS {
  _id: number;
  _values: [string];

  get_email_pattern(): string;
  set_email_pattern(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthPasswordRecoveryS = r<new () => AuthPasswordRecoveryS>(
  0x137948a5,
  "AuthPasswordRecoveryS",
  () => ["email_pattern", StringRW]
);

/**
 * receivedNotifyMessage:ReceivedNotifyMessage
 * #a384b779:2743383929:-1551583367
 * id:int
 * flags:int
 */
export interface ReceivedNotifyMessageS {
  _id: number;
  _values: [number, number];

  get_id(): number;
  set_id(val: number): this;

  get_flags(): number;
  set_flags(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReceivedNotifyMessageS = r<new () => ReceivedNotifyMessageS>(
  0xa384b779,
  "ReceivedNotifyMessageS",
  () => ["id", IntRW, "flags", IntRW]
);

/**
 * chatInviteEmpty:ExportedChatInvite
 * #69df3769:1776236393:1776236393
 *
 */
export interface ChatInviteEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatInviteEmptyS = r<new () => ChatInviteEmptyS>(
  0x69df3769,
  "ChatInviteEmptyS",
  () => []
);

/**
 * chatInviteExported:ExportedChatInvite
 * #fc2e05bc:4230874556:-64092740
 * link:string
 */
export interface ChatInviteExportedS {
  _id: number;
  _values: [string];

  get_link(): string;
  set_link(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatInviteExportedS = r<new () => ChatInviteExportedS>(
  0xfc2e05bc,
  "ChatInviteExportedS",
  () => ["link", StringRW]
);

/**
 * messageActionChatJoinedByLink:MessageAction
 * #f89cf5e8:4171036136:-123931160
 * inviter_id:int
 */
export interface MessageActionChatJoinedByLinkS {
  _id: number;
  _values: [number];

  get_inviter_id(): number;
  set_inviter_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatJoinedByLinkS = r<
  new () => MessageActionChatJoinedByLinkS
>(0xf89cf5e8, "MessageActionChatJoinedByLinkS", () => ["inviter_id", IntRW]);

/**
 * updateReadMessagesContents:Update
 * #68c13933:1757493555:1757493555
 * messages:Vector<int>
 * pts:int
 * pts_count:int
 */
export interface UpdateReadMessagesContentsS {
  _id: number;
  _values: [VectorS<number>, number, number];

  get_messages(): VectorS<number>;
  set_messages(val: VectorS<number>): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateReadMessagesContentsS = r<
  new () => UpdateReadMessagesContentsS
>(0x68c13933, "UpdateReadMessagesContentsS", () => [
  "messages",
  VectorRW(IntRW),
  "pts",
  IntRW,
  "pts_count",
  IntRW
]);

/**
 * inputStickerSetEmpty:InputStickerSet
 * #ffb62b95:4290128789:-4838507
 *
 */
export interface InputStickerSetEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickerSetEmptyS = r<new () => InputStickerSetEmptyS>(
  0xffb62b95,
  "InputStickerSetEmptyS",
  () => []
);

/**
 * inputStickerSetID:InputStickerSet
 * #9de7a269:2649203305:-1645763991
 * id:long
 * access_hash:long
 */
export interface InputStickerSetIdS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickerSetIdS = r<new () => InputStickerSetIdS>(
  0x9de7a269,
  "InputStickerSetIdS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * inputStickerSetShortName:InputStickerSet
 * #861cc8a0:2250033312:-2044933984
 * short_name:string
 */
export interface InputStickerSetShortNameS {
  _id: number;
  _values: [string];

  get_short_name(): string;
  set_short_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickerSetShortNameS = r<new () => InputStickerSetShortNameS>(
  0x861cc8a0,
  "InputStickerSetShortNameS",
  () => ["short_name", StringRW]
);

/**
 * botCommand:BotCommand
 * #c27ac8c7:3262826695:-1032140601
 * command:string
 * description:string
 */
export interface BotCommandS {
  _id: number;
  _values: [string, string];

  get_command(): string;
  set_command(val: string): this;

  get_description(): string;
  set_description(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotCommandS = r<new () => BotCommandS>(
  0xc27ac8c7,
  "BotCommandS",
  () => ["command", StringRW, "description", StringRW]
);

/**
 * keyboardButton:KeyboardButton
 * #a2fa4880:2734311552:-1560655744
 * text:string
 */
export interface KeyboardButtonS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonS = r<new () => KeyboardButtonS>(
  0xa2fa4880,
  "KeyboardButtonS",
  () => ["text", StringRW]
);

/**
 * replyKeyboardHide:ReplyMarkup
 * #a03e5b85:2688441221:-1606526075
 * flags:#
 * selective:flags.2?true
 */
export interface ReplyKeyboardHideS {
  _id: number;
  _values: [number, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_selective(): true;
  set_selective(val: true): this;

  has_selective(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReplyKeyboardHideS = r<new () => ReplyKeyboardHideS>(
  0xa03e5b85,
  "ReplyKeyboardHideS",
  () => ["flags", IntRW, "selective", Optional(TrueRW, 0, 2)]
);

/**
 * replyKeyboardForceReply:ReplyMarkup
 * #f4108aa0:4094724768:-200242528
 * flags:#
 * single_use:flags.1?true
 * selective:flags.2?true
 */
export interface ReplyKeyboardForceReplyS {
  _id: number;
  _values: [number, true, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_single_use(): true;
  set_single_use(val: true): this;

  has_single_use(): boolean;

  get_selective(): true;
  set_selective(val: true): this;

  has_selective(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReplyKeyboardForceReplyS = r<new () => ReplyKeyboardForceReplyS>(
  0xf4108aa0,
  "ReplyKeyboardForceReplyS",
  () => [
    "flags",
    IntRW,
    "single_use",
    Optional(TrueRW, 0, 1),
    "selective",
    Optional(TrueRW, 0, 2)
  ]
);

/**
 * inputPeerUser:InputPeer
 * #7b8e7de6:2072935910:2072935910
 * user_id:int
 * access_hash:long
 */
export interface InputPeerUserS {
  _id: number;
  _values: [number, ProtoLong];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerUserS = r<new () => InputPeerUserS>(
  0x7b8e7de6,
  "InputPeerUserS",
  () => ["user_id", IntRW, "access_hash", LongRW]
);

/**
 * inputUser:InputUser
 * #d8292816:3626575894:-668391402
 * user_id:int
 * access_hash:long
 */
export interface InputUserS {
  _id: number;
  _values: [number, ProtoLong];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputUserS = r<new () => InputUserS>(
  0xd8292816,
  "InputUserS",
  () => ["user_id", IntRW, "access_hash", LongRW]
);

/**
 * messageEntityUnknown:MessageEntity
 * #bb92ba95:3146955413:-1148011883
 * offset:int
 * length:int
 */
export interface MessageEntityUnknownS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityUnknownS = r<new () => MessageEntityUnknownS>(
  0xbb92ba95,
  "MessageEntityUnknownS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityMention:MessageEntity
 * #fa04579d:4194588573:-100378723
 * offset:int
 * length:int
 */
export interface MessageEntityMentionS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityMentionS = r<new () => MessageEntityMentionS>(
  0xfa04579d,
  "MessageEntityMentionS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityHashtag:MessageEntity
 * #6f635b0d:1868782349:1868782349
 * offset:int
 * length:int
 */
export interface MessageEntityHashtagS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityHashtagS = r<new () => MessageEntityHashtagS>(
  0x6f635b0d,
  "MessageEntityHashtagS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityBotCommand:MessageEntity
 * #6cef8ac7:1827637959:1827637959
 * offset:int
 * length:int
 */
export interface MessageEntityBotCommandS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityBotCommandS = r<new () => MessageEntityBotCommandS>(
  0x6cef8ac7,
  "MessageEntityBotCommandS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityUrl:MessageEntity
 * #6ed02538:1859134776:1859134776
 * offset:int
 * length:int
 */
export interface MessageEntityUrlS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityUrlS = r<new () => MessageEntityUrlS>(
  0x6ed02538,
  "MessageEntityUrlS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityEmail:MessageEntity
 * #64e475c2:1692693954:1692693954
 * offset:int
 * length:int
 */
export interface MessageEntityEmailS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityEmailS = r<new () => MessageEntityEmailS>(
  0x64e475c2,
  "MessageEntityEmailS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityBold:MessageEntity
 * #bd610bc9:3177253833:-1117713463
 * offset:int
 * length:int
 */
export interface MessageEntityBoldS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityBoldS = r<new () => MessageEntityBoldS>(
  0xbd610bc9,
  "MessageEntityBoldS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityItalic:MessageEntity
 * #826f8b60:2188348256:-2106619040
 * offset:int
 * length:int
 */
export interface MessageEntityItalicS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityItalicS = r<new () => MessageEntityItalicS>(
  0x826f8b60,
  "MessageEntityItalicS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityCode:MessageEntity
 * #28a20571:681706865:681706865
 * offset:int
 * length:int
 */
export interface MessageEntityCodeS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityCodeS = r<new () => MessageEntityCodeS>(
  0x28a20571,
  "MessageEntityCodeS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityPre:MessageEntity
 * #73924be0:1938967520:1938967520
 * offset:int
 * length:int
 * language:string
 */
export interface MessageEntityPreS {
  _id: number;
  _values: [number, number, string];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  get_language(): string;
  set_language(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityPreS = r<new () => MessageEntityPreS>(
  0x73924be0,
  "MessageEntityPreS",
  () => ["offset", IntRW, "length", IntRW, "language", StringRW]
);

/**
 * messageEntityTextUrl:MessageEntity
 * #76a6d327:1990644519:1990644519
 * offset:int
 * length:int
 * url:string
 */
export interface MessageEntityTextUrlS {
  _id: number;
  _values: [number, number, string];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityTextUrlS = r<new () => MessageEntityTextUrlS>(
  0x76a6d327,
  "MessageEntityTextUrlS",
  () => ["offset", IntRW, "length", IntRW, "url", StringRW]
);

/**
 * inputChannelEmpty:InputChannel
 * #ee8c1e86:4002160262:-292807034
 *
 */
export interface InputChannelEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputChannelEmptyS = r<new () => InputChannelEmptyS>(
  0xee8c1e86,
  "InputChannelEmptyS",
  () => []
);

/**
 * inputChannel:InputChannel
 * #afeb712e:2951442734:-1343524562
 * channel_id:int
 * access_hash:long
 */
export interface InputChannelS {
  _id: number;
  _values: [number, ProtoLong];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputChannelS = r<new () => InputChannelS>(
  0xafeb712e,
  "InputChannelS",
  () => ["channel_id", IntRW, "access_hash", LongRW]
);

/**
 * peerChannel:Peer
 * #bddde532:3185435954:-1109531342
 * channel_id:int
 */
export interface PeerChannelS {
  _id: number;
  _values: [number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PeerChannelS = r<new () => PeerChannelS>(
  0xbddde532,
  "PeerChannelS",
  () => ["channel_id", IntRW]
);

/**
 * inputPeerChannel:InputPeer
 * #20adaef8:548253432:548253432
 * channel_id:int
 * access_hash:long
 */
export interface InputPeerChannelS {
  _id: number;
  _values: [number, ProtoLong];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerChannelS = r<new () => InputPeerChannelS>(
  0x20adaef8,
  "InputPeerChannelS",
  () => ["channel_id", IntRW, "access_hash", LongRW]
);

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
export interface ChannelForbiddenS {
  _id: number;
  _values: [number, true, true, number, ProtoLong, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_broadcast(): true;
  set_broadcast(val: true): this;

  has_broadcast(): boolean;

  get_megagroup(): true;
  set_megagroup(val: true): this;

  has_megagroup(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_title(): string;
  set_title(val: string): this;

  get_until_date(): number;
  set_until_date(val: number): this;

  has_until_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelForbiddenS = r<new () => ChannelForbiddenS>(
  0x289da732,
  "ChannelForbiddenS",
  () => [
    "flags",
    IntRW,
    "broadcast",
    Optional(TrueRW, 0, 5),
    "megagroup",
    Optional(TrueRW, 0, 8),
    "id",
    IntRW,
    "access_hash",
    LongRW,
    "title",
    StringRW,
    "until_date",
    Optional(IntRW, 0, 16)
  ]
);

/**
 * messageRange:MessageRange
 * #ae30253:182649427:182649427
 * min_id:int
 * max_id:int
 */
export interface MessageRangeS {
  _id: number;
  _values: [number, number];

  get_min_id(): number;
  set_min_id(val: number): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageRangeS = r<new () => MessageRangeS>(
  0xae30253,
  "MessageRangeS",
  () => ["min_id", IntRW, "max_id", IntRW]
);

/**
 * messageActionChannelCreate:MessageAction
 * #95d2ac92:2513611922:-1781355374
 * title:string
 */
export interface MessageActionChannelCreateS {
  _id: number;
  _values: [string];

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChannelCreateS = r<
  new () => MessageActionChannelCreateS
>(0x95d2ac92, "MessageActionChannelCreateS", () => ["title", StringRW]);

/**
 * updateChannelTooLong:Update
 * #eb0467fb:3942934523:-352032773
 * flags:#
 * channel_id:int
 * pts:flags.0?int
 */
export interface UpdateChannelTooLongS {
  _id: number;
  _values: [number, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_pts(): number;
  set_pts(val: number): this;

  has_pts(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelTooLongS = r<new () => UpdateChannelTooLongS>(
  0xeb0467fb,
  "UpdateChannelTooLongS",
  () => ["flags", IntRW, "channel_id", IntRW, "pts", Optional(IntRW, 0, 0)]
);

/**
 * updateChannel:Update
 * #b6d45656:3067369046:-1227598250
 * channel_id:int
 */
export interface UpdateChannelS {
  _id: number;
  _values: [number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelS = r<new () => UpdateChannelS>(
  0xb6d45656,
  "UpdateChannelS",
  () => ["channel_id", IntRW]
);

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
export interface UpdateReadChannelInboxS {
  _id: number;
  _values: [number, number, number, number, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_still_unread_count(): number;
  set_still_unread_count(val: number): this;

  get_pts(): number;
  set_pts(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateReadChannelInboxS = r<new () => UpdateReadChannelInboxS>(
  0x330b5424,
  "UpdateReadChannelInboxS",
  () => [
    "flags",
    IntRW,
    "folder_id",
    Optional(IntRW, 0, 0),
    "channel_id",
    IntRW,
    "max_id",
    IntRW,
    "still_unread_count",
    IntRW,
    "pts",
    IntRW
  ]
);

/**
 * updateDeleteChannelMessages:Update
 * #c37521c9:3279233481:-1015733815
 * channel_id:int
 * messages:Vector<int>
 * pts:int
 * pts_count:int
 */
export interface UpdateDeleteChannelMessagesS {
  _id: number;
  _values: [number, VectorS<number>, number, number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_messages(): VectorS<number>;
  set_messages(val: VectorS<number>): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDeleteChannelMessagesS = r<
  new () => UpdateDeleteChannelMessagesS
>(0xc37521c9, "UpdateDeleteChannelMessagesS", () => [
  "channel_id",
  IntRW,
  "messages",
  VectorRW(IntRW),
  "pts",
  IntRW,
  "pts_count",
  IntRW
]);

/**
 * updateChannelMessageViews:Update
 * #98a12b4b:2560699211:-1734268085
 * channel_id:int
 * id:int
 * views:int
 */
export interface UpdateChannelMessageViewsS {
  _id: number;
  _values: [number, number, number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_id(): number;
  set_id(val: number): this;

  get_views(): number;
  set_views(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelMessageViewsS = r<new () => UpdateChannelMessageViewsS>(
  0x98a12b4b,
  "UpdateChannelMessageViewsS",
  () => ["channel_id", IntRW, "id", IntRW, "views", IntRW]
);

/**
 * updates.channelDifferenceEmpty:updates.ChannelDifference
 * #3e11affb:1041346555:1041346555
 * flags:#
 * final:flags.0?true
 * pts:int
 * timeout:flags.1?int
 */
export interface UpdatesChannelDifferenceEmptyS {
  _id: number;
  _values: [number, true, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_final(): true;
  set_final(val: true): this;

  has_final(): boolean;

  get_pts(): number;
  set_pts(val: number): this;

  get_timeout(): number;
  set_timeout(val: number): this;

  has_timeout(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesChannelDifferenceEmptyS = r<
  new () => UpdatesChannelDifferenceEmptyS
>(0x3e11affb, "UpdatesChannelDifferenceEmptyS", () => [
  "flags",
  IntRW,
  "final",
  Optional(TrueRW, 0, 0),
  "pts",
  IntRW,
  "timeout",
  Optional(IntRW, 0, 1)
]);

/**
 * channelMessagesFilterEmpty:ChannelMessagesFilter
 * #94d42ee7:2496933607:-1798033689
 *
 */
export interface ChannelMessagesFilterEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelMessagesFilterEmptyS = r<
  new () => ChannelMessagesFilterEmptyS
>(0x94d42ee7, "ChannelMessagesFilterEmptyS", () => []);

/**
 * channelParticipant:ChannelParticipant
 * #15ebac1d:367766557:367766557
 * user_id:int
 * date:int
 */
export interface ChannelParticipantS {
  _id: number;
  _values: [number, number];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantS = r<new () => ChannelParticipantS>(
  0x15ebac1d,
  "ChannelParticipantS",
  () => ["user_id", IntRW, "date", IntRW]
);

/**
 * channelParticipantSelf:ChannelParticipant
 * #a3289a6d:2737347181:-1557620115
 * user_id:int
 * inviter_id:int
 * date:int
 */
export interface ChannelParticipantSelfS {
  _id: number;
  _values: [number, number, number];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_inviter_id(): number;
  set_inviter_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantSelfS = r<new () => ChannelParticipantSelfS>(
  0xa3289a6d,
  "ChannelParticipantSelfS",
  () => ["user_id", IntRW, "inviter_id", IntRW, "date", IntRW]
);

/**
 * channelParticipantCreator:ChannelParticipant
 * #808d15a4:2156729764:-2138237532
 * flags:#
 * user_id:int
 * rank:flags.0?string
 */
export interface ChannelParticipantCreatorS {
  _id: number;
  _values: [number, number, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_rank(): string;
  set_rank(val: string): this;

  has_rank(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantCreatorS = r<new () => ChannelParticipantCreatorS>(
  0x808d15a4,
  "ChannelParticipantCreatorS",
  () => ["flags", IntRW, "user_id", IntRW, "rank", Optional(StringRW, 0, 0)]
);

/**
 * channelParticipantsRecent:ChannelParticipantsFilter
 * #de3f3c79:3728686201:-566281095
 *
 */
export interface ChannelParticipantsRecentS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsRecentS = r<new () => ChannelParticipantsRecentS>(
  0xde3f3c79,
  "ChannelParticipantsRecentS",
  () => []
);

/**
 * channelParticipantsAdmins:ChannelParticipantsFilter
 * #b4608969:3026225513:-1268741783
 *
 */
export interface ChannelParticipantsAdminsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsAdminsS = r<new () => ChannelParticipantsAdminsS>(
  0xb4608969,
  "ChannelParticipantsAdminsS",
  () => []
);

/**
 * channelParticipantsKicked:ChannelParticipantsFilter
 * #a3b54985:2746567045:-1548400251
 * q:string
 */
export interface ChannelParticipantsKickedS {
  _id: number;
  _values: [string];

  get_q(): string;
  set_q(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsKickedS = r<new () => ChannelParticipantsKickedS>(
  0xa3b54985,
  "ChannelParticipantsKickedS",
  () => ["q", StringRW]
);

/**
 * chatParticipantCreator:ChatParticipant
 * #da13538a:3658699658:-636267638
 * user_id:int
 */
export interface ChatParticipantCreatorS {
  _id: number;
  _values: [number];

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatParticipantCreatorS = r<new () => ChatParticipantCreatorS>(
  0xda13538a,
  "ChatParticipantCreatorS",
  () => ["user_id", IntRW]
);

/**
 * chatParticipantAdmin:ChatParticipant
 * #e2d6e436:3805733942:-489233354
 * user_id:int
 * inviter_id:int
 * date:int
 */
export interface ChatParticipantAdminS {
  _id: number;
  _values: [number, number, number];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_inviter_id(): number;
  set_inviter_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatParticipantAdminS = r<new () => ChatParticipantAdminS>(
  0xe2d6e436,
  "ChatParticipantAdminS",
  () => ["user_id", IntRW, "inviter_id", IntRW, "date", IntRW]
);

/**
 * messageActionChatMigrateTo:MessageAction
 * #51bdb021:1371385889:1371385889
 * channel_id:int
 */
export interface MessageActionChatMigrateToS {
  _id: number;
  _values: [number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatMigrateToS = r<
  new () => MessageActionChatMigrateToS
>(0x51bdb021, "MessageActionChatMigrateToS", () => ["channel_id", IntRW]);

/**
 * messageActionChannelMigrateFrom:MessageAction
 * #b055eaee:2958420718:-1336546578
 * title:string
 * chat_id:int
 */
export interface MessageActionChannelMigrateFromS {
  _id: number;
  _values: [string, number];

  get_title(): string;
  set_title(val: string): this;

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChannelMigrateFromS = r<
  new () => MessageActionChannelMigrateFromS
>(0xb055eaee, "MessageActionChannelMigrateFromS", () => [
  "title",
  StringRW,
  "chat_id",
  IntRW
]);

/**
 * channelParticipantsBots:ChannelParticipantsFilter
 * #b0d1865b:2966521435:-1328445861
 *
 */
export interface ChannelParticipantsBotsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsBotsS = r<new () => ChannelParticipantsBotsS>(
  0xb0d1865b,
  "ChannelParticipantsBotsS",
  () => []
);

/**
 * updateStickerSetsOrder:Update
 * #bb2d201:196268545:196268545
 * flags:#
 * masks:flags.0?true
 * order:Vector<long>
 */
export interface UpdateStickerSetsOrderS {
  _id: number;
  _values: [number, true, VectorS<ProtoLong>];

  get_flags(): number;
  set_flags(val: number): this;

  get_masks(): true;
  set_masks(val: true): this;

  has_masks(): boolean;

  get_order(): VectorS<ProtoLong>;
  set_order(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateStickerSetsOrderS = r<new () => UpdateStickerSetsOrderS>(
  0xbb2d201,
  "UpdateStickerSetsOrderS",
  () => [
    "flags",
    IntRW,
    "masks",
    Optional(TrueRW, 0, 0),
    "order",
    VectorRW(LongRW)
  ]
);

/**
 * updateStickerSets:Update
 * #43ae3dec:1135492588:1135492588
 *
 */
export interface UpdateStickerSetsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateStickerSetsS = r<new () => UpdateStickerSetsS>(
  0x43ae3dec,
  "UpdateStickerSetsS",
  () => []
);

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
export interface FoundGifS {
  _id: number;
  _values: [string, string, string, string, number, number];

  get_url(): string;
  set_url(val: string): this;

  get_thumb_url(): string;
  set_thumb_url(val: string): this;

  get_content_url(): string;
  set_content_url(val: string): this;

  get_content_type(): string;
  set_content_type(val: string): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FoundGifS = r<new () => FoundGifS>(0x162ecc1f, "FoundGifS", () => [
  "url",
  StringRW,
  "thumb_url",
  StringRW,
  "content_url",
  StringRW,
  "content_type",
  StringRW,
  "w",
  IntRW,
  "h",
  IntRW
]);

/**
 * inputMediaGifExternal:InputMedia
 * #4843b0fd:1212395773:1212395773
 * url:string
 * q:string
 */
export interface InputMediaGifExternalS {
  _id: number;
  _values: [string, string];

  get_url(): string;
  set_url(val: string): this;

  get_q(): string;
  set_q(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaGifExternalS = r<new () => InputMediaGifExternalS>(
  0x4843b0fd,
  "InputMediaGifExternalS",
  () => ["url", StringRW, "q", StringRW]
);

/**
 * messages.savedGifsNotModified:messages.SavedGifs
 * #e8025ca2:3892468898:-402498398
 *
 */
export interface MessagesSavedGifsNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSavedGifsNotModifiedS = r<
  new () => MessagesSavedGifsNotModifiedS
>(0xe8025ca2, "MessagesSavedGifsNotModifiedS", () => []);

/**
 * updateSavedGifs:Update
 * #9375341e:2473931806:-1821035490
 *
 */
export interface UpdateSavedGifsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateSavedGifsS = r<new () => UpdateSavedGifsS>(
  0x9375341e,
  "UpdateSavedGifsS",
  () => []
);

/**
 * inputMessagesFilterVoice:MessagesFilter
 * #50f5c392:1358283666:1358283666
 *
 */
export interface InputMessagesFilterVoiceS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterVoiceS = r<new () => InputMessagesFilterVoiceS>(
  0x50f5c392,
  "InputMessagesFilterVoiceS",
  () => []
);

/**
 * inputMessagesFilterMusic:MessagesFilter
 * #3751b49e:928101534:928101534
 *
 */
export interface InputMessagesFilterMusicS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterMusicS = r<new () => InputMessagesFilterMusicS>(
  0x3751b49e,
  "InputMessagesFilterMusicS",
  () => []
);

/**
 * inputPrivacyKeyChatInvite:InputPrivacyKey
 * #bdfb0426:3187344422:-1107622874
 *
 */
export interface InputPrivacyKeyChatInviteS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyChatInviteS = r<new () => InputPrivacyKeyChatInviteS>(
  0xbdfb0426,
  "InputPrivacyKeyChatInviteS",
  () => []
);

/**
 * privacyKeyChatInvite:PrivacyKey
 * #500e6dfa:1343122938:1343122938
 *
 */
export interface PrivacyKeyChatInviteS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyChatInviteS = r<new () => PrivacyKeyChatInviteS>(
  0x500e6dfa,
  "PrivacyKeyChatInviteS",
  () => []
);

/**
 * exportedMessageLink:ExportedMessageLink
 * #5dab1af4:1571494644:1571494644
 * link:string
 * html:string
 */
export interface ExportedMessageLinkS {
  _id: number;
  _values: [string, string];

  get_link(): string;
  set_link(val: string): this;

  get_html(): string;
  set_html(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ExportedMessageLinkS = r<new () => ExportedMessageLinkS>(
  0x5dab1af4,
  "ExportedMessageLinkS",
  () => ["link", StringRW, "html", StringRW]
);

/**
 * updateChannelPinnedMessage:Update
 * #98592475:2555978869:-1738988427
 * channel_id:int
 * id:int
 */
export interface UpdateChannelPinnedMessageS {
  _id: number;
  _values: [number, number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelPinnedMessageS = r<
  new () => UpdateChannelPinnedMessageS
>(0x98592475, "UpdateChannelPinnedMessageS", () => [
  "channel_id",
  IntRW,
  "id",
  IntRW
]);

/**
 * messageActionPinMessage:MessageAction
 * #94bd38ed:2495428845:-1799538451
 *
 */
export interface MessageActionPinMessageS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionPinMessageS = r<new () => MessageActionPinMessageS>(
  0x94bd38ed,
  "MessageActionPinMessageS",
  () => []
);

/**
 * auth.codeTypeSms:auth.CodeType
 * #72a3158c:1923290508:1923290508
 *
 */
export interface AuthCodeTypeSmsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthCodeTypeSmsS = r<new () => AuthCodeTypeSmsS>(
  0x72a3158c,
  "AuthCodeTypeSmsS",
  () => []
);

/**
 * auth.codeTypeCall:auth.CodeType
 * #741cd3e3:1948046307:1948046307
 *
 */
export interface AuthCodeTypeCallS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthCodeTypeCallS = r<new () => AuthCodeTypeCallS>(
  0x741cd3e3,
  "AuthCodeTypeCallS",
  () => []
);

/**
 * auth.codeTypeFlashCall:auth.CodeType
 * #226ccefb:577556219:577556219
 *
 */
export interface AuthCodeTypeFlashCallS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthCodeTypeFlashCallS = r<new () => AuthCodeTypeFlashCallS>(
  0x226ccefb,
  "AuthCodeTypeFlashCallS",
  () => []
);

/**
 * auth.sentCodeTypeApp:auth.SentCodeType
 * #3dbb5986:1035688326:1035688326
 * length:int
 */
export interface AuthSentCodeTypeAppS {
  _id: number;
  _values: [number];

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSentCodeTypeAppS = r<new () => AuthSentCodeTypeAppS>(
  0x3dbb5986,
  "AuthSentCodeTypeAppS",
  () => ["length", IntRW]
);

/**
 * auth.sentCodeTypeSms:auth.SentCodeType
 * #c000bba2:3221273506:-1073693790
 * length:int
 */
export interface AuthSentCodeTypeSmsS {
  _id: number;
  _values: [number];

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSentCodeTypeSmsS = r<new () => AuthSentCodeTypeSmsS>(
  0xc000bba2,
  "AuthSentCodeTypeSmsS",
  () => ["length", IntRW]
);

/**
 * auth.sentCodeTypeCall:auth.SentCodeType
 * #5353e5a7:1398007207:1398007207
 * length:int
 */
export interface AuthSentCodeTypeCallS {
  _id: number;
  _values: [number];

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSentCodeTypeCallS = r<new () => AuthSentCodeTypeCallS>(
  0x5353e5a7,
  "AuthSentCodeTypeCallS",
  () => ["length", IntRW]
);

/**
 * auth.sentCodeTypeFlashCall:auth.SentCodeType
 * #ab03c6d9:2869151449:-1425815847
 * pattern:string
 */
export interface AuthSentCodeTypeFlashCallS {
  _id: number;
  _values: [string];

  get_pattern(): string;
  set_pattern(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSentCodeTypeFlashCallS = r<new () => AuthSentCodeTypeFlashCallS>(
  0xab03c6d9,
  "AuthSentCodeTypeFlashCallS",
  () => ["pattern", StringRW]
);

/**
 * keyboardButtonUrl:KeyboardButton
 * #258aff05:629866245:629866245
 * text:string
 * url:string
 */
export interface KeyboardButtonUrlS {
  _id: number;
  _values: [string, string];

  get_text(): string;
  set_text(val: string): this;

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonUrlS = r<new () => KeyboardButtonUrlS>(
  0x258aff05,
  "KeyboardButtonUrlS",
  () => ["text", StringRW, "url", StringRW]
);

/**
 * keyboardButtonCallback:KeyboardButton
 * #683a5e46:1748655686:1748655686
 * text:string
 * data:bytes
 */
export interface KeyboardButtonCallbackS {
  _id: number;
  _values: [string, Uint8Array];

  get_text(): string;
  set_text(val: string): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonCallbackS = r<new () => KeyboardButtonCallbackS>(
  0x683a5e46,
  "KeyboardButtonCallbackS",
  () => ["text", StringRW, "data", BytesRW]
);

/**
 * keyboardButtonRequestPhone:KeyboardButton
 * #b16a6c29:2976541737:-1318425559
 * text:string
 */
export interface KeyboardButtonRequestPhoneS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonRequestPhoneS = r<
  new () => KeyboardButtonRequestPhoneS
>(0xb16a6c29, "KeyboardButtonRequestPhoneS", () => ["text", StringRW]);

/**
 * keyboardButtonRequestGeoLocation:KeyboardButton
 * #fc796b3f:4235815743:-59151553
 * text:string
 */
export interface KeyboardButtonRequestGeoLocationS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonRequestGeoLocationS = r<
  new () => KeyboardButtonRequestGeoLocationS
>(0xfc796b3f, "KeyboardButtonRequestGeoLocationS", () => ["text", StringRW]);

/**
 * keyboardButtonSwitchInline:KeyboardButton
 * #568a748:90744648:90744648
 * flags:#
 * same_peer:flags.0?true
 * text:string
 * query:string
 */
export interface KeyboardButtonSwitchInlineS {
  _id: number;
  _values: [number, true, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_same_peer(): true;
  set_same_peer(val: true): this;

  has_same_peer(): boolean;

  get_text(): string;
  set_text(val: string): this;

  get_query(): string;
  set_query(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonSwitchInlineS = r<
  new () => KeyboardButtonSwitchInlineS
>(0x568a748, "KeyboardButtonSwitchInlineS", () => [
  "flags",
  IntRW,
  "same_peer",
  Optional(TrueRW, 0, 0),
  "text",
  StringRW,
  "query",
  StringRW
]);

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
export interface MessagesBotCallbackAnswerS {
  _id: number;
  _values: [number, true, true, true, string, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_alert(): true;
  set_alert(val: true): this;

  has_alert(): boolean;

  get_has_url(): true;
  set_has_url(val: true): this;

  has_has_url(): boolean;

  get_native_ui(): true;
  set_native_ui(val: true): this;

  has_native_ui(): boolean;

  get_message(): string;
  set_message(val: string): this;

  has_message(): boolean;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  get_cache_time(): number;
  set_cache_time(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesBotCallbackAnswerS = r<new () => MessagesBotCallbackAnswerS>(
  0x36585ea4,
  "MessagesBotCallbackAnswerS",
  () => [
    "flags",
    IntRW,
    "alert",
    Optional(TrueRW, 0, 1),
    "has_url",
    Optional(TrueRW, 0, 3),
    "native_ui",
    Optional(TrueRW, 0, 4),
    "message",
    Optional(StringRW, 0, 0),
    "url",
    Optional(StringRW, 0, 2),
    "cache_time",
    IntRW
  ]
);

/**
 * messages.messageEditData:messages.MessageEditData
 * #26b5dde6:649453030:649453030
 * flags:#
 * caption:flags.0?true
 */
export interface MessagesMessageEditDataS {
  _id: number;
  _values: [number, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_caption(): true;
  set_caption(val: true): this;

  has_caption(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesMessageEditDataS = r<new () => MessagesMessageEditDataS>(
  0x26b5dde6,
  "MessagesMessageEditDataS",
  () => ["flags", IntRW, "caption", Optional(TrueRW, 0, 0)]
);

/**
 * inputBotInlineMessageID:InputBotInlineMessageID
 * #890c3d89:2299280777:-1995686519
 * dc_id:int
 * id:long
 * access_hash:long
 */
export interface InputBotInlineMessageIdS {
  _id: number;
  _values: [number, ProtoLong, ProtoLong];

  get_dc_id(): number;
  set_dc_id(val: number): this;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageIdS = r<new () => InputBotInlineMessageIdS>(
  0x890c3d89,
  "InputBotInlineMessageIdS",
  () => ["dc_id", IntRW, "id", LongRW, "access_hash", LongRW]
);

/**
 * inlineBotSwitchPM:InlineBotSwitchPM
 * #3c20629f:1008755359:1008755359
 * text:string
 * start_param:string
 */
export interface InlineBotSwitchPmS {
  _id: number;
  _values: [string, string];

  get_text(): string;
  set_text(val: string): this;

  get_start_param(): string;
  set_start_param(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InlineBotSwitchPmS = r<new () => InlineBotSwitchPmS>(
  0x3c20629f,
  "InlineBotSwitchPmS",
  () => ["text", StringRW, "start_param", StringRW]
);

/**
 * topPeerCategoryBotsPM:TopPeerCategory
 * #ab661b5b:2875595611:-1419371685
 *
 */
export interface TopPeerCategoryBotsPmS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryBotsPmS = r<new () => TopPeerCategoryBotsPmS>(
  0xab661b5b,
  "TopPeerCategoryBotsPmS",
  () => []
);

/**
 * topPeerCategoryBotsInline:TopPeerCategory
 * #148677e2:344356834:344356834
 *
 */
export interface TopPeerCategoryBotsInlineS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryBotsInlineS = r<new () => TopPeerCategoryBotsInlineS>(
  0x148677e2,
  "TopPeerCategoryBotsInlineS",
  () => []
);

/**
 * topPeerCategoryCorrespondents:TopPeerCategory
 * #637b7ed:104314861:104314861
 *
 */
export interface TopPeerCategoryCorrespondentsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryCorrespondentsS = r<
  new () => TopPeerCategoryCorrespondentsS
>(0x637b7ed, "TopPeerCategoryCorrespondentsS", () => []);

/**
 * topPeerCategoryGroups:TopPeerCategory
 * #bd17a14a:3172442442:-1122524854
 *
 */
export interface TopPeerCategoryGroupsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryGroupsS = r<new () => TopPeerCategoryGroupsS>(
  0xbd17a14a,
  "TopPeerCategoryGroupsS",
  () => []
);

/**
 * topPeerCategoryChannels:TopPeerCategory
 * #161d9628:371037736:371037736
 *
 */
export interface TopPeerCategoryChannelsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryChannelsS = r<new () => TopPeerCategoryChannelsS>(
  0x161d9628,
  "TopPeerCategoryChannelsS",
  () => []
);

/**
 * contacts.topPeersNotModified:contacts.TopPeers
 * #de266ef5:3727060725:-567906571
 *
 */
export interface ContactsTopPeersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsTopPeersNotModifiedS = r<
  new () => ContactsTopPeersNotModifiedS
>(0xde266ef5, "ContactsTopPeersNotModifiedS", () => []);

/**
 * messageEntityMentionName:MessageEntity
 * #352dca58:892193368:892193368
 * offset:int
 * length:int
 * user_id:int
 */
export interface MessageEntityMentionNameS {
  _id: number;
  _values: [number, number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityMentionNameS = r<new () => MessageEntityMentionNameS>(
  0x352dca58,
  "MessageEntityMentionNameS",
  () => ["offset", IntRW, "length", IntRW, "user_id", IntRW]
);

/**
 * inputMessagesFilterChatPhotos:MessagesFilter
 * #3a20ecb8:975236280:975236280
 *
 */
export interface InputMessagesFilterChatPhotosS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterChatPhotosS = r<
  new () => InputMessagesFilterChatPhotosS
>(0x3a20ecb8, "InputMessagesFilterChatPhotosS", () => []);

/**
 * updateReadChannelOutbox:Update
 * #25d6c9c7:634833351:634833351
 * channel_id:int
 * max_id:int
 */
export interface UpdateReadChannelOutboxS {
  _id: number;
  _values: [number, number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateReadChannelOutboxS = r<new () => UpdateReadChannelOutboxS>(
  0x25d6c9c7,
  "UpdateReadChannelOutboxS",
  () => ["channel_id", IntRW, "max_id", IntRW]
);

/**
 * draftMessageEmpty:DraftMessage
 * #1b0c841a:453805082:453805082
 * flags:#
 * date:flags.0?int
 */
export interface DraftMessageEmptyS {
  _id: number;
  _values: [number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  has_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DraftMessageEmptyS = r<new () => DraftMessageEmptyS>(
  0x1b0c841a,
  "DraftMessageEmptyS",
  () => ["flags", IntRW, "date", Optional(IntRW, 0, 0)]
);

/**
 * messageActionHistoryClear:MessageAction
 * #9fbab604:2679813636:-1615153660
 *
 */
export interface MessageActionHistoryClearS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionHistoryClearS = r<new () => MessageActionHistoryClearS>(
  0x9fbab604,
  "MessageActionHistoryClearS",
  () => []
);

/**
 * messages.featuredStickersNotModified:messages.FeaturedStickers
 * #4ede3cf:82699215:82699215
 *
 */
export interface MessagesFeaturedStickersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFeaturedStickersNotModifiedS = r<
  new () => MessagesFeaturedStickersNotModifiedS
>(0x4ede3cf, "MessagesFeaturedStickersNotModifiedS", () => []);

/**
 * updateReadFeaturedStickers:Update
 * #571d2742:1461528386:1461528386
 *
 */
export interface UpdateReadFeaturedStickersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateReadFeaturedStickersS = r<
  new () => UpdateReadFeaturedStickersS
>(0x571d2742, "UpdateReadFeaturedStickersS", () => []);

/**
 * messages.recentStickersNotModified:messages.RecentStickers
 * #b17f890:186120336:186120336
 *
 */
export interface MessagesRecentStickersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesRecentStickersNotModifiedS = r<
  new () => MessagesRecentStickersNotModifiedS
>(0xb17f890, "MessagesRecentStickersNotModifiedS", () => []);

/**
 * updateRecentStickers:Update
 * #9a422c20:2588027936:-1706939360
 *
 */
export interface UpdateRecentStickersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateRecentStickersS = r<new () => UpdateRecentStickersS>(
  0x9a422c20,
  "UpdateRecentStickersS",
  () => []
);

/**
 * messages.stickerSetInstallResultSuccess:messages.StickerSetInstallResult
 * #38641628:946083368:946083368
 *
 */
export interface MessagesStickerSetInstallResultSuccessS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesStickerSetInstallResultSuccessS = r<
  new () => MessagesStickerSetInstallResultSuccessS
>(0x38641628, "MessagesStickerSetInstallResultSuccessS", () => []);

/**
 * updateConfig:Update
 * #a229dd06:2720652550:-1574314746
 *
 */
export interface UpdateConfigS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateConfigS = r<new () => UpdateConfigS>(
  0xa229dd06,
  "UpdateConfigS",
  () => []
);

/**
 * updatePtsChanged:Update
 * #3354678f:861169551:861169551
 *
 */
export interface UpdatePtsChangedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatePtsChangedS = r<new () => UpdatePtsChangedS>(
  0x3354678f,
  "UpdatePtsChangedS",
  () => []
);

/**
 * inputMediaPhotoExternal:InputMedia
 * #e5bbfe1a:3854302746:-440664550
 * flags:#
 * url:string
 * ttl_seconds:flags.0?int
 */
export interface InputMediaPhotoExternalS {
  _id: number;
  _values: [number, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_url(): string;
  set_url(val: string): this;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaPhotoExternalS = r<new () => InputMediaPhotoExternalS>(
  0xe5bbfe1a,
  "InputMediaPhotoExternalS",
  () => ["flags", IntRW, "url", StringRW, "ttl_seconds", Optional(IntRW, 0, 0)]
);

/**
 * inputMediaDocumentExternal:InputMedia
 * #fb52dc99:4216511641:-78455655
 * flags:#
 * url:string
 * ttl_seconds:flags.0?int
 */
export interface InputMediaDocumentExternalS {
  _id: number;
  _values: [number, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_url(): string;
  set_url(val: string): this;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaDocumentExternalS = r<
  new () => InputMediaDocumentExternalS
>(0xfb52dc99, "InputMediaDocumentExternalS", () => [
  "flags",
  IntRW,
  "url",
  StringRW,
  "ttl_seconds",
  Optional(IntRW, 0, 0)
]);

/**
 * maskCoords:MaskCoords
 * #aed6dbb2:2933316530:-1361650766
 * n:int
 * x:double
 * y:double
 * zoom:double
 */
export interface MaskCoordsS {
  _id: number;
  _values: [number, number, number, number];

  get_n(): number;
  set_n(val: number): this;

  get_x(): number;
  set_x(val: number): this;

  get_y(): number;
  set_y(val: number): this;

  get_zoom(): number;
  set_zoom(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MaskCoordsS = r<new () => MaskCoordsS>(
  0xaed6dbb2,
  "MaskCoordsS",
  () => ["n", IntRW, "x", DoubleRW, "y", DoubleRW, "zoom", DoubleRW]
);

/**
 * documentAttributeHasStickers:DocumentAttribute
 * #9801d2f7:2550256375:-1744710921
 *
 */
export interface DocumentAttributeHasStickersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeHasStickersS = r<
  new () => DocumentAttributeHasStickersS
>(0x9801d2f7, "DocumentAttributeHasStickersS", () => []);

/**
 * inputGameID:InputGame
 * #32c3e77:53231223:53231223
 * id:long
 * access_hash:long
 */
export interface InputGameIdS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputGameIdS = r<new () => InputGameIdS>(
  0x32c3e77,
  "InputGameIdS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * keyboardButtonGame:KeyboardButton
 * #50f41ccf:1358175439:1358175439
 * text:string
 */
export interface KeyboardButtonGameS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonGameS = r<new () => KeyboardButtonGameS>(
  0x50f41ccf,
  "KeyboardButtonGameS",
  () => ["text", StringRW]
);

/**
 * messageActionGameScore:MessageAction
 * #92a72876:2460428406:-1834538890
 * game_id:long
 * score:int
 */
export interface MessageActionGameScoreS {
  _id: number;
  _values: [ProtoLong, number];

  get_game_id(): ProtoLong;
  set_game_id(val: ProtoLong): this;

  get_score(): number;
  set_score(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionGameScoreS = r<new () => MessageActionGameScoreS>(
  0x92a72876,
  "MessageActionGameScoreS",
  () => ["game_id", LongRW, "score", IntRW]
);

/**
 * highScore:HighScore
 * #58fffcd0:1493171408:1493171408
 * pos:int
 * user_id:int
 * score:int
 */
export interface HighScoreS {
  _id: number;
  _values: [number, number, number];

  get_pos(): number;
  set_pos(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_score(): number;
  set_score(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HighScoreS = r<new () => HighScoreS>(
  0x58fffcd0,
  "HighScoreS",
  () => ["pos", IntRW, "user_id", IntRW, "score", IntRW]
);

/**
 * updates.differenceTooLong:updates.Difference
 * #4afe8f6d:1258196845:1258196845
 * pts:int
 */
export interface UpdatesDifferenceTooLongS {
  _id: number;
  _values: [number];

  get_pts(): number;
  set_pts(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesDifferenceTooLongS = r<new () => UpdatesDifferenceTooLongS>(
  0x4afe8f6d,
  "UpdatesDifferenceTooLongS",
  () => ["pts", IntRW]
);

/**
 * textEmpty:RichText
 * #dc3d824f:3695018575:-599948721
 *
 */
export interface TextEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextEmptyS = r<new () => TextEmptyS>(
  0xdc3d824f,
  "TextEmptyS",
  () => []
);

/**
 * textPlain:RichText
 * #744694e0:1950782688:1950782688
 * text:string
 */
export interface TextPlainS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextPlainS = r<new () => TextPlainS>(
  0x744694e0,
  "TextPlainS",
  () => ["text", StringRW]
);

/**
 * pageBlockUnsupported:PageBlock
 * #13567e8a:324435594:324435594
 *
 */
export interface PageBlockUnsupportedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockUnsupportedS = r<new () => PageBlockUnsupportedS>(
  0x13567e8a,
  "PageBlockUnsupportedS",
  () => []
);

/**
 * pageBlockDivider:PageBlock
 * #db20b188:3676352904:-618614392
 *
 */
export interface PageBlockDividerS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockDividerS = r<new () => PageBlockDividerS>(
  0xdb20b188,
  "PageBlockDividerS",
  () => []
);

/**
 * pageBlockAnchor:PageBlock
 * #ce0d37b0:3456972720:-837994576
 * name:string
 */
export interface PageBlockAnchorS {
  _id: number;
  _values: [string];

  get_name(): string;
  set_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockAnchorS = r<new () => PageBlockAnchorS>(
  0xce0d37b0,
  "PageBlockAnchorS",
  () => ["name", StringRW]
);

/**
 * webPageNotModified:WebPage
 * #85849473:2240058483:-2054908813
 *
 */
export interface WebPageNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebPageNotModifiedS = r<new () => WebPageNotModifiedS>(
  0x85849473,
  "WebPageNotModifiedS",
  () => []
);

/**
 * inputPrivacyKeyPhoneCall:InputPrivacyKey
 * #fabadc5f:4206550111:-88417185
 *
 */
export interface InputPrivacyKeyPhoneCallS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyPhoneCallS = r<new () => InputPrivacyKeyPhoneCallS>(
  0xfabadc5f,
  "InputPrivacyKeyPhoneCallS",
  () => []
);

/**
 * privacyKeyPhoneCall:PrivacyKey
 * #3d662b7b:1030105979:1030105979
 *
 */
export interface PrivacyKeyPhoneCallS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyPhoneCallS = r<new () => PrivacyKeyPhoneCallS>(
  0x3d662b7b,
  "PrivacyKeyPhoneCallS",
  () => []
);

/**
 * sendMessageGamePlayAction:SendMessageAction
 * #dd6a8f48:3714748232:-580219064
 *
 */
export interface SendMessageGamePlayActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageGamePlayActionS = r<new () => SendMessageGamePlayActionS>(
  0xdd6a8f48,
  "SendMessageGamePlayActionS",
  () => []
);

/**
 * phoneCallDiscardReasonMissed:PhoneCallDiscardReason
 * #85e42301:2246320897:-2048646399
 *
 */
export interface PhoneCallDiscardReasonMissedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallDiscardReasonMissedS = r<
  new () => PhoneCallDiscardReasonMissedS
>(0x85e42301, "PhoneCallDiscardReasonMissedS", () => []);

/**
 * phoneCallDiscardReasonDisconnect:PhoneCallDiscardReason
 * #e095c1a0:3767910816:-527056480
 *
 */
export interface PhoneCallDiscardReasonDisconnectS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallDiscardReasonDisconnectS = r<
  new () => PhoneCallDiscardReasonDisconnectS
>(0xe095c1a0, "PhoneCallDiscardReasonDisconnectS", () => []);

/**
 * phoneCallDiscardReasonHangup:PhoneCallDiscardReason
 * #57adc690:1471006352:1471006352
 *
 */
export interface PhoneCallDiscardReasonHangupS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallDiscardReasonHangupS = r<
  new () => PhoneCallDiscardReasonHangupS
>(0x57adc690, "PhoneCallDiscardReasonHangupS", () => []);

/**
 * phoneCallDiscardReasonBusy:PhoneCallDiscardReason
 * #faf7e8c9:4210550985:-84416311
 *
 */
export interface PhoneCallDiscardReasonBusyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallDiscardReasonBusyS = r<
  new () => PhoneCallDiscardReasonBusyS
>(0xfaf7e8c9, "PhoneCallDiscardReasonBusyS", () => []);

/**
 * dataJSON:DataJSON
 * #7d748d04:2104790276:2104790276
 * data:string
 */
export interface DataJsonS {
  _id: number;
  _values: [string];

  get_data(): string;
  set_data(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DataJsonS = r<new () => DataJsonS>(0x7d748d04, "DataJsonS", () => [
  "data",
  StringRW
]);

/**
 * labeledPrice:LabeledPrice
 * #cb296bf8:3408489464:-886477832
 * label:string
 * amount:long
 */
export interface LabeledPriceS {
  _id: number;
  _values: [string, ProtoLong];

  get_label(): string;
  set_label(val: string): this;

  get_amount(): ProtoLong;
  set_amount(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LabeledPriceS = r<new () => LabeledPriceS>(
  0xcb296bf8,
  "LabeledPriceS",
  () => ["label", StringRW, "amount", LongRW]
);

/**
 * paymentCharge:PaymentCharge
 * #ea02c27e:3926049406:-368917890
 * id:string
 * provider_charge_id:string
 */
export interface PaymentChargeS {
  _id: number;
  _values: [string, string];

  get_id(): string;
  set_id(val: string): this;

  get_provider_charge_id(): string;
  set_provider_charge_id(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentChargeS = r<new () => PaymentChargeS>(
  0xea02c27e,
  "PaymentChargeS",
  () => ["id", StringRW, "provider_charge_id", StringRW]
);

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
export interface PostAddressS {
  _id: number;
  _values: [string, string, string, string, string, string];

  get_street_line1(): string;
  set_street_line1(val: string): this;

  get_street_line2(): string;
  set_street_line2(val: string): this;

  get_city(): string;
  set_city(val: string): this;

  get_state(): string;
  set_state(val: string): this;

  get_country_iso2(): string;
  set_country_iso2(val: string): this;

  get_post_code(): string;
  set_post_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PostAddressS = r<new () => PostAddressS>(
  0x1e8caaeb,
  "PostAddressS",
  () => [
    "street_line1",
    StringRW,
    "street_line2",
    StringRW,
    "city",
    StringRW,
    "state",
    StringRW,
    "country_iso2",
    StringRW,
    "post_code",
    StringRW
  ]
);

/**
 * keyboardButtonBuy:KeyboardButton
 * #afd93fbb:2950250427:-1344716869
 * text:string
 */
export interface KeyboardButtonBuyS {
  _id: number;
  _values: [string];

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonBuyS = r<new () => KeyboardButtonBuyS>(
  0xafd93fbb,
  "KeyboardButtonBuyS",
  () => ["text", StringRW]
);

/**
 * messageActionPaymentSent:MessageAction
 * #40699cd0:1080663248:1080663248
 * currency:string
 * total_amount:long
 */
export interface MessageActionPaymentSentS {
  _id: number;
  _values: [string, ProtoLong];

  get_currency(): string;
  set_currency(val: string): this;

  get_total_amount(): ProtoLong;
  set_total_amount(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionPaymentSentS = r<new () => MessageActionPaymentSentS>(
  0x40699cd0,
  "MessageActionPaymentSentS",
  () => ["currency", StringRW, "total_amount", LongRW]
);

/**
 * paymentSavedCredentialsCard:PaymentSavedCredentials
 * #cdc27a1f:3452074527:-842892769
 * id:string
 * title:string
 */
export interface PaymentSavedCredentialsCardS {
  _id: number;
  _values: [string, string];

  get_id(): string;
  set_id(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentSavedCredentialsCardS = r<
  new () => PaymentSavedCredentialsCardS
>(0xcdc27a1f, "PaymentSavedCredentialsCardS", () => [
  "id",
  StringRW,
  "title",
  StringRW
]);

/**
 * inputWebFileLocation:InputWebFileLocation
 * #c239d686:3258570374:-1036396922
 * url:string
 * access_hash:long
 */
export interface InputWebFileLocationS {
  _id: number;
  _values: [string, ProtoLong];

  get_url(): string;
  set_url(val: string): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputWebFileLocationS = r<new () => InputWebFileLocationS>(
  0xc239d686,
  "InputWebFileLocationS",
  () => ["url", StringRW, "access_hash", LongRW]
);

/**
 * inputPaymentCredentialsSaved:InputPaymentCredentials
 * #c10eb2cf:3238965967:-1056001329
 * id:string
 * tmp_password:bytes
 */
export interface InputPaymentCredentialsSavedS {
  _id: number;
  _values: [string, Uint8Array];

  get_id(): string;
  set_id(val: string): this;

  get_tmp_password(): Uint8Array;
  set_tmp_password(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPaymentCredentialsSavedS = r<
  new () => InputPaymentCredentialsSavedS
>(0xc10eb2cf, "InputPaymentCredentialsSavedS", () => [
  "id",
  StringRW,
  "tmp_password",
  BytesRW
]);

/**
 * account.tmpPassword:account.TmpPassword
 * #db64fd34:3680828724:-614138572
 * tmp_password:bytes
 * valid_until:int
 */
export interface AccountTmpPasswordS {
  _id: number;
  _values: [Uint8Array, number];

  get_tmp_password(): Uint8Array;
  set_tmp_password(val: Uint8Array): this;

  get_valid_until(): number;
  set_valid_until(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountTmpPasswordS = r<new () => AccountTmpPasswordS>(
  0xdb64fd34,
  "AccountTmpPasswordS",
  () => ["tmp_password", BytesRW, "valid_until", IntRW]
);

/**
 * inputPhoneCall:InputPhoneCall
 * #1e36fded:506920429:506920429
 * id:long
 * access_hash:long
 */
export interface InputPhoneCallS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPhoneCallS = r<new () => InputPhoneCallS>(
  0x1e36fded,
  "InputPhoneCallS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * phoneCallEmpty:PhoneCall
 * #5366c915:1399245077:1399245077
 * id:long
 */
export interface PhoneCallEmptyS {
  _id: number;
  _values: [ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallEmptyS = r<new () => PhoneCallEmptyS>(
  0x5366c915,
  "PhoneCallEmptyS",
  () => ["id", LongRW]
);

/**
 * phoneConnection:PhoneConnection
 * #9d4c17c0:2639009728:-1655957568
 * id:long
 * ip:string
 * ipv6:string
 * port:int
 * peer_tag:bytes
 */
export interface PhoneConnectionS {
  _id: number;
  _values: [ProtoLong, string, string, number, Uint8Array];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_ip(): string;
  set_ip(val: string): this;

  get_ipv6(): string;
  set_ipv6(val: string): this;

  get_port(): number;
  set_port(val: number): this;

  get_peer_tag(): Uint8Array;
  set_peer_tag(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneConnectionS = r<new () => PhoneConnectionS>(
  0x9d4c17c0,
  "PhoneConnectionS",
  () => [
    "id",
    LongRW,
    "ip",
    StringRW,
    "ipv6",
    StringRW,
    "port",
    IntRW,
    "peer_tag",
    BytesRW
  ]
);

/**
 * phoneCallProtocol:PhoneCallProtocol
 * #a2bb35cb:2730177995:-1564789301
 * flags:#
 * udp_p2p:flags.0?true
 * udp_reflector:flags.1?true
 * min_layer:int
 * max_layer:int
 */
export interface PhoneCallProtocolS {
  _id: number;
  _values: [number, true, true, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_udp_p2p(): true;
  set_udp_p2p(val: true): this;

  has_udp_p2p(): boolean;

  get_udp_reflector(): true;
  set_udp_reflector(val: true): this;

  has_udp_reflector(): boolean;

  get_min_layer(): number;
  set_min_layer(val: number): this;

  get_max_layer(): number;
  set_max_layer(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallProtocolS = r<new () => PhoneCallProtocolS>(
  0xa2bb35cb,
  "PhoneCallProtocolS",
  () => [
    "flags",
    IntRW,
    "udp_p2p",
    Optional(TrueRW, 0, 0),
    "udp_reflector",
    Optional(TrueRW, 0, 1),
    "min_layer",
    IntRW,
    "max_layer",
    IntRW
  ]
);

/**
 * inputMessagesFilterPhoneCalls:MessagesFilter
 * #80c99768:2160695144:-2134272152
 * flags:#
 * missed:flags.0?true
 */
export interface InputMessagesFilterPhoneCallsS {
  _id: number;
  _values: [number, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_missed(): true;
  set_missed(val: true): this;

  has_missed(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterPhoneCallsS = r<
  new () => InputMessagesFilterPhoneCallsS
>(0x80c99768, "InputMessagesFilterPhoneCallsS", () => [
  "flags",
  IntRW,
  "missed",
  Optional(TrueRW, 0, 0)
]);

/**
 * inputMessagesFilterRoundVoice:MessagesFilter
 * #7a7c17a4:2054952868:2054952868
 *
 */
export interface InputMessagesFilterRoundVoiceS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterRoundVoiceS = r<
  new () => InputMessagesFilterRoundVoiceS
>(0x7a7c17a4, "InputMessagesFilterRoundVoiceS", () => []);

/**
 * inputMessagesFilterRoundVideo:MessagesFilter
 * #b549da53:3041516115:-1253451181
 *
 */
export interface InputMessagesFilterRoundVideoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterRoundVideoS = r<
  new () => InputMessagesFilterRoundVideoS
>(0xb549da53, "InputMessagesFilterRoundVideoS", () => []);

/**
 * sendMessageRecordRoundAction:SendMessageAction
 * #88f27fbc:2297593788:-1997373508
 *
 */
export interface SendMessageRecordRoundActionS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageRecordRoundActionS = r<
  new () => SendMessageRecordRoundActionS
>(0x88f27fbc, "SendMessageRecordRoundActionS", () => []);

/**
 * sendMessageUploadRoundAction:SendMessageAction
 * #243e1c66:608050278:608050278
 * progress:int
 */
export interface SendMessageUploadRoundActionS {
  _id: number;
  _values: [number];

  get_progress(): number;
  set_progress(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SendMessageUploadRoundActionS = r<
  new () => SendMessageUploadRoundActionS
>(0x243e1c66, "SendMessageUploadRoundActionS", () => ["progress", IntRW]);

/**
 * upload.cdnFileReuploadNeeded:upload.CdnFile
 * #eea8e46e:4004045934:-290921362
 * request_token:bytes
 */
export interface UploadCdnFileReuploadNeededS {
  _id: number;
  _values: [Uint8Array];

  get_request_token(): Uint8Array;
  set_request_token(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadCdnFileReuploadNeededS = r<
  new () => UploadCdnFileReuploadNeededS
>(0xeea8e46e, "UploadCdnFileReuploadNeededS", () => ["request_token", BytesRW]);

/**
 * upload.cdnFile:upload.CdnFile
 * #a99fca4f:2845821519:-1449145777
 * bytes:bytes
 */
export interface UploadCdnFileS {
  _id: number;
  _values: [Uint8Array];

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadCdnFileS = r<new () => UploadCdnFileS>(
  0xa99fca4f,
  "UploadCdnFileS",
  () => ["bytes", BytesRW]
);

/**
 * cdnPublicKey:CdnPublicKey
 * #c982eaba:3380800186:-914167110
 * dc_id:int
 * public_key:string
 */
export interface CdnPublicKeyS {
  _id: number;
  _values: [number, string];

  get_dc_id(): number;
  set_dc_id(val: number): this;

  get_public_key(): string;
  set_public_key(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let CdnPublicKeyS = r<new () => CdnPublicKeyS>(
  0xc982eaba,
  "CdnPublicKeyS",
  () => ["dc_id", IntRW, "public_key", StringRW]
);

/**
 * langPackString:LangPackString
 * #cad181f6:3402727926:-892239370
 * key:string
 * value:string
 */
export interface LangPackStringS {
  _id: number;
  _values: [string, string];

  get_key(): string;
  set_key(val: string): this;

  get_value(): string;
  set_value(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangPackStringS = r<new () => LangPackStringS>(
  0xcad181f6,
  "LangPackStringS",
  () => ["key", StringRW, "value", StringRW]
);

/**
 * langPackStringPluralized:LangPackString
 * #6c47ac9f:1816636575:1816636575
 * flags:#
 * key:string
 * zero_value:flags.0?string
 * one_value:flags.1?string
 * two_value:flags.2?string
 * few_value:flags.3?string
 * many_value:flags.4?string
 * other_value:string
 */
export interface LangPackStringPluralizedS {
  _id: number;
  _values: [number, string, string, string, string, string, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_key(): string;
  set_key(val: string): this;

  get_zero_value(): string;
  set_zero_value(val: string): this;

  has_zero_value(): boolean;

  get_one_value(): string;
  set_one_value(val: string): this;

  has_one_value(): boolean;

  get_two_value(): string;
  set_two_value(val: string): this;

  has_two_value(): boolean;

  get_few_value(): string;
  set_few_value(val: string): this;

  has_few_value(): boolean;

  get_many_value(): string;
  set_many_value(val: string): this;

  has_many_value(): boolean;

  get_other_value(): string;
  set_other_value(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangPackStringPluralizedS = r<new () => LangPackStringPluralizedS>(
  0x6c47ac9f,
  "LangPackStringPluralizedS",
  () => [
    "flags",
    IntRW,
    "key",
    StringRW,
    "zero_value",
    Optional(StringRW, 0, 0),
    "one_value",
    Optional(StringRW, 0, 1),
    "two_value",
    Optional(StringRW, 0, 2),
    "few_value",
    Optional(StringRW, 0, 3),
    "many_value",
    Optional(StringRW, 0, 4),
    "other_value",
    StringRW
  ]
);

/**
 * langPackStringDeleted:LangPackString
 * #2979eeb2:695856818:695856818
 * key:string
 */
export interface LangPackStringDeletedS {
  _id: number;
  _values: [string];

  get_key(): string;
  set_key(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangPackStringDeletedS = r<new () => LangPackStringDeletedS>(
  0x2979eeb2,
  "LangPackStringDeletedS",
  () => ["key", StringRW]
);

/**
 * langPackLanguage:LangPackLanguage
 * #eeca5ce3:4006239459:-288727837
 * flags:#
 * official:flags.0?true
 * rtl:flags.2?true
 * beta:flags.3?true
 * name:string
 * native_name:string
 * lang_code:string
 * base_lang_code:flags.1?string
 * plural_code:string
 * strings_count:int
 * translated_count:int
 * translations_url:string
 */
export interface LangPackLanguageS {
  _id: number;
  _values: [
    number,
    true,
    true,
    true,
    string,
    string,
    string,
    string,
    string,
    number,
    number,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_official(): true;
  set_official(val: true): this;

  has_official(): boolean;

  get_rtl(): true;
  set_rtl(val: true): this;

  has_rtl(): boolean;

  get_beta(): true;
  set_beta(val: true): this;

  has_beta(): boolean;

  get_name(): string;
  set_name(val: string): this;

  get_native_name(): string;
  set_native_name(val: string): this;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_base_lang_code(): string;
  set_base_lang_code(val: string): this;

  has_base_lang_code(): boolean;

  get_plural_code(): string;
  set_plural_code(val: string): this;

  get_strings_count(): number;
  set_strings_count(val: number): this;

  get_translated_count(): number;
  set_translated_count(val: number): this;

  get_translations_url(): string;
  set_translations_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangPackLanguageS = r<new () => LangPackLanguageS>(
  0xeeca5ce3,
  "LangPackLanguageS",
  () => [
    "flags",
    IntRW,
    "official",
    Optional(TrueRW, 0, 0),
    "rtl",
    Optional(TrueRW, 0, 2),
    "beta",
    Optional(TrueRW, 0, 3),
    "name",
    StringRW,
    "native_name",
    StringRW,
    "lang_code",
    StringRW,
    "base_lang_code",
    Optional(StringRW, 0, 1),
    "plural_code",
    StringRW,
    "strings_count",
    IntRW,
    "translated_count",
    IntRW,
    "translations_url",
    StringRW
  ]
);

/**
 * updateLangPackTooLong:Update
 * #46560264:1180041828:1180041828
 * lang_code:string
 */
export interface UpdateLangPackTooLongS {
  _id: number;
  _values: [string];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateLangPackTooLongS = r<new () => UpdateLangPackTooLongS>(
  0x46560264,
  "UpdateLangPackTooLongS",
  () => ["lang_code", StringRW]
);

/**
 * channelParticipantsBanned:ChannelParticipantsFilter
 * #1427a5e1:338142689:338142689
 * q:string
 */
export interface ChannelParticipantsBannedS {
  _id: number;
  _values: [string];

  get_q(): string;
  set_q(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsBannedS = r<new () => ChannelParticipantsBannedS>(
  0x1427a5e1,
  "ChannelParticipantsBannedS",
  () => ["q", StringRW]
);

/**
 * channelParticipantsSearch:ChannelParticipantsFilter
 * #656ac4b:106343499:106343499
 * q:string
 */
export interface ChannelParticipantsSearchS {
  _id: number;
  _values: [string];

  get_q(): string;
  set_q(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsSearchS = r<new () => ChannelParticipantsSearchS>(
  0x656ac4b,
  "ChannelParticipantsSearchS",
  () => ["q", StringRW]
);

/**
 * channelAdminLogEventActionChangeTitle:ChannelAdminLogEventAction
 * #e6dfb825:3873421349:-421545947
 * prev_value:string
 * new_value:string
 */
export interface ChannelAdminLogEventActionChangeTitleS {
  _id: number;
  _values: [string, string];

  get_prev_value(): string;
  set_prev_value(val: string): this;

  get_new_value(): string;
  set_new_value(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangeTitleS = r<
  new () => ChannelAdminLogEventActionChangeTitleS
>(0xe6dfb825, "ChannelAdminLogEventActionChangeTitleS", () => [
  "prev_value",
  StringRW,
  "new_value",
  StringRW
]);

/**
 * channelAdminLogEventActionChangeAbout:ChannelAdminLogEventAction
 * #55188a2e:1427671598:1427671598
 * prev_value:string
 * new_value:string
 */
export interface ChannelAdminLogEventActionChangeAboutS {
  _id: number;
  _values: [string, string];

  get_prev_value(): string;
  set_prev_value(val: string): this;

  get_new_value(): string;
  set_new_value(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangeAboutS = r<
  new () => ChannelAdminLogEventActionChangeAboutS
>(0x55188a2e, "ChannelAdminLogEventActionChangeAboutS", () => [
  "prev_value",
  StringRW,
  "new_value",
  StringRW
]);

/**
 * channelAdminLogEventActionChangeUsername:ChannelAdminLogEventAction
 * #6a4afc38:1783299128:1783299128
 * prev_value:string
 * new_value:string
 */
export interface ChannelAdminLogEventActionChangeUsernameS {
  _id: number;
  _values: [string, string];

  get_prev_value(): string;
  set_prev_value(val: string): this;

  get_new_value(): string;
  set_new_value(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangeUsernameS = r<
  new () => ChannelAdminLogEventActionChangeUsernameS
>(0x6a4afc38, "ChannelAdminLogEventActionChangeUsernameS", () => [
  "prev_value",
  StringRW,
  "new_value",
  StringRW
]);

/**
 * channelAdminLogEventActionParticipantJoin:ChannelAdminLogEventAction
 * #183040d3:405815507:405815507
 *
 */
export interface ChannelAdminLogEventActionParticipantJoinS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionParticipantJoinS = r<
  new () => ChannelAdminLogEventActionParticipantJoinS
>(0x183040d3, "ChannelAdminLogEventActionParticipantJoinS", () => []);

/**
 * channelAdminLogEventActionParticipantLeave:ChannelAdminLogEventAction
 * #f89777f2:4170676210:-124291086
 *
 */
export interface ChannelAdminLogEventActionParticipantLeaveS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionParticipantLeaveS = r<
  new () => ChannelAdminLogEventActionParticipantLeaveS
>(0xf89777f2, "ChannelAdminLogEventActionParticipantLeaveS", () => []);

/**
 * channelAdminLogEventsFilter:ChannelAdminLogEventsFilter
 * #ea107ae4:3926948580:-368018716
 * flags:#
 * join:flags.0?true
 * leave:flags.1?true
 * invite:flags.2?true
 * ban:flags.3?true
 * unban:flags.4?true
 * kick:flags.5?true
 * unkick:flags.6?true
 * promote:flags.7?true
 * demote:flags.8?true
 * info:flags.9?true
 * settings:flags.10?true
 * pinned:flags.11?true
 * edit:flags.12?true
 * delete:flags.13?true
 */
export interface ChannelAdminLogEventsFilterS {
  _id: number;
  _values: [
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
    true
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_join(): true;
  set_join(val: true): this;

  has_join(): boolean;

  get_leave(): true;
  set_leave(val: true): this;

  has_leave(): boolean;

  get_invite(): true;
  set_invite(val: true): this;

  has_invite(): boolean;

  get_ban(): true;
  set_ban(val: true): this;

  has_ban(): boolean;

  get_unban(): true;
  set_unban(val: true): this;

  has_unban(): boolean;

  get_kick(): true;
  set_kick(val: true): this;

  has_kick(): boolean;

  get_unkick(): true;
  set_unkick(val: true): this;

  has_unkick(): boolean;

  get_promote(): true;
  set_promote(val: true): this;

  has_promote(): boolean;

  get_demote(): true;
  set_demote(val: true): this;

  has_demote(): boolean;

  get_info(): true;
  set_info(val: true): this;

  has_info(): boolean;

  get_settings(): true;
  set_settings(val: true): this;

  has_settings(): boolean;

  get_pinned(): true;
  set_pinned(val: true): this;

  has_pinned(): boolean;

  get_edit(): true;
  set_edit(val: true): this;

  has_edit(): boolean;

  get_delete(): true;
  set_delete(val: true): this;

  has_delete(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventsFilterS = r<
  new () => ChannelAdminLogEventsFilterS
>(0xea107ae4, "ChannelAdminLogEventsFilterS", () => [
  "flags",
  IntRW,
  "join",
  Optional(TrueRW, 0, 0),
  "leave",
  Optional(TrueRW, 0, 1),
  "invite",
  Optional(TrueRW, 0, 2),
  "ban",
  Optional(TrueRW, 0, 3),
  "unban",
  Optional(TrueRW, 0, 4),
  "kick",
  Optional(TrueRW, 0, 5),
  "unkick",
  Optional(TrueRW, 0, 6),
  "promote",
  Optional(TrueRW, 0, 7),
  "demote",
  Optional(TrueRW, 0, 8),
  "info",
  Optional(TrueRW, 0, 9),
  "settings",
  Optional(TrueRW, 0, 10),
  "pinned",
  Optional(TrueRW, 0, 11),
  "edit",
  Optional(TrueRW, 0, 12),
  "delete",
  Optional(TrueRW, 0, 13)
]);

/**
 * topPeerCategoryPhoneCalls:TopPeerCategory
 * #1e76a78c:511092620:511092620
 *
 */
export interface TopPeerCategoryPhoneCallsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryPhoneCallsS = r<new () => TopPeerCategoryPhoneCallsS>(
  0x1e76a78c,
  "TopPeerCategoryPhoneCallsS",
  () => []
);

/**
 * popularContact:PopularContact
 * #5ce14175:1558266229:1558266229
 * client_id:long
 * importers:int
 */
export interface PopularContactS {
  _id: number;
  _values: [ProtoLong, number];

  get_client_id(): ProtoLong;
  set_client_id(val: ProtoLong): this;

  get_importers(): number;
  set_importers(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PopularContactS = r<new () => PopularContactS>(
  0x5ce14175,
  "PopularContactS",
  () => ["client_id", LongRW, "importers", IntRW]
);

/**
 * messageActionScreenshotTaken:MessageAction
 * #4792929b:1200788123:1200788123
 *
 */
export interface MessageActionScreenshotTakenS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionScreenshotTakenS = r<
  new () => MessageActionScreenshotTakenS
>(0x4792929b, "MessageActionScreenshotTakenS", () => []);

/**
 * messages.favedStickersNotModified:messages.FavedStickers
 * #9e8fa6d3:2660214483:-1634752813
 *
 */
export interface MessagesFavedStickersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFavedStickersNotModifiedS = r<
  new () => MessagesFavedStickersNotModifiedS
>(0x9e8fa6d3, "MessagesFavedStickersNotModifiedS", () => []);

/**
 * updateFavedStickers:Update
 * #e511996d:3843135853:-451831443
 *
 */
export interface UpdateFavedStickersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateFavedStickersS = r<new () => UpdateFavedStickersS>(
  0xe511996d,
  "UpdateFavedStickersS",
  () => []
);

/**
 * updateChannelReadMessagesContents:Update
 * #89893b45:2307472197:-1987495099
 * channel_id:int
 * messages:Vector<int>
 */
export interface UpdateChannelReadMessagesContentsS {
  _id: number;
  _values: [number, VectorS<number>];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_messages(): VectorS<number>;
  set_messages(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelReadMessagesContentsS = r<
  new () => UpdateChannelReadMessagesContentsS
>(0x89893b45, "UpdateChannelReadMessagesContentsS", () => [
  "channel_id",
  IntRW,
  "messages",
  VectorRW(IntRW)
]);

/**
 * inputMessagesFilterMyMentions:MessagesFilter
 * #c1f8e69a:3254314650:-1040652646
 *
 */
export interface InputMessagesFilterMyMentionsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterMyMentionsS = r<
  new () => InputMessagesFilterMyMentionsS
>(0xc1f8e69a, "InputMessagesFilterMyMentionsS", () => []);

/**
 * updateContactsReset:Update
 * #7084a7be:1887741886:1887741886
 *
 */
export interface UpdateContactsResetS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateContactsResetS = r<new () => UpdateContactsResetS>(
  0x7084a7be,
  "UpdateContactsResetS",
  () => []
);

/**
 * messageActionCustomAction:MessageAction
 * #fae69f56:4209418070:-85549226
 * message:string
 */
export interface MessageActionCustomActionS {
  _id: number;
  _values: [string];

  get_message(): string;
  set_message(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionCustomActionS = r<new () => MessageActionCustomActionS>(
  0xfae69f56,
  "MessageActionCustomActionS",
  () => ["message", StringRW]
);

/**
 * inputMessagesFilterGeo:MessagesFilter
 * #e7026d0d:3875695885:-419271411
 *
 */
export interface InputMessagesFilterGeoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterGeoS = r<new () => InputMessagesFilterGeoS>(
  0xe7026d0d,
  "InputMessagesFilterGeoS",
  () => []
);

/**
 * inputMessagesFilterContacts:MessagesFilter
 * #e062db83:3764575107:-530392189
 *
 */
export interface InputMessagesFilterContactsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagesFilterContactsS = r<
  new () => InputMessagesFilterContactsS
>(0xe062db83, "InputMessagesFilterContactsS", () => []);

/**
 * updateChannelAvailableMessages:Update
 * #70db6837:1893427255:1893427255
 * channel_id:int
 * available_min_id:int
 */
export interface UpdateChannelAvailableMessagesS {
  _id: number;
  _values: [number, number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_available_min_id(): number;
  set_available_min_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelAvailableMessagesS = r<
  new () => UpdateChannelAvailableMessagesS
>(0x70db6837, "UpdateChannelAvailableMessagesS", () => [
  "channel_id",
  IntRW,
  "available_min_id",
  IntRW
]);

/**
 * recentMeUrlUnknown:RecentMeUrl
 * #46e1d13d:1189204285:1189204285
 * url:string
 */
export interface RecentMeUrlUnknownS {
  _id: number;
  _values: [string];

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RecentMeUrlUnknownS = r<new () => RecentMeUrlUnknownS>(
  0x46e1d13d,
  "RecentMeUrlUnknownS",
  () => ["url", StringRW]
);

/**
 * recentMeUrlUser:RecentMeUrl
 * #8dbc3336:2377921334:-1917045962
 * url:string
 * user_id:int
 */
export interface RecentMeUrlUserS {
  _id: number;
  _values: [string, number];

  get_url(): string;
  set_url(val: string): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RecentMeUrlUserS = r<new () => RecentMeUrlUserS>(
  0x8dbc3336,
  "RecentMeUrlUserS",
  () => ["url", StringRW, "user_id", IntRW]
);

/**
 * recentMeUrlChat:RecentMeUrl
 * #a01b22f9:2686132985:-1608834311
 * url:string
 * chat_id:int
 */
export interface RecentMeUrlChatS {
  _id: number;
  _values: [string, number];

  get_url(): string;
  set_url(val: string): this;

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RecentMeUrlChatS = r<new () => RecentMeUrlChatS>(
  0xa01b22f9,
  "RecentMeUrlChatS",
  () => ["url", StringRW, "chat_id", IntRW]
);

/**
 * channels.channelParticipantsNotModified:channels.ChannelParticipants
 * #f0173fe9:4028055529:-266911767
 *
 */
export interface ChannelsChannelParticipantsNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsChannelParticipantsNotModifiedS = r<
  new () => ChannelsChannelParticipantsNotModifiedS
>(0xf0173fe9, "ChannelsChannelParticipantsNotModifiedS", () => []);

/**
 * messages.messagesNotModified:messages.Messages
 * #74535f21:1951620897:1951620897
 * count:int
 */
export interface MessagesMessagesNotModifiedS {
  _id: number;
  _values: [number];

  get_count(): number;
  set_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesMessagesNotModifiedS = r<
  new () => MessagesMessagesNotModifiedS
>(0x74535f21, "MessagesMessagesNotModifiedS", () => ["count", IntRW]);

/**
 * webAuthorization:WebAuthorization
 * #cac943f2:3402187762:-892779534
 * hash:long
 * bot_id:int
 * domain:string
 * browser:string
 * platform:string
 * date_created:int
 * date_active:int
 * ip:string
 * region:string
 */
export interface WebAuthorizationS {
  _id: number;
  _values: [
    ProtoLong,
    number,
    string,
    string,
    string,
    number,
    number,
    string,
    string
  ];

  get_hash(): ProtoLong;
  set_hash(val: ProtoLong): this;

  get_bot_id(): number;
  set_bot_id(val: number): this;

  get_domain(): string;
  set_domain(val: string): this;

  get_browser(): string;
  set_browser(val: string): this;

  get_platform(): string;
  set_platform(val: string): this;

  get_date_created(): number;
  set_date_created(val: number): this;

  get_date_active(): number;
  set_date_active(val: number): this;

  get_ip(): string;
  set_ip(val: string): this;

  get_region(): string;
  set_region(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebAuthorizationS = r<new () => WebAuthorizationS>(
  0xcac943f2,
  "WebAuthorizationS",
  () => [
    "hash",
    LongRW,
    "bot_id",
    IntRW,
    "domain",
    StringRW,
    "browser",
    StringRW,
    "platform",
    StringRW,
    "date_created",
    IntRW,
    "date_active",
    IntRW,
    "ip",
    StringRW,
    "region",
    StringRW
  ]
);

/**
 * inputMessageID:InputMessage
 * #a676a322:2792792866:-1502174430
 * id:int
 */
export interface InputMessageIdS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessageIdS = r<new () => InputMessageIdS>(
  0xa676a322,
  "InputMessageIdS",
  () => ["id", IntRW]
);

/**
 * inputMessageReplyTo:InputMessage
 * #bad88395:3134751637:-1160215659
 * id:int
 */
export interface InputMessageReplyToS {
  _id: number;
  _values: [number];

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessageReplyToS = r<new () => InputMessageReplyToS>(
  0xbad88395,
  "InputMessageReplyToS",
  () => ["id", IntRW]
);

/**
 * inputMessagePinned:InputMessage
 * #86872538:2257003832:-2037963464
 *
 */
export interface InputMessagePinnedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessagePinnedS = r<new () => InputMessagePinnedS>(
  0x86872538,
  "InputMessagePinnedS",
  () => []
);

/**
 * messageEntityPhone:MessageEntity
 * #9b69e34b:2607407947:-1687559349
 * offset:int
 * length:int
 */
export interface MessageEntityPhoneS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityPhoneS = r<new () => MessageEntityPhoneS>(
  0x9b69e34b,
  "MessageEntityPhoneS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityCashtag:MessageEntity
 * #4c4e743f:1280209983:1280209983
 * offset:int
 * length:int
 */
export interface MessageEntityCashtagS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityCashtagS = r<new () => MessageEntityCashtagS>(
  0x4c4e743f,
  "MessageEntityCashtagS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageActionBotAllowed:MessageAction
 * #abe9affe:2884218878:-1410748418
 * domain:string
 */
export interface MessageActionBotAllowedS {
  _id: number;
  _values: [string];

  get_domain(): string;
  set_domain(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionBotAllowedS = r<new () => MessageActionBotAllowedS>(
  0xabe9affe,
  "MessageActionBotAllowedS",
  () => ["domain", StringRW]
);

/**
 * messages.foundStickerSetsNotModified:messages.FoundStickerSets
 * #d54b65d:223655517:223655517
 *
 */
export interface MessagesFoundStickerSetsNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFoundStickerSetsNotModifiedS = r<
  new () => MessagesFoundStickerSetsNotModifiedS
>(0xd54b65d, "MessagesFoundStickerSetsNotModifiedS", () => []);

/**
 * fileHash:FileHash
 * #6242c773:1648543603:1648543603
 * offset:int
 * limit:int
 * hash:bytes
 */
export interface FileHashS {
  _id: number;
  _values: [number, number, Uint8Array];

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_hash(): Uint8Array;
  set_hash(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FileHashS = r<new () => FileHashS>(0x6242c773, "FileHashS", () => [
  "offset",
  IntRW,
  "limit",
  IntRW,
  "hash",
  BytesRW
]);

/**
 * inputClientProxy:InputClientProxy
 * #75588b3f:1968737087:1968737087
 * address:string
 * port:int
 */
export interface InputClientProxyS {
  _id: number;
  _values: [string, number];

  get_address(): string;
  set_address(val: string): this;

  get_port(): number;
  set_port(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputClientProxyS = r<new () => InputClientProxyS>(
  0x75588b3f,
  "InputClientProxyS",
  () => ["address", StringRW, "port", IntRW]
);

/**
 * help.proxyDataEmpty:help.ProxyData
 * #e09e1fb8:3768459192:-526508104
 * expires:int
 */
export interface HelpProxyDataEmptyS {
  _id: number;
  _values: [number];

  get_expires(): number;
  set_expires(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpProxyDataEmptyS = r<new () => HelpProxyDataEmptyS>(
  0xe09e1fb8,
  "HelpProxyDataEmptyS",
  () => ["expires", IntRW]
);

/**
 * help.termsOfServiceUpdateEmpty:help.TermsOfServiceUpdate
 * #e3309f7f:3811614591:-483352705
 * expires:int
 */
export interface HelpTermsOfServiceUpdateEmptyS {
  _id: number;
  _values: [number];

  get_expires(): number;
  set_expires(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpTermsOfServiceUpdateEmptyS = r<
  new () => HelpTermsOfServiceUpdateEmptyS
>(0xe3309f7f, "HelpTermsOfServiceUpdateEmptyS", () => ["expires", IntRW]);

/**
 * inputSecureFileUploaded:InputSecureFile
 * #3334b0f0:859091184:859091184
 * id:long
 * parts:int
 * md5_checksum:string
 * file_hash:bytes
 * secret:bytes
 */
export interface InputSecureFileUploadedS {
  _id: number;
  _values: [ProtoLong, number, string, Uint8Array, Uint8Array];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_parts(): number;
  set_parts(val: number): this;

  get_md5_checksum(): string;
  set_md5_checksum(val: string): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_secret(): Uint8Array;
  set_secret(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputSecureFileUploadedS = r<new () => InputSecureFileUploadedS>(
  0x3334b0f0,
  "InputSecureFileUploadedS",
  () => [
    "id",
    LongRW,
    "parts",
    IntRW,
    "md5_checksum",
    StringRW,
    "file_hash",
    BytesRW,
    "secret",
    BytesRW
  ]
);

/**
 * inputSecureFile:InputSecureFile
 * #5367e5be:1399317950:1399317950
 * id:long
 * access_hash:long
 */
export interface InputSecureFileS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputSecureFileS = r<new () => InputSecureFileS>(
  0x5367e5be,
  "InputSecureFileS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * inputSecureFileLocation:InputFileLocation
 * #cbc7ee28:3418877480:-876089816
 * id:long
 * access_hash:long
 */
export interface InputSecureFileLocationS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputSecureFileLocationS = r<new () => InputSecureFileLocationS>(
  0xcbc7ee28,
  "InputSecureFileLocationS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * secureFileEmpty:SecureFile
 * #64199744:1679398724:1679398724
 *
 */
export interface SecureFileEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureFileEmptyS = r<new () => SecureFileEmptyS>(
  0x64199744,
  "SecureFileEmptyS",
  () => []
);

/**
 * secureFile:SecureFile
 * #e0277a62:3760683618:-534283678
 * id:long
 * access_hash:long
 * size:int
 * dc_id:int
 * date:int
 * file_hash:bytes
 * secret:bytes
 */
export interface SecureFileS {
  _id: number;
  _values: [
    ProtoLong,
    ProtoLong,
    number,
    number,
    number,
    Uint8Array,
    Uint8Array
  ];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_size(): number;
  set_size(val: number): this;

  get_dc_id(): number;
  set_dc_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_secret(): Uint8Array;
  set_secret(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureFileS = r<new () => SecureFileS>(
  0xe0277a62,
  "SecureFileS",
  () => [
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "size",
    IntRW,
    "dc_id",
    IntRW,
    "date",
    IntRW,
    "file_hash",
    BytesRW,
    "secret",
    BytesRW
  ]
);

/**
 * secureData:SecureData
 * #8aeabec3:2330640067:-1964327229
 * data:bytes
 * data_hash:bytes
 * secret:bytes
 */
export interface SecureDataS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  get_data_hash(): Uint8Array;
  set_data_hash(val: Uint8Array): this;

  get_secret(): Uint8Array;
  set_secret(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureDataS = r<new () => SecureDataS>(
  0x8aeabec3,
  "SecureDataS",
  () => ["data", BytesRW, "data_hash", BytesRW, "secret", BytesRW]
);

/**
 * securePlainPhone:SecurePlainData
 * #7d6099dd:2103482845:2103482845
 * phone:string
 */
export interface SecurePlainPhoneS {
  _id: number;
  _values: [string];

  get_phone(): string;
  set_phone(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecurePlainPhoneS = r<new () => SecurePlainPhoneS>(
  0x7d6099dd,
  "SecurePlainPhoneS",
  () => ["phone", StringRW]
);

/**
 * securePlainEmail:SecurePlainData
 * #21ec5a5f:569137759:569137759
 * email:string
 */
export interface SecurePlainEmailS {
  _id: number;
  _values: [string];

  get_email(): string;
  set_email(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecurePlainEmailS = r<new () => SecurePlainEmailS>(
  0x21ec5a5f,
  "SecurePlainEmailS",
  () => ["email", StringRW]
);

/**
 * secureValueTypePersonalDetails:SecureValueType
 * #9d2a81e3:2636808675:-1658158621
 *
 */
export interface SecureValueTypePersonalDetailsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypePersonalDetailsS = r<
  new () => SecureValueTypePersonalDetailsS
>(0x9d2a81e3, "SecureValueTypePersonalDetailsS", () => []);

/**
 * secureValueTypePassport:SecureValueType
 * #3dac6a00:1034709504:1034709504
 *
 */
export interface SecureValueTypePassportS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypePassportS = r<new () => SecureValueTypePassportS>(
  0x3dac6a00,
  "SecureValueTypePassportS",
  () => []
);

/**
 * secureValueTypeDriverLicense:SecureValueType
 * #6e425c4:115615172:115615172
 *
 */
export interface SecureValueTypeDriverLicenseS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeDriverLicenseS = r<
  new () => SecureValueTypeDriverLicenseS
>(0x6e425c4, "SecureValueTypeDriverLicenseS", () => []);

/**
 * secureValueTypeIdentityCard:SecureValueType
 * #a0d0744b:2698015819:-1596951477
 *
 */
export interface SecureValueTypeIdentityCardS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeIdentityCardS = r<
  new () => SecureValueTypeIdentityCardS
>(0xa0d0744b, "SecureValueTypeIdentityCardS", () => []);

/**
 * secureValueTypeInternalPassport:SecureValueType
 * #99a48f23:2577698595:-1717268701
 *
 */
export interface SecureValueTypeInternalPassportS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeInternalPassportS = r<
  new () => SecureValueTypeInternalPassportS
>(0x99a48f23, "SecureValueTypeInternalPassportS", () => []);

/**
 * secureValueTypeAddress:SecureValueType
 * #cbe31e26:3420659238:-874308058
 *
 */
export interface SecureValueTypeAddressS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeAddressS = r<new () => SecureValueTypeAddressS>(
  0xcbe31e26,
  "SecureValueTypeAddressS",
  () => []
);

/**
 * secureValueTypeUtilityBill:SecureValueType
 * #fc36954e:4231435598:-63531698
 *
 */
export interface SecureValueTypeUtilityBillS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeUtilityBillS = r<
  new () => SecureValueTypeUtilityBillS
>(0xfc36954e, "SecureValueTypeUtilityBillS", () => []);

/**
 * secureValueTypeBankStatement:SecureValueType
 * #89137c0d:2299755533:-1995211763
 *
 */
export interface SecureValueTypeBankStatementS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeBankStatementS = r<
  new () => SecureValueTypeBankStatementS
>(0x89137c0d, "SecureValueTypeBankStatementS", () => []);

/**
 * secureValueTypeRentalAgreement:SecureValueType
 * #8b883488:2340959368:-1954007928
 *
 */
export interface SecureValueTypeRentalAgreementS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeRentalAgreementS = r<
  new () => SecureValueTypeRentalAgreementS
>(0x8b883488, "SecureValueTypeRentalAgreementS", () => []);

/**
 * secureValueTypePassportRegistration:SecureValueType
 * #99e3806a:2581823594:-1713143702
 *
 */
export interface SecureValueTypePassportRegistrationS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypePassportRegistrationS = r<
  new () => SecureValueTypePassportRegistrationS
>(0x99e3806a, "SecureValueTypePassportRegistrationS", () => []);

/**
 * secureValueTypeTemporaryRegistration:SecureValueType
 * #ea02ec33:3926060083:-368907213
 *
 */
export interface SecureValueTypeTemporaryRegistrationS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeTemporaryRegistrationS = r<
  new () => SecureValueTypeTemporaryRegistrationS
>(0xea02ec33, "SecureValueTypeTemporaryRegistrationS", () => []);

/**
 * secureValueTypePhone:SecureValueType
 * #b320aadb:3005262555:-1289704741
 *
 */
export interface SecureValueTypePhoneS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypePhoneS = r<new () => SecureValueTypePhoneS>(
  0xb320aadb,
  "SecureValueTypePhoneS",
  () => []
);

/**
 * secureValueTypeEmail:SecureValueType
 * #8e3ca7ee:2386339822:-1908627474
 *
 */
export interface SecureValueTypeEmailS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueTypeEmailS = r<new () => SecureValueTypeEmailS>(
  0x8e3ca7ee,
  "SecureValueTypeEmailS",
  () => []
);

/**
 * secureCredentialsEncrypted:SecureCredentialsEncrypted
 * #33f0ea47:871426631:871426631
 * data:bytes
 * hash:bytes
 * secret:bytes
 */
export interface SecureCredentialsEncryptedS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  get_hash(): Uint8Array;
  set_hash(val: Uint8Array): this;

  get_secret(): Uint8Array;
  set_secret(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureCredentialsEncryptedS = r<
  new () => SecureCredentialsEncryptedS
>(0x33f0ea47, "SecureCredentialsEncryptedS", () => [
  "data",
  BytesRW,
  "hash",
  BytesRW,
  "secret",
  BytesRW
]);

/**
 * account.sentEmailCode:account.SentEmailCode
 * #811f854f:2166326607:-2128640689
 * email_pattern:string
 * length:int
 */
export interface AccountSentEmailCodeS {
  _id: number;
  _values: [string, number];

  get_email_pattern(): string;
  set_email_pattern(val: string): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSentEmailCodeS = r<new () => AccountSentEmailCodeS>(
  0x811f854f,
  "AccountSentEmailCodeS",
  () => ["email_pattern", StringRW, "length", IntRW]
);

/**
 * help.deepLinkInfoEmpty:help.DeepLinkInfo
 * #66afa166:1722786150:1722786150
 *
 */
export interface HelpDeepLinkInfoEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpDeepLinkInfoEmptyS = r<new () => HelpDeepLinkInfoEmptyS>(
  0x66afa166,
  "HelpDeepLinkInfoEmptyS",
  () => []
);

/**
 * savedPhoneContact:SavedContact
 * #1142bd56:289586518:289586518
 * phone:string
 * first_name:string
 * last_name:string
 * date:int
 */
export interface SavedPhoneContactS {
  _id: number;
  _values: [string, string, string, number];

  get_phone(): string;
  set_phone(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SavedPhoneContactS = r<new () => SavedPhoneContactS>(
  0x1142bd56,
  "SavedPhoneContactS",
  () => [
    "phone",
    StringRW,
    "first_name",
    StringRW,
    "last_name",
    StringRW,
    "date",
    IntRW
  ]
);

/**
 * account.takeout:account.Takeout
 * #4dba4501:1304052993:1304052993
 * id:long
 */
export interface AccountTakeoutS {
  _id: number;
  _values: [ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountTakeoutS = r<new () => AccountTakeoutS>(
  0x4dba4501,
  "AccountTakeoutS",
  () => ["id", LongRW]
);

/**
 * inputTakeoutFileLocation:InputFileLocation
 * #29be5899:700340377:700340377
 *
 */
export interface InputTakeoutFileLocationS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputTakeoutFileLocationS = r<new () => InputTakeoutFileLocationS>(
  0x29be5899,
  "InputTakeoutFileLocationS",
  () => []
);

/**
 * messages.dialogsNotModified:messages.Dialogs
 * #f0e3e596:4041467286:-253500010
 * count:int
 */
export interface MessagesDialogsNotModifiedS {
  _id: number;
  _values: [number];

  get_count(): number;
  set_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDialogsNotModifiedS = r<
  new () => MessagesDialogsNotModifiedS
>(0xf0e3e596, "MessagesDialogsNotModifiedS", () => ["count", IntRW]);

/**
 * contacts.topPeersDisabled:contacts.TopPeers
 * #b52c939d:3039597469:-1255369827
 *
 */
export interface ContactsTopPeersDisabledS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsTopPeersDisabledS = r<new () => ContactsTopPeersDisabledS>(
  0xb52c939d,
  "ContactsTopPeersDisabledS",
  () => []
);

/**
 * inputReportReasonCopyright:ReportReason
 * #9b89f93a:2609510714:-1685456582
 *
 */
export interface InputReportReasonCopyrightS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonCopyrightS = r<
  new () => InputReportReasonCopyrightS
>(0x9b89f93a, "InputReportReasonCopyrightS", () => []);

/**
 * passwordKdfAlgoUnknown:PasswordKdfAlgo
 * #d45ab096:3562713238:-732254058
 *
 */
export interface PasswordKdfAlgoUnknownS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PasswordKdfAlgoUnknownS = r<new () => PasswordKdfAlgoUnknownS>(
  0xd45ab096,
  "PasswordKdfAlgoUnknownS",
  () => []
);

/**
 * securePasswordKdfAlgoUnknown:SecurePasswordKdfAlgo
 * #4a8537:4883767:4883767
 *
 */
export interface SecurePasswordKdfAlgoUnknownS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecurePasswordKdfAlgoUnknownS = r<
  new () => SecurePasswordKdfAlgoUnknownS
>(0x4a8537, "SecurePasswordKdfAlgoUnknownS", () => []);

/**
 * securePasswordKdfAlgoPBKDF2HMACSHA512iter100000:SecurePasswordKdfAlgo
 * #bbf2dda0:3153255840:-1141711456
 * salt:bytes
 */
export interface SecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000S {
  _id: number;
  _values: [Uint8Array];

  get_salt(): Uint8Array;
  set_salt(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000S = r<
  new () => SecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000S
>(0xbbf2dda0, "SecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000S", () => [
  "salt",
  BytesRW
]);

/**
 * securePasswordKdfAlgoSHA512:SecurePasswordKdfAlgo
 * #86471d92:2252807570:-2042159726
 * salt:bytes
 */
export interface SecurePasswordKdfAlgoSha512S {
  _id: number;
  _values: [Uint8Array];

  get_salt(): Uint8Array;
  set_salt(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecurePasswordKdfAlgoSha512S = r<
  new () => SecurePasswordKdfAlgoSha512S
>(0x86471d92, "SecurePasswordKdfAlgoSha512S", () => ["salt", BytesRW]);

/**
 * passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow:PasswordKdfAlgo
 * #3a912d4a:982592842:982592842
 * salt1:bytes
 * salt2:bytes
 * g:int
 * p:bytes
 */
export interface PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS {
  _id: number;
  _values: [Uint8Array, Uint8Array, number, Uint8Array];

  get_salt1(): Uint8Array;
  set_salt1(val: Uint8Array): this;

  get_salt2(): Uint8Array;
  set_salt2(val: Uint8Array): this;

  get_g(): number;
  set_g(val: number): this;

  get_p(): Uint8Array;
  set_p(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS = r<
  new () => PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS
>(
  0x3a912d4a,
  "PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS",
  () => ["salt1", BytesRW, "salt2", BytesRW, "g", IntRW, "p", BytesRW]
);

/**
 * inputCheckPasswordEmpty:InputCheckPasswordSRP
 * #9880f658:2558588504:-1736378792
 *
 */
export interface InputCheckPasswordEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputCheckPasswordEmptyS = r<new () => InputCheckPasswordEmptyS>(
  0x9880f658,
  "InputCheckPasswordEmptyS",
  () => []
);

/**
 * inputCheckPasswordSRP:InputCheckPasswordSRP
 * #d27ff082:3531600002:-763367294
 * srp_id:long
 * A:bytes
 * M1:bytes
 */
export interface InputCheckPasswordSrpS {
  _id: number;
  _values: [ProtoLong, Uint8Array, Uint8Array];

  get_srp_id(): ProtoLong;
  set_srp_id(val: ProtoLong): this;

  get_A(): Uint8Array;
  set_A(val: Uint8Array): this;

  get_M1(): Uint8Array;
  set_M1(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputCheckPasswordSrpS = r<new () => InputCheckPasswordSrpS>(
  0xd27ff082,
  "InputCheckPasswordSrpS",
  () => ["srp_id", LongRW, "A", BytesRW, "M1", BytesRW]
);

/**
 * help.passportConfigNotModified:help.PassportConfig
 * #bfb9f457:3216634967:-1078332329
 *
 */
export interface HelpPassportConfigNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpPassportConfigNotModifiedS = r<
  new () => HelpPassportConfigNotModifiedS
>(0xbfb9f457, "HelpPassportConfigNotModifiedS", () => []);

/**
 * jsonNull:JSONValue
 * #3f6d7b68:1064139624:1064139624
 *
 */
export interface JsonNullS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonNullS = r<new () => JsonNullS>(
  0x3f6d7b68,
  "JsonNullS",
  () => []
);

/**
 * jsonNumber:JSONValue
 * #2be0dfa4:736157604:736157604
 * value:double
 */
export interface JsonNumberS {
  _id: number;
  _values: [number];

  get_value(): number;
  set_value(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonNumberS = r<new () => JsonNumberS>(
  0x2be0dfa4,
  "JsonNumberS",
  () => ["value", DoubleRW]
);

/**
 * jsonString:JSONValue
 * #b71e767a:3072226938:-1222740358
 * value:string
 */
export interface JsonStringS {
  _id: number;
  _values: [string];

  get_value(): string;
  set_value(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonStringS = r<new () => JsonStringS>(
  0xb71e767a,
  "JsonStringS",
  () => ["value", StringRW]
);

/**
 * updateUserPinnedMessage:Update
 * #4c43da18:1279515160:1279515160
 * user_id:int
 * id:int
 */
export interface UpdateUserPinnedMessageS {
  _id: number;
  _values: [number, number];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserPinnedMessageS = r<new () => UpdateUserPinnedMessageS>(
  0x4c43da18,
  "UpdateUserPinnedMessageS",
  () => ["user_id", IntRW, "id", IntRW]
);

/**
 * updateChatPinnedMessage:Update
 * #e10db349:3775771465:-519195831
 * chat_id:int
 * id:int
 * version:int
 */
export interface UpdateChatPinnedMessageS {
  _id: number;
  _values: [number, number, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_id(): number;
  set_id(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatPinnedMessageS = r<new () => UpdateChatPinnedMessageS>(
  0xe10db349,
  "UpdateChatPinnedMessageS",
  () => ["chat_id", IntRW, "id", IntRW, "version", IntRW]
);

/**
 * inputNotifyBroadcasts:InputNotifyPeer
 * #b1db7c7e:2983951486:-1311015810
 *
 */
export interface InputNotifyBroadcastsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputNotifyBroadcastsS = r<new () => InputNotifyBroadcastsS>(
  0xb1db7c7e,
  "InputNotifyBroadcastsS",
  () => []
);

/**
 * notifyBroadcasts:NotifyPeer
 * #d612e8ef:3591563503:-703403793
 *
 */
export interface NotifyBroadcastsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NotifyBroadcastsS = r<new () => NotifyBroadcastsS>(
  0xd612e8ef,
  "NotifyBroadcastsS",
  () => []
);

/**
 * textImage:RichText
 * #81ccf4f:136105807:136105807
 * document_id:long
 * w:int
 * h:int
 */
export interface TextImageS {
  _id: number;
  _values: [ProtoLong, number, number];

  get_document_id(): ProtoLong;
  set_document_id(val: ProtoLong): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextImageS = r<new () => TextImageS>(0x81ccf4f, "TextImageS", () => [
  "document_id",
  LongRW,
  "w",
  IntRW,
  "h",
  IntRW
]);

/**
 * pageRelatedArticle:PageRelatedArticle
 * #b390dc08:3012615176:-1282352120
 * flags:#
 * url:string
 * webpage_id:long
 * title:flags.0?string
 * description:flags.1?string
 * photo_id:flags.2?long
 * author:flags.3?string
 * published_date:flags.4?int
 */
export interface PageRelatedArticleS {
  _id: number;
  _values: [
    number,
    string,
    ProtoLong,
    string,
    string,
    ProtoLong,
    string,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_url(): string;
  set_url(val: string): this;

  get_webpage_id(): ProtoLong;
  set_webpage_id(val: ProtoLong): this;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_description(): string;
  set_description(val: string): this;

  has_description(): boolean;

  get_photo_id(): ProtoLong;
  set_photo_id(val: ProtoLong): this;

  has_photo_id(): boolean;

  get_author(): string;
  set_author(val: string): this;

  has_author(): boolean;

  get_published_date(): number;
  set_published_date(val: number): this;

  has_published_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageRelatedArticleS = r<new () => PageRelatedArticleS>(
  0xb390dc08,
  "PageRelatedArticleS",
  () => [
    "flags",
    IntRW,
    "url",
    StringRW,
    "webpage_id",
    LongRW,
    "title",
    Optional(StringRW, 0, 0),
    "description",
    Optional(StringRW, 0, 1),
    "photo_id",
    Optional(LongRW, 0, 2),
    "author",
    Optional(StringRW, 0, 3),
    "published_date",
    Optional(IntRW, 0, 4)
  ]
);

/**
 * inputPrivacyKeyPhoneP2P:InputPrivacyKey
 * #db9e70d2:3684593874:-610373422
 *
 */
export interface InputPrivacyKeyPhoneP2PS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyPhoneP2PS = r<new () => InputPrivacyKeyPhoneP2PS>(
  0xdb9e70d2,
  "InputPrivacyKeyPhoneP2PS",
  () => []
);

/**
 * privacyKeyPhoneP2P:PrivacyKey
 * #39491cc8:961092808:961092808
 *
 */
export interface PrivacyKeyPhoneP2PS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyPhoneP2PS = r<new () => PrivacyKeyPhoneP2PS>(
  0x39491cc8,
  "PrivacyKeyPhoneP2PS",
  () => []
);

/**
 * help.supportName:help.SupportName
 * #8c05f1c9:2349199817:-1945767479
 * name:string
 */
export interface HelpSupportNameS {
  _id: number;
  _values: [string];

  get_name(): string;
  set_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpSupportNameS = r<new () => HelpSupportNameS>(
  0x8c05f1c9,
  "HelpSupportNameS",
  () => ["name", StringRW]
);

/**
 * help.userInfoEmpty:help.UserInfo
 * #f3ae2eed:4088278765:-206688531
 *
 */
export interface HelpUserInfoEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpUserInfoEmptyS = r<new () => HelpUserInfoEmptyS>(
  0xf3ae2eed,
  "HelpUserInfoEmptyS",
  () => []
);

/**
 * messageActionContactSignUp:MessageAction
 * #f3f25f76:4092747638:-202219658
 *
 */
export interface MessageActionContactSignUpS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionContactSignUpS = r<
  new () => MessageActionContactSignUpS
>(0xf3f25f76, "MessageActionContactSignUpS", () => []);

/**
 * pollAnswer:PollAnswer
 * #6ca9c2e9:1823064809:1823064809
 * text:string
 * option:bytes
 */
export interface PollAnswerS {
  _id: number;
  _values: [string, Uint8Array];

  get_text(): string;
  set_text(val: string): this;

  get_option(): Uint8Array;
  set_option(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PollAnswerS = r<new () => PollAnswerS>(
  0x6ca9c2e9,
  "PollAnswerS",
  () => ["text", StringRW, "option", BytesRW]
);

/**
 * pollAnswerVoters:PollAnswerVoters
 * #3b6ddad2:997055186:997055186
 * flags:#
 * chosen:flags.0?true
 * option:bytes
 * voters:int
 */
export interface PollAnswerVotersS {
  _id: number;
  _values: [number, true, Uint8Array, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_chosen(): true;
  set_chosen(val: true): this;

  has_chosen(): boolean;

  get_option(): Uint8Array;
  set_option(val: Uint8Array): this;

  get_voters(): number;
  set_voters(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PollAnswerVotersS = r<new () => PollAnswerVotersS>(
  0x3b6ddad2,
  "PollAnswerVotersS",
  () => [
    "flags",
    IntRW,
    "chosen",
    Optional(TrueRW, 0, 0),
    "option",
    BytesRW,
    "voters",
    IntRW
  ]
);

/**
 * chatOnlines:ChatOnlines
 * #f041e250:4030849616:-264117680
 * onlines:int
 */
export interface ChatOnlinesS {
  _id: number;
  _values: [number];

  get_onlines(): number;
  set_onlines(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatOnlinesS = r<new () => ChatOnlinesS>(
  0xf041e250,
  "ChatOnlinesS",
  () => ["onlines", IntRW]
);

/**
 * statsURL:StatsURL
 * #47a971e0:1202287072:1202287072
 * url:string
 */
export interface StatsUrlS {
  _id: number;
  _values: [string];

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StatsUrlS = r<new () => StatsUrlS>(0x47a971e0, "StatsUrlS", () => [
  "url",
  StringRW
]);

/**
 * photoStrippedSize:PhotoSize
 * #e0b0bc2e:3769678894:-525288402
 * type:string
 * bytes:bytes
 */
export interface PhotoStrippedSizeS {
  _id: number;
  _values: [string, Uint8Array];

  get_type(): string;
  set_type(val: string): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotoStrippedSizeS = r<new () => PhotoStrippedSizeS>(
  0xe0b0bc2e,
  "PhotoStrippedSizeS",
  () => ["type", StringRW, "bytes", BytesRW]
);

/**
 * chatAdminRights:ChatAdminRights
 * #5fb224d5:1605510357:1605510357
 * flags:#
 * change_info:flags.0?true
 * post_messages:flags.1?true
 * edit_messages:flags.2?true
 * delete_messages:flags.3?true
 * ban_users:flags.4?true
 * invite_users:flags.5?true
 * pin_messages:flags.7?true
 * add_admins:flags.9?true
 */
export interface ChatAdminRightsS {
  _id: number;
  _values: [number, true, true, true, true, true, true, true, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_change_info(): true;
  set_change_info(val: true): this;

  has_change_info(): boolean;

  get_post_messages(): true;
  set_post_messages(val: true): this;

  has_post_messages(): boolean;

  get_edit_messages(): true;
  set_edit_messages(val: true): this;

  has_edit_messages(): boolean;

  get_delete_messages(): true;
  set_delete_messages(val: true): this;

  has_delete_messages(): boolean;

  get_ban_users(): true;
  set_ban_users(val: true): this;

  has_ban_users(): boolean;

  get_invite_users(): true;
  set_invite_users(val: true): this;

  has_invite_users(): boolean;

  get_pin_messages(): true;
  set_pin_messages(val: true): this;

  has_pin_messages(): boolean;

  get_add_admins(): true;
  set_add_admins(val: true): this;

  has_add_admins(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatAdminRightsS = r<new () => ChatAdminRightsS>(
  0x5fb224d5,
  "ChatAdminRightsS",
  () => [
    "flags",
    IntRW,
    "change_info",
    Optional(TrueRW, 0, 0),
    "post_messages",
    Optional(TrueRW, 0, 1),
    "edit_messages",
    Optional(TrueRW, 0, 2),
    "delete_messages",
    Optional(TrueRW, 0, 3),
    "ban_users",
    Optional(TrueRW, 0, 4),
    "invite_users",
    Optional(TrueRW, 0, 5),
    "pin_messages",
    Optional(TrueRW, 0, 7),
    "add_admins",
    Optional(TrueRW, 0, 9)
  ]
);

/**
 * chatBannedRights:ChatBannedRights
 * #9f120418:2668758040:-1626209256
 * flags:#
 * view_messages:flags.0?true
 * send_messages:flags.1?true
 * send_media:flags.2?true
 * send_stickers:flags.3?true
 * send_gifs:flags.4?true
 * send_games:flags.5?true
 * send_inline:flags.6?true
 * embed_links:flags.7?true
 * send_polls:flags.8?true
 * change_info:flags.10?true
 * invite_users:flags.15?true
 * pin_messages:flags.17?true
 * until_date:int
 */
export interface ChatBannedRightsS {
  _id: number;
  _values: [
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
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_view_messages(): true;
  set_view_messages(val: true): this;

  has_view_messages(): boolean;

  get_send_messages(): true;
  set_send_messages(val: true): this;

  has_send_messages(): boolean;

  get_send_media(): true;
  set_send_media(val: true): this;

  has_send_media(): boolean;

  get_send_stickers(): true;
  set_send_stickers(val: true): this;

  has_send_stickers(): boolean;

  get_send_gifs(): true;
  set_send_gifs(val: true): this;

  has_send_gifs(): boolean;

  get_send_games(): true;
  set_send_games(val: true): this;

  has_send_games(): boolean;

  get_send_inline(): true;
  set_send_inline(val: true): this;

  has_send_inline(): boolean;

  get_embed_links(): true;
  set_embed_links(val: true): this;

  has_embed_links(): boolean;

  get_send_polls(): true;
  set_send_polls(val: true): this;

  has_send_polls(): boolean;

  get_change_info(): true;
  set_change_info(val: true): this;

  has_change_info(): boolean;

  get_invite_users(): true;
  set_invite_users(val: true): this;

  has_invite_users(): boolean;

  get_pin_messages(): true;
  set_pin_messages(val: true): this;

  has_pin_messages(): boolean;

  get_until_date(): number;
  set_until_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatBannedRightsS = r<new () => ChatBannedRightsS>(
  0x9f120418,
  "ChatBannedRightsS",
  () => [
    "flags",
    IntRW,
    "view_messages",
    Optional(TrueRW, 0, 0),
    "send_messages",
    Optional(TrueRW, 0, 1),
    "send_media",
    Optional(TrueRW, 0, 2),
    "send_stickers",
    Optional(TrueRW, 0, 3),
    "send_gifs",
    Optional(TrueRW, 0, 4),
    "send_games",
    Optional(TrueRW, 0, 5),
    "send_inline",
    Optional(TrueRW, 0, 6),
    "embed_links",
    Optional(TrueRW, 0, 7),
    "send_polls",
    Optional(TrueRW, 0, 8),
    "change_info",
    Optional(TrueRW, 0, 10),
    "invite_users",
    Optional(TrueRW, 0, 15),
    "pin_messages",
    Optional(TrueRW, 0, 17),
    "until_date",
    IntRW
  ]
);

/**
 * inputWallPaper:InputWallPaper
 * #e630b979:3861952889:-433014407
 * id:long
 * access_hash:long
 */
export interface InputWallPaperS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputWallPaperS = r<new () => InputWallPaperS>(
  0xe630b979,
  "InputWallPaperS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * inputWallPaperSlug:InputWallPaper
 * #72091c80:1913199744:1913199744
 * slug:string
 */
export interface InputWallPaperSlugS {
  _id: number;
  _values: [string];

  get_slug(): string;
  set_slug(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputWallPaperSlugS = r<new () => InputWallPaperSlugS>(
  0x72091c80,
  "InputWallPaperSlugS",
  () => ["slug", StringRW]
);

/**
 * channelParticipantsContacts:ChannelParticipantsFilter
 * #bb6ae88d:3144345741:-1150621555
 * q:string
 */
export interface ChannelParticipantsContactsS {
  _id: number;
  _values: [string];

  get_q(): string;
  set_q(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantsContactsS = r<
  new () => ChannelParticipantsContactsS
>(0xbb6ae88d, "ChannelParticipantsContactsS", () => ["q", StringRW]);

/**
 * account.wallPapersNotModified:account.WallPapers
 * #1c199183:471437699:471437699
 *
 */
export interface AccountWallPapersNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountWallPapersNotModifiedS = r<
  new () => AccountWallPapersNotModifiedS
>(0x1c199183, "AccountWallPapersNotModifiedS", () => []);

/**
 * codeSettings:CodeSettings
 * #debebe83:3737042563:-557924733
 * flags:#
 * allow_flashcall:flags.0?true
 * current_number:flags.1?true
 * allow_app_hash:flags.4?true
 */
export interface CodeSettingsS {
  _id: number;
  _values: [number, true, true, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_allow_flashcall(): true;
  set_allow_flashcall(val: true): this;

  has_allow_flashcall(): boolean;

  get_current_number(): true;
  set_current_number(val: true): this;

  has_current_number(): boolean;

  get_allow_app_hash(): true;
  set_allow_app_hash(val: true): this;

  has_allow_app_hash(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let CodeSettingsS = r<new () => CodeSettingsS>(
  0xdebebe83,
  "CodeSettingsS",
  () => [
    "flags",
    IntRW,
    "allow_flashcall",
    Optional(TrueRW, 0, 0),
    "current_number",
    Optional(TrueRW, 0, 1),
    "allow_app_hash",
    Optional(TrueRW, 0, 4)
  ]
);

/**
 * wallPaperSettings:WallPaperSettings
 * #a12f40b8:2704228536:-1590738760
 * flags:#
 * blur:flags.1?true
 * motion:flags.2?true
 * background_color:flags.0?int
 * intensity:flags.3?int
 */
export interface WallPaperSettingsS {
  _id: number;
  _values: [number, true, true, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_blur(): true;
  set_blur(val: true): this;

  has_blur(): boolean;

  get_motion(): true;
  set_motion(val: true): this;

  has_motion(): boolean;

  get_background_color(): number;
  set_background_color(val: number): this;

  has_background_color(): boolean;

  get_intensity(): number;
  set_intensity(val: number): this;

  has_intensity(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WallPaperSettingsS = r<new () => WallPaperSettingsS>(
  0xa12f40b8,
  "WallPaperSettingsS",
  () => [
    "flags",
    IntRW,
    "blur",
    Optional(TrueRW, 0, 1),
    "motion",
    Optional(TrueRW, 0, 2),
    "background_color",
    Optional(IntRW, 0, 0),
    "intensity",
    Optional(IntRW, 0, 3)
  ]
);

/**
 * autoDownloadSettings:AutoDownloadSettings
 * #d246fd47:3527867719:-767099577
 * flags:#
 * disabled:flags.0?true
 * video_preload_large:flags.1?true
 * audio_preload_next:flags.2?true
 * phonecalls_less_data:flags.3?true
 * photo_size_max:int
 * video_size_max:int
 * file_size_max:int
 */
export interface AutoDownloadSettingsS {
  _id: number;
  _values: [number, true, true, true, true, number, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_disabled(): true;
  set_disabled(val: true): this;

  has_disabled(): boolean;

  get_video_preload_large(): true;
  set_video_preload_large(val: true): this;

  has_video_preload_large(): boolean;

  get_audio_preload_next(): true;
  set_audio_preload_next(val: true): this;

  has_audio_preload_next(): boolean;

  get_phonecalls_less_data(): true;
  set_phonecalls_less_data(val: true): this;

  has_phonecalls_less_data(): boolean;

  get_photo_size_max(): number;
  set_photo_size_max(val: number): this;

  get_video_size_max(): number;
  set_video_size_max(val: number): this;

  get_file_size_max(): number;
  set_file_size_max(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AutoDownloadSettingsS = r<new () => AutoDownloadSettingsS>(
  0xd246fd47,
  "AutoDownloadSettingsS",
  () => [
    "flags",
    IntRW,
    "disabled",
    Optional(TrueRW, 0, 0),
    "video_preload_large",
    Optional(TrueRW, 0, 1),
    "audio_preload_next",
    Optional(TrueRW, 0, 2),
    "phonecalls_less_data",
    Optional(TrueRW, 0, 3),
    "photo_size_max",
    IntRW,
    "video_size_max",
    IntRW,
    "file_size_max",
    IntRW
  ]
);

/**
 * emojiKeyword:EmojiKeyword
 * #d5b3b9f9:3585325561:-709641735
 * keyword:string
 * emoticons:Vector<string>
 */
export interface EmojiKeywordS {
  _id: number;
  _values: [string, VectorS<string>];

  get_keyword(): string;
  set_keyword(val: string): this;

  get_emoticons(): VectorS<string>;
  set_emoticons(val: VectorS<string>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EmojiKeywordS = r<new () => EmojiKeywordS>(
  0xd5b3b9f9,
  "EmojiKeywordS",
  () => ["keyword", StringRW, "emoticons", VectorRW(StringRW)]
);

/**
 * emojiKeywordDeleted:EmojiKeyword
 * #236df622:594408994:594408994
 * keyword:string
 * emoticons:Vector<string>
 */
export interface EmojiKeywordDeletedS {
  _id: number;
  _values: [string, VectorS<string>];

  get_keyword(): string;
  set_keyword(val: string): this;

  get_emoticons(): VectorS<string>;
  set_emoticons(val: VectorS<string>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EmojiKeywordDeletedS = r<new () => EmojiKeywordDeletedS>(
  0x236df622,
  "EmojiKeywordDeletedS",
  () => ["keyword", StringRW, "emoticons", VectorRW(StringRW)]
);

/**
 * emojiURL:EmojiURL
 * #a575739d:2775937949:-1519029347
 * url:string
 */
export interface EmojiUrlS {
  _id: number;
  _values: [string];

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EmojiUrlS = r<new () => EmojiUrlS>(0xa575739d, "EmojiUrlS", () => [
  "url",
  StringRW
]);

/**
 * emojiLanguage:EmojiLanguage
 * #b3fb5361:3019592545:-1275374751
 * lang_code:string
 */
export interface EmojiLanguageS {
  _id: number;
  _values: [string];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EmojiLanguageS = r<new () => EmojiLanguageS>(
  0xb3fb5361,
  "EmojiLanguageS",
  () => ["lang_code", StringRW]
);

/**
 * inputPrivacyKeyForwards:InputPrivacyKey
 * #a4dd4c08:2765966344:-1529000952
 *
 */
export interface InputPrivacyKeyForwardsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyForwardsS = r<new () => InputPrivacyKeyForwardsS>(
  0xa4dd4c08,
  "InputPrivacyKeyForwardsS",
  () => []
);

/**
 * privacyKeyForwards:PrivacyKey
 * #69ec56a3:1777096355:1777096355
 *
 */
export interface PrivacyKeyForwardsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyForwardsS = r<new () => PrivacyKeyForwardsS>(
  0x69ec56a3,
  "PrivacyKeyForwardsS",
  () => []
);

/**
 * inputPrivacyKeyProfilePhoto:InputPrivacyKey
 * #5719bacc:1461304012:1461304012
 *
 */
export interface InputPrivacyKeyProfilePhotoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyProfilePhotoS = r<
  new () => InputPrivacyKeyProfilePhotoS
>(0x5719bacc, "InputPrivacyKeyProfilePhotoS", () => []);

/**
 * privacyKeyProfilePhoto:PrivacyKey
 * #96151fed:2517966829:-1777000467
 *
 */
export interface PrivacyKeyProfilePhotoS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyProfilePhotoS = r<new () => PrivacyKeyProfilePhotoS>(
  0x96151fed,
  "PrivacyKeyProfilePhotoS",
  () => []
);

/**
 * fileLocationToBeDeprecated:FileLocation
 * #bc7fc6cd:3162490573:-1132476723
 * volume_id:long
 * local_id:int
 */
export interface FileLocationToBeDeprecatedS {
  _id: number;
  _values: [ProtoLong, number];

  get_volume_id(): ProtoLong;
  set_volume_id(val: ProtoLong): this;

  get_local_id(): number;
  set_local_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FileLocationToBeDeprecatedS = r<
  new () => FileLocationToBeDeprecatedS
>(0xbc7fc6cd, "FileLocationToBeDeprecatedS", () => [
  "volume_id",
  LongRW,
  "local_id",
  IntRW
]);

/**
 * inputPhotoFileLocation:InputFileLocation
 * #40181ffe:1075322878:1075322878
 * id:long
 * access_hash:long
 * file_reference:bytes
 * thumb_size:string
 */
export interface InputPhotoFileLocationS {
  _id: number;
  _values: [ProtoLong, ProtoLong, Uint8Array, string];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  get_thumb_size(): string;
  set_thumb_size(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPhotoFileLocationS = r<new () => InputPhotoFileLocationS>(
  0x40181ffe,
  "InputPhotoFileLocationS",
  () => [
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "file_reference",
    BytesRW,
    "thumb_size",
    StringRW
  ]
);

/**
 * inputPhotoLegacyFileLocation:InputFileLocation
 * #d83466f3:3627312883:-667654413
 * id:long
 * access_hash:long
 * file_reference:bytes
 * volume_id:long
 * local_id:int
 * secret:long
 */
export interface InputPhotoLegacyFileLocationS {
  _id: number;
  _values: [ProtoLong, ProtoLong, Uint8Array, ProtoLong, number, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  get_volume_id(): ProtoLong;
  set_volume_id(val: ProtoLong): this;

  get_local_id(): number;
  set_local_id(val: number): this;

  get_secret(): ProtoLong;
  set_secret(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPhotoLegacyFileLocationS = r<
  new () => InputPhotoLegacyFileLocationS
>(0xd83466f3, "InputPhotoLegacyFileLocationS", () => [
  "id",
  LongRW,
  "access_hash",
  LongRW,
  "file_reference",
  BytesRW,
  "volume_id",
  LongRW,
  "local_id",
  IntRW,
  "secret",
  LongRW
]);

/**
 * inputDialogPeerFolder:InputDialogPeer
 * #64600527:1684014375:1684014375
 * folder_id:int
 */
export interface InputDialogPeerFolderS {
  _id: number;
  _values: [number];

  get_folder_id(): number;
  set_folder_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputDialogPeerFolderS = r<new () => InputDialogPeerFolderS>(
  0x64600527,
  "InputDialogPeerFolderS",
  () => ["folder_id", IntRW]
);

/**
 * dialogPeerFolder:DialogPeer
 * #514519e2:1363483106:1363483106
 * folder_id:int
 */
export interface DialogPeerFolderS {
  _id: number;
  _values: [number];

  get_folder_id(): number;
  set_folder_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DialogPeerFolderS = r<new () => DialogPeerFolderS>(
  0x514519e2,
  "DialogPeerFolderS",
  () => ["folder_id", IntRW]
);

/**
 * inputPrivacyKeyPhoneNumber:InputPrivacyKey
 * #352dafa:55761658:55761658
 *
 */
export interface InputPrivacyKeyPhoneNumberS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyPhoneNumberS = r<
  new () => InputPrivacyKeyPhoneNumberS
>(0x352dafa, "InputPrivacyKeyPhoneNumberS", () => []);

/**
 * privacyKeyPhoneNumber:PrivacyKey
 * #d19ae46d:3516589165:-778378131
 *
 */
export interface PrivacyKeyPhoneNumberS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyPhoneNumberS = r<new () => PrivacyKeyPhoneNumberS>(
  0xd19ae46d,
  "PrivacyKeyPhoneNumberS",
  () => []
);

/**
 * topPeerCategoryForwardUsers:TopPeerCategory
 * #a8406ca9:2822794409:-1472172887
 *
 */
export interface TopPeerCategoryForwardUsersS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryForwardUsersS = r<
  new () => TopPeerCategoryForwardUsersS
>(0xa8406ca9, "TopPeerCategoryForwardUsersS", () => []);

/**
 * topPeerCategoryForwardChats:TopPeerCategory
 * #fbeec0f0:4226728176:-68239120
 *
 */
export interface TopPeerCategoryForwardChatsS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryForwardChatsS = r<
  new () => TopPeerCategoryForwardChatsS
>(0xfbeec0f0, "TopPeerCategoryForwardChatsS", () => []);

/**
 * channelAdminLogEventActionChangeLinkedChat:ChannelAdminLogEventAction
 * #a26f881b:2725218331:-1569748965
 * prev_value:int
 * new_value:int
 */
export interface ChannelAdminLogEventActionChangeLinkedChatS {
  _id: number;
  _values: [number, number];

  get_prev_value(): number;
  set_prev_value(val: number): this;

  get_new_value(): number;
  set_new_value(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangeLinkedChatS = r<
  new () => ChannelAdminLogEventActionChangeLinkedChatS
>(0xa26f881b, "ChannelAdminLogEventActionChangeLinkedChatS", () => [
  "prev_value",
  IntRW,
  "new_value",
  IntRW
]);

/**
 * keyboardButtonUrlAuth:KeyboardButton
 * #10b78d29:280464681:280464681
 * flags:#
 * text:string
 * fwd_text:flags.0?string
 * url:string
 * button_id:int
 */
export interface KeyboardButtonUrlAuthS {
  _id: number;
  _values: [number, string, string, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_text(): string;
  set_text(val: string): this;

  get_fwd_text(): string;
  set_fwd_text(val: string): this;

  has_fwd_text(): boolean;

  get_url(): string;
  set_url(val: string): this;

  get_button_id(): number;
  set_button_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonUrlAuthS = r<new () => KeyboardButtonUrlAuthS>(
  0x10b78d29,
  "KeyboardButtonUrlAuthS",
  () => [
    "flags",
    IntRW,
    "text",
    StringRW,
    "fwd_text",
    Optional(StringRW, 0, 0),
    "url",
    StringRW,
    "button_id",
    IntRW
  ]
);

/**
 * urlAuthResultAccepted:UrlAuthResult
 * #8f8c0e4e:2408320590:-1886646706
 * url:string
 */
export interface UrlAuthResultAcceptedS {
  _id: number;
  _values: [string];

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UrlAuthResultAcceptedS = r<new () => UrlAuthResultAcceptedS>(
  0x8f8c0e4e,
  "UrlAuthResultAcceptedS",
  () => ["url", StringRW]
);

/**
 * urlAuthResultDefault:UrlAuthResult
 * #a9d6db1f:2849430303:-1445536993
 *
 */
export interface UrlAuthResultDefaultS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UrlAuthResultDefaultS = r<new () => UrlAuthResultDefaultS>(
  0xa9d6db1f,
  "UrlAuthResultDefaultS",
  () => []
);

/**
 * inputPrivacyValueAllowChatParticipants:InputPrivacyRule
 * #4c81c1ba:1283572154:1283572154
 * chats:Vector<int>
 */
export interface InputPrivacyValueAllowChatParticipantsS {
  _id: number;
  _values: [VectorS<number>];

  get_chats(): VectorS<number>;
  set_chats(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueAllowChatParticipantsS = r<
  new () => InputPrivacyValueAllowChatParticipantsS
>(0x4c81c1ba, "InputPrivacyValueAllowChatParticipantsS", () => [
  "chats",
  VectorRW(IntRW)
]);

/**
 * inputPrivacyValueDisallowChatParticipants:InputPrivacyRule
 * #d82363af:3626197935:-668769361
 * chats:Vector<int>
 */
export interface InputPrivacyValueDisallowChatParticipantsS {
  _id: number;
  _values: [VectorS<number>];

  get_chats(): VectorS<number>;
  set_chats(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueDisallowChatParticipantsS = r<
  new () => InputPrivacyValueDisallowChatParticipantsS
>(0xd82363af, "InputPrivacyValueDisallowChatParticipantsS", () => [
  "chats",
  VectorRW(IntRW)
]);

/**
 * privacyValueAllowChatParticipants:PrivacyRule
 * #18be796b:415136107:415136107
 * chats:Vector<int>
 */
export interface PrivacyValueAllowChatParticipantsS {
  _id: number;
  _values: [VectorS<number>];

  get_chats(): VectorS<number>;
  set_chats(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueAllowChatParticipantsS = r<
  new () => PrivacyValueAllowChatParticipantsS
>(0x18be796b, "PrivacyValueAllowChatParticipantsS", () => [
  "chats",
  VectorRW(IntRW)
]);

/**
 * privacyValueDisallowChatParticipants:PrivacyRule
 * #acae0690:2897086096:-1397881200
 * chats:Vector<int>
 */
export interface PrivacyValueDisallowChatParticipantsS {
  _id: number;
  _values: [VectorS<number>];

  get_chats(): VectorS<number>;
  set_chats(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyValueDisallowChatParticipantsS = r<
  new () => PrivacyValueDisallowChatParticipantsS
>(0xacae0690, "PrivacyValueDisallowChatParticipantsS", () => [
  "chats",
  VectorRW(IntRW)
]);

/**
 * messageEntityUnderline:MessageEntity
 * #9c4e7e8b:2622389899:-1672577397
 * offset:int
 * length:int
 */
export interface MessageEntityUnderlineS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityUnderlineS = r<new () => MessageEntityUnderlineS>(
  0x9c4e7e8b,
  "MessageEntityUnderlineS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityStrike:MessageEntity
 * #bf0693d4:3204879316:-1090087980
 * offset:int
 * length:int
 */
export interface MessageEntityStrikeS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityStrikeS = r<new () => MessageEntityStrikeS>(
  0xbf0693d4,
  "MessageEntityStrikeS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * messageEntityBlockquote:MessageEntity
 * #20df5d0:34469328:34469328
 * offset:int
 * length:int
 */
export interface MessageEntityBlockquoteS {
  _id: number;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageEntityBlockquoteS = r<new () => MessageEntityBlockquoteS>(
  0x20df5d0,
  "MessageEntityBlockquoteS",
  () => ["offset", IntRW, "length", IntRW]
);

/**
 * channelLocationEmpty:ChannelLocation
 * #bfb5ad8b:3216354699:-1078612597
 *
 */
export interface ChannelLocationEmptyS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelLocationEmptyS = r<new () => ChannelLocationEmptyS>(
  0xbfb5ad8b,
  "ChannelLocationEmptyS",
  () => []
);

/**
 * inputReportReasonGeoIrrelevant:ReportReason
 * #dbd4feed:3688169197:-606798099
 *
 */
export interface InputReportReasonGeoIrrelevantS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputReportReasonGeoIrrelevantS = r<
  new () => InputReportReasonGeoIrrelevantS
>(0xdbd4feed, "InputReportReasonGeoIrrelevantS", () => []);

/**
 * channelAdminLogEventActionToggleSlowMode:ChannelAdminLogEventAction
 * #53909779:1401984889:1401984889
 * prev_value:int
 * new_value:int
 */
export interface ChannelAdminLogEventActionToggleSlowModeS {
  _id: number;
  _values: [number, number];

  get_prev_value(): number;
  set_prev_value(val: number): this;

  get_new_value(): number;
  set_new_value(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionToggleSlowModeS = r<
  new () => ChannelAdminLogEventActionToggleSlowModeS
>(0x53909779, "ChannelAdminLogEventActionToggleSlowModeS", () => [
  "prev_value",
  IntRW,
  "new_value",
  IntRW
]);

/**
 * payments.paymentVerificationNeeded:payments.PaymentResult
 * #d8411139:3628142905:-666824391
 * url:string
 */
export interface PaymentsPaymentVerificationNeededS {
  _id: number;
  _values: [string];

  get_url(): string;
  set_url(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsPaymentVerificationNeededS = r<
  new () => PaymentsPaymentVerificationNeededS
>(0xd8411139, "PaymentsPaymentVerificationNeededS", () => ["url", StringRW]);

/**
 * inputStickerSetAnimatedEmoji:InputStickerSet
 * #28703c8:42402760:42402760
 *
 */
export interface InputStickerSetAnimatedEmojiS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickerSetAnimatedEmojiS = r<
  new () => InputStickerSetAnimatedEmojiS
>(0x28703c8, "InputStickerSetAnimatedEmojiS", () => []);

/**
 * restrictionReason:RestrictionReason
 * #d072acb4:3497176244:-797791052
 * platform:string
 * reason:string
 * text:string
 */
export interface RestrictionReasonS {
  _id: number;
  _values: [string, string, string];

  get_platform(): string;
  set_platform(val: string): this;

  get_reason(): string;
  set_reason(val: string): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RestrictionReasonS = r<new () => RestrictionReasonS>(
  0xd072acb4,
  "RestrictionReasonS",
  () => ["platform", StringRW, "reason", StringRW, "text", StringRW]
);

/**
 * inputTheme:InputTheme
 * #3c5693e9:1012306921:1012306921
 * id:long
 * access_hash:long
 */
export interface InputThemeS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputThemeS = r<new () => InputThemeS>(
  0x3c5693e9,
  "InputThemeS",
  () => ["id", LongRW, "access_hash", LongRW]
);

/**
 * inputThemeSlug:InputTheme
 * #f5890df1:4119399921:-175567375
 * slug:string
 */
export interface InputThemeSlugS {
  _id: number;
  _values: [string];

  get_slug(): string;
  set_slug(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputThemeSlugS = r<new () => InputThemeSlugS>(
  0xf5890df1,
  "InputThemeSlugS",
  () => ["slug", StringRW]
);

/**
 * themeDocumentNotModified:Theme
 * #483d270c:1211967244:1211967244
 *
 */
export interface ThemeDocumentNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ThemeDocumentNotModifiedS = r<new () => ThemeDocumentNotModifiedS>(
  0x483d270c,
  "ThemeDocumentNotModifiedS",
  () => []
);

/**
 * account.themesNotModified:account.Themes
 * #f41eb622:4095653410:-199313886
 *
 */
export interface AccountThemesNotModifiedS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountThemesNotModifiedS = r<new () => AccountThemesNotModifiedS>(
  0xf41eb622,
  "AccountThemesNotModifiedS",
  () => []
);

/**
 * inputPrivacyKeyAddedByPhone:InputPrivacyKey
 * #d1219bdd:3508640733:-786326563
 *
 */
export interface InputPrivacyKeyAddedByPhoneS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyKeyAddedByPhoneS = r<
  new () => InputPrivacyKeyAddedByPhoneS
>(0xd1219bdd, "InputPrivacyKeyAddedByPhoneS", () => []);

/**
 * privacyKeyAddedByPhone:PrivacyKey
 * #42ffd42b:1124062251:1124062251
 *
 */
export interface PrivacyKeyAddedByPhoneS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PrivacyKeyAddedByPhoneS = r<new () => PrivacyKeyAddedByPhoneS>(
  0x42ffd42b,
  "PrivacyKeyAddedByPhoneS",
  () => []
);

export type BoolT = BoolFalseS | BoolTrueS;
export const BoolT = OneOf;

export const VectorTT = VectorS;
export type VectorTT = VectorS;

export const InputContactT = InputPhoneContactS;
export type InputContactT = InputPhoneContactS;

export type InputFileT = InputFileS | InputFileBigS;
export const InputFileT = OneOf;

export type InputGeoPointT = InputGeoPointEmptyS | InputGeoPointS;
export const InputGeoPointT = OneOf;

export type InputPhotoT = InputPhotoEmptyS | InputPhotoS;
export const InputPhotoT = OneOf;

export type PeerT = PeerUserS | PeerChatS | PeerChannelS;
export const PeerT = OneOf;

export type StorageFileTypeT =
  | StorageFileUnknownS
  | StorageFilePartialS
  | StorageFileJpegS
  | StorageFileGifS
  | StorageFilePngS
  | StorageFilePdfS
  | StorageFileMp3S
  | StorageFileMovS
  | StorageFileMp4S
  | StorageFileWebpS;
export const StorageFileTypeT = OneOf;

export type UserStatusT =
  | UserStatusEmptyS
  | UserStatusOnlineS
  | UserStatusOfflineS
  | UserStatusRecentlyS
  | UserStatusLastWeekS
  | UserStatusLastMonthS;
export const UserStatusT = OneOf;

export type ChatParticipantT =
  | ChatParticipantS
  | ChatParticipantCreatorS
  | ChatParticipantAdminS;
export const ChatParticipantT = OneOf;

export type GeoPointT = GeoPointEmptyS | GeoPointS;
export const GeoPointT = OneOf;

export const PeerSettingsT = PeerSettingsS;
export type PeerSettingsT = PeerSettingsS;

export type ReportReasonT =
  | InputReportReasonSpamS
  | InputReportReasonViolenceS
  | InputReportReasonPornographyS
  | InputReportReasonChildAbuseS
  | InputReportReasonOtherS
  | InputReportReasonCopyrightS
  | InputReportReasonGeoIrrelevantS;
export const ReportReasonT = OneOf;

export const ImportedContactT = ImportedContactS;
export type ImportedContactT = ImportedContactS;

export const ContactBlockedT = ContactBlockedS;
export type ContactBlockedT = ContactBlockedS;

export type MessagesFilterT =
  | InputMessagesFilterEmptyS
  | InputMessagesFilterPhotosS
  | InputMessagesFilterVideoS
  | InputMessagesFilterPhotoVideoS
  | InputMessagesFilterDocumentS
  | InputMessagesFilterUrlS
  | InputMessagesFilterGifS
  | InputMessagesFilterVoiceS
  | InputMessagesFilterMusicS
  | InputMessagesFilterChatPhotosS
  | InputMessagesFilterPhoneCallsS
  | InputMessagesFilterRoundVoiceS
  | InputMessagesFilterRoundVideoS
  | InputMessagesFilterMyMentionsS
  | InputMessagesFilterGeoS
  | InputMessagesFilterContactsS;
export const MessagesFilterT = OneOf;

export const UpdatesStateT = UpdatesStateS;
export type UpdatesStateT = UpdatesStateS;

export const DcOptionT = DcOptionS;
export type DcOptionT = DcOptionS;

export type EncryptedChatT =
  | EncryptedChatEmptyS
  | EncryptedChatWaitingS
  | EncryptedChatRequestedS
  | EncryptedChatS
  | EncryptedChatDiscardedS;
export const EncryptedChatT = OneOf;

export type EncryptedFileT = EncryptedFileEmptyS | EncryptedFileS;
export const EncryptedFileT = OneOf;

export type InputEncryptedFileT =
  | InputEncryptedFileEmptyS
  | InputEncryptedFileUploadedS
  | InputEncryptedFileS
  | InputEncryptedFileBigUploadedS;
export const InputEncryptedFileT = OneOf;

export type MessagesDhConfigT =
  | MessagesDhConfigNotModifiedS
  | MessagesDhConfigS;
export const MessagesDhConfigT = OneOf;

export type InputDocumentT = InputDocumentEmptyS | InputDocumentS;
export const InputDocumentT = OneOf;

export type SendMessageActionT =
  | SendMessageTypingActionS
  | SendMessageCancelActionS
  | SendMessageRecordVideoActionS
  | SendMessageUploadVideoActionS
  | SendMessageRecordAudioActionS
  | SendMessageUploadAudioActionS
  | SendMessageUploadPhotoActionS
  | SendMessageUploadDocumentActionS
  | SendMessageGeoLocationActionS
  | SendMessageChooseContactActionS
  | SendMessageGamePlayActionS
  | SendMessageRecordRoundActionS
  | SendMessageUploadRoundActionS;
export const SendMessageActionT = OneOf;

export type InputPrivacyKeyT =
  | InputPrivacyKeyStatusTimestampS
  | InputPrivacyKeyChatInviteS
  | InputPrivacyKeyPhoneCallS
  | InputPrivacyKeyPhoneP2PS
  | InputPrivacyKeyForwardsS
  | InputPrivacyKeyProfilePhotoS
  | InputPrivacyKeyPhoneNumberS
  | InputPrivacyKeyAddedByPhoneS;
export const InputPrivacyKeyT = OneOf;

export type PrivacyKeyT =
  | PrivacyKeyStatusTimestampS
  | PrivacyKeyChatInviteS
  | PrivacyKeyPhoneCallS
  | PrivacyKeyPhoneP2PS
  | PrivacyKeyForwardsS
  | PrivacyKeyProfilePhotoS
  | PrivacyKeyPhoneNumberS
  | PrivacyKeyAddedByPhoneS;
export const PrivacyKeyT = OneOf;

export type PrivacyRuleT =
  | PrivacyValueAllowContactsS
  | PrivacyValueAllowAllS
  | PrivacyValueAllowUsersS
  | PrivacyValueDisallowContactsS
  | PrivacyValueDisallowAllS
  | PrivacyValueDisallowUsersS
  | PrivacyValueAllowChatParticipantsS
  | PrivacyValueDisallowChatParticipantsS;
export const PrivacyRuleT = OneOf;

export const StickerPackT = StickerPackS;
export type StickerPackT = StickerPackS;

export const AuthorizationT = AuthorizationS;
export type AuthorizationT = AuthorizationS;

export type ExportedChatInviteT = ChatInviteEmptyS | ChatInviteExportedS;
export const ExportedChatInviteT = OneOf;

export type InputStickerSetT =
  | InputStickerSetEmptyS
  | InputStickerSetIdS
  | InputStickerSetShortNameS
  | InputStickerSetAnimatedEmojiS;
export const InputStickerSetT = OneOf;

export const BotCommandT = BotCommandS;
export type BotCommandT = BotCommandS;

export const MessageRangeT = MessageRangeS;
export type MessageRangeT = MessageRangeS;

export type ChannelParticipantsFilterT =
  | ChannelParticipantsRecentS
  | ChannelParticipantsAdminsS
  | ChannelParticipantsKickedS
  | ChannelParticipantsBotsS
  | ChannelParticipantsBannedS
  | ChannelParticipantsSearchS
  | ChannelParticipantsContactsS;
export const ChannelParticipantsFilterT = OneOf;

export type AuthCodeTypeT =
  | AuthCodeTypeSmsS
  | AuthCodeTypeCallS
  | AuthCodeTypeFlashCallS;
export const AuthCodeTypeT = OneOf;

export type AuthSentCodeTypeT =
  | AuthSentCodeTypeAppS
  | AuthSentCodeTypeSmsS
  | AuthSentCodeTypeCallS
  | AuthSentCodeTypeFlashCallS;
export const AuthSentCodeTypeT = OneOf;

export const InputBotInlineMessageIdT = InputBotInlineMessageIdS;
export type InputBotInlineMessageIdT = InputBotInlineMessageIdS;

export const InlineBotSwitchPmT = InlineBotSwitchPmS;
export type InlineBotSwitchPmT = InlineBotSwitchPmS;

export type TopPeerCategoryT =
  | TopPeerCategoryBotsPmS
  | TopPeerCategoryBotsInlineS
  | TopPeerCategoryCorrespondentsS
  | TopPeerCategoryGroupsS
  | TopPeerCategoryChannelsS
  | TopPeerCategoryPhoneCallsS
  | TopPeerCategoryForwardUsersS
  | TopPeerCategoryForwardChatsS;
export const TopPeerCategoryT = OneOf;

export const MaskCoordsT = MaskCoordsS;
export type MaskCoordsT = MaskCoordsS;

export const HighScoreT = HighScoreS;
export type HighScoreT = HighScoreS;

export type PhoneCallDiscardReasonT =
  | PhoneCallDiscardReasonMissedS
  | PhoneCallDiscardReasonDisconnectS
  | PhoneCallDiscardReasonHangupS
  | PhoneCallDiscardReasonBusyS;
export const PhoneCallDiscardReasonT = OneOf;

export const DataJsonT = DataJsonS;
export type DataJsonT = DataJsonS;

export const LabeledPriceT = LabeledPriceS;
export type LabeledPriceT = LabeledPriceS;

export const PaymentChargeT = PaymentChargeS;
export type PaymentChargeT = PaymentChargeS;

export const PostAddressT = PostAddressS;
export type PostAddressT = PostAddressS;

export const PaymentSavedCredentialsT = PaymentSavedCredentialsCardS;
export type PaymentSavedCredentialsT = PaymentSavedCredentialsCardS;

export const PhoneConnectionT = PhoneConnectionS;
export type PhoneConnectionT = PhoneConnectionS;

export const PhoneCallProtocolT = PhoneCallProtocolS;
export type PhoneCallProtocolT = PhoneCallProtocolS;

export type UploadCdnFileT = UploadCdnFileReuploadNeededS | UploadCdnFileS;
export const UploadCdnFileT = OneOf;

export const CdnPublicKeyT = CdnPublicKeyS;
export type CdnPublicKeyT = CdnPublicKeyS;

export type LangPackStringT =
  | LangPackStringS
  | LangPackStringPluralizedS
  | LangPackStringDeletedS;
export const LangPackStringT = OneOf;

export const PopularContactT = PopularContactS;
export type PopularContactT = PopularContactS;

export const WebAuthorizationT = WebAuthorizationS;
export type WebAuthorizationT = WebAuthorizationS;

export type InputMessageT =
  | InputMessageIdS
  | InputMessageReplyToS
  | InputMessagePinnedS;
export const InputMessageT = OneOf;

export const FileHashT = FileHashS;
export type FileHashT = FileHashS;

export type InputSecureFileT = InputSecureFileUploadedS | InputSecureFileS;
export const InputSecureFileT = OneOf;

export type SecureFileT = SecureFileEmptyS | SecureFileS;
export const SecureFileT = OneOf;

export const SecureDataT = SecureDataS;
export type SecureDataT = SecureDataS;

export type SecurePlainDataT = SecurePlainPhoneS | SecurePlainEmailS;
export const SecurePlainDataT = OneOf;

export type SecureValueTypeT =
  | SecureValueTypePersonalDetailsS
  | SecureValueTypePassportS
  | SecureValueTypeDriverLicenseS
  | SecureValueTypeIdentityCardS
  | SecureValueTypeInternalPassportS
  | SecureValueTypeAddressS
  | SecureValueTypeUtilityBillS
  | SecureValueTypeBankStatementS
  | SecureValueTypeRentalAgreementS
  | SecureValueTypePassportRegistrationS
  | SecureValueTypeTemporaryRegistrationS
  | SecureValueTypePhoneS
  | SecureValueTypeEmailS;
export const SecureValueTypeT = OneOf;

export const SecureCredentialsEncryptedT = SecureCredentialsEncryptedS;
export type SecureCredentialsEncryptedT = SecureCredentialsEncryptedS;

export const SavedContactT = SavedPhoneContactS;
export type SavedContactT = SavedPhoneContactS;

export type PasswordKdfAlgoT =
  | PasswordKdfAlgoUnknownS
  | PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS;
export const PasswordKdfAlgoT = OneOf;

export type SecurePasswordKdfAlgoT =
  | SecurePasswordKdfAlgoUnknownS
  | SecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000S
  | SecurePasswordKdfAlgoSha512S;
export const SecurePasswordKdfAlgoT = OneOf;

export type InputCheckPasswordSrpT =
  | InputCheckPasswordEmptyS
  | InputCheckPasswordSrpS;
export const InputCheckPasswordSrpT = OneOf;

export const PageRelatedArticleT = PageRelatedArticleS;
export type PageRelatedArticleT = PageRelatedArticleS;

export const PollAnswerT = PollAnswerS;
export type PollAnswerT = PollAnswerS;

export const PollAnswerVotersT = PollAnswerVotersS;
export type PollAnswerVotersT = PollAnswerVotersS;

export const ChatAdminRightsT = ChatAdminRightsS;
export type ChatAdminRightsT = ChatAdminRightsS;

export const ChatBannedRightsT = ChatBannedRightsS;
export type ChatBannedRightsT = ChatBannedRightsS;

export type InputWallPaperT = InputWallPaperS | InputWallPaperSlugS;
export const InputWallPaperT = OneOf;

export const WallPaperSettingsT = WallPaperSettingsS;
export type WallPaperSettingsT = WallPaperSettingsS;

export const AutoDownloadSettingsT = AutoDownloadSettingsS;
export type AutoDownloadSettingsT = AutoDownloadSettingsS;

export type EmojiKeywordT = EmojiKeywordS | EmojiKeywordDeletedS;
export const EmojiKeywordT = OneOf;

export const FileLocationT = FileLocationToBeDeprecatedS;
export type FileLocationT = FileLocationToBeDeprecatedS;

export const RestrictionReasonT = RestrictionReasonS;
export type RestrictionReasonT = RestrictionReasonS;

export type InputThemeT = InputThemeS | InputThemeSlugS;
export const InputThemeT = OneOf;

/**
 * invokeAfterMsg:invokeAfterMsg X
 * #cb9f372d:3416209197:-878758099
 * msg_id:long
 * query:!X
 */
export interface InvokeAfterMsgM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, TMethod];

  get_msg_id(): ProtoLong;
  set_msg_id(val: ProtoLong): this;

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvokeAfterMsgM = r<new () => InvokeAfterMsgM>(
  0xcb9f372d,
  "InvokeAfterMsgM",
  () => ["msg_id", LongRW, "query", OneOfRW]
);

/**
 * invokeAfterMsgs:invokeAfterMsgs X
 * #3dc4b4f0:1036301552:1036301552
 * msg_ids:Vector<long>
 * query:!X
 */
export interface InvokeAfterMsgsM {
  _id: number;
  _method(): void;
  _values: [VectorS<ProtoLong>, TMethod];

  get_msg_ids(): VectorS<ProtoLong>;
  set_msg_ids(val: VectorS<ProtoLong>): this;

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvokeAfterMsgsM = r<new () => InvokeAfterMsgsM>(
  0x3dc4b4f0,
  "InvokeAfterMsgsM",
  () => ["msg_ids", VectorRW(LongRW), "query", OneOfRW]
);

/**
 * auth.sendCode:auth.sendCode auth.SentCode
 * #a677244f:2792825935:-1502141361
 * phone_number:string
 * api_id:int
 * api_hash:string
 * settings:CodeSettings
 */
export interface AuthSendCodeM {
  _id: number;
  _method(): void;
  _values: [string, number, string, CodeSettingsS];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_api_id(): number;
  set_api_id(val: number): this;

  get_api_hash(): string;
  set_api_hash(val: string): this;

  get_settings(): CodeSettingsS;
  set_settings(val: CodeSettingsS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSendCodeM = r<new () => AuthSendCodeM>(
  0xa677244f,
  "AuthSendCodeM",
  () => [
    "phone_number",
    StringRW,
    "api_id",
    IntRW,
    "api_hash",
    StringRW,
    "settings",
    TypeRW(CodeSettingsS)
  ]
);

/**
 * auth.signUp:auth.signUp auth.Authorization
 * #80eee427:2163139623:-2131827673
 * phone_number:string
 * phone_code_hash:string
 * first_name:string
 * last_name:string
 */
export interface AuthSignUpM {
  _id: number;
  _method(): void;
  _values: [string, string, string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSignUpM = r<new () => AuthSignUpM>(
  0x80eee427,
  "AuthSignUpM",
  () => [
    "phone_number",
    StringRW,
    "phone_code_hash",
    StringRW,
    "first_name",
    StringRW,
    "last_name",
    StringRW
  ]
);

/**
 * auth.signIn:auth.signIn auth.Authorization
 * #bcd51581:3168081281:-1126886015
 * phone_number:string
 * phone_code_hash:string
 * phone_code:string
 */
export interface AuthSignInM {
  _id: number;
  _method(): void;
  _values: [string, string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  get_phone_code(): string;
  set_phone_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSignInM = r<new () => AuthSignInM>(
  0xbcd51581,
  "AuthSignInM",
  () => [
    "phone_number",
    StringRW,
    "phone_code_hash",
    StringRW,
    "phone_code",
    StringRW
  ]
);

/**
 * auth.logOut:auth.logOut Bool
 * #5717da40:1461180992:1461180992
 *
 */
export interface AuthLogOutM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthLogOutM = r<new () => AuthLogOutM>(
  0x5717da40,
  "AuthLogOutM",
  () => []
);

/**
 * auth.resetAuthorizations:auth.resetAuthorizations Bool
 * #9fab0d1a:2678787354:-1616179942
 *
 */
export interface AuthResetAuthorizationsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthResetAuthorizationsM = r<new () => AuthResetAuthorizationsM>(
  0x9fab0d1a,
  "AuthResetAuthorizationsM",
  () => []
);

/**
 * auth.exportAuthorization:auth.exportAuthorization auth.ExportedAuthorization
 * #e5bfffcd:3854565325:-440401971
 * dc_id:int
 */
export interface AuthExportAuthorizationM {
  _id: number;
  _method(): void;
  _values: [number];

  get_dc_id(): number;
  set_dc_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthExportAuthorizationM = r<new () => AuthExportAuthorizationM>(
  0xe5bfffcd,
  "AuthExportAuthorizationM",
  () => ["dc_id", IntRW]
);

/**
 * auth.importAuthorization:auth.importAuthorization auth.Authorization
 * #e3ef9613:3824129555:-470837741
 * id:int
 * bytes:bytes
 */
export interface AuthImportAuthorizationM {
  _id: number;
  _method(): void;
  _values: [number, Uint8Array];

  get_id(): number;
  set_id(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthImportAuthorizationM = r<new () => AuthImportAuthorizationM>(
  0xe3ef9613,
  "AuthImportAuthorizationM",
  () => ["id", IntRW, "bytes", BytesRW]
);

/**
 * auth.bindTempAuthKey:auth.bindTempAuthKey Bool
 * #cdd42a05:3453233669:-841733627
 * perm_auth_key_id:long
 * nonce:long
 * expires_at:int
 * encrypted_message:bytes
 */
export interface AuthBindTempAuthKeyM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, ProtoLong, number, Uint8Array];

  get_perm_auth_key_id(): ProtoLong;
  set_perm_auth_key_id(val: ProtoLong): this;

  get_nonce(): ProtoLong;
  set_nonce(val: ProtoLong): this;

  get_expires_at(): number;
  set_expires_at(val: number): this;

  get_encrypted_message(): Uint8Array;
  set_encrypted_message(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthBindTempAuthKeyM = r<new () => AuthBindTempAuthKeyM>(
  0xcdd42a05,
  "AuthBindTempAuthKeyM",
  () => [
    "perm_auth_key_id",
    LongRW,
    "nonce",
    LongRW,
    "expires_at",
    IntRW,
    "encrypted_message",
    BytesRW
  ]
);

/**
 * account.registerDevice:account.registerDevice Bool
 * #68976c6f:1754754159:1754754159
 * flags:#
 * no_muted:flags.0?true
 * token_type:int
 * token:string
 * app_sandbox:Bool
 * secret:bytes
 * other_uids:Vector<int>
 */
export interface AccountRegisterDeviceM {
  _id: number;
  _method(): void;
  _values: [number, true, number, string, BoolT, Uint8Array, VectorS<number>];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_muted(): true;
  set_no_muted(val: true): this;

  has_no_muted(): boolean;

  get_token_type(): number;
  set_token_type(val: number): this;

  get_token(): string;
  set_token(val: string): this;

  get_app_sandbox(): BoolT;
  set_app_sandbox(val: BoolT): this;

  get_secret(): Uint8Array;
  set_secret(val: Uint8Array): this;

  get_other_uids(): VectorS<number>;
  set_other_uids(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountRegisterDeviceM = r<new () => AccountRegisterDeviceM>(
  0x68976c6f,
  "AccountRegisterDeviceM",
  () => [
    "flags",
    IntRW,
    "no_muted",
    Optional(TrueRW, 0, 0),
    "token_type",
    IntRW,
    "token",
    StringRW,
    "app_sandbox",
    TypeRW(BoolT),
    "secret",
    BytesRW,
    "other_uids",
    VectorRW(IntRW)
  ]
);

/**
 * account.unregisterDevice:account.unregisterDevice Bool
 * #3076c4bf:813089983:813089983
 * token_type:int
 * token:string
 * other_uids:Vector<int>
 */
export interface AccountUnregisterDeviceM {
  _id: number;
  _method(): void;
  _values: [number, string, VectorS<number>];

  get_token_type(): number;
  set_token_type(val: number): this;

  get_token(): string;
  set_token(val: string): this;

  get_other_uids(): VectorS<number>;
  set_other_uids(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUnregisterDeviceM = r<new () => AccountUnregisterDeviceM>(
  0x3076c4bf,
  "AccountUnregisterDeviceM",
  () => ["token_type", IntRW, "token", StringRW, "other_uids", VectorRW(IntRW)]
);

/**
 * account.resetNotifySettings:account.resetNotifySettings Bool
 * #db7e1747:3682473799:-612493497
 *
 */
export interface AccountResetNotifySettingsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountResetNotifySettingsM = r<
  new () => AccountResetNotifySettingsM
>(0xdb7e1747, "AccountResetNotifySettingsM", () => []);

/**
 * account.updateProfile:account.updateProfile User
 * #78515775:2018596725:2018596725
 * flags:#
 * first_name:flags.0?string
 * last_name:flags.1?string
 * about:flags.2?string
 */
export interface AccountUpdateProfileM {
  _id: number;
  _method(): void;
  _values: [number, string, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  has_first_name(): boolean;

  get_last_name(): string;
  set_last_name(val: string): this;

  has_last_name(): boolean;

  get_about(): string;
  set_about(val: string): this;

  has_about(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdateProfileM = r<new () => AccountUpdateProfileM>(
  0x78515775,
  "AccountUpdateProfileM",
  () => [
    "flags",
    IntRW,
    "first_name",
    Optional(StringRW, 0, 0),
    "last_name",
    Optional(StringRW, 0, 1),
    "about",
    Optional(StringRW, 0, 2)
  ]
);

/**
 * account.updateStatus:account.updateStatus Bool
 * #6628562c:1713919532:1713919532
 * offline:Bool
 */
export interface AccountUpdateStatusM {
  _id: number;
  _method(): void;
  _values: [BoolT];

  get_offline(): BoolT;
  set_offline(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdateStatusM = r<new () => AccountUpdateStatusM>(
  0x6628562c,
  "AccountUpdateStatusM",
  () => ["offline", TypeRW(BoolT)]
);

/**
 * account.getWallPapers:account.getWallPapers account.WallPapers
 * #aabb1763:2864387939:-1430579357
 * hash:int
 */
export interface AccountGetWallPapersM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetWallPapersM = r<new () => AccountGetWallPapersM>(
  0xaabb1763,
  "AccountGetWallPapersM",
  () => ["hash", IntRW]
);

/**
 * contacts.getContactIDs:contacts.getContactIDs Vector<int>
 * #2caa4a42:749357634:749357634
 * hash:int
 */
export interface ContactsGetContactIDsM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetContactIDsM = r<new () => ContactsGetContactIDsM>(
  0x2caa4a42,
  "ContactsGetContactIDsM",
  () => ["hash", IntRW]
);

/**
 * contacts.getStatuses:contacts.getStatuses Vector<ContactStatus>
 * #c4a353ee:3299038190:-995929106
 *
 */
export interface ContactsGetStatusesM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetStatusesM = r<new () => ContactsGetStatusesM>(
  0xc4a353ee,
  "ContactsGetStatusesM",
  () => []
);

/**
 * contacts.getContacts:contacts.getContacts contacts.Contacts
 * #c023849f:3223553183:-1071414113
 * hash:int
 */
export interface ContactsGetContactsM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetContactsM = r<new () => ContactsGetContactsM>(
  0xc023849f,
  "ContactsGetContactsM",
  () => ["hash", IntRW]
);

/**
 * contacts.importContacts:contacts.importContacts contacts.ImportedContacts
 * #2c800be5:746589157:746589157
 * contacts:Vector<InputContact>
 */
export interface ContactsImportContactsM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputContactT>];

  get_contacts(): VectorS<InputContactT>;
  set_contacts(val: VectorS<InputContactT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsImportContactsM = r<new () => ContactsImportContactsM>(
  0x2c800be5,
  "ContactsImportContactsM",
  () => ["contacts", VectorRW(TypeRW(InputContactT))]
);

/**
 * contacts.deleteByPhones:contacts.deleteByPhones Bool
 * #1013fd9e:269745566:269745566
 * phones:Vector<string>
 */
export interface ContactsDeleteByPhonesM {
  _id: number;
  _method(): void;
  _values: [VectorS<string>];

  get_phones(): VectorS<string>;
  set_phones(val: VectorS<string>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsDeleteByPhonesM = r<new () => ContactsDeleteByPhonesM>(
  0x1013fd9e,
  "ContactsDeleteByPhonesM",
  () => ["phones", VectorRW(StringRW)]
);

/**
 * contacts.getBlocked:contacts.getBlocked contacts.Blocked
 * #f57c350f:4118557967:-176409329
 * offset:int
 * limit:int
 */
export interface ContactsGetBlockedM {
  _id: number;
  _method(): void;
  _values: [number, number];

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetBlockedM = r<new () => ContactsGetBlockedM>(
  0xf57c350f,
  "ContactsGetBlockedM",
  () => ["offset", IntRW, "limit", IntRW]
);

/**
 * messages.getMessages:messages.getMessages messages.Messages
 * #63c66506:1673946374:1673946374
 * id:Vector<InputMessage>
 */
export interface MessagesGetMessagesM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputMessageT>];

  get_id(): VectorS<InputMessageT>;
  set_id(val: VectorS<InputMessageT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetMessagesM = r<new () => MessagesGetMessagesM>(
  0x63c66506,
  "MessagesGetMessagesM",
  () => ["id", VectorRW(TypeRW(InputMessageT))]
);

/**
 * messages.deleteMessages:messages.deleteMessages messages.AffectedMessages
 * #e58e95d2:3851326930:-443640366
 * flags:#
 * revoke:flags.0?true
 * id:Vector<int>
 */
export interface MessagesDeleteMessagesM {
  _id: number;
  _method(): void;
  _values: [number, true, VectorS<number>];

  get_flags(): number;
  set_flags(val: number): this;

  get_revoke(): true;
  set_revoke(val: true): this;

  has_revoke(): boolean;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDeleteMessagesM = r<new () => MessagesDeleteMessagesM>(
  0xe58e95d2,
  "MessagesDeleteMessagesM",
  () => [
    "flags",
    IntRW,
    "revoke",
    Optional(TrueRW, 0, 0),
    "id",
    VectorRW(IntRW)
  ]
);

/**
 * messages.receivedMessages:messages.receivedMessages Vector<ReceivedNotifyMessage>
 * #5a954c0:94983360:94983360
 * max_id:int
 */
export interface MessagesReceivedMessagesM {
  _id: number;
  _method(): void;
  _values: [number];

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReceivedMessagesM = r<new () => MessagesReceivedMessagesM>(
  0x5a954c0,
  "MessagesReceivedMessagesM",
  () => ["max_id", IntRW]
);

/**
 * messages.getChats:messages.getChats messages.Chats
 * #3c6aa187:1013621127:1013621127
 * id:Vector<int>
 */
export interface MessagesGetChatsM {
  _id: number;
  _method(): void;
  _values: [VectorS<number>];

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetChatsM = r<new () => MessagesGetChatsM>(
  0x3c6aa187,
  "MessagesGetChatsM",
  () => ["id", VectorRW(IntRW)]
);

/**
 * messages.getFullChat:messages.getFullChat messages.ChatFull
 * #3b831c66:998448230:998448230
 * chat_id:int
 */
export interface MessagesGetFullChatM {
  _id: number;
  _method(): void;
  _values: [number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetFullChatM = r<new () => MessagesGetFullChatM>(
  0x3b831c66,
  "MessagesGetFullChatM",
  () => ["chat_id", IntRW]
);

/**
 * messages.editChatTitle:messages.editChatTitle Updates
 * #dc452855:3695519829:-599447467
 * chat_id:int
 * title:string
 */
export interface MessagesEditChatTitleM {
  _id: number;
  _method(): void;
  _values: [number, string];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditChatTitleM = r<new () => MessagesEditChatTitleM>(
  0xdc452855,
  "MessagesEditChatTitleM",
  () => ["chat_id", IntRW, "title", StringRW]
);

/**
 * updates.getState:updates.getState updates.State
 * #edd4882a:3990128682:-304838614
 *
 */
export interface UpdatesGetStateM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesGetStateM = r<new () => UpdatesGetStateM>(
  0xedd4882a,
  "UpdatesGetStateM",
  () => []
);

/**
 * updates.getDifference:updates.getDifference updates.Difference
 * #25939651:630429265:630429265
 * flags:#
 * pts:int
 * pts_total_limit:flags.0?int
 * date:int
 * qts:int
 */
export interface UpdatesGetDifferenceM {
  _id: number;
  _method(): void;
  _values: [number, number, number, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_total_limit(): number;
  set_pts_total_limit(val: number): this;

  has_pts_total_limit(): boolean;

  get_date(): number;
  set_date(val: number): this;

  get_qts(): number;
  set_qts(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesGetDifferenceM = r<new () => UpdatesGetDifferenceM>(
  0x25939651,
  "UpdatesGetDifferenceM",
  () => [
    "flags",
    IntRW,
    "pts",
    IntRW,
    "pts_total_limit",
    Optional(IntRW, 0, 0),
    "date",
    IntRW,
    "qts",
    IntRW
  ]
);

/**
 * photos.updateProfilePhoto:photos.updateProfilePhoto UserProfilePhoto
 * #f0bb5152:4038807890:-256159406
 * id:InputPhoto
 */
export interface PhotosUpdateProfilePhotoM {
  _id: number;
  _method(): void;
  _values: [InputPhotoT];

  get_id(): InputPhotoT;
  set_id(val: InputPhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosUpdateProfilePhotoM = r<new () => PhotosUpdateProfilePhotoM>(
  0xf0bb5152,
  "PhotosUpdateProfilePhotoM",
  () => ["id", TypeRW(InputPhotoT)]
);

/**
 * photos.uploadProfilePhoto:photos.uploadProfilePhoto photos.Photo
 * #4f32c098:1328726168:1328726168
 * file:InputFile
 */
export interface PhotosUploadProfilePhotoM {
  _id: number;
  _method(): void;
  _values: [InputFileT];

  get_file(): InputFileT;
  set_file(val: InputFileT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosUploadProfilePhotoM = r<new () => PhotosUploadProfilePhotoM>(
  0x4f32c098,
  "PhotosUploadProfilePhotoM",
  () => ["file", TypeRW(InputFileT)]
);

/**
 * photos.deletePhotos:photos.deletePhotos Vector<long>
 * #87cf7f2f:2278522671:-2016444625
 * id:Vector<InputPhoto>
 */
export interface PhotosDeletePhotosM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputPhotoT>];

  get_id(): VectorS<InputPhotoT>;
  set_id(val: VectorS<InputPhotoT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosDeletePhotosM = r<new () => PhotosDeletePhotosM>(
  0x87cf7f2f,
  "PhotosDeletePhotosM",
  () => ["id", VectorRW(TypeRW(InputPhotoT))]
);

/**
 * upload.saveFilePart:upload.saveFilePart Bool
 * #b304a621:3003426337:-1291540959
 * file_id:long
 * file_part:int
 * bytes:bytes
 */
export interface UploadSaveFilePartM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, number, Uint8Array];

  get_file_id(): ProtoLong;
  set_file_id(val: ProtoLong): this;

  get_file_part(): number;
  set_file_part(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadSaveFilePartM = r<new () => UploadSaveFilePartM>(
  0xb304a621,
  "UploadSaveFilePartM",
  () => ["file_id", LongRW, "file_part", IntRW, "bytes", BytesRW]
);

/**
 * help.getConfig:help.getConfig Config
 * #c4f9186b:3304659051:-990308245
 *
 */
export interface HelpGetConfigM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetConfigM = r<new () => HelpGetConfigM>(
  0xc4f9186b,
  "HelpGetConfigM",
  () => []
);

/**
 * help.getNearestDc:help.getNearestDc NearestDc
 * #1fb33026:531836966:531836966
 *
 */
export interface HelpGetNearestDcM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetNearestDcM = r<new () => HelpGetNearestDcM>(
  0x1fb33026,
  "HelpGetNearestDcM",
  () => []
);

/**
 * help.getAppUpdate:help.getAppUpdate help.AppUpdate
 * #522d5a7d:1378703997:1378703997
 * source:string
 */
export interface HelpGetAppUpdateM {
  _id: number;
  _method(): void;
  _values: [string];

  get_source(): string;
  set_source(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetAppUpdateM = r<new () => HelpGetAppUpdateM>(
  0x522d5a7d,
  "HelpGetAppUpdateM",
  () => ["source", StringRW]
);

/**
 * help.getInviteText:help.getInviteText help.InviteText
 * #4d392343:1295590211:1295590211
 *
 */
export interface HelpGetInviteTextM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetInviteTextM = r<new () => HelpGetInviteTextM>(
  0x4d392343,
  "HelpGetInviteTextM",
  () => []
);

/**
 * messages.getDhConfig:messages.getDhConfig messages.DhConfig
 * #26cf8950:651135312:651135312
 * version:int
 * random_length:int
 */
export interface MessagesGetDhConfigM {
  _id: number;
  _method(): void;
  _values: [number, number];

  get_version(): number;
  set_version(val: number): this;

  get_random_length(): number;
  set_random_length(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetDhConfigM = r<new () => MessagesGetDhConfigM>(
  0x26cf8950,
  "MessagesGetDhConfigM",
  () => ["version", IntRW, "random_length", IntRW]
);

/**
 * messages.acceptEncryption:messages.acceptEncryption EncryptedChat
 * #3dbc0415:1035731989:1035731989
 * peer:InputEncryptedChat
 * g_b:bytes
 * key_fingerprint:long
 */
export interface MessagesAcceptEncryptionM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, Uint8Array, ProtoLong];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_g_b(): Uint8Array;
  set_g_b(val: Uint8Array): this;

  get_key_fingerprint(): ProtoLong;
  set_key_fingerprint(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAcceptEncryptionM = r<new () => MessagesAcceptEncryptionM>(
  0x3dbc0415,
  "MessagesAcceptEncryptionM",
  () => [
    "peer",
    TypeRW(InputEncryptedChatS),
    "g_b",
    BytesRW,
    "key_fingerprint",
    LongRW
  ]
);

/**
 * messages.discardEncryption:messages.discardEncryption Bool
 * #edd923c5:3990430661:-304536635
 * chat_id:int
 */
export interface MessagesDiscardEncryptionM {
  _id: number;
  _method(): void;
  _values: [number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDiscardEncryptionM = r<new () => MessagesDiscardEncryptionM>(
  0xedd923c5,
  "MessagesDiscardEncryptionM",
  () => ["chat_id", IntRW]
);

/**
 * messages.setEncryptedTyping:messages.setEncryptedTyping Bool
 * #791451ed:2031374829:2031374829
 * peer:InputEncryptedChat
 * typing:Bool
 */
export interface MessagesSetEncryptedTypingM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, BoolT];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_typing(): BoolT;
  set_typing(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetEncryptedTypingM = r<
  new () => MessagesSetEncryptedTypingM
>(0x791451ed, "MessagesSetEncryptedTypingM", () => [
  "peer",
  TypeRW(InputEncryptedChatS),
  "typing",
  TypeRW(BoolT)
]);

/**
 * messages.readEncryptedHistory:messages.readEncryptedHistory Bool
 * #7f4b690a:2135648522:2135648522
 * peer:InputEncryptedChat
 * max_date:int
 */
export interface MessagesReadEncryptedHistoryM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, number];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_max_date(): number;
  set_max_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReadEncryptedHistoryM = r<
  new () => MessagesReadEncryptedHistoryM
>(0x7f4b690a, "MessagesReadEncryptedHistoryM", () => [
  "peer",
  TypeRW(InputEncryptedChatS),
  "max_date",
  IntRW
]);

/**
 * messages.sendEncrypted:messages.sendEncrypted messages.SentEncryptedMessage
 * #a9776773:2843174771:-1451792525
 * peer:InputEncryptedChat
 * random_id:long
 * data:bytes
 */
export interface MessagesSendEncryptedM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, ProtoLong, Uint8Array];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendEncryptedM = r<new () => MessagesSendEncryptedM>(
  0xa9776773,
  "MessagesSendEncryptedM",
  () => [
    "peer",
    TypeRW(InputEncryptedChatS),
    "random_id",
    LongRW,
    "data",
    BytesRW
  ]
);

/**
 * messages.sendEncryptedFile:messages.sendEncryptedFile messages.SentEncryptedMessage
 * #9a901b66:2593135462:-1701831834
 * peer:InputEncryptedChat
 * random_id:long
 * data:bytes
 * file:InputEncryptedFile
 */
export interface MessagesSendEncryptedFileM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, ProtoLong, Uint8Array, InputEncryptedFileT];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  get_file(): InputEncryptedFileT;
  set_file(val: InputEncryptedFileT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendEncryptedFileM = r<new () => MessagesSendEncryptedFileM>(
  0x9a901b66,
  "MessagesSendEncryptedFileM",
  () => [
    "peer",
    TypeRW(InputEncryptedChatS),
    "random_id",
    LongRW,
    "data",
    BytesRW,
    "file",
    TypeRW(InputEncryptedFileT)
  ]
);

/**
 * messages.sendEncryptedService:messages.sendEncryptedService messages.SentEncryptedMessage
 * #32d439a4:852769188:852769188
 * peer:InputEncryptedChat
 * random_id:long
 * data:bytes
 */
export interface MessagesSendEncryptedServiceM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, ProtoLong, Uint8Array];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendEncryptedServiceM = r<
  new () => MessagesSendEncryptedServiceM
>(0x32d439a4, "MessagesSendEncryptedServiceM", () => [
  "peer",
  TypeRW(InputEncryptedChatS),
  "random_id",
  LongRW,
  "data",
  BytesRW
]);

/**
 * messages.receivedQueue:messages.receivedQueue Vector<long>
 * #55a5bb66:1436924774:1436924774
 * max_qts:int
 */
export interface MessagesReceivedQueueM {
  _id: number;
  _method(): void;
  _values: [number];

  get_max_qts(): number;
  set_max_qts(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReceivedQueueM = r<new () => MessagesReceivedQueueM>(
  0x55a5bb66,
  "MessagesReceivedQueueM",
  () => ["max_qts", IntRW]
);

/**
 * messages.reportEncryptedSpam:messages.reportEncryptedSpam Bool
 * #4b0c8c0f:1259113487:1259113487
 * peer:InputEncryptedChat
 */
export interface MessagesReportEncryptedSpamM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReportEncryptedSpamM = r<
  new () => MessagesReportEncryptedSpamM
>(0x4b0c8c0f, "MessagesReportEncryptedSpamM", () => [
  "peer",
  TypeRW(InputEncryptedChatS)
]);

/**
 * upload.saveBigFilePart:upload.saveBigFilePart Bool
 * #de7b673d:3732629309:-562337987
 * file_id:long
 * file_part:int
 * file_total_parts:int
 * bytes:bytes
 */
export interface UploadSaveBigFilePartM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, number, number, Uint8Array];

  get_file_id(): ProtoLong;
  set_file_id(val: ProtoLong): this;

  get_file_part(): number;
  set_file_part(val: number): this;

  get_file_total_parts(): number;
  set_file_total_parts(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadSaveBigFilePartM = r<new () => UploadSaveBigFilePartM>(
  0xde7b673d,
  "UploadSaveBigFilePartM",
  () => [
    "file_id",
    LongRW,
    "file_part",
    IntRW,
    "file_total_parts",
    IntRW,
    "bytes",
    BytesRW
  ]
);

/**
 * initConnection:initConnection X
 * #785188b8:2018609336:2018609336
 * flags:#
 * api_id:int
 * device_model:string
 * system_version:string
 * app_version:string
 * system_lang_code:string
 * lang_pack:string
 * lang_code:string
 * proxy:flags.0?InputClientProxy
 * query:!X
 */
export interface InitConnectionM {
  _id: number;
  _method(): void;
  _values: [
    number,
    number,
    string,
    string,
    string,
    string,
    string,
    string,
    InputClientProxyS,
    TMethod
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_api_id(): number;
  set_api_id(val: number): this;

  get_device_model(): string;
  set_device_model(val: string): this;

  get_system_version(): string;
  set_system_version(val: string): this;

  get_app_version(): string;
  set_app_version(val: string): this;

  get_system_lang_code(): string;
  set_system_lang_code(val: string): this;

  get_lang_pack(): string;
  set_lang_pack(val: string): this;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_proxy(): InputClientProxyS;
  set_proxy(val: InputClientProxyS): this;

  has_proxy(): boolean;

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InitConnectionM = r<new () => InitConnectionM>(
  0x785188b8,
  "InitConnectionM",
  () => [
    "flags",
    IntRW,
    "api_id",
    IntRW,
    "device_model",
    StringRW,
    "system_version",
    StringRW,
    "app_version",
    StringRW,
    "system_lang_code",
    StringRW,
    "lang_pack",
    StringRW,
    "lang_code",
    StringRW,
    "proxy",
    Optional(TypeRW(InputClientProxyS), 0, 0),
    "query",
    OneOfRW
  ]
);

/**
 * help.getSupport:help.getSupport help.Support
 * #9cdf08cd:2631862477:-1663104819
 *
 */
export interface HelpGetSupportM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetSupportM = r<new () => HelpGetSupportM>(
  0x9cdf08cd,
  "HelpGetSupportM",
  () => []
);

/**
 * messages.readMessageContents:messages.readMessageContents messages.AffectedMessages
 * #36a73f77:916930423:916930423
 * id:Vector<int>
 */
export interface MessagesReadMessageContentsM {
  _id: number;
  _method(): void;
  _values: [VectorS<number>];

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReadMessageContentsM = r<
  new () => MessagesReadMessageContentsM
>(0x36a73f77, "MessagesReadMessageContentsM", () => ["id", VectorRW(IntRW)]);

/**
 * account.checkUsername:account.checkUsername Bool
 * #2714d86c:655677548:655677548
 * username:string
 */
export interface AccountCheckUsernameM {
  _id: number;
  _method(): void;
  _values: [string];

  get_username(): string;
  set_username(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountCheckUsernameM = r<new () => AccountCheckUsernameM>(
  0x2714d86c,
  "AccountCheckUsernameM",
  () => ["username", StringRW]
);

/**
 * account.updateUsername:account.updateUsername User
 * #3e0bdd7c:1040964988:1040964988
 * username:string
 */
export interface AccountUpdateUsernameM {
  _id: number;
  _method(): void;
  _values: [string];

  get_username(): string;
  set_username(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdateUsernameM = r<new () => AccountUpdateUsernameM>(
  0x3e0bdd7c,
  "AccountUpdateUsernameM",
  () => ["username", StringRW]
);

/**
 * contacts.search:contacts.search contacts.Found
 * #11f812d8:301470424:301470424
 * q:string
 * limit:int
 */
export interface ContactsSearchM {
  _id: number;
  _method(): void;
  _values: [string, number];

  get_q(): string;
  set_q(val: string): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsSearchM = r<new () => ContactsSearchM>(
  0x11f812d8,
  "ContactsSearchM",
  () => ["q", StringRW, "limit", IntRW]
);

/**
 * account.getPrivacy:account.getPrivacy account.PrivacyRules
 * #dadbc950:3671837008:-623130288
 * key:InputPrivacyKey
 */
export interface AccountGetPrivacyM {
  _id: number;
  _method(): void;
  _values: [InputPrivacyKeyT];

  get_key(): InputPrivacyKeyT;
  set_key(val: InputPrivacyKeyT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetPrivacyM = r<new () => AccountGetPrivacyM>(
  0xdadbc950,
  "AccountGetPrivacyM",
  () => ["key", TypeRW(InputPrivacyKeyT)]
);

/**
 * account.deleteAccount:account.deleteAccount Bool
 * #418d4e0b:1099779595:1099779595
 * reason:string
 */
export interface AccountDeleteAccountM {
  _id: number;
  _method(): void;
  _values: [string];

  get_reason(): string;
  set_reason(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountDeleteAccountM = r<new () => AccountDeleteAccountM>(
  0x418d4e0b,
  "AccountDeleteAccountM",
  () => ["reason", StringRW]
);

/**
 * account.getAccountTTL:account.getAccountTTL AccountDaysTTL
 * #8fc711d:150761757:150761757
 *
 */
export interface AccountGetAccountTtlM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetAccountTtlM = r<new () => AccountGetAccountTtlM>(
  0x8fc711d,
  "AccountGetAccountTtlM",
  () => []
);

/**
 * account.setAccountTTL:account.setAccountTTL Bool
 * #2442485e:608323678:608323678
 * ttl:AccountDaysTTL
 */
export interface AccountSetAccountTtlM {
  _id: number;
  _method(): void;
  _values: [AccountDaysTtlS];

  get_ttl(): AccountDaysTtlS;
  set_ttl(val: AccountDaysTtlS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSetAccountTtlM = r<new () => AccountSetAccountTtlM>(
  0x2442485e,
  "AccountSetAccountTtlM",
  () => ["ttl", TypeRW(AccountDaysTtlS)]
);

/**
 * invokeWithLayer:invokeWithLayer X
 * #da9b0d0d:3667594509:-627372787
 * layer:int
 * query:!X
 */
export interface InvokeWithLayerM {
  _id: number;
  _method(): void;
  _values: [number, TMethod];

  get_layer(): number;
  set_layer(val: number): this;

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvokeWithLayerM = r<new () => InvokeWithLayerM>(
  0xda9b0d0d,
  "InvokeWithLayerM",
  () => ["layer", IntRW, "query", OneOfRW]
);

/**
 * contacts.resolveUsername:contacts.resolveUsername contacts.ResolvedPeer
 * #f93ccba3:4181511075:-113456221
 * username:string
 */
export interface ContactsResolveUsernameM {
  _id: number;
  _method(): void;
  _values: [string];

  get_username(): string;
  set_username(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsResolveUsernameM = r<new () => ContactsResolveUsernameM>(
  0xf93ccba3,
  "ContactsResolveUsernameM",
  () => ["username", StringRW]
);

/**
 * account.sendChangePhoneCode:account.sendChangePhoneCode auth.SentCode
 * #82574ae5:2186758885:-2108208411
 * phone_number:string
 * settings:CodeSettings
 */
export interface AccountSendChangePhoneCodeM {
  _id: number;
  _method(): void;
  _values: [string, CodeSettingsS];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_settings(): CodeSettingsS;
  set_settings(val: CodeSettingsS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSendChangePhoneCodeM = r<
  new () => AccountSendChangePhoneCodeM
>(0x82574ae5, "AccountSendChangePhoneCodeM", () => [
  "phone_number",
  StringRW,
  "settings",
  TypeRW(CodeSettingsS)
]);

/**
 * account.changePhone:account.changePhone User
 * #70c32edb:1891839707:1891839707
 * phone_number:string
 * phone_code_hash:string
 * phone_code:string
 */
export interface AccountChangePhoneM {
  _id: number;
  _method(): void;
  _values: [string, string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  get_phone_code(): string;
  set_phone_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountChangePhoneM = r<new () => AccountChangePhoneM>(
  0x70c32edb,
  "AccountChangePhoneM",
  () => [
    "phone_number",
    StringRW,
    "phone_code_hash",
    StringRW,
    "phone_code",
    StringRW
  ]
);

/**
 * messages.getStickers:messages.getStickers messages.Stickers
 * #43d4f2c:71126828:71126828
 * emoticon:string
 * hash:int
 */
export interface MessagesGetStickersM {
  _id: number;
  _method(): void;
  _values: [string, number];

  get_emoticon(): string;
  set_emoticon(val: string): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetStickersM = r<new () => MessagesGetStickersM>(
  0x43d4f2c,
  "MessagesGetStickersM",
  () => ["emoticon", StringRW, "hash", IntRW]
);

/**
 * messages.getAllStickers:messages.getAllStickers messages.AllStickers
 * #1c9618b1:479598769:479598769
 * hash:int
 */
export interface MessagesGetAllStickersM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetAllStickersM = r<new () => MessagesGetAllStickersM>(
  0x1c9618b1,
  "MessagesGetAllStickersM",
  () => ["hash", IntRW]
);

/**
 * account.updateDeviceLocked:account.updateDeviceLocked Bool
 * #38df3532:954152242:954152242
 * period:int
 */
export interface AccountUpdateDeviceLockedM {
  _id: number;
  _method(): void;
  _values: [number];

  get_period(): number;
  set_period(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdateDeviceLockedM = r<new () => AccountUpdateDeviceLockedM>(
  0x38df3532,
  "AccountUpdateDeviceLockedM",
  () => ["period", IntRW]
);

/**
 * auth.importBotAuthorization:auth.importBotAuthorization auth.Authorization
 * #67a3ff2c:1738800940:1738800940
 * flags:int
 * api_id:int
 * api_hash:string
 * bot_auth_token:string
 */
export interface AuthImportBotAuthorizationM {
  _id: number;
  _method(): void;
  _values: [number, number, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_api_id(): number;
  set_api_id(val: number): this;

  get_api_hash(): string;
  set_api_hash(val: string): this;

  get_bot_auth_token(): string;
  set_bot_auth_token(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthImportBotAuthorizationM = r<
  new () => AuthImportBotAuthorizationM
>(0x67a3ff2c, "AuthImportBotAuthorizationM", () => [
  "flags",
  IntRW,
  "api_id",
  IntRW,
  "api_hash",
  StringRW,
  "bot_auth_token",
  StringRW
]);

/**
 * account.getAuthorizations:account.getAuthorizations account.Authorizations
 * #e320c158:3810574680:-484392616
 *
 */
export interface AccountGetAuthorizationsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetAuthorizationsM = r<new () => AccountGetAuthorizationsM>(
  0xe320c158,
  "AccountGetAuthorizationsM",
  () => []
);

/**
 * account.resetAuthorization:account.resetAuthorization Bool
 * #df77f3bc:3749180348:-545786948
 * hash:long
 */
export interface AccountResetAuthorizationM {
  _id: number;
  _method(): void;
  _values: [ProtoLong];

  get_hash(): ProtoLong;
  set_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountResetAuthorizationM = r<new () => AccountResetAuthorizationM>(
  0xdf77f3bc,
  "AccountResetAuthorizationM",
  () => ["hash", LongRW]
);

/**
 * account.getPassword:account.getPassword account.Password
 * #548a30f5:1418342645:1418342645
 *
 */
export interface AccountGetPasswordM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetPasswordM = r<new () => AccountGetPasswordM>(
  0x548a30f5,
  "AccountGetPasswordM",
  () => []
);

/**
 * account.getPasswordSettings:account.getPasswordSettings account.PasswordSettings
 * #9cd4eaf9:2631199481:-1663767815
 * password:InputCheckPasswordSRP
 */
export interface AccountGetPasswordSettingsM {
  _id: number;
  _method(): void;
  _values: [InputCheckPasswordSrpT];

  get_password(): InputCheckPasswordSrpT;
  set_password(val: InputCheckPasswordSrpT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetPasswordSettingsM = r<
  new () => AccountGetPasswordSettingsM
>(0x9cd4eaf9, "AccountGetPasswordSettingsM", () => [
  "password",
  TypeRW(InputCheckPasswordSrpT)
]);

/**
 * auth.checkPassword:auth.checkPassword auth.Authorization
 * #d18b4d16:3515567382:-779399914
 * password:InputCheckPasswordSRP
 */
export interface AuthCheckPasswordM {
  _id: number;
  _method(): void;
  _values: [InputCheckPasswordSrpT];

  get_password(): InputCheckPasswordSrpT;
  set_password(val: InputCheckPasswordSrpT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthCheckPasswordM = r<new () => AuthCheckPasswordM>(
  0xd18b4d16,
  "AuthCheckPasswordM",
  () => ["password", TypeRW(InputCheckPasswordSrpT)]
);

/**
 * auth.requestPasswordRecovery:auth.requestPasswordRecovery auth.PasswordRecovery
 * #d897bc66:3633822822:-661144474
 *
 */
export interface AuthRequestPasswordRecoveryM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthRequestPasswordRecoveryM = r<
  new () => AuthRequestPasswordRecoveryM
>(0xd897bc66, "AuthRequestPasswordRecoveryM", () => []);

/**
 * auth.recoverPassword:auth.recoverPassword auth.Authorization
 * #4ea56e92:1319464594:1319464594
 * code:string
 */
export interface AuthRecoverPasswordM {
  _id: number;
  _method(): void;
  _values: [string];

  get_code(): string;
  set_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthRecoverPasswordM = r<new () => AuthRecoverPasswordM>(
  0x4ea56e92,
  "AuthRecoverPasswordM",
  () => ["code", StringRW]
);

/**
 * invokeWithoutUpdates:invokeWithoutUpdates X
 * #bf9459b7:3214170551:-1080796745
 * query:!X
 */
export interface InvokeWithoutUpdatesM {
  _id: number;
  _method(): void;
  _values: [TMethod];

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvokeWithoutUpdatesM = r<new () => InvokeWithoutUpdatesM>(
  0xbf9459b7,
  "InvokeWithoutUpdatesM",
  () => ["query", OneOfRW]
);

/**
 * messages.checkChatInvite:messages.checkChatInvite ChatInvite
 * #3eadb1bb:1051570619:1051570619
 * hash:string
 */
export interface MessagesCheckChatInviteM {
  _id: number;
  _method(): void;
  _values: [string];

  get_hash(): string;
  set_hash(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesCheckChatInviteM = r<new () => MessagesCheckChatInviteM>(
  0x3eadb1bb,
  "MessagesCheckChatInviteM",
  () => ["hash", StringRW]
);

/**
 * messages.importChatInvite:messages.importChatInvite Updates
 * #6c50051c:1817183516:1817183516
 * hash:string
 */
export interface MessagesImportChatInviteM {
  _id: number;
  _method(): void;
  _values: [string];

  get_hash(): string;
  set_hash(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesImportChatInviteM = r<new () => MessagesImportChatInviteM>(
  0x6c50051c,
  "MessagesImportChatInviteM",
  () => ["hash", StringRW]
);

/**
 * messages.getStickerSet:messages.getStickerSet messages.StickerSet
 * #2619a90e:639215886:639215886
 * stickerset:InputStickerSet
 */
export interface MessagesGetStickerSetM {
  _id: number;
  _method(): void;
  _values: [InputStickerSetT];

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetStickerSetM = r<new () => MessagesGetStickerSetM>(
  0x2619a90e,
  "MessagesGetStickerSetM",
  () => ["stickerset", TypeRW(InputStickerSetT)]
);

/**
 * messages.installStickerSet:messages.installStickerSet messages.StickerSetInstallResult
 * #c78fe460:3348096096:-946871200
 * stickerset:InputStickerSet
 * archived:Bool
 */
export interface MessagesInstallStickerSetM {
  _id: number;
  _method(): void;
  _values: [InputStickerSetT, BoolT];

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  get_archived(): BoolT;
  set_archived(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesInstallStickerSetM = r<new () => MessagesInstallStickerSetM>(
  0xc78fe460,
  "MessagesInstallStickerSetM",
  () => ["stickerset", TypeRW(InputStickerSetT), "archived", TypeRW(BoolT)]
);

/**
 * messages.uninstallStickerSet:messages.uninstallStickerSet Bool
 * #f96e55de:4184757726:-110209570
 * stickerset:InputStickerSet
 */
export interface MessagesUninstallStickerSetM {
  _id: number;
  _method(): void;
  _values: [InputStickerSetT];

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesUninstallStickerSetM = r<
  new () => MessagesUninstallStickerSetM
>(0xf96e55de, "MessagesUninstallStickerSetM", () => [
  "stickerset",
  TypeRW(InputStickerSetT)
]);

/**
 * help.getAppChangelog:help.getAppChangelog Updates
 * #9010ef6f:2417028975:-1877938321
 * prev_app_version:string
 */
export interface HelpGetAppChangelogM {
  _id: number;
  _method(): void;
  _values: [string];

  get_prev_app_version(): string;
  set_prev_app_version(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetAppChangelogM = r<new () => HelpGetAppChangelogM>(
  0x9010ef6f,
  "HelpGetAppChangelogM",
  () => ["prev_app_version", StringRW]
);

/**
 * channels.createChannel:channels.createChannel Updates
 * #3d5fb10f:1029681423:1029681423
 * flags:#
 * broadcast:flags.0?true
 * megagroup:flags.1?true
 * title:string
 * about:string
 * geo_point:flags.2?InputGeoPoint
 * address:flags.2?string
 */
export interface ChannelsCreateChannelM {
  _id: number;
  _method(): void;
  _values: [number, true, true, string, string, InputGeoPointT, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_broadcast(): true;
  set_broadcast(val: true): this;

  has_broadcast(): boolean;

  get_megagroup(): true;
  set_megagroup(val: true): this;

  has_megagroup(): boolean;

  get_title(): string;
  set_title(val: string): this;

  get_about(): string;
  set_about(val: string): this;

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  has_geo_point(): boolean;

  get_address(): string;
  set_address(val: string): this;

  has_address(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsCreateChannelM = r<new () => ChannelsCreateChannelM>(
  0x3d5fb10f,
  "ChannelsCreateChannelM",
  () => [
    "flags",
    IntRW,
    "broadcast",
    Optional(TrueRW, 0, 0),
    "megagroup",
    Optional(TrueRW, 0, 1),
    "title",
    StringRW,
    "about",
    StringRW,
    "geo_point",
    Optional(TypeRW(InputGeoPointT), 0, 2),
    "address",
    Optional(StringRW, 0, 2)
  ]
);

/**
 * messages.migrateChat:messages.migrateChat Updates
 * #15a3b8e3:363051235:363051235
 * chat_id:int
 */
export interface MessagesMigrateChatM {
  _id: number;
  _method(): void;
  _values: [number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesMigrateChatM = r<new () => MessagesMigrateChatM>(
  0x15a3b8e3,
  "MessagesMigrateChatM",
  () => ["chat_id", IntRW]
);

/**
 * messages.reorderStickerSets:messages.reorderStickerSets Bool
 * #78337739:2016638777:2016638777
 * flags:#
 * masks:flags.0?true
 * order:Vector<long>
 */
export interface MessagesReorderStickerSetsM {
  _id: number;
  _method(): void;
  _values: [number, true, VectorS<ProtoLong>];

  get_flags(): number;
  set_flags(val: number): this;

  get_masks(): true;
  set_masks(val: true): this;

  has_masks(): boolean;

  get_order(): VectorS<ProtoLong>;
  set_order(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReorderStickerSetsM = r<
  new () => MessagesReorderStickerSetsM
>(0x78337739, "MessagesReorderStickerSetsM", () => [
  "flags",
  IntRW,
  "masks",
  Optional(TrueRW, 0, 0),
  "order",
  VectorRW(LongRW)
]);

/**
 * messages.getDocumentByHash:messages.getDocumentByHash Document
 * #338e2464:864953444:864953444
 * sha256:bytes
 * size:int
 * mime_type:string
 */
export interface MessagesGetDocumentByHashM {
  _id: number;
  _method(): void;
  _values: [Uint8Array, number, string];

  get_sha256(): Uint8Array;
  set_sha256(val: Uint8Array): this;

  get_size(): number;
  set_size(val: number): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetDocumentByHashM = r<new () => MessagesGetDocumentByHashM>(
  0x338e2464,
  "MessagesGetDocumentByHashM",
  () => ["sha256", BytesRW, "size", IntRW, "mime_type", StringRW]
);

/**
 * messages.searchGifs:messages.searchGifs messages.FoundGifs
 * #bf9a776b:3214571371:-1080395925
 * q:string
 * offset:int
 */
export interface MessagesSearchGifsM {
  _id: number;
  _method(): void;
  _values: [string, number];

  get_q(): string;
  set_q(val: string): this;

  get_offset(): number;
  set_offset(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSearchGifsM = r<new () => MessagesSearchGifsM>(
  0xbf9a776b,
  "MessagesSearchGifsM",
  () => ["q", StringRW, "offset", IntRW]
);

/**
 * messages.getSavedGifs:messages.getSavedGifs messages.SavedGifs
 * #83bf3d52:2210348370:-2084618926
 * hash:int
 */
export interface MessagesGetSavedGifsM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetSavedGifsM = r<new () => MessagesGetSavedGifsM>(
  0x83bf3d52,
  "MessagesGetSavedGifsM",
  () => ["hash", IntRW]
);

/**
 * messages.saveGif:messages.saveGif Bool
 * #327a30cb:846868683:846868683
 * id:InputDocument
 * unsave:Bool
 */
export interface MessagesSaveGifM {
  _id: number;
  _method(): void;
  _values: [InputDocumentT, BoolT];

  get_id(): InputDocumentT;
  set_id(val: InputDocumentT): this;

  get_unsave(): BoolT;
  set_unsave(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSaveGifM = r<new () => MessagesSaveGifM>(
  0x327a30cb,
  "MessagesSaveGifM",
  () => ["id", TypeRW(InputDocumentT), "unsave", TypeRW(BoolT)]
);

/**
 * auth.resendCode:auth.resendCode auth.SentCode
 * #3ef1a9bf:1056025023:1056025023
 * phone_number:string
 * phone_code_hash:string
 */
export interface AuthResendCodeM {
  _id: number;
  _method(): void;
  _values: [string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthResendCodeM = r<new () => AuthResendCodeM>(
  0x3ef1a9bf,
  "AuthResendCodeM",
  () => ["phone_number", StringRW, "phone_code_hash", StringRW]
);

/**
 * auth.cancelCode:auth.cancelCode Bool
 * #1f040578:520357240:520357240
 * phone_number:string
 * phone_code_hash:string
 */
export interface AuthCancelCodeM {
  _id: number;
  _method(): void;
  _values: [string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthCancelCodeM = r<new () => AuthCancelCodeM>(
  0x1f040578,
  "AuthCancelCodeM",
  () => ["phone_number", StringRW, "phone_code_hash", StringRW]
);

/**
 * messages.setBotCallbackAnswer:messages.setBotCallbackAnswer Bool
 * #d58f130a:3582923530:-712043766
 * flags:#
 * alert:flags.1?true
 * query_id:long
 * message:flags.0?string
 * url:flags.2?string
 * cache_time:int
 */
export interface MessagesSetBotCallbackAnswerM {
  _id: number;
  _method(): void;
  _values: [number, true, ProtoLong, string, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_alert(): true;
  set_alert(val: true): this;

  has_alert(): boolean;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_message(): string;
  set_message(val: string): this;

  has_message(): boolean;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  get_cache_time(): number;
  set_cache_time(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetBotCallbackAnswerM = r<
  new () => MessagesSetBotCallbackAnswerM
>(0xd58f130a, "MessagesSetBotCallbackAnswerM", () => [
  "flags",
  IntRW,
  "alert",
  Optional(TrueRW, 0, 1),
  "query_id",
  LongRW,
  "message",
  Optional(StringRW, 0, 0),
  "url",
  Optional(StringRW, 0, 2),
  "cache_time",
  IntRW
]);

/**
 * contacts.getTopPeers:contacts.getTopPeers contacts.TopPeers
 * #d4982db5:3566742965:-728224331
 * flags:#
 * correspondents:flags.0?true
 * bots_pm:flags.1?true
 * bots_inline:flags.2?true
 * phone_calls:flags.3?true
 * forward_users:flags.4?true
 * forward_chats:flags.5?true
 * groups:flags.10?true
 * channels:flags.15?true
 * offset:int
 * limit:int
 * hash:int
 */
export interface ContactsGetTopPeersM {
  _id: number;
  _method(): void;
  _values: [
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
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_correspondents(): true;
  set_correspondents(val: true): this;

  has_correspondents(): boolean;

  get_bots_pm(): true;
  set_bots_pm(val: true): this;

  has_bots_pm(): boolean;

  get_bots_inline(): true;
  set_bots_inline(val: true): this;

  has_bots_inline(): boolean;

  get_phone_calls(): true;
  set_phone_calls(val: true): this;

  has_phone_calls(): boolean;

  get_forward_users(): true;
  set_forward_users(val: true): this;

  has_forward_users(): boolean;

  get_forward_chats(): true;
  set_forward_chats(val: true): this;

  has_forward_chats(): boolean;

  get_groups(): true;
  set_groups(val: true): this;

  has_groups(): boolean;

  get_channels(): true;
  set_channels(val: true): this;

  has_channels(): boolean;

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetTopPeersM = r<new () => ContactsGetTopPeersM>(
  0xd4982db5,
  "ContactsGetTopPeersM",
  () => [
    "flags",
    IntRW,
    "correspondents",
    Optional(TrueRW, 0, 0),
    "bots_pm",
    Optional(TrueRW, 0, 1),
    "bots_inline",
    Optional(TrueRW, 0, 2),
    "phone_calls",
    Optional(TrueRW, 0, 3),
    "forward_users",
    Optional(TrueRW, 0, 4),
    "forward_chats",
    Optional(TrueRW, 0, 5),
    "groups",
    Optional(TrueRW, 0, 10),
    "channels",
    Optional(TrueRW, 0, 15),
    "offset",
    IntRW,
    "limit",
    IntRW,
    "hash",
    IntRW
  ]
);

/**
 * messages.getAllDrafts:messages.getAllDrafts Updates
 * #6a3f8d65:1782549861:1782549861
 *
 */
export interface MessagesGetAllDraftsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetAllDraftsM = r<new () => MessagesGetAllDraftsM>(
  0x6a3f8d65,
  "MessagesGetAllDraftsM",
  () => []
);

/**
 * messages.getFeaturedStickers:messages.getFeaturedStickers messages.FeaturedStickers
 * #2dacca4f:766298703:766298703
 * hash:int
 */
export interface MessagesGetFeaturedStickersM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetFeaturedStickersM = r<
  new () => MessagesGetFeaturedStickersM
>(0x2dacca4f, "MessagesGetFeaturedStickersM", () => ["hash", IntRW]);

/**
 * messages.readFeaturedStickers:messages.readFeaturedStickers Bool
 * #5b118126:1527873830:1527873830
 * id:Vector<long>
 */
export interface MessagesReadFeaturedStickersM {
  _id: number;
  _method(): void;
  _values: [VectorS<ProtoLong>];

  get_id(): VectorS<ProtoLong>;
  set_id(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReadFeaturedStickersM = r<
  new () => MessagesReadFeaturedStickersM
>(0x5b118126, "MessagesReadFeaturedStickersM", () => ["id", VectorRW(LongRW)]);

/**
 * messages.getRecentStickers:messages.getRecentStickers messages.RecentStickers
 * #5ea192c9:1587647177:1587647177
 * flags:#
 * attached:flags.0?true
 * hash:int
 */
export interface MessagesGetRecentStickersM {
  _id: number;
  _method(): void;
  _values: [number, true, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_attached(): true;
  set_attached(val: true): this;

  has_attached(): boolean;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetRecentStickersM = r<new () => MessagesGetRecentStickersM>(
  0x5ea192c9,
  "MessagesGetRecentStickersM",
  () => ["flags", IntRW, "attached", Optional(TrueRW, 0, 0), "hash", IntRW]
);

/**
 * messages.saveRecentSticker:messages.saveRecentSticker Bool
 * #392718f8:958863608:958863608
 * flags:#
 * attached:flags.0?true
 * id:InputDocument
 * unsave:Bool
 */
export interface MessagesSaveRecentStickerM {
  _id: number;
  _method(): void;
  _values: [number, true, InputDocumentT, BoolT];

  get_flags(): number;
  set_flags(val: number): this;

  get_attached(): true;
  set_attached(val: true): this;

  has_attached(): boolean;

  get_id(): InputDocumentT;
  set_id(val: InputDocumentT): this;

  get_unsave(): BoolT;
  set_unsave(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSaveRecentStickerM = r<new () => MessagesSaveRecentStickerM>(
  0x392718f8,
  "MessagesSaveRecentStickerM",
  () => [
    "flags",
    IntRW,
    "attached",
    Optional(TrueRW, 0, 0),
    "id",
    TypeRW(InputDocumentT),
    "unsave",
    TypeRW(BoolT)
  ]
);

/**
 * messages.clearRecentStickers:messages.clearRecentStickers Bool
 * #8999602d:2308530221:-1986437075
 * flags:#
 * attached:flags.0?true
 */
export interface MessagesClearRecentStickersM {
  _id: number;
  _method(): void;
  _values: [number, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_attached(): true;
  set_attached(val: true): this;

  has_attached(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesClearRecentStickersM = r<
  new () => MessagesClearRecentStickersM
>(0x8999602d, "MessagesClearRecentStickersM", () => [
  "flags",
  IntRW,
  "attached",
  Optional(TrueRW, 0, 0)
]);

/**
 * messages.getArchivedStickers:messages.getArchivedStickers messages.ArchivedStickers
 * #57f17692:1475442322:1475442322
 * flags:#
 * masks:flags.0?true
 * offset_id:long
 * limit:int
 */
export interface MessagesGetArchivedStickersM {
  _id: number;
  _method(): void;
  _values: [number, true, ProtoLong, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_masks(): true;
  set_masks(val: true): this;

  has_masks(): boolean;

  get_offset_id(): ProtoLong;
  set_offset_id(val: ProtoLong): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetArchivedStickersM = r<
  new () => MessagesGetArchivedStickersM
>(0x57f17692, "MessagesGetArchivedStickersM", () => [
  "flags",
  IntRW,
  "masks",
  Optional(TrueRW, 0, 0),
  "offset_id",
  LongRW,
  "limit",
  IntRW
]);

/**
 * account.sendConfirmPhoneCode:account.sendConfirmPhoneCode auth.SentCode
 * #1b3faa88:457157256:457157256
 * hash:string
 * settings:CodeSettings
 */
export interface AccountSendConfirmPhoneCodeM {
  _id: number;
  _method(): void;
  _values: [string, CodeSettingsS];

  get_hash(): string;
  set_hash(val: string): this;

  get_settings(): CodeSettingsS;
  set_settings(val: CodeSettingsS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSendConfirmPhoneCodeM = r<
  new () => AccountSendConfirmPhoneCodeM
>(0x1b3faa88, "AccountSendConfirmPhoneCodeM", () => [
  "hash",
  StringRW,
  "settings",
  TypeRW(CodeSettingsS)
]);

/**
 * account.confirmPhone:account.confirmPhone Bool
 * #5f2178c3:1596029123:1596029123
 * phone_code_hash:string
 * phone_code:string
 */
export interface AccountConfirmPhoneM {
  _id: number;
  _method(): void;
  _values: [string, string];

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  get_phone_code(): string;
  set_phone_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountConfirmPhoneM = r<new () => AccountConfirmPhoneM>(
  0x5f2178c3,
  "AccountConfirmPhoneM",
  () => ["phone_code_hash", StringRW, "phone_code", StringRW]
);

/**
 * channels.getAdminedPublicChannels:channels.getAdminedPublicChannels messages.Chats
 * #f8b036af:4172297903:-122669393
 * flags:#
 * by_location:flags.0?true
 * check_limit:flags.1?true
 */
export interface ChannelsGetAdminedPublicChannelsM {
  _id: number;
  _method(): void;
  _values: [number, true, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_by_location(): true;
  set_by_location(val: true): this;

  has_by_location(): boolean;

  get_check_limit(): true;
  set_check_limit(val: true): this;

  has_check_limit(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetAdminedPublicChannelsM = r<
  new () => ChannelsGetAdminedPublicChannelsM
>(0xf8b036af, "ChannelsGetAdminedPublicChannelsM", () => [
  "flags",
  IntRW,
  "by_location",
  Optional(TrueRW, 0, 0),
  "check_limit",
  Optional(TrueRW, 0, 1)
]);

/**
 * messages.getMaskStickers:messages.getMaskStickers messages.AllStickers
 * #65b8c79f:1706608543:1706608543
 * hash:int
 */
export interface MessagesGetMaskStickersM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetMaskStickersM = r<new () => MessagesGetMaskStickersM>(
  0x65b8c79f,
  "MessagesGetMaskStickersM",
  () => ["hash", IntRW]
);

/**
 * auth.dropTempAuthKeys:auth.dropTempAuthKeys Bool
 * #8e48a188:2387124616:-1907842680
 * except_auth_keys:Vector<long>
 */
export interface AuthDropTempAuthKeysM {
  _id: number;
  _method(): void;
  _values: [VectorS<ProtoLong>];

  get_except_auth_keys(): VectorS<ProtoLong>;
  set_except_auth_keys(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthDropTempAuthKeysM = r<new () => AuthDropTempAuthKeysM>(
  0x8e48a188,
  "AuthDropTempAuthKeysM",
  () => ["except_auth_keys", VectorRW(LongRW)]
);

/**
 * messages.getAllChats:messages.getAllChats messages.Chats
 * #eba80ff0:3953659888:-341307408
 * except_ids:Vector<int>
 */
export interface MessagesGetAllChatsM {
  _id: number;
  _method(): void;
  _values: [VectorS<number>];

  get_except_ids(): VectorS<number>;
  set_except_ids(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetAllChatsM = r<new () => MessagesGetAllChatsM>(
  0xeba80ff0,
  "MessagesGetAllChatsM",
  () => ["except_ids", VectorRW(IntRW)]
);

/**
 * help.setBotUpdatesStatus:help.setBotUpdatesStatus Bool
 * #ec22cfcd:3961704397:-333262899
 * pending_updates_count:int
 * message:string
 */
export interface HelpSetBotUpdatesStatusM {
  _id: number;
  _method(): void;
  _values: [number, string];

  get_pending_updates_count(): number;
  set_pending_updates_count(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpSetBotUpdatesStatusM = r<new () => HelpSetBotUpdatesStatusM>(
  0xec22cfcd,
  "HelpSetBotUpdatesStatusM",
  () => ["pending_updates_count", IntRW, "message", StringRW]
);

/**
 * messages.getWebPage:messages.getWebPage WebPage
 * #32ca8f91:852135825:852135825
 * url:string
 * hash:int
 */
export interface MessagesGetWebPageM {
  _id: number;
  _method(): void;
  _values: [string, number];

  get_url(): string;
  set_url(val: string): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetWebPageM = r<new () => MessagesGetWebPageM>(
  0x32ca8f91,
  "MessagesGetWebPageM",
  () => ["url", StringRW, "hash", IntRW]
);

/**
 * messages.getPinnedDialogs:messages.getPinnedDialogs messages.PeerDialogs
 * #d6b94df2:3602468338:-692498958
 * folder_id:int
 */
export interface MessagesGetPinnedDialogsM {
  _id: number;
  _method(): void;
  _values: [number];

  get_folder_id(): number;
  set_folder_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetPinnedDialogsM = r<new () => MessagesGetPinnedDialogsM>(
  0xd6b94df2,
  "MessagesGetPinnedDialogsM",
  () => ["folder_id", IntRW]
);

/**
 * bots.sendCustomRequest:bots.sendCustomRequest DataJSON
 * #aa2769ed:2854709741:-1440257555
 * custom_method:string
 * params:DataJSON
 */
export interface BotsSendCustomRequestM {
  _id: number;
  _method(): void;
  _values: [string, DataJsonT];

  get_custom_method(): string;
  set_custom_method(val: string): this;

  get_params(): DataJsonT;
  set_params(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotsSendCustomRequestM = r<new () => BotsSendCustomRequestM>(
  0xaa2769ed,
  "BotsSendCustomRequestM",
  () => ["custom_method", StringRW, "params", TypeRW(DataJsonT)]
);

/**
 * bots.answerWebhookJSONQuery:bots.answerWebhookJSONQuery Bool
 * #e6213f4d:3860938573:-434028723
 * query_id:long
 * data:DataJSON
 */
export interface BotsAnswerWebhookJsonQueryM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, DataJsonT];

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_data(): DataJsonT;
  set_data(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotsAnswerWebhookJsonQueryM = r<
  new () => BotsAnswerWebhookJsonQueryM
>(0xe6213f4d, "BotsAnswerWebhookJsonQueryM", () => [
  "query_id",
  LongRW,
  "data",
  TypeRW(DataJsonT)
]);

/**
 * payments.getPaymentForm:payments.getPaymentForm payments.PaymentForm
 * #99f09745:2582681413:-1712285883
 * msg_id:int
 */
export interface PaymentsGetPaymentFormM {
  _id: number;
  _method(): void;
  _values: [number];

  get_msg_id(): number;
  set_msg_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsGetPaymentFormM = r<new () => PaymentsGetPaymentFormM>(
  0x99f09745,
  "PaymentsGetPaymentFormM",
  () => ["msg_id", IntRW]
);

/**
 * payments.getPaymentReceipt:payments.getPaymentReceipt payments.PaymentReceipt
 * #a092a980:2693966208:-1601001088
 * msg_id:int
 */
export interface PaymentsGetPaymentReceiptM {
  _id: number;
  _method(): void;
  _values: [number];

  get_msg_id(): number;
  set_msg_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsGetPaymentReceiptM = r<new () => PaymentsGetPaymentReceiptM>(
  0xa092a980,
  "PaymentsGetPaymentReceiptM",
  () => ["msg_id", IntRW]
);

/**
 * account.getTmpPassword:account.getTmpPassword account.TmpPassword
 * #449e0b51:1151208273:1151208273
 * password:InputCheckPasswordSRP
 * period:int
 */
export interface AccountGetTmpPasswordM {
  _id: number;
  _method(): void;
  _values: [InputCheckPasswordSrpT, number];

  get_password(): InputCheckPasswordSrpT;
  set_password(val: InputCheckPasswordSrpT): this;

  get_period(): number;
  set_period(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetTmpPasswordM = r<new () => AccountGetTmpPasswordM>(
  0x449e0b51,
  "AccountGetTmpPasswordM",
  () => ["password", TypeRW(InputCheckPasswordSrpT), "period", IntRW]
);

/**
 * payments.getSavedInfo:payments.getSavedInfo payments.SavedInfo
 * #227d824b:578650699:578650699
 *
 */
export interface PaymentsGetSavedInfoM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsGetSavedInfoM = r<new () => PaymentsGetSavedInfoM>(
  0x227d824b,
  "PaymentsGetSavedInfoM",
  () => []
);

/**
 * payments.clearSavedInfo:payments.clearSavedInfo Bool
 * #d83d70c1:3627905217:-667062079
 * flags:#
 * credentials:flags.0?true
 * info:flags.1?true
 */
export interface PaymentsClearSavedInfoM {
  _id: number;
  _method(): void;
  _values: [number, true, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_credentials(): true;
  set_credentials(val: true): this;

  has_credentials(): boolean;

  get_info(): true;
  set_info(val: true): this;

  has_info(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsClearSavedInfoM = r<new () => PaymentsClearSavedInfoM>(
  0xd83d70c1,
  "PaymentsClearSavedInfoM",
  () => [
    "flags",
    IntRW,
    "credentials",
    Optional(TrueRW, 0, 0),
    "info",
    Optional(TrueRW, 0, 1)
  ]
);

/**
 * messages.setBotPrecheckoutResults:messages.setBotPrecheckoutResults Bool
 * #9c2dd95:163765653:163765653
 * flags:#
 * success:flags.1?true
 * query_id:long
 * error:flags.0?string
 */
export interface MessagesSetBotPrecheckoutResultsM {
  _id: number;
  _method(): void;
  _values: [number, true, ProtoLong, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_success(): true;
  set_success(val: true): this;

  has_success(): boolean;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_error(): string;
  set_error(val: string): this;

  has_error(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetBotPrecheckoutResultsM = r<
  new () => MessagesSetBotPrecheckoutResultsM
>(0x9c2dd95, "MessagesSetBotPrecheckoutResultsM", () => [
  "flags",
  IntRW,
  "success",
  Optional(TrueRW, 0, 1),
  "query_id",
  LongRW,
  "error",
  Optional(StringRW, 0, 0)
]);

/**
 * stickers.removeStickerFromSet:stickers.removeStickerFromSet messages.StickerSet
 * #f7760f51:4151709521:-143257775
 * sticker:InputDocument
 */
export interface StickersRemoveStickerFromSetM {
  _id: number;
  _method(): void;
  _values: [InputDocumentT];

  get_sticker(): InputDocumentT;
  set_sticker(val: InputDocumentT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickersRemoveStickerFromSetM = r<
  new () => StickersRemoveStickerFromSetM
>(0xf7760f51, "StickersRemoveStickerFromSetM", () => [
  "sticker",
  TypeRW(InputDocumentT)
]);

/**
 * stickers.changeStickerPosition:stickers.changeStickerPosition messages.StickerSet
 * #ffb6d4ca:4290172106:-4795190
 * sticker:InputDocument
 * position:int
 */
export interface StickersChangeStickerPositionM {
  _id: number;
  _method(): void;
  _values: [InputDocumentT, number];

  get_sticker(): InputDocumentT;
  set_sticker(val: InputDocumentT): this;

  get_position(): number;
  set_position(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickersChangeStickerPositionM = r<
  new () => StickersChangeStickerPositionM
>(0xffb6d4ca, "StickersChangeStickerPositionM", () => [
  "sticker",
  TypeRW(InputDocumentT),
  "position",
  IntRW
]);

/**
 * phone.getCallConfig:phone.getCallConfig DataJSON
 * #55451fa9:1430593449:1430593449
 *
 */
export interface PhoneGetCallConfigM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneGetCallConfigM = r<new () => PhoneGetCallConfigM>(
  0x55451fa9,
  "PhoneGetCallConfigM",
  () => []
);

/**
 * phone.acceptCall:phone.acceptCall phone.PhoneCall
 * #3bd2b4a0:1003664544:1003664544
 * peer:InputPhoneCall
 * g_b:bytes
 * protocol:PhoneCallProtocol
 */
export interface PhoneAcceptCallM {
  _id: number;
  _method(): void;
  _values: [InputPhoneCallS, Uint8Array, PhoneCallProtocolT];

  get_peer(): InputPhoneCallS;
  set_peer(val: InputPhoneCallS): this;

  get_g_b(): Uint8Array;
  set_g_b(val: Uint8Array): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneAcceptCallM = r<new () => PhoneAcceptCallM>(
  0x3bd2b4a0,
  "PhoneAcceptCallM",
  () => [
    "peer",
    TypeRW(InputPhoneCallS),
    "g_b",
    BytesRW,
    "protocol",
    TypeRW(PhoneCallProtocolT)
  ]
);

/**
 * phone.confirmCall:phone.confirmCall phone.PhoneCall
 * #2efe1722:788404002:788404002
 * peer:InputPhoneCall
 * g_a:bytes
 * key_fingerprint:long
 * protocol:PhoneCallProtocol
 */
export interface PhoneConfirmCallM {
  _id: number;
  _method(): void;
  _values: [InputPhoneCallS, Uint8Array, ProtoLong, PhoneCallProtocolT];

  get_peer(): InputPhoneCallS;
  set_peer(val: InputPhoneCallS): this;

  get_g_a(): Uint8Array;
  set_g_a(val: Uint8Array): this;

  get_key_fingerprint(): ProtoLong;
  set_key_fingerprint(val: ProtoLong): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneConfirmCallM = r<new () => PhoneConfirmCallM>(
  0x2efe1722,
  "PhoneConfirmCallM",
  () => [
    "peer",
    TypeRW(InputPhoneCallS),
    "g_a",
    BytesRW,
    "key_fingerprint",
    LongRW,
    "protocol",
    TypeRW(PhoneCallProtocolT)
  ]
);

/**
 * phone.receivedCall:phone.receivedCall Bool
 * #17d54f61:399855457:399855457
 * peer:InputPhoneCall
 */
export interface PhoneReceivedCallM {
  _id: number;
  _method(): void;
  _values: [InputPhoneCallS];

  get_peer(): InputPhoneCallS;
  set_peer(val: InputPhoneCallS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneReceivedCallM = r<new () => PhoneReceivedCallM>(
  0x17d54f61,
  "PhoneReceivedCallM",
  () => ["peer", TypeRW(InputPhoneCallS)]
);

/**
 * phone.discardCall:phone.discardCall Updates
 * #b2cbc1c0:2999697856:-1295269440
 * flags:#
 * video:flags.0?true
 * peer:InputPhoneCall
 * duration:int
 * reason:PhoneCallDiscardReason
 * connection_id:long
 */
export interface PhoneDiscardCallM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    InputPhoneCallS,
    number,
    PhoneCallDiscardReasonT,
    ProtoLong
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_peer(): InputPhoneCallS;
  set_peer(val: InputPhoneCallS): this;

  get_duration(): number;
  set_duration(val: number): this;

  get_reason(): PhoneCallDiscardReasonT;
  set_reason(val: PhoneCallDiscardReasonT): this;

  get_connection_id(): ProtoLong;
  set_connection_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneDiscardCallM = r<new () => PhoneDiscardCallM>(
  0xb2cbc1c0,
  "PhoneDiscardCallM",
  () => [
    "flags",
    IntRW,
    "video",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(InputPhoneCallS),
    "duration",
    IntRW,
    "reason",
    TypeRW(PhoneCallDiscardReasonT),
    "connection_id",
    LongRW
  ]
);

/**
 * phone.setCallRating:phone.setCallRating Updates
 * #59ead627:1508562471:1508562471
 * flags:#
 * user_initiative:flags.0?true
 * peer:InputPhoneCall
 * rating:int
 * comment:string
 */
export interface PhoneSetCallRatingM {
  _id: number;
  _method(): void;
  _values: [number, true, InputPhoneCallS, number, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_user_initiative(): true;
  set_user_initiative(val: true): this;

  has_user_initiative(): boolean;

  get_peer(): InputPhoneCallS;
  set_peer(val: InputPhoneCallS): this;

  get_rating(): number;
  set_rating(val: number): this;

  get_comment(): string;
  set_comment(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneSetCallRatingM = r<new () => PhoneSetCallRatingM>(
  0x59ead627,
  "PhoneSetCallRatingM",
  () => [
    "flags",
    IntRW,
    "user_initiative",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(InputPhoneCallS),
    "rating",
    IntRW,
    "comment",
    StringRW
  ]
);

/**
 * phone.saveCallDebug:phone.saveCallDebug Bool
 * #277add7e:662363518:662363518
 * peer:InputPhoneCall
 * debug:DataJSON
 */
export interface PhoneSaveCallDebugM {
  _id: number;
  _method(): void;
  _values: [InputPhoneCallS, DataJsonT];

  get_peer(): InputPhoneCallS;
  set_peer(val: InputPhoneCallS): this;

  get_debug(): DataJsonT;
  set_debug(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneSaveCallDebugM = r<new () => PhoneSaveCallDebugM>(
  0x277add7e,
  "PhoneSaveCallDebugM",
  () => ["peer", TypeRW(InputPhoneCallS), "debug", TypeRW(DataJsonT)]
);

/**
 * upload.getCdnFile:upload.getCdnFile upload.CdnFile
 * #2000bcc3:536919235:536919235
 * file_token:bytes
 * offset:int
 * limit:int
 */
export interface UploadGetCdnFileM {
  _id: number;
  _method(): void;
  _values: [Uint8Array, number, number];

  get_file_token(): Uint8Array;
  set_file_token(val: Uint8Array): this;

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadGetCdnFileM = r<new () => UploadGetCdnFileM>(
  0x2000bcc3,
  "UploadGetCdnFileM",
  () => ["file_token", BytesRW, "offset", IntRW, "limit", IntRW]
);

/**
 * upload.reuploadCdnFile:upload.reuploadCdnFile Vector<FileHash>
 * #9b2754a8:2603046056:-1691921240
 * file_token:bytes
 * request_token:bytes
 */
export interface UploadReuploadCdnFileM {
  _id: number;
  _method(): void;
  _values: [Uint8Array, Uint8Array];

  get_file_token(): Uint8Array;
  set_file_token(val: Uint8Array): this;

  get_request_token(): Uint8Array;
  set_request_token(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadReuploadCdnFileM = r<new () => UploadReuploadCdnFileM>(
  0x9b2754a8,
  "UploadReuploadCdnFileM",
  () => ["file_token", BytesRW, "request_token", BytesRW]
);

/**
 * help.getCdnConfig:help.getCdnConfig CdnConfig
 * #52029342:1375900482:1375900482
 *
 */
export interface HelpGetCdnConfigM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetCdnConfigM = r<new () => HelpGetCdnConfigM>(
  0x52029342,
  "HelpGetCdnConfigM",
  () => []
);

/**
 * langpack.getLangPack:langpack.getLangPack LangPackDifference
 * #f2f2330a:4075959050:-219008246
 * lang_pack:string
 * lang_code:string
 */
export interface LangpackGetLangPackM {
  _id: number;
  _method(): void;
  _values: [string, string];

  get_lang_pack(): string;
  set_lang_pack(val: string): this;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangpackGetLangPackM = r<new () => LangpackGetLangPackM>(
  0xf2f2330a,
  "LangpackGetLangPackM",
  () => ["lang_pack", StringRW, "lang_code", StringRW]
);

/**
 * langpack.getStrings:langpack.getStrings Vector<LangPackString>
 * #efea3803:4025104387:-269862909
 * lang_pack:string
 * lang_code:string
 * keys:Vector<string>
 */
export interface LangpackGetStringsM {
  _id: number;
  _method(): void;
  _values: [string, string, VectorS<string>];

  get_lang_pack(): string;
  set_lang_pack(val: string): this;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_keys(): VectorS<string>;
  set_keys(val: VectorS<string>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangpackGetStringsM = r<new () => LangpackGetStringsM>(
  0xefea3803,
  "LangpackGetStringsM",
  () => [
    "lang_pack",
    StringRW,
    "lang_code",
    StringRW,
    "keys",
    VectorRW(StringRW)
  ]
);

/**
 * langpack.getDifference:langpack.getDifference LangPackDifference
 * #cd984aa5:3449309861:-845657435
 * lang_pack:string
 * lang_code:string
 * from_version:int
 */
export interface LangpackGetDifferenceM {
  _id: number;
  _method(): void;
  _values: [string, string, number];

  get_lang_pack(): string;
  set_lang_pack(val: string): this;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_from_version(): number;
  set_from_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangpackGetDifferenceM = r<new () => LangpackGetDifferenceM>(
  0xcd984aa5,
  "LangpackGetDifferenceM",
  () => ["lang_pack", StringRW, "lang_code", StringRW, "from_version", IntRW]
);

/**
 * langpack.getLanguages:langpack.getLanguages Vector<LangPackLanguage>
 * #42c6978f:1120311183:1120311183
 * lang_pack:string
 */
export interface LangpackGetLanguagesM {
  _id: number;
  _method(): void;
  _values: [string];

  get_lang_pack(): string;
  set_lang_pack(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangpackGetLanguagesM = r<new () => LangpackGetLanguagesM>(
  0x42c6978f,
  "LangpackGetLanguagesM",
  () => ["lang_pack", StringRW]
);

/**
 * upload.getCdnFileHashes:upload.getCdnFileHashes Vector<FileHash>
 * #4da54231:1302676017:1302676017
 * file_token:bytes
 * offset:int
 */
export interface UploadGetCdnFileHashesM {
  _id: number;
  _method(): void;
  _values: [Uint8Array, number];

  get_file_token(): Uint8Array;
  set_file_token(val: Uint8Array): this;

  get_offset(): number;
  set_offset(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadGetCdnFileHashesM = r<new () => UploadGetCdnFileHashesM>(
  0x4da54231,
  "UploadGetCdnFileHashesM",
  () => ["file_token", BytesRW, "offset", IntRW]
);

/**
 * messages.getFavedStickers:messages.getFavedStickers messages.FavedStickers
 * #21ce0b0e:567151374:567151374
 * hash:int
 */
export interface MessagesGetFavedStickersM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetFavedStickersM = r<new () => MessagesGetFavedStickersM>(
  0x21ce0b0e,
  "MessagesGetFavedStickersM",
  () => ["hash", IntRW]
);

/**
 * messages.faveSticker:messages.faveSticker Bool
 * #b9ffc55b:3120547163:-1174420133
 * id:InputDocument
 * unfave:Bool
 */
export interface MessagesFaveStickerM {
  _id: number;
  _method(): void;
  _values: [InputDocumentT, BoolT];

  get_id(): InputDocumentT;
  set_id(val: InputDocumentT): this;

  get_unfave(): BoolT;
  set_unfave(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFaveStickerM = r<new () => MessagesFaveStickerM>(
  0xb9ffc55b,
  "MessagesFaveStickerM",
  () => ["id", TypeRW(InputDocumentT), "unfave", TypeRW(BoolT)]
);

/**
 * contacts.resetSaved:contacts.resetSaved Bool
 * #879537f1:2274703345:-2020263951
 *
 */
export interface ContactsResetSavedM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsResetSavedM = r<new () => ContactsResetSavedM>(
  0x879537f1,
  "ContactsResetSavedM",
  () => []
);

/**
 * help.getRecentMeUrls:help.getRecentMeUrls help.RecentMeUrls
 * #3dc0f114:1036054804:1036054804
 * referer:string
 */
export interface HelpGetRecentMeUrlsM {
  _id: number;
  _method(): void;
  _values: [string];

  get_referer(): string;
  set_referer(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetRecentMeUrlsM = r<new () => HelpGetRecentMeUrlsM>(
  0x3dc0f114,
  "HelpGetRecentMeUrlsM",
  () => ["referer", StringRW]
);

/**
 * messages.uploadEncryptedFile:messages.uploadEncryptedFile EncryptedFile
 * #5057c497:1347929239:1347929239
 * peer:InputEncryptedChat
 * file:InputEncryptedFile
 */
export interface MessagesUploadEncryptedFileM {
  _id: number;
  _method(): void;
  _values: [InputEncryptedChatS, InputEncryptedFileT];

  get_peer(): InputEncryptedChatS;
  set_peer(val: InputEncryptedChatS): this;

  get_file(): InputEncryptedFileT;
  set_file(val: InputEncryptedFileT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesUploadEncryptedFileM = r<
  new () => MessagesUploadEncryptedFileM
>(0x5057c497, "MessagesUploadEncryptedFileM", () => [
  "peer",
  TypeRW(InputEncryptedChatS),
  "file",
  TypeRW(InputEncryptedFileT)
]);

/**
 * account.getWebAuthorizations:account.getWebAuthorizations account.WebAuthorizations
 * #182e6d6f:405695855:405695855
 *
 */
export interface AccountGetWebAuthorizationsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetWebAuthorizationsM = r<
  new () => AccountGetWebAuthorizationsM
>(0x182e6d6f, "AccountGetWebAuthorizationsM", () => []);

/**
 * account.resetWebAuthorization:account.resetWebAuthorization Bool
 * #2d01b9ef:755087855:755087855
 * hash:long
 */
export interface AccountResetWebAuthorizationM {
  _id: number;
  _method(): void;
  _values: [ProtoLong];

  get_hash(): ProtoLong;
  set_hash(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountResetWebAuthorizationM = r<
  new () => AccountResetWebAuthorizationM
>(0x2d01b9ef, "AccountResetWebAuthorizationM", () => ["hash", LongRW]);

/**
 * account.resetWebAuthorizations:account.resetWebAuthorizations Bool
 * #682d2594:1747789204:1747789204
 *
 */
export interface AccountResetWebAuthorizationsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountResetWebAuthorizationsM = r<
  new () => AccountResetWebAuthorizationsM
>(0x682d2594, "AccountResetWebAuthorizationsM", () => []);

/**
 * messages.searchStickerSets:messages.searchStickerSets messages.FoundStickerSets
 * #c2b7d08b:3266826379:-1028140917
 * flags:#
 * exclude_featured:flags.0?true
 * q:string
 * hash:int
 */
export interface MessagesSearchStickerSetsM {
  _id: number;
  _method(): void;
  _values: [number, true, string, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_exclude_featured(): true;
  set_exclude_featured(val: true): this;

  has_exclude_featured(): boolean;

  get_q(): string;
  set_q(val: string): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSearchStickerSetsM = r<new () => MessagesSearchStickerSetsM>(
  0xc2b7d08b,
  "MessagesSearchStickerSetsM",
  () => [
    "flags",
    IntRW,
    "exclude_featured",
    Optional(TrueRW, 0, 0),
    "q",
    StringRW,
    "hash",
    IntRW
  ]
);

/**
 * help.getProxyData:help.getProxyData help.ProxyData
 * #3d7758e1:1031231713:1031231713
 *
 */
export interface HelpGetProxyDataM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetProxyDataM = r<new () => HelpGetProxyDataM>(
  0x3d7758e1,
  "HelpGetProxyDataM",
  () => []
);

/**
 * help.getTermsOfServiceUpdate:help.getTermsOfServiceUpdate help.TermsOfServiceUpdate
 * #2ca51fd1:749019089:749019089
 *
 */
export interface HelpGetTermsOfServiceUpdateM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetTermsOfServiceUpdateM = r<
  new () => HelpGetTermsOfServiceUpdateM
>(0x2ca51fd1, "HelpGetTermsOfServiceUpdateM", () => []);

/**
 * help.acceptTermsOfService:help.acceptTermsOfService Bool
 * #ee72f79a:4000511898:-294455398
 * id:DataJSON
 */
export interface HelpAcceptTermsOfServiceM {
  _id: number;
  _method(): void;
  _values: [DataJsonT];

  get_id(): DataJsonT;
  set_id(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpAcceptTermsOfServiceM = r<new () => HelpAcceptTermsOfServiceM>(
  0xee72f79a,
  "HelpAcceptTermsOfServiceM",
  () => ["id", TypeRW(DataJsonT)]
);

/**
 * account.getAllSecureValues:account.getAllSecureValues Vector<SecureValue>
 * #b288bc7d:2995305597:-1299661699
 *
 */
export interface AccountGetAllSecureValuesM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetAllSecureValuesM = r<new () => AccountGetAllSecureValuesM>(
  0xb288bc7d,
  "AccountGetAllSecureValuesM",
  () => []
);

/**
 * account.getSecureValue:account.getSecureValue Vector<SecureValue>
 * #73665bc2:1936088002:1936088002
 * types:Vector<SecureValueType>
 */
export interface AccountGetSecureValueM {
  _id: number;
  _method(): void;
  _values: [VectorS<SecureValueTypeT>];

  get_types(): VectorS<SecureValueTypeT>;
  set_types(val: VectorS<SecureValueTypeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetSecureValueM = r<new () => AccountGetSecureValueM>(
  0x73665bc2,
  "AccountGetSecureValueM",
  () => ["types", VectorRW(TypeRW(SecureValueTypeT))]
);

/**
 * account.deleteSecureValue:account.deleteSecureValue Bool
 * #b880bc4b:3095444555:-1199522741
 * types:Vector<SecureValueType>
 */
export interface AccountDeleteSecureValueM {
  _id: number;
  _method(): void;
  _values: [VectorS<SecureValueTypeT>];

  get_types(): VectorS<SecureValueTypeT>;
  set_types(val: VectorS<SecureValueTypeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountDeleteSecureValueM = r<new () => AccountDeleteSecureValueM>(
  0xb880bc4b,
  "AccountDeleteSecureValueM",
  () => ["types", VectorRW(TypeRW(SecureValueTypeT))]
);

/**
 * account.getAuthorizationForm:account.getAuthorizationForm account.AuthorizationForm
 * #b86ba8e1:3094063329:-1200903967
 * bot_id:int
 * scope:string
 * public_key:string
 */
export interface AccountGetAuthorizationFormM {
  _id: number;
  _method(): void;
  _values: [number, string, string];

  get_bot_id(): number;
  set_bot_id(val: number): this;

  get_scope(): string;
  set_scope(val: string): this;

  get_public_key(): string;
  set_public_key(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetAuthorizationFormM = r<
  new () => AccountGetAuthorizationFormM
>(0xb86ba8e1, "AccountGetAuthorizationFormM", () => [
  "bot_id",
  IntRW,
  "scope",
  StringRW,
  "public_key",
  StringRW
]);

/**
 * account.sendVerifyPhoneCode:account.sendVerifyPhoneCode auth.SentCode
 * #a5a356f9:2778945273:-1516022023
 * phone_number:string
 * settings:CodeSettings
 */
export interface AccountSendVerifyPhoneCodeM {
  _id: number;
  _method(): void;
  _values: [string, CodeSettingsS];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_settings(): CodeSettingsS;
  set_settings(val: CodeSettingsS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSendVerifyPhoneCodeM = r<
  new () => AccountSendVerifyPhoneCodeM
>(0xa5a356f9, "AccountSendVerifyPhoneCodeM", () => [
  "phone_number",
  StringRW,
  "settings",
  TypeRW(CodeSettingsS)
]);

/**
 * account.verifyPhone:account.verifyPhone Bool
 * #4dd3a7f6:1305716726:1305716726
 * phone_number:string
 * phone_code_hash:string
 * phone_code:string
 */
export interface AccountVerifyPhoneM {
  _id: number;
  _method(): void;
  _values: [string, string, string];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  get_phone_code(): string;
  set_phone_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountVerifyPhoneM = r<new () => AccountVerifyPhoneM>(
  0x4dd3a7f6,
  "AccountVerifyPhoneM",
  () => [
    "phone_number",
    StringRW,
    "phone_code_hash",
    StringRW,
    "phone_code",
    StringRW
  ]
);

/**
 * account.sendVerifyEmailCode:account.sendVerifyEmailCode account.SentEmailCode
 * #7011509f:1880182943:1880182943
 * email:string
 */
export interface AccountSendVerifyEmailCodeM {
  _id: number;
  _method(): void;
  _values: [string];

  get_email(): string;
  set_email(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSendVerifyEmailCodeM = r<
  new () => AccountSendVerifyEmailCodeM
>(0x7011509f, "AccountSendVerifyEmailCodeM", () => ["email", StringRW]);

/**
 * account.verifyEmail:account.verifyEmail Bool
 * #ecba39db:3971627483:-323339813
 * email:string
 * code:string
 */
export interface AccountVerifyEmailM {
  _id: number;
  _method(): void;
  _values: [string, string];

  get_email(): string;
  set_email(val: string): this;

  get_code(): string;
  set_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountVerifyEmailM = r<new () => AccountVerifyEmailM>(
  0xecba39db,
  "AccountVerifyEmailM",
  () => ["email", StringRW, "code", StringRW]
);

/**
 * help.getDeepLinkInfo:help.getDeepLinkInfo help.DeepLinkInfo
 * #3fedc75f:1072547679:1072547679
 * path:string
 */
export interface HelpGetDeepLinkInfoM {
  _id: number;
  _method(): void;
  _values: [string];

  get_path(): string;
  set_path(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetDeepLinkInfoM = r<new () => HelpGetDeepLinkInfoM>(
  0x3fedc75f,
  "HelpGetDeepLinkInfoM",
  () => ["path", StringRW]
);

/**
 * contacts.getSaved:contacts.getSaved Vector<SavedContact>
 * #82f1e39f:2196890527:-2098076769
 *
 */
export interface ContactsGetSavedM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetSavedM = r<new () => ContactsGetSavedM>(
  0x82f1e39f,
  "ContactsGetSavedM",
  () => []
);

/**
 * channels.getLeftChannels:channels.getLeftChannels messages.Chats
 * #8341ecc0:2202135744:-2092831552
 * offset:int
 */
export interface ChannelsGetLeftChannelsM {
  _id: number;
  _method(): void;
  _values: [number];

  get_offset(): number;
  set_offset(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetLeftChannelsM = r<new () => ChannelsGetLeftChannelsM>(
  0x8341ecc0,
  "ChannelsGetLeftChannelsM",
  () => ["offset", IntRW]
);

/**
 * account.initTakeoutSession:account.initTakeoutSession account.Takeout
 * #f05b4804:4032514052:-262453244
 * flags:#
 * contacts:flags.0?true
 * message_users:flags.1?true
 * message_chats:flags.2?true
 * message_megagroups:flags.3?true
 * message_channels:flags.4?true
 * files:flags.5?true
 * file_max_size:flags.5?int
 */
export interface AccountInitTakeoutSessionM {
  _id: number;
  _method(): void;
  _values: [number, true, true, true, true, true, true, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_contacts(): true;
  set_contacts(val: true): this;

  has_contacts(): boolean;

  get_message_users(): true;
  set_message_users(val: true): this;

  has_message_users(): boolean;

  get_message_chats(): true;
  set_message_chats(val: true): this;

  has_message_chats(): boolean;

  get_message_megagroups(): true;
  set_message_megagroups(val: true): this;

  has_message_megagroups(): boolean;

  get_message_channels(): true;
  set_message_channels(val: true): this;

  has_message_channels(): boolean;

  get_files(): true;
  set_files(val: true): this;

  has_files(): boolean;

  get_file_max_size(): number;
  set_file_max_size(val: number): this;

  has_file_max_size(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountInitTakeoutSessionM = r<new () => AccountInitTakeoutSessionM>(
  0xf05b4804,
  "AccountInitTakeoutSessionM",
  () => [
    "flags",
    IntRW,
    "contacts",
    Optional(TrueRW, 0, 0),
    "message_users",
    Optional(TrueRW, 0, 1),
    "message_chats",
    Optional(TrueRW, 0, 2),
    "message_megagroups",
    Optional(TrueRW, 0, 3),
    "message_channels",
    Optional(TrueRW, 0, 4),
    "files",
    Optional(TrueRW, 0, 5),
    "file_max_size",
    Optional(IntRW, 0, 5)
  ]
);

/**
 * account.finishTakeoutSession:account.finishTakeoutSession Bool
 * #1d2652ee:489050862:489050862
 * flags:#
 * success:flags.0?true
 */
export interface AccountFinishTakeoutSessionM {
  _id: number;
  _method(): void;
  _values: [number, true];

  get_flags(): number;
  set_flags(val: number): this;

  get_success(): true;
  set_success(val: true): this;

  has_success(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountFinishTakeoutSessionM = r<
  new () => AccountFinishTakeoutSessionM
>(0x1d2652ee, "AccountFinishTakeoutSessionM", () => [
  "flags",
  IntRW,
  "success",
  Optional(TrueRW, 0, 0)
]);

/**
 * messages.getSplitRanges:messages.getSplitRanges Vector<MessageRange>
 * #1cff7e08:486505992:486505992
 *
 */
export interface MessagesGetSplitRangesM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetSplitRangesM = r<new () => MessagesGetSplitRangesM>(
  0x1cff7e08,
  "MessagesGetSplitRangesM",
  () => []
);

/**
 * invokeWithMessagesRange:invokeWithMessagesRange X
 * #365275f2:911373810:911373810
 * range:MessageRange
 * query:!X
 */
export interface InvokeWithMessagesRangeM {
  _id: number;
  _method(): void;
  _values: [MessageRangeT, TMethod];

  get_range(): MessageRangeT;
  set_range(val: MessageRangeT): this;

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvokeWithMessagesRangeM = r<new () => InvokeWithMessagesRangeM>(
  0x365275f2,
  "InvokeWithMessagesRangeM",
  () => ["range", TypeRW(MessageRangeT), "query", OneOfRW]
);

/**
 * invokeWithTakeout:invokeWithTakeout X
 * #aca9fd2e:2896821550:-1398145746
 * takeout_id:long
 * query:!X
 */
export interface InvokeWithTakeoutM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, TMethod];

  get_takeout_id(): ProtoLong;
  set_takeout_id(val: ProtoLong): this;

  get_query(): TMethod;
  set_query(val: TMethod): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvokeWithTakeoutM = r<new () => InvokeWithTakeoutM>(
  0xaca9fd2e,
  "InvokeWithTakeoutM",
  () => ["takeout_id", LongRW, "query", OneOfRW]
);

/**
 * messages.getDialogUnreadMarks:messages.getDialogUnreadMarks Vector<DialogPeer>
 * #22e24e22:585256482:585256482
 *
 */
export interface MessagesGetDialogUnreadMarksM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetDialogUnreadMarksM = r<
  new () => MessagesGetDialogUnreadMarksM
>(0x22e24e22, "MessagesGetDialogUnreadMarksM", () => []);

/**
 * contacts.toggleTopPeers:contacts.toggleTopPeers Bool
 * #8514bdda:2232729050:-2062238246
 * enabled:Bool
 */
export interface ContactsToggleTopPeersM {
  _id: number;
  _method(): void;
  _values: [BoolT];

  get_enabled(): BoolT;
  set_enabled(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsToggleTopPeersM = r<new () => ContactsToggleTopPeersM>(
  0x8514bdda,
  "ContactsToggleTopPeersM",
  () => ["enabled", TypeRW(BoolT)]
);

/**
 * messages.clearAllDrafts:messages.clearAllDrafts Bool
 * #7e58ee9c:2119757468:2119757468
 *
 */
export interface MessagesClearAllDraftsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesClearAllDraftsM = r<new () => MessagesClearAllDraftsM>(
  0x7e58ee9c,
  "MessagesClearAllDraftsM",
  () => []
);

/**
 * help.getAppConfig:help.getAppConfig JSONValue
 * #98914110:2559656208:-1735311088
 *
 */
export interface HelpGetAppConfigM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetAppConfigM = r<new () => HelpGetAppConfigM>(
  0x98914110,
  "HelpGetAppConfigM",
  () => []
);

/**
 * help.getPassportConfig:help.getPassportConfig help.PassportConfig
 * #c661ad08:3328290056:-966677240
 * hash:int
 */
export interface HelpGetPassportConfigM {
  _id: number;
  _method(): void;
  _values: [number];

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetPassportConfigM = r<new () => HelpGetPassportConfigM>(
  0xc661ad08,
  "HelpGetPassportConfigM",
  () => ["hash", IntRW]
);

/**
 * langpack.getLanguage:langpack.getLanguage LangPackLanguage
 * #6a596502:1784243458:1784243458
 * lang_pack:string
 * lang_code:string
 */
export interface LangpackGetLanguageM {
  _id: number;
  _method(): void;
  _values: [string, string];

  get_lang_pack(): string;
  set_lang_pack(val: string): this;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangpackGetLanguageM = r<new () => LangpackGetLanguageM>(
  0x6a596502,
  "LangpackGetLanguageM",
  () => ["lang_pack", StringRW, "lang_code", StringRW]
);

/**
 * account.confirmPasswordEmail:account.confirmPasswordEmail Bool
 * #8fdf1920:2413762848:-1881204448
 * code:string
 */
export interface AccountConfirmPasswordEmailM {
  _id: number;
  _method(): void;
  _values: [string];

  get_code(): string;
  set_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountConfirmPasswordEmailM = r<
  new () => AccountConfirmPasswordEmailM
>(0x8fdf1920, "AccountConfirmPasswordEmailM", () => ["code", StringRW]);

/**
 * account.resendPasswordEmail:account.resendPasswordEmail Bool
 * #7a7f2a15:2055154197:2055154197
 *
 */
export interface AccountResendPasswordEmailM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountResendPasswordEmailM = r<
  new () => AccountResendPasswordEmailM
>(0x7a7f2a15, "AccountResendPasswordEmailM", () => []);

/**
 * account.cancelPasswordEmail:account.cancelPasswordEmail Bool
 * #c1cbd5b6:3251361206:-1043606090
 *
 */
export interface AccountCancelPasswordEmailM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountCancelPasswordEmailM = r<
  new () => AccountCancelPasswordEmailM
>(0xc1cbd5b6, "AccountCancelPasswordEmailM", () => []);

/**
 * help.getSupportName:help.getSupportName help.SupportName
 * #d360e72c:3546343212:-748624084
 *
 */
export interface HelpGetSupportNameM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetSupportNameM = r<new () => HelpGetSupportNameM>(
  0xd360e72c,
  "HelpGetSupportNameM",
  () => []
);

/**
 * account.getContactSignUpNotification:account.getContactSignUpNotification Bool
 * #9f07c728:2668087080:-1626880216
 *
 */
export interface AccountGetContactSignUpNotificationM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetContactSignUpNotificationM = r<
  new () => AccountGetContactSignUpNotificationM
>(0x9f07c728, "AccountGetContactSignUpNotificationM", () => []);

/**
 * account.setContactSignUpNotification:account.setContactSignUpNotification Bool
 * #cff43f61:3488890721:-806076575
 * silent:Bool
 */
export interface AccountSetContactSignUpNotificationM {
  _id: number;
  _method(): void;
  _values: [BoolT];

  get_silent(): BoolT;
  set_silent(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSetContactSignUpNotificationM = r<
  new () => AccountSetContactSignUpNotificationM
>(0xcff43f61, "AccountSetContactSignUpNotificationM", () => [
  "silent",
  TypeRW(BoolT)
]);

/**
 * account.getWallPaper:account.getWallPaper WallPaper
 * #fc8ddbea:4237155306:-57811990
 * wallpaper:InputWallPaper
 */
export interface AccountGetWallPaperM {
  _id: number;
  _method(): void;
  _values: [InputWallPaperT];

  get_wallpaper(): InputWallPaperT;
  set_wallpaper(val: InputWallPaperT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetWallPaperM = r<new () => AccountGetWallPaperM>(
  0xfc8ddbea,
  "AccountGetWallPaperM",
  () => ["wallpaper", TypeRW(InputWallPaperT)]
);

/**
 * account.uploadWallPaper:account.uploadWallPaper WallPaper
 * #dd853661:3716494945:-578472351
 * file:InputFile
 * mime_type:string
 * settings:WallPaperSettings
 */
export interface AccountUploadWallPaperM {
  _id: number;
  _method(): void;
  _values: [InputFileT, string, WallPaperSettingsT];

  get_file(): InputFileT;
  set_file(val: InputFileT): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_settings(): WallPaperSettingsT;
  set_settings(val: WallPaperSettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUploadWallPaperM = r<new () => AccountUploadWallPaperM>(
  0xdd853661,
  "AccountUploadWallPaperM",
  () => [
    "file",
    TypeRW(InputFileT),
    "mime_type",
    StringRW,
    "settings",
    TypeRW(WallPaperSettingsT)
  ]
);

/**
 * account.saveWallPaper:account.saveWallPaper Bool
 * #6c5a5b37:1817860919:1817860919
 * wallpaper:InputWallPaper
 * unsave:Bool
 * settings:WallPaperSettings
 */
export interface AccountSaveWallPaperM {
  _id: number;
  _method(): void;
  _values: [InputWallPaperT, BoolT, WallPaperSettingsT];

  get_wallpaper(): InputWallPaperT;
  set_wallpaper(val: InputWallPaperT): this;

  get_unsave(): BoolT;
  set_unsave(val: BoolT): this;

  get_settings(): WallPaperSettingsT;
  set_settings(val: WallPaperSettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSaveWallPaperM = r<new () => AccountSaveWallPaperM>(
  0x6c5a5b37,
  "AccountSaveWallPaperM",
  () => [
    "wallpaper",
    TypeRW(InputWallPaperT),
    "unsave",
    TypeRW(BoolT),
    "settings",
    TypeRW(WallPaperSettingsT)
  ]
);

/**
 * account.installWallPaper:account.installWallPaper Bool
 * #feed5769:4276967273:-18000023
 * wallpaper:InputWallPaper
 * settings:WallPaperSettings
 */
export interface AccountInstallWallPaperM {
  _id: number;
  _method(): void;
  _values: [InputWallPaperT, WallPaperSettingsT];

  get_wallpaper(): InputWallPaperT;
  set_wallpaper(val: InputWallPaperT): this;

  get_settings(): WallPaperSettingsT;
  set_settings(val: WallPaperSettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountInstallWallPaperM = r<new () => AccountInstallWallPaperM>(
  0xfeed5769,
  "AccountInstallWallPaperM",
  () => [
    "wallpaper",
    TypeRW(InputWallPaperT),
    "settings",
    TypeRW(WallPaperSettingsT)
  ]
);

/**
 * account.resetWallPapers:account.resetWallPapers Bool
 * #bb3b9804:3141244932:-1153722364
 *
 */
export interface AccountResetWallPapersM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountResetWallPapersM = r<new () => AccountResetWallPapersM>(
  0xbb3b9804,
  "AccountResetWallPapersM",
  () => []
);

/**
 * account.getAutoDownloadSettings:account.getAutoDownloadSettings account.AutoDownloadSettings
 * #56da0b3f:1457130303:1457130303
 *
 */
export interface AccountGetAutoDownloadSettingsM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetAutoDownloadSettingsM = r<
  new () => AccountGetAutoDownloadSettingsM
>(0x56da0b3f, "AccountGetAutoDownloadSettingsM", () => []);

/**
 * account.saveAutoDownloadSettings:account.saveAutoDownloadSettings Bool
 * #76f36233:1995661875:1995661875
 * flags:#
 * low:flags.0?true
 * high:flags.1?true
 * settings:AutoDownloadSettings
 */
export interface AccountSaveAutoDownloadSettingsM {
  _id: number;
  _method(): void;
  _values: [number, true, true, AutoDownloadSettingsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_low(): true;
  set_low(val: true): this;

  has_low(): boolean;

  get_high(): true;
  set_high(val: true): this;

  has_high(): boolean;

  get_settings(): AutoDownloadSettingsT;
  set_settings(val: AutoDownloadSettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSaveAutoDownloadSettingsM = r<
  new () => AccountSaveAutoDownloadSettingsM
>(0x76f36233, "AccountSaveAutoDownloadSettingsM", () => [
  "flags",
  IntRW,
  "low",
  Optional(TrueRW, 0, 0),
  "high",
  Optional(TrueRW, 0, 1),
  "settings",
  TypeRW(AutoDownloadSettingsT)
]);

/**
 * messages.getEmojiKeywords:messages.getEmojiKeywords EmojiKeywordsDifference
 * #35a0e062:899735650:899735650
 * lang_code:string
 */
export interface MessagesGetEmojiKeywordsM {
  _id: number;
  _method(): void;
  _values: [string];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetEmojiKeywordsM = r<new () => MessagesGetEmojiKeywordsM>(
  0x35a0e062,
  "MessagesGetEmojiKeywordsM",
  () => ["lang_code", StringRW]
);

/**
 * messages.getEmojiKeywordsDifference:messages.getEmojiKeywordsDifference EmojiKeywordsDifference
 * #1508b6af:352892591:352892591
 * lang_code:string
 * from_version:int
 */
export interface MessagesGetEmojiKeywordsDifferenceM {
  _id: number;
  _method(): void;
  _values: [string, number];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_from_version(): number;
  set_from_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetEmojiKeywordsDifferenceM = r<
  new () => MessagesGetEmojiKeywordsDifferenceM
>(0x1508b6af, "MessagesGetEmojiKeywordsDifferenceM", () => [
  "lang_code",
  StringRW,
  "from_version",
  IntRW
]);

/**
 * messages.getEmojiKeywordsLanguages:messages.getEmojiKeywordsLanguages Vector<EmojiLanguage>
 * #4e9963b2:1318675378:1318675378
 * lang_codes:Vector<string>
 */
export interface MessagesGetEmojiKeywordsLanguagesM {
  _id: number;
  _method(): void;
  _values: [VectorS<string>];

  get_lang_codes(): VectorS<string>;
  set_lang_codes(val: VectorS<string>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetEmojiKeywordsLanguagesM = r<
  new () => MessagesGetEmojiKeywordsLanguagesM
>(0x4e9963b2, "MessagesGetEmojiKeywordsLanguagesM", () => [
  "lang_codes",
  VectorRW(StringRW)
]);

/**
 * messages.getEmojiURL:messages.getEmojiURL EmojiURL
 * #d5b10c26:3585149990:-709817306
 * lang_code:string
 */
export interface MessagesGetEmojiUrlM {
  _id: number;
  _method(): void;
  _values: [string];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetEmojiUrlM = r<new () => MessagesGetEmojiUrlM>(
  0xd5b10c26,
  "MessagesGetEmojiUrlM",
  () => ["lang_code", StringRW]
);

/**
 * folders.deleteFolder:folders.deleteFolder Updates
 * #1c295881:472471681:472471681
 * folder_id:int
 */
export interface FoldersDeleteFolderM {
  _id: number;
  _method(): void;
  _values: [number];

  get_folder_id(): number;
  set_folder_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FoldersDeleteFolderM = r<new () => FoldersDeleteFolderM>(
  0x1c295881,
  "FoldersDeleteFolderM",
  () => ["folder_id", IntRW]
);

/**
 * channels.getGroupsForDiscussion:channels.getGroupsForDiscussion messages.Chats
 * #f5dad378:4124758904:-170208392
 *
 */
export interface ChannelsGetGroupsForDiscussionM {
  _id: number;
  _method(): void;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetGroupsForDiscussionM = r<
  new () => ChannelsGetGroupsForDiscussionM
>(0xf5dad378, "ChannelsGetGroupsForDiscussionM", () => []);

/**
 * contacts.getLocated:contacts.getLocated Updates
 * #a356056:171270230:171270230
 * geo_point:InputGeoPoint
 */
export interface ContactsGetLocatedM {
  _id: number;
  _method(): void;
  _values: [InputGeoPointT];

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsGetLocatedM = r<new () => ContactsGetLocatedM>(
  0xa356056,
  "ContactsGetLocatedM",
  () => ["geo_point", TypeRW(InputGeoPointT)]
);

/**
 * account.uploadTheme:account.uploadTheme Document
 * #1c3db333:473805619:473805619
 * flags:#
 * file:InputFile
 * thumb:flags.0?InputFile
 * file_name:string
 * mime_type:string
 */
export interface AccountUploadThemeM {
  _id: number;
  _method(): void;
  _values: [number, InputFileT, InputFileT, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_file(): InputFileT;
  set_file(val: InputFileT): this;

  get_thumb(): InputFileT;
  set_thumb(val: InputFileT): this;

  has_thumb(): boolean;

  get_file_name(): string;
  set_file_name(val: string): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUploadThemeM = r<new () => AccountUploadThemeM>(
  0x1c3db333,
  "AccountUploadThemeM",
  () => [
    "flags",
    IntRW,
    "file",
    TypeRW(InputFileT),
    "thumb",
    Optional(TypeRW(InputFileT), 0, 0),
    "file_name",
    StringRW,
    "mime_type",
    StringRW
  ]
);

/**
 * account.createTheme:account.createTheme Theme
 * #2b7ffd7f:729808255:729808255
 * slug:string
 * title:string
 * document:InputDocument
 */
export interface AccountCreateThemeM {
  _id: number;
  _method(): void;
  _values: [string, string, InputDocumentT];

  get_slug(): string;
  set_slug(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  get_document(): InputDocumentT;
  set_document(val: InputDocumentT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountCreateThemeM = r<new () => AccountCreateThemeM>(
  0x2b7ffd7f,
  "AccountCreateThemeM",
  () => [
    "slug",
    StringRW,
    "title",
    StringRW,
    "document",
    TypeRW(InputDocumentT)
  ]
);

/**
 * account.updateTheme:account.updateTheme Theme
 * #3b8ea202:999203330:999203330
 * flags:#
 * format:string
 * theme:InputTheme
 * slug:flags.0?string
 * title:flags.1?string
 * document:flags.2?InputDocument
 */
export interface AccountUpdateThemeM {
  _id: number;
  _method(): void;
  _values: [number, string, InputThemeT, string, string, InputDocumentT];

  get_flags(): number;
  set_flags(val: number): this;

  get_format(): string;
  set_format(val: string): this;

  get_theme(): InputThemeT;
  set_theme(val: InputThemeT): this;

  get_slug(): string;
  set_slug(val: string): this;

  has_slug(): boolean;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_document(): InputDocumentT;
  set_document(val: InputDocumentT): this;

  has_document(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdateThemeM = r<new () => AccountUpdateThemeM>(
  0x3b8ea202,
  "AccountUpdateThemeM",
  () => [
    "flags",
    IntRW,
    "format",
    StringRW,
    "theme",
    TypeRW(InputThemeT),
    "slug",
    Optional(StringRW, 0, 0),
    "title",
    Optional(StringRW, 0, 1),
    "document",
    Optional(TypeRW(InputDocumentT), 0, 2)
  ]
);

/**
 * account.saveTheme:account.saveTheme Bool
 * #f257106c:4065792108:-229175188
 * theme:InputTheme
 * unsave:Bool
 */
export interface AccountSaveThemeM {
  _id: number;
  _method(): void;
  _values: [InputThemeT, BoolT];

  get_theme(): InputThemeT;
  set_theme(val: InputThemeT): this;

  get_unsave(): BoolT;
  set_unsave(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSaveThemeM = r<new () => AccountSaveThemeM>(
  0xf257106c,
  "AccountSaveThemeM",
  () => ["theme", TypeRW(InputThemeT), "unsave", TypeRW(BoolT)]
);

/**
 * account.installTheme:account.installTheme Bool
 * #7ae43737:2061776695:2061776695
 * flags:#
 * dark:flags.0?true
 * format:flags.1?string
 * theme:flags.1?InputTheme
 */
export interface AccountInstallThemeM {
  _id: number;
  _method(): void;
  _values: [number, true, string, InputThemeT];

  get_flags(): number;
  set_flags(val: number): this;

  get_dark(): true;
  set_dark(val: true): this;

  has_dark(): boolean;

  get_format(): string;
  set_format(val: string): this;

  has_format(): boolean;

  get_theme(): InputThemeT;
  set_theme(val: InputThemeT): this;

  has_theme(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountInstallThemeM = r<new () => AccountInstallThemeM>(
  0x7ae43737,
  "AccountInstallThemeM",
  () => [
    "flags",
    IntRW,
    "dark",
    Optional(TrueRW, 0, 0),
    "format",
    Optional(StringRW, 0, 1),
    "theme",
    Optional(TypeRW(InputThemeT), 0, 1)
  ]
);

/**
 * account.getTheme:account.getTheme Theme
 * #8d9d742b:2375906347:-1919060949
 * format:string
 * theme:InputTheme
 * document_id:long
 */
export interface AccountGetThemeM {
  _id: number;
  _method(): void;
  _values: [string, InputThemeT, ProtoLong];

  get_format(): string;
  set_format(val: string): this;

  get_theme(): InputThemeT;
  set_theme(val: InputThemeT): this;

  get_document_id(): ProtoLong;
  set_document_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetThemeM = r<new () => AccountGetThemeM>(
  0x8d9d742b,
  "AccountGetThemeM",
  () => [
    "format",
    StringRW,
    "theme",
    TypeRW(InputThemeT),
    "document_id",
    LongRW
  ]
);

/**
 * account.getThemes:account.getThemes account.Themes
 * #285946f8:676939512:676939512
 * format:string
 * hash:int
 */
export interface AccountGetThemesM {
  _id: number;
  _method(): void;
  _values: [string, number];

  get_format(): string;
  set_format(val: string): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetThemesM = r<new () => AccountGetThemesM>(
  0x285946f8,
  "AccountGetThemesM",
  () => ["format", StringRW, "hash", IntRW]
);

/**
 * invokeAfterMsg:X
 * #cb9f372d:3416209197:-878758099
 * msg_id:long
 * query:!X
 */
export let CallInvokeAfterMsgM = c;
export type CallInvokeAfterMsgM = (
  invoker: ApiInvoker | Connection,
  req: InvokeAfterMsgM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * invokeAfterMsgs:X
 * #3dc4b4f0:1036301552:1036301552
 * msg_ids:Vector<long>
 * query:!X
 */
export let CallInvokeAfterMsgsM = c;
export type CallInvokeAfterMsgsM = (
  invoker: ApiInvoker | Connection,
  req: InvokeAfterMsgsM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * auth.logOut:Bool
 * #5717da40:1461180992:1461180992
 *
 */
export let CallAuthLogOutM = c;
export type CallAuthLogOutM = (
  invoker: ApiInvoker | Connection,
  req: AuthLogOutM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * auth.resetAuthorizations:Bool
 * #9fab0d1a:2678787354:-1616179942
 *
 */
export let CallAuthResetAuthorizationsM = c;
export type CallAuthResetAuthorizationsM = (
  invoker: ApiInvoker | Connection,
  req: AuthResetAuthorizationsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * auth.exportAuthorization:auth.ExportedAuthorization
 * #e5bfffcd:3854565325:-440401971
 * dc_id:int
 */
export let CallAuthExportAuthorizationM = c;
export type CallAuthExportAuthorizationM = (
  invoker: ApiInvoker | Connection,
  req: AuthExportAuthorizationM
) => Promise<(AuthExportedAuthorizationS | RpcErrorS) & { dc: number }>;

/**
 * auth.bindTempAuthKey:Bool
 * #cdd42a05:3453233669:-841733627
 * perm_auth_key_id:long
 * nonce:long
 * expires_at:int
 * encrypted_message:bytes
 */
export let CallAuthBindTempAuthKeyM = c;
export type CallAuthBindTempAuthKeyM = (
  invoker: ApiInvoker | Connection,
  req: AuthBindTempAuthKeyM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.registerDevice:Bool
 * #68976c6f:1754754159:1754754159
 * flags:#
 * no_muted:flags.0?true
 * token_type:int
 * token:string
 * app_sandbox:Bool
 * secret:bytes
 * other_uids:Vector<int>
 */
export let CallAccountRegisterDeviceM = c;
export type CallAccountRegisterDeviceM = (
  invoker: ApiInvoker | Connection,
  req: AccountRegisterDeviceM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.unregisterDevice:Bool
 * #3076c4bf:813089983:813089983
 * token_type:int
 * token:string
 * other_uids:Vector<int>
 */
export let CallAccountUnregisterDeviceM = c;
export type CallAccountUnregisterDeviceM = (
  invoker: ApiInvoker | Connection,
  req: AccountUnregisterDeviceM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.resetNotifySettings:Bool
 * #db7e1747:3682473799:-612493497
 *
 */
export let CallAccountResetNotifySettingsM = c;
export type CallAccountResetNotifySettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountResetNotifySettingsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.updateStatus:Bool
 * #6628562c:1713919532:1713919532
 * offline:Bool
 */
export let CallAccountUpdateStatusM = c;
export type CallAccountUpdateStatusM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdateStatusM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * contacts.getContactIDs:Vector<int>
 * #2caa4a42:749357634:749357634
 * hash:int
 */
export let CallContactsGetContactIDsM = c;
export type CallContactsGetContactIDsM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetContactIDsM
) => Promise<(VectorS<number> | RpcErrorS) & { dc: number }>;

/**
 * contacts.deleteByPhones:Bool
 * #1013fd9e:269745566:269745566
 * phones:Vector<string>
 */
export let CallContactsDeleteByPhonesM = c;
export type CallContactsDeleteByPhonesM = (
  invoker: ApiInvoker | Connection,
  req: ContactsDeleteByPhonesM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.deleteMessages:messages.AffectedMessages
 * #e58e95d2:3851326930:-443640366
 * flags:#
 * revoke:flags.0?true
 * id:Vector<int>
 */
export let CallMessagesDeleteMessagesM = c;
export type CallMessagesDeleteMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesDeleteMessagesM
) => Promise<(MessagesAffectedMessagesS | RpcErrorS) & { dc: number }>;

/**
 * messages.receivedMessages:Vector<ReceivedNotifyMessage>
 * #5a954c0:94983360:94983360
 * max_id:int
 */
export let CallMessagesReceivedMessagesM = c;
export type CallMessagesReceivedMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReceivedMessagesM
) => Promise<(VectorS<ReceivedNotifyMessageS> | RpcErrorS) & { dc: number }>;

/**
 * updates.getState:updates.State
 * #edd4882a:3990128682:-304838614
 *
 */
export let CallUpdatesGetStateM = c;
export type CallUpdatesGetStateM = (
  invoker: ApiInvoker | Connection,
  req: UpdatesGetStateM
) => Promise<(UpdatesStateT | RpcErrorS) & { dc: number }>;

/**
 * photos.deletePhotos:Vector<long>
 * #87cf7f2f:2278522671:-2016444625
 * id:Vector<InputPhoto>
 */
export let CallPhotosDeletePhotosM = c;
export type CallPhotosDeletePhotosM = (
  invoker: ApiInvoker | Connection,
  req: PhotosDeletePhotosM
) => Promise<(VectorS<ProtoLong> | RpcErrorS) & { dc: number }>;

/**
 * upload.saveFilePart:Bool
 * #b304a621:3003426337:-1291540959
 * file_id:long
 * file_part:int
 * bytes:bytes
 */
export let CallUploadSaveFilePartM = c;
export type CallUploadSaveFilePartM = (
  invoker: ApiInvoker | Connection,
  req: UploadSaveFilePartM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.getNearestDc:NearestDc
 * #1fb33026:531836966:531836966
 *
 */
export let CallHelpGetNearestDcM = c;
export type CallHelpGetNearestDcM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetNearestDcM
) => Promise<(NearestDcS | RpcErrorS) & { dc: number }>;

/**
 * help.getInviteText:help.InviteText
 * #4d392343:1295590211:1295590211
 *
 */
export let CallHelpGetInviteTextM = c;
export type CallHelpGetInviteTextM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetInviteTextM
) => Promise<(HelpInviteTextS | RpcErrorS) & { dc: number }>;

/**
 * messages.getDhConfig:messages.DhConfig
 * #26cf8950:651135312:651135312
 * version:int
 * random_length:int
 */
export let CallMessagesGetDhConfigM = c;
export type CallMessagesGetDhConfigM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetDhConfigM
) => Promise<(MessagesDhConfigT | RpcErrorS) & { dc: number }>;

/**
 * messages.acceptEncryption:EncryptedChat
 * #3dbc0415:1035731989:1035731989
 * peer:InputEncryptedChat
 * g_b:bytes
 * key_fingerprint:long
 */
export let CallMessagesAcceptEncryptionM = c;
export type CallMessagesAcceptEncryptionM = (
  invoker: ApiInvoker | Connection,
  req: MessagesAcceptEncryptionM
) => Promise<(EncryptedChatT | RpcErrorS) & { dc: number }>;

/**
 * messages.discardEncryption:Bool
 * #edd923c5:3990430661:-304536635
 * chat_id:int
 */
export let CallMessagesDiscardEncryptionM = c;
export type CallMessagesDiscardEncryptionM = (
  invoker: ApiInvoker | Connection,
  req: MessagesDiscardEncryptionM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.setEncryptedTyping:Bool
 * #791451ed:2031374829:2031374829
 * peer:InputEncryptedChat
 * typing:Bool
 */
export let CallMessagesSetEncryptedTypingM = c;
export type CallMessagesSetEncryptedTypingM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetEncryptedTypingM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.readEncryptedHistory:Bool
 * #7f4b690a:2135648522:2135648522
 * peer:InputEncryptedChat
 * max_date:int
 */
export let CallMessagesReadEncryptedHistoryM = c;
export type CallMessagesReadEncryptedHistoryM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReadEncryptedHistoryM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.receivedQueue:Vector<long>
 * #55a5bb66:1436924774:1436924774
 * max_qts:int
 */
export let CallMessagesReceivedQueueM = c;
export type CallMessagesReceivedQueueM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReceivedQueueM
) => Promise<(VectorS<ProtoLong> | RpcErrorS) & { dc: number }>;

/**
 * messages.reportEncryptedSpam:Bool
 * #4b0c8c0f:1259113487:1259113487
 * peer:InputEncryptedChat
 */
export let CallMessagesReportEncryptedSpamM = c;
export type CallMessagesReportEncryptedSpamM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReportEncryptedSpamM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * upload.saveBigFilePart:Bool
 * #de7b673d:3732629309:-562337987
 * file_id:long
 * file_part:int
 * file_total_parts:int
 * bytes:bytes
 */
export let CallUploadSaveBigFilePartM = c;
export type CallUploadSaveBigFilePartM = (
  invoker: ApiInvoker | Connection,
  req: UploadSaveBigFilePartM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * initConnection:X
 * #785188b8:2018609336:2018609336
 * flags:#
 * api_id:int
 * device_model:string
 * system_version:string
 * app_version:string
 * system_lang_code:string
 * lang_pack:string
 * lang_code:string
 * proxy:flags.0?InputClientProxy
 * query:!X
 */
export let CallInitConnectionM = c;
export type CallInitConnectionM = (
  invoker: ApiInvoker | Connection,
  req: InitConnectionM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * messages.readMessageContents:messages.AffectedMessages
 * #36a73f77:916930423:916930423
 * id:Vector<int>
 */
export let CallMessagesReadMessageContentsM = c;
export type CallMessagesReadMessageContentsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReadMessageContentsM
) => Promise<(MessagesAffectedMessagesS | RpcErrorS) & { dc: number }>;

/**
 * account.checkUsername:Bool
 * #2714d86c:655677548:655677548
 * username:string
 */
export let CallAccountCheckUsernameM = c;
export type CallAccountCheckUsernameM = (
  invoker: ApiInvoker | Connection,
  req: AccountCheckUsernameM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.deleteAccount:Bool
 * #418d4e0b:1099779595:1099779595
 * reason:string
 */
export let CallAccountDeleteAccountM = c;
export type CallAccountDeleteAccountM = (
  invoker: ApiInvoker | Connection,
  req: AccountDeleteAccountM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.getAccountTTL:AccountDaysTTL
 * #8fc711d:150761757:150761757
 *
 */
export let CallAccountGetAccountTtlM = c;
export type CallAccountGetAccountTtlM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetAccountTtlM
) => Promise<(AccountDaysTtlS | RpcErrorS) & { dc: number }>;

/**
 * account.setAccountTTL:Bool
 * #2442485e:608323678:608323678
 * ttl:AccountDaysTTL
 */
export let CallAccountSetAccountTtlM = c;
export type CallAccountSetAccountTtlM = (
  invoker: ApiInvoker | Connection,
  req: AccountSetAccountTtlM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * invokeWithLayer:X
 * #da9b0d0d:3667594509:-627372787
 * layer:int
 * query:!X
 */
export let CallInvokeWithLayerM = c;
export type CallInvokeWithLayerM = (
  invoker: ApiInvoker | Connection,
  req: InvokeWithLayerM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * account.updateDeviceLocked:Bool
 * #38df3532:954152242:954152242
 * period:int
 */
export let CallAccountUpdateDeviceLockedM = c;
export type CallAccountUpdateDeviceLockedM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdateDeviceLockedM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.resetAuthorization:Bool
 * #df77f3bc:3749180348:-545786948
 * hash:long
 */
export let CallAccountResetAuthorizationM = c;
export type CallAccountResetAuthorizationM = (
  invoker: ApiInvoker | Connection,
  req: AccountResetAuthorizationM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * auth.requestPasswordRecovery:auth.PasswordRecovery
 * #d897bc66:3633822822:-661144474
 *
 */
export let CallAuthRequestPasswordRecoveryM = c;
export type CallAuthRequestPasswordRecoveryM = (
  invoker: ApiInvoker | Connection,
  req: AuthRequestPasswordRecoveryM
) => Promise<(AuthPasswordRecoveryS | RpcErrorS) & { dc: number }>;

/**
 * invokeWithoutUpdates:X
 * #bf9459b7:3214170551:-1080796745
 * query:!X
 */
export let CallInvokeWithoutUpdatesM = c;
export type CallInvokeWithoutUpdatesM = (
  invoker: ApiInvoker | Connection,
  req: InvokeWithoutUpdatesM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * messages.uninstallStickerSet:Bool
 * #f96e55de:4184757726:-110209570
 * stickerset:InputStickerSet
 */
export let CallMessagesUninstallStickerSetM = c;
export type CallMessagesUninstallStickerSetM = (
  invoker: ApiInvoker | Connection,
  req: MessagesUninstallStickerSetM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.reorderStickerSets:Bool
 * #78337739:2016638777:2016638777
 * flags:#
 * masks:flags.0?true
 * order:Vector<long>
 */
export let CallMessagesReorderStickerSetsM = c;
export type CallMessagesReorderStickerSetsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReorderStickerSetsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.saveGif:Bool
 * #327a30cb:846868683:846868683
 * id:InputDocument
 * unsave:Bool
 */
export let CallMessagesSaveGifM = c;
export type CallMessagesSaveGifM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSaveGifM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * auth.cancelCode:Bool
 * #1f040578:520357240:520357240
 * phone_number:string
 * phone_code_hash:string
 */
export let CallAuthCancelCodeM = c;
export type CallAuthCancelCodeM = (
  invoker: ApiInvoker | Connection,
  req: AuthCancelCodeM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.setBotCallbackAnswer:Bool
 * #d58f130a:3582923530:-712043766
 * flags:#
 * alert:flags.1?true
 * query_id:long
 * message:flags.0?string
 * url:flags.2?string
 * cache_time:int
 */
export let CallMessagesSetBotCallbackAnswerM = c;
export type CallMessagesSetBotCallbackAnswerM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetBotCallbackAnswerM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.readFeaturedStickers:Bool
 * #5b118126:1527873830:1527873830
 * id:Vector<long>
 */
export let CallMessagesReadFeaturedStickersM = c;
export type CallMessagesReadFeaturedStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReadFeaturedStickersM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.saveRecentSticker:Bool
 * #392718f8:958863608:958863608
 * flags:#
 * attached:flags.0?true
 * id:InputDocument
 * unsave:Bool
 */
export let CallMessagesSaveRecentStickerM = c;
export type CallMessagesSaveRecentStickerM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSaveRecentStickerM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.clearRecentStickers:Bool
 * #8999602d:2308530221:-1986437075
 * flags:#
 * attached:flags.0?true
 */
export let CallMessagesClearRecentStickersM = c;
export type CallMessagesClearRecentStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesClearRecentStickersM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.confirmPhone:Bool
 * #5f2178c3:1596029123:1596029123
 * phone_code_hash:string
 * phone_code:string
 */
export let CallAccountConfirmPhoneM = c;
export type CallAccountConfirmPhoneM = (
  invoker: ApiInvoker | Connection,
  req: AccountConfirmPhoneM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * auth.dropTempAuthKeys:Bool
 * #8e48a188:2387124616:-1907842680
 * except_auth_keys:Vector<long>
 */
export let CallAuthDropTempAuthKeysM = c;
export type CallAuthDropTempAuthKeysM = (
  invoker: ApiInvoker | Connection,
  req: AuthDropTempAuthKeysM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.setBotUpdatesStatus:Bool
 * #ec22cfcd:3961704397:-333262899
 * pending_updates_count:int
 * message:string
 */
export let CallHelpSetBotUpdatesStatusM = c;
export type CallHelpSetBotUpdatesStatusM = (
  invoker: ApiInvoker | Connection,
  req: HelpSetBotUpdatesStatusM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * bots.sendCustomRequest:DataJSON
 * #aa2769ed:2854709741:-1440257555
 * custom_method:string
 * params:DataJSON
 */
export let CallBotsSendCustomRequestM = c;
export type CallBotsSendCustomRequestM = (
  invoker: ApiInvoker | Connection,
  req: BotsSendCustomRequestM
) => Promise<(DataJsonT | RpcErrorS) & { dc: number }>;

/**
 * bots.answerWebhookJSONQuery:Bool
 * #e6213f4d:3860938573:-434028723
 * query_id:long
 * data:DataJSON
 */
export let CallBotsAnswerWebhookJsonQueryM = c;
export type CallBotsAnswerWebhookJsonQueryM = (
  invoker: ApiInvoker | Connection,
  req: BotsAnswerWebhookJsonQueryM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.getTmpPassword:account.TmpPassword
 * #449e0b51:1151208273:1151208273
 * password:InputCheckPasswordSRP
 * period:int
 */
export let CallAccountGetTmpPasswordM = c;
export type CallAccountGetTmpPasswordM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetTmpPasswordM
) => Promise<(AccountTmpPasswordS | RpcErrorS) & { dc: number }>;

/**
 * payments.clearSavedInfo:Bool
 * #d83d70c1:3627905217:-667062079
 * flags:#
 * credentials:flags.0?true
 * info:flags.1?true
 */
export let CallPaymentsClearSavedInfoM = c;
export type CallPaymentsClearSavedInfoM = (
  invoker: ApiInvoker | Connection,
  req: PaymentsClearSavedInfoM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.setBotPrecheckoutResults:Bool
 * #9c2dd95:163765653:163765653
 * flags:#
 * success:flags.1?true
 * query_id:long
 * error:flags.0?string
 */
export let CallMessagesSetBotPrecheckoutResultsM = c;
export type CallMessagesSetBotPrecheckoutResultsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetBotPrecheckoutResultsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * phone.getCallConfig:DataJSON
 * #55451fa9:1430593449:1430593449
 *
 */
export let CallPhoneGetCallConfigM = c;
export type CallPhoneGetCallConfigM = (
  invoker: ApiInvoker | Connection,
  req: PhoneGetCallConfigM
) => Promise<(DataJsonT | RpcErrorS) & { dc: number }>;

/**
 * phone.receivedCall:Bool
 * #17d54f61:399855457:399855457
 * peer:InputPhoneCall
 */
export let CallPhoneReceivedCallM = c;
export type CallPhoneReceivedCallM = (
  invoker: ApiInvoker | Connection,
  req: PhoneReceivedCallM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * phone.saveCallDebug:Bool
 * #277add7e:662363518:662363518
 * peer:InputPhoneCall
 * debug:DataJSON
 */
export let CallPhoneSaveCallDebugM = c;
export type CallPhoneSaveCallDebugM = (
  invoker: ApiInvoker | Connection,
  req: PhoneSaveCallDebugM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * upload.getCdnFile:upload.CdnFile
 * #2000bcc3:536919235:536919235
 * file_token:bytes
 * offset:int
 * limit:int
 */
export let CallUploadGetCdnFileM = c;
export type CallUploadGetCdnFileM = (
  invoker: ApiInvoker | Connection,
  req: UploadGetCdnFileM
) => Promise<(UploadCdnFileT | RpcErrorS) & { dc: number }>;

/**
 * upload.reuploadCdnFile:Vector<FileHash>
 * #9b2754a8:2603046056:-1691921240
 * file_token:bytes
 * request_token:bytes
 */
export let CallUploadReuploadCdnFileM = c;
export type CallUploadReuploadCdnFileM = (
  invoker: ApiInvoker | Connection,
  req: UploadReuploadCdnFileM
) => Promise<(VectorS<FileHashT> | RpcErrorS) & { dc: number }>;

/**
 * langpack.getStrings:Vector<LangPackString>
 * #efea3803:4025104387:-269862909
 * lang_pack:string
 * lang_code:string
 * keys:Vector<string>
 */
export let CallLangpackGetStringsM = c;
export type CallLangpackGetStringsM = (
  invoker: ApiInvoker | Connection,
  req: LangpackGetStringsM
) => Promise<(VectorS<LangPackStringT> | RpcErrorS) & { dc: number }>;

/**
 * langpack.getLanguages:Vector<LangPackLanguage>
 * #42c6978f:1120311183:1120311183
 * lang_pack:string
 */
export let CallLangpackGetLanguagesM = c;
export type CallLangpackGetLanguagesM = (
  invoker: ApiInvoker | Connection,
  req: LangpackGetLanguagesM
) => Promise<(VectorS<LangPackLanguageS> | RpcErrorS) & { dc: number }>;

/**
 * upload.getCdnFileHashes:Vector<FileHash>
 * #4da54231:1302676017:1302676017
 * file_token:bytes
 * offset:int
 */
export let CallUploadGetCdnFileHashesM = c;
export type CallUploadGetCdnFileHashesM = (
  invoker: ApiInvoker | Connection,
  req: UploadGetCdnFileHashesM
) => Promise<(VectorS<FileHashT> | RpcErrorS) & { dc: number }>;

/**
 * messages.faveSticker:Bool
 * #b9ffc55b:3120547163:-1174420133
 * id:InputDocument
 * unfave:Bool
 */
export let CallMessagesFaveStickerM = c;
export type CallMessagesFaveStickerM = (
  invoker: ApiInvoker | Connection,
  req: MessagesFaveStickerM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * contacts.resetSaved:Bool
 * #879537f1:2274703345:-2020263951
 *
 */
export let CallContactsResetSavedM = c;
export type CallContactsResetSavedM = (
  invoker: ApiInvoker | Connection,
  req: ContactsResetSavedM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.uploadEncryptedFile:EncryptedFile
 * #5057c497:1347929239:1347929239
 * peer:InputEncryptedChat
 * file:InputEncryptedFile
 */
export let CallMessagesUploadEncryptedFileM = c;
export type CallMessagesUploadEncryptedFileM = (
  invoker: ApiInvoker | Connection,
  req: MessagesUploadEncryptedFileM
) => Promise<(EncryptedFileT | RpcErrorS) & { dc: number }>;

/**
 * account.resetWebAuthorization:Bool
 * #2d01b9ef:755087855:755087855
 * hash:long
 */
export let CallAccountResetWebAuthorizationM = c;
export type CallAccountResetWebAuthorizationM = (
  invoker: ApiInvoker | Connection,
  req: AccountResetWebAuthorizationM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.resetWebAuthorizations:Bool
 * #682d2594:1747789204:1747789204
 *
 */
export let CallAccountResetWebAuthorizationsM = c;
export type CallAccountResetWebAuthorizationsM = (
  invoker: ApiInvoker | Connection,
  req: AccountResetWebAuthorizationsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.acceptTermsOfService:Bool
 * #ee72f79a:4000511898:-294455398
 * id:DataJSON
 */
export let CallHelpAcceptTermsOfServiceM = c;
export type CallHelpAcceptTermsOfServiceM = (
  invoker: ApiInvoker | Connection,
  req: HelpAcceptTermsOfServiceM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.deleteSecureValue:Bool
 * #b880bc4b:3095444555:-1199522741
 * types:Vector<SecureValueType>
 */
export let CallAccountDeleteSecureValueM = c;
export type CallAccountDeleteSecureValueM = (
  invoker: ApiInvoker | Connection,
  req: AccountDeleteSecureValueM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.verifyPhone:Bool
 * #4dd3a7f6:1305716726:1305716726
 * phone_number:string
 * phone_code_hash:string
 * phone_code:string
 */
export let CallAccountVerifyPhoneM = c;
export type CallAccountVerifyPhoneM = (
  invoker: ApiInvoker | Connection,
  req: AccountVerifyPhoneM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.sendVerifyEmailCode:account.SentEmailCode
 * #7011509f:1880182943:1880182943
 * email:string
 */
export let CallAccountSendVerifyEmailCodeM = c;
export type CallAccountSendVerifyEmailCodeM = (
  invoker: ApiInvoker | Connection,
  req: AccountSendVerifyEmailCodeM
) => Promise<(AccountSentEmailCodeS | RpcErrorS) & { dc: number }>;

/**
 * account.verifyEmail:Bool
 * #ecba39db:3971627483:-323339813
 * email:string
 * code:string
 */
export let CallAccountVerifyEmailM = c;
export type CallAccountVerifyEmailM = (
  invoker: ApiInvoker | Connection,
  req: AccountVerifyEmailM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * contacts.getSaved:Vector<SavedContact>
 * #82f1e39f:2196890527:-2098076769
 *
 */
export let CallContactsGetSavedM = c;
export type CallContactsGetSavedM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetSavedM
) => Promise<(VectorS<SavedContactT> | RpcErrorS) & { dc: number }>;

/**
 * account.initTakeoutSession:account.Takeout
 * #f05b4804:4032514052:-262453244
 * flags:#
 * contacts:flags.0?true
 * message_users:flags.1?true
 * message_chats:flags.2?true
 * message_megagroups:flags.3?true
 * message_channels:flags.4?true
 * files:flags.5?true
 * file_max_size:flags.5?int
 */
export let CallAccountInitTakeoutSessionM = c;
export type CallAccountInitTakeoutSessionM = (
  invoker: ApiInvoker | Connection,
  req: AccountInitTakeoutSessionM
) => Promise<(AccountTakeoutS | RpcErrorS) & { dc: number }>;

/**
 * account.finishTakeoutSession:Bool
 * #1d2652ee:489050862:489050862
 * flags:#
 * success:flags.0?true
 */
export let CallAccountFinishTakeoutSessionM = c;
export type CallAccountFinishTakeoutSessionM = (
  invoker: ApiInvoker | Connection,
  req: AccountFinishTakeoutSessionM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getSplitRanges:Vector<MessageRange>
 * #1cff7e08:486505992:486505992
 *
 */
export let CallMessagesGetSplitRangesM = c;
export type CallMessagesGetSplitRangesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetSplitRangesM
) => Promise<(VectorS<MessageRangeT> | RpcErrorS) & { dc: number }>;

/**
 * invokeWithMessagesRange:X
 * #365275f2:911373810:911373810
 * range:MessageRange
 * query:!X
 */
export let CallInvokeWithMessagesRangeM = c;
export type CallInvokeWithMessagesRangeM = (
  invoker: ApiInvoker | Connection,
  req: InvokeWithMessagesRangeM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * invokeWithTakeout:X
 * #aca9fd2e:2896821550:-1398145746
 * takeout_id:long
 * query:!X
 */
export let CallInvokeWithTakeoutM = c;
export type CallInvokeWithTakeoutM = (
  invoker: ApiInvoker | Connection,
  req: InvokeWithTakeoutM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * contacts.toggleTopPeers:Bool
 * #8514bdda:2232729050:-2062238246
 * enabled:Bool
 */
export let CallContactsToggleTopPeersM = c;
export type CallContactsToggleTopPeersM = (
  invoker: ApiInvoker | Connection,
  req: ContactsToggleTopPeersM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.clearAllDrafts:Bool
 * #7e58ee9c:2119757468:2119757468
 *
 */
export let CallMessagesClearAllDraftsM = c;
export type CallMessagesClearAllDraftsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesClearAllDraftsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * langpack.getLanguage:LangPackLanguage
 * #6a596502:1784243458:1784243458
 * lang_pack:string
 * lang_code:string
 */
export let CallLangpackGetLanguageM = c;
export type CallLangpackGetLanguageM = (
  invoker: ApiInvoker | Connection,
  req: LangpackGetLanguageM
) => Promise<(LangPackLanguageS | RpcErrorS) & { dc: number }>;

/**
 * account.confirmPasswordEmail:Bool
 * #8fdf1920:2413762848:-1881204448
 * code:string
 */
export let CallAccountConfirmPasswordEmailM = c;
export type CallAccountConfirmPasswordEmailM = (
  invoker: ApiInvoker | Connection,
  req: AccountConfirmPasswordEmailM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.resendPasswordEmail:Bool
 * #7a7f2a15:2055154197:2055154197
 *
 */
export let CallAccountResendPasswordEmailM = c;
export type CallAccountResendPasswordEmailM = (
  invoker: ApiInvoker | Connection,
  req: AccountResendPasswordEmailM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.cancelPasswordEmail:Bool
 * #c1cbd5b6:3251361206:-1043606090
 *
 */
export let CallAccountCancelPasswordEmailM = c;
export type CallAccountCancelPasswordEmailM = (
  invoker: ApiInvoker | Connection,
  req: AccountCancelPasswordEmailM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.getSupportName:help.SupportName
 * #d360e72c:3546343212:-748624084
 *
 */
export let CallHelpGetSupportNameM = c;
export type CallHelpGetSupportNameM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetSupportNameM
) => Promise<(HelpSupportNameS | RpcErrorS) & { dc: number }>;

/**
 * account.getContactSignUpNotification:Bool
 * #9f07c728:2668087080:-1626880216
 *
 */
export let CallAccountGetContactSignUpNotificationM = c;
export type CallAccountGetContactSignUpNotificationM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetContactSignUpNotificationM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.setContactSignUpNotification:Bool
 * #cff43f61:3488890721:-806076575
 * silent:Bool
 */
export let CallAccountSetContactSignUpNotificationM = c;
export type CallAccountSetContactSignUpNotificationM = (
  invoker: ApiInvoker | Connection,
  req: AccountSetContactSignUpNotificationM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.saveWallPaper:Bool
 * #6c5a5b37:1817860919:1817860919
 * wallpaper:InputWallPaper
 * unsave:Bool
 * settings:WallPaperSettings
 */
export let CallAccountSaveWallPaperM = c;
export type CallAccountSaveWallPaperM = (
  invoker: ApiInvoker | Connection,
  req: AccountSaveWallPaperM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.installWallPaper:Bool
 * #feed5769:4276967273:-18000023
 * wallpaper:InputWallPaper
 * settings:WallPaperSettings
 */
export let CallAccountInstallWallPaperM = c;
export type CallAccountInstallWallPaperM = (
  invoker: ApiInvoker | Connection,
  req: AccountInstallWallPaperM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.resetWallPapers:Bool
 * #bb3b9804:3141244932:-1153722364
 *
 */
export let CallAccountResetWallPapersM = c;
export type CallAccountResetWallPapersM = (
  invoker: ApiInvoker | Connection,
  req: AccountResetWallPapersM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.saveAutoDownloadSettings:Bool
 * #76f36233:1995661875:1995661875
 * flags:#
 * low:flags.0?true
 * high:flags.1?true
 * settings:AutoDownloadSettings
 */
export let CallAccountSaveAutoDownloadSettingsM = c;
export type CallAccountSaveAutoDownloadSettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountSaveAutoDownloadSettingsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getEmojiKeywordsLanguages:Vector<EmojiLanguage>
 * #4e9963b2:1318675378:1318675378
 * lang_codes:Vector<string>
 */
export let CallMessagesGetEmojiKeywordsLanguagesM = c;
export type CallMessagesGetEmojiKeywordsLanguagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetEmojiKeywordsLanguagesM
) => Promise<(VectorS<EmojiLanguageS> | RpcErrorS) & { dc: number }>;

/**
 * messages.getEmojiURL:EmojiURL
 * #d5b10c26:3585149990:-709817306
 * lang_code:string
 */
export let CallMessagesGetEmojiUrlM = c;
export type CallMessagesGetEmojiUrlM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetEmojiUrlM
) => Promise<(EmojiUrlS | RpcErrorS) & { dc: number }>;

/**
 * account.saveTheme:Bool
 * #f257106c:4065792108:-229175188
 * theme:InputTheme
 * unsave:Bool
 */
export let CallAccountSaveThemeM = c;
export type CallAccountSaveThemeM = (
  invoker: ApiInvoker | Connection,
  req: AccountSaveThemeM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.installTheme:Bool
 * #7ae43737:2061776695:2061776695
 * flags:#
 * dark:flags.0?true
 * format:flags.1?string
 * theme:flags.1?InputTheme
 */
export let CallAccountInstallThemeM = c;
export type CallAccountInstallThemeM = (
  invoker: ApiInvoker | Connection,
  req: AccountInstallThemeM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * inputMediaUploadedPhoto:InputMedia
 * #1e287d04:505969924:505969924
 * flags:#
 * file:InputFile
 * stickers:flags.0?Vector<InputDocument>
 * ttl_seconds:flags.1?int
 */
export interface InputMediaUploadedPhotoS {
  _id: number;
  _values: [number, InputFileT, VectorS<InputDocumentT>, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_file(): InputFileT;
  set_file(val: InputFileT): this;

  get_stickers(): VectorS<InputDocumentT>;
  set_stickers(val: VectorS<InputDocumentT>): this;

  has_stickers(): boolean;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaUploadedPhotoS = r<new () => InputMediaUploadedPhotoS>(
  0x1e287d04,
  "InputMediaUploadedPhotoS",
  () => [
    "flags",
    IntRW,
    "file",
    TypeRW(InputFileT),
    "stickers",
    Optional(VectorRW(TypeRW(InputDocumentT)), 0, 0),
    "ttl_seconds",
    Optional(IntRW, 0, 1)
  ]
);

/**
 * inputMediaPhoto:InputMedia
 * #b3ba0635:3015312949:-1279654347
 * flags:#
 * id:InputPhoto
 * ttl_seconds:flags.0?int
 */
export interface InputMediaPhotoS {
  _id: number;
  _values: [number, InputPhotoT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): InputPhotoT;
  set_id(val: InputPhotoT): this;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaPhotoS = r<new () => InputMediaPhotoS>(
  0xb3ba0635,
  "InputMediaPhotoS",
  () => [
    "flags",
    IntRW,
    "id",
    TypeRW(InputPhotoT),
    "ttl_seconds",
    Optional(IntRW, 0, 0)
  ]
);

/**
 * inputMediaGeoPoint:InputMedia
 * #f9c44144:4190388548:-104578748
 * geo_point:InputGeoPoint
 */
export interface InputMediaGeoPointS {
  _id: number;
  _values: [InputGeoPointT];

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaGeoPointS = r<new () => InputMediaGeoPointS>(
  0xf9c44144,
  "InputMediaGeoPointS",
  () => ["geo_point", TypeRW(InputGeoPointT)]
);

/**
 * inputChatUploadedPhoto:InputChatPhoto
 * #927c55b4:2457621940:-1837345356
 * file:InputFile
 */
export interface InputChatUploadedPhotoS {
  _id: number;
  _values: [InputFileT];

  get_file(): InputFileT;
  set_file(val: InputFileT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputChatUploadedPhotoS = r<new () => InputChatUploadedPhotoS>(
  0x927c55b4,
  "InputChatUploadedPhotoS",
  () => ["file", TypeRW(InputFileT)]
);

/**
 * inputChatPhoto:InputChatPhoto
 * #8953ad37:2303962423:-1991004873
 * id:InputPhoto
 */
export interface InputChatPhotoS {
  _id: number;
  _values: [InputPhotoT];

  get_id(): InputPhotoT;
  set_id(val: InputPhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputChatPhotoS = r<new () => InputChatPhotoS>(
  0x8953ad37,
  "InputChatPhotoS",
  () => ["id", TypeRW(InputPhotoT)]
);

/**
 * userProfilePhoto:UserProfilePhoto
 * #ecd75d8c:3973537164:-321430132
 * photo_id:long
 * photo_small:FileLocation
 * photo_big:FileLocation
 * dc_id:int
 */
export interface UserProfilePhotoS {
  _id: number;
  _values: [ProtoLong, FileLocationT, FileLocationT, number];

  get_photo_id(): ProtoLong;
  set_photo_id(val: ProtoLong): this;

  get_photo_small(): FileLocationT;
  set_photo_small(val: FileLocationT): this;

  get_photo_big(): FileLocationT;
  set_photo_big(val: FileLocationT): this;

  get_dc_id(): number;
  set_dc_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserProfilePhotoS = r<new () => UserProfilePhotoS>(
  0xecd75d8c,
  "UserProfilePhotoS",
  () => [
    "photo_id",
    LongRW,
    "photo_small",
    TypeRW(FileLocationT),
    "photo_big",
    TypeRW(FileLocationT),
    "dc_id",
    IntRW
  ]
);

/**
 * chatParticipantsForbidden:ChatParticipants
 * #fc900c2b:4237298731:-57668565
 * flags:#
 * chat_id:int
 * self_participant:flags.0?ChatParticipant
 */
export interface ChatParticipantsForbiddenS {
  _id: number;
  _values: [number, number, ChatParticipantT];

  get_flags(): number;
  set_flags(val: number): this;

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_self_participant(): ChatParticipantT;
  set_self_participant(val: ChatParticipantT): this;

  has_self_participant(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatParticipantsForbiddenS = r<new () => ChatParticipantsForbiddenS>(
  0xfc900c2b,
  "ChatParticipantsForbiddenS",
  () => [
    "flags",
    IntRW,
    "chat_id",
    IntRW,
    "self_participant",
    Optional(TypeRW(ChatParticipantT), 0, 0)
  ]
);

/**
 * chatParticipants:ChatParticipants
 * #3f460fed:1061556205:1061556205
 * chat_id:int
 * participants:Vector<ChatParticipant>
 * version:int
 */
export interface ChatParticipantsS {
  _id: number;
  _values: [number, VectorS<ChatParticipantT>, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_participants(): VectorS<ChatParticipantT>;
  set_participants(val: VectorS<ChatParticipantT>): this;

  get_version(): number;
  set_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatParticipantsS = r<new () => ChatParticipantsS>(
  0x3f460fed,
  "ChatParticipantsS",
  () => [
    "chat_id",
    IntRW,
    "participants",
    VectorRW(TypeRW(ChatParticipantT)),
    "version",
    IntRW
  ]
);

/**
 * chatPhoto:ChatPhoto
 * #475cdbd5:1197267925:1197267925
 * photo_small:FileLocation
 * photo_big:FileLocation
 * dc_id:int
 */
export interface ChatPhotoS {
  _id: number;
  _values: [FileLocationT, FileLocationT, number];

  get_photo_small(): FileLocationT;
  set_photo_small(val: FileLocationT): this;

  get_photo_big(): FileLocationT;
  set_photo_big(val: FileLocationT): this;

  get_dc_id(): number;
  set_dc_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatPhotoS = r<new () => ChatPhotoS>(
  0x475cdbd5,
  "ChatPhotoS",
  () => [
    "photo_small",
    TypeRW(FileLocationT),
    "photo_big",
    TypeRW(FileLocationT),
    "dc_id",
    IntRW
  ]
);

/**
 * messageMediaGeo:MessageMedia
 * #56e0d474:1457575028:1457575028
 * geo:GeoPoint
 */
export interface MessageMediaGeoS {
  _id: number;
  _values: [GeoPointT];

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaGeoS = r<new () => MessageMediaGeoS>(
  0x56e0d474,
  "MessageMediaGeoS",
  () => ["geo", TypeRW(GeoPointT)]
);

/**
 * photoSize:PhotoSize
 * #77bfb61b:2009052699:2009052699
 * type:string
 * location:FileLocation
 * w:int
 * h:int
 * size:int
 */
export interface PhotoSizeS {
  _id: number;
  _values: [string, FileLocationT, number, number, number];

  get_type(): string;
  set_type(val: string): this;

  get_location(): FileLocationT;
  set_location(val: FileLocationT): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  get_size(): number;
  set_size(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotoSizeS = r<new () => PhotoSizeS>(
  0x77bfb61b,
  "PhotoSizeS",
  () => [
    "type",
    StringRW,
    "location",
    TypeRW(FileLocationT),
    "w",
    IntRW,
    "h",
    IntRW,
    "size",
    IntRW
  ]
);

/**
 * photoCachedSize:PhotoSize
 * #e9a734fa:3920049402:-374917894
 * type:string
 * location:FileLocation
 * w:int
 * h:int
 * bytes:bytes
 */
export interface PhotoCachedSizeS {
  _id: number;
  _values: [string, FileLocationT, number, number, Uint8Array];

  get_type(): string;
  set_type(val: string): this;

  get_location(): FileLocationT;
  set_location(val: FileLocationT): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotoCachedSizeS = r<new () => PhotoCachedSizeS>(
  0xe9a734fa,
  "PhotoCachedSizeS",
  () => [
    "type",
    StringRW,
    "location",
    TypeRW(FileLocationT),
    "w",
    IntRW,
    "h",
    IntRW,
    "bytes",
    BytesRW
  ]
);

/**
 * auth.sentCode:auth.SentCode
 * #5e002502:1577067778:1577067778
 * flags:#
 * type:auth.SentCodeType
 * phone_code_hash:string
 * next_type:flags.1?auth.CodeType
 * timeout:flags.2?int
 */
export interface AuthSentCodeS {
  _id: number;
  _values: [number, AuthSentCodeTypeT, string, AuthCodeTypeT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_type(): AuthSentCodeTypeT;
  set_type(val: AuthSentCodeTypeT): this;

  get_phone_code_hash(): string;
  set_phone_code_hash(val: string): this;

  get_next_type(): AuthCodeTypeT;
  set_next_type(val: AuthCodeTypeT): this;

  has_next_type(): boolean;

  get_timeout(): number;
  set_timeout(val: number): this;

  has_timeout(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthSentCodeS = r<new () => AuthSentCodeS>(
  0x5e002502,
  "AuthSentCodeS",
  () => [
    "flags",
    IntRW,
    "type",
    TypeRW(AuthSentCodeTypeT),
    "phone_code_hash",
    StringRW,
    "next_type",
    Optional(TypeRW(AuthCodeTypeT), 0, 1),
    "timeout",
    Optional(IntRW, 0, 2)
  ]
);

/**
 * inputPeerNotifySettings:InputPeerNotifySettings
 * #9c3d198e:2621249934:-1673717362
 * flags:#
 * show_previews:flags.0?Bool
 * silent:flags.1?Bool
 * mute_until:flags.2?int
 * sound:flags.3?string
 */
export interface InputPeerNotifySettingsS {
  _id: number;
  _values: [number, BoolT, BoolT, number, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_show_previews(): BoolT;
  set_show_previews(val: BoolT): this;

  has_show_previews(): boolean;

  get_silent(): BoolT;
  set_silent(val: BoolT): this;

  has_silent(): boolean;

  get_mute_until(): number;
  set_mute_until(val: number): this;

  has_mute_until(): boolean;

  get_sound(): string;
  set_sound(val: string): this;

  has_sound(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerNotifySettingsS = r<new () => InputPeerNotifySettingsS>(
  0x9c3d198e,
  "InputPeerNotifySettingsS",
  () => [
    "flags",
    IntRW,
    "show_previews",
    Optional(TypeRW(BoolT), 0, 0),
    "silent",
    Optional(TypeRW(BoolT), 0, 1),
    "mute_until",
    Optional(IntRW, 0, 2),
    "sound",
    Optional(StringRW, 0, 3)
  ]
);

/**
 * peerNotifySettings:PeerNotifySettings
 * #af509d20:2941295904:-1353671392
 * flags:#
 * show_previews:flags.0?Bool
 * silent:flags.1?Bool
 * mute_until:flags.2?int
 * sound:flags.3?string
 */
export interface PeerNotifySettingsS {
  _id: number;
  _values: [number, BoolT, BoolT, number, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_show_previews(): BoolT;
  set_show_previews(val: BoolT): this;

  has_show_previews(): boolean;

  get_silent(): BoolT;
  set_silent(val: BoolT): this;

  has_silent(): boolean;

  get_mute_until(): number;
  set_mute_until(val: number): this;

  has_mute_until(): boolean;

  get_sound(): string;
  set_sound(val: string): this;

  has_sound(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PeerNotifySettingsS = r<new () => PeerNotifySettingsS>(
  0xaf509d20,
  "PeerNotifySettingsS",
  () => [
    "flags",
    IntRW,
    "show_previews",
    Optional(TypeRW(BoolT), 0, 0),
    "silent",
    Optional(TypeRW(BoolT), 0, 1),
    "mute_until",
    Optional(IntRW, 0, 2),
    "sound",
    Optional(StringRW, 0, 3)
  ]
);

/**
 * contact:Contact
 * #f911c994:4178692500:-116274796
 * user_id:int
 * mutual:Bool
 */
export interface ContactS {
  _id: number;
  _values: [number, BoolT];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_mutual(): BoolT;
  set_mutual(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactS = r<new () => ContactS>(0xf911c994, "ContactS", () => [
  "user_id",
  IntRW,
  "mutual",
  TypeRW(BoolT)
]);

/**
 * contactStatus:ContactStatus
 * #d3680c61:3546811489:-748155807
 * user_id:int
 * status:UserStatus
 */
export interface ContactStatusS {
  _id: number;
  _values: [number, UserStatusT];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_status(): UserStatusT;
  set_status(val: UserStatusT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactStatusS = r<new () => ContactStatusS>(
  0xd3680c61,
  "ContactStatusS",
  () => ["user_id", IntRW, "status", TypeRW(UserStatusT)]
);

/**
 * updateUserTyping:Update
 * #5c486927:1548249383:1548249383
 * user_id:int
 * action:SendMessageAction
 */
export interface UpdateUserTypingS {
  _id: number;
  _values: [number, SendMessageActionT];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_action(): SendMessageActionT;
  set_action(val: SendMessageActionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserTypingS = r<new () => UpdateUserTypingS>(
  0x5c486927,
  "UpdateUserTypingS",
  () => ["user_id", IntRW, "action", TypeRW(SendMessageActionT)]
);

/**
 * updateChatUserTyping:Update
 * #9a65ea1f:2590370335:-1704596961
 * chat_id:int
 * user_id:int
 * action:SendMessageAction
 */
export interface UpdateChatUserTypingS {
  _id: number;
  _values: [number, number, SendMessageActionT];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_action(): SendMessageActionT;
  set_action(val: SendMessageActionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatUserTypingS = r<new () => UpdateChatUserTypingS>(
  0x9a65ea1f,
  "UpdateChatUserTypingS",
  () => [
    "chat_id",
    IntRW,
    "user_id",
    IntRW,
    "action",
    TypeRW(SendMessageActionT)
  ]
);

/**
 * updateUserStatus:Update
 * #1bfbd823:469489699:469489699
 * user_id:int
 * status:UserStatus
 */
export interface UpdateUserStatusS {
  _id: number;
  _values: [number, UserStatusT];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_status(): UserStatusT;
  set_status(val: UserStatusT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserStatusS = r<new () => UpdateUserStatusS>(
  0x1bfbd823,
  "UpdateUserStatusS",
  () => ["user_id", IntRW, "status", TypeRW(UserStatusT)]
);

/**
 * upload.file:upload.File
 * #96a18d5:157948117:157948117
 * type:storage.FileType
 * mtime:int
 * bytes:bytes
 */
export interface UploadFileS {
  _id: number;
  _values: [StorageFileTypeT, number, Uint8Array];

  get_type(): StorageFileTypeT;
  set_type(val: StorageFileTypeT): this;

  get_mtime(): number;
  set_mtime(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadFileS = r<new () => UploadFileS>(
  0x96a18d5,
  "UploadFileS",
  () => ["type", TypeRW(StorageFileTypeT), "mtime", IntRW, "bytes", BytesRW]
);

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
export interface ConfigS {
  _id: number;
  _values: [
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
    VectorS<DcOptionT>,
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

  get_flags(): number;
  set_flags(val: number): this;

  get_phonecalls_enabled(): true;
  set_phonecalls_enabled(val: true): this;

  has_phonecalls_enabled(): boolean;

  get_default_p2p_contacts(): true;
  set_default_p2p_contacts(val: true): this;

  has_default_p2p_contacts(): boolean;

  get_preload_featured_stickers(): true;
  set_preload_featured_stickers(val: true): this;

  has_preload_featured_stickers(): boolean;

  get_ignore_phone_entities(): true;
  set_ignore_phone_entities(val: true): this;

  has_ignore_phone_entities(): boolean;

  get_revoke_pm_inbox(): true;
  set_revoke_pm_inbox(val: true): this;

  has_revoke_pm_inbox(): boolean;

  get_blocked_mode(): true;
  set_blocked_mode(val: true): this;

  has_blocked_mode(): boolean;

  get_pfs_enabled(): true;
  set_pfs_enabled(val: true): this;

  has_pfs_enabled(): boolean;

  get_date(): number;
  set_date(val: number): this;

  get_expires(): number;
  set_expires(val: number): this;

  get_test_mode(): BoolT;
  set_test_mode(val: BoolT): this;

  get_this_dc(): number;
  set_this_dc(val: number): this;

  get_dc_options(): VectorS<DcOptionT>;
  set_dc_options(val: VectorS<DcOptionT>): this;

  get_dc_txt_domain_name(): string;
  set_dc_txt_domain_name(val: string): this;

  get_chat_size_max(): number;
  set_chat_size_max(val: number): this;

  get_megagroup_size_max(): number;
  set_megagroup_size_max(val: number): this;

  get_forwarded_count_max(): number;
  set_forwarded_count_max(val: number): this;

  get_online_update_period_ms(): number;
  set_online_update_period_ms(val: number): this;

  get_offline_blur_timeout_ms(): number;
  set_offline_blur_timeout_ms(val: number): this;

  get_offline_idle_timeout_ms(): number;
  set_offline_idle_timeout_ms(val: number): this;

  get_online_cloud_timeout_ms(): number;
  set_online_cloud_timeout_ms(val: number): this;

  get_notify_cloud_delay_ms(): number;
  set_notify_cloud_delay_ms(val: number): this;

  get_notify_default_delay_ms(): number;
  set_notify_default_delay_ms(val: number): this;

  get_push_chat_period_ms(): number;
  set_push_chat_period_ms(val: number): this;

  get_push_chat_limit(): number;
  set_push_chat_limit(val: number): this;

  get_saved_gifs_limit(): number;
  set_saved_gifs_limit(val: number): this;

  get_edit_time_limit(): number;
  set_edit_time_limit(val: number): this;

  get_revoke_time_limit(): number;
  set_revoke_time_limit(val: number): this;

  get_revoke_pm_time_limit(): number;
  set_revoke_pm_time_limit(val: number): this;

  get_rating_e_decay(): number;
  set_rating_e_decay(val: number): this;

  get_stickers_recent_limit(): number;
  set_stickers_recent_limit(val: number): this;

  get_stickers_faved_limit(): number;
  set_stickers_faved_limit(val: number): this;

  get_channels_read_media_period(): number;
  set_channels_read_media_period(val: number): this;

  get_tmp_sessions(): number;
  set_tmp_sessions(val: number): this;

  has_tmp_sessions(): boolean;

  get_pinned_dialogs_count_max(): number;
  set_pinned_dialogs_count_max(val: number): this;

  get_pinned_infolder_count_max(): number;
  set_pinned_infolder_count_max(val: number): this;

  get_call_receive_timeout_ms(): number;
  set_call_receive_timeout_ms(val: number): this;

  get_call_ring_timeout_ms(): number;
  set_call_ring_timeout_ms(val: number): this;

  get_call_connect_timeout_ms(): number;
  set_call_connect_timeout_ms(val: number): this;

  get_call_packet_timeout_ms(): number;
  set_call_packet_timeout_ms(val: number): this;

  get_me_url_prefix(): string;
  set_me_url_prefix(val: string): this;

  get_autoupdate_url_prefix(): string;
  set_autoupdate_url_prefix(val: string): this;

  has_autoupdate_url_prefix(): boolean;

  get_gif_search_username(): string;
  set_gif_search_username(val: string): this;

  has_gif_search_username(): boolean;

  get_venue_search_username(): string;
  set_venue_search_username(val: string): this;

  has_venue_search_username(): boolean;

  get_img_search_username(): string;
  set_img_search_username(val: string): this;

  has_img_search_username(): boolean;

  get_static_maps_provider(): string;
  set_static_maps_provider(val: string): this;

  has_static_maps_provider(): boolean;

  get_caption_length_max(): number;
  set_caption_length_max(val: number): this;

  get_message_length_max(): number;
  set_message_length_max(val: number): this;

  get_webfile_dc_id(): number;
  set_webfile_dc_id(val: number): this;

  get_suggested_lang_code(): string;
  set_suggested_lang_code(val: string): this;

  has_suggested_lang_code(): boolean;

  get_lang_pack_version(): number;
  set_lang_pack_version(val: number): this;

  has_lang_pack_version(): boolean;

  get_base_lang_pack_version(): number;
  set_base_lang_pack_version(val: number): this;

  has_base_lang_pack_version(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ConfigS = r<new () => ConfigS>(0x330b4067, "ConfigS", () => [
  "flags",
  IntRW,
  "phonecalls_enabled",
  Optional(TrueRW, 0, 1),
  "default_p2p_contacts",
  Optional(TrueRW, 0, 3),
  "preload_featured_stickers",
  Optional(TrueRW, 0, 4),
  "ignore_phone_entities",
  Optional(TrueRW, 0, 5),
  "revoke_pm_inbox",
  Optional(TrueRW, 0, 6),
  "blocked_mode",
  Optional(TrueRW, 0, 8),
  "pfs_enabled",
  Optional(TrueRW, 0, 13),
  "date",
  IntRW,
  "expires",
  IntRW,
  "test_mode",
  TypeRW(BoolT),
  "this_dc",
  IntRW,
  "dc_options",
  VectorRW(TypeRW(DcOptionT)),
  "dc_txt_domain_name",
  StringRW,
  "chat_size_max",
  IntRW,
  "megagroup_size_max",
  IntRW,
  "forwarded_count_max",
  IntRW,
  "online_update_period_ms",
  IntRW,
  "offline_blur_timeout_ms",
  IntRW,
  "offline_idle_timeout_ms",
  IntRW,
  "online_cloud_timeout_ms",
  IntRW,
  "notify_cloud_delay_ms",
  IntRW,
  "notify_default_delay_ms",
  IntRW,
  "push_chat_period_ms",
  IntRW,
  "push_chat_limit",
  IntRW,
  "saved_gifs_limit",
  IntRW,
  "edit_time_limit",
  IntRW,
  "revoke_time_limit",
  IntRW,
  "revoke_pm_time_limit",
  IntRW,
  "rating_e_decay",
  IntRW,
  "stickers_recent_limit",
  IntRW,
  "stickers_faved_limit",
  IntRW,
  "channels_read_media_period",
  IntRW,
  "tmp_sessions",
  Optional(IntRW, 0, 0),
  "pinned_dialogs_count_max",
  IntRW,
  "pinned_infolder_count_max",
  IntRW,
  "call_receive_timeout_ms",
  IntRW,
  "call_ring_timeout_ms",
  IntRW,
  "call_connect_timeout_ms",
  IntRW,
  "call_packet_timeout_ms",
  IntRW,
  "me_url_prefix",
  StringRW,
  "autoupdate_url_prefix",
  Optional(StringRW, 0, 7),
  "gif_search_username",
  Optional(StringRW, 0, 9),
  "venue_search_username",
  Optional(StringRW, 0, 10),
  "img_search_username",
  Optional(StringRW, 0, 11),
  "static_maps_provider",
  Optional(StringRW, 0, 12),
  "caption_length_max",
  IntRW,
  "message_length_max",
  IntRW,
  "webfile_dc_id",
  IntRW,
  "suggested_lang_code",
  Optional(StringRW, 0, 2),
  "lang_pack_version",
  Optional(IntRW, 0, 2),
  "base_lang_pack_version",
  Optional(IntRW, 0, 2)
]);

/**
 * updateEncryption:Update
 * #b4a2e88d:3030575245:-1264392051
 * chat:EncryptedChat
 * date:int
 */
export interface UpdateEncryptionS {
  _id: number;
  _values: [EncryptedChatT, number];

  get_chat(): EncryptedChatT;
  set_chat(val: EncryptedChatT): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateEncryptionS = r<new () => UpdateEncryptionS>(
  0xb4a2e88d,
  "UpdateEncryptionS",
  () => ["chat", TypeRW(EncryptedChatT), "date", IntRW]
);

/**
 * encryptedMessage:EncryptedMessage
 * #ed18c118:3977822488:-317144808
 * random_id:long
 * chat_id:int
 * date:int
 * bytes:bytes
 * file:EncryptedFile
 */
export interface EncryptedMessageS {
  _id: number;
  _values: [ProtoLong, number, number, Uint8Array, EncryptedFileT];

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  get_file(): EncryptedFileT;
  set_file(val: EncryptedFileT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EncryptedMessageS = r<new () => EncryptedMessageS>(
  0xed18c118,
  "EncryptedMessageS",
  () => [
    "random_id",
    LongRW,
    "chat_id",
    IntRW,
    "date",
    IntRW,
    "bytes",
    BytesRW,
    "file",
    TypeRW(EncryptedFileT)
  ]
);

/**
 * messages.sentEncryptedFile:messages.SentEncryptedMessage
 * #9493ff32:2492727090:-1802240206
 * date:int
 * file:EncryptedFile
 */
export interface MessagesSentEncryptedFileS {
  _id: number;
  _values: [number, EncryptedFileT];

  get_date(): number;
  set_date(val: number): this;

  get_file(): EncryptedFileT;
  set_file(val: EncryptedFileT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSentEncryptedFileS = r<new () => MessagesSentEncryptedFileS>(
  0x9493ff32,
  "MessagesSentEncryptedFileS",
  () => ["date", IntRW, "file", TypeRW(EncryptedFileT)]
);

/**
 * updateDcOptions:Update
 * #8e5e9873:2388564083:-1906403213
 * dc_options:Vector<DcOption>
 */
export interface UpdateDcOptionsS {
  _id: number;
  _values: [VectorS<DcOptionT>];

  get_dc_options(): VectorS<DcOptionT>;
  set_dc_options(val: VectorS<DcOptionT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDcOptionsS = r<new () => UpdateDcOptionsS>(
  0x8e5e9873,
  "UpdateDcOptionsS",
  () => ["dc_options", VectorRW(TypeRW(DcOptionT))]
);

/**
 * inputMediaDocument:InputMedia
 * #23ab23d2:598418386:598418386
 * flags:#
 * id:InputDocument
 * ttl_seconds:flags.0?int
 */
export interface InputMediaDocumentS {
  _id: number;
  _values: [number, InputDocumentT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): InputDocumentT;
  set_id(val: InputDocumentT): this;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaDocumentS = r<new () => InputMediaDocumentS>(
  0x23ab23d2,
  "InputMediaDocumentS",
  () => [
    "flags",
    IntRW,
    "id",
    TypeRW(InputDocumentT),
    "ttl_seconds",
    Optional(IntRW, 0, 0)
  ]
);

/**
 * notifyPeer:NotifyPeer
 * #9fd40bd8:2681474008:-1613493288
 * peer:Peer
 */
export interface NotifyPeerS {
  _id: number;
  _values: [PeerT];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NotifyPeerS = r<new () => NotifyPeerS>(
  0x9fd40bd8,
  "NotifyPeerS",
  () => ["peer", TypeRW(PeerT)]
);

/**
 * updateUserBlocked:Update
 * #80ece81a:2163009562:-2131957734
 * user_id:int
 * blocked:Bool
 */
export interface UpdateUserBlockedS {
  _id: number;
  _values: [number, BoolT];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_blocked(): BoolT;
  set_blocked(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserBlockedS = r<new () => UpdateUserBlockedS>(
  0x80ece81a,
  "UpdateUserBlockedS",
  () => ["user_id", IntRW, "blocked", TypeRW(BoolT)]
);

/**
 * updatePrivacy:Update
 * #ee3b272a:3996854058:-298113238
 * key:PrivacyKey
 * rules:Vector<PrivacyRule>
 */
export interface UpdatePrivacyS {
  _id: number;
  _values: [PrivacyKeyT, VectorS<PrivacyRuleT>];

  get_key(): PrivacyKeyT;
  set_key(val: PrivacyKeyT): this;

  get_rules(): VectorS<PrivacyRuleT>;
  set_rules(val: VectorS<PrivacyRuleT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatePrivacyS = r<new () => UpdatePrivacyS>(
  0xee3b272a,
  "UpdatePrivacyS",
  () => ["key", TypeRW(PrivacyKeyT), "rules", VectorRW(TypeRW(PrivacyRuleT))]
);

/**
 * documentAttributeSticker:DocumentAttribute
 * #6319d612:1662637586:1662637586
 * flags:#
 * mask:flags.1?true
 * alt:string
 * stickerset:InputStickerSet
 * mask_coords:flags.0?MaskCoords
 */
export interface DocumentAttributeStickerS {
  _id: number;
  _values: [number, true, string, InputStickerSetT, MaskCoordsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_mask(): true;
  set_mask(val: true): this;

  has_mask(): boolean;

  get_alt(): string;
  set_alt(val: string): this;

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  get_mask_coords(): MaskCoordsT;
  set_mask_coords(val: MaskCoordsT): this;

  has_mask_coords(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentAttributeStickerS = r<new () => DocumentAttributeStickerS>(
  0x6319d612,
  "DocumentAttributeStickerS",
  () => [
    "flags",
    IntRW,
    "mask",
    Optional(TrueRW, 0, 1),
    "alt",
    StringRW,
    "stickerset",
    TypeRW(InputStickerSetT),
    "mask_coords",
    Optional(TypeRW(MaskCoordsT), 0, 0)
  ]
);

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
export interface UpdateReadHistoryInboxS {
  _id: number;
  _values: [number, number, PeerT, number, number, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_still_unread_count(): number;
  set_still_unread_count(val: number): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateReadHistoryInboxS = r<new () => UpdateReadHistoryInboxS>(
  0x9c974fdf,
  "UpdateReadHistoryInboxS",
  () => [
    "flags",
    IntRW,
    "folder_id",
    Optional(IntRW, 0, 0),
    "peer",
    TypeRW(PeerT),
    "max_id",
    IntRW,
    "still_unread_count",
    IntRW,
    "pts",
    IntRW,
    "pts_count",
    IntRW
  ]
);

/**
 * updateReadHistoryOutbox:Update
 * #2f2f21bf:791617983:791617983
 * peer:Peer
 * max_id:int
 * pts:int
 * pts_count:int
 */
export interface UpdateReadHistoryOutboxS {
  _id: number;
  _values: [PeerT, number, number, number];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateReadHistoryOutboxS = r<new () => UpdateReadHistoryOutboxS>(
  0x2f2f21bf,
  "UpdateReadHistoryOutboxS",
  () => [
    "peer",
    TypeRW(PeerT),
    "max_id",
    IntRW,
    "pts",
    IntRW,
    "pts_count",
    IntRW
  ]
);

/**
 * account.authorizations:account.Authorizations
 * #1250abde:307276766:307276766
 * authorizations:Vector<Authorization>
 */
export interface AccountAuthorizationsS {
  _id: number;
  _values: [VectorS<AuthorizationT>];

  get_authorizations(): VectorS<AuthorizationT>;
  set_authorizations(val: VectorS<AuthorizationT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountAuthorizationsS = r<new () => AccountAuthorizationsS>(
  0x1250abde,
  "AccountAuthorizationsS",
  () => ["authorizations", VectorRW(TypeRW(AuthorizationT))]
);

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
export interface AccountPasswordS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_has_recovery(): true;
  set_has_recovery(val: true): this;

  has_has_recovery(): boolean;

  get_has_secure_values(): true;
  set_has_secure_values(val: true): this;

  has_has_secure_values(): boolean;

  get_has_password(): true;
  set_has_password(val: true): this;

  has_has_password(): boolean;

  get_current_algo(): PasswordKdfAlgoT;
  set_current_algo(val: PasswordKdfAlgoT): this;

  has_current_algo(): boolean;

  get_srp_B(): Uint8Array;
  set_srp_B(val: Uint8Array): this;

  has_srp_B(): boolean;

  get_srp_id(): ProtoLong;
  set_srp_id(val: ProtoLong): this;

  has_srp_id(): boolean;

  get_hint(): string;
  set_hint(val: string): this;

  has_hint(): boolean;

  get_email_unconfirmed_pattern(): string;
  set_email_unconfirmed_pattern(val: string): this;

  has_email_unconfirmed_pattern(): boolean;

  get_new_algo(): PasswordKdfAlgoT;
  set_new_algo(val: PasswordKdfAlgoT): this;

  get_new_secure_algo(): SecurePasswordKdfAlgoT;
  set_new_secure_algo(val: SecurePasswordKdfAlgoT): this;

  get_secure_random(): Uint8Array;
  set_secure_random(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountPasswordS = r<new () => AccountPasswordS>(
  0xad2641f8,
  "AccountPasswordS",
  () => [
    "flags",
    IntRW,
    "has_recovery",
    Optional(TrueRW, 0, 0),
    "has_secure_values",
    Optional(TrueRW, 0, 1),
    "has_password",
    Optional(TrueRW, 0, 2),
    "current_algo",
    Optional(TypeRW(PasswordKdfAlgoT), 0, 2),
    "srp_B",
    Optional(BytesRW, 0, 2),
    "srp_id",
    Optional(LongRW, 0, 2),
    "hint",
    Optional(StringRW, 0, 3),
    "email_unconfirmed_pattern",
    Optional(StringRW, 0, 4),
    "new_algo",
    TypeRW(PasswordKdfAlgoT),
    "new_secure_algo",
    TypeRW(SecurePasswordKdfAlgoT),
    "secure_random",
    BytesRW
  ]
);

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
export interface InputMediaVenueS {
  _id: number;
  _values: [InputGeoPointT, string, string, string, string, string];

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  get_title(): string;
  set_title(val: string): this;

  get_address(): string;
  set_address(val: string): this;

  get_provider(): string;
  set_provider(val: string): this;

  get_venue_id(): string;
  set_venue_id(val: string): this;

  get_venue_type(): string;
  set_venue_type(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaVenueS = r<new () => InputMediaVenueS>(
  0xc13d1c11,
  "InputMediaVenueS",
  () => [
    "geo_point",
    TypeRW(InputGeoPointT),
    "title",
    StringRW,
    "address",
    StringRW,
    "provider",
    StringRW,
    "venue_id",
    StringRW,
    "venue_type",
    StringRW
  ]
);

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
export interface MessageMediaVenueS {
  _id: number;
  _values: [GeoPointT, string, string, string, string, string];

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  get_title(): string;
  set_title(val: string): this;

  get_address(): string;
  set_address(val: string): this;

  get_provider(): string;
  set_provider(val: string): this;

  get_venue_id(): string;
  set_venue_id(val: string): this;

  get_venue_type(): string;
  set_venue_type(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaVenueS = r<new () => MessageMediaVenueS>(
  0x2ec0533f,
  "MessageMediaVenueS",
  () => [
    "geo",
    TypeRW(GeoPointT),
    "title",
    StringRW,
    "address",
    StringRW,
    "provider",
    StringRW,
    "venue_id",
    StringRW,
    "venue_type",
    StringRW
  ]
);

/**
 * botInfo:BotInfo
 * #98e81d3a:2565348666:-1729618630
 * user_id:int
 * description:string
 * commands:Vector<BotCommand>
 */
export interface BotInfoS {
  _id: number;
  _values: [number, string, VectorS<BotCommandT>];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_description(): string;
  set_description(val: string): this;

  get_commands(): VectorS<BotCommandT>;
  set_commands(val: VectorS<BotCommandT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInfoS = r<new () => BotInfoS>(0x98e81d3a, "BotInfoS", () => [
  "user_id",
  IntRW,
  "description",
  StringRW,
  "commands",
  VectorRW(TypeRW(BotCommandT))
]);

/**
 * channelMessagesFilter:ChannelMessagesFilter
 * #cd77d957:3447183703:-847783593
 * flags:#
 * exclude_new_messages:flags.1?true
 * ranges:Vector<MessageRange>
 */
export interface ChannelMessagesFilterS {
  _id: number;
  _values: [number, true, VectorS<MessageRangeT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_exclude_new_messages(): true;
  set_exclude_new_messages(val: true): this;

  has_exclude_new_messages(): boolean;

  get_ranges(): VectorS<MessageRangeT>;
  set_ranges(val: VectorS<MessageRangeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelMessagesFilterS = r<new () => ChannelMessagesFilterS>(
  0xcd77d957,
  "ChannelMessagesFilterS",
  () => [
    "flags",
    IntRW,
    "exclude_new_messages",
    Optional(TrueRW, 0, 1),
    "ranges",
    VectorRW(TypeRW(MessageRangeT))
  ]
);

/**
 * updateChatParticipantAdmin:Update
 * #b6901959:3062896985:-1232070311
 * chat_id:int
 * user_id:int
 * is_admin:Bool
 * version:int
 */
export interface UpdateChatParticipantAdminS {
  _id: number;
  _values: [number, number, BoolT, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_is_admin(): BoolT;
  set_is_admin(val: BoolT): this;

  get_version(): number;
  set_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatParticipantAdminS = r<
  new () => UpdateChatParticipantAdminS
>(0xb6901959, "UpdateChatParticipantAdminS", () => [
  "chat_id",
  IntRW,
  "user_id",
  IntRW,
  "is_admin",
  TypeRW(BoolT),
  "version",
  IntRW
]);

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
export interface UpdateBotInlineQueryS {
  _id: number;
  _values: [number, ProtoLong, number, string, GeoPointT, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_query(): string;
  set_query(val: string): this;

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  has_geo(): boolean;

  get_offset(): string;
  set_offset(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotInlineQueryS = r<new () => UpdateBotInlineQueryS>(
  0x54826690,
  "UpdateBotInlineQueryS",
  () => [
    "flags",
    IntRW,
    "query_id",
    LongRW,
    "user_id",
    IntRW,
    "query",
    StringRW,
    "geo",
    Optional(TypeRW(GeoPointT), 0, 0),
    "offset",
    StringRW
  ]
);

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
export interface UpdateBotInlineSendS {
  _id: number;
  _values: [
    number,
    number,
    string,
    GeoPointT,
    string,
    InputBotInlineMessageIdT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_query(): string;
  set_query(val: string): this;

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  has_geo(): boolean;

  get_id(): string;
  set_id(val: string): this;

  get_msg_id(): InputBotInlineMessageIdT;
  set_msg_id(val: InputBotInlineMessageIdT): this;

  has_msg_id(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotInlineSendS = r<new () => UpdateBotInlineSendS>(
  0xe48f964,
  "UpdateBotInlineSendS",
  () => [
    "flags",
    IntRW,
    "user_id",
    IntRW,
    "query",
    StringRW,
    "geo",
    Optional(TypeRW(GeoPointT), 0, 0),
    "id",
    StringRW,
    "msg_id",
    Optional(TypeRW(InputBotInlineMessageIdT), 0, 1)
  ]
);

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
export interface MessageFwdHeaderS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_from_id(): number;
  set_from_id(val: number): this;

  has_from_id(): boolean;

  get_from_name(): string;
  set_from_name(val: string): this;

  has_from_name(): boolean;

  get_date(): number;
  set_date(val: number): this;

  get_channel_id(): number;
  set_channel_id(val: number): this;

  has_channel_id(): boolean;

  get_channel_post(): number;
  set_channel_post(val: number): this;

  has_channel_post(): boolean;

  get_post_author(): string;
  set_post_author(val: string): this;

  has_post_author(): boolean;

  get_saved_from_peer(): PeerT;
  set_saved_from_peer(val: PeerT): this;

  has_saved_from_peer(): boolean;

  get_saved_from_msg_id(): number;
  set_saved_from_msg_id(val: number): this;

  has_saved_from_msg_id(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageFwdHeaderS = r<new () => MessageFwdHeaderS>(
  0xec338270,
  "MessageFwdHeaderS",
  () => [
    "flags",
    IntRW,
    "from_id",
    Optional(IntRW, 0, 0),
    "from_name",
    Optional(StringRW, 0, 5),
    "date",
    IntRW,
    "channel_id",
    Optional(IntRW, 0, 1),
    "channel_post",
    Optional(IntRW, 0, 2),
    "post_author",
    Optional(StringRW, 0, 3),
    "saved_from_peer",
    Optional(TypeRW(PeerT), 0, 4),
    "saved_from_msg_id",
    Optional(IntRW, 0, 4)
  ]
);

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
export interface UpdateBotCallbackQueryS {
  _id: number;
  _values: [
    number,
    ProtoLong,
    number,
    PeerT,
    number,
    ProtoLong,
    Uint8Array,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_chat_instance(): ProtoLong;
  set_chat_instance(val: ProtoLong): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  has_data(): boolean;

  get_game_short_name(): string;
  set_game_short_name(val: string): this;

  has_game_short_name(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotCallbackQueryS = r<new () => UpdateBotCallbackQueryS>(
  0xe73547e1,
  "UpdateBotCallbackQueryS",
  () => [
    "flags",
    IntRW,
    "query_id",
    LongRW,
    "user_id",
    IntRW,
    "peer",
    TypeRW(PeerT),
    "msg_id",
    IntRW,
    "chat_instance",
    LongRW,
    "data",
    Optional(BytesRW, 0, 0),
    "game_short_name",
    Optional(StringRW, 0, 1)
  ]
);

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
export interface UpdateInlineBotCallbackQueryS {
  _id: number;
  _values: [
    number,
    ProtoLong,
    number,
    InputBotInlineMessageIdT,
    ProtoLong,
    Uint8Array,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_msg_id(): InputBotInlineMessageIdT;
  set_msg_id(val: InputBotInlineMessageIdT): this;

  get_chat_instance(): ProtoLong;
  set_chat_instance(val: ProtoLong): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  has_data(): boolean;

  get_game_short_name(): string;
  set_game_short_name(val: string): this;

  has_game_short_name(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateInlineBotCallbackQueryS = r<
  new () => UpdateInlineBotCallbackQueryS
>(0xf9d27a5a, "UpdateInlineBotCallbackQueryS", () => [
  "flags",
  IntRW,
  "query_id",
  LongRW,
  "user_id",
  IntRW,
  "msg_id",
  TypeRW(InputBotInlineMessageIdT),
  "chat_instance",
  LongRW,
  "data",
  Optional(BytesRW, 0, 0),
  "game_short_name",
  Optional(StringRW, 0, 1)
]);

/**
 * topPeer:TopPeer
 * #edcdc05b:3989684315:-305282981
 * peer:Peer
 * rating:double
 */
export interface TopPeerS {
  _id: number;
  _values: [PeerT, number];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_rating(): number;
  set_rating(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerS = r<new () => TopPeerS>(0xedcdc05b, "TopPeerS", () => [
  "peer",
  TypeRW(PeerT),
  "rating",
  DoubleRW
]);

/**
 * inputStickeredMediaPhoto:InputStickeredMedia
 * #4a992157:1251549527:1251549527
 * id:InputPhoto
 */
export interface InputStickeredMediaPhotoS {
  _id: number;
  _values: [InputPhotoT];

  get_id(): InputPhotoT;
  set_id(val: InputPhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickeredMediaPhotoS = r<new () => InputStickeredMediaPhotoS>(
  0x4a992157,
  "InputStickeredMediaPhotoS",
  () => ["id", TypeRW(InputPhotoT)]
);

/**
 * inputStickeredMediaDocument:InputStickeredMedia
 * #438865b:70813275:70813275
 * id:InputDocument
 */
export interface InputStickeredMediaDocumentS {
  _id: number;
  _values: [InputDocumentT];

  get_id(): InputDocumentT;
  set_id(val: InputDocumentT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickeredMediaDocumentS = r<
  new () => InputStickeredMediaDocumentS
>(0x438865b, "InputStickeredMediaDocumentS", () => [
  "id",
  TypeRW(InputDocumentT)
]);

/**
 * updateBotWebhookJSON:Update
 * #8317c0c3:2199371971:-2095595325
 * data:DataJSON
 */
export interface UpdateBotWebhookJsonS {
  _id: number;
  _values: [DataJsonT];

  get_data(): DataJsonT;
  set_data(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotWebhookJsonS = r<new () => UpdateBotWebhookJsonS>(
  0x8317c0c3,
  "UpdateBotWebhookJsonS",
  () => ["data", TypeRW(DataJsonT)]
);

/**
 * updateBotWebhookJSONQuery:Update
 * #9b9240a6:2610053286:-1684914010
 * query_id:long
 * data:DataJSON
 * timeout:int
 */
export interface UpdateBotWebhookJsonQueryS {
  _id: number;
  _values: [ProtoLong, DataJsonT, number];

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_data(): DataJsonT;
  set_data(val: DataJsonT): this;

  get_timeout(): number;
  set_timeout(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotWebhookJsonQueryS = r<new () => UpdateBotWebhookJsonQueryS>(
  0x9b9240a6,
  "UpdateBotWebhookJsonQueryS",
  () => ["query_id", LongRW, "data", TypeRW(DataJsonT), "timeout", IntRW]
);

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
export interface InvoiceS {
  _id: number;
  _values: [
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
    VectorS<LabeledPriceT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_test(): true;
  set_test(val: true): this;

  has_test(): boolean;

  get_name_requested(): true;
  set_name_requested(val: true): this;

  has_name_requested(): boolean;

  get_phone_requested(): true;
  set_phone_requested(val: true): this;

  has_phone_requested(): boolean;

  get_email_requested(): true;
  set_email_requested(val: true): this;

  has_email_requested(): boolean;

  get_shipping_address_requested(): true;
  set_shipping_address_requested(val: true): this;

  has_shipping_address_requested(): boolean;

  get_flexible(): true;
  set_flexible(val: true): this;

  has_flexible(): boolean;

  get_phone_to_provider(): true;
  set_phone_to_provider(val: true): this;

  has_phone_to_provider(): boolean;

  get_email_to_provider(): true;
  set_email_to_provider(val: true): this;

  has_email_to_provider(): boolean;

  get_currency(): string;
  set_currency(val: string): this;

  get_prices(): VectorS<LabeledPriceT>;
  set_prices(val: VectorS<LabeledPriceT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InvoiceS = r<new () => InvoiceS>(0xc30aa358, "InvoiceS", () => [
  "flags",
  IntRW,
  "test",
  Optional(TrueRW, 0, 0),
  "name_requested",
  Optional(TrueRW, 0, 1),
  "phone_requested",
  Optional(TrueRW, 0, 2),
  "email_requested",
  Optional(TrueRW, 0, 3),
  "shipping_address_requested",
  Optional(TrueRW, 0, 4),
  "flexible",
  Optional(TrueRW, 0, 5),
  "phone_to_provider",
  Optional(TrueRW, 0, 6),
  "email_to_provider",
  Optional(TrueRW, 0, 7),
  "currency",
  StringRW,
  "prices",
  VectorRW(TypeRW(LabeledPriceT))
]);

/**
 * paymentRequestedInfo:PaymentRequestedInfo
 * #909c3f94:2426158996:-1868808300
 * flags:#
 * name:flags.0?string
 * phone:flags.1?string
 * email:flags.2?string
 * shipping_address:flags.3?PostAddress
 */
export interface PaymentRequestedInfoS {
  _id: number;
  _values: [number, string, string, string, PostAddressT];

  get_flags(): number;
  set_flags(val: number): this;

  get_name(): string;
  set_name(val: string): this;

  has_name(): boolean;

  get_phone(): string;
  set_phone(val: string): this;

  has_phone(): boolean;

  get_email(): string;
  set_email(val: string): this;

  has_email(): boolean;

  get_shipping_address(): PostAddressT;
  set_shipping_address(val: PostAddressT): this;

  has_shipping_address(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentRequestedInfoS = r<new () => PaymentRequestedInfoS>(
  0x909c3f94,
  "PaymentRequestedInfoS",
  () => [
    "flags",
    IntRW,
    "name",
    Optional(StringRW, 0, 0),
    "phone",
    Optional(StringRW, 0, 1),
    "email",
    Optional(StringRW, 0, 2),
    "shipping_address",
    Optional(TypeRW(PostAddressT), 0, 3)
  ]
);

/**
 * upload.webFile:upload.WebFile
 * #21e753bc:568808380:568808380
 * size:int
 * mime_type:string
 * file_type:storage.FileType
 * mtime:int
 * bytes:bytes
 */
export interface UploadWebFileS {
  _id: number;
  _values: [number, string, StorageFileTypeT, number, Uint8Array];

  get_size(): number;
  set_size(val: number): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_file_type(): StorageFileTypeT;
  set_file_type(val: StorageFileTypeT): this;

  get_mtime(): number;
  set_mtime(val: number): this;

  get_bytes(): Uint8Array;
  set_bytes(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadWebFileS = r<new () => UploadWebFileS>(
  0x21e753bc,
  "UploadWebFileS",
  () => [
    "size",
    IntRW,
    "mime_type",
    StringRW,
    "file_type",
    TypeRW(StorageFileTypeT),
    "mtime",
    IntRW,
    "bytes",
    BytesRW
  ]
);

/**
 * inputPaymentCredentials:InputPaymentCredentials
 * #3417d728:873977640:873977640
 * flags:#
 * save:flags.0?true
 * data:DataJSON
 */
export interface InputPaymentCredentialsS {
  _id: number;
  _values: [number, true, DataJsonT];

  get_flags(): number;
  set_flags(val: number): this;

  get_save(): true;
  set_save(val: true): this;

  has_save(): boolean;

  get_data(): DataJsonT;
  set_data(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPaymentCredentialsS = r<new () => InputPaymentCredentialsS>(
  0x3417d728,
  "InputPaymentCredentialsS",
  () => [
    "flags",
    IntRW,
    "save",
    Optional(TrueRW, 0, 0),
    "data",
    TypeRW(DataJsonT)
  ]
);

/**
 * shippingOption:ShippingOption
 * #b6213cdf:3055631583:-1239335713
 * id:string
 * title:string
 * prices:Vector<LabeledPrice>
 */
export interface ShippingOptionS {
  _id: number;
  _values: [string, string, VectorS<LabeledPriceT>];

  get_id(): string;
  set_id(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  get_prices(): VectorS<LabeledPriceT>;
  set_prices(val: VectorS<LabeledPriceT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ShippingOptionS = r<new () => ShippingOptionS>(
  0xb6213cdf,
  "ShippingOptionS",
  () => [
    "id",
    StringRW,
    "title",
    StringRW,
    "prices",
    VectorRW(TypeRW(LabeledPriceT))
  ]
);

/**
 * updateBotShippingQuery:Update
 * #e0cdc940:3771582784:-523384512
 * query_id:long
 * user_id:int
 * payload:bytes
 * shipping_address:PostAddress
 */
export interface UpdateBotShippingQueryS {
  _id: number;
  _values: [ProtoLong, number, Uint8Array, PostAddressT];

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_payload(): Uint8Array;
  set_payload(val: Uint8Array): this;

  get_shipping_address(): PostAddressT;
  set_shipping_address(val: PostAddressT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotShippingQueryS = r<new () => UpdateBotShippingQueryS>(
  0xe0cdc940,
  "UpdateBotShippingQueryS",
  () => [
    "query_id",
    LongRW,
    "user_id",
    IntRW,
    "payload",
    BytesRW,
    "shipping_address",
    TypeRW(PostAddressT)
  ]
);

/**
 * inputStickerSetItem:InputStickerSetItem
 * #ffa0a496:4288717974:-6249322
 * flags:#
 * document:InputDocument
 * emoji:string
 * mask_coords:flags.0?MaskCoords
 */
export interface InputStickerSetItemS {
  _id: number;
  _values: [number, InputDocumentT, string, MaskCoordsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_document(): InputDocumentT;
  set_document(val: InputDocumentT): this;

  get_emoji(): string;
  set_emoji(val: string): this;

  get_mask_coords(): MaskCoordsT;
  set_mask_coords(val: MaskCoordsT): this;

  has_mask_coords(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickerSetItemS = r<new () => InputStickerSetItemS>(
  0xffa0a496,
  "InputStickerSetItemS",
  () => [
    "flags",
    IntRW,
    "document",
    TypeRW(InputDocumentT),
    "emoji",
    StringRW,
    "mask_coords",
    Optional(TypeRW(MaskCoordsT), 0, 0)
  ]
);

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
export interface PhoneCallWaitingS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  get_receive_date(): number;
  set_receive_date(val: number): this;

  has_receive_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallWaitingS = r<new () => PhoneCallWaitingS>(
  0x1b8f4ad1,
  "PhoneCallWaitingS",
  () => [
    "flags",
    IntRW,
    "video",
    Optional(TrueRW, 0, 5),
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW,
    "protocol",
    TypeRW(PhoneCallProtocolT),
    "receive_date",
    Optional(IntRW, 0, 0)
  ]
);

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
export interface PhoneCallRequestedS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  get_g_a_hash(): Uint8Array;
  set_g_a_hash(val: Uint8Array): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallRequestedS = r<new () => PhoneCallRequestedS>(
  0x87eabb53,
  "PhoneCallRequestedS",
  () => [
    "flags",
    IntRW,
    "video",
    Optional(TrueRW, 0, 5),
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW,
    "g_a_hash",
    BytesRW,
    "protocol",
    TypeRW(PhoneCallProtocolT)
  ]
);

/**
 * phoneCallAccepted:PhoneCall
 * #997c454a:2575058250:-1719909046
 * flags:#
 * video:flags.5?true
 * id:long
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 * g_b:bytes
 * protocol:PhoneCallProtocol
 */
export interface PhoneCallAcceptedS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  get_g_b(): Uint8Array;
  set_g_b(val: Uint8Array): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallAcceptedS = r<new () => PhoneCallAcceptedS>(
  0x997c454a,
  "PhoneCallAcceptedS",
  () => [
    "flags",
    IntRW,
    "video",
    Optional(TrueRW, 0, 5),
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW,
    "g_b",
    BytesRW,
    "protocol",
    TypeRW(PhoneCallProtocolT)
  ]
);

/**
 * phoneCall:PhoneCall
 * #8742ae7f:2269294207:-2025673089
 * flags:#
 * p2p_allowed:flags.5?true
 * id:long
 * access_hash:long
 * date:int
 * admin_id:int
 * participant_id:int
 * g_a_or_b:bytes
 * key_fingerprint:long
 * protocol:PhoneCallProtocol
 * connections:Vector<PhoneConnection>
 * start_date:int
 */
export interface PhoneCallS {
  _id: number;
  _values: [
    number,
    true,
    ProtoLong,
    ProtoLong,
    number,
    number,
    number,
    Uint8Array,
    ProtoLong,
    PhoneCallProtocolT,
    VectorS<PhoneConnectionT>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_p2p_allowed(): true;
  set_p2p_allowed(val: true): this;

  has_p2p_allowed(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_id(): number;
  set_admin_id(val: number): this;

  get_participant_id(): number;
  set_participant_id(val: number): this;

  get_g_a_or_b(): Uint8Array;
  set_g_a_or_b(val: Uint8Array): this;

  get_key_fingerprint(): ProtoLong;
  set_key_fingerprint(val: ProtoLong): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  get_connections(): VectorS<PhoneConnectionT>;
  set_connections(val: VectorS<PhoneConnectionT>): this;

  get_start_date(): number;
  set_start_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallS = r<new () => PhoneCallS>(
  0x8742ae7f,
  "PhoneCallS",
  () => [
    "flags",
    IntRW,
    "p2p_allowed",
    Optional(TrueRW, 0, 5),
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "date",
    IntRW,
    "admin_id",
    IntRW,
    "participant_id",
    IntRW,
    "g_a_or_b",
    BytesRW,
    "key_fingerprint",
    LongRW,
    "protocol",
    TypeRW(PhoneCallProtocolT),
    "connections",
    VectorRW(TypeRW(PhoneConnectionT)),
    "start_date",
    IntRW
  ]
);

/**
 * phoneCallDiscarded:PhoneCall
 * #50ca4de1:1355435489:1355435489
 * flags:#
 * need_rating:flags.2?true
 * need_debug:flags.3?true
 * video:flags.5?true
 * id:long
 * reason:flags.0?PhoneCallDiscardReason
 * duration:flags.1?int
 */
export interface PhoneCallDiscardedS {
  _id: number;
  _values: [
    number,
    true,
    true,
    true,
    ProtoLong,
    PhoneCallDiscardReasonT,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_need_rating(): true;
  set_need_rating(val: true): this;

  has_need_rating(): boolean;

  get_need_debug(): true;
  set_need_debug(val: true): this;

  has_need_debug(): boolean;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_reason(): PhoneCallDiscardReasonT;
  set_reason(val: PhoneCallDiscardReasonT): this;

  has_reason(): boolean;

  get_duration(): number;
  set_duration(val: number): this;

  has_duration(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneCallDiscardedS = r<new () => PhoneCallDiscardedS>(
  0x50ca4de1,
  "PhoneCallDiscardedS",
  () => [
    "flags",
    IntRW,
    "need_rating",
    Optional(TrueRW, 0, 2),
    "need_debug",
    Optional(TrueRW, 0, 3),
    "video",
    Optional(TrueRW, 0, 5),
    "id",
    LongRW,
    "reason",
    Optional(TypeRW(PhoneCallDiscardReasonT), 0, 0),
    "duration",
    Optional(IntRW, 0, 1)
  ]
);

/**
 * messageActionPhoneCall:MessageAction
 * #80e11a7f:2162236031:-2132731265
 * flags:#
 * video:flags.2?true
 * call_id:long
 * reason:flags.0?PhoneCallDiscardReason
 * duration:flags.1?int
 */
export interface MessageActionPhoneCallS {
  _id: number;
  _values: [number, true, ProtoLong, PhoneCallDiscardReasonT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_call_id(): ProtoLong;
  set_call_id(val: ProtoLong): this;

  get_reason(): PhoneCallDiscardReasonT;
  set_reason(val: PhoneCallDiscardReasonT): this;

  has_reason(): boolean;

  get_duration(): number;
  set_duration(val: number): this;

  has_duration(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionPhoneCallS = r<new () => MessageActionPhoneCallS>(
  0x80e11a7f,
  "MessageActionPhoneCallS",
  () => [
    "flags",
    IntRW,
    "video",
    Optional(TrueRW, 0, 2),
    "call_id",
    LongRW,
    "reason",
    Optional(TypeRW(PhoneCallDiscardReasonT), 0, 0),
    "duration",
    Optional(IntRW, 0, 1)
  ]
);

/**
 * upload.fileCdnRedirect:upload.File
 * #f18cda44:4052539972:-242427324
 * dc_id:int
 * file_token:bytes
 * encryption_key:bytes
 * encryption_iv:bytes
 * file_hashes:Vector<FileHash>
 */
export interface UploadFileCdnRedirectS {
  _id: number;
  _values: [number, Uint8Array, Uint8Array, Uint8Array, VectorS<FileHashT>];

  get_dc_id(): number;
  set_dc_id(val: number): this;

  get_file_token(): Uint8Array;
  set_file_token(val: Uint8Array): this;

  get_encryption_key(): Uint8Array;
  set_encryption_key(val: Uint8Array): this;

  get_encryption_iv(): Uint8Array;
  set_encryption_iv(val: Uint8Array): this;

  get_file_hashes(): VectorS<FileHashT>;
  set_file_hashes(val: VectorS<FileHashT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadFileCdnRedirectS = r<new () => UploadFileCdnRedirectS>(
  0xf18cda44,
  "UploadFileCdnRedirectS",
  () => [
    "dc_id",
    IntRW,
    "file_token",
    BytesRW,
    "encryption_key",
    BytesRW,
    "encryption_iv",
    BytesRW,
    "file_hashes",
    VectorRW(TypeRW(FileHashT))
  ]
);

/**
 * cdnConfig:CdnConfig
 * #5725e40a:1462101002:1462101002
 * public_keys:Vector<CdnPublicKey>
 */
export interface CdnConfigS {
  _id: number;
  _values: [VectorS<CdnPublicKeyT>];

  get_public_keys(): VectorS<CdnPublicKeyT>;
  set_public_keys(val: VectorS<CdnPublicKeyT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let CdnConfigS = r<new () => CdnConfigS>(
  0x5725e40a,
  "CdnConfigS",
  () => ["public_keys", VectorRW(TypeRW(CdnPublicKeyT))]
);

/**
 * langPackDifference:LangPackDifference
 * #f385c1f6:4085629430:-209337866
 * lang_code:string
 * from_version:int
 * version:int
 * strings:Vector<LangPackString>
 */
export interface LangPackDifferenceS {
  _id: number;
  _values: [string, number, number, VectorS<LangPackStringT>];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_from_version(): number;
  set_from_version(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  get_strings(): VectorS<LangPackStringT>;
  set_strings(val: VectorS<LangPackStringT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let LangPackDifferenceS = r<new () => LangPackDifferenceS>(
  0xf385c1f6,
  "LangPackDifferenceS",
  () => [
    "lang_code",
    StringRW,
    "from_version",
    IntRW,
    "version",
    IntRW,
    "strings",
    VectorRW(TypeRW(LangPackStringT))
  ]
);

/**
 * channelParticipantAdmin:ChannelParticipant
 * #ccbebbaf:3435051951:-859915345
 * flags:#
 * can_edit:flags.0?true
 * self:flags.1?true
 * user_id:int
 * inviter_id:flags.1?int
 * promoted_by:int
 * date:int
 * admin_rights:ChatAdminRights
 * rank:flags.2?string
 */
export interface ChannelParticipantAdminS {
  _id: number;
  _values: [
    number,
    true,
    true,
    number,
    number,
    number,
    number,
    ChatAdminRightsT,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_can_edit(): true;
  set_can_edit(val: true): this;

  has_can_edit(): boolean;

  get_self(): true;
  set_self(val: true): this;

  has_self(): boolean;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_inviter_id(): number;
  set_inviter_id(val: number): this;

  has_inviter_id(): boolean;

  get_promoted_by(): number;
  set_promoted_by(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_admin_rights(): ChatAdminRightsT;
  set_admin_rights(val: ChatAdminRightsT): this;

  get_rank(): string;
  set_rank(val: string): this;

  has_rank(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantAdminS = r<new () => ChannelParticipantAdminS>(
  0xccbebbaf,
  "ChannelParticipantAdminS",
  () => [
    "flags",
    IntRW,
    "can_edit",
    Optional(TrueRW, 0, 0),
    "self",
    Optional(TrueRW, 0, 1),
    "user_id",
    IntRW,
    "inviter_id",
    Optional(IntRW, 0, 1),
    "promoted_by",
    IntRW,
    "date",
    IntRW,
    "admin_rights",
    TypeRW(ChatAdminRightsT),
    "rank",
    Optional(StringRW, 0, 2)
  ]
);

/**
 * channelParticipantBanned:ChannelParticipant
 * #1c0facaf:470789295:470789295
 * flags:#
 * left:flags.0?true
 * user_id:int
 * kicked_by:int
 * date:int
 * banned_rights:ChatBannedRights
 */
export interface ChannelParticipantBannedS {
  _id: number;
  _values: [number, true, number, number, number, ChatBannedRightsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_left(): true;
  set_left(val: true): this;

  has_left(): boolean;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_kicked_by(): number;
  set_kicked_by(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_banned_rights(): ChatBannedRightsT;
  set_banned_rights(val: ChatBannedRightsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelParticipantBannedS = r<new () => ChannelParticipantBannedS>(
  0x1c0facaf,
  "ChannelParticipantBannedS",
  () => [
    "flags",
    IntRW,
    "left",
    Optional(TrueRW, 0, 0),
    "user_id",
    IntRW,
    "kicked_by",
    IntRW,
    "date",
    IntRW,
    "banned_rights",
    TypeRW(ChatBannedRightsT)
  ]
);

/**
 * channelAdminLogEventActionToggleInvites:ChannelAdminLogEventAction
 * #1b7907ae:460916654:460916654
 * new_value:Bool
 */
export interface ChannelAdminLogEventActionToggleInvitesS {
  _id: number;
  _values: [BoolT];

  get_new_value(): BoolT;
  set_new_value(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionToggleInvitesS = r<
  new () => ChannelAdminLogEventActionToggleInvitesS
>(0x1b7907ae, "ChannelAdminLogEventActionToggleInvitesS", () => [
  "new_value",
  TypeRW(BoolT)
]);

/**
 * channelAdminLogEventActionToggleSignatures:ChannelAdminLogEventAction
 * #26ae0971:648939889:648939889
 * new_value:Bool
 */
export interface ChannelAdminLogEventActionToggleSignaturesS {
  _id: number;
  _values: [BoolT];

  get_new_value(): BoolT;
  set_new_value(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionToggleSignaturesS = r<
  new () => ChannelAdminLogEventActionToggleSignaturesS
>(0x26ae0971, "ChannelAdminLogEventActionToggleSignaturesS", () => [
  "new_value",
  TypeRW(BoolT)
]);

/**
 * channelAdminLogEventActionChangeStickerSet:ChannelAdminLogEventAction
 * #b1c3caa7:2982398631:-1312568665
 * prev_stickerset:InputStickerSet
 * new_stickerset:InputStickerSet
 */
export interface ChannelAdminLogEventActionChangeStickerSetS {
  _id: number;
  _values: [InputStickerSetT, InputStickerSetT];

  get_prev_stickerset(): InputStickerSetT;
  set_prev_stickerset(val: InputStickerSetT): this;

  get_new_stickerset(): InputStickerSetT;
  set_new_stickerset(val: InputStickerSetT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangeStickerSetS = r<
  new () => ChannelAdminLogEventActionChangeStickerSetS
>(0xb1c3caa7, "ChannelAdminLogEventActionChangeStickerSetS", () => [
  "prev_stickerset",
  TypeRW(InputStickerSetT),
  "new_stickerset",
  TypeRW(InputStickerSetT)
]);

/**
 * inputPaymentCredentialsApplePay:InputPaymentCredentials
 * #aa1c39f:178373535:178373535
 * payment_data:DataJSON
 */
export interface InputPaymentCredentialsApplePayS {
  _id: number;
  _values: [DataJsonT];

  get_payment_data(): DataJsonT;
  set_payment_data(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPaymentCredentialsApplePayS = r<
  new () => InputPaymentCredentialsApplePayS
>(0xaa1c39f, "InputPaymentCredentialsApplePayS", () => [
  "payment_data",
  TypeRW(DataJsonT)
]);

/**
 * inputPaymentCredentialsAndroidPay:InputPaymentCredentials
 * #ca05d50e:3389379854:-905587442
 * payment_token:DataJSON
 * google_transaction_id:string
 */
export interface InputPaymentCredentialsAndroidPayS {
  _id: number;
  _values: [DataJsonT, string];

  get_payment_token(): DataJsonT;
  set_payment_token(val: DataJsonT): this;

  get_google_transaction_id(): string;
  set_google_transaction_id(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPaymentCredentialsAndroidPayS = r<
  new () => InputPaymentCredentialsAndroidPayS
>(0xca05d50e, "InputPaymentCredentialsAndroidPayS", () => [
  "payment_token",
  TypeRW(DataJsonT),
  "google_transaction_id",
  StringRW
]);

/**
 * channelAdminLogEventActionTogglePreHistoryHidden:ChannelAdminLogEventAction
 * #5f5c95f1:1599903217:1599903217
 * new_value:Bool
 */
export interface ChannelAdminLogEventActionTogglePreHistoryHiddenS {
  _id: number;
  _values: [BoolT];

  get_new_value(): BoolT;
  set_new_value(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionTogglePreHistoryHiddenS = r<
  new () => ChannelAdminLogEventActionTogglePreHistoryHiddenS
>(0x5f5c95f1, "ChannelAdminLogEventActionTogglePreHistoryHiddenS", () => [
  "new_value",
  TypeRW(BoolT)
]);

/**
 * inputMediaGeoLive:InputMedia
 * #ce4e82fd:3461251837:-833715459
 * flags:#
 * stopped:flags.0?true
 * geo_point:InputGeoPoint
 * period:flags.1?int
 */
export interface InputMediaGeoLiveS {
  _id: number;
  _values: [number, true, InputGeoPointT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_stopped(): true;
  set_stopped(val: true): this;

  has_stopped(): boolean;

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  get_period(): number;
  set_period(val: number): this;

  has_period(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaGeoLiveS = r<new () => InputMediaGeoLiveS>(
  0xce4e82fd,
  "InputMediaGeoLiveS",
  () => [
    "flags",
    IntRW,
    "stopped",
    Optional(TrueRW, 0, 0),
    "geo_point",
    TypeRW(InputGeoPointT),
    "period",
    Optional(IntRW, 0, 1)
  ]
);

/**
 * messageMediaGeoLive:MessageMedia
 * #7c3c2609:2084316681:2084316681
 * geo:GeoPoint
 * period:int
 */
export interface MessageMediaGeoLiveS {
  _id: number;
  _values: [GeoPointT, number];

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  get_period(): number;
  set_period(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaGeoLiveS = r<new () => MessageMediaGeoLiveS>(
  0x7c3c2609,
  "MessageMediaGeoLiveS",
  () => ["geo", TypeRW(GeoPointT), "period", IntRW]
);

/**
 * dialogPeer:DialogPeer
 * #e56dbf05:3849174789:-445792507
 * peer:Peer
 */
export interface DialogPeerS {
  _id: number;
  _values: [PeerT];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DialogPeerS = r<new () => DialogPeerS>(
  0xe56dbf05,
  "DialogPeerS",
  () => ["peer", TypeRW(PeerT)]
);

/**
 * secureValue:SecureValue
 * #187fa0ca:411017418:411017418
 * flags:#
 * type:SecureValueType
 * data:flags.0?SecureData
 * front_side:flags.1?SecureFile
 * reverse_side:flags.2?SecureFile
 * selfie:flags.3?SecureFile
 * translation:flags.6?Vector<SecureFile>
 * files:flags.4?Vector<SecureFile>
 * plain_data:flags.5?SecurePlainData
 * hash:bytes
 */
export interface SecureValueS {
  _id: number;
  _values: [
    number,
    SecureValueTypeT,
    SecureDataT,
    SecureFileT,
    SecureFileT,
    SecureFileT,
    VectorS<SecureFileT>,
    VectorS<SecureFileT>,
    SecurePlainDataT,
    Uint8Array
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_data(): SecureDataT;
  set_data(val: SecureDataT): this;

  has_data(): boolean;

  get_front_side(): SecureFileT;
  set_front_side(val: SecureFileT): this;

  has_front_side(): boolean;

  get_reverse_side(): SecureFileT;
  set_reverse_side(val: SecureFileT): this;

  has_reverse_side(): boolean;

  get_selfie(): SecureFileT;
  set_selfie(val: SecureFileT): this;

  has_selfie(): boolean;

  get_translation(): VectorS<SecureFileT>;
  set_translation(val: VectorS<SecureFileT>): this;

  has_translation(): boolean;

  get_files(): VectorS<SecureFileT>;
  set_files(val: VectorS<SecureFileT>): this;

  has_files(): boolean;

  get_plain_data(): SecurePlainDataT;
  set_plain_data(val: SecurePlainDataT): this;

  has_plain_data(): boolean;

  get_hash(): Uint8Array;
  set_hash(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueS = r<new () => SecureValueS>(
  0x187fa0ca,
  "SecureValueS",
  () => [
    "flags",
    IntRW,
    "type",
    TypeRW(SecureValueTypeT),
    "data",
    Optional(TypeRW(SecureDataT), 0, 0),
    "front_side",
    Optional(TypeRW(SecureFileT), 0, 1),
    "reverse_side",
    Optional(TypeRW(SecureFileT), 0, 2),
    "selfie",
    Optional(TypeRW(SecureFileT), 0, 3),
    "translation",
    Optional(VectorRW(TypeRW(SecureFileT)), 0, 6),
    "files",
    Optional(VectorRW(TypeRW(SecureFileT)), 0, 4),
    "plain_data",
    Optional(TypeRW(SecurePlainDataT), 0, 5),
    "hash",
    BytesRW
  ]
);

/**
 * inputSecureValue:InputSecureValue
 * #db21d0a7:3676426407:-618540889
 * flags:#
 * type:SecureValueType
 * data:flags.0?SecureData
 * front_side:flags.1?InputSecureFile
 * reverse_side:flags.2?InputSecureFile
 * selfie:flags.3?InputSecureFile
 * translation:flags.6?Vector<InputSecureFile>
 * files:flags.4?Vector<InputSecureFile>
 * plain_data:flags.5?SecurePlainData
 */
export interface InputSecureValueS {
  _id: number;
  _values: [
    number,
    SecureValueTypeT,
    SecureDataT,
    InputSecureFileT,
    InputSecureFileT,
    InputSecureFileT,
    VectorS<InputSecureFileT>,
    VectorS<InputSecureFileT>,
    SecurePlainDataT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_data(): SecureDataT;
  set_data(val: SecureDataT): this;

  has_data(): boolean;

  get_front_side(): InputSecureFileT;
  set_front_side(val: InputSecureFileT): this;

  has_front_side(): boolean;

  get_reverse_side(): InputSecureFileT;
  set_reverse_side(val: InputSecureFileT): this;

  has_reverse_side(): boolean;

  get_selfie(): InputSecureFileT;
  set_selfie(val: InputSecureFileT): this;

  has_selfie(): boolean;

  get_translation(): VectorS<InputSecureFileT>;
  set_translation(val: VectorS<InputSecureFileT>): this;

  has_translation(): boolean;

  get_files(): VectorS<InputSecureFileT>;
  set_files(val: VectorS<InputSecureFileT>): this;

  has_files(): boolean;

  get_plain_data(): SecurePlainDataT;
  set_plain_data(val: SecurePlainDataT): this;

  has_plain_data(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputSecureValueS = r<new () => InputSecureValueS>(
  0xdb21d0a7,
  "InputSecureValueS",
  () => [
    "flags",
    IntRW,
    "type",
    TypeRW(SecureValueTypeT),
    "data",
    Optional(TypeRW(SecureDataT), 0, 0),
    "front_side",
    Optional(TypeRW(InputSecureFileT), 0, 1),
    "reverse_side",
    Optional(TypeRW(InputSecureFileT), 0, 2),
    "selfie",
    Optional(TypeRW(InputSecureFileT), 0, 3),
    "translation",
    Optional(VectorRW(TypeRW(InputSecureFileT)), 0, 6),
    "files",
    Optional(VectorRW(TypeRW(InputSecureFileT)), 0, 4),
    "plain_data",
    Optional(TypeRW(SecurePlainDataT), 0, 5)
  ]
);

/**
 * secureValueHash:SecureValueHash
 * #ed1ecdb0:3978218928:-316748368
 * type:SecureValueType
 * hash:bytes
 */
export interface SecureValueHashS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_hash(): Uint8Array;
  set_hash(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueHashS = r<new () => SecureValueHashS>(
  0xed1ecdb0,
  "SecureValueHashS",
  () => ["type", TypeRW(SecureValueTypeT), "hash", BytesRW]
);

/**
 * secureValueErrorData:SecureValueError
 * #e8a40bd9:3903065049:-391902247
 * type:SecureValueType
 * data_hash:bytes
 * field:string
 * text:string
 */
export interface SecureValueErrorDataS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_data_hash(): Uint8Array;
  set_data_hash(val: Uint8Array): this;

  get_field(): string;
  set_field(val: string): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorDataS = r<new () => SecureValueErrorDataS>(
  0xe8a40bd9,
  "SecureValueErrorDataS",
  () => [
    "type",
    TypeRW(SecureValueTypeT),
    "data_hash",
    BytesRW,
    "field",
    StringRW,
    "text",
    StringRW
  ]
);

/**
 * secureValueErrorFrontSide:SecureValueError
 * #be3dfa:12467706:12467706
 * type:SecureValueType
 * file_hash:bytes
 * text:string
 */
export interface SecureValueErrorFrontSideS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorFrontSideS = r<new () => SecureValueErrorFrontSideS>(
  0xbe3dfa,
  "SecureValueErrorFrontSideS",
  () => [
    "type",
    TypeRW(SecureValueTypeT),
    "file_hash",
    BytesRW,
    "text",
    StringRW
  ]
);

/**
 * secureValueErrorReverseSide:SecureValueError
 * #868a2aa5:2257201829:-2037765467
 * type:SecureValueType
 * file_hash:bytes
 * text:string
 */
export interface SecureValueErrorReverseSideS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorReverseSideS = r<
  new () => SecureValueErrorReverseSideS
>(0x868a2aa5, "SecureValueErrorReverseSideS", () => [
  "type",
  TypeRW(SecureValueTypeT),
  "file_hash",
  BytesRW,
  "text",
  StringRW
]);

/**
 * secureValueErrorSelfie:SecureValueError
 * #e537ced6:3845639894:-449327402
 * type:SecureValueType
 * file_hash:bytes
 * text:string
 */
export interface SecureValueErrorSelfieS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorSelfieS = r<new () => SecureValueErrorSelfieS>(
  0xe537ced6,
  "SecureValueErrorSelfieS",
  () => [
    "type",
    TypeRW(SecureValueTypeT),
    "file_hash",
    BytesRW,
    "text",
    StringRW
  ]
);

/**
 * secureValueErrorFile:SecureValueError
 * #7a700873:2054162547:2054162547
 * type:SecureValueType
 * file_hash:bytes
 * text:string
 */
export interface SecureValueErrorFileS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorFileS = r<new () => SecureValueErrorFileS>(
  0x7a700873,
  "SecureValueErrorFileS",
  () => [
    "type",
    TypeRW(SecureValueTypeT),
    "file_hash",
    BytesRW,
    "text",
    StringRW
  ]
);

/**
 * secureValueErrorFiles:SecureValueError
 * #666220e9:1717706985:1717706985
 * type:SecureValueType
 * file_hash:Vector<bytes>
 * text:string
 */
export interface SecureValueErrorFilesS {
  _id: number;
  _values: [SecureValueTypeT, VectorS<Uint8Array>, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): VectorS<Uint8Array>;
  set_file_hash(val: VectorS<Uint8Array>): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorFilesS = r<new () => SecureValueErrorFilesS>(
  0x666220e9,
  "SecureValueErrorFilesS",
  () => [
    "type",
    TypeRW(SecureValueTypeT),
    "file_hash",
    VectorRW(BytesRW),
    "text",
    StringRW
  ]
);

/**
 * messageActionSecureValuesSent:MessageAction
 * #d95c6154:3646710100:-648257196
 * types:Vector<SecureValueType>
 */
export interface MessageActionSecureValuesSentS {
  _id: number;
  _values: [VectorS<SecureValueTypeT>];

  get_types(): VectorS<SecureValueTypeT>;
  set_types(val: VectorS<SecureValueTypeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionSecureValuesSentS = r<
  new () => MessageActionSecureValuesSentS
>(0xd95c6154, "MessageActionSecureValuesSentS", () => [
  "types",
  VectorRW(TypeRW(SecureValueTypeT))
]);

/**
 * inputWebFileGeoPointLocation:InputWebFileLocation
 * #9f2221c9:2669814217:-1625153079
 * geo_point:InputGeoPoint
 * access_hash:long
 * w:int
 * h:int
 * zoom:int
 * scale:int
 */
export interface InputWebFileGeoPointLocationS {
  _id: number;
  _values: [InputGeoPointT, ProtoLong, number, number, number, number];

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  get_zoom(): number;
  set_zoom(val: number): this;

  get_scale(): number;
  set_scale(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputWebFileGeoPointLocationS = r<
  new () => InputWebFileGeoPointLocationS
>(0x9f2221c9, "InputWebFileGeoPointLocationS", () => [
  "geo_point",
  TypeRW(InputGeoPointT),
  "access_hash",
  LongRW,
  "w",
  IntRW,
  "h",
  IntRW,
  "zoom",
  IntRW,
  "scale",
  IntRW
]);

/**
 * secureSecretSettings:SecureSecretSettings
 * #1527bcac:354925740:354925740
 * secure_algo:SecurePasswordKdfAlgo
 * secure_secret:bytes
 * secure_secret_id:long
 */
export interface SecureSecretSettingsS {
  _id: number;
  _values: [SecurePasswordKdfAlgoT, Uint8Array, ProtoLong];

  get_secure_algo(): SecurePasswordKdfAlgoT;
  set_secure_algo(val: SecurePasswordKdfAlgoT): this;

  get_secure_secret(): Uint8Array;
  set_secure_secret(val: Uint8Array): this;

  get_secure_secret_id(): ProtoLong;
  set_secure_secret_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureSecretSettingsS = r<new () => SecureSecretSettingsS>(
  0x1527bcac,
  "SecureSecretSettingsS",
  () => [
    "secure_algo",
    TypeRW(SecurePasswordKdfAlgoT),
    "secure_secret",
    BytesRW,
    "secure_secret_id",
    LongRW
  ]
);

/**
 * secureValueError:SecureValueError
 * #869d758f:2258466191:-2036501105
 * type:SecureValueType
 * hash:bytes
 * text:string
 */
export interface SecureValueErrorS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_hash(): Uint8Array;
  set_hash(val: Uint8Array): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorS = r<new () => SecureValueErrorS>(
  0x869d758f,
  "SecureValueErrorS",
  () => ["type", TypeRW(SecureValueTypeT), "hash", BytesRW, "text", StringRW]
);

/**
 * secureValueErrorTranslationFile:SecureValueError
 * #a1144770:2702460784:-1592506512
 * type:SecureValueType
 * file_hash:bytes
 * text:string
 */
export interface SecureValueErrorTranslationFileS {
  _id: number;
  _values: [SecureValueTypeT, Uint8Array, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): Uint8Array;
  set_file_hash(val: Uint8Array): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorTranslationFileS = r<
  new () => SecureValueErrorTranslationFileS
>(0xa1144770, "SecureValueErrorTranslationFileS", () => [
  "type",
  TypeRW(SecureValueTypeT),
  "file_hash",
  BytesRW,
  "text",
  StringRW
]);

/**
 * secureValueErrorTranslationFiles:SecureValueError
 * #34636dd8:878931416:878931416
 * type:SecureValueType
 * file_hash:Vector<bytes>
 * text:string
 */
export interface SecureValueErrorTranslationFilesS {
  _id: number;
  _values: [SecureValueTypeT, VectorS<Uint8Array>, string];

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  get_file_hash(): VectorS<Uint8Array>;
  set_file_hash(val: VectorS<Uint8Array>): this;

  get_text(): string;
  set_text(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureValueErrorTranslationFilesS = r<
  new () => SecureValueErrorTranslationFilesS
>(0x34636dd8, "SecureValueErrorTranslationFilesS", () => [
  "type",
  TypeRW(SecureValueTypeT),
  "file_hash",
  VectorRW(BytesRW),
  "text",
  StringRW
]);

/**
 * secureRequiredType:SecureRequiredType
 * #829d99da:2191366618:-2103600678
 * flags:#
 * native_names:flags.0?true
 * selfie_required:flags.1?true
 * translation_required:flags.2?true
 * type:SecureValueType
 */
export interface SecureRequiredTypeS {
  _id: number;
  _values: [number, true, true, true, SecureValueTypeT];

  get_flags(): number;
  set_flags(val: number): this;

  get_native_names(): true;
  set_native_names(val: true): this;

  has_native_names(): boolean;

  get_selfie_required(): true;
  set_selfie_required(val: true): this;

  has_selfie_required(): boolean;

  get_translation_required(): true;
  set_translation_required(val: true): this;

  has_translation_required(): boolean;

  get_type(): SecureValueTypeT;
  set_type(val: SecureValueTypeT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureRequiredTypeS = r<new () => SecureRequiredTypeS>(
  0x829d99da,
  "SecureRequiredTypeS",
  () => [
    "flags",
    IntRW,
    "native_names",
    Optional(TrueRW, 0, 0),
    "selfie_required",
    Optional(TrueRW, 0, 1),
    "translation_required",
    Optional(TrueRW, 0, 2),
    "type",
    TypeRW(SecureValueTypeT)
  ]
);

/**
 * help.passportConfig:help.PassportConfig
 * #a098d6af:2694370991:-1600596305
 * hash:int
 * countries_langs:DataJSON
 */
export interface HelpPassportConfigS {
  _id: number;
  _values: [number, DataJsonT];

  get_hash(): number;
  set_hash(val: number): this;

  get_countries_langs(): DataJsonT;
  set_countries_langs(val: DataJsonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpPassportConfigS = r<new () => HelpPassportConfigS>(
  0xa098d6af,
  "HelpPassportConfigS",
  () => ["hash", IntRW, "countries_langs", TypeRW(DataJsonT)]
);

/**
 * jsonBool:JSONValue
 * #c7345e6a:3342098026:-952869270
 * value:Bool
 */
export interface JsonBoolS {
  _id: number;
  _values: [BoolT];

  get_value(): BoolT;
  set_value(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonBoolS = r<new () => JsonBoolS>(0xc7345e6a, "JsonBoolS", () => [
  "value",
  TypeRW(BoolT)
]);

/**
 * poll:Poll
 * #d5529d06:3578961158:-716006138
 * id:long
 * flags:#
 * closed:flags.0?true
 * question:string
 * answers:Vector<PollAnswer>
 */
export interface PollS {
  _id: number;
  _values: [ProtoLong, number, true, string, VectorS<PollAnswerT>];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_flags(): number;
  set_flags(val: number): this;

  get_closed(): true;
  set_closed(val: true): this;

  has_closed(): boolean;

  get_question(): string;
  set_question(val: string): this;

  get_answers(): VectorS<PollAnswerT>;
  set_answers(val: VectorS<PollAnswerT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PollS = r<new () => PollS>(0xd5529d06, "PollS", () => [
  "id",
  LongRW,
  "flags",
  IntRW,
  "closed",
  Optional(TrueRW, 1, 0),
  "question",
  StringRW,
  "answers",
  VectorRW(TypeRW(PollAnswerT))
]);

/**
 * pollResults:PollResults
 * #5755785a:1465219162:1465219162
 * flags:#
 * min:flags.0?true
 * results:flags.1?Vector<PollAnswerVoters>
 * total_voters:flags.2?int
 */
export interface PollResultsS {
  _id: number;
  _values: [number, true, VectorS<PollAnswerVotersT>, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_min(): true;
  set_min(val: true): this;

  has_min(): boolean;

  get_results(): VectorS<PollAnswerVotersT>;
  set_results(val: VectorS<PollAnswerVotersT>): this;

  has_results(): boolean;

  get_total_voters(): number;
  set_total_voters(val: number): this;

  has_total_voters(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PollResultsS = r<new () => PollResultsS>(
  0x5755785a,
  "PollResultsS",
  () => [
    "flags",
    IntRW,
    "min",
    Optional(TrueRW, 0, 0),
    "results",
    Optional(VectorRW(TypeRW(PollAnswerVotersT)), 0, 1),
    "total_voters",
    Optional(IntRW, 0, 2)
  ]
);

/**
 * updateChatDefaultBannedRights:Update
 * #54c01850:1421875280:1421875280
 * peer:Peer
 * default_banned_rights:ChatBannedRights
 * version:int
 */
export interface UpdateChatDefaultBannedRightsS {
  _id: number;
  _values: [PeerT, ChatBannedRightsT, number];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_default_banned_rights(): ChatBannedRightsT;
  set_default_banned_rights(val: ChatBannedRightsT): this;

  get_version(): number;
  set_version(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatDefaultBannedRightsS = r<
  new () => UpdateChatDefaultBannedRightsS
>(0x54c01850, "UpdateChatDefaultBannedRightsS", () => [
  "peer",
  TypeRW(PeerT),
  "default_banned_rights",
  TypeRW(ChatBannedRightsT),
  "version",
  IntRW
]);

/**
 * channelAdminLogEventActionDefaultBannedRights:ChannelAdminLogEventAction
 * #2df5fc0a:771095562:771095562
 * prev_banned_rights:ChatBannedRights
 * new_banned_rights:ChatBannedRights
 */
export interface ChannelAdminLogEventActionDefaultBannedRightsS {
  _id: number;
  _values: [ChatBannedRightsT, ChatBannedRightsT];

  get_prev_banned_rights(): ChatBannedRightsT;
  set_prev_banned_rights(val: ChatBannedRightsT): this;

  get_new_banned_rights(): ChatBannedRightsT;
  set_new_banned_rights(val: ChatBannedRightsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionDefaultBannedRightsS = r<
  new () => ChannelAdminLogEventActionDefaultBannedRightsS
>(0x2df5fc0a, "ChannelAdminLogEventActionDefaultBannedRightsS", () => [
  "prev_banned_rights",
  TypeRW(ChatBannedRightsT),
  "new_banned_rights",
  TypeRW(ChatBannedRightsT)
]);

/**
 * account.autoDownloadSettings:account.AutoDownloadSettings
 * #63cacf26:1674235686:1674235686
 * low:AutoDownloadSettings
 * medium:AutoDownloadSettings
 * high:AutoDownloadSettings
 */
export interface AccountAutoDownloadSettingsS {
  _id: number;
  _values: [
    AutoDownloadSettingsT,
    AutoDownloadSettingsT,
    AutoDownloadSettingsT
  ];

  get_low(): AutoDownloadSettingsT;
  set_low(val: AutoDownloadSettingsT): this;

  get_medium(): AutoDownloadSettingsT;
  set_medium(val: AutoDownloadSettingsT): this;

  get_high(): AutoDownloadSettingsT;
  set_high(val: AutoDownloadSettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountAutoDownloadSettingsS = r<
  new () => AccountAutoDownloadSettingsS
>(0x63cacf26, "AccountAutoDownloadSettingsS", () => [
  "low",
  TypeRW(AutoDownloadSettingsT),
  "medium",
  TypeRW(AutoDownloadSettingsT),
  "high",
  TypeRW(AutoDownloadSettingsT)
]);

/**
 * emojiKeywordsDifference:EmojiKeywordsDifference
 * #5cc761bd:1556570557:1556570557
 * lang_code:string
 * from_version:int
 * version:int
 * keywords:Vector<EmojiKeyword>
 */
export interface EmojiKeywordsDifferenceS {
  _id: number;
  _values: [string, number, number, VectorS<EmojiKeywordT>];

  get_lang_code(): string;
  set_lang_code(val: string): this;

  get_from_version(): number;
  set_from_version(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  get_keywords(): VectorS<EmojiKeywordT>;
  set_keywords(val: VectorS<EmojiKeywordT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let EmojiKeywordsDifferenceS = r<new () => EmojiKeywordsDifferenceS>(
  0x5cc761bd,
  "EmojiKeywordsDifferenceS",
  () => [
    "lang_code",
    StringRW,
    "from_version",
    IntRW,
    "version",
    IntRW,
    "keywords",
    VectorRW(TypeRW(EmojiKeywordT))
  ]
);

/**
 * inputStickerSetThumb:InputFileLocation
 * #dbaeae9:230353641:230353641
 * stickerset:InputStickerSet
 * volume_id:long
 * local_id:int
 */
export interface InputStickerSetThumbS {
  _id: number;
  _values: [InputStickerSetT, ProtoLong, number];

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  get_volume_id(): ProtoLong;
  set_volume_id(val: ProtoLong): this;

  get_local_id(): number;
  set_local_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputStickerSetThumbS = r<new () => InputStickerSetThumbS>(
  0xdbaeae9,
  "InputStickerSetThumbS",
  () => [
    "stickerset",
    TypeRW(InputStickerSetT),
    "volume_id",
    LongRW,
    "local_id",
    IntRW
  ]
);

/**
 * folderPeer:FolderPeer
 * #e9baa668:3921323624:-373643672
 * peer:Peer
 * folder_id:int
 */
export interface FolderPeerS {
  _id: number;
  _values: [PeerT, number];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FolderPeerS = r<new () => FolderPeerS>(
  0xe9baa668,
  "FolderPeerS",
  () => ["peer", TypeRW(PeerT), "folder_id", IntRW]
);

/**
 * messages.searchCounter:messages.SearchCounter
 * #e844ebff:3896830975:-398136321
 * flags:#
 * inexact:flags.1?true
 * filter:MessagesFilter
 * count:int
 */
export interface MessagesSearchCounterS {
  _id: number;
  _values: [number, true, MessagesFilterT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_inexact(): true;
  set_inexact(val: true): this;

  has_inexact(): boolean;

  get_filter(): MessagesFilterT;
  set_filter(val: MessagesFilterT): this;

  get_count(): number;
  set_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSearchCounterS = r<new () => MessagesSearchCounterS>(
  0xe844ebff,
  "MessagesSearchCounterS",
  () => [
    "flags",
    IntRW,
    "inexact",
    Optional(TrueRW, 0, 1),
    "filter",
    TypeRW(MessagesFilterT),
    "count",
    IntRW
  ]
);

/**
 * updatePeerSettings:Update
 * #6a7e7366:1786671974:1786671974
 * peer:Peer
 * settings:PeerSettings
 */
export interface UpdatePeerSettingsS {
  _id: number;
  _values: [PeerT, PeerSettingsT];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_settings(): PeerSettingsT;
  set_settings(val: PeerSettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatePeerSettingsS = r<new () => UpdatePeerSettingsS>(
  0x6a7e7366,
  "UpdatePeerSettingsS",
  () => ["peer", TypeRW(PeerT), "settings", TypeRW(PeerSettingsT)]
);

/**
 * channelLocation:ChannelLocation
 * #209b82db:547062491:547062491
 * geo_point:GeoPoint
 * address:string
 */
export interface ChannelLocationS {
  _id: number;
  _values: [GeoPointT, string];

  get_geo_point(): GeoPointT;
  set_geo_point(val: GeoPointT): this;

  get_address(): string;
  set_address(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelLocationS = r<new () => ChannelLocationS>(
  0x209b82db,
  "ChannelLocationS",
  () => ["geo_point", TypeRW(GeoPointT), "address", StringRW]
);

/**
 * peerLocated:PeerLocated
 * #ca461b5d:3393592157:-901375139
 * peer:Peer
 * expires:int
 * distance:int
 */
export interface PeerLocatedS {
  _id: number;
  _values: [PeerT, number, number];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_expires(): number;
  set_expires(val: number): this;

  get_distance(): number;
  set_distance(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PeerLocatedS = r<new () => PeerLocatedS>(
  0xca461b5d,
  "PeerLocatedS",
  () => ["peer", TypeRW(PeerT), "expires", IntRW, "distance", IntRW]
);

/**
 * updateDeleteScheduledMessages:Update
 * #90866cee:2424728814:-1870238482
 * peer:Peer
 * messages:Vector<int>
 */
export interface UpdateDeleteScheduledMessagesS {
  _id: number;
  _values: [PeerT, VectorS<number>];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_messages(): VectorS<number>;
  set_messages(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDeleteScheduledMessagesS = r<
  new () => UpdateDeleteScheduledMessagesS
>(0x90866cee, "UpdateDeleteScheduledMessagesS", () => [
  "peer",
  TypeRW(PeerT),
  "messages",
  VectorRW(IntRW)
]);

export type InputChatPhotoT =
  | InputChatPhotoEmptyS
  | InputChatUploadedPhotoS
  | InputChatPhotoS;
export const InputChatPhotoT = OneOf;

export type UserProfilePhotoT = UserProfilePhotoEmptyS | UserProfilePhotoS;
export const UserProfilePhotoT = OneOf;

export type ChatParticipantsT = ChatParticipantsForbiddenS | ChatParticipantsS;
export const ChatParticipantsT = OneOf;

export type ChatPhotoT = ChatPhotoEmptyS | ChatPhotoS;
export const ChatPhotoT = OneOf;

export type PhotoSizeT =
  | PhotoSizeEmptyS
  | PhotoSizeS
  | PhotoCachedSizeS
  | PhotoStrippedSizeS;
export const PhotoSizeT = OneOf;

export const PeerNotifySettingsT = PeerNotifySettingsS;
export type PeerNotifySettingsT = PeerNotifySettingsS;

export const ContactT = ContactS;
export type ContactT = ContactS;

export type UploadFileT = UploadFileS | UploadFileCdnRedirectS;
export const UploadFileT = OneOf;

export type EncryptedMessageT = EncryptedMessageS | EncryptedMessageServiceS;
export const EncryptedMessageT = OneOf;

export type MessagesSentEncryptedMessageT =
  | MessagesSentEncryptedMessageS
  | MessagesSentEncryptedFileS;
export const MessagesSentEncryptedMessageT = OneOf;

export type NotifyPeerT =
  | NotifyPeerS
  | NotifyUsersS
  | NotifyChatsS
  | NotifyBroadcastsS;
export const NotifyPeerT = OneOf;

export type DocumentAttributeT =
  | DocumentAttributeImageSizeS
  | DocumentAttributeAnimatedS
  | DocumentAttributeStickerS
  | DocumentAttributeVideoS
  | DocumentAttributeAudioS
  | DocumentAttributeFilenameS
  | DocumentAttributeHasStickersS;
export const DocumentAttributeT = OneOf;

export const BotInfoT = BotInfoS;
export type BotInfoT = BotInfoS;

export type ChannelMessagesFilterT =
  | ChannelMessagesFilterEmptyS
  | ChannelMessagesFilterS;
export const ChannelMessagesFilterT = OneOf;

export type ChannelParticipantT =
  | ChannelParticipantS
  | ChannelParticipantSelfS
  | ChannelParticipantCreatorS
  | ChannelParticipantAdminS
  | ChannelParticipantBannedS;
export const ChannelParticipantT = OneOf;

export const MessageFwdHeaderT = MessageFwdHeaderS;
export type MessageFwdHeaderT = MessageFwdHeaderS;

export const TopPeerT = TopPeerS;
export type TopPeerT = TopPeerS;

export type InputStickeredMediaT =
  | InputStickeredMediaPhotoS
  | InputStickeredMediaDocumentS;
export const InputStickeredMediaT = OneOf;

export const InvoiceT = InvoiceS;
export type InvoiceT = InvoiceS;

export const PaymentRequestedInfoT = PaymentRequestedInfoS;
export type PaymentRequestedInfoT = PaymentRequestedInfoS;

export type InputWebFileLocationT =
  | InputWebFileLocationS
  | InputWebFileGeoPointLocationS;
export const InputWebFileLocationT = OneOf;

export type InputPaymentCredentialsT =
  | InputPaymentCredentialsSavedS
  | InputPaymentCredentialsS
  | InputPaymentCredentialsApplePayS
  | InputPaymentCredentialsAndroidPayS;
export const InputPaymentCredentialsT = OneOf;

export const ShippingOptionT = ShippingOptionS;
export type ShippingOptionT = ShippingOptionS;

export type PhoneCallT =
  | PhoneCallEmptyS
  | PhoneCallWaitingS
  | PhoneCallRequestedS
  | PhoneCallAcceptedS
  | PhoneCallS
  | PhoneCallDiscardedS;
export const PhoneCallT = OneOf;

export const LangPackDifferenceT = LangPackDifferenceS;
export type LangPackDifferenceT = LangPackDifferenceS;

export type DialogPeerT = DialogPeerS | DialogPeerFolderS;
export const DialogPeerT = OneOf;

export const SecureValueT = SecureValueS;
export type SecureValueT = SecureValueS;

export type SecureValueErrorT =
  | SecureValueErrorDataS
  | SecureValueErrorFrontSideS
  | SecureValueErrorReverseSideS
  | SecureValueErrorSelfieS
  | SecureValueErrorFileS
  | SecureValueErrorFilesS
  | SecureValueErrorS
  | SecureValueErrorTranslationFileS
  | SecureValueErrorTranslationFilesS;
export const SecureValueErrorT = OneOf;

export const SecureSecretSettingsT = SecureSecretSettingsS;
export type SecureSecretSettingsT = SecureSecretSettingsS;

export type HelpPassportConfigT =
  | HelpPassportConfigNotModifiedS
  | HelpPassportConfigS;
export const HelpPassportConfigT = OneOf;

export const PollT = PollS;
export type PollT = PollS;

export const PollResultsT = PollResultsS;
export type PollResultsT = PollResultsS;

export const FolderPeerT = FolderPeerS;
export type FolderPeerT = FolderPeerS;

export type ChannelLocationT = ChannelLocationEmptyS | ChannelLocationS;
export const ChannelLocationT = OneOf;

export const PeerLocatedT = PeerLocatedS;
export type PeerLocatedT = PeerLocatedS;

/**
 * messages.editChatPhoto:messages.editChatPhoto Updates
 * #ca4c79d8:3394009560:-900957736
 * chat_id:int
 * photo:InputChatPhoto
 */
export interface MessagesEditChatPhotoM {
  _id: number;
  _method(): void;
  _values: [number, InputChatPhotoT];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_photo(): InputChatPhotoT;
  set_photo(val: InputChatPhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditChatPhotoM = r<new () => MessagesEditChatPhotoM>(
  0xca4c79d8,
  "MessagesEditChatPhotoM",
  () => ["chat_id", IntRW, "photo", TypeRW(InputChatPhotoT)]
);

/**
 * messages.getAttachedStickers:messages.getAttachedStickers Vector<StickerSetCovered>
 * #cc5b67cc:3428542412:-866424884
 * media:InputStickeredMedia
 */
export interface MessagesGetAttachedStickersM {
  _id: number;
  _method(): void;
  _values: [InputStickeredMediaT];

  get_media(): InputStickeredMediaT;
  set_media(val: InputStickeredMediaT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetAttachedStickersM = r<
  new () => MessagesGetAttachedStickersM
>(0xcc5b67cc, "MessagesGetAttachedStickersM", () => [
  "media",
  TypeRW(InputStickeredMediaT)
]);

/**
 * upload.getWebFile:upload.getWebFile upload.WebFile
 * #24e6818d:619086221:619086221
 * location:InputWebFileLocation
 * offset:int
 * limit:int
 */
export interface UploadGetWebFileM {
  _id: number;
  _method(): void;
  _values: [InputWebFileLocationT, number, number];

  get_location(): InputWebFileLocationT;
  set_location(val: InputWebFileLocationT): this;

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadGetWebFileM = r<new () => UploadGetWebFileM>(
  0x24e6818d,
  "UploadGetWebFileM",
  () => [
    "location",
    TypeRW(InputWebFileLocationT),
    "offset",
    IntRW,
    "limit",
    IntRW
  ]
);

/**
 * payments.validateRequestedInfo:payments.validateRequestedInfo payments.ValidatedRequestedInfo
 * #770a8e74:1997180532:1997180532
 * flags:#
 * save:flags.0?true
 * msg_id:int
 * info:PaymentRequestedInfo
 */
export interface PaymentsValidateRequestedInfoM {
  _id: number;
  _method(): void;
  _values: [number, true, number, PaymentRequestedInfoT];

  get_flags(): number;
  set_flags(val: number): this;

  get_save(): true;
  set_save(val: true): this;

  has_save(): boolean;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_info(): PaymentRequestedInfoT;
  set_info(val: PaymentRequestedInfoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsValidateRequestedInfoM = r<
  new () => PaymentsValidateRequestedInfoM
>(0x770a8e74, "PaymentsValidateRequestedInfoM", () => [
  "flags",
  IntRW,
  "save",
  Optional(TrueRW, 0, 0),
  "msg_id",
  IntRW,
  "info",
  TypeRW(PaymentRequestedInfoT)
]);

/**
 * payments.sendPaymentForm:payments.sendPaymentForm payments.PaymentResult
 * #2b8879b3:730364339:730364339
 * flags:#
 * msg_id:int
 * requested_info_id:flags.0?string
 * shipping_option_id:flags.1?string
 * credentials:InputPaymentCredentials
 */
export interface PaymentsSendPaymentFormM {
  _id: number;
  _method(): void;
  _values: [number, number, string, string, InputPaymentCredentialsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_requested_info_id(): string;
  set_requested_info_id(val: string): this;

  has_requested_info_id(): boolean;

  get_shipping_option_id(): string;
  set_shipping_option_id(val: string): this;

  has_shipping_option_id(): boolean;

  get_credentials(): InputPaymentCredentialsT;
  set_credentials(val: InputPaymentCredentialsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsSendPaymentFormM = r<new () => PaymentsSendPaymentFormM>(
  0x2b8879b3,
  "PaymentsSendPaymentFormM",
  () => [
    "flags",
    IntRW,
    "msg_id",
    IntRW,
    "requested_info_id",
    Optional(StringRW, 0, 0),
    "shipping_option_id",
    Optional(StringRW, 0, 1),
    "credentials",
    TypeRW(InputPaymentCredentialsT)
  ]
);

/**
 * messages.setBotShippingResults:messages.setBotShippingResults Bool
 * #e5f672fa:3858133754:-436833542
 * flags:#
 * query_id:long
 * error:flags.0?string
 * shipping_options:flags.1?Vector<ShippingOption>
 */
export interface MessagesSetBotShippingResultsM {
  _id: number;
  _method(): void;
  _values: [number, ProtoLong, string, VectorS<ShippingOptionT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_error(): string;
  set_error(val: string): this;

  has_error(): boolean;

  get_shipping_options(): VectorS<ShippingOptionT>;
  set_shipping_options(val: VectorS<ShippingOptionT>): this;

  has_shipping_options(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetBotShippingResultsM = r<
  new () => MessagesSetBotShippingResultsM
>(0xe5f672fa, "MessagesSetBotShippingResultsM", () => [
  "flags",
  IntRW,
  "query_id",
  LongRW,
  "error",
  Optional(StringRW, 0, 0),
  "shipping_options",
  Optional(VectorRW(TypeRW(ShippingOptionT)), 0, 1)
]);

/**
 * stickers.addStickerToSet:stickers.addStickerToSet messages.StickerSet
 * #8653febe:2253651646:-2041315650
 * stickerset:InputStickerSet
 * sticker:InputStickerSetItem
 */
export interface StickersAddStickerToSetM {
  _id: number;
  _method(): void;
  _values: [InputStickerSetT, InputStickerSetItemS];

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  get_sticker(): InputStickerSetItemS;
  set_sticker(val: InputStickerSetItemS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickersAddStickerToSetM = r<new () => StickersAddStickerToSetM>(
  0x8653febe,
  "StickersAddStickerToSetM",
  () => [
    "stickerset",
    TypeRW(InputStickerSetT),
    "sticker",
    TypeRW(InputStickerSetItemS)
  ]
);

/**
 * account.saveSecureValue:account.saveSecureValue SecureValue
 * #899fe31d:2308956957:-1986010339
 * value:InputSecureValue
 * secure_secret_id:long
 */
export interface AccountSaveSecureValueM {
  _id: number;
  _method(): void;
  _values: [InputSecureValueS, ProtoLong];

  get_value(): InputSecureValueS;
  set_value(val: InputSecureValueS): this;

  get_secure_secret_id(): ProtoLong;
  set_secure_secret_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSaveSecureValueM = r<new () => AccountSaveSecureValueM>(
  0x899fe31d,
  "AccountSaveSecureValueM",
  () => ["value", TypeRW(InputSecureValueS), "secure_secret_id", LongRW]
);

/**
 * account.acceptAuthorization:account.acceptAuthorization Bool
 * #e7027c94:3875699860:-419267436
 * bot_id:int
 * scope:string
 * public_key:string
 * value_hashes:Vector<SecureValueHash>
 * credentials:SecureCredentialsEncrypted
 */
export interface AccountAcceptAuthorizationM {
  _id: number;
  _method(): void;
  _values: [
    number,
    string,
    string,
    VectorS<SecureValueHashS>,
    SecureCredentialsEncryptedT
  ];

  get_bot_id(): number;
  set_bot_id(val: number): this;

  get_scope(): string;
  set_scope(val: string): this;

  get_public_key(): string;
  set_public_key(val: string): this;

  get_value_hashes(): VectorS<SecureValueHashS>;
  set_value_hashes(val: VectorS<SecureValueHashS>): this;

  get_credentials(): SecureCredentialsEncryptedT;
  set_credentials(val: SecureCredentialsEncryptedT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountAcceptAuthorizationM = r<
  new () => AccountAcceptAuthorizationM
>(0xe7027c94, "AccountAcceptAuthorizationM", () => [
  "bot_id",
  IntRW,
  "scope",
  StringRW,
  "public_key",
  StringRW,
  "value_hashes",
  VectorRW(TypeRW(SecureValueHashS)),
  "credentials",
  TypeRW(SecureCredentialsEncryptedT)
]);

/**
 * auth.sendCode:auth.SentCode
 * #a677244f:2792825935:-1502141361
 * phone_number:string
 * api_id:int
 * api_hash:string
 * settings:CodeSettings
 */
export let CallAuthSendCodeM = c;
export type CallAuthSendCodeM = (
  invoker: ApiInvoker | Connection,
  req: AuthSendCodeM
) => Promise<(AuthSentCodeS | RpcErrorS) & { dc: number }>;

/**
 * contacts.getStatuses:Vector<ContactStatus>
 * #c4a353ee:3299038190:-995929106
 *
 */
export let CallContactsGetStatusesM = c;
export type CallContactsGetStatusesM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetStatusesM
) => Promise<(VectorS<ContactStatusS> | RpcErrorS) & { dc: number }>;

/**
 * photos.updateProfilePhoto:UserProfilePhoto
 * #f0bb5152:4038807890:-256159406
 * id:InputPhoto
 */
export let CallPhotosUpdateProfilePhotoM = c;
export type CallPhotosUpdateProfilePhotoM = (
  invoker: ApiInvoker | Connection,
  req: PhotosUpdateProfilePhotoM
) => Promise<(UserProfilePhotoT | RpcErrorS) & { dc: number }>;

/**
 * help.getConfig:Config
 * #c4f9186b:3304659051:-990308245
 *
 */
export let CallHelpGetConfigM = c;
export type CallHelpGetConfigM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetConfigM
) => Promise<(ConfigS | RpcErrorS) & { dc: number }>;

/**
 * messages.sendEncrypted:messages.SentEncryptedMessage
 * #a9776773:2843174771:-1451792525
 * peer:InputEncryptedChat
 * random_id:long
 * data:bytes
 */
export let CallMessagesSendEncryptedM = c;
export type CallMessagesSendEncryptedM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendEncryptedM
) => Promise<(MessagesSentEncryptedMessageT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendEncryptedFile:messages.SentEncryptedMessage
 * #9a901b66:2593135462:-1701831834
 * peer:InputEncryptedChat
 * random_id:long
 * data:bytes
 * file:InputEncryptedFile
 */
export let CallMessagesSendEncryptedFileM = c;
export type CallMessagesSendEncryptedFileM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendEncryptedFileM
) => Promise<(MessagesSentEncryptedMessageT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendEncryptedService:messages.SentEncryptedMessage
 * #32d439a4:852769188:852769188
 * peer:InputEncryptedChat
 * random_id:long
 * data:bytes
 */
export let CallMessagesSendEncryptedServiceM = c;
export type CallMessagesSendEncryptedServiceM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendEncryptedServiceM
) => Promise<(MessagesSentEncryptedMessageT | RpcErrorS) & { dc: number }>;

/**
 * account.sendChangePhoneCode:auth.SentCode
 * #82574ae5:2186758885:-2108208411
 * phone_number:string
 * settings:CodeSettings
 */
export let CallAccountSendChangePhoneCodeM = c;
export type CallAccountSendChangePhoneCodeM = (
  invoker: ApiInvoker | Connection,
  req: AccountSendChangePhoneCodeM
) => Promise<(AuthSentCodeS | RpcErrorS) & { dc: number }>;

/**
 * account.getAuthorizations:account.Authorizations
 * #e320c158:3810574680:-484392616
 *
 */
export let CallAccountGetAuthorizationsM = c;
export type CallAccountGetAuthorizationsM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetAuthorizationsM
) => Promise<(AccountAuthorizationsS | RpcErrorS) & { dc: number }>;

/**
 * account.getPassword:account.Password
 * #548a30f5:1418342645:1418342645
 *
 */
export let CallAccountGetPasswordM = c;
export type CallAccountGetPasswordM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetPasswordM
) => Promise<(AccountPasswordS | RpcErrorS) & { dc: number }>;

/**
 * auth.resendCode:auth.SentCode
 * #3ef1a9bf:1056025023:1056025023
 * phone_number:string
 * phone_code_hash:string
 */
export let CallAuthResendCodeM = c;
export type CallAuthResendCodeM = (
  invoker: ApiInvoker | Connection,
  req: AuthResendCodeM
) => Promise<(AuthSentCodeS | RpcErrorS) & { dc: number }>;

/**
 * account.sendConfirmPhoneCode:auth.SentCode
 * #1b3faa88:457157256:457157256
 * hash:string
 * settings:CodeSettings
 */
export let CallAccountSendConfirmPhoneCodeM = c;
export type CallAccountSendConfirmPhoneCodeM = (
  invoker: ApiInvoker | Connection,
  req: AccountSendConfirmPhoneCodeM
) => Promise<(AuthSentCodeS | RpcErrorS) & { dc: number }>;

/**
 * upload.getWebFile:upload.WebFile
 * #24e6818d:619086221:619086221
 * location:InputWebFileLocation
 * offset:int
 * limit:int
 */
export let CallUploadGetWebFileM = c;
export type CallUploadGetWebFileM = (
  invoker: ApiInvoker | Connection,
  req: UploadGetWebFileM
) => Promise<(UploadWebFileS | RpcErrorS) & { dc: number }>;

/**
 * messages.setBotShippingResults:Bool
 * #e5f672fa:3858133754:-436833542
 * flags:#
 * query_id:long
 * error:flags.0?string
 * shipping_options:flags.1?Vector<ShippingOption>
 */
export let CallMessagesSetBotShippingResultsM = c;
export type CallMessagesSetBotShippingResultsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetBotShippingResultsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.getCdnConfig:CdnConfig
 * #52029342:1375900482:1375900482
 *
 */
export let CallHelpGetCdnConfigM = c;
export type CallHelpGetCdnConfigM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetCdnConfigM
) => Promise<(CdnConfigS | RpcErrorS) & { dc: number }>;

/**
 * langpack.getLangPack:LangPackDifference
 * #f2f2330a:4075959050:-219008246
 * lang_pack:string
 * lang_code:string
 */
export let CallLangpackGetLangPackM = c;
export type CallLangpackGetLangPackM = (
  invoker: ApiInvoker | Connection,
  req: LangpackGetLangPackM
) => Promise<(LangPackDifferenceT | RpcErrorS) & { dc: number }>;

/**
 * langpack.getDifference:LangPackDifference
 * #cd984aa5:3449309861:-845657435
 * lang_pack:string
 * lang_code:string
 * from_version:int
 */
export let CallLangpackGetDifferenceM = c;
export type CallLangpackGetDifferenceM = (
  invoker: ApiInvoker | Connection,
  req: LangpackGetDifferenceM
) => Promise<(LangPackDifferenceT | RpcErrorS) & { dc: number }>;

/**
 * account.getAllSecureValues:Vector<SecureValue>
 * #b288bc7d:2995305597:-1299661699
 *
 */
export let CallAccountGetAllSecureValuesM = c;
export type CallAccountGetAllSecureValuesM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetAllSecureValuesM
) => Promise<(VectorS<SecureValueT> | RpcErrorS) & { dc: number }>;

/**
 * account.getSecureValue:Vector<SecureValue>
 * #73665bc2:1936088002:1936088002
 * types:Vector<SecureValueType>
 */
export let CallAccountGetSecureValueM = c;
export type CallAccountGetSecureValueM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetSecureValueM
) => Promise<(VectorS<SecureValueT> | RpcErrorS) & { dc: number }>;

/**
 * account.saveSecureValue:SecureValue
 * #899fe31d:2308956957:-1986010339
 * value:InputSecureValue
 * secure_secret_id:long
 */
export let CallAccountSaveSecureValueM = c;
export type CallAccountSaveSecureValueM = (
  invoker: ApiInvoker | Connection,
  req: AccountSaveSecureValueM
) => Promise<(SecureValueT | RpcErrorS) & { dc: number }>;

/**
 * account.acceptAuthorization:Bool
 * #e7027c94:3875699860:-419267436
 * bot_id:int
 * scope:string
 * public_key:string
 * value_hashes:Vector<SecureValueHash>
 * credentials:SecureCredentialsEncrypted
 */
export let CallAccountAcceptAuthorizationM = c;
export type CallAccountAcceptAuthorizationM = (
  invoker: ApiInvoker | Connection,
  req: AccountAcceptAuthorizationM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.sendVerifyPhoneCode:auth.SentCode
 * #a5a356f9:2778945273:-1516022023
 * phone_number:string
 * settings:CodeSettings
 */
export let CallAccountSendVerifyPhoneCodeM = c;
export type CallAccountSendVerifyPhoneCodeM = (
  invoker: ApiInvoker | Connection,
  req: AccountSendVerifyPhoneCodeM
) => Promise<(AuthSentCodeS | RpcErrorS) & { dc: number }>;

/**
 * messages.getDialogUnreadMarks:Vector<DialogPeer>
 * #22e24e22:585256482:585256482
 *
 */
export let CallMessagesGetDialogUnreadMarksM = c;
export type CallMessagesGetDialogUnreadMarksM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetDialogUnreadMarksM
) => Promise<(VectorS<DialogPeerT> | RpcErrorS) & { dc: number }>;

/**
 * help.getPassportConfig:help.PassportConfig
 * #c661ad08:3328290056:-966677240
 * hash:int
 */
export let CallHelpGetPassportConfigM = c;
export type CallHelpGetPassportConfigM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetPassportConfigM
) => Promise<(HelpPassportConfigT | RpcErrorS) & { dc: number }>;

/**
 * account.getAutoDownloadSettings:account.AutoDownloadSettings
 * #56da0b3f:1457130303:1457130303
 *
 */
export let CallAccountGetAutoDownloadSettingsM = c;
export type CallAccountGetAutoDownloadSettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetAutoDownloadSettingsM
) => Promise<(AccountAutoDownloadSettingsS | RpcErrorS) & { dc: number }>;

/**
 * messages.getEmojiKeywords:EmojiKeywordsDifference
 * #35a0e062:899735650:899735650
 * lang_code:string
 */
export let CallMessagesGetEmojiKeywordsM = c;
export type CallMessagesGetEmojiKeywordsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetEmojiKeywordsM
) => Promise<(EmojiKeywordsDifferenceS | RpcErrorS) & { dc: number }>;

/**
 * messages.getEmojiKeywordsDifference:EmojiKeywordsDifference
 * #1508b6af:352892591:352892591
 * lang_code:string
 * from_version:int
 */
export let CallMessagesGetEmojiKeywordsDifferenceM = c;
export type CallMessagesGetEmojiKeywordsDifferenceM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetEmojiKeywordsDifferenceM
) => Promise<(EmojiKeywordsDifferenceS | RpcErrorS) & { dc: number }>;

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
export interface PhotoS {
  _id: number;
  _values: [
    number,
    true,
    ProtoLong,
    ProtoLong,
    Uint8Array,
    number,
    VectorS<PhotoSizeT>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_has_stickers(): true;
  set_has_stickers(val: true): this;

  has_has_stickers(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  get_date(): number;
  set_date(val: number): this;

  get_sizes(): VectorS<PhotoSizeT>;
  set_sizes(val: VectorS<PhotoSizeT>): this;

  get_dc_id(): number;
  set_dc_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotoS = r<new () => PhotoS>(0xd07504a5, "PhotoS", () => [
  "flags",
  IntRW,
  "has_stickers",
  Optional(TrueRW, 0, 0),
  "id",
  LongRW,
  "access_hash",
  LongRW,
  "file_reference",
  BytesRW,
  "date",
  IntRW,
  "sizes",
  VectorRW(TypeRW(PhotoSizeT)),
  "dc_id",
  IntRW
]);

/**
 * updateChatParticipants:Update
 * #7761198:125178264:125178264
 * participants:ChatParticipants
 */
export interface UpdateChatParticipantsS {
  _id: number;
  _values: [ChatParticipantsT];

  get_participants(): ChatParticipantsT;
  set_participants(val: ChatParticipantsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChatParticipantsS = r<new () => UpdateChatParticipantsS>(
  0x7761198,
  "UpdateChatParticipantsS",
  () => ["participants", TypeRW(ChatParticipantsT)]
);

/**
 * updateUserPhoto:Update
 * #95313b0c:2503031564:-1791935732
 * user_id:int
 * date:int
 * photo:UserProfilePhoto
 * previous:Bool
 */
export interface UpdateUserPhotoS {
  _id: number;
  _values: [number, number, UserProfilePhotoT, BoolT];

  get_user_id(): number;
  set_user_id(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_photo(): UserProfilePhotoT;
  set_photo(val: UserProfilePhotoT): this;

  get_previous(): BoolT;
  set_previous(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateUserPhotoS = r<new () => UpdateUserPhotoS>(
  0x95313b0c,
  "UpdateUserPhotoS",
  () => [
    "user_id",
    IntRW,
    "date",
    IntRW,
    "photo",
    TypeRW(UserProfilePhotoT),
    "previous",
    TypeRW(BoolT)
  ]
);

/**
 * updateNewEncryptedMessage:Update
 * #12bcbd9a:314359194:314359194
 * message:EncryptedMessage
 * qts:int
 */
export interface UpdateNewEncryptedMessageS {
  _id: number;
  _values: [EncryptedMessageT, number];

  get_message(): EncryptedMessageT;
  set_message(val: EncryptedMessageT): this;

  get_qts(): number;
  set_qts(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateNewEncryptedMessageS = r<new () => UpdateNewEncryptedMessageS>(
  0x12bcbd9a,
  "UpdateNewEncryptedMessageS",
  () => ["message", TypeRW(EncryptedMessageT), "qts", IntRW]
);

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
export interface InputMediaUploadedDocumentS {
  _id: number;
  _values: [
    number,
    true,
    InputFileT,
    InputFileT,
    string,
    VectorS<DocumentAttributeT>,
    VectorS<InputDocumentT>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_nosound_video(): true;
  set_nosound_video(val: true): this;

  has_nosound_video(): boolean;

  get_file(): InputFileT;
  set_file(val: InputFileT): this;

  get_thumb(): InputFileT;
  set_thumb(val: InputFileT): this;

  has_thumb(): boolean;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_attributes(): VectorS<DocumentAttributeT>;
  set_attributes(val: VectorS<DocumentAttributeT>): this;

  get_stickers(): VectorS<InputDocumentT>;
  set_stickers(val: VectorS<InputDocumentT>): this;

  has_stickers(): boolean;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaUploadedDocumentS = r<
  new () => InputMediaUploadedDocumentS
>(0x5b38c6c1, "InputMediaUploadedDocumentS", () => [
  "flags",
  IntRW,
  "nosound_video",
  Optional(TrueRW, 0, 3),
  "file",
  TypeRW(InputFileT),
  "thumb",
  Optional(TypeRW(InputFileT), 0, 2),
  "mime_type",
  StringRW,
  "attributes",
  VectorRW(TypeRW(DocumentAttributeT)),
  "stickers",
  Optional(VectorRW(TypeRW(InputDocumentT)), 0, 0),
  "ttl_seconds",
  Optional(IntRW, 0, 1)
]);

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
export interface DocumentS {
  _id: number;
  _values: [
    number,
    ProtoLong,
    ProtoLong,
    Uint8Array,
    number,
    string,
    number,
    VectorS<PhotoSizeT>,
    number,
    VectorS<DocumentAttributeT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_file_reference(): Uint8Array;
  set_file_reference(val: Uint8Array): this;

  get_date(): number;
  set_date(val: number): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_size(): number;
  set_size(val: number): this;

  get_thumbs(): VectorS<PhotoSizeT>;
  set_thumbs(val: VectorS<PhotoSizeT>): this;

  has_thumbs(): boolean;

  get_dc_id(): number;
  set_dc_id(val: number): this;

  get_attributes(): VectorS<DocumentAttributeT>;
  set_attributes(val: VectorS<DocumentAttributeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DocumentS = r<new () => DocumentS>(0x9ba29cc1, "DocumentS", () => [
  "flags",
  IntRW,
  "id",
  LongRW,
  "access_hash",
  LongRW,
  "file_reference",
  BytesRW,
  "date",
  IntRW,
  "mime_type",
  StringRW,
  "size",
  IntRW,
  "thumbs",
  Optional(VectorRW(TypeRW(PhotoSizeT)), 0, 0),
  "dc_id",
  IntRW,
  "attributes",
  VectorRW(TypeRW(DocumentAttributeT))
]);

/**
 * updateNotifySettings:Update
 * #bec268ef:3200411887:-1094555409
 * peer:NotifyPeer
 * notify_settings:PeerNotifySettings
 */
export interface UpdateNotifySettingsS {
  _id: number;
  _values: [NotifyPeerT, PeerNotifySettingsT];

  get_peer(): NotifyPeerT;
  set_peer(val: NotifyPeerT): this;

  get_notify_settings(): PeerNotifySettingsT;
  set_notify_settings(val: PeerNotifySettingsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateNotifySettingsS = r<new () => UpdateNotifySettingsS>(
  0xbec268ef,
  "UpdateNotifySettingsS",
  () => [
    "peer",
    TypeRW(NotifyPeerT),
    "notify_settings",
    TypeRW(PeerNotifySettingsT)
  ]
);

/**
 * account.passwordSettings:account.PasswordSettings
 * #9a5c33e5:2589733861:-1705233435
 * flags:#
 * email:flags.0?string
 * secure_settings:flags.1?SecureSecretSettings
 */
export interface AccountPasswordSettingsS {
  _id: number;
  _values: [number, string, SecureSecretSettingsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_email(): string;
  set_email(val: string): this;

  has_email(): boolean;

  get_secure_settings(): SecureSecretSettingsT;
  set_secure_settings(val: SecureSecretSettingsT): this;

  has_secure_settings(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountPasswordSettingsS = r<new () => AccountPasswordSettingsS>(
  0x9a5c33e5,
  "AccountPasswordSettingsS",
  () => [
    "flags",
    IntRW,
    "email",
    Optional(StringRW, 0, 0),
    "secure_settings",
    Optional(TypeRW(SecureSecretSettingsT), 0, 1)
  ]
);

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
export interface AccountPasswordInputSettingsS {
  _id: number;
  _values: [
    number,
    PasswordKdfAlgoT,
    Uint8Array,
    string,
    string,
    SecureSecretSettingsT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_new_algo(): PasswordKdfAlgoT;
  set_new_algo(val: PasswordKdfAlgoT): this;

  has_new_algo(): boolean;

  get_new_password_hash(): Uint8Array;
  set_new_password_hash(val: Uint8Array): this;

  has_new_password_hash(): boolean;

  get_hint(): string;
  set_hint(val: string): this;

  has_hint(): boolean;

  get_email(): string;
  set_email(val: string): this;

  has_email(): boolean;

  get_new_secure_settings(): SecureSecretSettingsT;
  set_new_secure_settings(val: SecureSecretSettingsT): this;

  has_new_secure_settings(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountPasswordInputSettingsS = r<
  new () => AccountPasswordInputSettingsS
>(0xc23727c9, "AccountPasswordInputSettingsS", () => [
  "flags",
  IntRW,
  "new_algo",
  Optional(TypeRW(PasswordKdfAlgoT), 0, 0),
  "new_password_hash",
  Optional(BytesRW, 0, 0),
  "hint",
  Optional(StringRW, 0, 0),
  "email",
  Optional(StringRW, 0, 1),
  "new_secure_settings",
  Optional(TypeRW(SecureSecretSettingsT), 0, 2)
]);

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
export interface StickerSetS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_archived(): true;
  set_archived(val: true): this;

  has_archived(): boolean;

  get_official(): true;
  set_official(val: true): this;

  has_official(): boolean;

  get_masks(): true;
  set_masks(val: true): this;

  has_masks(): boolean;

  get_animated(): true;
  set_animated(val: true): this;

  has_animated(): boolean;

  get_installed_date(): number;
  set_installed_date(val: number): this;

  has_installed_date(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_title(): string;
  set_title(val: string): this;

  get_short_name(): string;
  set_short_name(val: string): this;

  get_thumb(): PhotoSizeT;
  set_thumb(val: PhotoSizeT): this;

  has_thumb(): boolean;

  get_thumb_dc_id(): number;
  set_thumb_dc_id(val: number): this;

  has_thumb_dc_id(): boolean;

  get_count(): number;
  set_count(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickerSetS = r<new () => StickerSetS>(
  0xeeb46f27,
  "StickerSetS",
  () => [
    "flags",
    IntRW,
    "archived",
    Optional(TrueRW, 0, 1),
    "official",
    Optional(TrueRW, 0, 2),
    "masks",
    Optional(TrueRW, 0, 3),
    "animated",
    Optional(TrueRW, 0, 5),
    "installed_date",
    Optional(IntRW, 0, 0),
    "id",
    LongRW,
    "access_hash",
    LongRW,
    "title",
    StringRW,
    "short_name",
    StringRW,
    "thumb",
    Optional(TypeRW(PhotoSizeT), 0, 4),
    "thumb_dc_id",
    Optional(IntRW, 0, 4),
    "count",
    IntRW,
    "hash",
    IntRW
  ]
);

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
export interface UserS {
  _id: number;
  _values: [
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
    VectorS<RestrictionReasonT>,
    string,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_self(): true;
  set_self(val: true): this;

  has_self(): boolean;

  get_contact(): true;
  set_contact(val: true): this;

  has_contact(): boolean;

  get_mutual_contact(): true;
  set_mutual_contact(val: true): this;

  has_mutual_contact(): boolean;

  get_deleted(): true;
  set_deleted(val: true): this;

  has_deleted(): boolean;

  get_bot(): true;
  set_bot(val: true): this;

  has_bot(): boolean;

  get_bot_chat_history(): true;
  set_bot_chat_history(val: true): this;

  has_bot_chat_history(): boolean;

  get_bot_nochats(): true;
  set_bot_nochats(val: true): this;

  has_bot_nochats(): boolean;

  get_verified(): true;
  set_verified(val: true): this;

  has_verified(): boolean;

  get_restricted(): true;
  set_restricted(val: true): this;

  has_restricted(): boolean;

  get_min(): true;
  set_min(val: true): this;

  has_min(): boolean;

  get_bot_inline_geo(): true;
  set_bot_inline_geo(val: true): this;

  has_bot_inline_geo(): boolean;

  get_support(): true;
  set_support(val: true): this;

  has_support(): boolean;

  get_scam(): true;
  set_scam(val: true): this;

  has_scam(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  has_access_hash(): boolean;

  get_first_name(): string;
  set_first_name(val: string): this;

  has_first_name(): boolean;

  get_last_name(): string;
  set_last_name(val: string): this;

  has_last_name(): boolean;

  get_username(): string;
  set_username(val: string): this;

  has_username(): boolean;

  get_phone(): string;
  set_phone(val: string): this;

  has_phone(): boolean;

  get_photo(): UserProfilePhotoT;
  set_photo(val: UserProfilePhotoT): this;

  has_photo(): boolean;

  get_status(): UserStatusT;
  set_status(val: UserStatusT): this;

  has_status(): boolean;

  get_bot_info_version(): number;
  set_bot_info_version(val: number): this;

  has_bot_info_version(): boolean;

  get_restriction_reason(): VectorS<RestrictionReasonT>;
  set_restriction_reason(val: VectorS<RestrictionReasonT>): this;

  has_restriction_reason(): boolean;

  get_bot_inline_placeholder(): string;
  set_bot_inline_placeholder(val: string): this;

  has_bot_inline_placeholder(): boolean;

  get_lang_code(): string;
  set_lang_code(val: string): this;

  has_lang_code(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserS = r<new () => UserS>(0x938458c1, "UserS", () => [
  "flags",
  IntRW,
  "self",
  Optional(TrueRW, 0, 10),
  "contact",
  Optional(TrueRW, 0, 11),
  "mutual_contact",
  Optional(TrueRW, 0, 12),
  "deleted",
  Optional(TrueRW, 0, 13),
  "bot",
  Optional(TrueRW, 0, 14),
  "bot_chat_history",
  Optional(TrueRW, 0, 15),
  "bot_nochats",
  Optional(TrueRW, 0, 16),
  "verified",
  Optional(TrueRW, 0, 17),
  "restricted",
  Optional(TrueRW, 0, 18),
  "min",
  Optional(TrueRW, 0, 20),
  "bot_inline_geo",
  Optional(TrueRW, 0, 21),
  "support",
  Optional(TrueRW, 0, 23),
  "scam",
  Optional(TrueRW, 0, 24),
  "id",
  IntRW,
  "access_hash",
  Optional(LongRW, 0, 0),
  "first_name",
  Optional(StringRW, 0, 1),
  "last_name",
  Optional(StringRW, 0, 2),
  "username",
  Optional(StringRW, 0, 3),
  "phone",
  Optional(StringRW, 0, 4),
  "photo",
  Optional(TypeRW(UserProfilePhotoT), 0, 5),
  "status",
  Optional(TypeRW(UserStatusT), 0, 6),
  "bot_info_version",
  Optional(IntRW, 0, 14),
  "restriction_reason",
  Optional(VectorRW(TypeRW(RestrictionReasonT)), 0, 18),
  "bot_inline_placeholder",
  Optional(StringRW, 0, 19),
  "lang_code",
  Optional(StringRW, 0, 22)
]);

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
export interface ChannelS {
  _id: number;
  _values: [
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
    VectorS<RestrictionReasonT>,
    ChatAdminRightsT,
    ChatBannedRightsT,
    ChatBannedRightsT,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_creator(): true;
  set_creator(val: true): this;

  has_creator(): boolean;

  get_left(): true;
  set_left(val: true): this;

  has_left(): boolean;

  get_broadcast(): true;
  set_broadcast(val: true): this;

  has_broadcast(): boolean;

  get_verified(): true;
  set_verified(val: true): this;

  has_verified(): boolean;

  get_megagroup(): true;
  set_megagroup(val: true): this;

  has_megagroup(): boolean;

  get_restricted(): true;
  set_restricted(val: true): this;

  has_restricted(): boolean;

  get_signatures(): true;
  set_signatures(val: true): this;

  has_signatures(): boolean;

  get_min(): true;
  set_min(val: true): this;

  has_min(): boolean;

  get_scam(): true;
  set_scam(val: true): this;

  has_scam(): boolean;

  get_has_link(): true;
  set_has_link(val: true): this;

  has_has_link(): boolean;

  get_has_geo(): true;
  set_has_geo(val: true): this;

  has_has_geo(): boolean;

  get_slowmode_enabled(): true;
  set_slowmode_enabled(val: true): this;

  has_slowmode_enabled(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  has_access_hash(): boolean;

  get_title(): string;
  set_title(val: string): this;

  get_username(): string;
  set_username(val: string): this;

  has_username(): boolean;

  get_photo(): ChatPhotoT;
  set_photo(val: ChatPhotoT): this;

  get_date(): number;
  set_date(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  get_restriction_reason(): VectorS<RestrictionReasonT>;
  set_restriction_reason(val: VectorS<RestrictionReasonT>): this;

  has_restriction_reason(): boolean;

  get_admin_rights(): ChatAdminRightsT;
  set_admin_rights(val: ChatAdminRightsT): this;

  has_admin_rights(): boolean;

  get_banned_rights(): ChatBannedRightsT;
  set_banned_rights(val: ChatBannedRightsT): this;

  has_banned_rights(): boolean;

  get_default_banned_rights(): ChatBannedRightsT;
  set_default_banned_rights(val: ChatBannedRightsT): this;

  has_default_banned_rights(): boolean;

  get_participants_count(): number;
  set_participants_count(val: number): this;

  has_participants_count(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelS = r<new () => ChannelS>(0xd31a961e, "ChannelS", () => [
  "flags",
  IntRW,
  "creator",
  Optional(TrueRW, 0, 0),
  "left",
  Optional(TrueRW, 0, 2),
  "broadcast",
  Optional(TrueRW, 0, 5),
  "verified",
  Optional(TrueRW, 0, 7),
  "megagroup",
  Optional(TrueRW, 0, 8),
  "restricted",
  Optional(TrueRW, 0, 9),
  "signatures",
  Optional(TrueRW, 0, 11),
  "min",
  Optional(TrueRW, 0, 12),
  "scam",
  Optional(TrueRW, 0, 19),
  "has_link",
  Optional(TrueRW, 0, 20),
  "has_geo",
  Optional(TrueRW, 0, 21),
  "slowmode_enabled",
  Optional(TrueRW, 0, 22),
  "id",
  IntRW,
  "access_hash",
  Optional(LongRW, 0, 13),
  "title",
  StringRW,
  "username",
  Optional(StringRW, 0, 6),
  "photo",
  TypeRW(ChatPhotoT),
  "date",
  IntRW,
  "version",
  IntRW,
  "restriction_reason",
  Optional(VectorRW(TypeRW(RestrictionReasonT)), 0, 9),
  "admin_rights",
  Optional(TypeRW(ChatAdminRightsT), 0, 14),
  "banned_rights",
  Optional(TypeRW(ChatBannedRightsT), 0, 15),
  "default_banned_rights",
  Optional(TypeRW(ChatBannedRightsT), 0, 18),
  "participants_count",
  Optional(IntRW, 0, 17)
]);

/**
 * topPeerCategoryPeers:TopPeerCategoryPeers
 * #fb834291:4219683473:-75283823
 * category:TopPeerCategory
 * count:int
 * peers:Vector<TopPeer>
 */
export interface TopPeerCategoryPeersS {
  _id: number;
  _values: [TopPeerCategoryT, number, VectorS<TopPeerT>];

  get_category(): TopPeerCategoryT;
  set_category(val: TopPeerCategoryT): this;

  get_count(): number;
  set_count(val: number): this;

  get_peers(): VectorS<TopPeerT>;
  set_peers(val: VectorS<TopPeerT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TopPeerCategoryPeersS = r<new () => TopPeerCategoryPeersS>(
  0xfb834291,
  "TopPeerCategoryPeersS",
  () => [
    "category",
    TypeRW(TopPeerCategoryT),
    "count",
    IntRW,
    "peers",
    VectorRW(TypeRW(TopPeerT))
  ]
);

/**
 * updateDialogPinned:Update
 * #6e6fe51c:1852826908:1852826908
 * flags:#
 * pinned:flags.0?true
 * folder_id:flags.1?int
 * peer:DialogPeer
 */
export interface UpdateDialogPinnedS {
  _id: number;
  _values: [number, true, number, DialogPeerT];

  get_flags(): number;
  set_flags(val: number): this;

  get_pinned(): true;
  set_pinned(val: true): this;

  has_pinned(): boolean;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_peer(): DialogPeerT;
  set_peer(val: DialogPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDialogPinnedS = r<new () => UpdateDialogPinnedS>(
  0x6e6fe51c,
  "UpdateDialogPinnedS",
  () => [
    "flags",
    IntRW,
    "pinned",
    Optional(TrueRW, 0, 0),
    "folder_id",
    Optional(IntRW, 0, 1),
    "peer",
    TypeRW(DialogPeerT)
  ]
);

/**
 * updatePinnedDialogs:Update
 * #fa0f3ca2:4195302562:-99664734
 * flags:#
 * folder_id:flags.1?int
 * order:flags.0?Vector<DialogPeer>
 */
export interface UpdatePinnedDialogsS {
  _id: number;
  _values: [number, number, VectorS<DialogPeerT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_order(): VectorS<DialogPeerT>;
  set_order(val: VectorS<DialogPeerT>): this;

  has_order(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatePinnedDialogsS = r<new () => UpdatePinnedDialogsS>(
  0xfa0f3ca2,
  "UpdatePinnedDialogsS",
  () => [
    "flags",
    IntRW,
    "folder_id",
    Optional(IntRW, 0, 1),
    "order",
    Optional(VectorRW(TypeRW(DialogPeerT)), 0, 0)
  ]
);

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
export interface MessageActionPaymentSentMeS {
  _id: number;
  _values: [
    number,
    string,
    ProtoLong,
    Uint8Array,
    PaymentRequestedInfoT,
    string,
    PaymentChargeT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_currency(): string;
  set_currency(val: string): this;

  get_total_amount(): ProtoLong;
  set_total_amount(val: ProtoLong): this;

  get_payload(): Uint8Array;
  set_payload(val: Uint8Array): this;

  get_info(): PaymentRequestedInfoT;
  set_info(val: PaymentRequestedInfoT): this;

  has_info(): boolean;

  get_shipping_option_id(): string;
  set_shipping_option_id(val: string): this;

  has_shipping_option_id(): boolean;

  get_charge(): PaymentChargeT;
  set_charge(val: PaymentChargeT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionPaymentSentMeS = r<
  new () => MessageActionPaymentSentMeS
>(0x8f31b327, "MessageActionPaymentSentMeS", () => [
  "flags",
  IntRW,
  "currency",
  StringRW,
  "total_amount",
  LongRW,
  "payload",
  BytesRW,
  "info",
  Optional(TypeRW(PaymentRequestedInfoT), 0, 0),
  "shipping_option_id",
  Optional(StringRW, 0, 1),
  "charge",
  TypeRW(PaymentChargeT)
]);

/**
 * webDocument:WebDocument
 * #1c570ed1:475467473:475467473
 * url:string
 * access_hash:long
 * size:int
 * mime_type:string
 * attributes:Vector<DocumentAttribute>
 */
export interface WebDocumentS {
  _id: number;
  _values: [string, ProtoLong, number, string, VectorS<DocumentAttributeT>];

  get_url(): string;
  set_url(val: string): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_size(): number;
  set_size(val: number): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_attributes(): VectorS<DocumentAttributeT>;
  set_attributes(val: VectorS<DocumentAttributeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebDocumentS = r<new () => WebDocumentS>(
  0x1c570ed1,
  "WebDocumentS",
  () => [
    "url",
    StringRW,
    "access_hash",
    LongRW,
    "size",
    IntRW,
    "mime_type",
    StringRW,
    "attributes",
    VectorRW(TypeRW(DocumentAttributeT))
  ]
);

/**
 * inputWebDocument:InputWebDocument
 * #9bed434d:2616017741:-1678949555
 * url:string
 * size:int
 * mime_type:string
 * attributes:Vector<DocumentAttribute>
 */
export interface InputWebDocumentS {
  _id: number;
  _values: [string, number, string, VectorS<DocumentAttributeT>];

  get_url(): string;
  set_url(val: string): this;

  get_size(): number;
  set_size(val: number): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_attributes(): VectorS<DocumentAttributeT>;
  set_attributes(val: VectorS<DocumentAttributeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputWebDocumentS = r<new () => InputWebDocumentS>(
  0x9bed434d,
  "InputWebDocumentS",
  () => [
    "url",
    StringRW,
    "size",
    IntRW,
    "mime_type",
    StringRW,
    "attributes",
    VectorRW(TypeRW(DocumentAttributeT))
  ]
);

/**
 * payments.validatedRequestedInfo:payments.ValidatedRequestedInfo
 * #d1451883:3510966403:-784000893
 * flags:#
 * id:flags.0?string
 * shipping_options:flags.1?Vector<ShippingOption>
 */
export interface PaymentsValidatedRequestedInfoS {
  _id: number;
  _values: [number, string, VectorS<ShippingOptionT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): string;
  set_id(val: string): this;

  has_id(): boolean;

  get_shipping_options(): VectorS<ShippingOptionT>;
  set_shipping_options(val: VectorS<ShippingOptionT>): this;

  has_shipping_options(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsValidatedRequestedInfoS = r<
  new () => PaymentsValidatedRequestedInfoS
>(0xd1451883, "PaymentsValidatedRequestedInfoS", () => [
  "flags",
  IntRW,
  "id",
  Optional(StringRW, 0, 0),
  "shipping_options",
  Optional(VectorRW(TypeRW(ShippingOptionT)), 0, 1)
]);

/**
 * payments.savedInfo:payments.SavedInfo
 * #fb8fe43c:4220511292:-74456004
 * flags:#
 * has_saved_credentials:flags.1?true
 * saved_info:flags.0?PaymentRequestedInfo
 */
export interface PaymentsSavedInfoS {
  _id: number;
  _values: [number, true, PaymentRequestedInfoT];

  get_flags(): number;
  set_flags(val: number): this;

  get_has_saved_credentials(): true;
  set_has_saved_credentials(val: true): this;

  has_has_saved_credentials(): boolean;

  get_saved_info(): PaymentRequestedInfoT;
  set_saved_info(val: PaymentRequestedInfoT): this;

  has_saved_info(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsSavedInfoS = r<new () => PaymentsSavedInfoS>(
  0xfb8fe43c,
  "PaymentsSavedInfoS",
  () => [
    "flags",
    IntRW,
    "has_saved_credentials",
    Optional(TrueRW, 0, 1),
    "saved_info",
    Optional(TypeRW(PaymentRequestedInfoT), 0, 0)
  ]
);

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
export interface UpdateBotPrecheckoutQueryS {
  _id: number;
  _values: [
    number,
    ProtoLong,
    number,
    Uint8Array,
    PaymentRequestedInfoT,
    string,
    string,
    ProtoLong
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_payload(): Uint8Array;
  set_payload(val: Uint8Array): this;

  get_info(): PaymentRequestedInfoT;
  set_info(val: PaymentRequestedInfoT): this;

  has_info(): boolean;

  get_shipping_option_id(): string;
  set_shipping_option_id(val: string): this;

  has_shipping_option_id(): boolean;

  get_currency(): string;
  set_currency(val: string): this;

  get_total_amount(): ProtoLong;
  set_total_amount(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateBotPrecheckoutQueryS = r<new () => UpdateBotPrecheckoutQueryS>(
  0x5d2f3aa9,
  "UpdateBotPrecheckoutQueryS",
  () => [
    "flags",
    IntRW,
    "query_id",
    LongRW,
    "user_id",
    IntRW,
    "payload",
    BytesRW,
    "info",
    Optional(TypeRW(PaymentRequestedInfoT), 0, 0),
    "shipping_option_id",
    Optional(StringRW, 0, 1),
    "currency",
    StringRW,
    "total_amount",
    LongRW
  ]
);

/**
 * updatePhoneCall:Update
 * #ab0f6b1e:2869914398:-1425052898
 * phone_call:PhoneCall
 */
export interface UpdatePhoneCallS {
  _id: number;
  _values: [PhoneCallT];

  get_phone_call(): PhoneCallT;
  set_phone_call(val: PhoneCallT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatePhoneCallS = r<new () => UpdatePhoneCallS>(
  0xab0f6b1e,
  "UpdatePhoneCallS",
  () => ["phone_call", TypeRW(PhoneCallT)]
);

/**
 * updateLangPack:Update
 * #56022f4d:1442983757:1442983757
 * difference:LangPackDifference
 */
export interface UpdateLangPackS {
  _id: number;
  _values: [LangPackDifferenceT];

  get_difference(): LangPackDifferenceT;
  set_difference(val: LangPackDifferenceT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateLangPackS = r<new () => UpdateLangPackS>(
  0x56022f4d,
  "UpdateLangPackS",
  () => ["difference", TypeRW(LangPackDifferenceT)]
);

/**
 * channelAdminLogEventActionParticipantInvite:ChannelAdminLogEventAction
 * #e31c34d8:3810276568:-484690728
 * participant:ChannelParticipant
 */
export interface ChannelAdminLogEventActionParticipantInviteS {
  _id: number;
  _values: [ChannelParticipantT];

  get_participant(): ChannelParticipantT;
  set_participant(val: ChannelParticipantT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionParticipantInviteS = r<
  new () => ChannelAdminLogEventActionParticipantInviteS
>(0xe31c34d8, "ChannelAdminLogEventActionParticipantInviteS", () => [
  "participant",
  TypeRW(ChannelParticipantT)
]);

/**
 * channelAdminLogEventActionParticipantToggleBan:ChannelAdminLogEventAction
 * #e6d83d7e:3872931198:-422036098
 * prev_participant:ChannelParticipant
 * new_participant:ChannelParticipant
 */
export interface ChannelAdminLogEventActionParticipantToggleBanS {
  _id: number;
  _values: [ChannelParticipantT, ChannelParticipantT];

  get_prev_participant(): ChannelParticipantT;
  set_prev_participant(val: ChannelParticipantT): this;

  get_new_participant(): ChannelParticipantT;
  set_new_participant(val: ChannelParticipantT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionParticipantToggleBanS = r<
  new () => ChannelAdminLogEventActionParticipantToggleBanS
>(0xe6d83d7e, "ChannelAdminLogEventActionParticipantToggleBanS", () => [
  "prev_participant",
  TypeRW(ChannelParticipantT),
  "new_participant",
  TypeRW(ChannelParticipantT)
]);

/**
 * channelAdminLogEventActionParticipantToggleAdmin:ChannelAdminLogEventAction
 * #d5676710:3580323600:-714643696
 * prev_participant:ChannelParticipant
 * new_participant:ChannelParticipant
 */
export interface ChannelAdminLogEventActionParticipantToggleAdminS {
  _id: number;
  _values: [ChannelParticipantT, ChannelParticipantT];

  get_prev_participant(): ChannelParticipantT;
  set_prev_participant(val: ChannelParticipantT): this;

  get_new_participant(): ChannelParticipantT;
  set_new_participant(val: ChannelParticipantT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionParticipantToggleAdminS = r<
  new () => ChannelAdminLogEventActionParticipantToggleAdminS
>(0xd5676710, "ChannelAdminLogEventActionParticipantToggleAdminS", () => [
  "prev_participant",
  TypeRW(ChannelParticipantT),
  "new_participant",
  TypeRW(ChannelParticipantT)
]);

/**
 * webDocumentNoProxy:WebDocument
 * #f9c8bcc6:4190682310:-104284986
 * url:string
 * size:int
 * mime_type:string
 * attributes:Vector<DocumentAttribute>
 */
export interface WebDocumentNoProxyS {
  _id: number;
  _values: [string, number, string, VectorS<DocumentAttributeT>];

  get_url(): string;
  set_url(val: string): this;

  get_size(): number;
  set_size(val: number): this;

  get_mime_type(): string;
  set_mime_type(val: string): this;

  get_attributes(): VectorS<DocumentAttributeT>;
  set_attributes(val: VectorS<DocumentAttributeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebDocumentNoProxyS = r<new () => WebDocumentNoProxyS>(
  0xf9c8bcc6,
  "WebDocumentNoProxyS",
  () => [
    "url",
    StringRW,
    "size",
    IntRW,
    "mime_type",
    StringRW,
    "attributes",
    VectorRW(TypeRW(DocumentAttributeT))
  ]
);

/**
 * messageActionSecureValuesSentMe:MessageAction
 * #1b287353:455635795:455635795
 * values:Vector<SecureValue>
 * credentials:SecureCredentialsEncrypted
 */
export interface MessageActionSecureValuesSentMeS {
  _id: number;
  _values: [VectorS<SecureValueT>, SecureCredentialsEncryptedT];

  get_values(): VectorS<SecureValueT>;
  set_values(val: VectorS<SecureValueT>): this;

  get_credentials(): SecureCredentialsEncryptedT;
  set_credentials(val: SecureCredentialsEncryptedT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionSecureValuesSentMeS = r<
  new () => MessageActionSecureValuesSentMeS
>(0x1b287353, "MessageActionSecureValuesSentMeS", () => [
  "values",
  VectorRW(TypeRW(SecureValueT)),
  "credentials",
  TypeRW(SecureCredentialsEncryptedT)
]);

/**
 * updateDialogUnreadMark:Update
 * #e16459c3:3781450179:-513517117
 * flags:#
 * unread:flags.0?true
 * peer:DialogPeer
 */
export interface UpdateDialogUnreadMarkS {
  _id: number;
  _values: [number, true, DialogPeerT];

  get_flags(): number;
  set_flags(val: number): this;

  get_unread(): true;
  set_unread(val: true): this;

  has_unread(): boolean;

  get_peer(): DialogPeerT;
  set_peer(val: DialogPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDialogUnreadMarkS = r<new () => UpdateDialogUnreadMarkS>(
  0xe16459c3,
  "UpdateDialogUnreadMarkS",
  () => [
    "flags",
    IntRW,
    "unread",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(DialogPeerT)
  ]
);

/**
 * updateMessagePoll:Update
 * #aca1657b:2896258427:-1398708869
 * flags:#
 * poll_id:long
 * poll:flags.0?Poll
 * results:PollResults
 */
export interface UpdateMessagePollS {
  _id: number;
  _values: [number, ProtoLong, PollT, PollResultsT];

  get_flags(): number;
  set_flags(val: number): this;

  get_poll_id(): ProtoLong;
  set_poll_id(val: ProtoLong): this;

  get_poll(): PollT;
  set_poll(val: PollT): this;

  has_poll(): boolean;

  get_results(): PollResultsT;
  set_results(val: PollResultsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateMessagePollS = r<new () => UpdateMessagePollS>(
  0xaca1657b,
  "UpdateMessagePollS",
  () => [
    "flags",
    IntRW,
    "poll_id",
    LongRW,
    "poll",
    Optional(TypeRW(PollT), 0, 0),
    "results",
    TypeRW(PollResultsT)
  ]
);

/**
 * inputMediaPoll:InputMedia
 * #6b3765b:112424539:112424539
 * poll:Poll
 */
export interface InputMediaPollS {
  _id: number;
  _values: [PollT];

  get_poll(): PollT;
  set_poll(val: PollT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaPollS = r<new () => InputMediaPollS>(
  0x6b3765b,
  "InputMediaPollS",
  () => ["poll", TypeRW(PollT)]
);

/**
 * messageMediaPoll:MessageMedia
 * #4bd6e798:1272375192:1272375192
 * poll:Poll
 * results:PollResults
 */
export interface MessageMediaPollS {
  _id: number;
  _values: [PollT, PollResultsT];

  get_poll(): PollT;
  set_poll(val: PollT): this;

  get_results(): PollResultsT;
  set_results(val: PollResultsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaPollS = r<new () => MessageMediaPollS>(
  0x4bd6e798,
  "MessageMediaPollS",
  () => ["poll", TypeRW(PollT), "results", TypeRW(PollResultsT)]
);

/**
 * folder:Folder
 * #ff544e65:4283715173:-11252123
 * flags:#
 * autofill_new_broadcasts:flags.0?true
 * autofill_public_groups:flags.1?true
 * autofill_new_correspondents:flags.2?true
 * id:int
 * title:string
 * photo:flags.3?ChatPhoto
 */
export interface FolderS {
  _id: number;
  _values: [number, true, true, true, number, string, ChatPhotoT];

  get_flags(): number;
  set_flags(val: number): this;

  get_autofill_new_broadcasts(): true;
  set_autofill_new_broadcasts(val: true): this;

  has_autofill_new_broadcasts(): boolean;

  get_autofill_public_groups(): true;
  set_autofill_public_groups(val: true): this;

  has_autofill_public_groups(): boolean;

  get_autofill_new_correspondents(): true;
  set_autofill_new_correspondents(val: true): this;

  has_autofill_new_correspondents(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_title(): string;
  set_title(val: string): this;

  get_photo(): ChatPhotoT;
  set_photo(val: ChatPhotoT): this;

  has_photo(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FolderS = r<new () => FolderS>(0xff544e65, "FolderS", () => [
  "flags",
  IntRW,
  "autofill_new_broadcasts",
  Optional(TrueRW, 0, 0),
  "autofill_public_groups",
  Optional(TrueRW, 0, 1),
  "autofill_new_correspondents",
  Optional(TrueRW, 0, 2),
  "id",
  IntRW,
  "title",
  StringRW,
  "photo",
  Optional(TypeRW(ChatPhotoT), 0, 3)
]);

/**
 * updateFolderPeers:Update
 * #19360dc0:422972864:422972864
 * folder_peers:Vector<FolderPeer>
 * pts:int
 * pts_count:int
 */
export interface UpdateFolderPeersS {
  _id: number;
  _values: [VectorS<FolderPeerT>, number, number];

  get_folder_peers(): VectorS<FolderPeerT>;
  set_folder_peers(val: VectorS<FolderPeerT>): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateFolderPeersS = r<new () => UpdateFolderPeersS>(
  0x19360dc0,
  "UpdateFolderPeersS",
  () => [
    "folder_peers",
    VectorRW(TypeRW(FolderPeerT)),
    "pts",
    IntRW,
    "pts_count",
    IntRW
  ]
);

/**
 * updatePeerLocated:Update
 * #b4afcfb0:3031420848:-1263546448
 * peers:Vector<PeerLocated>
 */
export interface UpdatePeerLocatedS {
  _id: number;
  _values: [VectorS<PeerLocatedT>];

  get_peers(): VectorS<PeerLocatedT>;
  set_peers(val: VectorS<PeerLocatedT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatePeerLocatedS = r<new () => UpdatePeerLocatedS>(
  0xb4afcfb0,
  "UpdatePeerLocatedS",
  () => ["peers", VectorRW(TypeRW(PeerLocatedT))]
);

/**
 * channelAdminLogEventActionChangeLocation:ChannelAdminLogEventAction
 * #e6b76ae:241923758:241923758
 * prev_value:ChannelLocation
 * new_value:ChannelLocation
 */
export interface ChannelAdminLogEventActionChangeLocationS {
  _id: number;
  _values: [ChannelLocationT, ChannelLocationT];

  get_prev_value(): ChannelLocationT;
  set_prev_value(val: ChannelLocationT): this;

  get_new_value(): ChannelLocationT;
  set_new_value(val: ChannelLocationT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangeLocationS = r<
  new () => ChannelAdminLogEventActionChangeLocationS
>(0xe6b76ae, "ChannelAdminLogEventActionChangeLocationS", () => [
  "prev_value",
  TypeRW(ChannelLocationT),
  "new_value",
  TypeRW(ChannelLocationT)
]);

export type UserT = UserEmptyS | UserS;
export const UserT = OneOf;

export type PhotoT = PhotoEmptyS | PhotoS;
export const PhotoT = OneOf;

export type DocumentT = DocumentEmptyS | DocumentS;
export const DocumentT = OneOf;

export const StickerSetT = StickerSetS;
export type StickerSetT = StickerSetS;

export const TopPeerCategoryPeersT = TopPeerCategoryPeersS;
export type TopPeerCategoryPeersT = TopPeerCategoryPeersS;

export type WebDocumentT = WebDocumentS | WebDocumentNoProxyS;
export const WebDocumentT = OneOf;

export const InputWebDocumentT = InputWebDocumentS;
export type InputWebDocumentT = InputWebDocumentS;

export const FolderT = FolderS;
export type FolderT = FolderS;

/**
 * account.updatePasswordSettings:account.updatePasswordSettings Bool
 * #a59b102f:2778402863:-1516564433
 * password:InputCheckPasswordSRP
 * new_settings:account.PasswordInputSettings
 */
export interface AccountUpdatePasswordSettingsM {
  _id: number;
  _method(): void;
  _values: [InputCheckPasswordSrpT, AccountPasswordInputSettingsS];

  get_password(): InputCheckPasswordSrpT;
  set_password(val: InputCheckPasswordSrpT): this;

  get_new_settings(): AccountPasswordInputSettingsS;
  set_new_settings(val: AccountPasswordInputSettingsS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdatePasswordSettingsM = r<
  new () => AccountUpdatePasswordSettingsM
>(0xa59b102f, "AccountUpdatePasswordSettingsM", () => [
  "password",
  TypeRW(InputCheckPasswordSrpT),
  "new_settings",
  TypeRW(AccountPasswordInputSettingsS)
]);

/**
 * account.updateProfile:User
 * #78515775:2018596725:2018596725
 * flags:#
 * first_name:flags.0?string
 * last_name:flags.1?string
 * about:flags.2?string
 */
export let CallAccountUpdateProfileM = c;
export type CallAccountUpdateProfileM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdateProfileM
) => Promise<(UserT | RpcErrorS) & { dc: number }>;

/**
 * account.updateUsername:User
 * #3e0bdd7c:1040964988:1040964988
 * username:string
 */
export let CallAccountUpdateUsernameM = c;
export type CallAccountUpdateUsernameM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdateUsernameM
) => Promise<(UserT | RpcErrorS) & { dc: number }>;

/**
 * account.changePhone:User
 * #70c32edb:1891839707:1891839707
 * phone_number:string
 * phone_code_hash:string
 * phone_code:string
 */
export let CallAccountChangePhoneM = c;
export type CallAccountChangePhoneM = (
  invoker: ApiInvoker | Connection,
  req: AccountChangePhoneM
) => Promise<(UserT | RpcErrorS) & { dc: number }>;

/**
 * account.getPasswordSettings:account.PasswordSettings
 * #9cd4eaf9:2631199481:-1663767815
 * password:InputCheckPasswordSRP
 */
export let CallAccountGetPasswordSettingsM = c;
export type CallAccountGetPasswordSettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetPasswordSettingsM
) => Promise<(AccountPasswordSettingsS | RpcErrorS) & { dc: number }>;

/**
 * account.updatePasswordSettings:Bool
 * #a59b102f:2778402863:-1516564433
 * password:InputCheckPasswordSRP
 * new_settings:account.PasswordInputSettings
 */
export let CallAccountUpdatePasswordSettingsM = c;
export type CallAccountUpdatePasswordSettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdatePasswordSettingsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getDocumentByHash:Document
 * #338e2464:864953444:864953444
 * sha256:bytes
 * size:int
 * mime_type:string
 */
export let CallMessagesGetDocumentByHashM = c;
export type CallMessagesGetDocumentByHashM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetDocumentByHashM
) => Promise<(DocumentT | RpcErrorS) & { dc: number }>;

/**
 * payments.validateRequestedInfo:payments.ValidatedRequestedInfo
 * #770a8e74:1997180532:1997180532
 * flags:#
 * save:flags.0?true
 * msg_id:int
 * info:PaymentRequestedInfo
 */
export let CallPaymentsValidateRequestedInfoM = c;
export type CallPaymentsValidateRequestedInfoM = (
  invoker: ApiInvoker | Connection,
  req: PaymentsValidateRequestedInfoM
) => Promise<(PaymentsValidatedRequestedInfoS | RpcErrorS) & { dc: number }>;

/**
 * payments.getSavedInfo:payments.SavedInfo
 * #227d824b:578650699:578650699
 *
 */
export let CallPaymentsGetSavedInfoM = c;
export type CallPaymentsGetSavedInfoM = (
  invoker: ApiInvoker | Connection,
  req: PaymentsGetSavedInfoM
) => Promise<(PaymentsSavedInfoS | RpcErrorS) & { dc: number }>;

/**
 * account.uploadTheme:Document
 * #1c3db333:473805619:473805619
 * flags:#
 * file:InputFile
 * thumb:flags.0?InputFile
 * file_name:string
 * mime_type:string
 */
export let CallAccountUploadThemeM = c;
export type CallAccountUploadThemeM = (
  invoker: ApiInvoker | Connection,
  req: AccountUploadThemeM
) => Promise<(DocumentT | RpcErrorS) & { dc: number }>;

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
export interface ChatFullS {
  _id: number;
  _values: [
    number,
    true,
    true,
    number,
    string,
    ChatParticipantsT,
    PhotoT,
    PeerNotifySettingsT,
    ExportedChatInviteT,
    VectorS<BotInfoT>,
    number,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_can_set_username(): true;
  set_can_set_username(val: true): this;

  has_can_set_username(): boolean;

  get_has_scheduled(): true;
  set_has_scheduled(val: true): this;

  has_has_scheduled(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_about(): string;
  set_about(val: string): this;

  get_participants(): ChatParticipantsT;
  set_participants(val: ChatParticipantsT): this;

  get_chat_photo(): PhotoT;
  set_chat_photo(val: PhotoT): this;

  has_chat_photo(): boolean;

  get_notify_settings(): PeerNotifySettingsT;
  set_notify_settings(val: PeerNotifySettingsT): this;

  get_exported_invite(): ExportedChatInviteT;
  set_exported_invite(val: ExportedChatInviteT): this;

  get_bot_info(): VectorS<BotInfoT>;
  set_bot_info(val: VectorS<BotInfoT>): this;

  has_bot_info(): boolean;

  get_pinned_msg_id(): number;
  set_pinned_msg_id(val: number): this;

  has_pinned_msg_id(): boolean;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatFullS = r<new () => ChatFullS>(0x1b7c9db3, "ChatFullS", () => [
  "flags",
  IntRW,
  "can_set_username",
  Optional(TrueRW, 0, 7),
  "has_scheduled",
  Optional(TrueRW, 0, 8),
  "id",
  IntRW,
  "about",
  StringRW,
  "participants",
  TypeRW(ChatParticipantsT),
  "chat_photo",
  Optional(TypeRW(PhotoT), 0, 2),
  "notify_settings",
  TypeRW(PeerNotifySettingsT),
  "exported_invite",
  TypeRW(ExportedChatInviteT),
  "bot_info",
  Optional(VectorRW(TypeRW(BotInfoT)), 0, 3),
  "pinned_msg_id",
  Optional(IntRW, 0, 6),
  "folder_id",
  Optional(IntRW, 0, 11)
]);

/**
 * messageMediaPhoto:MessageMedia
 * #695150d7:1766936791:1766936791
 * flags:#
 * photo:flags.0?Photo
 * ttl_seconds:flags.2?int
 */
export interface MessageMediaPhotoS {
  _id: number;
  _values: [number, PhotoT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  has_photo(): boolean;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaPhotoS = r<new () => MessageMediaPhotoS>(
  0x695150d7,
  "MessageMediaPhotoS",
  () => [
    "flags",
    IntRW,
    "photo",
    Optional(TypeRW(PhotoT), 0, 0),
    "ttl_seconds",
    Optional(IntRW, 0, 2)
  ]
);

/**
 * messageActionChatEditPhoto:MessageAction
 * #7fcb13a8:2144015272:2144015272
 * photo:Photo
 */
export interface MessageActionChatEditPhotoS {
  _id: number;
  _values: [PhotoT];

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageActionChatEditPhotoS = r<
  new () => MessageActionChatEditPhotoS
>(0x7fcb13a8, "MessageActionChatEditPhotoS", () => ["photo", TypeRW(PhotoT)]);

/**
 * auth.authorization:auth.Authorization
 * #cd050916:3439659286:-855308010
 * flags:#
 * tmp_sessions:flags.0?int
 * user:User
 */
export interface AuthAuthorizationS {
  _id: number;
  _values: [number, number, UserT];

  get_flags(): number;
  set_flags(val: number): this;

  get_tmp_sessions(): number;
  set_tmp_sessions(val: number): this;

  has_tmp_sessions(): boolean;

  get_user(): UserT;
  set_user(val: UserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthAuthorizationS = r<new () => AuthAuthorizationS>(
  0xcd050916,
  "AuthAuthorizationS",
  () => [
    "flags",
    IntRW,
    "tmp_sessions",
    Optional(IntRW, 0, 0),
    "user",
    TypeRW(UserT)
  ]
);

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
export interface WallPaperS {
  _id: number;
  _values: [
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

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_flags(): number;
  set_flags(val: number): this;

  get_creator(): true;
  set_creator(val: true): this;

  has_creator(): boolean;

  get_default(): true;
  set_default(val: true): this;

  has_default(): boolean;

  get_pattern(): true;
  set_pattern(val: true): this;

  has_pattern(): boolean;

  get_dark(): true;
  set_dark(val: true): this;

  has_dark(): boolean;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_slug(): string;
  set_slug(val: string): this;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  get_settings(): WallPaperSettingsT;
  set_settings(val: WallPaperSettingsT): this;

  has_settings(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WallPaperS = r<new () => WallPaperS>(
  0xa437c3ed,
  "WallPaperS",
  () => [
    "id",
    LongRW,
    "flags",
    IntRW,
    "creator",
    Optional(TrueRW, 1, 0),
    "default",
    Optional(TrueRW, 1, 1),
    "pattern",
    Optional(TrueRW, 1, 3),
    "dark",
    Optional(TrueRW, 1, 4),
    "access_hash",
    LongRW,
    "slug",
    StringRW,
    "document",
    TypeRW(DocumentT),
    "settings",
    Optional(TypeRW(WallPaperSettingsT), 1, 2)
  ]
);

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
export interface UserFullS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_blocked(): true;
  set_blocked(val: true): this;

  has_blocked(): boolean;

  get_phone_calls_available(): true;
  set_phone_calls_available(val: true): this;

  has_phone_calls_available(): boolean;

  get_phone_calls_private(): true;
  set_phone_calls_private(val: true): this;

  has_phone_calls_private(): boolean;

  get_can_pin_message(): true;
  set_can_pin_message(val: true): this;

  has_can_pin_message(): boolean;

  get_has_scheduled(): true;
  set_has_scheduled(val: true): this;

  has_has_scheduled(): boolean;

  get_user(): UserT;
  set_user(val: UserT): this;

  get_about(): string;
  set_about(val: string): this;

  has_about(): boolean;

  get_settings(): PeerSettingsT;
  set_settings(val: PeerSettingsT): this;

  get_profile_photo(): PhotoT;
  set_profile_photo(val: PhotoT): this;

  has_profile_photo(): boolean;

  get_notify_settings(): PeerNotifySettingsT;
  set_notify_settings(val: PeerNotifySettingsT): this;

  get_bot_info(): BotInfoT;
  set_bot_info(val: BotInfoT): this;

  has_bot_info(): boolean;

  get_pinned_msg_id(): number;
  set_pinned_msg_id(val: number): this;

  has_pinned_msg_id(): boolean;

  get_common_chats_count(): number;
  set_common_chats_count(val: number): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UserFullS = r<new () => UserFullS>(0xedf17c12, "UserFullS", () => [
  "flags",
  IntRW,
  "blocked",
  Optional(TrueRW, 0, 0),
  "phone_calls_available",
  Optional(TrueRW, 0, 4),
  "phone_calls_private",
  Optional(TrueRW, 0, 5),
  "can_pin_message",
  Optional(TrueRW, 0, 7),
  "has_scheduled",
  Optional(TrueRW, 0, 12),
  "user",
  TypeRW(UserT),
  "about",
  Optional(StringRW, 0, 1),
  "settings",
  TypeRW(PeerSettingsT),
  "profile_photo",
  Optional(TypeRW(PhotoT), 0, 2),
  "notify_settings",
  TypeRW(PeerNotifySettingsT),
  "bot_info",
  Optional(TypeRW(BotInfoT), 0, 3),
  "pinned_msg_id",
  Optional(IntRW, 0, 6),
  "common_chats_count",
  IntRW,
  "folder_id",
  Optional(IntRW, 0, 11)
]);

/**
 * contacts.contacts:contacts.Contacts
 * #eae87e42:3941105218:-353862078
 * contacts:Vector<Contact>
 * saved_count:int
 * users:Vector<User>
 */
export interface ContactsContactsS {
  _id: number;
  _values: [VectorS<ContactT>, number, VectorS<UserT>];

  get_contacts(): VectorS<ContactT>;
  set_contacts(val: VectorS<ContactT>): this;

  get_saved_count(): number;
  set_saved_count(val: number): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsContactsS = r<new () => ContactsContactsS>(
  0xeae87e42,
  "ContactsContactsS",
  () => [
    "contacts",
    VectorRW(TypeRW(ContactT)),
    "saved_count",
    IntRW,
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * contacts.importedContacts:contacts.ImportedContacts
 * #77d01c3b:2010127419:2010127419
 * imported:Vector<ImportedContact>
 * popular_invites:Vector<PopularContact>
 * retry_contacts:Vector<long>
 * users:Vector<User>
 */
export interface ContactsImportedContactsS {
  _id: number;
  _values: [
    VectorS<ImportedContactT>,
    VectorS<PopularContactT>,
    VectorS<ProtoLong>,
    VectorS<UserT>
  ];

  get_imported(): VectorS<ImportedContactT>;
  set_imported(val: VectorS<ImportedContactT>): this;

  get_popular_invites(): VectorS<PopularContactT>;
  set_popular_invites(val: VectorS<PopularContactT>): this;

  get_retry_contacts(): VectorS<ProtoLong>;
  set_retry_contacts(val: VectorS<ProtoLong>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsImportedContactsS = r<new () => ContactsImportedContactsS>(
  0x77d01c3b,
  "ContactsImportedContactsS",
  () => [
    "imported",
    VectorRW(TypeRW(ImportedContactT)),
    "popular_invites",
    VectorRW(TypeRW(PopularContactT)),
    "retry_contacts",
    VectorRW(LongRW),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * contacts.blocked:contacts.Blocked
 * #1c138d15:471043349:471043349
 * blocked:Vector<ContactBlocked>
 * users:Vector<User>
 */
export interface ContactsBlockedS {
  _id: number;
  _values: [VectorS<ContactBlockedT>, VectorS<UserT>];

  get_blocked(): VectorS<ContactBlockedT>;
  set_blocked(val: VectorS<ContactBlockedT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsBlockedS = r<new () => ContactsBlockedS>(
  0x1c138d15,
  "ContactsBlockedS",
  () => [
    "blocked",
    VectorRW(TypeRW(ContactBlockedT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * contacts.blockedSlice:contacts.Blocked
 * #900802a1:2416444065:-1878523231
 * count:int
 * blocked:Vector<ContactBlocked>
 * users:Vector<User>
 */
export interface ContactsBlockedSliceS {
  _id: number;
  _values: [number, VectorS<ContactBlockedT>, VectorS<UserT>];

  get_count(): number;
  set_count(val: number): this;

  get_blocked(): VectorS<ContactBlockedT>;
  set_blocked(val: VectorS<ContactBlockedT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsBlockedSliceS = r<new () => ContactsBlockedSliceS>(
  0x900802a1,
  "ContactsBlockedSliceS",
  () => [
    "count",
    IntRW,
    "blocked",
    VectorRW(TypeRW(ContactBlockedT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * photos.photos:photos.Photos
 * #8dca6aa5:2378853029:-1916114267
 * photos:Vector<Photo>
 * users:Vector<User>
 */
export interface PhotosPhotosS {
  _id: number;
  _values: [VectorS<PhotoT>, VectorS<UserT>];

  get_photos(): VectorS<PhotoT>;
  set_photos(val: VectorS<PhotoT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosPhotosS = r<new () => PhotosPhotosS>(
  0x8dca6aa5,
  "PhotosPhotosS",
  () => ["photos", VectorRW(TypeRW(PhotoT)), "users", VectorRW(TypeRW(UserT))]
);

/**
 * photos.photosSlice:photos.Photos
 * #15051f54:352657236:352657236
 * count:int
 * photos:Vector<Photo>
 * users:Vector<User>
 */
export interface PhotosPhotosSliceS {
  _id: number;
  _values: [number, VectorS<PhotoT>, VectorS<UserT>];

  get_count(): number;
  set_count(val: number): this;

  get_photos(): VectorS<PhotoT>;
  set_photos(val: VectorS<PhotoT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosPhotosSliceS = r<new () => PhotosPhotosSliceS>(
  0x15051f54,
  "PhotosPhotosSliceS",
  () => [
    "count",
    IntRW,
    "photos",
    VectorRW(TypeRW(PhotoT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * photos.photo:photos.Photo
 * #20212ca8:539045032:539045032
 * photo:Photo
 * users:Vector<User>
 */
export interface PhotosPhotoS {
  _id: number;
  _values: [PhotoT, VectorS<UserT>];

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosPhotoS = r<new () => PhotosPhotoS>(
  0x20212ca8,
  "PhotosPhotoS",
  () => ["photo", TypeRW(PhotoT), "users", VectorRW(TypeRW(UserT))]
);

/**
 * messageMediaDocument:MessageMedia
 * #9cb070d7:2628808919:-1666158377
 * flags:#
 * document:flags.0?Document
 * ttl_seconds:flags.2?int
 */
export interface MessageMediaDocumentS {
  _id: number;
  _values: [number, DocumentT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  has_document(): boolean;

  get_ttl_seconds(): number;
  set_ttl_seconds(val: number): this;

  has_ttl_seconds(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaDocumentS = r<new () => MessageMediaDocumentS>(
  0x9cb070d7,
  "MessageMediaDocumentS",
  () => [
    "flags",
    IntRW,
    "document",
    Optional(TypeRW(DocumentT), 0, 0),
    "ttl_seconds",
    Optional(IntRW, 0, 2)
  ]
);

/**
 * help.support:help.Support
 * #17c6b5f6:398898678:398898678
 * phone_number:string
 * user:User
 */
export interface HelpSupportS {
  _id: number;
  _values: [string, UserT];

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_user(): UserT;
  set_user(val: UserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpSupportS = r<new () => HelpSupportS>(
  0x17c6b5f6,
  "HelpSupportS",
  () => ["phone_number", StringRW, "user", TypeRW(UserT)]
);

/**
 * messages.stickers:messages.Stickers
 * #e4599bbd:3831077821:-463889475
 * hash:int
 * stickers:Vector<Document>
 */
export interface MessagesStickersS {
  _id: number;
  _values: [number, VectorS<DocumentT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_stickers(): VectorS<DocumentT>;
  set_stickers(val: VectorS<DocumentT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesStickersS = r<new () => MessagesStickersS>(
  0xe4599bbd,
  "MessagesStickersS",
  () => ["hash", IntRW, "stickers", VectorRW(TypeRW(DocumentT))]
);

/**
 * messages.allStickers:messages.AllStickers
 * #edfd405f:3992797279:-302170017
 * hash:int
 * sets:Vector<StickerSet>
 */
export interface MessagesAllStickersS {
  _id: number;
  _values: [number, VectorS<StickerSetT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_sets(): VectorS<StickerSetT>;
  set_sets(val: VectorS<StickerSetT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAllStickersS = r<new () => MessagesAllStickersS>(
  0xedfd405f,
  "MessagesAllStickersS",
  () => ["hash", IntRW, "sets", VectorRW(TypeRW(StickerSetT))]
);

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
export interface ChatInviteS {
  _id: number;
  _values: [
    number,
    true,
    true,
    true,
    true,
    string,
    PhotoT,
    number,
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_channel(): true;
  set_channel(val: true): this;

  has_channel(): boolean;

  get_broadcast(): true;
  set_broadcast(val: true): this;

  has_broadcast(): boolean;

  get_public(): true;
  set_public(val: true): this;

  has_public(): boolean;

  get_megagroup(): true;
  set_megagroup(val: true): this;

  has_megagroup(): boolean;

  get_title(): string;
  set_title(val: string): this;

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  get_participants_count(): number;
  set_participants_count(val: number): this;

  get_participants(): VectorS<UserT>;
  set_participants(val: VectorS<UserT>): this;

  has_participants(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatInviteS = r<new () => ChatInviteS>(
  0xdfc2f58e,
  "ChatInviteS",
  () => [
    "flags",
    IntRW,
    "channel",
    Optional(TrueRW, 0, 0),
    "broadcast",
    Optional(TrueRW, 0, 1),
    "public",
    Optional(TrueRW, 0, 2),
    "megagroup",
    Optional(TrueRW, 0, 3),
    "title",
    StringRW,
    "photo",
    TypeRW(PhotoT),
    "participants_count",
    IntRW,
    "participants",
    Optional(VectorRW(TypeRW(UserT)), 0, 4)
  ]
);

/**
 * messages.stickerSet:messages.StickerSet
 * #b60a24a6:3054118054:-1240849242
 * set:StickerSet
 * packs:Vector<StickerPack>
 * documents:Vector<Document>
 */
export interface MessagesStickerSetS {
  _id: number;
  _values: [StickerSetT, VectorS<StickerPackT>, VectorS<DocumentT>];

  get_set(): StickerSetT;
  set_set(val: StickerSetT): this;

  get_packs(): VectorS<StickerPackT>;
  set_packs(val: VectorS<StickerPackT>): this;

  get_documents(): VectorS<DocumentT>;
  set_documents(val: VectorS<DocumentT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesStickerSetS = r<new () => MessagesStickerSetS>(
  0xb60a24a6,
  "MessagesStickerSetS",
  () => [
    "set",
    TypeRW(StickerSetT),
    "packs",
    VectorRW(TypeRW(StickerPackT)),
    "documents",
    VectorRW(TypeRW(DocumentT))
  ]
);

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
export interface ChannelFullS {
  _id: number;
  _values: [
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
    VectorS<BotInfoT>,
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

  get_flags(): number;
  set_flags(val: number): this;

  get_can_view_participants(): true;
  set_can_view_participants(val: true): this;

  has_can_view_participants(): boolean;

  get_can_set_username(): true;
  set_can_set_username(val: true): this;

  has_can_set_username(): boolean;

  get_can_set_stickers(): true;
  set_can_set_stickers(val: true): this;

  has_can_set_stickers(): boolean;

  get_hidden_prehistory(): true;
  set_hidden_prehistory(val: true): this;

  has_hidden_prehistory(): boolean;

  get_can_view_stats(): true;
  set_can_view_stats(val: true): this;

  has_can_view_stats(): boolean;

  get_can_set_location(): true;
  set_can_set_location(val: true): this;

  has_can_set_location(): boolean;

  get_has_scheduled(): true;
  set_has_scheduled(val: true): this;

  has_has_scheduled(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_about(): string;
  set_about(val: string): this;

  get_participants_count(): number;
  set_participants_count(val: number): this;

  has_participants_count(): boolean;

  get_admins_count(): number;
  set_admins_count(val: number): this;

  has_admins_count(): boolean;

  get_kicked_count(): number;
  set_kicked_count(val: number): this;

  has_kicked_count(): boolean;

  get_banned_count(): number;
  set_banned_count(val: number): this;

  has_banned_count(): boolean;

  get_online_count(): number;
  set_online_count(val: number): this;

  has_online_count(): boolean;

  get_read_inbox_max_id(): number;
  set_read_inbox_max_id(val: number): this;

  get_read_outbox_max_id(): number;
  set_read_outbox_max_id(val: number): this;

  get_unread_count(): number;
  set_unread_count(val: number): this;

  get_chat_photo(): PhotoT;
  set_chat_photo(val: PhotoT): this;

  get_notify_settings(): PeerNotifySettingsT;
  set_notify_settings(val: PeerNotifySettingsT): this;

  get_exported_invite(): ExportedChatInviteT;
  set_exported_invite(val: ExportedChatInviteT): this;

  get_bot_info(): VectorS<BotInfoT>;
  set_bot_info(val: VectorS<BotInfoT>): this;

  get_migrated_from_chat_id(): number;
  set_migrated_from_chat_id(val: number): this;

  has_migrated_from_chat_id(): boolean;

  get_migrated_from_max_id(): number;
  set_migrated_from_max_id(val: number): this;

  has_migrated_from_max_id(): boolean;

  get_pinned_msg_id(): number;
  set_pinned_msg_id(val: number): this;

  has_pinned_msg_id(): boolean;

  get_stickerset(): StickerSetT;
  set_stickerset(val: StickerSetT): this;

  has_stickerset(): boolean;

  get_available_min_id(): number;
  set_available_min_id(val: number): this;

  has_available_min_id(): boolean;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_linked_chat_id(): number;
  set_linked_chat_id(val: number): this;

  has_linked_chat_id(): boolean;

  get_location(): ChannelLocationT;
  set_location(val: ChannelLocationT): this;

  has_location(): boolean;

  get_slowmode_seconds(): number;
  set_slowmode_seconds(val: number): this;

  has_slowmode_seconds(): boolean;

  get_slowmode_next_send_date(): number;
  set_slowmode_next_send_date(val: number): this;

  has_slowmode_next_send_date(): boolean;

  get_pts(): number;
  set_pts(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelFullS = r<new () => ChannelFullS>(
  0x2d895c74,
  "ChannelFullS",
  () => [
    "flags",
    IntRW,
    "can_view_participants",
    Optional(TrueRW, 0, 3),
    "can_set_username",
    Optional(TrueRW, 0, 6),
    "can_set_stickers",
    Optional(TrueRW, 0, 7),
    "hidden_prehistory",
    Optional(TrueRW, 0, 10),
    "can_view_stats",
    Optional(TrueRW, 0, 12),
    "can_set_location",
    Optional(TrueRW, 0, 16),
    "has_scheduled",
    Optional(TrueRW, 0, 19),
    "id",
    IntRW,
    "about",
    StringRW,
    "participants_count",
    Optional(IntRW, 0, 0),
    "admins_count",
    Optional(IntRW, 0, 1),
    "kicked_count",
    Optional(IntRW, 0, 2),
    "banned_count",
    Optional(IntRW, 0, 2),
    "online_count",
    Optional(IntRW, 0, 13),
    "read_inbox_max_id",
    IntRW,
    "read_outbox_max_id",
    IntRW,
    "unread_count",
    IntRW,
    "chat_photo",
    TypeRW(PhotoT),
    "notify_settings",
    TypeRW(PeerNotifySettingsT),
    "exported_invite",
    TypeRW(ExportedChatInviteT),
    "bot_info",
    VectorRW(TypeRW(BotInfoT)),
    "migrated_from_chat_id",
    Optional(IntRW, 0, 4),
    "migrated_from_max_id",
    Optional(IntRW, 0, 4),
    "pinned_msg_id",
    Optional(IntRW, 0, 5),
    "stickerset",
    Optional(TypeRW(StickerSetT), 0, 8),
    "available_min_id",
    Optional(IntRW, 0, 9),
    "folder_id",
    Optional(IntRW, 0, 11),
    "linked_chat_id",
    Optional(IntRW, 0, 14),
    "location",
    Optional(TypeRW(ChannelLocationT), 0, 15),
    "slowmode_seconds",
    Optional(IntRW, 0, 17),
    "slowmode_next_send_date",
    Optional(IntRW, 0, 18),
    "pts",
    IntRW
  ]
);

/**
 * channels.channelParticipants:channels.ChannelParticipants
 * #f56ee2a8:4117684904:-177282392
 * count:int
 * participants:Vector<ChannelParticipant>
 * users:Vector<User>
 */
export interface ChannelsChannelParticipantsS {
  _id: number;
  _values: [number, VectorS<ChannelParticipantT>, VectorS<UserT>];

  get_count(): number;
  set_count(val: number): this;

  get_participants(): VectorS<ChannelParticipantT>;
  set_participants(val: VectorS<ChannelParticipantT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsChannelParticipantsS = r<
  new () => ChannelsChannelParticipantsS
>(0xf56ee2a8, "ChannelsChannelParticipantsS", () => [
  "count",
  IntRW,
  "participants",
  VectorRW(TypeRW(ChannelParticipantT)),
  "users",
  VectorRW(TypeRW(UserT))
]);

/**
 * channels.channelParticipant:channels.ChannelParticipant
 * #d0d9b163:3503927651:-791039645
 * participant:ChannelParticipant
 * users:Vector<User>
 */
export interface ChannelsChannelParticipantS {
  _id: number;
  _values: [ChannelParticipantT, VectorS<UserT>];

  get_participant(): ChannelParticipantT;
  set_participant(val: ChannelParticipantT): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsChannelParticipantS = r<
  new () => ChannelsChannelParticipantS
>(0xd0d9b163, "ChannelsChannelParticipantS", () => [
  "participant",
  TypeRW(ChannelParticipantT),
  "users",
  VectorRW(TypeRW(UserT))
]);

/**
 * foundGifCached:FoundGif
 * #9c750409:2624914441:-1670052855
 * url:string
 * photo:Photo
 * document:Document
 */
export interface FoundGifCachedS {
  _id: number;
  _values: [string, PhotoT, DocumentT];

  get_url(): string;
  set_url(val: string): this;

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FoundGifCachedS = r<new () => FoundGifCachedS>(
  0x9c750409,
  "FoundGifCachedS",
  () => [
    "url",
    StringRW,
    "photo",
    TypeRW(PhotoT),
    "document",
    TypeRW(DocumentT)
  ]
);

/**
 * messages.savedGifs:messages.SavedGifs
 * #2e0709a5:772213157:772213157
 * hash:int
 * gifs:Vector<Document>
 */
export interface MessagesSavedGifsS {
  _id: number;
  _values: [number, VectorS<DocumentT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_gifs(): VectorS<DocumentT>;
  set_gifs(val: VectorS<DocumentT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSavedGifsS = r<new () => MessagesSavedGifsS>(
  0x2e0709a5,
  "MessagesSavedGifsS",
  () => ["hash", IntRW, "gifs", VectorRW(TypeRW(DocumentT))]
);

/**
 * messages.recentStickers:messages.RecentStickers
 * #22f3afb3:586395571:586395571
 * hash:int
 * packs:Vector<StickerPack>
 * stickers:Vector<Document>
 * dates:Vector<int>
 */
export interface MessagesRecentStickersS {
  _id: number;
  _values: [number, VectorS<StickerPackT>, VectorS<DocumentT>, VectorS<number>];

  get_hash(): number;
  set_hash(val: number): this;

  get_packs(): VectorS<StickerPackT>;
  set_packs(val: VectorS<StickerPackT>): this;

  get_stickers(): VectorS<DocumentT>;
  set_stickers(val: VectorS<DocumentT>): this;

  get_dates(): VectorS<number>;
  set_dates(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesRecentStickersS = r<new () => MessagesRecentStickersS>(
  0x22f3afb3,
  "MessagesRecentStickersS",
  () => [
    "hash",
    IntRW,
    "packs",
    VectorRW(TypeRW(StickerPackT)),
    "stickers",
    VectorRW(TypeRW(DocumentT)),
    "dates",
    VectorRW(IntRW)
  ]
);

/**
 * stickerSetCovered:StickerSetCovered
 * #6410a5d2:1678812626:1678812626
 * set:StickerSet
 * cover:Document
 */
export interface StickerSetCoveredS {
  _id: number;
  _values: [StickerSetT, DocumentT];

  get_set(): StickerSetT;
  set_set(val: StickerSetT): this;

  get_cover(): DocumentT;
  set_cover(val: DocumentT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickerSetCoveredS = r<new () => StickerSetCoveredS>(
  0x6410a5d2,
  "StickerSetCoveredS",
  () => ["set", TypeRW(StickerSetT), "cover", TypeRW(DocumentT)]
);

/**
 * stickerSetMultiCovered:StickerSetCovered
 * #3407e51b:872932635:872932635
 * set:StickerSet
 * covers:Vector<Document>
 */
export interface StickerSetMultiCoveredS {
  _id: number;
  _values: [StickerSetT, VectorS<DocumentT>];

  get_set(): StickerSetT;
  set_set(val: StickerSetT): this;

  get_covers(): VectorS<DocumentT>;
  set_covers(val: VectorS<DocumentT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickerSetMultiCoveredS = r<new () => StickerSetMultiCoveredS>(
  0x3407e51b,
  "StickerSetMultiCoveredS",
  () => ["set", TypeRW(StickerSetT), "covers", VectorRW(TypeRW(DocumentT))]
);

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
export interface GameS {
  _id: number;
  _values: [
    number,
    ProtoLong,
    ProtoLong,
    string,
    string,
    string,
    PhotoT,
    DocumentT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_short_name(): string;
  set_short_name(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  get_description(): string;
  set_description(val: string): this;

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  has_document(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let GameS = r<new () => GameS>(0xbdf9653b, "GameS", () => [
  "flags",
  IntRW,
  "id",
  LongRW,
  "access_hash",
  LongRW,
  "short_name",
  StringRW,
  "title",
  StringRW,
  "description",
  StringRW,
  "photo",
  TypeRW(PhotoT),
  "document",
  Optional(TypeRW(DocumentT), 0, 0)
]);

/**
 * messages.highScores:messages.HighScores
 * #9a3bfd99:2587622809:-1707344487
 * scores:Vector<HighScore>
 * users:Vector<User>
 */
export interface MessagesHighScoresS {
  _id: number;
  _values: [VectorS<HighScoreT>, VectorS<UserT>];

  get_scores(): VectorS<HighScoreT>;
  set_scores(val: VectorS<HighScoreT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesHighScoresS = r<new () => MessagesHighScoresS>(
  0x9a3bfd99,
  "MessagesHighScoresS",
  () => [
    "scores",
    VectorRW(TypeRW(HighScoreT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

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
export interface InputMediaInvoiceS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_title(): string;
  set_title(val: string): this;

  get_description(): string;
  set_description(val: string): this;

  get_photo(): InputWebDocumentT;
  set_photo(val: InputWebDocumentT): this;

  has_photo(): boolean;

  get_invoice(): InvoiceT;
  set_invoice(val: InvoiceT): this;

  get_payload(): Uint8Array;
  set_payload(val: Uint8Array): this;

  get_provider(): string;
  set_provider(val: string): this;

  get_provider_data(): DataJsonT;
  set_provider_data(val: DataJsonT): this;

  get_start_param(): string;
  set_start_param(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaInvoiceS = r<new () => InputMediaInvoiceS>(
  0xf4e096c3,
  "InputMediaInvoiceS",
  () => [
    "flags",
    IntRW,
    "title",
    StringRW,
    "description",
    StringRW,
    "photo",
    Optional(TypeRW(InputWebDocumentT), 0, 0),
    "invoice",
    TypeRW(InvoiceT),
    "payload",
    BytesRW,
    "provider",
    StringRW,
    "provider_data",
    TypeRW(DataJsonT),
    "start_param",
    StringRW
  ]
);

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
export interface MessageMediaInvoiceS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_shipping_address_requested(): true;
  set_shipping_address_requested(val: true): this;

  has_shipping_address_requested(): boolean;

  get_test(): true;
  set_test(val: true): this;

  has_test(): boolean;

  get_title(): string;
  set_title(val: string): this;

  get_description(): string;
  set_description(val: string): this;

  get_photo(): WebDocumentT;
  set_photo(val: WebDocumentT): this;

  has_photo(): boolean;

  get_receipt_msg_id(): number;
  set_receipt_msg_id(val: number): this;

  has_receipt_msg_id(): boolean;

  get_currency(): string;
  set_currency(val: string): this;

  get_total_amount(): ProtoLong;
  set_total_amount(val: ProtoLong): this;

  get_start_param(): string;
  set_start_param(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaInvoiceS = r<new () => MessageMediaInvoiceS>(
  0x84551347,
  "MessageMediaInvoiceS",
  () => [
    "flags",
    IntRW,
    "shipping_address_requested",
    Optional(TrueRW, 0, 1),
    "test",
    Optional(TrueRW, 0, 3),
    "title",
    StringRW,
    "description",
    StringRW,
    "photo",
    Optional(TypeRW(WebDocumentT), 0, 0),
    "receipt_msg_id",
    Optional(IntRW, 0, 2),
    "currency",
    StringRW,
    "total_amount",
    LongRW,
    "start_param",
    StringRW
  ]
);

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
export interface PaymentsPaymentFormS {
  _id: number;
  _values: [
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
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_can_save_credentials(): true;
  set_can_save_credentials(val: true): this;

  has_can_save_credentials(): boolean;

  get_password_missing(): true;
  set_password_missing(val: true): this;

  has_password_missing(): boolean;

  get_bot_id(): number;
  set_bot_id(val: number): this;

  get_invoice(): InvoiceT;
  set_invoice(val: InvoiceT): this;

  get_provider_id(): number;
  set_provider_id(val: number): this;

  get_url(): string;
  set_url(val: string): this;

  get_native_provider(): string;
  set_native_provider(val: string): this;

  has_native_provider(): boolean;

  get_native_params(): DataJsonT;
  set_native_params(val: DataJsonT): this;

  has_native_params(): boolean;

  get_saved_info(): PaymentRequestedInfoT;
  set_saved_info(val: PaymentRequestedInfoT): this;

  has_saved_info(): boolean;

  get_saved_credentials(): PaymentSavedCredentialsT;
  set_saved_credentials(val: PaymentSavedCredentialsT): this;

  has_saved_credentials(): boolean;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsPaymentFormS = r<new () => PaymentsPaymentFormS>(
  0x3f56aea3,
  "PaymentsPaymentFormS",
  () => [
    "flags",
    IntRW,
    "can_save_credentials",
    Optional(TrueRW, 0, 2),
    "password_missing",
    Optional(TrueRW, 0, 3),
    "bot_id",
    IntRW,
    "invoice",
    TypeRW(InvoiceT),
    "provider_id",
    IntRW,
    "url",
    StringRW,
    "native_provider",
    Optional(StringRW, 0, 4),
    "native_params",
    Optional(TypeRW(DataJsonT), 0, 4),
    "saved_info",
    Optional(TypeRW(PaymentRequestedInfoT), 0, 0),
    "saved_credentials",
    Optional(TypeRW(PaymentSavedCredentialsT), 0, 1),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

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
export interface PaymentsPaymentReceiptS {
  _id: number;
  _values: [
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
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_bot_id(): number;
  set_bot_id(val: number): this;

  get_invoice(): InvoiceT;
  set_invoice(val: InvoiceT): this;

  get_provider_id(): number;
  set_provider_id(val: number): this;

  get_info(): PaymentRequestedInfoT;
  set_info(val: PaymentRequestedInfoT): this;

  has_info(): boolean;

  get_shipping(): ShippingOptionT;
  set_shipping(val: ShippingOptionT): this;

  has_shipping(): boolean;

  get_currency(): string;
  set_currency(val: string): this;

  get_total_amount(): ProtoLong;
  set_total_amount(val: ProtoLong): this;

  get_credentials_title(): string;
  set_credentials_title(val: string): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsPaymentReceiptS = r<new () => PaymentsPaymentReceiptS>(
  0x500911e1,
  "PaymentsPaymentReceiptS",
  () => [
    "flags",
    IntRW,
    "date",
    IntRW,
    "bot_id",
    IntRW,
    "invoice",
    TypeRW(InvoiceT),
    "provider_id",
    IntRW,
    "info",
    Optional(TypeRW(PaymentRequestedInfoT), 0, 0),
    "shipping",
    Optional(TypeRW(ShippingOptionT), 0, 1),
    "currency",
    StringRW,
    "total_amount",
    LongRW,
    "credentials_title",
    StringRW,
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * phone.phoneCall:phone.PhoneCall
 * #ec82e140:3968000320:-326966976
 * phone_call:PhoneCall
 * users:Vector<User>
 */
export interface PhonePhoneCallS {
  _id: number;
  _values: [PhoneCallT, VectorS<UserT>];

  get_phone_call(): PhoneCallT;
  set_phone_call(val: PhoneCallT): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhonePhoneCallS = r<new () => PhonePhoneCallS>(
  0xec82e140,
  "PhonePhoneCallS",
  () => ["phone_call", TypeRW(PhoneCallT), "users", VectorRW(TypeRW(UserT))]
);

/**
 * channelAdminLogEventActionChangePhoto:ChannelAdminLogEventAction
 * #434bd2af:1129042607:1129042607
 * prev_photo:Photo
 * new_photo:Photo
 */
export interface ChannelAdminLogEventActionChangePhotoS {
  _id: number;
  _values: [PhotoT, PhotoT];

  get_prev_photo(): PhotoT;
  set_prev_photo(val: PhotoT): this;

  get_new_photo(): PhotoT;
  set_new_photo(val: PhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionChangePhotoS = r<
  new () => ChannelAdminLogEventActionChangePhotoS
>(0x434bd2af, "ChannelAdminLogEventActionChangePhotoS", () => [
  "prev_photo",
  TypeRW(PhotoT),
  "new_photo",
  TypeRW(PhotoT)
]);

/**
 * messages.favedStickers:messages.FavedStickers
 * #f37f2f16:4085198614:-209768682
 * hash:int
 * packs:Vector<StickerPack>
 * stickers:Vector<Document>
 */
export interface MessagesFavedStickersS {
  _id: number;
  _values: [number, VectorS<StickerPackT>, VectorS<DocumentT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_packs(): VectorS<StickerPackT>;
  set_packs(val: VectorS<StickerPackT>): this;

  get_stickers(): VectorS<DocumentT>;
  set_stickers(val: VectorS<DocumentT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFavedStickersS = r<new () => MessagesFavedStickersS>(
  0xf37f2f16,
  "MessagesFavedStickersS",
  () => [
    "hash",
    IntRW,
    "packs",
    VectorRW(TypeRW(StickerPackT)),
    "stickers",
    VectorRW(TypeRW(DocumentT))
  ]
);

/**
 * account.webAuthorizations:account.WebAuthorizations
 * #ed56c9fc:3981887996:-313079300
 * authorizations:Vector<WebAuthorization>
 * users:Vector<User>
 */
export interface AccountWebAuthorizationsS {
  _id: number;
  _values: [VectorS<WebAuthorizationT>, VectorS<UserT>];

  get_authorizations(): VectorS<WebAuthorizationT>;
  set_authorizations(val: VectorS<WebAuthorizationT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountWebAuthorizationsS = r<new () => AccountWebAuthorizationsS>(
  0xed56c9fc,
  "AccountWebAuthorizationsS",
  () => [
    "authorizations",
    VectorRW(TypeRW(WebAuthorizationT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * dialogFolder:Dialog
 * #71bd134c:1908216652:1908216652
 * flags:#
 * pinned:flags.2?true
 * folder:Folder
 * peer:Peer
 * top_message:int
 * unread_muted_peers_count:int
 * unread_unmuted_peers_count:int
 * unread_muted_messages_count:int
 * unread_unmuted_messages_count:int
 */
export interface DialogFolderS {
  _id: number;
  _values: [
    number,
    true,
    FolderT,
    PeerT,
    number,
    number,
    number,
    number,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_pinned(): true;
  set_pinned(val: true): this;

  has_pinned(): boolean;

  get_folder(): FolderT;
  set_folder(val: FolderT): this;

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_top_message(): number;
  set_top_message(val: number): this;

  get_unread_muted_peers_count(): number;
  set_unread_muted_peers_count(val: number): this;

  get_unread_unmuted_peers_count(): number;
  set_unread_unmuted_peers_count(val: number): this;

  get_unread_muted_messages_count(): number;
  set_unread_muted_messages_count(val: number): this;

  get_unread_unmuted_messages_count(): number;
  set_unread_unmuted_messages_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DialogFolderS = r<new () => DialogFolderS>(
  0x71bd134c,
  "DialogFolderS",
  () => [
    "flags",
    IntRW,
    "pinned",
    Optional(TrueRW, 0, 2),
    "folder",
    TypeRW(FolderT),
    "peer",
    TypeRW(PeerT),
    "top_message",
    IntRW,
    "unread_muted_peers_count",
    IntRW,
    "unread_unmuted_peers_count",
    IntRW,
    "unread_muted_messages_count",
    IntRW,
    "unread_unmuted_messages_count",
    IntRW
  ]
);

/**
 * urlAuthResultRequest:UrlAuthResult
 * #92d33a0e:2463316494:-1831650802
 * flags:#
 * request_write_access:flags.0?true
 * bot:User
 * domain:string
 */
export interface UrlAuthResultRequestS {
  _id: number;
  _values: [number, true, UserT, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_request_write_access(): true;
  set_request_write_access(val: true): this;

  has_request_write_access(): boolean;

  get_bot(): UserT;
  set_bot(val: UserT): this;

  get_domain(): string;
  set_domain(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UrlAuthResultRequestS = r<new () => UrlAuthResultRequestS>(
  0x92d33a0e,
  "UrlAuthResultRequestS",
  () => [
    "flags",
    IntRW,
    "request_write_access",
    Optional(TrueRW, 0, 0),
    "bot",
    TypeRW(UserT),
    "domain",
    StringRW
  ]
);

/**
 * theme:Theme
 * #f7d90ce0:4158196960:-136770336
 * flags:#
 * creator:flags.0?true
 * default:flags.1?true
 * id:long
 * access_hash:long
 * slug:string
 * title:string
 * document:flags.2?Document
 * installs_count:int
 */
export interface ThemeS {
  _id: number;
  _values: [
    number,
    true,
    true,
    ProtoLong,
    ProtoLong,
    string,
    string,
    DocumentT,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_creator(): true;
  set_creator(val: true): this;

  has_creator(): boolean;

  get_default(): true;
  set_default(val: true): this;

  has_default(): boolean;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_access_hash(): ProtoLong;
  set_access_hash(val: ProtoLong): this;

  get_slug(): string;
  set_slug(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  has_document(): boolean;

  get_installs_count(): number;
  set_installs_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ThemeS = r<new () => ThemeS>(0xf7d90ce0, "ThemeS", () => [
  "flags",
  IntRW,
  "creator",
  Optional(TrueRW, 0, 0),
  "default",
  Optional(TrueRW, 0, 1),
  "id",
  LongRW,
  "access_hash",
  LongRW,
  "slug",
  StringRW,
  "title",
  StringRW,
  "document",
  Optional(TypeRW(DocumentT), 0, 2),
  "installs_count",
  IntRW
]);

export type ChatFullT = ChatFullS | ChannelFullS;
export const ChatFullT = OneOf;

export type MessageActionT =
  | MessageActionEmptyS
  | MessageActionChatCreateS
  | MessageActionChatEditTitleS
  | MessageActionChatEditPhotoS
  | MessageActionChatDeletePhotoS
  | MessageActionChatAddUserS
  | MessageActionChatDeleteUserS
  | MessageActionChatJoinedByLinkS
  | MessageActionChannelCreateS
  | MessageActionChatMigrateToS
  | MessageActionChannelMigrateFromS
  | MessageActionPinMessageS
  | MessageActionHistoryClearS
  | MessageActionGameScoreS
  | MessageActionPaymentSentMeS
  | MessageActionPaymentSentS
  | MessageActionPhoneCallS
  | MessageActionScreenshotTakenS
  | MessageActionCustomActionS
  | MessageActionBotAllowedS
  | MessageActionSecureValuesSentMeS
  | MessageActionSecureValuesSentS
  | MessageActionContactSignUpS;
export const MessageActionT = OneOf;

export const WallPaperT = WallPaperS;
export type WallPaperT = WallPaperS;

export type ContactsContactsT =
  | ContactsContactsNotModifiedS
  | ContactsContactsS;
export const ContactsContactsT = OneOf;

export type ContactsBlockedT = ContactsBlockedS | ContactsBlockedSliceS;
export const ContactsBlockedT = OneOf;

export type PhotosPhotosT = PhotosPhotosS | PhotosPhotosSliceS;
export const PhotosPhotosT = OneOf;

export type MessagesStickersT =
  | MessagesStickersNotModifiedS
  | MessagesStickersS;
export const MessagesStickersT = OneOf;

export type MessagesAllStickersT =
  | MessagesAllStickersNotModifiedS
  | MessagesAllStickersS;
export const MessagesAllStickersT = OneOf;

export const MessagesStickerSetT = MessagesStickerSetS;
export type MessagesStickerSetT = MessagesStickerSetS;

export type ChannelsChannelParticipantsT =
  | ChannelsChannelParticipantsS
  | ChannelsChannelParticipantsNotModifiedS;
export const ChannelsChannelParticipantsT = OneOf;

export type FoundGifT = FoundGifS | FoundGifCachedS;
export const FoundGifT = OneOf;

export type MessagesSavedGifsT =
  | MessagesSavedGifsNotModifiedS
  | MessagesSavedGifsS;
export const MessagesSavedGifsT = OneOf;

export type MessagesRecentStickersT =
  | MessagesRecentStickersNotModifiedS
  | MessagesRecentStickersS;
export const MessagesRecentStickersT = OneOf;

export type StickerSetCoveredT = StickerSetCoveredS | StickerSetMultiCoveredS;
export const StickerSetCoveredT = OneOf;

export const GameT = GameS;
export type GameT = GameS;

export type MessagesFavedStickersT =
  | MessagesFavedStickersNotModifiedS
  | MessagesFavedStickersS;
export const MessagesFavedStickersT = OneOf;

export type UrlAuthResultT =
  | UrlAuthResultRequestS
  | UrlAuthResultAcceptedS
  | UrlAuthResultDefaultS;
export const UrlAuthResultT = OneOf;

export type ThemeT = ThemeDocumentNotModifiedS | ThemeS;
export const ThemeT = OneOf;

/**
 * contacts.getContacts:contacts.Contacts
 * #c023849f:3223553183:-1071414113
 * hash:int
 */
export let CallContactsGetContactsM = c;
export type CallContactsGetContactsM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetContactsM
) => Promise<(ContactsContactsT | RpcErrorS) & { dc: number }>;

/**
 * contacts.importContacts:contacts.ImportedContacts
 * #2c800be5:746589157:746589157
 * contacts:Vector<InputContact>
 */
export let CallContactsImportContactsM = c;
export type CallContactsImportContactsM = (
  invoker: ApiInvoker | Connection,
  req: ContactsImportContactsM
) => Promise<(ContactsImportedContactsS | RpcErrorS) & { dc: number }>;

/**
 * contacts.getBlocked:contacts.Blocked
 * #f57c350f:4118557967:-176409329
 * offset:int
 * limit:int
 */
export let CallContactsGetBlockedM = c;
export type CallContactsGetBlockedM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetBlockedM
) => Promise<(ContactsBlockedT | RpcErrorS) & { dc: number }>;

/**
 * photos.uploadProfilePhoto:photos.Photo
 * #4f32c098:1328726168:1328726168
 * file:InputFile
 */
export let CallPhotosUploadProfilePhotoM = c;
export type CallPhotosUploadProfilePhotoM = (
  invoker: ApiInvoker | Connection,
  req: PhotosUploadProfilePhotoM
) => Promise<(PhotosPhotoS | RpcErrorS) & { dc: number }>;

/**
 * help.getSupport:help.Support
 * #9cdf08cd:2631862477:-1663104819
 *
 */
export let CallHelpGetSupportM = c;
export type CallHelpGetSupportM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetSupportM
) => Promise<(HelpSupportS | RpcErrorS) & { dc: number }>;

/**
 * messages.getStickers:messages.Stickers
 * #43d4f2c:71126828:71126828
 * emoticon:string
 * hash:int
 */
export let CallMessagesGetStickersM = c;
export type CallMessagesGetStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetStickersM
) => Promise<(MessagesStickersT | RpcErrorS) & { dc: number }>;

/**
 * messages.getAllStickers:messages.AllStickers
 * #1c9618b1:479598769:479598769
 * hash:int
 */
export let CallMessagesGetAllStickersM = c;
export type CallMessagesGetAllStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetAllStickersM
) => Promise<(MessagesAllStickersT | RpcErrorS) & { dc: number }>;

/**
 * messages.getStickerSet:messages.StickerSet
 * #2619a90e:639215886:639215886
 * stickerset:InputStickerSet
 */
export let CallMessagesGetStickerSetM = c;
export type CallMessagesGetStickerSetM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetStickerSetM
) => Promise<(MessagesStickerSetT | RpcErrorS) & { dc: number }>;

/**
 * messages.getSavedGifs:messages.SavedGifs
 * #83bf3d52:2210348370:-2084618926
 * hash:int
 */
export let CallMessagesGetSavedGifsM = c;
export type CallMessagesGetSavedGifsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetSavedGifsM
) => Promise<(MessagesSavedGifsT | RpcErrorS) & { dc: number }>;

/**
 * messages.getRecentStickers:messages.RecentStickers
 * #5ea192c9:1587647177:1587647177
 * flags:#
 * attached:flags.0?true
 * hash:int
 */
export let CallMessagesGetRecentStickersM = c;
export type CallMessagesGetRecentStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetRecentStickersM
) => Promise<(MessagesRecentStickersT | RpcErrorS) & { dc: number }>;

/**
 * messages.getMaskStickers:messages.AllStickers
 * #65b8c79f:1706608543:1706608543
 * hash:int
 */
export let CallMessagesGetMaskStickersM = c;
export type CallMessagesGetMaskStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetMaskStickersM
) => Promise<(MessagesAllStickersT | RpcErrorS) & { dc: number }>;

/**
 * messages.getAttachedStickers:Vector<StickerSetCovered>
 * #cc5b67cc:3428542412:-866424884
 * media:InputStickeredMedia
 */
export let CallMessagesGetAttachedStickersM = c;
export type CallMessagesGetAttachedStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetAttachedStickersM
) => Promise<(VectorS<StickerSetCoveredT> | RpcErrorS) & { dc: number }>;

/**
 * payments.getPaymentForm:payments.PaymentForm
 * #99f09745:2582681413:-1712285883
 * msg_id:int
 */
export let CallPaymentsGetPaymentFormM = c;
export type CallPaymentsGetPaymentFormM = (
  invoker: ApiInvoker | Connection,
  req: PaymentsGetPaymentFormM
) => Promise<(PaymentsPaymentFormS | RpcErrorS) & { dc: number }>;

/**
 * payments.getPaymentReceipt:payments.PaymentReceipt
 * #a092a980:2693966208:-1601001088
 * msg_id:int
 */
export let CallPaymentsGetPaymentReceiptM = c;
export type CallPaymentsGetPaymentReceiptM = (
  invoker: ApiInvoker | Connection,
  req: PaymentsGetPaymentReceiptM
) => Promise<(PaymentsPaymentReceiptS | RpcErrorS) & { dc: number }>;

/**
 * stickers.removeStickerFromSet:messages.StickerSet
 * #f7760f51:4151709521:-143257775
 * sticker:InputDocument
 */
export let CallStickersRemoveStickerFromSetM = c;
export type CallStickersRemoveStickerFromSetM = (
  invoker: ApiInvoker | Connection,
  req: StickersRemoveStickerFromSetM
) => Promise<(MessagesStickerSetT | RpcErrorS) & { dc: number }>;

/**
 * stickers.changeStickerPosition:messages.StickerSet
 * #ffb6d4ca:4290172106:-4795190
 * sticker:InputDocument
 * position:int
 */
export let CallStickersChangeStickerPositionM = c;
export type CallStickersChangeStickerPositionM = (
  invoker: ApiInvoker | Connection,
  req: StickersChangeStickerPositionM
) => Promise<(MessagesStickerSetT | RpcErrorS) & { dc: number }>;

/**
 * stickers.addStickerToSet:messages.StickerSet
 * #8653febe:2253651646:-2041315650
 * stickerset:InputStickerSet
 * sticker:InputStickerSetItem
 */
export let CallStickersAddStickerToSetM = c;
export type CallStickersAddStickerToSetM = (
  invoker: ApiInvoker | Connection,
  req: StickersAddStickerToSetM
) => Promise<(MessagesStickerSetT | RpcErrorS) & { dc: number }>;

/**
 * phone.acceptCall:phone.PhoneCall
 * #3bd2b4a0:1003664544:1003664544
 * peer:InputPhoneCall
 * g_b:bytes
 * protocol:PhoneCallProtocol
 */
export let CallPhoneAcceptCallM = c;
export type CallPhoneAcceptCallM = (
  invoker: ApiInvoker | Connection,
  req: PhoneAcceptCallM
) => Promise<(PhonePhoneCallS | RpcErrorS) & { dc: number }>;

/**
 * phone.confirmCall:phone.PhoneCall
 * #2efe1722:788404002:788404002
 * peer:InputPhoneCall
 * g_a:bytes
 * key_fingerprint:long
 * protocol:PhoneCallProtocol
 */
export let CallPhoneConfirmCallM = c;
export type CallPhoneConfirmCallM = (
  invoker: ApiInvoker | Connection,
  req: PhoneConfirmCallM
) => Promise<(PhonePhoneCallS | RpcErrorS) & { dc: number }>;

/**
 * messages.getFavedStickers:messages.FavedStickers
 * #21ce0b0e:567151374:567151374
 * hash:int
 */
export let CallMessagesGetFavedStickersM = c;
export type CallMessagesGetFavedStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetFavedStickersM
) => Promise<(MessagesFavedStickersT | RpcErrorS) & { dc: number }>;

/**
 * account.getWebAuthorizations:account.WebAuthorizations
 * #182e6d6f:405695855:405695855
 *
 */
export let CallAccountGetWebAuthorizationsM = c;
export type CallAccountGetWebAuthorizationsM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetWebAuthorizationsM
) => Promise<(AccountWebAuthorizationsS | RpcErrorS) & { dc: number }>;

/**
 * account.getWallPaper:WallPaper
 * #fc8ddbea:4237155306:-57811990
 * wallpaper:InputWallPaper
 */
export let CallAccountGetWallPaperM = c;
export type CallAccountGetWallPaperM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetWallPaperM
) => Promise<(WallPaperT | RpcErrorS) & { dc: number }>;

/**
 * account.uploadWallPaper:WallPaper
 * #dd853661:3716494945:-578472351
 * file:InputFile
 * mime_type:string
 * settings:WallPaperSettings
 */
export let CallAccountUploadWallPaperM = c;
export type CallAccountUploadWallPaperM = (
  invoker: ApiInvoker | Connection,
  req: AccountUploadWallPaperM
) => Promise<(WallPaperT | RpcErrorS) & { dc: number }>;

/**
 * account.createTheme:Theme
 * #2b7ffd7f:729808255:729808255
 * slug:string
 * title:string
 * document:InputDocument
 */
export let CallAccountCreateThemeM = c;
export type CallAccountCreateThemeM = (
  invoker: ApiInvoker | Connection,
  req: AccountCreateThemeM
) => Promise<(ThemeT | RpcErrorS) & { dc: number }>;

/**
 * account.updateTheme:Theme
 * #3b8ea202:999203330:999203330
 * flags:#
 * format:string
 * theme:InputTheme
 * slug:flags.0?string
 * title:flags.1?string
 * document:flags.2?InputDocument
 */
export let CallAccountUpdateThemeM = c;
export type CallAccountUpdateThemeM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdateThemeM
) => Promise<(ThemeT | RpcErrorS) & { dc: number }>;

/**
 * account.getTheme:Theme
 * #8d9d742b:2375906347:-1919060949
 * format:string
 * theme:InputTheme
 * document_id:long
 */
export let CallAccountGetThemeM = c;
export type CallAccountGetThemeM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetThemeM
) => Promise<(ThemeT | RpcErrorS) & { dc: number }>;

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
export interface MessageServiceS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_out(): true;
  set_out(val: true): this;

  has_out(): boolean;

  get_mentioned(): true;
  set_mentioned(val: true): this;

  has_mentioned(): boolean;

  get_media_unread(): true;
  set_media_unread(val: true): this;

  has_media_unread(): boolean;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_post(): true;
  set_post(val: true): this;

  has_post(): boolean;

  get_legacy(): true;
  set_legacy(val: true): this;

  has_legacy(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_from_id(): number;
  set_from_id(val: number): this;

  has_from_id(): boolean;

  get_to_id(): PeerT;
  set_to_id(val: PeerT): this;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_date(): number;
  set_date(val: number): this;

  get_action(): MessageActionT;
  set_action(val: MessageActionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageServiceS = r<new () => MessageServiceS>(
  0x9e19a1f6,
  "MessageServiceS",
  () => [
    "flags",
    IntRW,
    "out",
    Optional(TrueRW, 0, 1),
    "mentioned",
    Optional(TrueRW, 0, 4),
    "media_unread",
    Optional(TrueRW, 0, 5),
    "silent",
    Optional(TrueRW, 0, 13),
    "post",
    Optional(TrueRW, 0, 14),
    "legacy",
    Optional(TrueRW, 0, 19),
    "id",
    IntRW,
    "from_id",
    Optional(IntRW, 0, 8),
    "to_id",
    TypeRW(PeerT),
    "reply_to_msg_id",
    Optional(IntRW, 0, 3),
    "date",
    IntRW,
    "action",
    TypeRW(MessageActionT)
  ]
);

/**
 * updateNewStickerSet:Update
 * #688a30aa:1753886890:1753886890
 * stickerset:messages.StickerSet
 */
export interface UpdateNewStickerSetS {
  _id: number;
  _values: [MessagesStickerSetT];

  get_stickerset(): MessagesStickerSetT;
  set_stickerset(val: MessagesStickerSetT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateNewStickerSetS = r<new () => UpdateNewStickerSetS>(
  0x688a30aa,
  "UpdateNewStickerSetS",
  () => ["stickerset", TypeRW(MessagesStickerSetT)]
);

/**
 * messages.foundGifs:messages.FoundGifs
 * #450a1c0a:1158290442:1158290442
 * next_offset:int
 * results:Vector<FoundGif>
 */
export interface MessagesFoundGifsS {
  _id: number;
  _values: [number, VectorS<FoundGifT>];

  get_next_offset(): number;
  set_next_offset(val: number): this;

  get_results(): VectorS<FoundGifT>;
  set_results(val: VectorS<FoundGifT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFoundGifsS = r<new () => MessagesFoundGifsS>(
  0x450a1c0a,
  "MessagesFoundGifsS",
  () => ["next_offset", IntRW, "results", VectorRW(TypeRW(FoundGifT))]
);

/**
 * messages.featuredStickers:messages.FeaturedStickers
 * #f89d88e5:4171073765:-123893531
 * hash:int
 * sets:Vector<StickerSetCovered>
 * unread:Vector<long>
 */
export interface MessagesFeaturedStickersS {
  _id: number;
  _values: [number, VectorS<StickerSetCoveredT>, VectorS<ProtoLong>];

  get_hash(): number;
  set_hash(val: number): this;

  get_sets(): VectorS<StickerSetCoveredT>;
  set_sets(val: VectorS<StickerSetCoveredT>): this;

  get_unread(): VectorS<ProtoLong>;
  set_unread(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFeaturedStickersS = r<new () => MessagesFeaturedStickersS>(
  0xf89d88e5,
  "MessagesFeaturedStickersS",
  () => [
    "hash",
    IntRW,
    "sets",
    VectorRW(TypeRW(StickerSetCoveredT)),
    "unread",
    VectorRW(LongRW)
  ]
);

/**
 * messages.archivedStickers:messages.ArchivedStickers
 * #4fcba9c8:1338747336:1338747336
 * count:int
 * sets:Vector<StickerSetCovered>
 */
export interface MessagesArchivedStickersS {
  _id: number;
  _values: [number, VectorS<StickerSetCoveredT>];

  get_count(): number;
  set_count(val: number): this;

  get_sets(): VectorS<StickerSetCoveredT>;
  set_sets(val: VectorS<StickerSetCoveredT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesArchivedStickersS = r<new () => MessagesArchivedStickersS>(
  0x4fcba9c8,
  "MessagesArchivedStickersS",
  () => ["count", IntRW, "sets", VectorRW(TypeRW(StickerSetCoveredT))]
);

/**
 * messages.stickerSetInstallResultArchive:messages.StickerSetInstallResult
 * #35e410a8:904138920:904138920
 * sets:Vector<StickerSetCovered>
 */
export interface MessagesStickerSetInstallResultArchiveS {
  _id: number;
  _values: [VectorS<StickerSetCoveredT>];

  get_sets(): VectorS<StickerSetCoveredT>;
  set_sets(val: VectorS<StickerSetCoveredT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesStickerSetInstallResultArchiveS = r<
  new () => MessagesStickerSetInstallResultArchiveS
>(0x35e410a8, "MessagesStickerSetInstallResultArchiveS", () => [
  "sets",
  VectorRW(TypeRW(StickerSetCoveredT))
]);

/**
 * messageMediaGame:MessageMedia
 * #fdb19008:4256272392:-38694904
 * game:Game
 */
export interface MessageMediaGameS {
  _id: number;
  _values: [GameT];

  get_game(): GameT;
  set_game(val: GameT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaGameS = r<new () => MessageMediaGameS>(
  0xfdb19008,
  "MessageMediaGameS",
  () => ["game", TypeRW(GameT)]
);

/**
 * recentMeUrlStickerSet:RecentMeUrl
 * #bc0a57dc:3154794460:-1140172836
 * url:string
 * set:StickerSetCovered
 */
export interface RecentMeUrlStickerSetS {
  _id: number;
  _values: [string, StickerSetCoveredT];

  get_url(): string;
  set_url(val: string): this;

  get_set(): StickerSetCoveredT;
  set_set(val: StickerSetCoveredT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RecentMeUrlStickerSetS = r<new () => RecentMeUrlStickerSetS>(
  0xbc0a57dc,
  "RecentMeUrlStickerSetS",
  () => ["url", StringRW, "set", TypeRW(StickerSetCoveredT)]
);

/**
 * messages.foundStickerSets:messages.FoundStickerSets
 * #5108d648:1359533640:1359533640
 * hash:int
 * sets:Vector<StickerSetCovered>
 */
export interface MessagesFoundStickerSetsS {
  _id: number;
  _values: [number, VectorS<StickerSetCoveredT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_sets(): VectorS<StickerSetCoveredT>;
  set_sets(val: VectorS<StickerSetCoveredT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesFoundStickerSetsS = r<new () => MessagesFoundStickerSetsS>(
  0x5108d648,
  "MessagesFoundStickerSetsS",
  () => ["hash", IntRW, "sets", VectorRW(TypeRW(StickerSetCoveredT))]
);

/**
 * account.wallPapers:account.WallPapers
 * #702b65a9:1881892265:1881892265
 * hash:int
 * wallpapers:Vector<WallPaper>
 */
export interface AccountWallPapersS {
  _id: number;
  _values: [number, VectorS<WallPaperT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_wallpapers(): VectorS<WallPaperT>;
  set_wallpapers(val: VectorS<WallPaperT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountWallPapersS = r<new () => AccountWallPapersS>(
  0x702b65a9,
  "AccountWallPapersS",
  () => ["hash", IntRW, "wallpapers", VectorRW(TypeRW(WallPaperT))]
);

/**
 * account.themes:account.Themes
 * #7f676421:2137482273:2137482273
 * hash:int
 * themes:Vector<Theme>
 */
export interface AccountThemesS {
  _id: number;
  _values: [number, VectorS<ThemeT>];

  get_hash(): number;
  set_hash(val: number): this;

  get_themes(): VectorS<ThemeT>;
  set_themes(val: VectorS<ThemeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountThemesS = r<new () => AccountThemesS>(
  0x7f676421,
  "AccountThemesS",
  () => ["hash", IntRW, "themes", VectorRW(TypeRW(ThemeT))]
);

/**
 * updateTheme:Update
 * #8216fba3:2182544291:-2112423005
 * theme:Theme
 */
export interface UpdateThemeS {
  _id: number;
  _values: [ThemeT];

  get_theme(): ThemeT;
  set_theme(val: ThemeT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateThemeS = r<new () => UpdateThemeS>(
  0x8216fba3,
  "UpdateThemeS",
  () => ["theme", TypeRW(ThemeT)]
);

export type MessagesFeaturedStickersT =
  | MessagesFeaturedStickersNotModifiedS
  | MessagesFeaturedStickersS;
export const MessagesFeaturedStickersT = OneOf;

export type MessagesStickerSetInstallResultT =
  | MessagesStickerSetInstallResultSuccessS
  | MessagesStickerSetInstallResultArchiveS;
export const MessagesStickerSetInstallResultT = OneOf;

export type MessagesFoundStickerSetsT =
  | MessagesFoundStickerSetsNotModifiedS
  | MessagesFoundStickerSetsS;
export const MessagesFoundStickerSetsT = OneOf;

export type AccountWallPapersT =
  | AccountWallPapersNotModifiedS
  | AccountWallPapersS;
export const AccountWallPapersT = OneOf;

export type AccountThemesT = AccountThemesNotModifiedS | AccountThemesS;
export const AccountThemesT = OneOf;

/**
 * account.getWallPapers:account.WallPapers
 * #aabb1763:2864387939:-1430579357
 * hash:int
 */
export let CallAccountGetWallPapersM = c;
export type CallAccountGetWallPapersM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetWallPapersM
) => Promise<(AccountWallPapersT | RpcErrorS) & { dc: number }>;

/**
 * messages.installStickerSet:messages.StickerSetInstallResult
 * #c78fe460:3348096096:-946871200
 * stickerset:InputStickerSet
 * archived:Bool
 */
export let CallMessagesInstallStickerSetM = c;
export type CallMessagesInstallStickerSetM = (
  invoker: ApiInvoker | Connection,
  req: MessagesInstallStickerSetM
) => Promise<(MessagesStickerSetInstallResultT | RpcErrorS) & { dc: number }>;

/**
 * messages.searchGifs:messages.FoundGifs
 * #bf9a776b:3214571371:-1080395925
 * q:string
 * offset:int
 */
export let CallMessagesSearchGifsM = c;
export type CallMessagesSearchGifsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSearchGifsM
) => Promise<(MessagesFoundGifsS | RpcErrorS) & { dc: number }>;

/**
 * messages.getFeaturedStickers:messages.FeaturedStickers
 * #2dacca4f:766298703:766298703
 * hash:int
 */
export let CallMessagesGetFeaturedStickersM = c;
export type CallMessagesGetFeaturedStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetFeaturedStickersM
) => Promise<(MessagesFeaturedStickersT | RpcErrorS) & { dc: number }>;

/**
 * messages.getArchivedStickers:messages.ArchivedStickers
 * #57f17692:1475442322:1475442322
 * flags:#
 * masks:flags.0?true
 * offset_id:long
 * limit:int
 */
export let CallMessagesGetArchivedStickersM = c;
export type CallMessagesGetArchivedStickersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetArchivedStickersM
) => Promise<(MessagesArchivedStickersS | RpcErrorS) & { dc: number }>;

/**
 * messages.searchStickerSets:messages.FoundStickerSets
 * #c2b7d08b:3266826379:-1028140917
 * flags:#
 * exclude_featured:flags.0?true
 * q:string
 * hash:int
 */
export let CallMessagesSearchStickerSetsM = c;
export type CallMessagesSearchStickerSetsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSearchStickerSetsM
) => Promise<(MessagesFoundStickerSetsT | RpcErrorS) & { dc: number }>;

/**
 * account.getThemes:account.Themes
 * #285946f8:676939512:676939512
 * format:string
 * hash:int
 */
export let CallAccountGetThemesM = c;
export type CallAccountGetThemesM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetThemesM
) => Promise<(AccountThemesT | RpcErrorS) & { dc: number }>;

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
export interface ChatS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_creator(): true;
  set_creator(val: true): this;

  has_creator(): boolean;

  get_kicked(): true;
  set_kicked(val: true): this;

  has_kicked(): boolean;

  get_left(): true;
  set_left(val: true): this;

  has_left(): boolean;

  get_deactivated(): true;
  set_deactivated(val: true): this;

  has_deactivated(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_title(): string;
  set_title(val: string): this;

  get_photo(): ChatPhotoT;
  set_photo(val: ChatPhotoT): this;

  get_participants_count(): number;
  set_participants_count(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_version(): number;
  set_version(val: number): this;

  get_migrated_to(): InputChannelT;
  set_migrated_to(val: InputChannelT): this;

  has_migrated_to(): boolean;

  get_admin_rights(): ChatAdminRightsT;
  set_admin_rights(val: ChatAdminRightsT): this;

  has_admin_rights(): boolean;

  get_default_banned_rights(): ChatBannedRightsT;
  set_default_banned_rights(val: ChatBannedRightsT): this;

  has_default_banned_rights(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatS = r<new () => ChatS>(0x3bda1bde, "ChatS", () => [
  "flags",
  IntRW,
  "creator",
  Optional(TrueRW, 0, 0),
  "kicked",
  Optional(TrueRW, 0, 1),
  "left",
  Optional(TrueRW, 0, 2),
  "deactivated",
  Optional(TrueRW, 0, 5),
  "id",
  IntRW,
  "title",
  StringRW,
  "photo",
  TypeRW(ChatPhotoT),
  "participants_count",
  IntRW,
  "date",
  IntRW,
  "version",
  IntRW,
  "migrated_to",
  Optional(TypeRW(InputChannelT), 0, 6),
  "admin_rights",
  Optional(TypeRW(ChatAdminRightsT), 0, 14),
  "default_banned_rights",
  Optional(TypeRW(ChatBannedRightsT), 0, 18)
]);

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
export interface MessageS {
  _id: number;
  _values: [
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
    VectorS<MessageEntityT>,
    number,
    number,
    string,
    ProtoLong,
    VectorS<RestrictionReasonT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_out(): true;
  set_out(val: true): this;

  has_out(): boolean;

  get_mentioned(): true;
  set_mentioned(val: true): this;

  has_mentioned(): boolean;

  get_media_unread(): true;
  set_media_unread(val: true): this;

  has_media_unread(): boolean;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_post(): true;
  set_post(val: true): this;

  has_post(): boolean;

  get_from_scheduled(): true;
  set_from_scheduled(val: true): this;

  has_from_scheduled(): boolean;

  get_legacy(): true;
  set_legacy(val: true): this;

  has_legacy(): boolean;

  get_edit_hide(): true;
  set_edit_hide(val: true): this;

  has_edit_hide(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_from_id(): number;
  set_from_id(val: number): this;

  has_from_id(): boolean;

  get_to_id(): PeerT;
  set_to_id(val: PeerT): this;

  get_fwd_from(): MessageFwdHeaderT;
  set_fwd_from(val: MessageFwdHeaderT): this;

  has_fwd_from(): boolean;

  get_via_bot_id(): number;
  set_via_bot_id(val: number): this;

  has_via_bot_id(): boolean;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_date(): number;
  set_date(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  get_media(): MessageMediaT;
  set_media(val: MessageMediaT): this;

  has_media(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_views(): number;
  set_views(val: number): this;

  has_views(): boolean;

  get_edit_date(): number;
  set_edit_date(val: number): this;

  has_edit_date(): boolean;

  get_post_author(): string;
  set_post_author(val: string): this;

  has_post_author(): boolean;

  get_grouped_id(): ProtoLong;
  set_grouped_id(val: ProtoLong): this;

  has_grouped_id(): boolean;

  get_restriction_reason(): VectorS<RestrictionReasonT>;
  set_restriction_reason(val: VectorS<RestrictionReasonT>): this;

  has_restriction_reason(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageS = r<new () => MessageS>(0x452c0e65, "MessageS", () => [
  "flags",
  IntRW,
  "out",
  Optional(TrueRW, 0, 1),
  "mentioned",
  Optional(TrueRW, 0, 4),
  "media_unread",
  Optional(TrueRW, 0, 5),
  "silent",
  Optional(TrueRW, 0, 13),
  "post",
  Optional(TrueRW, 0, 14),
  "from_scheduled",
  Optional(TrueRW, 0, 18),
  "legacy",
  Optional(TrueRW, 0, 19),
  "edit_hide",
  Optional(TrueRW, 0, 21),
  "id",
  IntRW,
  "from_id",
  Optional(IntRW, 0, 8),
  "to_id",
  TypeRW(PeerT),
  "fwd_from",
  Optional(TypeRW(MessageFwdHeaderT), 0, 2),
  "via_bot_id",
  Optional(IntRW, 0, 11),
  "reply_to_msg_id",
  Optional(IntRW, 0, 3),
  "date",
  IntRW,
  "message",
  StringRW,
  "media",
  Optional(TypeRW(MessageMediaT), 0, 9),
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 6),
  "entities",
  Optional(VectorRW(TypeRW(MessageEntityT)), 0, 7),
  "views",
  Optional(IntRW, 0, 10),
  "edit_date",
  Optional(IntRW, 0, 15),
  "post_author",
  Optional(StringRW, 0, 16),
  "grouped_id",
  Optional(LongRW, 0, 17),
  "restriction_reason",
  Optional(VectorRW(TypeRW(RestrictionReasonT)), 0, 22)
]);

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
export interface DialogS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_pinned(): true;
  set_pinned(val: true): this;

  has_pinned(): boolean;

  get_unread_mark(): true;
  set_unread_mark(val: true): this;

  has_unread_mark(): boolean;

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_top_message(): number;
  set_top_message(val: number): this;

  get_read_inbox_max_id(): number;
  set_read_inbox_max_id(val: number): this;

  get_read_outbox_max_id(): number;
  set_read_outbox_max_id(val: number): this;

  get_unread_count(): number;
  set_unread_count(val: number): this;

  get_unread_mentions_count(): number;
  set_unread_mentions_count(val: number): this;

  get_notify_settings(): PeerNotifySettingsT;
  set_notify_settings(val: PeerNotifySettingsT): this;

  get_pts(): number;
  set_pts(val: number): this;

  has_pts(): boolean;

  get_draft(): DraftMessageT;
  set_draft(val: DraftMessageT): this;

  has_draft(): boolean;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DialogS = r<new () => DialogS>(0x2c171f72, "DialogS", () => [
  "flags",
  IntRW,
  "pinned",
  Optional(TrueRW, 0, 2),
  "unread_mark",
  Optional(TrueRW, 0, 3),
  "peer",
  TypeRW(PeerT),
  "top_message",
  IntRW,
  "read_inbox_max_id",
  IntRW,
  "read_outbox_max_id",
  IntRW,
  "unread_count",
  IntRW,
  "unread_mentions_count",
  IntRW,
  "notify_settings",
  TypeRW(PeerNotifySettingsT),
  "pts",
  Optional(IntRW, 0, 0),
  "draft",
  Optional(TypeRW(DraftMessageT), 0, 1),
  "folder_id",
  Optional(IntRW, 0, 4)
]);

/**
 * inputNotifyPeer:InputNotifyPeer
 * #b8bc5b0c:3099351820:-1195615476
 * peer:InputPeer
 */
export interface InputNotifyPeerS {
  _id: number;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputNotifyPeerS = r<new () => InputNotifyPeerS>(
  0xb8bc5b0c,
  "InputNotifyPeerS",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * messages.dialogs:messages.Dialogs
 * #15ba6c40:364538944:364538944
 * dialogs:Vector<Dialog>
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface MessagesDialogsS {
  _id: number;
  _values: [
    VectorS<DialogT>,
    VectorS<MessageT>,
    VectorS<ChatT>,
    VectorS<UserT>
  ];

  get_dialogs(): VectorS<DialogT>;
  set_dialogs(val: VectorS<DialogT>): this;

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDialogsS = r<new () => MessagesDialogsS>(
  0x15ba6c40,
  "MessagesDialogsS",
  () => [
    "dialogs",
    VectorRW(TypeRW(DialogT)),
    "messages",
    VectorRW(TypeRW(MessageT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * messages.dialogsSlice:messages.Dialogs
 * #71e094f3:1910543603:1910543603
 * count:int
 * dialogs:Vector<Dialog>
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface MessagesDialogsSliceS {
  _id: number;
  _values: [
    number,
    VectorS<DialogT>,
    VectorS<MessageT>,
    VectorS<ChatT>,
    VectorS<UserT>
  ];

  get_count(): number;
  set_count(val: number): this;

  get_dialogs(): VectorS<DialogT>;
  set_dialogs(val: VectorS<DialogT>): this;

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDialogsSliceS = r<new () => MessagesDialogsSliceS>(
  0x71e094f3,
  "MessagesDialogsSliceS",
  () => [
    "count",
    IntRW,
    "dialogs",
    VectorRW(TypeRW(DialogT)),
    "messages",
    VectorRW(TypeRW(MessageT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * messages.messages:messages.Messages
 * #8c718e87:2356252295:-1938715001
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface MessagesMessagesS {
  _id: number;
  _values: [VectorS<MessageT>, VectorS<ChatT>, VectorS<UserT>];

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesMessagesS = r<new () => MessagesMessagesS>(
  0x8c718e87,
  "MessagesMessagesS",
  () => [
    "messages",
    VectorRW(TypeRW(MessageT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

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
export interface MessagesMessagesSliceS {
  _id: number;
  _values: [
    number,
    true,
    number,
    number,
    VectorS<MessageT>,
    VectorS<ChatT>,
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_inexact(): true;
  set_inexact(val: true): this;

  has_inexact(): boolean;

  get_count(): number;
  set_count(val: number): this;

  get_next_rate(): number;
  set_next_rate(val: number): this;

  has_next_rate(): boolean;

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesMessagesSliceS = r<new () => MessagesMessagesSliceS>(
  0xc8edce1e,
  "MessagesMessagesSliceS",
  () => [
    "flags",
    IntRW,
    "inexact",
    Optional(TrueRW, 0, 1),
    "count",
    IntRW,
    "next_rate",
    Optional(IntRW, 0, 0),
    "messages",
    VectorRW(TypeRW(MessageT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * messages.chats:messages.Chats
 * #64ff9fd5:1694474197:1694474197
 * chats:Vector<Chat>
 */
export interface MessagesChatsS {
  _id: number;
  _values: [VectorS<ChatT>];

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesChatsS = r<new () => MessagesChatsS>(
  0x64ff9fd5,
  "MessagesChatsS",
  () => ["chats", VectorRW(TypeRW(ChatT))]
);

/**
 * messages.chatFull:messages.ChatFull
 * #e5d7d19c:3856126364:-438840932
 * full_chat:ChatFull
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface MessagesChatFullS {
  _id: number;
  _values: [ChatFullT, VectorS<ChatT>, VectorS<UserT>];

  get_full_chat(): ChatFullT;
  set_full_chat(val: ChatFullT): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesChatFullS = r<new () => MessagesChatFullS>(
  0xe5d7d19c,
  "MessagesChatFullS",
  () => [
    "full_chat",
    TypeRW(ChatFullT),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * updateNewMessage:Update
 * #1f2b0afd:522914557:522914557
 * message:Message
 * pts:int
 * pts_count:int
 */
export interface UpdateNewMessageS {
  _id: number;
  _values: [MessageT, number, number];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateNewMessageS = r<new () => UpdateNewMessageS>(
  0x1f2b0afd,
  "UpdateNewMessageS",
  () => ["message", TypeRW(MessageT), "pts", IntRW, "pts_count", IntRW]
);

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
export interface UpdatesDifferenceS {
  _id: number;
  _values: [
    VectorS<MessageT>,
    VectorS<EncryptedMessageT>,
    VectorS<UpdateT>,
    VectorS<ChatT>,
    VectorS<UserT>,
    UpdatesStateT
  ];

  get_new_messages(): VectorS<MessageT>;
  set_new_messages(val: VectorS<MessageT>): this;

  get_new_encrypted_messages(): VectorS<EncryptedMessageT>;
  set_new_encrypted_messages(val: VectorS<EncryptedMessageT>): this;

  get_other_updates(): VectorS<UpdateT>;
  set_other_updates(val: VectorS<UpdateT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  get_state(): UpdatesStateT;
  set_state(val: UpdatesStateT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesDifferenceS = r<new () => UpdatesDifferenceS>(
  0xf49ca0,
  "UpdatesDifferenceS",
  () => [
    "new_messages",
    VectorRW(TypeRW(MessageT)),
    "new_encrypted_messages",
    VectorRW(TypeRW(EncryptedMessageT)),
    "other_updates",
    VectorRW(TypeRW(UpdateT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT)),
    "state",
    TypeRW(UpdatesStateT)
  ]
);

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
export interface UpdatesDifferenceSliceS {
  _id: number;
  _values: [
    VectorS<MessageT>,
    VectorS<EncryptedMessageT>,
    VectorS<UpdateT>,
    VectorS<ChatT>,
    VectorS<UserT>,
    UpdatesStateT
  ];

  get_new_messages(): VectorS<MessageT>;
  set_new_messages(val: VectorS<MessageT>): this;

  get_new_encrypted_messages(): VectorS<EncryptedMessageT>;
  set_new_encrypted_messages(val: VectorS<EncryptedMessageT>): this;

  get_other_updates(): VectorS<UpdateT>;
  set_other_updates(val: VectorS<UpdateT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  get_intermediate_state(): UpdatesStateT;
  set_intermediate_state(val: UpdatesStateT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesDifferenceSliceS = r<new () => UpdatesDifferenceSliceS>(
  0xa8fb1981,
  "UpdatesDifferenceSliceS",
  () => [
    "new_messages",
    VectorRW(TypeRW(MessageT)),
    "new_encrypted_messages",
    VectorRW(TypeRW(EncryptedMessageT)),
    "other_updates",
    VectorRW(TypeRW(UpdateT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT)),
    "intermediate_state",
    TypeRW(UpdatesStateT)
  ]
);

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
export interface UpdateShortMessageS {
  _id: number;
  _values: [
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
    VectorS<MessageEntityT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_out(): true;
  set_out(val: true): this;

  has_out(): boolean;

  get_mentioned(): true;
  set_mentioned(val: true): this;

  has_mentioned(): boolean;

  get_media_unread(): true;
  set_media_unread(val: true): this;

  has_media_unread(): boolean;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_fwd_from(): MessageFwdHeaderT;
  set_fwd_from(val: MessageFwdHeaderT): this;

  has_fwd_from(): boolean;

  get_via_bot_id(): number;
  set_via_bot_id(val: number): this;

  has_via_bot_id(): boolean;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateShortMessageS = r<new () => UpdateShortMessageS>(
  0x914fbf11,
  "UpdateShortMessageS",
  () => [
    "flags",
    IntRW,
    "out",
    Optional(TrueRW, 0, 1),
    "mentioned",
    Optional(TrueRW, 0, 4),
    "media_unread",
    Optional(TrueRW, 0, 5),
    "silent",
    Optional(TrueRW, 0, 13),
    "id",
    IntRW,
    "user_id",
    IntRW,
    "message",
    StringRW,
    "pts",
    IntRW,
    "pts_count",
    IntRW,
    "date",
    IntRW,
    "fwd_from",
    Optional(TypeRW(MessageFwdHeaderT), 0, 2),
    "via_bot_id",
    Optional(IntRW, 0, 11),
    "reply_to_msg_id",
    Optional(IntRW, 0, 3),
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 7)
  ]
);

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
export interface UpdateShortChatMessageS {
  _id: number;
  _values: [
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
    VectorS<MessageEntityT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_out(): true;
  set_out(val: true): this;

  has_out(): boolean;

  get_mentioned(): true;
  set_mentioned(val: true): this;

  has_mentioned(): boolean;

  get_media_unread(): true;
  set_media_unread(val: true): this;

  has_media_unread(): boolean;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_from_id(): number;
  set_from_id(val: number): this;

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_fwd_from(): MessageFwdHeaderT;
  set_fwd_from(val: MessageFwdHeaderT): this;

  has_fwd_from(): boolean;

  get_via_bot_id(): number;
  set_via_bot_id(val: number): this;

  has_via_bot_id(): boolean;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateShortChatMessageS = r<new () => UpdateShortChatMessageS>(
  0x16812688,
  "UpdateShortChatMessageS",
  () => [
    "flags",
    IntRW,
    "out",
    Optional(TrueRW, 0, 1),
    "mentioned",
    Optional(TrueRW, 0, 4),
    "media_unread",
    Optional(TrueRW, 0, 5),
    "silent",
    Optional(TrueRW, 0, 13),
    "id",
    IntRW,
    "from_id",
    IntRW,
    "chat_id",
    IntRW,
    "message",
    StringRW,
    "pts",
    IntRW,
    "pts_count",
    IntRW,
    "date",
    IntRW,
    "fwd_from",
    Optional(TypeRW(MessageFwdHeaderT), 0, 2),
    "via_bot_id",
    Optional(IntRW, 0, 11),
    "reply_to_msg_id",
    Optional(IntRW, 0, 3),
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 7)
  ]
);

/**
 * updateShort:Updates
 * #78d4dec1:2027216577:2027216577
 * update:Update
 * date:int
 */
export interface UpdateShortS {
  _id: number;
  _values: [UpdateT, number];

  get_update(): UpdateT;
  set_update(val: UpdateT): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateShortS = r<new () => UpdateShortS>(
  0x78d4dec1,
  "UpdateShortS",
  () => ["update", TypeRW(UpdateT), "date", IntRW]
);

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
export interface UpdatesCombinedS {
  _id: number;
  _values: [
    VectorS<UpdateT>,
    VectorS<UserT>,
    VectorS<ChatT>,
    number,
    number,
    number
  ];

  get_updates(): VectorS<UpdateT>;
  set_updates(val: VectorS<UpdateT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_date(): number;
  set_date(val: number): this;

  get_seq_start(): number;
  set_seq_start(val: number): this;

  get_seq(): number;
  set_seq(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesCombinedS = r<new () => UpdatesCombinedS>(
  0x725b04c3,
  "UpdatesCombinedS",
  () => [
    "updates",
    VectorRW(TypeRW(UpdateT)),
    "users",
    VectorRW(TypeRW(UserT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "date",
    IntRW,
    "seq_start",
    IntRW,
    "seq",
    IntRW
  ]
);

/**
 * updates:Updates
 * #74ae4240:1957577280:1957577280
 * updates:Vector<Update>
 * users:Vector<User>
 * chats:Vector<Chat>
 * date:int
 * seq:int
 */
export interface UpdatesS {
  _id: number;
  _values: [VectorS<UpdateT>, VectorS<UserT>, VectorS<ChatT>, number, number];

  get_updates(): VectorS<UpdateT>;
  set_updates(val: VectorS<UpdateT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_date(): number;
  set_date(val: number): this;

  get_seq(): number;
  set_seq(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesS = r<new () => UpdatesS>(0x74ae4240, "UpdatesS", () => [
  "updates",
  VectorRW(TypeRW(UpdateT)),
  "users",
  VectorRW(TypeRW(UserT)),
  "chats",
  VectorRW(TypeRW(ChatT)),
  "date",
  IntRW,
  "seq",
  IntRW
]);

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
export interface HelpAppUpdateS {
  _id: number;
  _values: [
    number,
    true,
    number,
    string,
    string,
    VectorS<MessageEntityT>,
    DocumentT,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_can_not_skip(): true;
  set_can_not_skip(val: true): this;

  has_can_not_skip(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_version(): string;
  set_version(val: string): this;

  get_text(): string;
  set_text(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  has_document(): boolean;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpAppUpdateS = r<new () => HelpAppUpdateS>(
  0x1da7158f,
  "HelpAppUpdateS",
  () => [
    "flags",
    IntRW,
    "can_not_skip",
    Optional(TrueRW, 0, 0),
    "id",
    IntRW,
    "version",
    StringRW,
    "text",
    StringRW,
    "entities",
    VectorRW(TypeRW(MessageEntityT)),
    "document",
    Optional(TypeRW(DocumentT), 0, 1),
    "url",
    Optional(StringRW, 0, 2)
  ]
);

/**
 * contacts.found:contacts.Found
 * #b3134d9d:3004386717:-1290580579
 * my_results:Vector<Peer>
 * results:Vector<Peer>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface ContactsFoundS {
  _id: number;
  _values: [VectorS<PeerT>, VectorS<PeerT>, VectorS<ChatT>, VectorS<UserT>];

  get_my_results(): VectorS<PeerT>;
  set_my_results(val: VectorS<PeerT>): this;

  get_results(): VectorS<PeerT>;
  set_results(val: VectorS<PeerT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsFoundS = r<new () => ContactsFoundS>(
  0xb3134d9d,
  "ContactsFoundS",
  () => [
    "my_results",
    VectorRW(TypeRW(PeerT)),
    "results",
    VectorRW(TypeRW(PeerT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

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
export interface UpdateServiceNotificationS {
  _id: number;
  _values: [
    number,
    true,
    number,
    string,
    string,
    MessageMediaT,
    VectorS<MessageEntityT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_popup(): true;
  set_popup(val: true): this;

  has_popup(): boolean;

  get_inbox_date(): number;
  set_inbox_date(val: number): this;

  has_inbox_date(): boolean;

  get_type(): string;
  set_type(val: string): this;

  get_message(): string;
  set_message(val: string): this;

  get_media(): MessageMediaT;
  set_media(val: MessageMediaT): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateServiceNotificationS = r<new () => UpdateServiceNotificationS>(
  0xebe46819,
  "UpdateServiceNotificationS",
  () => [
    "flags",
    IntRW,
    "popup",
    Optional(TrueRW, 0, 0),
    "inbox_date",
    Optional(IntRW, 0, 1),
    "type",
    StringRW,
    "message",
    StringRW,
    "media",
    TypeRW(MessageMediaT),
    "entities",
    VectorRW(TypeRW(MessageEntityT))
  ]
);

/**
 * inputPrivacyValueAllowUsers:InputPrivacyRule
 * #131cc67f:320652927:320652927
 * users:Vector<InputUser>
 */
export interface InputPrivacyValueAllowUsersS {
  _id: number;
  _values: [VectorS<InputUserT>];

  get_users(): VectorS<InputUserT>;
  set_users(val: VectorS<InputUserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueAllowUsersS = r<
  new () => InputPrivacyValueAllowUsersS
>(0x131cc67f, "InputPrivacyValueAllowUsersS", () => [
  "users",
  VectorRW(TypeRW(InputUserT))
]);

/**
 * inputPrivacyValueDisallowUsers:InputPrivacyRule
 * #90110467:2417034343:-1877932953
 * users:Vector<InputUser>
 */
export interface InputPrivacyValueDisallowUsersS {
  _id: number;
  _values: [VectorS<InputUserT>];

  get_users(): VectorS<InputUserT>;
  set_users(val: VectorS<InputUserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPrivacyValueDisallowUsersS = r<
  new () => InputPrivacyValueDisallowUsersS
>(0x90110467, "InputPrivacyValueDisallowUsersS", () => [
  "users",
  VectorRW(TypeRW(InputUserT))
]);

/**
 * account.privacyRules:account.PrivacyRules
 * #50a04e45:1352683077:1352683077
 * rules:Vector<PrivacyRule>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface AccountPrivacyRulesS {
  _id: number;
  _values: [VectorS<PrivacyRuleT>, VectorS<ChatT>, VectorS<UserT>];

  get_rules(): VectorS<PrivacyRuleT>;
  set_rules(val: VectorS<PrivacyRuleT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountPrivacyRulesS = r<new () => AccountPrivacyRulesS>(
  0x50a04e45,
  "AccountPrivacyRulesS",
  () => [
    "rules",
    VectorRW(TypeRW(PrivacyRuleT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * updateWebPage:Update
 * #7f891213:2139689491:2139689491
 * webpage:WebPage
 * pts:int
 * pts_count:int
 */
export interface UpdateWebPageS {
  _id: number;
  _values: [WebPageT, number, number];

  get_webpage(): WebPageT;
  set_webpage(val: WebPageT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateWebPageS = r<new () => UpdateWebPageS>(
  0x7f891213,
  "UpdateWebPageS",
  () => ["webpage", TypeRW(WebPageT), "pts", IntRW, "pts_count", IntRW]
);

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
export interface WebPageS {
  _id: number;
  _values: [
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
    VectorS<DocumentT>,
    PageT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_url(): string;
  set_url(val: string): this;

  get_display_url(): string;
  set_display_url(val: string): this;

  get_hash(): number;
  set_hash(val: number): this;

  get_type(): string;
  set_type(val: string): this;

  has_type(): boolean;

  get_site_name(): string;
  set_site_name(val: string): this;

  has_site_name(): boolean;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_description(): string;
  set_description(val: string): this;

  has_description(): boolean;

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  has_photo(): boolean;

  get_embed_url(): string;
  set_embed_url(val: string): this;

  has_embed_url(): boolean;

  get_embed_type(): string;
  set_embed_type(val: string): this;

  has_embed_type(): boolean;

  get_embed_width(): number;
  set_embed_width(val: number): this;

  has_embed_width(): boolean;

  get_embed_height(): number;
  set_embed_height(val: number): this;

  has_embed_height(): boolean;

  get_duration(): number;
  set_duration(val: number): this;

  has_duration(): boolean;

  get_author(): string;
  set_author(val: string): this;

  has_author(): boolean;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  has_document(): boolean;

  get_documents(): VectorS<DocumentT>;
  set_documents(val: VectorS<DocumentT>): this;

  has_documents(): boolean;

  get_cached_page(): PageT;
  set_cached_page(val: PageT): this;

  has_cached_page(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let WebPageS = r<new () => WebPageS>(0xfa64e172, "WebPageS", () => [
  "flags",
  IntRW,
  "id",
  LongRW,
  "url",
  StringRW,
  "display_url",
  StringRW,
  "hash",
  IntRW,
  "type",
  Optional(StringRW, 0, 0),
  "site_name",
  Optional(StringRW, 0, 1),
  "title",
  Optional(StringRW, 0, 2),
  "description",
  Optional(StringRW, 0, 3),
  "photo",
  Optional(TypeRW(PhotoT), 0, 4),
  "embed_url",
  Optional(StringRW, 0, 5),
  "embed_type",
  Optional(StringRW, 0, 5),
  "embed_width",
  Optional(IntRW, 0, 6),
  "embed_height",
  Optional(IntRW, 0, 6),
  "duration",
  Optional(IntRW, 0, 7),
  "author",
  Optional(StringRW, 0, 8),
  "document",
  Optional(TypeRW(DocumentT), 0, 9),
  "documents",
  Optional(VectorRW(TypeRW(DocumentT)), 0, 11),
  "cached_page",
  Optional(TypeRW(PageT), 0, 10)
]);

/**
 * messageMediaWebPage:MessageMedia
 * #a32dd600:2737690112:-1557277184
 * webpage:WebPage
 */
export interface MessageMediaWebPageS {
  _id: number;
  _values: [WebPageT];

  get_webpage(): WebPageT;
  set_webpage(val: WebPageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageMediaWebPageS = r<new () => MessageMediaWebPageS>(
  0xa32dd600,
  "MessageMediaWebPageS",
  () => ["webpage", TypeRW(WebPageT)]
);

/**
 * chatInviteAlready:ChatInvite
 * #5a686d7c:1516793212:1516793212
 * chat:Chat
 */
export interface ChatInviteAlreadyS {
  _id: number;
  _values: [ChatT];

  get_chat(): ChatT;
  set_chat(val: ChatT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChatInviteAlreadyS = r<new () => ChatInviteAlreadyS>(
  0x5a686d7c,
  "ChatInviteAlreadyS",
  () => ["chat", TypeRW(ChatT)]
);

/**
 * keyboardButtonRow:KeyboardButtonRow
 * #77608b83:2002815875:2002815875
 * buttons:Vector<KeyboardButton>
 */
export interface KeyboardButtonRowS {
  _id: number;
  _values: [VectorS<KeyboardButtonT>];

  get_buttons(): VectorS<KeyboardButtonT>;
  set_buttons(val: VectorS<KeyboardButtonT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let KeyboardButtonRowS = r<new () => KeyboardButtonRowS>(
  0x77608b83,
  "KeyboardButtonRowS",
  () => ["buttons", VectorRW(TypeRW(KeyboardButtonT))]
);

/**
 * replyKeyboardMarkup:ReplyMarkup
 * #3502758c:889353612:889353612
 * flags:#
 * resize:flags.0?true
 * single_use:flags.1?true
 * selective:flags.2?true
 * rows:Vector<KeyboardButtonRow>
 */
export interface ReplyKeyboardMarkupS {
  _id: number;
  _values: [number, true, true, true, VectorS<KeyboardButtonRowT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_resize(): true;
  set_resize(val: true): this;

  has_resize(): boolean;

  get_single_use(): true;
  set_single_use(val: true): this;

  has_single_use(): boolean;

  get_selective(): true;
  set_selective(val: true): this;

  has_selective(): boolean;

  get_rows(): VectorS<KeyboardButtonRowT>;
  set_rows(val: VectorS<KeyboardButtonRowT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReplyKeyboardMarkupS = r<new () => ReplyKeyboardMarkupS>(
  0x3502758c,
  "ReplyKeyboardMarkupS",
  () => [
    "flags",
    IntRW,
    "resize",
    Optional(TrueRW, 0, 0),
    "single_use",
    Optional(TrueRW, 0, 1),
    "selective",
    Optional(TrueRW, 0, 2),
    "rows",
    VectorRW(TypeRW(KeyboardButtonRowT))
  ]
);

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
export interface UpdateShortSentMessageS {
  _id: number;
  _values: [
    number,
    true,
    number,
    number,
    number,
    number,
    MessageMediaT,
    VectorS<MessageEntityT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_out(): true;
  set_out(val: true): this;

  has_out(): boolean;

  get_id(): number;
  set_id(val: number): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  get_date(): number;
  set_date(val: number): this;

  get_media(): MessageMediaT;
  set_media(val: MessageMediaT): this;

  has_media(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateShortSentMessageS = r<new () => UpdateShortSentMessageS>(
  0x11f1331c,
  "UpdateShortSentMessageS",
  () => [
    "flags",
    IntRW,
    "out",
    Optional(TrueRW, 0, 1),
    "id",
    IntRW,
    "pts",
    IntRW,
    "pts_count",
    IntRW,
    "date",
    IntRW,
    "media",
    Optional(TypeRW(MessageMediaT), 0, 9),
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 7)
  ]
);

/**
 * contacts.resolvedPeer:contacts.ResolvedPeer
 * #7f077ad9:2131196633:2131196633
 * peer:Peer
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface ContactsResolvedPeerS {
  _id: number;
  _values: [PeerT, VectorS<ChatT>, VectorS<UserT>];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsResolvedPeerS = r<new () => ContactsResolvedPeerS>(
  0x7f077ad9,
  "ContactsResolvedPeerS",
  () => [
    "peer",
    TypeRW(PeerT),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

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
export interface MessagesChannelMessagesS {
  _id: number;
  _values: [
    number,
    true,
    number,
    number,
    VectorS<MessageT>,
    VectorS<ChatT>,
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_inexact(): true;
  set_inexact(val: true): this;

  has_inexact(): boolean;

  get_pts(): number;
  set_pts(val: number): this;

  get_count(): number;
  set_count(val: number): this;

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesChannelMessagesS = r<new () => MessagesChannelMessagesS>(
  0x99262e37,
  "MessagesChannelMessagesS",
  () => [
    "flags",
    IntRW,
    "inexact",
    Optional(TrueRW, 0, 1),
    "pts",
    IntRW,
    "count",
    IntRW,
    "messages",
    VectorRW(TypeRW(MessageT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * updateNewChannelMessage:Update
 * #62ba04d9:1656358105:1656358105
 * message:Message
 * pts:int
 * pts_count:int
 */
export interface UpdateNewChannelMessageS {
  _id: number;
  _values: [MessageT, number, number];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateNewChannelMessageS = r<new () => UpdateNewChannelMessageS>(
  0x62ba04d9,
  "UpdateNewChannelMessageS",
  () => ["message", TypeRW(MessageT), "pts", IntRW, "pts_count", IntRW]
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
export interface UpdatesChannelDifferenceTooLongS {
  _id: number;
  _values: [
    number,
    true,
    number,
    DialogT,
    VectorS<MessageT>,
    VectorS<ChatT>,
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_final(): true;
  set_final(val: true): this;

  has_final(): boolean;

  get_timeout(): number;
  set_timeout(val: number): this;

  has_timeout(): boolean;

  get_dialog(): DialogT;
  set_dialog(val: DialogT): this;

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesChannelDifferenceTooLongS = r<
  new () => UpdatesChannelDifferenceTooLongS
>(0xa4bcc6fe, "UpdatesChannelDifferenceTooLongS", () => [
  "flags",
  IntRW,
  "final",
  Optional(TrueRW, 0, 0),
  "timeout",
  Optional(IntRW, 0, 1),
  "dialog",
  TypeRW(DialogT),
  "messages",
  VectorRW(TypeRW(MessageT)),
  "chats",
  VectorRW(TypeRW(ChatT)),
  "users",
  VectorRW(TypeRW(UserT))
]);

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
export interface UpdatesChannelDifferenceS {
  _id: number;
  _values: [
    number,
    true,
    number,
    number,
    VectorS<MessageT>,
    VectorS<UpdateT>,
    VectorS<ChatT>,
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_final(): true;
  set_final(val: true): this;

  has_final(): boolean;

  get_pts(): number;
  set_pts(val: number): this;

  get_timeout(): number;
  set_timeout(val: number): this;

  has_timeout(): boolean;

  get_new_messages(): VectorS<MessageT>;
  set_new_messages(val: VectorS<MessageT>): this;

  get_other_updates(): VectorS<UpdateT>;
  set_other_updates(val: VectorS<UpdateT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesChannelDifferenceS = r<new () => UpdatesChannelDifferenceS>(
  0x2064674e,
  "UpdatesChannelDifferenceS",
  () => [
    "flags",
    IntRW,
    "final",
    Optional(TrueRW, 0, 0),
    "pts",
    IntRW,
    "timeout",
    Optional(IntRW, 0, 1),
    "new_messages",
    VectorRW(TypeRW(MessageT)),
    "other_updates",
    VectorRW(TypeRW(UpdateT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

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
export interface HelpTermsOfServiceS {
  _id: number;
  _values: [number, true, DataJsonT, string, VectorS<MessageEntityT>, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_popup(): true;
  set_popup(val: true): this;

  has_popup(): boolean;

  get_id(): DataJsonT;
  set_id(val: DataJsonT): this;

  get_text(): string;
  set_text(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  get_min_age_confirm(): number;
  set_min_age_confirm(val: number): this;

  has_min_age_confirm(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpTermsOfServiceS = r<new () => HelpTermsOfServiceS>(
  0x780a0310,
  "HelpTermsOfServiceS",
  () => [
    "flags",
    IntRW,
    "popup",
    Optional(TrueRW, 0, 0),
    "id",
    TypeRW(DataJsonT),
    "text",
    StringRW,
    "entities",
    VectorRW(TypeRW(MessageEntityT)),
    "min_age_confirm",
    Optional(IntRW, 0, 1)
  ]
);

/**
 * inputBotInlineMessageMediaAuto:InputBotInlineMessage
 * #3380c786:864077702:864077702
 * flags:#
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export interface InputBotInlineMessageMediaAutoS {
  _id: number;
  _values: [number, string, VectorS<MessageEntityT>, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageMediaAutoS = r<
  new () => InputBotInlineMessageMediaAutoS
>(0x3380c786, "InputBotInlineMessageMediaAutoS", () => [
  "flags",
  IntRW,
  "message",
  StringRW,
  "entities",
  Optional(VectorRW(TypeRW(MessageEntityT)), 0, 1),
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2)
]);

/**
 * inputBotInlineMessageText:InputBotInlineMessage
 * #3dcd7a87:1036876423:1036876423
 * flags:#
 * no_webpage:flags.0?true
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export interface InputBotInlineMessageTextS {
  _id: number;
  _values: [number, true, string, VectorS<MessageEntityT>, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageTextS = r<new () => InputBotInlineMessageTextS>(
  0x3dcd7a87,
  "InputBotInlineMessageTextS",
  () => [
    "flags",
    IntRW,
    "no_webpage",
    Optional(TrueRW, 0, 0),
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 1),
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2)
  ]
);

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
export interface InputBotInlineResultS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): string;
  set_id(val: string): this;

  get_type(): string;
  set_type(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_description(): string;
  set_description(val: string): this;

  has_description(): boolean;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  get_thumb(): InputWebDocumentT;
  set_thumb(val: InputWebDocumentT): this;

  has_thumb(): boolean;

  get_content(): InputWebDocumentT;
  set_content(val: InputWebDocumentT): this;

  has_content(): boolean;

  get_send_message(): InputBotInlineMessageT;
  set_send_message(val: InputBotInlineMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineResultS = r<new () => InputBotInlineResultS>(
  0x88bf9319,
  "InputBotInlineResultS",
  () => [
    "flags",
    IntRW,
    "id",
    StringRW,
    "type",
    StringRW,
    "title",
    Optional(StringRW, 0, 1),
    "description",
    Optional(StringRW, 0, 2),
    "url",
    Optional(StringRW, 0, 3),
    "thumb",
    Optional(TypeRW(InputWebDocumentT), 0, 4),
    "content",
    Optional(TypeRW(InputWebDocumentT), 0, 5),
    "send_message",
    TypeRW(InputBotInlineMessageT)
  ]
);

/**
 * botInlineMessageMediaAuto:BotInlineMessage
 * #764cf810:1984755728:1984755728
 * flags:#
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export interface BotInlineMessageMediaAutoS {
  _id: number;
  _values: [number, string, VectorS<MessageEntityT>, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineMessageMediaAutoS = r<new () => BotInlineMessageMediaAutoS>(
  0x764cf810,
  "BotInlineMessageMediaAutoS",
  () => [
    "flags",
    IntRW,
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 1),
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2)
  ]
);

/**
 * botInlineMessageText:BotInlineMessage
 * #8c7f65e2:2357159394:-1937807902
 * flags:#
 * no_webpage:flags.0?true
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 * reply_markup:flags.2?ReplyMarkup
 */
export interface BotInlineMessageTextS {
  _id: number;
  _values: [number, true, string, VectorS<MessageEntityT>, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineMessageTextS = r<new () => BotInlineMessageTextS>(
  0x8c7f65e2,
  "BotInlineMessageTextS",
  () => [
    "flags",
    IntRW,
    "no_webpage",
    Optional(TrueRW, 0, 0),
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 1),
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2)
  ]
);

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
export interface BotInlineResultS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): string;
  set_id(val: string): this;

  get_type(): string;
  set_type(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_description(): string;
  set_description(val: string): this;

  has_description(): boolean;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  get_thumb(): WebDocumentT;
  set_thumb(val: WebDocumentT): this;

  has_thumb(): boolean;

  get_content(): WebDocumentT;
  set_content(val: WebDocumentT): this;

  has_content(): boolean;

  get_send_message(): BotInlineMessageT;
  set_send_message(val: BotInlineMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineResultS = r<new () => BotInlineResultS>(
  0x11965f3a,
  "BotInlineResultS",
  () => [
    "flags",
    IntRW,
    "id",
    StringRW,
    "type",
    StringRW,
    "title",
    Optional(StringRW, 0, 1),
    "description",
    Optional(StringRW, 0, 2),
    "url",
    Optional(StringRW, 0, 3),
    "thumb",
    Optional(TypeRW(WebDocumentT), 0, 4),
    "content",
    Optional(TypeRW(WebDocumentT), 0, 5),
    "send_message",
    TypeRW(BotInlineMessageT)
  ]
);

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
export interface MessagesBotResultsS {
  _id: number;
  _values: [
    number,
    true,
    ProtoLong,
    string,
    InlineBotSwitchPmT,
    VectorS<BotInlineResultT>,
    number,
    VectorS<UserT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_gallery(): true;
  set_gallery(val: true): this;

  has_gallery(): boolean;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_next_offset(): string;
  set_next_offset(val: string): this;

  has_next_offset(): boolean;

  get_switch_pm(): InlineBotSwitchPmT;
  set_switch_pm(val: InlineBotSwitchPmT): this;

  has_switch_pm(): boolean;

  get_results(): VectorS<BotInlineResultT>;
  set_results(val: VectorS<BotInlineResultT>): this;

  get_cache_time(): number;
  set_cache_time(val: number): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesBotResultsS = r<new () => MessagesBotResultsS>(
  0x947ca848,
  "MessagesBotResultsS",
  () => [
    "flags",
    IntRW,
    "gallery",
    Optional(TrueRW, 0, 0),
    "query_id",
    LongRW,
    "next_offset",
    Optional(StringRW, 0, 1),
    "switch_pm",
    Optional(TypeRW(InlineBotSwitchPmT), 0, 2),
    "results",
    VectorRW(TypeRW(BotInlineResultT)),
    "cache_time",
    IntRW,
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * updateEditChannelMessage:Update
 * #1b3f4df7:457133559:457133559
 * message:Message
 * pts:int
 * pts_count:int
 */
export interface UpdateEditChannelMessageS {
  _id: number;
  _values: [MessageT, number, number];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateEditChannelMessageS = r<new () => UpdateEditChannelMessageS>(
  0x1b3f4df7,
  "UpdateEditChannelMessageS",
  () => ["message", TypeRW(MessageT), "pts", IntRW, "pts_count", IntRW]
);

/**
 * replyInlineMarkup:ReplyMarkup
 * #48a30254:1218642516:1218642516
 * rows:Vector<KeyboardButtonRow>
 */
export interface ReplyInlineMarkupS {
  _id: number;
  _values: [VectorS<KeyboardButtonRowT>];

  get_rows(): VectorS<KeyboardButtonRowT>;
  set_rows(val: VectorS<KeyboardButtonRowT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReplyInlineMarkupS = r<new () => ReplyInlineMarkupS>(
  0x48a30254,
  "ReplyInlineMarkupS",
  () => ["rows", VectorRW(TypeRW(KeyboardButtonRowT))]
);

/**
 * updateEditMessage:Update
 * #e40370a3:3825430691:-469536605
 * message:Message
 * pts:int
 * pts_count:int
 */
export interface UpdateEditMessageS {
  _id: number;
  _values: [MessageT, number, number];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateEditMessageS = r<new () => UpdateEditMessageS>(
  0xe40370a3,
  "UpdateEditMessageS",
  () => ["message", TypeRW(MessageT), "pts", IntRW, "pts_count", IntRW]
);

/**
 * inputBotInlineMessageMediaGeo:InputBotInlineMessage
 * #c1b15d65:3249626469:-1045340827
 * flags:#
 * geo_point:InputGeoPoint
 * period:int
 * reply_markup:flags.2?ReplyMarkup
 */
export interface InputBotInlineMessageMediaGeoS {
  _id: number;
  _values: [number, InputGeoPointT, number, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  get_period(): number;
  set_period(val: number): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageMediaGeoS = r<
  new () => InputBotInlineMessageMediaGeoS
>(0xc1b15d65, "InputBotInlineMessageMediaGeoS", () => [
  "flags",
  IntRW,
  "geo_point",
  TypeRW(InputGeoPointT),
  "period",
  IntRW,
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2)
]);

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
export interface InputBotInlineMessageMediaVenueS {
  _id: number;
  _values: [
    number,
    InputGeoPointT,
    string,
    string,
    string,
    string,
    string,
    ReplyMarkupT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  get_title(): string;
  set_title(val: string): this;

  get_address(): string;
  set_address(val: string): this;

  get_provider(): string;
  set_provider(val: string): this;

  get_venue_id(): string;
  set_venue_id(val: string): this;

  get_venue_type(): string;
  set_venue_type(val: string): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageMediaVenueS = r<
  new () => InputBotInlineMessageMediaVenueS
>(0x417bbf11, "InputBotInlineMessageMediaVenueS", () => [
  "flags",
  IntRW,
  "geo_point",
  TypeRW(InputGeoPointT),
  "title",
  StringRW,
  "address",
  StringRW,
  "provider",
  StringRW,
  "venue_id",
  StringRW,
  "venue_type",
  StringRW,
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2)
]);

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
export interface InputBotInlineMessageMediaContactS {
  _id: number;
  _values: [number, string, string, string, string, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_vcard(): string;
  set_vcard(val: string): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageMediaContactS = r<
  new () => InputBotInlineMessageMediaContactS
>(0xa6edbffd, "InputBotInlineMessageMediaContactS", () => [
  "flags",
  IntRW,
  "phone_number",
  StringRW,
  "first_name",
  StringRW,
  "last_name",
  StringRW,
  "vcard",
  StringRW,
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2)
]);

/**
 * botInlineMessageMediaGeo:BotInlineMessage
 * #b722de65:3072515685:-1222451611
 * flags:#
 * geo:GeoPoint
 * period:int
 * reply_markup:flags.2?ReplyMarkup
 */
export interface BotInlineMessageMediaGeoS {
  _id: number;
  _values: [number, GeoPointT, number, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  get_period(): number;
  set_period(val: number): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineMessageMediaGeoS = r<new () => BotInlineMessageMediaGeoS>(
  0xb722de65,
  "BotInlineMessageMediaGeoS",
  () => [
    "flags",
    IntRW,
    "geo",
    TypeRW(GeoPointT),
    "period",
    IntRW,
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2)
  ]
);

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
export interface BotInlineMessageMediaVenueS {
  _id: number;
  _values: [
    number,
    GeoPointT,
    string,
    string,
    string,
    string,
    string,
    ReplyMarkupT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  get_title(): string;
  set_title(val: string): this;

  get_address(): string;
  set_address(val: string): this;

  get_provider(): string;
  set_provider(val: string): this;

  get_venue_id(): string;
  set_venue_id(val: string): this;

  get_venue_type(): string;
  set_venue_type(val: string): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineMessageMediaVenueS = r<
  new () => BotInlineMessageMediaVenueS
>(0x8a86659c, "BotInlineMessageMediaVenueS", () => [
  "flags",
  IntRW,
  "geo",
  TypeRW(GeoPointT),
  "title",
  StringRW,
  "address",
  StringRW,
  "provider",
  StringRW,
  "venue_id",
  StringRW,
  "venue_type",
  StringRW,
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2)
]);

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
export interface BotInlineMessageMediaContactS {
  _id: number;
  _values: [number, string, string, string, string, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_phone_number(): string;
  set_phone_number(val: string): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_vcard(): string;
  set_vcard(val: string): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineMessageMediaContactS = r<
  new () => BotInlineMessageMediaContactS
>(0x18d1cdc2, "BotInlineMessageMediaContactS", () => [
  "flags",
  IntRW,
  "phone_number",
  StringRW,
  "first_name",
  StringRW,
  "last_name",
  StringRW,
  "vcard",
  StringRW,
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2)
]);

/**
 * inputBotInlineResultPhoto:InputBotInlineResult
 * #a8d864a7:2832753831:-1462213465
 * id:string
 * type:string
 * photo:InputPhoto
 * send_message:InputBotInlineMessage
 */
export interface InputBotInlineResultPhotoS {
  _id: number;
  _values: [string, string, InputPhotoT, InputBotInlineMessageT];

  get_id(): string;
  set_id(val: string): this;

  get_type(): string;
  set_type(val: string): this;

  get_photo(): InputPhotoT;
  set_photo(val: InputPhotoT): this;

  get_send_message(): InputBotInlineMessageT;
  set_send_message(val: InputBotInlineMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineResultPhotoS = r<new () => InputBotInlineResultPhotoS>(
  0xa8d864a7,
  "InputBotInlineResultPhotoS",
  () => [
    "id",
    StringRW,
    "type",
    StringRW,
    "photo",
    TypeRW(InputPhotoT),
    "send_message",
    TypeRW(InputBotInlineMessageT)
  ]
);

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
export interface InputBotInlineResultDocumentS {
  _id: number;
  _values: [
    number,
    string,
    string,
    string,
    string,
    InputDocumentT,
    InputBotInlineMessageT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): string;
  set_id(val: string): this;

  get_type(): string;
  set_type(val: string): this;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_description(): string;
  set_description(val: string): this;

  has_description(): boolean;

  get_document(): InputDocumentT;
  set_document(val: InputDocumentT): this;

  get_send_message(): InputBotInlineMessageT;
  set_send_message(val: InputBotInlineMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineResultDocumentS = r<
  new () => InputBotInlineResultDocumentS
>(0xfff8fdc4, "InputBotInlineResultDocumentS", () => [
  "flags",
  IntRW,
  "id",
  StringRW,
  "type",
  StringRW,
  "title",
  Optional(StringRW, 0, 1),
  "description",
  Optional(StringRW, 0, 2),
  "document",
  TypeRW(InputDocumentT),
  "send_message",
  TypeRW(InputBotInlineMessageT)
]);

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
export interface BotInlineMediaResultS {
  _id: number;
  _values: [
    number,
    string,
    string,
    PhotoT,
    DocumentT,
    string,
    string,
    BotInlineMessageT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_id(): string;
  set_id(val: string): this;

  get_type(): string;
  set_type(val: string): this;

  get_photo(): PhotoT;
  set_photo(val: PhotoT): this;

  has_photo(): boolean;

  get_document(): DocumentT;
  set_document(val: DocumentT): this;

  has_document(): boolean;

  get_title(): string;
  set_title(val: string): this;

  has_title(): boolean;

  get_description(): string;
  set_description(val: string): this;

  has_description(): boolean;

  get_send_message(): BotInlineMessageT;
  set_send_message(val: BotInlineMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BotInlineMediaResultS = r<new () => BotInlineMediaResultS>(
  0x17db940b,
  "BotInlineMediaResultS",
  () => [
    "flags",
    IntRW,
    "id",
    StringRW,
    "type",
    StringRW,
    "photo",
    Optional(TypeRW(PhotoT), 0, 0),
    "document",
    Optional(TypeRW(DocumentT), 0, 1),
    "title",
    Optional(StringRW, 0, 2),
    "description",
    Optional(StringRW, 0, 3),
    "send_message",
    TypeRW(BotInlineMessageT)
  ]
);

/**
 * messages.peerDialogs:messages.PeerDialogs
 * #3371c354:863093588:863093588
 * dialogs:Vector<Dialog>
 * messages:Vector<Message>
 * chats:Vector<Chat>
 * users:Vector<User>
 * state:updates.State
 */
export interface MessagesPeerDialogsS {
  _id: number;
  _values: [
    VectorS<DialogT>,
    VectorS<MessageT>,
    VectorS<ChatT>,
    VectorS<UserT>,
    UpdatesStateT
  ];

  get_dialogs(): VectorS<DialogT>;
  set_dialogs(val: VectorS<DialogT>): this;

  get_messages(): VectorS<MessageT>;
  set_messages(val: VectorS<MessageT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  get_state(): UpdatesStateT;
  set_state(val: UpdatesStateT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesPeerDialogsS = r<new () => MessagesPeerDialogsS>(
  0x3371c354,
  "MessagesPeerDialogsS",
  () => [
    "dialogs",
    VectorRW(TypeRW(DialogT)),
    "messages",
    VectorRW(TypeRW(MessageT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT)),
    "state",
    TypeRW(UpdatesStateT)
  ]
);

/**
 * contacts.topPeers:contacts.TopPeers
 * #70b772a8:1891070632:1891070632
 * categories:Vector<TopPeerCategoryPeers>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface ContactsTopPeersS {
  _id: number;
  _values: [VectorS<TopPeerCategoryPeersT>, VectorS<ChatT>, VectorS<UserT>];

  get_categories(): VectorS<TopPeerCategoryPeersT>;
  set_categories(val: VectorS<TopPeerCategoryPeersT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsTopPeersS = r<new () => ContactsTopPeersS>(
  0x70b772a8,
  "ContactsTopPeersS",
  () => [
    "categories",
    VectorRW(TypeRW(TopPeerCategoryPeersT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * inputMessageEntityMentionName:MessageEntity
 * #208e68c9:546203849:546203849
 * offset:int
 * length:int
 * user_id:InputUser
 */
export interface InputMessageEntityMentionNameS {
  _id: number;
  _values: [number, number, InputUserT];

  get_offset(): number;
  set_offset(val: number): this;

  get_length(): number;
  set_length(val: number): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMessageEntityMentionNameS = r<
  new () => InputMessageEntityMentionNameS
>(0x208e68c9, "InputMessageEntityMentionNameS", () => [
  "offset",
  IntRW,
  "length",
  IntRW,
  "user_id",
  TypeRW(InputUserT)
]);

/**
 * updateDraftMessage:Update
 * #ee2bb969:3995842921:-299124375
 * peer:Peer
 * draft:DraftMessage
 */
export interface UpdateDraftMessageS {
  _id: number;
  _values: [PeerT, DraftMessageT];

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_draft(): DraftMessageT;
  set_draft(val: DraftMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateDraftMessageS = r<new () => UpdateDraftMessageS>(
  0xee2bb969,
  "UpdateDraftMessageS",
  () => ["peer", TypeRW(PeerT), "draft", TypeRW(DraftMessageT)]
);

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
export interface DraftMessageS {
  _id: number;
  _values: [number, true, number, string, VectorS<MessageEntityT>, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DraftMessageS = r<new () => DraftMessageS>(
  0xfd8e711f,
  "DraftMessageS",
  () => [
    "flags",
    IntRW,
    "no_webpage",
    Optional(TrueRW, 0, 1),
    "reply_to_msg_id",
    Optional(IntRW, 0, 0),
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3),
    "date",
    IntRW
  ]
);

/**
 * inputBotInlineResultGame:InputBotInlineResult
 * #4fa417f2:1336154098:1336154098
 * id:string
 * short_name:string
 * send_message:InputBotInlineMessage
 */
export interface InputBotInlineResultGameS {
  _id: number;
  _values: [string, string, InputBotInlineMessageT];

  get_id(): string;
  set_id(val: string): this;

  get_short_name(): string;
  set_short_name(val: string): this;

  get_send_message(): InputBotInlineMessageT;
  set_send_message(val: InputBotInlineMessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineResultGameS = r<new () => InputBotInlineResultGameS>(
  0x4fa417f2,
  "InputBotInlineResultGameS",
  () => [
    "id",
    StringRW,
    "short_name",
    StringRW,
    "send_message",
    TypeRW(InputBotInlineMessageT)
  ]
);

/**
 * inputBotInlineMessageGame:InputBotInlineMessage
 * #4b425864:1262639204:1262639204
 * flags:#
 * reply_markup:flags.2?ReplyMarkup
 */
export interface InputBotInlineMessageGameS {
  _id: number;
  _values: [number, ReplyMarkupT];

  get_flags(): number;
  set_flags(val: number): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputBotInlineMessageGameS = r<new () => InputBotInlineMessageGameS>(
  0x4b425864,
  "InputBotInlineMessageGameS",
  () => ["flags", IntRW, "reply_markup", Optional(TypeRW(ReplyMarkupT), 0, 2)]
);

/**
 * inputMediaGame:InputMedia
 * #d33f43f3:3544138739:-750828557
 * id:InputGame
 */
export interface InputMediaGameS {
  _id: number;
  _values: [InputGameT];

  get_id(): InputGameT;
  set_id(val: InputGameT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputMediaGameS = r<new () => InputMediaGameS>(
  0xd33f43f3,
  "InputMediaGameS",
  () => ["id", TypeRW(InputGameT)]
);

/**
 * inputGameShortName:InputGame
 * #c331e80a:3274827786:-1020139510
 * bot_id:InputUser
 * short_name:string
 */
export interface InputGameShortNameS {
  _id: number;
  _values: [InputUserT, string];

  get_bot_id(): InputUserT;
  set_bot_id(val: InputUserT): this;

  get_short_name(): string;
  set_short_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputGameShortNameS = r<new () => InputGameShortNameS>(
  0xc331e80a,
  "InputGameShortNameS",
  () => ["bot_id", TypeRW(InputUserT), "short_name", StringRW]
);

/**
 * updateChannelWebPage:Update
 * #40771900:1081547008:1081547008
 * channel_id:int
 * webpage:WebPage
 * pts:int
 * pts_count:int
 */
export interface UpdateChannelWebPageS {
  _id: number;
  _values: [number, WebPageT, number, number];

  get_channel_id(): number;
  set_channel_id(val: number): this;

  get_webpage(): WebPageT;
  set_webpage(val: WebPageT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_pts_count(): number;
  set_pts_count(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateChannelWebPageS = r<new () => UpdateChannelWebPageS>(
  0x40771900,
  "UpdateChannelWebPageS",
  () => [
    "channel_id",
    IntRW,
    "webpage",
    TypeRW(WebPageT),
    "pts",
    IntRW,
    "pts_count",
    IntRW
  ]
);

/**
 * messages.chatsSlice:messages.Chats
 * #9cd81144:2631405892:-1663561404
 * count:int
 * chats:Vector<Chat>
 */
export interface MessagesChatsSliceS {
  _id: number;
  _values: [number, VectorS<ChatT>];

  get_count(): number;
  set_count(val: number): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesChatsSliceS = r<new () => MessagesChatsSliceS>(
  0x9cd81144,
  "MessagesChatsSliceS",
  () => ["count", IntRW, "chats", VectorRW(TypeRW(ChatT))]
);

/**
 * textBold:RichText
 * #6724abc4:1730456516:1730456516
 * text:RichText
 */
export interface TextBoldS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextBoldS = r<new () => TextBoldS>(0x6724abc4, "TextBoldS", () => [
  "text",
  TypeRW(RichTextT)
]);

/**
 * textItalic:RichText
 * #d912a59c:3641877916:-653089380
 * text:RichText
 */
export interface TextItalicS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextItalicS = r<new () => TextItalicS>(
  0xd912a59c,
  "TextItalicS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textUnderline:RichText
 * #c12622c4:3240501956:-1054465340
 * text:RichText
 */
export interface TextUnderlineS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextUnderlineS = r<new () => TextUnderlineS>(
  0xc12622c4,
  "TextUnderlineS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textStrike:RichText
 * #9bf8bb95:2616769429:-1678197867
 * text:RichText
 */
export interface TextStrikeS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextStrikeS = r<new () => TextStrikeS>(
  0x9bf8bb95,
  "TextStrikeS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textFixed:RichText
 * #6c3f19b9:1816074681:1816074681
 * text:RichText
 */
export interface TextFixedS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextFixedS = r<new () => TextFixedS>(
  0x6c3f19b9,
  "TextFixedS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textUrl:RichText
 * #3c2884c1:1009288385:1009288385
 * text:RichText
 * url:string
 * webpage_id:long
 */
export interface TextUrlS {
  _id: number;
  _values: [RichTextT, string, ProtoLong];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_url(): string;
  set_url(val: string): this;

  get_webpage_id(): ProtoLong;
  set_webpage_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextUrlS = r<new () => TextUrlS>(0x3c2884c1, "TextUrlS", () => [
  "text",
  TypeRW(RichTextT),
  "url",
  StringRW,
  "webpage_id",
  LongRW
]);

/**
 * textEmail:RichText
 * #de5a0dd6:3730443734:-564523562
 * text:RichText
 * email:string
 */
export interface TextEmailS {
  _id: number;
  _values: [RichTextT, string];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_email(): string;
  set_email(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextEmailS = r<new () => TextEmailS>(
  0xde5a0dd6,
  "TextEmailS",
  () => ["text", TypeRW(RichTextT), "email", StringRW]
);

/**
 * textConcat:RichText
 * #7e6260d7:2120376535:2120376535
 * texts:Vector<RichText>
 */
export interface TextConcatS {
  _id: number;
  _values: [VectorS<RichTextT>];

  get_texts(): VectorS<RichTextT>;
  set_texts(val: VectorS<RichTextT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextConcatS = r<new () => TextConcatS>(
  0x7e6260d7,
  "TextConcatS",
  () => ["texts", VectorRW(TypeRW(RichTextT))]
);

/**
 * pageBlockTitle:PageBlock
 * #70abc3fd:1890305021:1890305021
 * text:RichText
 */
export interface PageBlockTitleS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockTitleS = r<new () => PageBlockTitleS>(
  0x70abc3fd,
  "PageBlockTitleS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageBlockSubtitle:PageBlock
 * #8ffa9a1f:2415565343:-1879401953
 * text:RichText
 */
export interface PageBlockSubtitleS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockSubtitleS = r<new () => PageBlockSubtitleS>(
  0x8ffa9a1f,
  "PageBlockSubtitleS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageBlockAuthorDate:PageBlock
 * #baafe5e0:3132089824:-1162877472
 * author:RichText
 * published_date:int
 */
export interface PageBlockAuthorDateS {
  _id: number;
  _values: [RichTextT, number];

  get_author(): RichTextT;
  set_author(val: RichTextT): this;

  get_published_date(): number;
  set_published_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockAuthorDateS = r<new () => PageBlockAuthorDateS>(
  0xbaafe5e0,
  "PageBlockAuthorDateS",
  () => ["author", TypeRW(RichTextT), "published_date", IntRW]
);

/**
 * pageBlockHeader:PageBlock
 * #bfd064ec:3218105580:-1076861716
 * text:RichText
 */
export interface PageBlockHeaderS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockHeaderS = r<new () => PageBlockHeaderS>(
  0xbfd064ec,
  "PageBlockHeaderS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageBlockSubheader:PageBlock
 * #f12bb6e1:4046173921:-248793375
 * text:RichText
 */
export interface PageBlockSubheaderS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockSubheaderS = r<new () => PageBlockSubheaderS>(
  0xf12bb6e1,
  "PageBlockSubheaderS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageBlockParagraph:PageBlock
 * #467a0766:1182402406:1182402406
 * text:RichText
 */
export interface PageBlockParagraphS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockParagraphS = r<new () => PageBlockParagraphS>(
  0x467a0766,
  "PageBlockParagraphS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageBlockPreformatted:PageBlock
 * #c070d93e:3228621118:-1066346178
 * text:RichText
 * language:string
 */
export interface PageBlockPreformattedS {
  _id: number;
  _values: [RichTextT, string];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_language(): string;
  set_language(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockPreformattedS = r<new () => PageBlockPreformattedS>(
  0xc070d93e,
  "PageBlockPreformattedS",
  () => ["text", TypeRW(RichTextT), "language", StringRW]
);

/**
 * pageBlockFooter:PageBlock
 * #48870999:1216809369:1216809369
 * text:RichText
 */
export interface PageBlockFooterS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockFooterS = r<new () => PageBlockFooterS>(
  0x48870999,
  "PageBlockFooterS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageBlockList:PageBlock
 * #e4e88011:3840442385:-454524911
 * items:Vector<PageListItem>
 */
export interface PageBlockListS {
  _id: number;
  _values: [VectorS<PageListItemT>];

  get_items(): VectorS<PageListItemT>;
  set_items(val: VectorS<PageListItemT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockListS = r<new () => PageBlockListS>(
  0xe4e88011,
  "PageBlockListS",
  () => ["items", VectorRW(TypeRW(PageListItemT))]
);

/**
 * pageBlockBlockquote:PageBlock
 * #263d7c26:641563686:641563686
 * text:RichText
 * caption:RichText
 */
export interface PageBlockBlockquoteS {
  _id: number;
  _values: [RichTextT, RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_caption(): RichTextT;
  set_caption(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockBlockquoteS = r<new () => PageBlockBlockquoteS>(
  0x263d7c26,
  "PageBlockBlockquoteS",
  () => ["text", TypeRW(RichTextT), "caption", TypeRW(RichTextT)]
);

/**
 * pageBlockPullquote:PageBlock
 * #4f4456d3:1329878739:1329878739
 * text:RichText
 * caption:RichText
 */
export interface PageBlockPullquoteS {
  _id: number;
  _values: [RichTextT, RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_caption(): RichTextT;
  set_caption(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockPullquoteS = r<new () => PageBlockPullquoteS>(
  0x4f4456d3,
  "PageBlockPullquoteS",
  () => ["text", TypeRW(RichTextT), "caption", TypeRW(RichTextT)]
);

/**
 * pageBlockPhoto:PageBlock
 * #1759c560:391759200:391759200
 * flags:#
 * photo_id:long
 * caption:PageCaption
 * url:flags.0?string
 * webpage_id:flags.0?long
 */
export interface PageBlockPhotoS {
  _id: number;
  _values: [number, ProtoLong, PageCaptionT, string, ProtoLong];

  get_flags(): number;
  set_flags(val: number): this;

  get_photo_id(): ProtoLong;
  set_photo_id(val: ProtoLong): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  get_webpage_id(): ProtoLong;
  set_webpage_id(val: ProtoLong): this;

  has_webpage_id(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockPhotoS = r<new () => PageBlockPhotoS>(
  0x1759c560,
  "PageBlockPhotoS",
  () => [
    "flags",
    IntRW,
    "photo_id",
    LongRW,
    "caption",
    TypeRW(PageCaptionT),
    "url",
    Optional(StringRW, 0, 0),
    "webpage_id",
    Optional(LongRW, 0, 0)
  ]
);

/**
 * pageBlockVideo:PageBlock
 * #7c8fe7b6:2089805750:2089805750
 * flags:#
 * autoplay:flags.0?true
 * loop:flags.1?true
 * video_id:long
 * caption:PageCaption
 */
export interface PageBlockVideoS {
  _id: number;
  _values: [number, true, true, ProtoLong, PageCaptionT];

  get_flags(): number;
  set_flags(val: number): this;

  get_autoplay(): true;
  set_autoplay(val: true): this;

  has_autoplay(): boolean;

  get_loop(): true;
  set_loop(val: true): this;

  has_loop(): boolean;

  get_video_id(): ProtoLong;
  set_video_id(val: ProtoLong): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockVideoS = r<new () => PageBlockVideoS>(
  0x7c8fe7b6,
  "PageBlockVideoS",
  () => [
    "flags",
    IntRW,
    "autoplay",
    Optional(TrueRW, 0, 0),
    "loop",
    Optional(TrueRW, 0, 1),
    "video_id",
    LongRW,
    "caption",
    TypeRW(PageCaptionT)
  ]
);

/**
 * pageBlockCover:PageBlock
 * #39f23300:972174080:972174080
 * cover:PageBlock
 */
export interface PageBlockCoverS {
  _id: number;
  _values: [PageBlockT];

  get_cover(): PageBlockT;
  set_cover(val: PageBlockT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockCoverS = r<new () => PageBlockCoverS>(
  0x39f23300,
  "PageBlockCoverS",
  () => ["cover", TypeRW(PageBlockT)]
);

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
export interface PageBlockEmbedS {
  _id: number;
  _values: [
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

  get_flags(): number;
  set_flags(val: number): this;

  get_full_width(): true;
  set_full_width(val: true): this;

  has_full_width(): boolean;

  get_allow_scrolling(): true;
  set_allow_scrolling(val: true): this;

  has_allow_scrolling(): boolean;

  get_url(): string;
  set_url(val: string): this;

  has_url(): boolean;

  get_html(): string;
  set_html(val: string): this;

  has_html(): boolean;

  get_poster_photo_id(): ProtoLong;
  set_poster_photo_id(val: ProtoLong): this;

  has_poster_photo_id(): boolean;

  get_w(): number;
  set_w(val: number): this;

  has_w(): boolean;

  get_h(): number;
  set_h(val: number): this;

  has_h(): boolean;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockEmbedS = r<new () => PageBlockEmbedS>(
  0xa8718dc5,
  "PageBlockEmbedS",
  () => [
    "flags",
    IntRW,
    "full_width",
    Optional(TrueRW, 0, 0),
    "allow_scrolling",
    Optional(TrueRW, 0, 3),
    "url",
    Optional(StringRW, 0, 1),
    "html",
    Optional(StringRW, 0, 2),
    "poster_photo_id",
    Optional(LongRW, 0, 4),
    "w",
    Optional(IntRW, 0, 5),
    "h",
    Optional(IntRW, 0, 5),
    "caption",
    TypeRW(PageCaptionT)
  ]
);

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
export interface PageBlockEmbedPostS {
  _id: number;
  _values: [
    string,
    ProtoLong,
    ProtoLong,
    string,
    number,
    VectorS<PageBlockT>,
    PageCaptionT
  ];

  get_url(): string;
  set_url(val: string): this;

  get_webpage_id(): ProtoLong;
  set_webpage_id(val: ProtoLong): this;

  get_author_photo_id(): ProtoLong;
  set_author_photo_id(val: ProtoLong): this;

  get_author(): string;
  set_author(val: string): this;

  get_date(): number;
  set_date(val: number): this;

  get_blocks(): VectorS<PageBlockT>;
  set_blocks(val: VectorS<PageBlockT>): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockEmbedPostS = r<new () => PageBlockEmbedPostS>(
  0xf259a80b,
  "PageBlockEmbedPostS",
  () => [
    "url",
    StringRW,
    "webpage_id",
    LongRW,
    "author_photo_id",
    LongRW,
    "author",
    StringRW,
    "date",
    IntRW,
    "blocks",
    VectorRW(TypeRW(PageBlockT)),
    "caption",
    TypeRW(PageCaptionT)
  ]
);

/**
 * pageBlockCollage:PageBlock
 * #65a0fa4d:1705048653:1705048653
 * items:Vector<PageBlock>
 * caption:PageCaption
 */
export interface PageBlockCollageS {
  _id: number;
  _values: [VectorS<PageBlockT>, PageCaptionT];

  get_items(): VectorS<PageBlockT>;
  set_items(val: VectorS<PageBlockT>): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockCollageS = r<new () => PageBlockCollageS>(
  0x65a0fa4d,
  "PageBlockCollageS",
  () => ["items", VectorRW(TypeRW(PageBlockT)), "caption", TypeRW(PageCaptionT)]
);

/**
 * pageBlockSlideshow:PageBlock
 * #31f9590:52401552:52401552
 * items:Vector<PageBlock>
 * caption:PageCaption
 */
export interface PageBlockSlideshowS {
  _id: number;
  _values: [VectorS<PageBlockT>, PageCaptionT];

  get_items(): VectorS<PageBlockT>;
  set_items(val: VectorS<PageBlockT>): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockSlideshowS = r<new () => PageBlockSlideshowS>(
  0x31f9590,
  "PageBlockSlideshowS",
  () => ["items", VectorRW(TypeRW(PageBlockT)), "caption", TypeRW(PageCaptionT)]
);

/**
 * payments.paymentResult:payments.PaymentResult
 * #4e5f810d:1314881805:1314881805
 * updates:Updates
 */
export interface PaymentsPaymentResultS {
  _id: number;
  _values: [UpdatesT];

  get_updates(): UpdatesT;
  set_updates(val: UpdatesT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PaymentsPaymentResultS = r<new () => PaymentsPaymentResultS>(
  0x4e5f810d,
  "PaymentsPaymentResultS",
  () => ["updates", TypeRW(UpdatesT)]
);

/**
 * pageBlockChannel:PageBlock
 * #ef1751b5:4011282869:-283684427
 * channel:Chat
 */
export interface PageBlockChannelS {
  _id: number;
  _values: [ChatT];

  get_channel(): ChatT;
  set_channel(val: ChatT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockChannelS = r<new () => PageBlockChannelS>(
  0xef1751b5,
  "PageBlockChannelS",
  () => ["channel", TypeRW(ChatT)]
);

/**
 * channelAdminLogEventActionUpdatePinned:ChannelAdminLogEventAction
 * #e9e82c18:3924306968:-370660328
 * message:Message
 */
export interface ChannelAdminLogEventActionUpdatePinnedS {
  _id: number;
  _values: [MessageT];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionUpdatePinnedS = r<
  new () => ChannelAdminLogEventActionUpdatePinnedS
>(0xe9e82c18, "ChannelAdminLogEventActionUpdatePinnedS", () => [
  "message",
  TypeRW(MessageT)
]);

/**
 * channelAdminLogEventActionEditMessage:ChannelAdminLogEventAction
 * #709b2405:1889215493:1889215493
 * prev_message:Message
 * new_message:Message
 */
export interface ChannelAdminLogEventActionEditMessageS {
  _id: number;
  _values: [MessageT, MessageT];

  get_prev_message(): MessageT;
  set_prev_message(val: MessageT): this;

  get_new_message(): MessageT;
  set_new_message(val: MessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionEditMessageS = r<
  new () => ChannelAdminLogEventActionEditMessageS
>(0x709b2405, "ChannelAdminLogEventActionEditMessageS", () => [
  "prev_message",
  TypeRW(MessageT),
  "new_message",
  TypeRW(MessageT)
]);

/**
 * channelAdminLogEventActionDeleteMessage:ChannelAdminLogEventAction
 * #42e047bb:1121994683:1121994683
 * message:Message
 */
export interface ChannelAdminLogEventActionDeleteMessageS {
  _id: number;
  _values: [MessageT];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionDeleteMessageS = r<
  new () => ChannelAdminLogEventActionDeleteMessageS
>(0x42e047bb, "ChannelAdminLogEventActionDeleteMessageS", () => [
  "message",
  TypeRW(MessageT)
]);

/**
 * channelAdminLogEvent:ChannelAdminLogEvent
 * #3b5a3e40:995769920:995769920
 * id:long
 * date:int
 * user_id:int
 * action:ChannelAdminLogEventAction
 */
export interface ChannelAdminLogEventS {
  _id: number;
  _values: [ProtoLong, number, number, ChannelAdminLogEventActionT];

  get_id(): ProtoLong;
  set_id(val: ProtoLong): this;

  get_date(): number;
  set_date(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  get_action(): ChannelAdminLogEventActionT;
  set_action(val: ChannelAdminLogEventActionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventS = r<new () => ChannelAdminLogEventS>(
  0x3b5a3e40,
  "ChannelAdminLogEventS",
  () => [
    "id",
    LongRW,
    "date",
    IntRW,
    "user_id",
    IntRW,
    "action",
    TypeRW(ChannelAdminLogEventActionT)
  ]
);

/**
 * channels.adminLogResults:channels.AdminLogResults
 * #ed8af74d:3985307469:-309659827
 * events:Vector<ChannelAdminLogEvent>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface ChannelsAdminLogResultsS {
  _id: number;
  _values: [VectorS<ChannelAdminLogEventT>, VectorS<ChatT>, VectorS<UserT>];

  get_events(): VectorS<ChannelAdminLogEventT>;
  set_events(val: VectorS<ChannelAdminLogEventT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsAdminLogResultsS = r<new () => ChannelsAdminLogResultsS>(
  0xed8af74d,
  "ChannelsAdminLogResultsS",
  () => [
    "events",
    VectorRW(TypeRW(ChannelAdminLogEventT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * pageBlockAudio:PageBlock
 * #804361ea:2151899626:-2143067670
 * audio_id:long
 * caption:PageCaption
 */
export interface PageBlockAudioS {
  _id: number;
  _values: [ProtoLong, PageCaptionT];

  get_audio_id(): ProtoLong;
  set_audio_id(val: ProtoLong): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockAudioS = r<new () => PageBlockAudioS>(
  0x804361ea,
  "PageBlockAudioS",
  () => ["audio_id", LongRW, "caption", TypeRW(PageCaptionT)]
);

/**
 * recentMeUrlChatInvite:RecentMeUrl
 * #eb49081d:3947431965:-347535331
 * url:string
 * chat_invite:ChatInvite
 */
export interface RecentMeUrlChatInviteS {
  _id: number;
  _values: [string, ChatInviteT];

  get_url(): string;
  set_url(val: string): this;

  get_chat_invite(): ChatInviteT;
  set_chat_invite(val: ChatInviteT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RecentMeUrlChatInviteS = r<new () => RecentMeUrlChatInviteS>(
  0xeb49081d,
  "RecentMeUrlChatInviteS",
  () => ["url", StringRW, "chat_invite", TypeRW(ChatInviteT)]
);

/**
 * help.recentMeUrls:help.RecentMeUrls
 * #e0310d7:235081943:235081943
 * urls:Vector<RecentMeUrl>
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface HelpRecentMeUrlsS {
  _id: number;
  _values: [VectorS<RecentMeUrlT>, VectorS<ChatT>, VectorS<UserT>];

  get_urls(): VectorS<RecentMeUrlT>;
  set_urls(val: VectorS<RecentMeUrlT>): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpRecentMeUrlsS = r<new () => HelpRecentMeUrlsS>(
  0xe0310d7,
  "HelpRecentMeUrlsS",
  () => [
    "urls",
    VectorRW(TypeRW(RecentMeUrlT)),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * inputSingleMedia:InputSingleMedia
 * #1cc6e91f:482797855:482797855
 * flags:#
 * media:InputMedia
 * random_id:long
 * message:string
 * entities:flags.0?Vector<MessageEntity>
 */
export interface InputSingleMediaS {
  _id: number;
  _values: [number, InputMediaT, ProtoLong, string, VectorS<MessageEntityT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_media(): InputMediaT;
  set_media(val: InputMediaT): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputSingleMediaS = r<new () => InputSingleMediaS>(
  0x1cc6e91f,
  "InputSingleMediaS",
  () => [
    "flags",
    IntRW,
    "media",
    TypeRW(InputMediaT),
    "random_id",
    LongRW,
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 0)
  ]
);

/**
 * inputDialogPeer:InputDialogPeer
 * #fcaafeb7:4239064759:-55902537
 * peer:InputPeer
 */
export interface InputDialogPeerS {
  _id: number;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputDialogPeerS = r<new () => InputDialogPeerS>(
  0xfcaafeb7,
  "InputDialogPeerS",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * help.proxyDataPromo:help.ProxyData
 * #2bf7ee23:737668643:737668643
 * expires:int
 * peer:Peer
 * chats:Vector<Chat>
 * users:Vector<User>
 */
export interface HelpProxyDataPromoS {
  _id: number;
  _values: [number, PeerT, VectorS<ChatT>, VectorS<UserT>];

  get_expires(): number;
  set_expires(val: number): this;

  get_peer(): PeerT;
  set_peer(val: PeerT): this;

  get_chats(): VectorS<ChatT>;
  set_chats(val: VectorS<ChatT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpProxyDataPromoS = r<new () => HelpProxyDataPromoS>(
  0x2bf7ee23,
  "HelpProxyDataPromoS",
  () => [
    "expires",
    IntRW,
    "peer",
    TypeRW(PeerT),
    "chats",
    VectorRW(TypeRW(ChatT)),
    "users",
    VectorRW(TypeRW(UserT))
  ]
);

/**
 * help.termsOfServiceUpdate:help.TermsOfServiceUpdate
 * #28ecf961:686618977:686618977
 * expires:int
 * terms_of_service:help.TermsOfService
 */
export interface HelpTermsOfServiceUpdateS {
  _id: number;
  _values: [number, HelpTermsOfServiceT];

  get_expires(): number;
  set_expires(val: number): this;

  get_terms_of_service(): HelpTermsOfServiceT;
  set_terms_of_service(val: HelpTermsOfServiceT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpTermsOfServiceUpdateS = r<new () => HelpTermsOfServiceUpdateS>(
  0x28ecf961,
  "HelpTermsOfServiceUpdateS",
  () => ["expires", IntRW, "terms_of_service", TypeRW(HelpTermsOfServiceT)]
);

/**
 * account.authorizationForm:account.AuthorizationForm
 * #ad2e1cd8:2905480408:-1389486888
 * flags:#
 * required_types:Vector<SecureRequiredType>
 * values:Vector<SecureValue>
 * errors:Vector<SecureValueError>
 * users:Vector<User>
 * privacy_policy_url:flags.0?string
 */
export interface AccountAuthorizationFormS {
  _id: number;
  _values: [
    number,
    VectorS<SecureRequiredTypeT>,
    VectorS<SecureValueT>,
    VectorS<SecureValueErrorT>,
    VectorS<UserT>,
    string
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_required_types(): VectorS<SecureRequiredTypeT>;
  set_required_types(val: VectorS<SecureRequiredTypeT>): this;

  get_values(): VectorS<SecureValueT>;
  set_values(val: VectorS<SecureValueT>): this;

  get_errors(): VectorS<SecureValueErrorT>;
  set_errors(val: VectorS<SecureValueErrorT>): this;

  get_users(): VectorS<UserT>;
  set_users(val: VectorS<UserT>): this;

  get_privacy_policy_url(): string;
  set_privacy_policy_url(val: string): this;

  has_privacy_policy_url(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountAuthorizationFormS = r<new () => AccountAuthorizationFormS>(
  0xad2e1cd8,
  "AccountAuthorizationFormS",
  () => [
    "flags",
    IntRW,
    "required_types",
    VectorRW(TypeRW(SecureRequiredTypeT)),
    "values",
    VectorRW(TypeRW(SecureValueT)),
    "errors",
    VectorRW(TypeRW(SecureValueErrorT)),
    "users",
    VectorRW(TypeRW(UserT)),
    "privacy_policy_url",
    Optional(StringRW, 0, 0)
  ]
);

/**
 * help.deepLinkInfo:help.DeepLinkInfo
 * #6a4ee832:1783556146:1783556146
 * flags:#
 * update_app:flags.0?true
 * message:string
 * entities:flags.1?Vector<MessageEntity>
 */
export interface HelpDeepLinkInfoS {
  _id: number;
  _values: [number, true, string, VectorS<MessageEntityT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_update_app(): true;
  set_update_app(val: true): this;

  has_update_app(): boolean;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpDeepLinkInfoS = r<new () => HelpDeepLinkInfoS>(
  0x6a4ee832,
  "HelpDeepLinkInfoS",
  () => [
    "flags",
    IntRW,
    "update_app",
    Optional(TrueRW, 0, 0),
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 1)
  ]
);

/**
 * secureRequiredTypeOneOf:SecureRequiredType
 * #27477b4:41187252:41187252
 * types:Vector<SecureRequiredType>
 */
export interface SecureRequiredTypeOneOfS {
  _id: number;
  _values: [VectorS<SecureRequiredTypeT>];

  get_types(): VectorS<SecureRequiredTypeT>;
  set_types(val: VectorS<SecureRequiredTypeT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SecureRequiredTypeOneOfS = r<new () => SecureRequiredTypeOneOfS>(
  0x27477b4,
  "SecureRequiredTypeOneOfS",
  () => ["types", VectorRW(TypeRW(SecureRequiredTypeT))]
);

/**
 * inputAppEvent:InputAppEvent
 * #1d1b1245:488313413:488313413
 * time:double
 * type:string
 * peer:long
 * data:JSONValue
 */
export interface InputAppEventS {
  _id: number;
  _values: [number, string, ProtoLong, JsonValueT];

  get_time(): number;
  set_time(val: number): this;

  get_type(): string;
  set_type(val: string): this;

  get_peer(): ProtoLong;
  set_peer(val: ProtoLong): this;

  get_data(): JsonValueT;
  set_data(val: JsonValueT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputAppEventS = r<new () => InputAppEventS>(
  0x1d1b1245,
  "InputAppEventS",
  () => [
    "time",
    DoubleRW,
    "type",
    StringRW,
    "peer",
    LongRW,
    "data",
    TypeRW(JsonValueT)
  ]
);

/**
 * jsonObjectValue:JSONObjectValue
 * #c0de1bd9:3235781593:-1059185703
 * key:string
 * value:JSONValue
 */
export interface JsonObjectValueS {
  _id: number;
  _values: [string, JsonValueT];

  get_key(): string;
  set_key(val: string): this;

  get_value(): JsonValueT;
  set_value(val: JsonValueT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonObjectValueS = r<new () => JsonObjectValueS>(
  0xc0de1bd9,
  "JsonObjectValueS",
  () => ["key", StringRW, "value", TypeRW(JsonValueT)]
);

/**
 * jsonArray:JSONValue
 * #f7444763:4148447075:-146520221
 * value:Vector<JSONValue>
 */
export interface JsonArrayS {
  _id: number;
  _values: [VectorS<JsonValueT>];

  get_value(): VectorS<JsonValueT>;
  set_value(val: VectorS<JsonValueT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonArrayS = r<new () => JsonArrayS>(
  0xf7444763,
  "JsonArrayS",
  () => ["value", VectorRW(TypeRW(JsonValueT))]
);

/**
 * jsonObject:JSONValue
 * #99c1d49d:2579616925:-1715350371
 * value:Vector<JSONObjectValue>
 */
export interface JsonObjectS {
  _id: number;
  _values: [VectorS<JsonObjectValueT>];

  get_value(): VectorS<JsonObjectValueT>;
  set_value(val: VectorS<JsonObjectValueT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let JsonObjectS = r<new () => JsonObjectS>(
  0x99c1d49d,
  "JsonObjectS",
  () => ["value", VectorRW(TypeRW(JsonObjectValueT))]
);

/**
 * textSubscript:RichText
 * #ed6a8504:3983181060:-311786236
 * text:RichText
 */
export interface TextSubscriptS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextSubscriptS = r<new () => TextSubscriptS>(
  0xed6a8504,
  "TextSubscriptS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textSuperscript:RichText
 * #c7fb5e01:3355139585:-939827711
 * text:RichText
 */
export interface TextSuperscriptS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextSuperscriptS = r<new () => TextSuperscriptS>(
  0xc7fb5e01,
  "TextSuperscriptS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textMarked:RichText
 * #34b8621:55281185:55281185
 * text:RichText
 */
export interface TextMarkedS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextMarkedS = r<new () => TextMarkedS>(
  0x34b8621,
  "TextMarkedS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * textPhone:RichText
 * #1ccb966a:483104362:483104362
 * text:RichText
 * phone:string
 */
export interface TextPhoneS {
  _id: number;
  _values: [RichTextT, string];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_phone(): string;
  set_phone(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextPhoneS = r<new () => TextPhoneS>(
  0x1ccb966a,
  "TextPhoneS",
  () => ["text", TypeRW(RichTextT), "phone", StringRW]
);

/**
 * pageBlockKicker:PageBlock
 * #1e148390:504660880:504660880
 * text:RichText
 */
export interface PageBlockKickerS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockKickerS = r<new () => PageBlockKickerS>(
  0x1e148390,
  "PageBlockKickerS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageTableCell:PageTableCell
 * #34566b6a:878078826:878078826
 * flags:#
 * header:flags.0?true
 * align_center:flags.3?true
 * align_right:flags.4?true
 * valign_middle:flags.5?true
 * valign_bottom:flags.6?true
 * text:flags.7?RichText
 * colspan:flags.1?int
 * rowspan:flags.2?int
 */
export interface PageTableCellS {
  _id: number;
  _values: [number, true, true, true, true, true, RichTextT, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_header(): true;
  set_header(val: true): this;

  has_header(): boolean;

  get_align_center(): true;
  set_align_center(val: true): this;

  has_align_center(): boolean;

  get_align_right(): true;
  set_align_right(val: true): this;

  has_align_right(): boolean;

  get_valign_middle(): true;
  set_valign_middle(val: true): this;

  has_valign_middle(): boolean;

  get_valign_bottom(): true;
  set_valign_bottom(val: true): this;

  has_valign_bottom(): boolean;

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  has_text(): boolean;

  get_colspan(): number;
  set_colspan(val: number): this;

  has_colspan(): boolean;

  get_rowspan(): number;
  set_rowspan(val: number): this;

  has_rowspan(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageTableCellS = r<new () => PageTableCellS>(
  0x34566b6a,
  "PageTableCellS",
  () => [
    "flags",
    IntRW,
    "header",
    Optional(TrueRW, 0, 0),
    "align_center",
    Optional(TrueRW, 0, 3),
    "align_right",
    Optional(TrueRW, 0, 4),
    "valign_middle",
    Optional(TrueRW, 0, 5),
    "valign_bottom",
    Optional(TrueRW, 0, 6),
    "text",
    Optional(TypeRW(RichTextT), 0, 7),
    "colspan",
    Optional(IntRW, 0, 1),
    "rowspan",
    Optional(IntRW, 0, 2)
  ]
);

/**
 * pageTableRow:PageTableRow
 * #e0c0c5e5:3770729957:-524237339
 * cells:Vector<PageTableCell>
 */
export interface PageTableRowS {
  _id: number;
  _values: [VectorS<PageTableCellT>];

  get_cells(): VectorS<PageTableCellT>;
  set_cells(val: VectorS<PageTableCellT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageTableRowS = r<new () => PageTableRowS>(
  0xe0c0c5e5,
  "PageTableRowS",
  () => ["cells", VectorRW(TypeRW(PageTableCellT))]
);

/**
 * pageBlockTable:PageBlock
 * #bf4dea82:3209554562:-1085412734
 * flags:#
 * bordered:flags.0?true
 * striped:flags.1?true
 * title:RichText
 * rows:Vector<PageTableRow>
 */
export interface PageBlockTableS {
  _id: number;
  _values: [number, true, true, RichTextT, VectorS<PageTableRowT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_bordered(): true;
  set_bordered(val: true): this;

  has_bordered(): boolean;

  get_striped(): true;
  set_striped(val: true): this;

  has_striped(): boolean;

  get_title(): RichTextT;
  set_title(val: RichTextT): this;

  get_rows(): VectorS<PageTableRowT>;
  set_rows(val: VectorS<PageTableRowT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockTableS = r<new () => PageBlockTableS>(
  0xbf4dea82,
  "PageBlockTableS",
  () => [
    "flags",
    IntRW,
    "bordered",
    Optional(TrueRW, 0, 0),
    "striped",
    Optional(TrueRW, 0, 1),
    "title",
    TypeRW(RichTextT),
    "rows",
    VectorRW(TypeRW(PageTableRowT))
  ]
);

/**
 * pageCaption:PageCaption
 * #6f747657:1869903447:1869903447
 * text:RichText
 * credit:RichText
 */
export interface PageCaptionS {
  _id: number;
  _values: [RichTextT, RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_credit(): RichTextT;
  set_credit(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageCaptionS = r<new () => PageCaptionS>(
  0x6f747657,
  "PageCaptionS",
  () => ["text", TypeRW(RichTextT), "credit", TypeRW(RichTextT)]
);

/**
 * pageListItemText:PageListItem
 * #b92fb6cd:3106911949:-1188055347
 * text:RichText
 */
export interface PageListItemTextS {
  _id: number;
  _values: [RichTextT];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageListItemTextS = r<new () => PageListItemTextS>(
  0xb92fb6cd,
  "PageListItemTextS",
  () => ["text", TypeRW(RichTextT)]
);

/**
 * pageListItemBlocks:PageListItem
 * #25e073fc:635466748:635466748
 * blocks:Vector<PageBlock>
 */
export interface PageListItemBlocksS {
  _id: number;
  _values: [VectorS<PageBlockT>];

  get_blocks(): VectorS<PageBlockT>;
  set_blocks(val: VectorS<PageBlockT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageListItemBlocksS = r<new () => PageListItemBlocksS>(
  0x25e073fc,
  "PageListItemBlocksS",
  () => ["blocks", VectorRW(TypeRW(PageBlockT))]
);

/**
 * pageListOrderedItemText:PageListOrderedItem
 * #5e068047:1577484359:1577484359
 * num:string
 * text:RichText
 */
export interface PageListOrderedItemTextS {
  _id: number;
  _values: [string, RichTextT];

  get_num(): string;
  set_num(val: string): this;

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageListOrderedItemTextS = r<new () => PageListOrderedItemTextS>(
  0x5e068047,
  "PageListOrderedItemTextS",
  () => ["num", StringRW, "text", TypeRW(RichTextT)]
);

/**
 * pageListOrderedItemBlocks:PageListOrderedItem
 * #98dd8936:2564655414:-1730311882
 * num:string
 * blocks:Vector<PageBlock>
 */
export interface PageListOrderedItemBlocksS {
  _id: number;
  _values: [string, VectorS<PageBlockT>];

  get_num(): string;
  set_num(val: string): this;

  get_blocks(): VectorS<PageBlockT>;
  set_blocks(val: VectorS<PageBlockT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageListOrderedItemBlocksS = r<new () => PageListOrderedItemBlocksS>(
  0x98dd8936,
  "PageListOrderedItemBlocksS",
  () => ["num", StringRW, "blocks", VectorRW(TypeRW(PageBlockT))]
);

/**
 * pageBlockOrderedList:PageBlock
 * #9a8ae1e1:2592793057:-1702174239
 * items:Vector<PageListOrderedItem>
 */
export interface PageBlockOrderedListS {
  _id: number;
  _values: [VectorS<PageListOrderedItemT>];

  get_items(): VectorS<PageListOrderedItemT>;
  set_items(val: VectorS<PageListOrderedItemT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockOrderedListS = r<new () => PageBlockOrderedListS>(
  0x9a8ae1e1,
  "PageBlockOrderedListS",
  () => ["items", VectorRW(TypeRW(PageListOrderedItemT))]
);

/**
 * pageBlockDetails:PageBlock
 * #76768bed:1987480557:1987480557
 * flags:#
 * open:flags.0?true
 * blocks:Vector<PageBlock>
 * title:RichText
 */
export interface PageBlockDetailsS {
  _id: number;
  _values: [number, true, VectorS<PageBlockT>, RichTextT];

  get_flags(): number;
  set_flags(val: number): this;

  get_open(): true;
  set_open(val: true): this;

  has_open(): boolean;

  get_blocks(): VectorS<PageBlockT>;
  set_blocks(val: VectorS<PageBlockT>): this;

  get_title(): RichTextT;
  set_title(val: RichTextT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockDetailsS = r<new () => PageBlockDetailsS>(
  0x76768bed,
  "PageBlockDetailsS",
  () => [
    "flags",
    IntRW,
    "open",
    Optional(TrueRW, 0, 0),
    "blocks",
    VectorRW(TypeRW(PageBlockT)),
    "title",
    TypeRW(RichTextT)
  ]
);

/**
 * pageBlockRelatedArticles:PageBlock
 * #16115a96:370236054:370236054
 * title:RichText
 * articles:Vector<PageRelatedArticle>
 */
export interface PageBlockRelatedArticlesS {
  _id: number;
  _values: [RichTextT, VectorS<PageRelatedArticleT>];

  get_title(): RichTextT;
  set_title(val: RichTextT): this;

  get_articles(): VectorS<PageRelatedArticleT>;
  set_articles(val: VectorS<PageRelatedArticleT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockRelatedArticlesS = r<new () => PageBlockRelatedArticlesS>(
  0x16115a96,
  "PageBlockRelatedArticlesS",
  () => [
    "title",
    TypeRW(RichTextT),
    "articles",
    VectorRW(TypeRW(PageRelatedArticleT))
  ]
);

/**
 * pageBlockMap:PageBlock
 * #a44f3ef6:2756656886:-1538310410
 * geo:GeoPoint
 * zoom:int
 * w:int
 * h:int
 * caption:PageCaption
 */
export interface PageBlockMapS {
  _id: number;
  _values: [GeoPointT, number, number, number, PageCaptionT];

  get_geo(): GeoPointT;
  set_geo(val: GeoPointT): this;

  get_zoom(): number;
  set_zoom(val: number): this;

  get_w(): number;
  set_w(val: number): this;

  get_h(): number;
  set_h(val: number): this;

  get_caption(): PageCaptionT;
  set_caption(val: PageCaptionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageBlockMapS = r<new () => PageBlockMapS>(
  0xa44f3ef6,
  "PageBlockMapS",
  () => [
    "geo",
    TypeRW(GeoPointT),
    "zoom",
    IntRW,
    "w",
    IntRW,
    "h",
    IntRW,
    "caption",
    TypeRW(PageCaptionT)
  ]
);

/**
 * page:Page
 * #ae891bec:2928221164:-1366746132
 * flags:#
 * part:flags.0?true
 * rtl:flags.1?true
 * v2:flags.2?true
 * url:string
 * blocks:Vector<PageBlock>
 * photos:Vector<Photo>
 * documents:Vector<Document>
 */
export interface PageS {
  _id: number;
  _values: [
    number,
    true,
    true,
    true,
    string,
    VectorS<PageBlockT>,
    VectorS<PhotoT>,
    VectorS<DocumentT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_part(): true;
  set_part(val: true): this;

  has_part(): boolean;

  get_rtl(): true;
  set_rtl(val: true): this;

  has_rtl(): boolean;

  get_v2(): true;
  set_v2(val: true): this;

  has_v2(): boolean;

  get_url(): string;
  set_url(val: string): this;

  get_blocks(): VectorS<PageBlockT>;
  set_blocks(val: VectorS<PageBlockT>): this;

  get_photos(): VectorS<PhotoT>;
  set_photos(val: VectorS<PhotoT>): this;

  get_documents(): VectorS<DocumentT>;
  set_documents(val: VectorS<DocumentT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PageS = r<new () => PageS>(0xae891bec, "PageS", () => [
  "flags",
  IntRW,
  "part",
  Optional(TrueRW, 0, 0),
  "rtl",
  Optional(TrueRW, 0, 1),
  "v2",
  Optional(TrueRW, 0, 2),
  "url",
  StringRW,
  "blocks",
  VectorRW(TypeRW(PageBlockT)),
  "photos",
  VectorRW(TypeRW(PhotoT)),
  "documents",
  VectorRW(TypeRW(DocumentT))
]);

/**
 * textAnchor:RichText
 * #35553762:894777186:894777186
 * text:RichText
 * name:string
 */
export interface TextAnchorS {
  _id: number;
  _values: [RichTextT, string];

  get_text(): RichTextT;
  set_text(val: RichTextT): this;

  get_name(): string;
  set_name(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let TextAnchorS = r<new () => TextAnchorS>(
  0x35553762,
  "TextAnchorS",
  () => ["text", TypeRW(RichTextT), "name", StringRW]
);

/**
 * help.userInfo:help.UserInfo
 * #1eb3758:32192344:32192344
 * message:string
 * entities:Vector<MessageEntity>
 * author:string
 * date:int
 */
export interface HelpUserInfoS {
  _id: number;
  _values: [string, VectorS<MessageEntityT>, string, number];

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  get_author(): string;
  set_author(val: string): this;

  get_date(): number;
  set_date(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpUserInfoS = r<new () => HelpUserInfoS>(
  0x1eb3758,
  "HelpUserInfoS",
  () => [
    "message",
    StringRW,
    "entities",
    VectorRW(TypeRW(MessageEntityT)),
    "author",
    StringRW,
    "date",
    IntRW
  ]
);

/**
 * channelAdminLogEventActionStopPoll:ChannelAdminLogEventAction
 * #8f079643:2399639107:-1895328189
 * message:Message
 */
export interface ChannelAdminLogEventActionStopPollS {
  _id: number;
  _values: [MessageT];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelAdminLogEventActionStopPollS = r<
  new () => ChannelAdminLogEventActionStopPollS
>(0x8f079643, "ChannelAdminLogEventActionStopPollS", () => [
  "message",
  TypeRW(MessageT)
]);

/**
 * inputPeerPhotoFileLocation:InputFileLocation
 * #27d69997:668375447:668375447
 * flags:#
 * big:flags.0?true
 * peer:InputPeer
 * volume_id:long
 * local_id:int
 */
export interface InputPeerPhotoFileLocationS {
  _id: number;
  _values: [number, true, InputPeerT, ProtoLong, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_big(): true;
  set_big(val: true): this;

  has_big(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_volume_id(): ProtoLong;
  set_volume_id(val: ProtoLong): this;

  get_local_id(): number;
  set_local_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerPhotoFileLocationS = r<
  new () => InputPeerPhotoFileLocationS
>(0x27d69997, "InputPeerPhotoFileLocationS", () => [
  "flags",
  IntRW,
  "big",
  Optional(TrueRW, 0, 0),
  "peer",
  TypeRW(InputPeerT),
  "volume_id",
  LongRW,
  "local_id",
  IntRW
]);

/**
 * inputFolderPeer:InputFolderPeer
 * #fbd2c296:4224893590:-70073706
 * peer:InputPeer
 * folder_id:int
 */
export interface InputFolderPeerS {
  _id: number;
  _values: [InputPeerT, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputFolderPeerS = r<new () => InputFolderPeerS>(
  0xfbd2c296,
  "InputFolderPeerS",
  () => ["peer", TypeRW(InputPeerT), "folder_id", IntRW]
);

/**
 * inputUserFromMessage:InputUser
 * #2d117597:756118935:756118935
 * peer:InputPeer
 * msg_id:int
 * user_id:int
 */
export interface InputUserFromMessageS {
  _id: number;
  _values: [InputPeerT, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputUserFromMessageS = r<new () => InputUserFromMessageS>(
  0x2d117597,
  "InputUserFromMessageS",
  () => ["peer", TypeRW(InputPeerT), "msg_id", IntRW, "user_id", IntRW]
);

/**
 * inputChannelFromMessage:InputChannel
 * #2a286531:707290417:707290417
 * peer:InputPeer
 * msg_id:int
 * channel_id:int
 */
export interface InputChannelFromMessageS {
  _id: number;
  _values: [InputPeerT, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_channel_id(): number;
  set_channel_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputChannelFromMessageS = r<new () => InputChannelFromMessageS>(
  0x2a286531,
  "InputChannelFromMessageS",
  () => ["peer", TypeRW(InputPeerT), "msg_id", IntRW, "channel_id", IntRW]
);

/**
 * inputPeerUserFromMessage:InputPeer
 * #17bae2e6:398123750:398123750
 * peer:InputPeer
 * msg_id:int
 * user_id:int
 */
export interface InputPeerUserFromMessageS {
  _id: number;
  _values: [InputPeerT, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_user_id(): number;
  set_user_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerUserFromMessageS = r<new () => InputPeerUserFromMessageS>(
  0x17bae2e6,
  "InputPeerUserFromMessageS",
  () => ["peer", TypeRW(InputPeerT), "msg_id", IntRW, "user_id", IntRW]
);

/**
 * inputPeerChannelFromMessage:InputPeer
 * #9c95f7bb:2627073979:-1667893317
 * peer:InputPeer
 * msg_id:int
 * channel_id:int
 */
export interface InputPeerChannelFromMessageS {
  _id: number;
  _values: [InputPeerT, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_channel_id(): number;
  set_channel_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputPeerChannelFromMessageS = r<
  new () => InputPeerChannelFromMessageS
>(0x9c95f7bb, "InputPeerChannelFromMessageS", () => [
  "peer",
  TypeRW(InputPeerT),
  "msg_id",
  IntRW,
  "channel_id",
  IntRW
]);

/**
 * inputKeyboardButtonUrlAuth:KeyboardButton
 * #d02e7fd4:3492708308:-802258988
 * flags:#
 * request_write_access:flags.0?true
 * text:string
 * fwd_text:flags.1?string
 * url:string
 * bot:InputUser
 */
export interface InputKeyboardButtonUrlAuthS {
  _id: number;
  _values: [number, true, string, string, string, InputUserT];

  get_flags(): number;
  set_flags(val: number): this;

  get_request_write_access(): true;
  set_request_write_access(val: true): this;

  has_request_write_access(): boolean;

  get_text(): string;
  set_text(val: string): this;

  get_fwd_text(): string;
  set_fwd_text(val: string): this;

  has_fwd_text(): boolean;

  get_url(): string;
  set_url(val: string): this;

  get_bot(): InputUserT;
  set_bot(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let InputKeyboardButtonUrlAuthS = r<
  new () => InputKeyboardButtonUrlAuthS
>(0xd02e7fd4, "InputKeyboardButtonUrlAuthS", () => [
  "flags",
  IntRW,
  "request_write_access",
  Optional(TrueRW, 0, 0),
  "text",
  StringRW,
  "fwd_text",
  Optional(StringRW, 0, 1),
  "url",
  StringRW,
  "bot",
  TypeRW(InputUserT)
]);

/**
 * auth.authorizationSignUpRequired:auth.Authorization
 * #44747e9a:1148485274:1148485274
 * flags:#
 * terms_of_service:flags.0?help.TermsOfService
 */
export interface AuthAuthorizationSignUpRequiredS {
  _id: number;
  _values: [number, HelpTermsOfServiceT];

  get_flags(): number;
  set_flags(val: number): this;

  get_terms_of_service(): HelpTermsOfServiceT;
  set_terms_of_service(val: HelpTermsOfServiceT): this;

  has_terms_of_service(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AuthAuthorizationSignUpRequiredS = r<
  new () => AuthAuthorizationSignUpRequiredS
>(0x44747e9a, "AuthAuthorizationSignUpRequiredS", () => [
  "flags",
  IntRW,
  "terms_of_service",
  Optional(TypeRW(HelpTermsOfServiceT), 0, 0)
]);

/**
 * updateNewScheduledMessage:Update
 * #39a51dfb:967122427:967122427
 * message:Message
 */
export interface UpdateNewScheduledMessageS {
  _id: number;
  _values: [MessageT];

  get_message(): MessageT;
  set_message(val: MessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdateNewScheduledMessageS = r<new () => UpdateNewScheduledMessageS>(
  0x39a51dfb,
  "UpdateNewScheduledMessageS",
  () => ["message", TypeRW(MessageT)]
);

export type InputPeerT =
  | InputPeerEmptyS
  | InputPeerSelfS
  | InputPeerChatS
  | InputPeerUserS
  | InputPeerChannelS
  | InputPeerUserFromMessageS
  | InputPeerChannelFromMessageS;
export const InputPeerT = OneOf;

export type InputUserT =
  | InputUserEmptyS
  | InputUserSelfS
  | InputUserS
  | InputUserFromMessageS;
export const InputUserT = OneOf;

export type InputMediaT =
  | InputMediaEmptyS
  | InputMediaUploadedPhotoS
  | InputMediaPhotoS
  | InputMediaGeoPointS
  | InputMediaContactS
  | InputMediaUploadedDocumentS
  | InputMediaDocumentS
  | InputMediaVenueS
  | InputMediaGifExternalS
  | InputMediaPhotoExternalS
  | InputMediaDocumentExternalS
  | InputMediaGameS
  | InputMediaInvoiceS
  | InputMediaGeoLiveS
  | InputMediaPollS;
export const InputMediaT = OneOf;

export type InputFileLocationT =
  | InputFileLocationS
  | InputEncryptedFileLocationS
  | InputDocumentFileLocationS
  | InputSecureFileLocationS
  | InputTakeoutFileLocationS
  | InputPhotoFileLocationS
  | InputPhotoLegacyFileLocationS
  | InputPeerPhotoFileLocationS
  | InputStickerSetThumbS;
export const InputFileLocationT = OneOf;

export type ChatT =
  | ChatEmptyS
  | ChatS
  | ChatForbiddenS
  | ChannelS
  | ChannelForbiddenS;
export const ChatT = OneOf;

export type MessageT = MessageEmptyS | MessageS | MessageServiceS;
export const MessageT = OneOf;

export type MessageMediaT =
  | MessageMediaEmptyS
  | MessageMediaPhotoS
  | MessageMediaGeoS
  | MessageMediaContactS
  | MessageMediaUnsupportedS
  | MessageMediaDocumentS
  | MessageMediaWebPageS
  | MessageMediaVenueS
  | MessageMediaGameS
  | MessageMediaInvoiceS
  | MessageMediaGeoLiveS
  | MessageMediaPollS;
export const MessageMediaT = OneOf;

export type DialogT = DialogS | DialogFolderS;
export const DialogT = OneOf;

export type AuthAuthorizationT =
  | AuthAuthorizationS
  | AuthAuthorizationSignUpRequiredS;
export const AuthAuthorizationT = OneOf;

export type InputNotifyPeerT =
  | InputNotifyPeerS
  | InputNotifyUsersS
  | InputNotifyChatsS
  | InputNotifyBroadcastsS;
export const InputNotifyPeerT = OneOf;

export type MessagesDialogsT =
  | MessagesDialogsS
  | MessagesDialogsSliceS
  | MessagesDialogsNotModifiedS;
export const MessagesDialogsT = OneOf;

export type MessagesMessagesT =
  | MessagesMessagesS
  | MessagesMessagesSliceS
  | MessagesChannelMessagesS
  | MessagesMessagesNotModifiedS;
export const MessagesMessagesT = OneOf;

export type MessagesChatsT = MessagesChatsS | MessagesChatsSliceS;
export const MessagesChatsT = OneOf;

export type UpdateT =
  | UpdateNewMessageS
  | UpdateMessageIdS
  | UpdateDeleteMessagesS
  | UpdateUserTypingS
  | UpdateChatUserTypingS
  | UpdateChatParticipantsS
  | UpdateUserStatusS
  | UpdateUserNameS
  | UpdateUserPhotoS
  | UpdateNewEncryptedMessageS
  | UpdateEncryptedChatTypingS
  | UpdateEncryptionS
  | UpdateEncryptedMessagesReadS
  | UpdateChatParticipantAddS
  | UpdateChatParticipantDeleteS
  | UpdateDcOptionsS
  | UpdateUserBlockedS
  | UpdateNotifySettingsS
  | UpdateServiceNotificationS
  | UpdatePrivacyS
  | UpdateUserPhoneS
  | UpdateReadHistoryInboxS
  | UpdateReadHistoryOutboxS
  | UpdateWebPageS
  | UpdateReadMessagesContentsS
  | UpdateChannelTooLongS
  | UpdateChannelS
  | UpdateNewChannelMessageS
  | UpdateReadChannelInboxS
  | UpdateDeleteChannelMessagesS
  | UpdateChannelMessageViewsS
  | UpdateChatParticipantAdminS
  | UpdateNewStickerSetS
  | UpdateStickerSetsOrderS
  | UpdateStickerSetsS
  | UpdateSavedGifsS
  | UpdateBotInlineQueryS
  | UpdateBotInlineSendS
  | UpdateEditChannelMessageS
  | UpdateChannelPinnedMessageS
  | UpdateBotCallbackQueryS
  | UpdateEditMessageS
  | UpdateInlineBotCallbackQueryS
  | UpdateReadChannelOutboxS
  | UpdateDraftMessageS
  | UpdateReadFeaturedStickersS
  | UpdateRecentStickersS
  | UpdateConfigS
  | UpdatePtsChangedS
  | UpdateChannelWebPageS
  | UpdateDialogPinnedS
  | UpdatePinnedDialogsS
  | UpdateBotWebhookJsonS
  | UpdateBotWebhookJsonQueryS
  | UpdateBotShippingQueryS
  | UpdateBotPrecheckoutQueryS
  | UpdatePhoneCallS
  | UpdateLangPackTooLongS
  | UpdateLangPackS
  | UpdateFavedStickersS
  | UpdateChannelReadMessagesContentsS
  | UpdateContactsResetS
  | UpdateChannelAvailableMessagesS
  | UpdateDialogUnreadMarkS
  | UpdateUserPinnedMessageS
  | UpdateChatPinnedMessageS
  | UpdateMessagePollS
  | UpdateChatDefaultBannedRightsS
  | UpdateFolderPeersS
  | UpdatePeerSettingsS
  | UpdatePeerLocatedS
  | UpdateNewScheduledMessageS
  | UpdateDeleteScheduledMessagesS
  | UpdateThemeS;
export const UpdateT = OneOf;

export type UpdatesDifferenceT =
  | UpdatesDifferenceEmptyS
  | UpdatesDifferenceS
  | UpdatesDifferenceSliceS
  | UpdatesDifferenceTooLongS;
export const UpdatesDifferenceT = OneOf;

export type UpdatesT =
  | UpdatesTooLongS
  | UpdateShortMessageS
  | UpdateShortChatMessageS
  | UpdateShortS
  | UpdatesCombinedS
  | UpdatesS
  | UpdateShortSentMessageS;
export const UpdatesT = OneOf;

export type HelpAppUpdateT = HelpAppUpdateS | HelpNoAppUpdateS;
export const HelpAppUpdateT = OneOf;

export type InputPrivacyRuleT =
  | InputPrivacyValueAllowContactsS
  | InputPrivacyValueAllowAllS
  | InputPrivacyValueAllowUsersS
  | InputPrivacyValueDisallowContactsS
  | InputPrivacyValueDisallowAllS
  | InputPrivacyValueDisallowUsersS
  | InputPrivacyValueAllowChatParticipantsS
  | InputPrivacyValueDisallowChatParticipantsS;
export const InputPrivacyRuleT = OneOf;

export type WebPageT =
  | WebPageEmptyS
  | WebPagePendingS
  | WebPageS
  | WebPageNotModifiedS;
export const WebPageT = OneOf;

export type ChatInviteT = ChatInviteAlreadyS | ChatInviteS;
export const ChatInviteT = OneOf;

export type KeyboardButtonT =
  | KeyboardButtonS
  | KeyboardButtonUrlS
  | KeyboardButtonCallbackS
  | KeyboardButtonRequestPhoneS
  | KeyboardButtonRequestGeoLocationS
  | KeyboardButtonSwitchInlineS
  | KeyboardButtonGameS
  | KeyboardButtonBuyS
  | KeyboardButtonUrlAuthS
  | InputKeyboardButtonUrlAuthS;
export const KeyboardButtonT = OneOf;

export const KeyboardButtonRowT = KeyboardButtonRowS;
export type KeyboardButtonRowT = KeyboardButtonRowS;

export type ReplyMarkupT =
  | ReplyKeyboardHideS
  | ReplyKeyboardForceReplyS
  | ReplyKeyboardMarkupS
  | ReplyInlineMarkupS;
export const ReplyMarkupT = OneOf;

export type MessageEntityT =
  | MessageEntityUnknownS
  | MessageEntityMentionS
  | MessageEntityHashtagS
  | MessageEntityBotCommandS
  | MessageEntityUrlS
  | MessageEntityEmailS
  | MessageEntityBoldS
  | MessageEntityItalicS
  | MessageEntityCodeS
  | MessageEntityPreS
  | MessageEntityTextUrlS
  | MessageEntityMentionNameS
  | InputMessageEntityMentionNameS
  | MessageEntityPhoneS
  | MessageEntityCashtagS
  | MessageEntityUnderlineS
  | MessageEntityStrikeS
  | MessageEntityBlockquoteS;
export const MessageEntityT = OneOf;

export type InputChannelT =
  | InputChannelEmptyS
  | InputChannelS
  | InputChannelFromMessageS;
export const InputChannelT = OneOf;

export type UpdatesChannelDifferenceT =
  | UpdatesChannelDifferenceEmptyS
  | UpdatesChannelDifferenceTooLongS
  | UpdatesChannelDifferenceS;
export const UpdatesChannelDifferenceT = OneOf;

export const HelpTermsOfServiceT = HelpTermsOfServiceS;
export type HelpTermsOfServiceT = HelpTermsOfServiceS;

export type InputBotInlineMessageT =
  | InputBotInlineMessageMediaAutoS
  | InputBotInlineMessageTextS
  | InputBotInlineMessageMediaGeoS
  | InputBotInlineMessageMediaVenueS
  | InputBotInlineMessageMediaContactS
  | InputBotInlineMessageGameS;
export const InputBotInlineMessageT = OneOf;

export type InputBotInlineResultT =
  | InputBotInlineResultS
  | InputBotInlineResultPhotoS
  | InputBotInlineResultDocumentS
  | InputBotInlineResultGameS;
export const InputBotInlineResultT = OneOf;

export type BotInlineMessageT =
  | BotInlineMessageMediaAutoS
  | BotInlineMessageTextS
  | BotInlineMessageMediaGeoS
  | BotInlineMessageMediaVenueS
  | BotInlineMessageMediaContactS;
export const BotInlineMessageT = OneOf;

export type BotInlineResultT = BotInlineResultS | BotInlineMediaResultS;
export const BotInlineResultT = OneOf;

export type ContactsTopPeersT =
  | ContactsTopPeersNotModifiedS
  | ContactsTopPeersS
  | ContactsTopPeersDisabledS;
export const ContactsTopPeersT = OneOf;

export type DraftMessageT = DraftMessageEmptyS | DraftMessageS;
export const DraftMessageT = OneOf;

export type InputGameT = InputGameIdS | InputGameShortNameS;
export const InputGameT = OneOf;

export type RichTextT =
  | TextEmptyS
  | TextPlainS
  | TextBoldS
  | TextItalicS
  | TextUnderlineS
  | TextStrikeS
  | TextFixedS
  | TextUrlS
  | TextEmailS
  | TextConcatS
  | TextSubscriptS
  | TextSuperscriptS
  | TextMarkedS
  | TextPhoneS
  | TextImageS
  | TextAnchorS;
export const RichTextT = OneOf;

export type PageBlockT =
  | PageBlockUnsupportedS
  | PageBlockTitleS
  | PageBlockSubtitleS
  | PageBlockAuthorDateS
  | PageBlockHeaderS
  | PageBlockSubheaderS
  | PageBlockParagraphS
  | PageBlockPreformattedS
  | PageBlockFooterS
  | PageBlockDividerS
  | PageBlockAnchorS
  | PageBlockListS
  | PageBlockBlockquoteS
  | PageBlockPullquoteS
  | PageBlockPhotoS
  | PageBlockVideoS
  | PageBlockCoverS
  | PageBlockEmbedS
  | PageBlockEmbedPostS
  | PageBlockCollageS
  | PageBlockSlideshowS
  | PageBlockChannelS
  | PageBlockAudioS
  | PageBlockKickerS
  | PageBlockTableS
  | PageBlockOrderedListS
  | PageBlockDetailsS
  | PageBlockRelatedArticlesS
  | PageBlockMapS;
export const PageBlockT = OneOf;

export type PaymentsPaymentResultT =
  | PaymentsPaymentResultS
  | PaymentsPaymentVerificationNeededS;
export const PaymentsPaymentResultT = OneOf;

export type ChannelAdminLogEventActionT =
  | ChannelAdminLogEventActionChangeTitleS
  | ChannelAdminLogEventActionChangeAboutS
  | ChannelAdminLogEventActionChangeUsernameS
  | ChannelAdminLogEventActionChangePhotoS
  | ChannelAdminLogEventActionToggleInvitesS
  | ChannelAdminLogEventActionToggleSignaturesS
  | ChannelAdminLogEventActionUpdatePinnedS
  | ChannelAdminLogEventActionEditMessageS
  | ChannelAdminLogEventActionDeleteMessageS
  | ChannelAdminLogEventActionParticipantJoinS
  | ChannelAdminLogEventActionParticipantLeaveS
  | ChannelAdminLogEventActionParticipantInviteS
  | ChannelAdminLogEventActionParticipantToggleBanS
  | ChannelAdminLogEventActionParticipantToggleAdminS
  | ChannelAdminLogEventActionChangeStickerSetS
  | ChannelAdminLogEventActionTogglePreHistoryHiddenS
  | ChannelAdminLogEventActionDefaultBannedRightsS
  | ChannelAdminLogEventActionStopPollS
  | ChannelAdminLogEventActionChangeLinkedChatS
  | ChannelAdminLogEventActionChangeLocationS
  | ChannelAdminLogEventActionToggleSlowModeS;
export const ChannelAdminLogEventActionT = OneOf;

export const ChannelAdminLogEventT = ChannelAdminLogEventS;
export type ChannelAdminLogEventT = ChannelAdminLogEventS;

export type RecentMeUrlT =
  | RecentMeUrlUnknownS
  | RecentMeUrlUserS
  | RecentMeUrlChatS
  | RecentMeUrlChatInviteS
  | RecentMeUrlStickerSetS;
export const RecentMeUrlT = OneOf;

export type InputDialogPeerT = InputDialogPeerS | InputDialogPeerFolderS;
export const InputDialogPeerT = OneOf;

export type HelpProxyDataT = HelpProxyDataEmptyS | HelpProxyDataPromoS;
export const HelpProxyDataT = OneOf;

export type HelpTermsOfServiceUpdateT =
  | HelpTermsOfServiceUpdateEmptyS
  | HelpTermsOfServiceUpdateS;
export const HelpTermsOfServiceUpdateT = OneOf;

export type HelpDeepLinkInfoT = HelpDeepLinkInfoEmptyS | HelpDeepLinkInfoS;
export const HelpDeepLinkInfoT = OneOf;

export type SecureRequiredTypeT =
  | SecureRequiredTypeS
  | SecureRequiredTypeOneOfS;
export const SecureRequiredTypeT = OneOf;

export const JsonObjectValueT = JsonObjectValueS;
export type JsonObjectValueT = JsonObjectValueS;

export type JsonValueT =
  | JsonNullS
  | JsonBoolS
  | JsonNumberS
  | JsonStringS
  | JsonArrayS
  | JsonObjectS;
export const JsonValueT = OneOf;

export const PageTableCellT = PageTableCellS;
export type PageTableCellT = PageTableCellS;

export const PageTableRowT = PageTableRowS;
export type PageTableRowT = PageTableRowS;

export const PageCaptionT = PageCaptionS;
export type PageCaptionT = PageCaptionS;

export type PageListItemT = PageListItemTextS | PageListItemBlocksS;
export const PageListItemT = OneOf;

export type PageListOrderedItemT =
  | PageListOrderedItemTextS
  | PageListOrderedItemBlocksS;
export const PageListOrderedItemT = OneOf;

export const PageT = PageS;
export type PageT = PageS;

export type HelpUserInfoT = HelpUserInfoEmptyS | HelpUserInfoS;
export const HelpUserInfoT = OneOf;

/**
 * account.updateNotifySettings:account.updateNotifySettings Bool
 * #84be5b93:2227067795:-2067899501
 * peer:InputNotifyPeer
 * settings:InputPeerNotifySettings
 */
export interface AccountUpdateNotifySettingsM {
  _id: number;
  _method(): void;
  _values: [InputNotifyPeerT, InputPeerNotifySettingsS];

  get_peer(): InputNotifyPeerT;
  set_peer(val: InputNotifyPeerT): this;

  get_settings(): InputPeerNotifySettingsS;
  set_settings(val: InputPeerNotifySettingsS): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountUpdateNotifySettingsM = r<
  new () => AccountUpdateNotifySettingsM
>(0x84be5b93, "AccountUpdateNotifySettingsM", () => [
  "peer",
  TypeRW(InputNotifyPeerT),
  "settings",
  TypeRW(InputPeerNotifySettingsS)
]);

/**
 * account.getNotifySettings:account.getNotifySettings PeerNotifySettings
 * #12b3ad31:313765169:313765169
 * peer:InputNotifyPeer
 */
export interface AccountGetNotifySettingsM {
  _id: number;
  _method(): void;
  _values: [InputNotifyPeerT];

  get_peer(): InputNotifyPeerT;
  set_peer(val: InputNotifyPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetNotifySettingsM = r<new () => AccountGetNotifySettingsM>(
  0x12b3ad31,
  "AccountGetNotifySettingsM",
  () => ["peer", TypeRW(InputNotifyPeerT)]
);

/**
 * account.reportPeer:account.reportPeer Bool
 * #ae189d5f:2920848735:-1374118561
 * peer:InputPeer
 * reason:ReportReason
 */
export interface AccountReportPeerM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, ReportReasonT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_reason(): ReportReasonT;
  set_reason(val: ReportReasonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountReportPeerM = r<new () => AccountReportPeerM>(
  0xae189d5f,
  "AccountReportPeerM",
  () => ["peer", TypeRW(InputPeerT), "reason", TypeRW(ReportReasonT)]
);

/**
 * users.getUsers:users.getUsers Vector<User>
 * #d91a548:227648840:227648840
 * id:Vector<InputUser>
 */
export interface UsersGetUsersM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputUserT>];

  get_id(): VectorS<InputUserT>;
  set_id(val: VectorS<InputUserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UsersGetUsersM = r<new () => UsersGetUsersM>(
  0xd91a548,
  "UsersGetUsersM",
  () => ["id", VectorRW(TypeRW(InputUserT))]
);

/**
 * users.getFullUser:users.getFullUser UserFull
 * #ca30a5b1:3392185777:-902781519
 * id:InputUser
 */
export interface UsersGetFullUserM {
  _id: number;
  _method(): void;
  _values: [InputUserT];

  get_id(): InputUserT;
  set_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UsersGetFullUserM = r<new () => UsersGetFullUserM>(
  0xca30a5b1,
  "UsersGetFullUserM",
  () => ["id", TypeRW(InputUserT)]
);

/**
 * contacts.deleteContacts:contacts.deleteContacts Updates
 * #96a0e00:157945344:157945344
 * id:Vector<InputUser>
 */
export interface ContactsDeleteContactsM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputUserT>];

  get_id(): VectorS<InputUserT>;
  set_id(val: VectorS<InputUserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsDeleteContactsM = r<new () => ContactsDeleteContactsM>(
  0x96a0e00,
  "ContactsDeleteContactsM",
  () => ["id", VectorRW(TypeRW(InputUserT))]
);

/**
 * contacts.block:contacts.block Bool
 * #332b49fc:858475004:858475004
 * id:InputUser
 */
export interface ContactsBlockM {
  _id: number;
  _method(): void;
  _values: [InputUserT];

  get_id(): InputUserT;
  set_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsBlockM = r<new () => ContactsBlockM>(
  0x332b49fc,
  "ContactsBlockM",
  () => ["id", TypeRW(InputUserT)]
);

/**
 * contacts.unblock:contacts.unblock Bool
 * #e54100bd:3846242493:-448724803
 * id:InputUser
 */
export interface ContactsUnblockM {
  _id: number;
  _method(): void;
  _values: [InputUserT];

  get_id(): InputUserT;
  set_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsUnblockM = r<new () => ContactsUnblockM>(
  0xe54100bd,
  "ContactsUnblockM",
  () => ["id", TypeRW(InputUserT)]
);

/**
 * messages.getDialogs:messages.getDialogs messages.Dialogs
 * #a0ee3b73:2699967347:-1594999949
 * flags:#
 * exclude_pinned:flags.0?true
 * folder_id:flags.1?int
 * offset_date:int
 * offset_id:int
 * offset_peer:InputPeer
 * limit:int
 * hash:int
 */
export interface MessagesGetDialogsM {
  _id: number;
  _method(): void;
  _values: [number, true, number, number, number, InputPeerT, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_exclude_pinned(): true;
  set_exclude_pinned(val: true): this;

  has_exclude_pinned(): boolean;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_offset_date(): number;
  set_offset_date(val: number): this;

  get_offset_id(): number;
  set_offset_id(val: number): this;

  get_offset_peer(): InputPeerT;
  set_offset_peer(val: InputPeerT): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetDialogsM = r<new () => MessagesGetDialogsM>(
  0xa0ee3b73,
  "MessagesGetDialogsM",
  () => [
    "flags",
    IntRW,
    "exclude_pinned",
    Optional(TrueRW, 0, 0),
    "folder_id",
    Optional(IntRW, 0, 1),
    "offset_date",
    IntRW,
    "offset_id",
    IntRW,
    "offset_peer",
    TypeRW(InputPeerT),
    "limit",
    IntRW,
    "hash",
    IntRW
  ]
);

/**
 * messages.getHistory:messages.getHistory messages.Messages
 * #dcbb8260:3703276128:-591691168
 * peer:InputPeer
 * offset_id:int
 * offset_date:int
 * add_offset:int
 * limit:int
 * max_id:int
 * min_id:int
 * hash:int
 */
export interface MessagesGetHistoryM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, number, number, number, number, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_offset_id(): number;
  set_offset_id(val: number): this;

  get_offset_date(): number;
  set_offset_date(val: number): this;

  get_add_offset(): number;
  set_add_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_min_id(): number;
  set_min_id(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetHistoryM = r<new () => MessagesGetHistoryM>(
  0xdcbb8260,
  "MessagesGetHistoryM",
  () => [
    "peer",
    TypeRW(InputPeerT),
    "offset_id",
    IntRW,
    "offset_date",
    IntRW,
    "add_offset",
    IntRW,
    "limit",
    IntRW,
    "max_id",
    IntRW,
    "min_id",
    IntRW,
    "hash",
    IntRW
  ]
);

/**
 * messages.search:messages.search messages.Messages
 * #8614ef68:2249518952:-2045448344
 * flags:#
 * peer:InputPeer
 * q:string
 * from_id:flags.0?InputUser
 * filter:MessagesFilter
 * min_date:int
 * max_date:int
 * offset_id:int
 * add_offset:int
 * limit:int
 * max_id:int
 * min_id:int
 * hash:int
 */
export interface MessagesSearchM {
  _id: number;
  _method(): void;
  _values: [
    number,
    InputPeerT,
    string,
    InputUserT,
    MessagesFilterT,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_q(): string;
  set_q(val: string): this;

  get_from_id(): InputUserT;
  set_from_id(val: InputUserT): this;

  has_from_id(): boolean;

  get_filter(): MessagesFilterT;
  set_filter(val: MessagesFilterT): this;

  get_min_date(): number;
  set_min_date(val: number): this;

  get_max_date(): number;
  set_max_date(val: number): this;

  get_offset_id(): number;
  set_offset_id(val: number): this;

  get_add_offset(): number;
  set_add_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_min_id(): number;
  set_min_id(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSearchM = r<new () => MessagesSearchM>(
  0x8614ef68,
  "MessagesSearchM",
  () => [
    "flags",
    IntRW,
    "peer",
    TypeRW(InputPeerT),
    "q",
    StringRW,
    "from_id",
    Optional(TypeRW(InputUserT), 0, 0),
    "filter",
    TypeRW(MessagesFilterT),
    "min_date",
    IntRW,
    "max_date",
    IntRW,
    "offset_id",
    IntRW,
    "add_offset",
    IntRW,
    "limit",
    IntRW,
    "max_id",
    IntRW,
    "min_id",
    IntRW,
    "hash",
    IntRW
  ]
);

/**
 * messages.readHistory:messages.readHistory messages.AffectedMessages
 * #e306d3a:238054714:238054714
 * peer:InputPeer
 * max_id:int
 */
export interface MessagesReadHistoryM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReadHistoryM = r<new () => MessagesReadHistoryM>(
  0xe306d3a,
  "MessagesReadHistoryM",
  () => ["peer", TypeRW(InputPeerT), "max_id", IntRW]
);

/**
 * messages.deleteHistory:messages.deleteHistory messages.AffectedHistory
 * #1c015b09:469850889:469850889
 * flags:#
 * just_clear:flags.0?true
 * revoke:flags.1?true
 * peer:InputPeer
 * max_id:int
 */
export interface MessagesDeleteHistoryM {
  _id: number;
  _method(): void;
  _values: [number, true, true, InputPeerT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_just_clear(): true;
  set_just_clear(val: true): this;

  has_just_clear(): boolean;

  get_revoke(): true;
  set_revoke(val: true): this;

  has_revoke(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDeleteHistoryM = r<new () => MessagesDeleteHistoryM>(
  0x1c015b09,
  "MessagesDeleteHistoryM",
  () => [
    "flags",
    IntRW,
    "just_clear",
    Optional(TrueRW, 0, 0),
    "revoke",
    Optional(TrueRW, 0, 1),
    "peer",
    TypeRW(InputPeerT),
    "max_id",
    IntRW
  ]
);

/**
 * messages.setTyping:messages.setTyping Bool
 * #a3825e50:2743230032:-1551737264
 * peer:InputPeer
 * action:SendMessageAction
 */
export interface MessagesSetTypingM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, SendMessageActionT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_action(): SendMessageActionT;
  set_action(val: SendMessageActionT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetTypingM = r<new () => MessagesSetTypingM>(
  0xa3825e50,
  "MessagesSetTypingM",
  () => ["peer", TypeRW(InputPeerT), "action", TypeRW(SendMessageActionT)]
);

/**
 * messages.sendMessage:messages.sendMessage Updates
 * #520c3870:1376532592:1376532592
 * flags:#
 * no_webpage:flags.1?true
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * message:string
 * random_id:long
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 * schedule_date:flags.10?int
 */
export interface MessagesSendMessageM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    true,
    true,
    true,
    InputPeerT,
    number,
    string,
    ProtoLong,
    ReplyMarkupT,
    VectorS<MessageEntityT>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_background(): true;
  set_background(val: true): this;

  has_background(): boolean;

  get_clear_draft(): true;
  set_clear_draft(val: true): this;

  has_clear_draft(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_message(): string;
  set_message(val: string): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_schedule_date(): number;
  set_schedule_date(val: number): this;

  has_schedule_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendMessageM = r<new () => MessagesSendMessageM>(
  0x520c3870,
  "MessagesSendMessageM",
  () => [
    "flags",
    IntRW,
    "no_webpage",
    Optional(TrueRW, 0, 1),
    "silent",
    Optional(TrueRW, 0, 5),
    "background",
    Optional(TrueRW, 0, 6),
    "clear_draft",
    Optional(TrueRW, 0, 7),
    "peer",
    TypeRW(InputPeerT),
    "reply_to_msg_id",
    Optional(IntRW, 0, 0),
    "message",
    StringRW,
    "random_id",
    LongRW,
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2),
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3),
    "schedule_date",
    Optional(IntRW, 0, 10)
  ]
);

/**
 * messages.sendMedia:messages.sendMedia Updates
 * #3491eba9:881978281:881978281
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * media:InputMedia
 * message:string
 * random_id:long
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 * schedule_date:flags.10?int
 */
export interface MessagesSendMediaM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    true,
    true,
    InputPeerT,
    number,
    InputMediaT,
    string,
    ProtoLong,
    ReplyMarkupT,
    VectorS<MessageEntityT>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_background(): true;
  set_background(val: true): this;

  has_background(): boolean;

  get_clear_draft(): true;
  set_clear_draft(val: true): this;

  has_clear_draft(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_media(): InputMediaT;
  set_media(val: InputMediaT): this;

  get_message(): string;
  set_message(val: string): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_schedule_date(): number;
  set_schedule_date(val: number): this;

  has_schedule_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendMediaM = r<new () => MessagesSendMediaM>(
  0x3491eba9,
  "MessagesSendMediaM",
  () => [
    "flags",
    IntRW,
    "silent",
    Optional(TrueRW, 0, 5),
    "background",
    Optional(TrueRW, 0, 6),
    "clear_draft",
    Optional(TrueRW, 0, 7),
    "peer",
    TypeRW(InputPeerT),
    "reply_to_msg_id",
    Optional(IntRW, 0, 0),
    "media",
    TypeRW(InputMediaT),
    "message",
    StringRW,
    "random_id",
    LongRW,
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2),
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3),
    "schedule_date",
    Optional(IntRW, 0, 10)
  ]
);

/**
 * messages.forwardMessages:messages.forwardMessages Updates
 * #d9fee60e:3657360910:-637606386
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * with_my_score:flags.8?true
 * grouped:flags.9?true
 * from_peer:InputPeer
 * id:Vector<int>
 * random_id:Vector<long>
 * to_peer:InputPeer
 * schedule_date:flags.10?int
 */
export interface MessagesForwardMessagesM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    true,
    true,
    true,
    InputPeerT,
    VectorS<number>,
    VectorS<ProtoLong>,
    InputPeerT,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_background(): true;
  set_background(val: true): this;

  has_background(): boolean;

  get_with_my_score(): true;
  set_with_my_score(val: true): this;

  has_with_my_score(): boolean;

  get_grouped(): true;
  set_grouped(val: true): this;

  has_grouped(): boolean;

  get_from_peer(): InputPeerT;
  set_from_peer(val: InputPeerT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  get_random_id(): VectorS<ProtoLong>;
  set_random_id(val: VectorS<ProtoLong>): this;

  get_to_peer(): InputPeerT;
  set_to_peer(val: InputPeerT): this;

  get_schedule_date(): number;
  set_schedule_date(val: number): this;

  has_schedule_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesForwardMessagesM = r<new () => MessagesForwardMessagesM>(
  0xd9fee60e,
  "MessagesForwardMessagesM",
  () => [
    "flags",
    IntRW,
    "silent",
    Optional(TrueRW, 0, 5),
    "background",
    Optional(TrueRW, 0, 6),
    "with_my_score",
    Optional(TrueRW, 0, 8),
    "grouped",
    Optional(TrueRW, 0, 9),
    "from_peer",
    TypeRW(InputPeerT),
    "id",
    VectorRW(IntRW),
    "random_id",
    VectorRW(LongRW),
    "to_peer",
    TypeRW(InputPeerT),
    "schedule_date",
    Optional(IntRW, 0, 10)
  ]
);

/**
 * messages.reportSpam:messages.reportSpam Bool
 * #cf1592db:3474297563:-820669733
 * peer:InputPeer
 */
export interface MessagesReportSpamM {
  _id: number;
  _method(): void;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReportSpamM = r<new () => MessagesReportSpamM>(
  0xcf1592db,
  "MessagesReportSpamM",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * messages.getPeerSettings:messages.getPeerSettings PeerSettings
 * #3672e09c:913498268:913498268
 * peer:InputPeer
 */
export interface MessagesGetPeerSettingsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetPeerSettingsM = r<new () => MessagesGetPeerSettingsM>(
  0x3672e09c,
  "MessagesGetPeerSettingsM",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * messages.report:messages.report Bool
 * #bd82b658:3179460184:-1115507112
 * peer:InputPeer
 * id:Vector<int>
 * reason:ReportReason
 */
export interface MessagesReportM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, VectorS<number>, ReportReasonT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  get_reason(): ReportReasonT;
  set_reason(val: ReportReasonT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReportM = r<new () => MessagesReportM>(
  0xbd82b658,
  "MessagesReportM",
  () => [
    "peer",
    TypeRW(InputPeerT),
    "id",
    VectorRW(IntRW),
    "reason",
    TypeRW(ReportReasonT)
  ]
);

/**
 * messages.addChatUser:messages.addChatUser Updates
 * #f9a0aa09:4188056073:-106911223
 * chat_id:int
 * user_id:InputUser
 * fwd_limit:int
 */
export interface MessagesAddChatUserM {
  _id: number;
  _method(): void;
  _values: [number, InputUserT, number];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_fwd_limit(): number;
  set_fwd_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAddChatUserM = r<new () => MessagesAddChatUserM>(
  0xf9a0aa09,
  "MessagesAddChatUserM",
  () => ["chat_id", IntRW, "user_id", TypeRW(InputUserT), "fwd_limit", IntRW]
);

/**
 * messages.deleteChatUser:messages.deleteChatUser Updates
 * #e0611f16:3764461334:-530505962
 * chat_id:int
 * user_id:InputUser
 */
export interface MessagesDeleteChatUserM {
  _id: number;
  _method(): void;
  _values: [number, InputUserT];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDeleteChatUserM = r<new () => MessagesDeleteChatUserM>(
  0xe0611f16,
  "MessagesDeleteChatUserM",
  () => ["chat_id", IntRW, "user_id", TypeRW(InputUserT)]
);

/**
 * messages.createChat:messages.createChat Updates
 * #9cb126e:164303470:164303470
 * users:Vector<InputUser>
 * title:string
 */
export interface MessagesCreateChatM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputUserT>, string];

  get_users(): VectorS<InputUserT>;
  set_users(val: VectorS<InputUserT>): this;

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesCreateChatM = r<new () => MessagesCreateChatM>(
  0x9cb126e,
  "MessagesCreateChatM",
  () => ["users", VectorRW(TypeRW(InputUserT)), "title", StringRW]
);

/**
 * upload.getFile:upload.getFile upload.File
 * #b15a9afc:2975505148:-1319462148
 * flags:#
 * precise:flags.0?true
 * location:InputFileLocation
 * offset:int
 * limit:int
 */
export interface UploadGetFileM {
  _id: number;
  _method(): void;
  _values: [number, true, InputFileLocationT, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_precise(): true;
  set_precise(val: true): this;

  has_precise(): boolean;

  get_location(): InputFileLocationT;
  set_location(val: InputFileLocationT): this;

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadGetFileM = r<new () => UploadGetFileM>(
  0xb15a9afc,
  "UploadGetFileM",
  () => [
    "flags",
    IntRW,
    "precise",
    Optional(TrueRW, 0, 0),
    "location",
    TypeRW(InputFileLocationT),
    "offset",
    IntRW,
    "limit",
    IntRW
  ]
);

/**
 * photos.getUserPhotos:photos.getUserPhotos photos.Photos
 * #91cd32a8:2446144168:-1848823128
 * user_id:InputUser
 * offset:int
 * max_id:long
 * limit:int
 */
export interface PhotosGetUserPhotosM {
  _id: number;
  _method(): void;
  _values: [InputUserT, number, ProtoLong, number];

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_offset(): number;
  set_offset(val: number): this;

  get_max_id(): ProtoLong;
  set_max_id(val: ProtoLong): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhotosGetUserPhotosM = r<new () => PhotosGetUserPhotosM>(
  0x91cd32a8,
  "PhotosGetUserPhotosM",
  () => [
    "user_id",
    TypeRW(InputUserT),
    "offset",
    IntRW,
    "max_id",
    LongRW,
    "limit",
    IntRW
  ]
);

/**
 * messages.requestEncryption:messages.requestEncryption EncryptedChat
 * #f64daf43:4132286275:-162681021
 * user_id:InputUser
 * random_id:int
 * g_a:bytes
 */
export interface MessagesRequestEncryptionM {
  _id: number;
  _method(): void;
  _values: [InputUserT, number, Uint8Array];

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_random_id(): number;
  set_random_id(val: number): this;

  get_g_a(): Uint8Array;
  set_g_a(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesRequestEncryptionM = r<new () => MessagesRequestEncryptionM>(
  0xf64daf43,
  "MessagesRequestEncryptionM",
  () => ["user_id", TypeRW(InputUserT), "random_id", IntRW, "g_a", BytesRW]
);

/**
 * account.setPrivacy:account.setPrivacy account.PrivacyRules
 * #c9f81ce8:3388480744:-906486552
 * key:InputPrivacyKey
 * rules:Vector<InputPrivacyRule>
 */
export interface AccountSetPrivacyM {
  _id: number;
  _method(): void;
  _values: [InputPrivacyKeyT, VectorS<InputPrivacyRuleT>];

  get_key(): InputPrivacyKeyT;
  set_key(val: InputPrivacyKeyT): this;

  get_rules(): VectorS<InputPrivacyRuleT>;
  set_rules(val: VectorS<InputPrivacyRuleT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountSetPrivacyM = r<new () => AccountSetPrivacyM>(
  0xc9f81ce8,
  "AccountSetPrivacyM",
  () => [
    "key",
    TypeRW(InputPrivacyKeyT),
    "rules",
    VectorRW(TypeRW(InputPrivacyRuleT))
  ]
);

/**
 * messages.getWebPagePreview:messages.getWebPagePreview MessageMedia
 * #8b68b0cc:2338894028:-1956073268
 * flags:#
 * message:string
 * entities:flags.3?Vector<MessageEntity>
 */
export interface MessagesGetWebPagePreviewM {
  _id: number;
  _method(): void;
  _values: [number, string, VectorS<MessageEntityT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetWebPagePreviewM = r<new () => MessagesGetWebPagePreviewM>(
  0x8b68b0cc,
  "MessagesGetWebPagePreviewM",
  () => [
    "flags",
    IntRW,
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3)
  ]
);

/**
 * messages.exportChatInvite:messages.exportChatInvite ExportedChatInvite
 * #df7534c:234312524:234312524
 * peer:InputPeer
 */
export interface MessagesExportChatInviteM {
  _id: number;
  _method(): void;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesExportChatInviteM = r<new () => MessagesExportChatInviteM>(
  0xdf7534c,
  "MessagesExportChatInviteM",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * messages.startBot:messages.startBot Updates
 * #e6df7378:3873403768:-421563528
 * bot:InputUser
 * peer:InputPeer
 * random_id:long
 * start_param:string
 */
export interface MessagesStartBotM {
  _id: number;
  _method(): void;
  _values: [InputUserT, InputPeerT, ProtoLong, string];

  get_bot(): InputUserT;
  set_bot(val: InputUserT): this;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_start_param(): string;
  set_start_param(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesStartBotM = r<new () => MessagesStartBotM>(
  0xe6df7378,
  "MessagesStartBotM",
  () => [
    "bot",
    TypeRW(InputUserT),
    "peer",
    TypeRW(InputPeerT),
    "random_id",
    LongRW,
    "start_param",
    StringRW
  ]
);

/**
 * messages.getMessagesViews:messages.getMessagesViews Vector<int>
 * #c4c8a55d:3301483869:-993483427
 * peer:InputPeer
 * id:Vector<int>
 * increment:Bool
 */
export interface MessagesGetMessagesViewsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, VectorS<number>, BoolT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  get_increment(): BoolT;
  set_increment(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetMessagesViewsM = r<new () => MessagesGetMessagesViewsM>(
  0xc4c8a55d,
  "MessagesGetMessagesViewsM",
  () => [
    "peer",
    TypeRW(InputPeerT),
    "id",
    VectorRW(IntRW),
    "increment",
    TypeRW(BoolT)
  ]
);

/**
 * channels.readHistory:channels.readHistory Bool
 * #cc104937:3423619383:-871347913
 * channel:InputChannel
 * max_id:int
 */
export interface ChannelsReadHistoryM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, number];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsReadHistoryM = r<new () => ChannelsReadHistoryM>(
  0xcc104937,
  "ChannelsReadHistoryM",
  () => ["channel", TypeRW(InputChannelT), "max_id", IntRW]
);

/**
 * channels.deleteMessages:channels.deleteMessages messages.AffectedMessages
 * #84c1fd4e:2227305806:-2067661490
 * channel:InputChannel
 * id:Vector<int>
 */
export interface ChannelsDeleteMessagesM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, VectorS<number>];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsDeleteMessagesM = r<new () => ChannelsDeleteMessagesM>(
  0x84c1fd4e,
  "ChannelsDeleteMessagesM",
  () => ["channel", TypeRW(InputChannelT), "id", VectorRW(IntRW)]
);

/**
 * channels.deleteUserHistory:channels.deleteUserHistory messages.AffectedHistory
 * #d10dd71b:3507345179:-787622117
 * channel:InputChannel
 * user_id:InputUser
 */
export interface ChannelsDeleteUserHistoryM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputUserT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsDeleteUserHistoryM = r<new () => ChannelsDeleteUserHistoryM>(
  0xd10dd71b,
  "ChannelsDeleteUserHistoryM",
  () => ["channel", TypeRW(InputChannelT), "user_id", TypeRW(InputUserT)]
);

/**
 * channels.reportSpam:channels.reportSpam Bool
 * #fe087810:4261967888:-32999408
 * channel:InputChannel
 * user_id:InputUser
 * id:Vector<int>
 */
export interface ChannelsReportSpamM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputUserT, VectorS<number>];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsReportSpamM = r<new () => ChannelsReportSpamM>(
  0xfe087810,
  "ChannelsReportSpamM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "user_id",
    TypeRW(InputUserT),
    "id",
    VectorRW(IntRW)
  ]
);

/**
 * channels.getMessages:channels.getMessages messages.Messages
 * #ad8c9a23:2911672867:-1383294429
 * channel:InputChannel
 * id:Vector<InputMessage>
 */
export interface ChannelsGetMessagesM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, VectorS<InputMessageT>];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_id(): VectorS<InputMessageT>;
  set_id(val: VectorS<InputMessageT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetMessagesM = r<new () => ChannelsGetMessagesM>(
  0xad8c9a23,
  "ChannelsGetMessagesM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "id",
    VectorRW(TypeRW(InputMessageT))
  ]
);

/**
 * channels.getParticipants:channels.getParticipants channels.ChannelParticipants
 * #123e05e9:306054633:306054633
 * channel:InputChannel
 * filter:ChannelParticipantsFilter
 * offset:int
 * limit:int
 * hash:int
 */
export interface ChannelsGetParticipantsM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, ChannelParticipantsFilterT, number, number, number];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_filter(): ChannelParticipantsFilterT;
  set_filter(val: ChannelParticipantsFilterT): this;

  get_offset(): number;
  set_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetParticipantsM = r<new () => ChannelsGetParticipantsM>(
  0x123e05e9,
  "ChannelsGetParticipantsM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "filter",
    TypeRW(ChannelParticipantsFilterT),
    "offset",
    IntRW,
    "limit",
    IntRW,
    "hash",
    IntRW
  ]
);

/**
 * channels.getParticipant:channels.getParticipant channels.ChannelParticipant
 * #546dd7a6:1416484774:1416484774
 * channel:InputChannel
 * user_id:InputUser
 */
export interface ChannelsGetParticipantM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputUserT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetParticipantM = r<new () => ChannelsGetParticipantM>(
  0x546dd7a6,
  "ChannelsGetParticipantM",
  () => ["channel", TypeRW(InputChannelT), "user_id", TypeRW(InputUserT)]
);

/**
 * channels.getChannels:channels.getChannels messages.Chats
 * #a7f6bbb:176122811:176122811
 * id:Vector<InputChannel>
 */
export interface ChannelsGetChannelsM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputChannelT>];

  get_id(): VectorS<InputChannelT>;
  set_id(val: VectorS<InputChannelT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetChannelsM = r<new () => ChannelsGetChannelsM>(
  0xa7f6bbb,
  "ChannelsGetChannelsM",
  () => ["id", VectorRW(TypeRW(InputChannelT))]
);

/**
 * channels.getFullChannel:channels.getFullChannel messages.ChatFull
 * #8736a09:141781513:141781513
 * channel:InputChannel
 */
export interface ChannelsGetFullChannelM {
  _id: number;
  _method(): void;
  _values: [InputChannelT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetFullChannelM = r<new () => ChannelsGetFullChannelM>(
  0x8736a09,
  "ChannelsGetFullChannelM",
  () => ["channel", TypeRW(InputChannelT)]
);

/**
 * channels.editAdmin:channels.editAdmin Updates
 * #d33c8902:3543959810:-751007486
 * channel:InputChannel
 * user_id:InputUser
 * admin_rights:ChatAdminRights
 * rank:string
 */
export interface ChannelsEditAdminM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputUserT, ChatAdminRightsT, string];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_admin_rights(): ChatAdminRightsT;
  set_admin_rights(val: ChatAdminRightsT): this;

  get_rank(): string;
  set_rank(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsEditAdminM = r<new () => ChannelsEditAdminM>(
  0xd33c8902,
  "ChannelsEditAdminM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "user_id",
    TypeRW(InputUserT),
    "admin_rights",
    TypeRW(ChatAdminRightsT),
    "rank",
    StringRW
  ]
);

/**
 * channels.editTitle:channels.editTitle Updates
 * #566decd0:1450044624:1450044624
 * channel:InputChannel
 * title:string
 */
export interface ChannelsEditTitleM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, string];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_title(): string;
  set_title(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsEditTitleM = r<new () => ChannelsEditTitleM>(
  0x566decd0,
  "ChannelsEditTitleM",
  () => ["channel", TypeRW(InputChannelT), "title", StringRW]
);

/**
 * channels.editPhoto:channels.editPhoto Updates
 * #f12e57c9:4046346185:-248621111
 * channel:InputChannel
 * photo:InputChatPhoto
 */
export interface ChannelsEditPhotoM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputChatPhotoT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_photo(): InputChatPhotoT;
  set_photo(val: InputChatPhotoT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsEditPhotoM = r<new () => ChannelsEditPhotoM>(
  0xf12e57c9,
  "ChannelsEditPhotoM",
  () => ["channel", TypeRW(InputChannelT), "photo", TypeRW(InputChatPhotoT)]
);

/**
 * channels.checkUsername:channels.checkUsername Bool
 * #10e6bd2c:283557164:283557164
 * channel:InputChannel
 * username:string
 */
export interface ChannelsCheckUsernameM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, string];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_username(): string;
  set_username(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsCheckUsernameM = r<new () => ChannelsCheckUsernameM>(
  0x10e6bd2c,
  "ChannelsCheckUsernameM",
  () => ["channel", TypeRW(InputChannelT), "username", StringRW]
);

/**
 * channels.updateUsername:channels.updateUsername Bool
 * #3514b3de:890549214:890549214
 * channel:InputChannel
 * username:string
 */
export interface ChannelsUpdateUsernameM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, string];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_username(): string;
  set_username(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsUpdateUsernameM = r<new () => ChannelsUpdateUsernameM>(
  0x3514b3de,
  "ChannelsUpdateUsernameM",
  () => ["channel", TypeRW(InputChannelT), "username", StringRW]
);

/**
 * channels.joinChannel:channels.joinChannel Updates
 * #24b524c5:615851205:615851205
 * channel:InputChannel
 */
export interface ChannelsJoinChannelM {
  _id: number;
  _method(): void;
  _values: [InputChannelT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsJoinChannelM = r<new () => ChannelsJoinChannelM>(
  0x24b524c5,
  "ChannelsJoinChannelM",
  () => ["channel", TypeRW(InputChannelT)]
);

/**
 * channels.leaveChannel:channels.leaveChannel Updates
 * #f836aa95:4164332181:-130635115
 * channel:InputChannel
 */
export interface ChannelsLeaveChannelM {
  _id: number;
  _method(): void;
  _values: [InputChannelT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsLeaveChannelM = r<new () => ChannelsLeaveChannelM>(
  0xf836aa95,
  "ChannelsLeaveChannelM",
  () => ["channel", TypeRW(InputChannelT)]
);

/**
 * channels.inviteToChannel:channels.inviteToChannel Updates
 * #199f3a6c:429865580:429865580
 * channel:InputChannel
 * users:Vector<InputUser>
 */
export interface ChannelsInviteToChannelM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, VectorS<InputUserT>];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_users(): VectorS<InputUserT>;
  set_users(val: VectorS<InputUserT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsInviteToChannelM = r<new () => ChannelsInviteToChannelM>(
  0x199f3a6c,
  "ChannelsInviteToChannelM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "users",
    VectorRW(TypeRW(InputUserT))
  ]
);

/**
 * channels.deleteChannel:channels.deleteChannel Updates
 * #c0111fe3:3222347747:-1072619549
 * channel:InputChannel
 */
export interface ChannelsDeleteChannelM {
  _id: number;
  _method(): void;
  _values: [InputChannelT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsDeleteChannelM = r<new () => ChannelsDeleteChannelM>(
  0xc0111fe3,
  "ChannelsDeleteChannelM",
  () => ["channel", TypeRW(InputChannelT)]
);

/**
 * updates.getChannelDifference:updates.getChannelDifference updates.ChannelDifference
 * #3173d78:51854712:51854712
 * flags:#
 * force:flags.0?true
 * channel:InputChannel
 * filter:ChannelMessagesFilter
 * pts:int
 * limit:int
 */
export interface UpdatesGetChannelDifferenceM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    InputChannelT,
    ChannelMessagesFilterT,
    number,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_force(): true;
  set_force(val: true): this;

  has_force(): boolean;

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_filter(): ChannelMessagesFilterT;
  set_filter(val: ChannelMessagesFilterT): this;

  get_pts(): number;
  set_pts(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UpdatesGetChannelDifferenceM = r<
  new () => UpdatesGetChannelDifferenceM
>(0x3173d78, "UpdatesGetChannelDifferenceM", () => [
  "flags",
  IntRW,
  "force",
  Optional(TrueRW, 0, 0),
  "channel",
  TypeRW(InputChannelT),
  "filter",
  TypeRW(ChannelMessagesFilterT),
  "pts",
  IntRW,
  "limit",
  IntRW
]);

/**
 * messages.editChatAdmin:messages.editChatAdmin Bool
 * #a9e69f2e:2850463534:-1444503762
 * chat_id:int
 * user_id:InputUser
 * is_admin:Bool
 */
export interface MessagesEditChatAdminM {
  _id: number;
  _method(): void;
  _values: [number, InputUserT, BoolT];

  get_chat_id(): number;
  set_chat_id(val: number): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_is_admin(): BoolT;
  set_is_admin(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditChatAdminM = r<new () => MessagesEditChatAdminM>(
  0xa9e69f2e,
  "MessagesEditChatAdminM",
  () => [
    "chat_id",
    IntRW,
    "user_id",
    TypeRW(InputUserT),
    "is_admin",
    TypeRW(BoolT)
  ]
);

/**
 * messages.searchGlobal:messages.searchGlobal messages.Messages
 * #bf7225a4:3211928996:-1083038300
 * flags:#
 * folder_id:flags.0?int
 * q:string
 * offset_rate:int
 * offset_peer:InputPeer
 * offset_id:int
 * limit:int
 */
export interface MessagesSearchGlobalM {
  _id: number;
  _method(): void;
  _values: [number, number, string, number, InputPeerT, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  has_folder_id(): boolean;

  get_q(): string;
  set_q(val: string): this;

  get_offset_rate(): number;
  set_offset_rate(val: number): this;

  get_offset_peer(): InputPeerT;
  set_offset_peer(val: InputPeerT): this;

  get_offset_id(): number;
  set_offset_id(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSearchGlobalM = r<new () => MessagesSearchGlobalM>(
  0xbf7225a4,
  "MessagesSearchGlobalM",
  () => [
    "flags",
    IntRW,
    "folder_id",
    Optional(IntRW, 0, 0),
    "q",
    StringRW,
    "offset_rate",
    IntRW,
    "offset_peer",
    TypeRW(InputPeerT),
    "offset_id",
    IntRW,
    "limit",
    IntRW
  ]
);

/**
 * messages.getInlineBotResults:messages.getInlineBotResults messages.BotResults
 * #514e999d:1364105629:1364105629
 * flags:#
 * bot:InputUser
 * peer:InputPeer
 * geo_point:flags.0?InputGeoPoint
 * query:string
 * offset:string
 */
export interface MessagesGetInlineBotResultsM {
  _id: number;
  _method(): void;
  _values: [number, InputUserT, InputPeerT, InputGeoPointT, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_bot(): InputUserT;
  set_bot(val: InputUserT): this;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  has_geo_point(): boolean;

  get_query(): string;
  set_query(val: string): this;

  get_offset(): string;
  set_offset(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetInlineBotResultsM = r<
  new () => MessagesGetInlineBotResultsM
>(0x514e999d, "MessagesGetInlineBotResultsM", () => [
  "flags",
  IntRW,
  "bot",
  TypeRW(InputUserT),
  "peer",
  TypeRW(InputPeerT),
  "geo_point",
  Optional(TypeRW(InputGeoPointT), 0, 0),
  "query",
  StringRW,
  "offset",
  StringRW
]);

/**
 * messages.setInlineBotResults:messages.setInlineBotResults Bool
 * #eb5ea206:3948847622:-346119674
 * flags:#
 * gallery:flags.0?true
 * private:flags.1?true
 * query_id:long
 * results:Vector<InputBotInlineResult>
 * cache_time:int
 * next_offset:flags.2?string
 * switch_pm:flags.3?InlineBotSwitchPM
 */
export interface MessagesSetInlineBotResultsM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    true,
    ProtoLong,
    VectorS<InputBotInlineResultT>,
    number,
    string,
    InlineBotSwitchPmT
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_gallery(): true;
  set_gallery(val: true): this;

  has_gallery(): boolean;

  get_private(): true;
  set_private(val: true): this;

  has_private(): boolean;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_results(): VectorS<InputBotInlineResultT>;
  set_results(val: VectorS<InputBotInlineResultT>): this;

  get_cache_time(): number;
  set_cache_time(val: number): this;

  get_next_offset(): string;
  set_next_offset(val: string): this;

  has_next_offset(): boolean;

  get_switch_pm(): InlineBotSwitchPmT;
  set_switch_pm(val: InlineBotSwitchPmT): this;

  has_switch_pm(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetInlineBotResultsM = r<
  new () => MessagesSetInlineBotResultsM
>(0xeb5ea206, "MessagesSetInlineBotResultsM", () => [
  "flags",
  IntRW,
  "gallery",
  Optional(TrueRW, 0, 0),
  "private",
  Optional(TrueRW, 0, 1),
  "query_id",
  LongRW,
  "results",
  VectorRW(TypeRW(InputBotInlineResultT)),
  "cache_time",
  IntRW,
  "next_offset",
  Optional(StringRW, 0, 2),
  "switch_pm",
  Optional(TypeRW(InlineBotSwitchPmT), 0, 3)
]);

/**
 * messages.sendInlineBotResult:messages.sendInlineBotResult Updates
 * #220815b0:570955184:570955184
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * hide_via:flags.11?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * random_id:long
 * query_id:long
 * id:string
 * schedule_date:flags.10?int
 */
export interface MessagesSendInlineBotResultM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    true,
    true,
    true,
    InputPeerT,
    number,
    ProtoLong,
    ProtoLong,
    string,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_background(): true;
  set_background(val: true): this;

  has_background(): boolean;

  get_clear_draft(): true;
  set_clear_draft(val: true): this;

  has_clear_draft(): boolean;

  get_hide_via(): true;
  set_hide_via(val: true): this;

  has_hide_via(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  get_query_id(): ProtoLong;
  set_query_id(val: ProtoLong): this;

  get_id(): string;
  set_id(val: string): this;

  get_schedule_date(): number;
  set_schedule_date(val: number): this;

  has_schedule_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendInlineBotResultM = r<
  new () => MessagesSendInlineBotResultM
>(0x220815b0, "MessagesSendInlineBotResultM", () => [
  "flags",
  IntRW,
  "silent",
  Optional(TrueRW, 0, 5),
  "background",
  Optional(TrueRW, 0, 6),
  "clear_draft",
  Optional(TrueRW, 0, 7),
  "hide_via",
  Optional(TrueRW, 0, 11),
  "peer",
  TypeRW(InputPeerT),
  "reply_to_msg_id",
  Optional(IntRW, 0, 0),
  "random_id",
  LongRW,
  "query_id",
  LongRW,
  "id",
  StringRW,
  "schedule_date",
  Optional(IntRW, 0, 10)
]);

/**
 * channels.exportMessageLink:channels.exportMessageLink ExportedMessageLink
 * #ceb77163:3468128611:-826838685
 * channel:InputChannel
 * id:int
 * grouped:Bool
 */
export interface ChannelsExportMessageLinkM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, number, BoolT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_id(): number;
  set_id(val: number): this;

  get_grouped(): BoolT;
  set_grouped(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsExportMessageLinkM = r<new () => ChannelsExportMessageLinkM>(
  0xceb77163,
  "ChannelsExportMessageLinkM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "id",
    IntRW,
    "grouped",
    TypeRW(BoolT)
  ]
);

/**
 * channels.toggleSignatures:channels.toggleSignatures Updates
 * #1f69b606:527021574:527021574
 * channel:InputChannel
 * enabled:Bool
 */
export interface ChannelsToggleSignaturesM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, BoolT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_enabled(): BoolT;
  set_enabled(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsToggleSignaturesM = r<new () => ChannelsToggleSignaturesM>(
  0x1f69b606,
  "ChannelsToggleSignaturesM",
  () => ["channel", TypeRW(InputChannelT), "enabled", TypeRW(BoolT)]
);

/**
 * messages.getMessageEditData:messages.getMessageEditData messages.MessageEditData
 * #fda68d36:4255550774:-39416522
 * peer:InputPeer
 * id:int
 */
export interface MessagesGetMessageEditDataM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetMessageEditDataM = r<
  new () => MessagesGetMessageEditDataM
>(0xfda68d36, "MessagesGetMessageEditDataM", () => [
  "peer",
  TypeRW(InputPeerT),
  "id",
  IntRW
]);

/**
 * messages.editMessage:messages.editMessage Updates
 * #48f71778:1224152952:1224152952
 * flags:#
 * no_webpage:flags.1?true
 * peer:InputPeer
 * id:int
 * message:flags.11?string
 * media:flags.14?InputMedia
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 * schedule_date:flags.15?int
 */
export interface MessagesEditMessageM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    InputPeerT,
    number,
    string,
    InputMediaT,
    ReplyMarkupT,
    VectorS<MessageEntityT>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): number;
  set_id(val: number): this;

  get_message(): string;
  set_message(val: string): this;

  has_message(): boolean;

  get_media(): InputMediaT;
  set_media(val: InputMediaT): this;

  has_media(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  get_schedule_date(): number;
  set_schedule_date(val: number): this;

  has_schedule_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditMessageM = r<new () => MessagesEditMessageM>(
  0x48f71778,
  "MessagesEditMessageM",
  () => [
    "flags",
    IntRW,
    "no_webpage",
    Optional(TrueRW, 0, 1),
    "peer",
    TypeRW(InputPeerT),
    "id",
    IntRW,
    "message",
    Optional(StringRW, 0, 11),
    "media",
    Optional(TypeRW(InputMediaT), 0, 14),
    "reply_markup",
    Optional(TypeRW(ReplyMarkupT), 0, 2),
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3),
    "schedule_date",
    Optional(IntRW, 0, 15)
  ]
);

/**
 * messages.editInlineBotMessage:messages.editInlineBotMessage Bool
 * #83557dba:2203418042:-2091549254
 * flags:#
 * no_webpage:flags.1?true
 * id:InputBotInlineMessageID
 * message:flags.11?string
 * media:flags.14?InputMedia
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 */
export interface MessagesEditInlineBotMessageM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    InputBotInlineMessageIdT,
    string,
    InputMediaT,
    ReplyMarkupT,
    VectorS<MessageEntityT>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_id(): InputBotInlineMessageIdT;
  set_id(val: InputBotInlineMessageIdT): this;

  get_message(): string;
  set_message(val: string): this;

  has_message(): boolean;

  get_media(): InputMediaT;
  set_media(val: InputMediaT): this;

  has_media(): boolean;

  get_reply_markup(): ReplyMarkupT;
  set_reply_markup(val: ReplyMarkupT): this;

  has_reply_markup(): boolean;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditInlineBotMessageM = r<
  new () => MessagesEditInlineBotMessageM
>(0x83557dba, "MessagesEditInlineBotMessageM", () => [
  "flags",
  IntRW,
  "no_webpage",
  Optional(TrueRW, 0, 1),
  "id",
  TypeRW(InputBotInlineMessageIdT),
  "message",
  Optional(StringRW, 0, 11),
  "media",
  Optional(TypeRW(InputMediaT), 0, 14),
  "reply_markup",
  Optional(TypeRW(ReplyMarkupT), 0, 2),
  "entities",
  Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3)
]);

/**
 * messages.getBotCallbackAnswer:messages.getBotCallbackAnswer messages.BotCallbackAnswer
 * #810a9fec:2164957164:-2130010132
 * flags:#
 * game:flags.1?true
 * peer:InputPeer
 * msg_id:int
 * data:flags.0?bytes
 */
export interface MessagesGetBotCallbackAnswerM {
  _id: number;
  _method(): void;
  _values: [number, true, InputPeerT, number, Uint8Array];

  get_flags(): number;
  set_flags(val: number): this;

  get_game(): true;
  set_game(val: true): this;

  has_game(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_data(): Uint8Array;
  set_data(val: Uint8Array): this;

  has_data(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetBotCallbackAnswerM = r<
  new () => MessagesGetBotCallbackAnswerM
>(0x810a9fec, "MessagesGetBotCallbackAnswerM", () => [
  "flags",
  IntRW,
  "game",
  Optional(TrueRW, 0, 1),
  "peer",
  TypeRW(InputPeerT),
  "msg_id",
  IntRW,
  "data",
  Optional(BytesRW, 0, 0)
]);

/**
 * contacts.resetTopPeerRating:contacts.resetTopPeerRating Bool
 * #1ae373ac:451113900:451113900
 * category:TopPeerCategory
 * peer:InputPeer
 */
export interface ContactsResetTopPeerRatingM {
  _id: number;
  _method(): void;
  _values: [TopPeerCategoryT, InputPeerT];

  get_category(): TopPeerCategoryT;
  set_category(val: TopPeerCategoryT): this;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsResetTopPeerRatingM = r<
  new () => ContactsResetTopPeerRatingM
>(0x1ae373ac, "ContactsResetTopPeerRatingM", () => [
  "category",
  TypeRW(TopPeerCategoryT),
  "peer",
  TypeRW(InputPeerT)
]);

/**
 * messages.getPeerDialogs:messages.getPeerDialogs messages.PeerDialogs
 * #e470bcfd:3832593661:-462373635
 * peers:Vector<InputDialogPeer>
 */
export interface MessagesGetPeerDialogsM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputDialogPeerT>];

  get_peers(): VectorS<InputDialogPeerT>;
  set_peers(val: VectorS<InputDialogPeerT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetPeerDialogsM = r<new () => MessagesGetPeerDialogsM>(
  0xe470bcfd,
  "MessagesGetPeerDialogsM",
  () => ["peers", VectorRW(TypeRW(InputDialogPeerT))]
);

/**
 * messages.saveDraft:messages.saveDraft Bool
 * #bc39e14b:3157909835:-1137057461
 * flags:#
 * no_webpage:flags.1?true
 * reply_to_msg_id:flags.0?int
 * peer:InputPeer
 * message:string
 * entities:flags.3?Vector<MessageEntity>
 */
export interface MessagesSaveDraftM {
  _id: number;
  _method(): void;
  _values: [number, true, number, InputPeerT, string, VectorS<MessageEntityT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_no_webpage(): true;
  set_no_webpage(val: true): this;

  has_no_webpage(): boolean;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  has_entities(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSaveDraftM = r<new () => MessagesSaveDraftM>(
  0xbc39e14b,
  "MessagesSaveDraftM",
  () => [
    "flags",
    IntRW,
    "no_webpage",
    Optional(TrueRW, 0, 1),
    "reply_to_msg_id",
    Optional(IntRW, 0, 0),
    "peer",
    TypeRW(InputPeerT),
    "message",
    StringRW,
    "entities",
    Optional(VectorRW(TypeRW(MessageEntityT)), 0, 3)
  ]
);

/**
 * messages.setGameScore:messages.setGameScore Updates
 * #8ef8ecc0:2398678208:-1896289088
 * flags:#
 * edit_message:flags.0?true
 * force:flags.1?true
 * peer:InputPeer
 * id:int
 * user_id:InputUser
 * score:int
 */
export interface MessagesSetGameScoreM {
  _id: number;
  _method(): void;
  _values: [number, true, true, InputPeerT, number, InputUserT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_edit_message(): true;
  set_edit_message(val: true): this;

  has_edit_message(): boolean;

  get_force(): true;
  set_force(val: true): this;

  has_force(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): number;
  set_id(val: number): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_score(): number;
  set_score(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetGameScoreM = r<new () => MessagesSetGameScoreM>(
  0x8ef8ecc0,
  "MessagesSetGameScoreM",
  () => [
    "flags",
    IntRW,
    "edit_message",
    Optional(TrueRW, 0, 0),
    "force",
    Optional(TrueRW, 0, 1),
    "peer",
    TypeRW(InputPeerT),
    "id",
    IntRW,
    "user_id",
    TypeRW(InputUserT),
    "score",
    IntRW
  ]
);

/**
 * messages.setInlineGameScore:messages.setInlineGameScore Bool
 * #15ad9f64:363700068:363700068
 * flags:#
 * edit_message:flags.0?true
 * force:flags.1?true
 * id:InputBotInlineMessageID
 * user_id:InputUser
 * score:int
 */
export interface MessagesSetInlineGameScoreM {
  _id: number;
  _method(): void;
  _values: [number, true, true, InputBotInlineMessageIdT, InputUserT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_edit_message(): true;
  set_edit_message(val: true): this;

  has_edit_message(): boolean;

  get_force(): true;
  set_force(val: true): this;

  has_force(): boolean;

  get_id(): InputBotInlineMessageIdT;
  set_id(val: InputBotInlineMessageIdT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_score(): number;
  set_score(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSetInlineGameScoreM = r<
  new () => MessagesSetInlineGameScoreM
>(0x15ad9f64, "MessagesSetInlineGameScoreM", () => [
  "flags",
  IntRW,
  "edit_message",
  Optional(TrueRW, 0, 0),
  "force",
  Optional(TrueRW, 0, 1),
  "id",
  TypeRW(InputBotInlineMessageIdT),
  "user_id",
  TypeRW(InputUserT),
  "score",
  IntRW
]);

/**
 * messages.getGameHighScores:messages.getGameHighScores messages.HighScores
 * #e822649d:3894568093:-400399203
 * peer:InputPeer
 * id:int
 * user_id:InputUser
 */
export interface MessagesGetGameHighScoresM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, InputUserT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): number;
  set_id(val: number): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetGameHighScoresM = r<new () => MessagesGetGameHighScoresM>(
  0xe822649d,
  "MessagesGetGameHighScoresM",
  () => ["peer", TypeRW(InputPeerT), "id", IntRW, "user_id", TypeRW(InputUserT)]
);

/**
 * messages.getInlineGameHighScores:messages.getInlineGameHighScores messages.HighScores
 * #f635e1b:258170395:258170395
 * id:InputBotInlineMessageID
 * user_id:InputUser
 */
export interface MessagesGetInlineGameHighScoresM {
  _id: number;
  _method(): void;
  _values: [InputBotInlineMessageIdT, InputUserT];

  get_id(): InputBotInlineMessageIdT;
  set_id(val: InputBotInlineMessageIdT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetInlineGameHighScoresM = r<
  new () => MessagesGetInlineGameHighScoresM
>(0xf635e1b, "MessagesGetInlineGameHighScoresM", () => [
  "id",
  TypeRW(InputBotInlineMessageIdT),
  "user_id",
  TypeRW(InputUserT)
]);

/**
 * messages.getCommonChats:messages.getCommonChats messages.Chats
 * #d0a48c4:218777796:218777796
 * user_id:InputUser
 * max_id:int
 * limit:int
 */
export interface MessagesGetCommonChatsM {
  _id: number;
  _method(): void;
  _values: [InputUserT, number, number];

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetCommonChatsM = r<new () => MessagesGetCommonChatsM>(
  0xd0a48c4,
  "MessagesGetCommonChatsM",
  () => ["user_id", TypeRW(InputUserT), "max_id", IntRW, "limit", IntRW]
);

/**
 * messages.toggleDialogPin:messages.toggleDialogPin Bool
 * #a731e257:2805064279:-1489903017
 * flags:#
 * pinned:flags.0?true
 * peer:InputDialogPeer
 */
export interface MessagesToggleDialogPinM {
  _id: number;
  _method(): void;
  _values: [number, true, InputDialogPeerT];

  get_flags(): number;
  set_flags(val: number): this;

  get_pinned(): true;
  set_pinned(val: true): this;

  has_pinned(): boolean;

  get_peer(): InputDialogPeerT;
  set_peer(val: InputDialogPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesToggleDialogPinM = r<new () => MessagesToggleDialogPinM>(
  0xa731e257,
  "MessagesToggleDialogPinM",
  () => [
    "flags",
    IntRW,
    "pinned",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(InputDialogPeerT)
  ]
);

/**
 * messages.reorderPinnedDialogs:messages.reorderPinnedDialogs Bool
 * #3b1adf37:991616823:991616823
 * flags:#
 * force:flags.0?true
 * folder_id:int
 * order:Vector<InputDialogPeer>
 */
export interface MessagesReorderPinnedDialogsM {
  _id: number;
  _method(): void;
  _values: [number, true, number, VectorS<InputDialogPeerT>];

  get_flags(): number;
  set_flags(val: number): this;

  get_force(): true;
  set_force(val: true): this;

  has_force(): boolean;

  get_folder_id(): number;
  set_folder_id(val: number): this;

  get_order(): VectorS<InputDialogPeerT>;
  set_order(val: VectorS<InputDialogPeerT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReorderPinnedDialogsM = r<
  new () => MessagesReorderPinnedDialogsM
>(0x3b1adf37, "MessagesReorderPinnedDialogsM", () => [
  "flags",
  IntRW,
  "force",
  Optional(TrueRW, 0, 0),
  "folder_id",
  IntRW,
  "order",
  VectorRW(TypeRW(InputDialogPeerT))
]);

/**
 * stickers.createStickerSet:stickers.createStickerSet messages.StickerSet
 * #9bd86e6a:2614652522:-1680314774
 * flags:#
 * masks:flags.0?true
 * user_id:InputUser
 * title:string
 * short_name:string
 * stickers:Vector<InputStickerSetItem>
 */
export interface StickersCreateStickerSetM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    InputUserT,
    string,
    string,
    VectorS<InputStickerSetItemS>
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_masks(): true;
  set_masks(val: true): this;

  has_masks(): boolean;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_title(): string;
  set_title(val: string): this;

  get_short_name(): string;
  set_short_name(val: string): this;

  get_stickers(): VectorS<InputStickerSetItemS>;
  set_stickers(val: VectorS<InputStickerSetItemS>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let StickersCreateStickerSetM = r<new () => StickersCreateStickerSetM>(
  0x9bd86e6a,
  "StickersCreateStickerSetM",
  () => [
    "flags",
    IntRW,
    "masks",
    Optional(TrueRW, 0, 0),
    "user_id",
    TypeRW(InputUserT),
    "title",
    StringRW,
    "short_name",
    StringRW,
    "stickers",
    VectorRW(TypeRW(InputStickerSetItemS))
  ]
);

/**
 * messages.uploadMedia:messages.uploadMedia MessageMedia
 * #519bc2b1:1369162417:1369162417
 * peer:InputPeer
 * media:InputMedia
 */
export interface MessagesUploadMediaM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, InputMediaT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_media(): InputMediaT;
  set_media(val: InputMediaT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesUploadMediaM = r<new () => MessagesUploadMediaM>(
  0x519bc2b1,
  "MessagesUploadMediaM",
  () => ["peer", TypeRW(InputPeerT), "media", TypeRW(InputMediaT)]
);

/**
 * phone.requestCall:phone.requestCall phone.PhoneCall
 * #42ff96ed:1124046573:1124046573
 * flags:#
 * video:flags.0?true
 * user_id:InputUser
 * random_id:int
 * g_a_hash:bytes
 * protocol:PhoneCallProtocol
 */
export interface PhoneRequestCallM {
  _id: number;
  _method(): void;
  _values: [number, true, InputUserT, number, Uint8Array, PhoneCallProtocolT];

  get_flags(): number;
  set_flags(val: number): this;

  get_video(): true;
  set_video(val: true): this;

  has_video(): boolean;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_random_id(): number;
  set_random_id(val: number): this;

  get_g_a_hash(): Uint8Array;
  set_g_a_hash(val: Uint8Array): this;

  get_protocol(): PhoneCallProtocolT;
  set_protocol(val: PhoneCallProtocolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PhoneRequestCallM = r<new () => PhoneRequestCallM>(
  0x42ff96ed,
  "PhoneRequestCallM",
  () => [
    "flags",
    IntRW,
    "video",
    Optional(TrueRW, 0, 0),
    "user_id",
    TypeRW(InputUserT),
    "random_id",
    IntRW,
    "g_a_hash",
    BytesRW,
    "protocol",
    TypeRW(PhoneCallProtocolT)
  ]
);

/**
 * channels.editBanned:channels.editBanned Updates
 * #72796912:1920559378:1920559378
 * channel:InputChannel
 * user_id:InputUser
 * banned_rights:ChatBannedRights
 */
export interface ChannelsEditBannedM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputUserT, ChatBannedRightsT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_banned_rights(): ChatBannedRightsT;
  set_banned_rights(val: ChatBannedRightsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsEditBannedM = r<new () => ChannelsEditBannedM>(
  0x72796912,
  "ChannelsEditBannedM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "user_id",
    TypeRW(InputUserT),
    "banned_rights",
    TypeRW(ChatBannedRightsT)
  ]
);

/**
 * channels.getAdminLog:channels.getAdminLog channels.AdminLogResults
 * #33ddf480:870184064:870184064
 * flags:#
 * channel:InputChannel
 * q:string
 * events_filter:flags.0?ChannelAdminLogEventsFilter
 * admins:flags.1?Vector<InputUser>
 * max_id:long
 * min_id:long
 * limit:int
 */
export interface ChannelsGetAdminLogM {
  _id: number;
  _method(): void;
  _values: [
    number,
    InputChannelT,
    string,
    ChannelAdminLogEventsFilterS,
    VectorS<InputUserT>,
    ProtoLong,
    ProtoLong,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_q(): string;
  set_q(val: string): this;

  get_events_filter(): ChannelAdminLogEventsFilterS;
  set_events_filter(val: ChannelAdminLogEventsFilterS): this;

  has_events_filter(): boolean;

  get_admins(): VectorS<InputUserT>;
  set_admins(val: VectorS<InputUserT>): this;

  has_admins(): boolean;

  get_max_id(): ProtoLong;
  set_max_id(val: ProtoLong): this;

  get_min_id(): ProtoLong;
  set_min_id(val: ProtoLong): this;

  get_limit(): number;
  set_limit(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsGetAdminLogM = r<new () => ChannelsGetAdminLogM>(
  0x33ddf480,
  "ChannelsGetAdminLogM",
  () => [
    "flags",
    IntRW,
    "channel",
    TypeRW(InputChannelT),
    "q",
    StringRW,
    "events_filter",
    Optional(TypeRW(ChannelAdminLogEventsFilterS), 0, 0),
    "admins",
    Optional(VectorRW(TypeRW(InputUserT)), 0, 1),
    "max_id",
    LongRW,
    "min_id",
    LongRW,
    "limit",
    IntRW
  ]
);

/**
 * messages.sendScreenshotNotification:messages.sendScreenshotNotification Updates
 * #c97df020:3380473888:-914493408
 * peer:InputPeer
 * reply_to_msg_id:int
 * random_id:long
 */
export interface MessagesSendScreenshotNotificationM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, ProtoLong];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  get_random_id(): ProtoLong;
  set_random_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendScreenshotNotificationM = r<
  new () => MessagesSendScreenshotNotificationM
>(0xc97df020, "MessagesSendScreenshotNotificationM", () => [
  "peer",
  TypeRW(InputPeerT),
  "reply_to_msg_id",
  IntRW,
  "random_id",
  LongRW
]);

/**
 * channels.setStickers:channels.setStickers Bool
 * #ea8ca4f9:3935085817:-359881479
 * channel:InputChannel
 * stickerset:InputStickerSet
 */
export interface ChannelsSetStickersM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputStickerSetT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_stickerset(): InputStickerSetT;
  set_stickerset(val: InputStickerSetT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsSetStickersM = r<new () => ChannelsSetStickersM>(
  0xea8ca4f9,
  "ChannelsSetStickersM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "stickerset",
    TypeRW(InputStickerSetT)
  ]
);

/**
 * channels.readMessageContents:channels.readMessageContents Bool
 * #eab5dc38:3937786936:-357180360
 * channel:InputChannel
 * id:Vector<int>
 */
export interface ChannelsReadMessageContentsM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, VectorS<number>];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsReadMessageContentsM = r<
  new () => ChannelsReadMessageContentsM
>(0xeab5dc38, "ChannelsReadMessageContentsM", () => [
  "channel",
  TypeRW(InputChannelT),
  "id",
  VectorRW(IntRW)
]);

/**
 * messages.getUnreadMentions:messages.getUnreadMentions messages.Messages
 * #46578472:1180140658:1180140658
 * peer:InputPeer
 * offset_id:int
 * add_offset:int
 * limit:int
 * max_id:int
 * min_id:int
 */
export interface MessagesGetUnreadMentionsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, number, number, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_offset_id(): number;
  set_offset_id(val: number): this;

  get_add_offset(): number;
  set_add_offset(val: number): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  get_min_id(): number;
  set_min_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetUnreadMentionsM = r<new () => MessagesGetUnreadMentionsM>(
  0x46578472,
  "MessagesGetUnreadMentionsM",
  () => [
    "peer",
    TypeRW(InputPeerT),
    "offset_id",
    IntRW,
    "add_offset",
    IntRW,
    "limit",
    IntRW,
    "max_id",
    IntRW,
    "min_id",
    IntRW
  ]
);

/**
 * channels.deleteHistory:channels.deleteHistory Bool
 * #af369d42:2939592002:-1355375294
 * channel:InputChannel
 * max_id:int
 */
export interface ChannelsDeleteHistoryM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, number];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_max_id(): number;
  set_max_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsDeleteHistoryM = r<new () => ChannelsDeleteHistoryM>(
  0xaf369d42,
  "ChannelsDeleteHistoryM",
  () => ["channel", TypeRW(InputChannelT), "max_id", IntRW]
);

/**
 * channels.togglePreHistoryHidden:channels.togglePreHistoryHidden Updates
 * #eabbb94c:3938171212:-356796084
 * channel:InputChannel
 * enabled:Bool
 */
export interface ChannelsTogglePreHistoryHiddenM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, BoolT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_enabled(): BoolT;
  set_enabled(val: BoolT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsTogglePreHistoryHiddenM = r<
  new () => ChannelsTogglePreHistoryHiddenM
>(0xeabbb94c, "ChannelsTogglePreHistoryHiddenM", () => [
  "channel",
  TypeRW(InputChannelT),
  "enabled",
  TypeRW(BoolT)
]);

/**
 * messages.readMentions:messages.readMentions messages.AffectedHistory
 * #f0189d3:251759059:251759059
 * peer:InputPeer
 */
export interface MessagesReadMentionsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesReadMentionsM = r<new () => MessagesReadMentionsM>(
  0xf0189d3,
  "MessagesReadMentionsM",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * messages.getRecentLocations:messages.getRecentLocations messages.Messages
 * #bbc45b09:3150207753:-1144759543
 * peer:InputPeer
 * limit:int
 * hash:int
 */
export interface MessagesGetRecentLocationsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_limit(): number;
  set_limit(val: number): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetRecentLocationsM = r<
  new () => MessagesGetRecentLocationsM
>(0xbbc45b09, "MessagesGetRecentLocationsM", () => [
  "peer",
  TypeRW(InputPeerT),
  "limit",
  IntRW,
  "hash",
  IntRW
]);

/**
 * messages.sendMultiMedia:messages.sendMultiMedia Updates
 * #cc0110cb:3422621899:-872345397
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * multi_media:Vector<InputSingleMedia>
 * schedule_date:flags.10?int
 */
export interface MessagesSendMultiMediaM {
  _id: number;
  _method(): void;
  _values: [
    number,
    true,
    true,
    true,
    InputPeerT,
    number,
    VectorS<InputSingleMediaS>,
    number
  ];

  get_flags(): number;
  set_flags(val: number): this;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_background(): true;
  set_background(val: true): this;

  has_background(): boolean;

  get_clear_draft(): true;
  set_clear_draft(val: true): this;

  has_clear_draft(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_reply_to_msg_id(): number;
  set_reply_to_msg_id(val: number): this;

  has_reply_to_msg_id(): boolean;

  get_multi_media(): VectorS<InputSingleMediaS>;
  set_multi_media(val: VectorS<InputSingleMediaS>): this;

  get_schedule_date(): number;
  set_schedule_date(val: number): this;

  has_schedule_date(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendMultiMediaM = r<new () => MessagesSendMultiMediaM>(
  0xcc0110cb,
  "MessagesSendMultiMediaM",
  () => [
    "flags",
    IntRW,
    "silent",
    Optional(TrueRW, 0, 5),
    "background",
    Optional(TrueRW, 0, 6),
    "clear_draft",
    Optional(TrueRW, 0, 7),
    "peer",
    TypeRW(InputPeerT),
    "reply_to_msg_id",
    Optional(IntRW, 0, 0),
    "multi_media",
    VectorRW(TypeRW(InputSingleMediaS)),
    "schedule_date",
    Optional(IntRW, 0, 10)
  ]
);

/**
 * upload.getFileHashes:upload.getFileHashes Vector<FileHash>
 * #c7025931:3338819889:-956147407
 * location:InputFileLocation
 * offset:int
 */
export interface UploadGetFileHashesM {
  _id: number;
  _method(): void;
  _values: [InputFileLocationT, number];

  get_location(): InputFileLocationT;
  set_location(val: InputFileLocationT): this;

  get_offset(): number;
  set_offset(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UploadGetFileHashesM = r<new () => UploadGetFileHashesM>(
  0xc7025931,
  "UploadGetFileHashesM",
  () => ["location", TypeRW(InputFileLocationT), "offset", IntRW]
);

/**
 * users.setSecureValueErrors:users.setSecureValueErrors Bool
 * #90c894b5:2429064373:-1865902923
 * id:InputUser
 * errors:Vector<SecureValueError>
 */
export interface UsersSetSecureValueErrorsM {
  _id: number;
  _method(): void;
  _values: [InputUserT, VectorS<SecureValueErrorT>];

  get_id(): InputUserT;
  set_id(val: InputUserT): this;

  get_errors(): VectorS<SecureValueErrorT>;
  set_errors(val: VectorS<SecureValueErrorT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let UsersSetSecureValueErrorsM = r<new () => UsersSetSecureValueErrorsM>(
  0x90c894b5,
  "UsersSetSecureValueErrorsM",
  () => [
    "id",
    TypeRW(InputUserT),
    "errors",
    VectorRW(TypeRW(SecureValueErrorT))
  ]
);

/**
 * messages.markDialogUnread:messages.markDialogUnread Bool
 * #c286d98f:3263617423:-1031349873
 * flags:#
 * unread:flags.0?true
 * peer:InputDialogPeer
 */
export interface MessagesMarkDialogUnreadM {
  _id: number;
  _method(): void;
  _values: [number, true, InputDialogPeerT];

  get_flags(): number;
  set_flags(val: number): this;

  get_unread(): true;
  set_unread(val: true): this;

  has_unread(): boolean;

  get_peer(): InputDialogPeerT;
  set_peer(val: InputDialogPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesMarkDialogUnreadM = r<new () => MessagesMarkDialogUnreadM>(
  0xc286d98f,
  "MessagesMarkDialogUnreadM",
  () => [
    "flags",
    IntRW,
    "unread",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(InputDialogPeerT)
  ]
);

/**
 * help.saveAppLog:help.saveAppLog Bool
 * #6f02f748:1862465352:1862465352
 * events:Vector<InputAppEvent>
 */
export interface HelpSaveAppLogM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputAppEventS>];

  get_events(): VectorS<InputAppEventS>;
  set_events(val: VectorS<InputAppEventS>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpSaveAppLogM = r<new () => HelpSaveAppLogM>(
  0x6f02f748,
  "HelpSaveAppLogM",
  () => ["events", VectorRW(TypeRW(InputAppEventS))]
);

/**
 * messages.updatePinnedMessage:messages.updatePinnedMessage Updates
 * #d2aaf7ec:3534419948:-760547348
 * flags:#
 * silent:flags.0?true
 * peer:InputPeer
 * id:int
 */
export interface MessagesUpdatePinnedMessageM {
  _id: number;
  _method(): void;
  _values: [number, true, InputPeerT, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_silent(): true;
  set_silent(val: true): this;

  has_silent(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): number;
  set_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesUpdatePinnedMessageM = r<
  new () => MessagesUpdatePinnedMessageM
>(0xd2aaf7ec, "MessagesUpdatePinnedMessageM", () => [
  "flags",
  IntRW,
  "silent",
  Optional(TrueRW, 0, 0),
  "peer",
  TypeRW(InputPeerT),
  "id",
  IntRW
]);

/**
 * help.getUserInfo:help.getUserInfo help.UserInfo
 * #38a08d3:59377875:59377875
 * user_id:InputUser
 */
export interface HelpGetUserInfoM {
  _id: number;
  _method(): void;
  _values: [InputUserT];

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpGetUserInfoM = r<new () => HelpGetUserInfoM>(
  0x38a08d3,
  "HelpGetUserInfoM",
  () => ["user_id", TypeRW(InputUserT)]
);

/**
 * help.editUserInfo:help.editUserInfo help.UserInfo
 * #66b91b70:1723407216:1723407216
 * user_id:InputUser
 * message:string
 * entities:Vector<MessageEntity>
 */
export interface HelpEditUserInfoM {
  _id: number;
  _method(): void;
  _values: [InputUserT, string, VectorS<MessageEntityT>];

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_message(): string;
  set_message(val: string): this;

  get_entities(): VectorS<MessageEntityT>;
  set_entities(val: VectorS<MessageEntityT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HelpEditUserInfoM = r<new () => HelpEditUserInfoM>(
  0x66b91b70,
  "HelpEditUserInfoM",
  () => [
    "user_id",
    TypeRW(InputUserT),
    "message",
    StringRW,
    "entities",
    VectorRW(TypeRW(MessageEntityT))
  ]
);

/**
 * account.getNotifyExceptions:account.getNotifyExceptions Updates
 * #53577479:1398240377:1398240377
 * flags:#
 * compare_sound:flags.1?true
 * peer:flags.0?InputNotifyPeer
 */
export interface AccountGetNotifyExceptionsM {
  _id: number;
  _method(): void;
  _values: [number, true, InputNotifyPeerT];

  get_flags(): number;
  set_flags(val: number): this;

  get_compare_sound(): true;
  set_compare_sound(val: true): this;

  has_compare_sound(): boolean;

  get_peer(): InputNotifyPeerT;
  set_peer(val: InputNotifyPeerT): this;

  has_peer(): boolean;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let AccountGetNotifyExceptionsM = r<
  new () => AccountGetNotifyExceptionsM
>(0x53577479, "AccountGetNotifyExceptionsM", () => [
  "flags",
  IntRW,
  "compare_sound",
  Optional(TrueRW, 0, 1),
  "peer",
  Optional(TypeRW(InputNotifyPeerT), 0, 0)
]);

/**
 * messages.sendVote:messages.sendVote Updates
 * #10ea6184:283795844:283795844
 * peer:InputPeer
 * msg_id:int
 * options:Vector<bytes>
 */
export interface MessagesSendVoteM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, VectorS<Uint8Array>];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_options(): VectorS<Uint8Array>;
  set_options(val: VectorS<Uint8Array>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendVoteM = r<new () => MessagesSendVoteM>(
  0x10ea6184,
  "MessagesSendVoteM",
  () => [
    "peer",
    TypeRW(InputPeerT),
    "msg_id",
    IntRW,
    "options",
    VectorRW(BytesRW)
  ]
);

/**
 * messages.getPollResults:messages.getPollResults Updates
 * #73bb643b:1941660731:1941660731
 * peer:InputPeer
 * msg_id:int
 */
export interface MessagesGetPollResultsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetPollResultsM = r<new () => MessagesGetPollResultsM>(
  0x73bb643b,
  "MessagesGetPollResultsM",
  () => ["peer", TypeRW(InputPeerT), "msg_id", IntRW]
);

/**
 * messages.getOnlines:messages.getOnlines ChatOnlines
 * #6e2be050:1848369232:1848369232
 * peer:InputPeer
 */
export interface MessagesGetOnlinesM {
  _id: number;
  _method(): void;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetOnlinesM = r<new () => MessagesGetOnlinesM>(
  0x6e2be050,
  "MessagesGetOnlinesM",
  () => ["peer", TypeRW(InputPeerT)]
);

/**
 * messages.getStatsURL:messages.getStatsURL StatsURL
 * #812c2ae6:2167155430:-2127811866
 * flags:#
 * dark:flags.0?true
 * peer:InputPeer
 * params:string
 */
export interface MessagesGetStatsUrlM {
  _id: number;
  _method(): void;
  _values: [number, true, InputPeerT, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_dark(): true;
  set_dark(val: true): this;

  has_dark(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_params(): string;
  set_params(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetStatsUrlM = r<new () => MessagesGetStatsUrlM>(
  0x812c2ae6,
  "MessagesGetStatsUrlM",
  () => [
    "flags",
    IntRW,
    "dark",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(InputPeerT),
    "params",
    StringRW
  ]
);

/**
 * messages.editChatAbout:messages.editChatAbout Bool
 * #def60797:3740665751:-554301545
 * peer:InputPeer
 * about:string
 */
export interface MessagesEditChatAboutM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, string];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_about(): string;
  set_about(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditChatAboutM = r<new () => MessagesEditChatAboutM>(
  0xdef60797,
  "MessagesEditChatAboutM",
  () => ["peer", TypeRW(InputPeerT), "about", StringRW]
);

/**
 * messages.editChatDefaultBannedRights:messages.editChatDefaultBannedRights Updates
 * #a5866b41:2777049921:-1517917375
 * peer:InputPeer
 * banned_rights:ChatBannedRights
 */
export interface MessagesEditChatDefaultBannedRightsM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, ChatBannedRightsT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_banned_rights(): ChatBannedRightsT;
  set_banned_rights(val: ChatBannedRightsT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesEditChatDefaultBannedRightsM = r<
  new () => MessagesEditChatDefaultBannedRightsM
>(0xa5866b41, "MessagesEditChatDefaultBannedRightsM", () => [
  "peer",
  TypeRW(InputPeerT),
  "banned_rights",
  TypeRW(ChatBannedRightsT)
]);

/**
 * folders.editPeerFolders:folders.editPeerFolders Updates
 * #6847d0ab:1749536939:1749536939
 * folder_peers:Vector<InputFolderPeer>
 */
export interface FoldersEditPeerFoldersM {
  _id: number;
  _method(): void;
  _values: [VectorS<InputFolderPeerS>];

  get_folder_peers(): VectorS<InputFolderPeerS>;
  set_folder_peers(val: VectorS<InputFolderPeerS>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FoldersEditPeerFoldersM = r<new () => FoldersEditPeerFoldersM>(
  0x6847d0ab,
  "FoldersEditPeerFoldersM",
  () => ["folder_peers", VectorRW(TypeRW(InputFolderPeerS))]
);

/**
 * messages.getSearchCounters:messages.getSearchCounters Vector<messages.SearchCounter>
 * #732eef00:1932455680:1932455680
 * peer:InputPeer
 * filters:Vector<MessagesFilter>
 */
export interface MessagesGetSearchCountersM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, VectorS<MessagesFilterT>];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_filters(): VectorS<MessagesFilterT>;
  set_filters(val: VectorS<MessagesFilterT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetSearchCountersM = r<new () => MessagesGetSearchCountersM>(
  0x732eef00,
  "MessagesGetSearchCountersM",
  () => [
    "peer",
    TypeRW(InputPeerT),
    "filters",
    VectorRW(TypeRW(MessagesFilterT))
  ]
);

/**
 * channels.setDiscussionGroup:channels.setDiscussionGroup Bool
 * #40582bb2:1079520178:1079520178
 * broadcast:InputChannel
 * group:InputChannel
 */
export interface ChannelsSetDiscussionGroupM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputChannelT];

  get_broadcast(): InputChannelT;
  set_broadcast(val: InputChannelT): this;

  get_group(): InputChannelT;
  set_group(val: InputChannelT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsSetDiscussionGroupM = r<
  new () => ChannelsSetDiscussionGroupM
>(0x40582bb2, "ChannelsSetDiscussionGroupM", () => [
  "broadcast",
  TypeRW(InputChannelT),
  "group",
  TypeRW(InputChannelT)
]);

/**
 * messages.requestUrlAuth:messages.requestUrlAuth UrlAuthResult
 * #e33f5613:3812578835:-482388461
 * peer:InputPeer
 * msg_id:int
 * button_id:int
 */
export interface MessagesRequestUrlAuthM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_button_id(): number;
  set_button_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesRequestUrlAuthM = r<new () => MessagesRequestUrlAuthM>(
  0xe33f5613,
  "MessagesRequestUrlAuthM",
  () => ["peer", TypeRW(InputPeerT), "msg_id", IntRW, "button_id", IntRW]
);

/**
 * messages.acceptUrlAuth:messages.acceptUrlAuth UrlAuthResult
 * #f729ea98:4146719384:-148247912
 * flags:#
 * write_allowed:flags.0?true
 * peer:InputPeer
 * msg_id:int
 * button_id:int
 */
export interface MessagesAcceptUrlAuthM {
  _id: number;
  _method(): void;
  _values: [number, true, InputPeerT, number, number];

  get_flags(): number;
  set_flags(val: number): this;

  get_write_allowed(): true;
  set_write_allowed(val: true): this;

  has_write_allowed(): boolean;

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_msg_id(): number;
  set_msg_id(val: number): this;

  get_button_id(): number;
  set_button_id(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesAcceptUrlAuthM = r<new () => MessagesAcceptUrlAuthM>(
  0xf729ea98,
  "MessagesAcceptUrlAuthM",
  () => [
    "flags",
    IntRW,
    "write_allowed",
    Optional(TrueRW, 0, 0),
    "peer",
    TypeRW(InputPeerT),
    "msg_id",
    IntRW,
    "button_id",
    IntRW
  ]
);

/**
 * messages.hidePeerSettingsBar:messages.hidePeerSettingsBar Bool
 * #4facb138:1336717624:1336717624
 * peer:InputPeer
 */
export interface MessagesHidePeerSettingsBarM {
  _id: number;
  _method(): void;
  _values: [InputPeerT];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesHidePeerSettingsBarM = r<
  new () => MessagesHidePeerSettingsBarM
>(0x4facb138, "MessagesHidePeerSettingsBarM", () => [
  "peer",
  TypeRW(InputPeerT)
]);

/**
 * contacts.addContact:contacts.addContact Updates
 * #e8f463d0:3908330448:-386636848
 * flags:#
 * add_phone_privacy_exception:flags.0?true
 * id:InputUser
 * first_name:string
 * last_name:string
 * phone:string
 */
export interface ContactsAddContactM {
  _id: number;
  _method(): void;
  _values: [number, true, InputUserT, string, string, string];

  get_flags(): number;
  set_flags(val: number): this;

  get_add_phone_privacy_exception(): true;
  set_add_phone_privacy_exception(val: true): this;

  has_add_phone_privacy_exception(): boolean;

  get_id(): InputUserT;
  set_id(val: InputUserT): this;

  get_first_name(): string;
  set_first_name(val: string): this;

  get_last_name(): string;
  set_last_name(val: string): this;

  get_phone(): string;
  set_phone(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsAddContactM = r<new () => ContactsAddContactM>(
  0xe8f463d0,
  "ContactsAddContactM",
  () => [
    "flags",
    IntRW,
    "add_phone_privacy_exception",
    Optional(TrueRW, 0, 0),
    "id",
    TypeRW(InputUserT),
    "first_name",
    StringRW,
    "last_name",
    StringRW,
    "phone",
    StringRW
  ]
);

/**
 * contacts.acceptContact:contacts.acceptContact Updates
 * #f831a20f:4164002319:-130964977
 * id:InputUser
 */
export interface ContactsAcceptContactM {
  _id: number;
  _method(): void;
  _values: [InputUserT];

  get_id(): InputUserT;
  set_id(val: InputUserT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ContactsAcceptContactM = r<new () => ContactsAcceptContactM>(
  0xf831a20f,
  "ContactsAcceptContactM",
  () => ["id", TypeRW(InputUserT)]
);

/**
 * channels.editCreator:channels.editCreator Updates
 * #8f38cd1f:2402864415:-1892102881
 * channel:InputChannel
 * user_id:InputUser
 * password:InputCheckPasswordSRP
 */
export interface ChannelsEditCreatorM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputUserT, InputCheckPasswordSrpT];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_user_id(): InputUserT;
  set_user_id(val: InputUserT): this;

  get_password(): InputCheckPasswordSrpT;
  set_password(val: InputCheckPasswordSrpT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsEditCreatorM = r<new () => ChannelsEditCreatorM>(
  0x8f38cd1f,
  "ChannelsEditCreatorM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "user_id",
    TypeRW(InputUserT),
    "password",
    TypeRW(InputCheckPasswordSrpT)
  ]
);

/**
 * channels.editLocation:channels.editLocation Bool
 * #58e63f6d:1491484525:1491484525
 * channel:InputChannel
 * geo_point:InputGeoPoint
 * address:string
 */
export interface ChannelsEditLocationM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, InputGeoPointT, string];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_geo_point(): InputGeoPointT;
  set_geo_point(val: InputGeoPointT): this;

  get_address(): string;
  set_address(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsEditLocationM = r<new () => ChannelsEditLocationM>(
  0x58e63f6d,
  "ChannelsEditLocationM",
  () => [
    "channel",
    TypeRW(InputChannelT),
    "geo_point",
    TypeRW(InputGeoPointT),
    "address",
    StringRW
  ]
);

/**
 * channels.toggleSlowMode:channels.toggleSlowMode Updates
 * #edd49ef0:3990134512:-304832784
 * channel:InputChannel
 * seconds:int
 */
export interface ChannelsToggleSlowModeM {
  _id: number;
  _method(): void;
  _values: [InputChannelT, number];

  get_channel(): InputChannelT;
  set_channel(val: InputChannelT): this;

  get_seconds(): number;
  set_seconds(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ChannelsToggleSlowModeM = r<new () => ChannelsToggleSlowModeM>(
  0xedd49ef0,
  "ChannelsToggleSlowModeM",
  () => ["channel", TypeRW(InputChannelT), "seconds", IntRW]
);

/**
 * messages.getScheduledHistory:messages.getScheduledHistory messages.Messages
 * #e2c2685b:3804391515:-490575781
 * peer:InputPeer
 * hash:int
 */
export interface MessagesGetScheduledHistoryM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, number];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_hash(): number;
  set_hash(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetScheduledHistoryM = r<
  new () => MessagesGetScheduledHistoryM
>(0xe2c2685b, "MessagesGetScheduledHistoryM", () => [
  "peer",
  TypeRW(InputPeerT),
  "hash",
  IntRW
]);

/**
 * messages.getScheduledMessages:messages.getScheduledMessages messages.Messages
 * #bdbb0464:3183150180:-1111817116
 * peer:InputPeer
 * id:Vector<int>
 */
export interface MessagesGetScheduledMessagesM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, VectorS<number>];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesGetScheduledMessagesM = r<
  new () => MessagesGetScheduledMessagesM
>(0xbdbb0464, "MessagesGetScheduledMessagesM", () => [
  "peer",
  TypeRW(InputPeerT),
  "id",
  VectorRW(IntRW)
]);

/**
 * messages.sendScheduledMessages:messages.sendScheduledMessages Updates
 * #bd38850a:3174597898:-1120369398
 * peer:InputPeer
 * id:Vector<int>
 */
export interface MessagesSendScheduledMessagesM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, VectorS<number>];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesSendScheduledMessagesM = r<
  new () => MessagesSendScheduledMessagesM
>(0xbd38850a, "MessagesSendScheduledMessagesM", () => [
  "peer",
  TypeRW(InputPeerT),
  "id",
  VectorRW(IntRW)
]);

/**
 * messages.deleteScheduledMessages:messages.deleteScheduledMessages Updates
 * #59ae2b16:1504586518:1504586518
 * peer:InputPeer
 * id:Vector<int>
 */
export interface MessagesDeleteScheduledMessagesM {
  _id: number;
  _method(): void;
  _values: [InputPeerT, VectorS<number>];

  get_peer(): InputPeerT;
  set_peer(val: InputPeerT): this;

  get_id(): VectorS<number>;
  set_id(val: VectorS<number>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessagesDeleteScheduledMessagesM = r<
  new () => MessagesDeleteScheduledMessagesM
>(0x59ae2b16, "MessagesDeleteScheduledMessagesM", () => [
  "peer",
  TypeRW(InputPeerT),
  "id",
  VectorRW(IntRW)
]);

/**
 * auth.signUp:auth.Authorization
 * #80eee427:2163139623:-2131827673
 * phone_number:string
 * phone_code_hash:string
 * first_name:string
 * last_name:string
 */
export let CallAuthSignUpM = c;
export type CallAuthSignUpM = (
  invoker: ApiInvoker | Connection,
  req: AuthSignUpM
) => Promise<(AuthAuthorizationT | RpcErrorS) & { dc: number }>;

/**
 * auth.signIn:auth.Authorization
 * #bcd51581:3168081281:-1126886015
 * phone_number:string
 * phone_code_hash:string
 * phone_code:string
 */
export let CallAuthSignInM = c;
export type CallAuthSignInM = (
  invoker: ApiInvoker | Connection,
  req: AuthSignInM
) => Promise<(AuthAuthorizationT | RpcErrorS) & { dc: number }>;

/**
 * auth.importAuthorization:auth.Authorization
 * #e3ef9613:3824129555:-470837741
 * id:int
 * bytes:bytes
 */
export let CallAuthImportAuthorizationM = c;
export type CallAuthImportAuthorizationM = (
  invoker: ApiInvoker | Connection,
  req: AuthImportAuthorizationM
) => Promise<(AuthAuthorizationT | RpcErrorS) & { dc: number }>;

/**
 * account.updateNotifySettings:Bool
 * #84be5b93:2227067795:-2067899501
 * peer:InputNotifyPeer
 * settings:InputPeerNotifySettings
 */
export let CallAccountUpdateNotifySettingsM = c;
export type CallAccountUpdateNotifySettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountUpdateNotifySettingsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.getNotifySettings:PeerNotifySettings
 * #12b3ad31:313765169:313765169
 * peer:InputNotifyPeer
 */
export let CallAccountGetNotifySettingsM = c;
export type CallAccountGetNotifySettingsM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetNotifySettingsM
) => Promise<(PeerNotifySettingsT | RpcErrorS) & { dc: number }>;

/**
 * account.reportPeer:Bool
 * #ae189d5f:2920848735:-1374118561
 * peer:InputPeer
 * reason:ReportReason
 */
export let CallAccountReportPeerM = c;
export type CallAccountReportPeerM = (
  invoker: ApiInvoker | Connection,
  req: AccountReportPeerM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * users.getUsers:Vector<User>
 * #d91a548:227648840:227648840
 * id:Vector<InputUser>
 */
export let CallUsersGetUsersM = c;
export type CallUsersGetUsersM = (
  invoker: ApiInvoker | Connection,
  req: UsersGetUsersM
) => Promise<(VectorS<UserT> | RpcErrorS) & { dc: number }>;

/**
 * users.getFullUser:UserFull
 * #ca30a5b1:3392185777:-902781519
 * id:InputUser
 */
export let CallUsersGetFullUserM = c;
export type CallUsersGetFullUserM = (
  invoker: ApiInvoker | Connection,
  req: UsersGetFullUserM
) => Promise<(UserFullS | RpcErrorS) & { dc: number }>;

/**
 * contacts.deleteContacts:Updates
 * #96a0e00:157945344:157945344
 * id:Vector<InputUser>
 */
export let CallContactsDeleteContactsM = c;
export type CallContactsDeleteContactsM = (
  invoker: ApiInvoker | Connection,
  req: ContactsDeleteContactsM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * contacts.block:Bool
 * #332b49fc:858475004:858475004
 * id:InputUser
 */
export let CallContactsBlockM = c;
export type CallContactsBlockM = (
  invoker: ApiInvoker | Connection,
  req: ContactsBlockM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * contacts.unblock:Bool
 * #e54100bd:3846242493:-448724803
 * id:InputUser
 */
export let CallContactsUnblockM = c;
export type CallContactsUnblockM = (
  invoker: ApiInvoker | Connection,
  req: ContactsUnblockM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getMessages:messages.Messages
 * #63c66506:1673946374:1673946374
 * id:Vector<InputMessage>
 */
export let CallMessagesGetMessagesM = c;
export type CallMessagesGetMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetMessagesM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getDialogs:messages.Dialogs
 * #a0ee3b73:2699967347:-1594999949
 * flags:#
 * exclude_pinned:flags.0?true
 * folder_id:flags.1?int
 * offset_date:int
 * offset_id:int
 * offset_peer:InputPeer
 * limit:int
 * hash:int
 */
export let CallMessagesGetDialogsM = c;
export type CallMessagesGetDialogsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetDialogsM
) => Promise<(MessagesDialogsT | RpcErrorS) & { dc: number }>;

/**
 * messages.getHistory:messages.Messages
 * #dcbb8260:3703276128:-591691168
 * peer:InputPeer
 * offset_id:int
 * offset_date:int
 * add_offset:int
 * limit:int
 * max_id:int
 * min_id:int
 * hash:int
 */
export let CallMessagesGetHistoryM = c;
export type CallMessagesGetHistoryM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetHistoryM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.search:messages.Messages
 * #8614ef68:2249518952:-2045448344
 * flags:#
 * peer:InputPeer
 * q:string
 * from_id:flags.0?InputUser
 * filter:MessagesFilter
 * min_date:int
 * max_date:int
 * offset_id:int
 * add_offset:int
 * limit:int
 * max_id:int
 * min_id:int
 * hash:int
 */
export let CallMessagesSearchM = c;
export type CallMessagesSearchM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSearchM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.readHistory:messages.AffectedMessages
 * #e306d3a:238054714:238054714
 * peer:InputPeer
 * max_id:int
 */
export let CallMessagesReadHistoryM = c;
export type CallMessagesReadHistoryM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReadHistoryM
) => Promise<(MessagesAffectedMessagesS | RpcErrorS) & { dc: number }>;

/**
 * messages.deleteHistory:messages.AffectedHistory
 * #1c015b09:469850889:469850889
 * flags:#
 * just_clear:flags.0?true
 * revoke:flags.1?true
 * peer:InputPeer
 * max_id:int
 */
export let CallMessagesDeleteHistoryM = c;
export type CallMessagesDeleteHistoryM = (
  invoker: ApiInvoker | Connection,
  req: MessagesDeleteHistoryM
) => Promise<(MessagesAffectedHistoryS | RpcErrorS) & { dc: number }>;

/**
 * messages.setTyping:Bool
 * #a3825e50:2743230032:-1551737264
 * peer:InputPeer
 * action:SendMessageAction
 */
export let CallMessagesSetTypingM = c;
export type CallMessagesSetTypingM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetTypingM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendMessage:Updates
 * #520c3870:1376532592:1376532592
 * flags:#
 * no_webpage:flags.1?true
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * message:string
 * random_id:long
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 * schedule_date:flags.10?int
 */
export let CallMessagesSendMessageM = c;
export type CallMessagesSendMessageM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendMessageM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendMedia:Updates
 * #3491eba9:881978281:881978281
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * media:InputMedia
 * message:string
 * random_id:long
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 * schedule_date:flags.10?int
 */
export let CallMessagesSendMediaM = c;
export type CallMessagesSendMediaM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendMediaM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.forwardMessages:Updates
 * #d9fee60e:3657360910:-637606386
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * with_my_score:flags.8?true
 * grouped:flags.9?true
 * from_peer:InputPeer
 * id:Vector<int>
 * random_id:Vector<long>
 * to_peer:InputPeer
 * schedule_date:flags.10?int
 */
export let CallMessagesForwardMessagesM = c;
export type CallMessagesForwardMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesForwardMessagesM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.reportSpam:Bool
 * #cf1592db:3474297563:-820669733
 * peer:InputPeer
 */
export let CallMessagesReportSpamM = c;
export type CallMessagesReportSpamM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReportSpamM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getPeerSettings:PeerSettings
 * #3672e09c:913498268:913498268
 * peer:InputPeer
 */
export let CallMessagesGetPeerSettingsM = c;
export type CallMessagesGetPeerSettingsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetPeerSettingsM
) => Promise<(PeerSettingsT | RpcErrorS) & { dc: number }>;

/**
 * messages.report:Bool
 * #bd82b658:3179460184:-1115507112
 * peer:InputPeer
 * id:Vector<int>
 * reason:ReportReason
 */
export let CallMessagesReportM = c;
export type CallMessagesReportM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReportM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getChats:messages.Chats
 * #3c6aa187:1013621127:1013621127
 * id:Vector<int>
 */
export let CallMessagesGetChatsM = c;
export type CallMessagesGetChatsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetChatsM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * messages.getFullChat:messages.ChatFull
 * #3b831c66:998448230:998448230
 * chat_id:int
 */
export let CallMessagesGetFullChatM = c;
export type CallMessagesGetFullChatM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetFullChatM
) => Promise<(MessagesChatFullS | RpcErrorS) & { dc: number }>;

/**
 * messages.editChatTitle:Updates
 * #dc452855:3695519829:-599447467
 * chat_id:int
 * title:string
 */
export let CallMessagesEditChatTitleM = c;
export type CallMessagesEditChatTitleM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditChatTitleM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.editChatPhoto:Updates
 * #ca4c79d8:3394009560:-900957736
 * chat_id:int
 * photo:InputChatPhoto
 */
export let CallMessagesEditChatPhotoM = c;
export type CallMessagesEditChatPhotoM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditChatPhotoM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.addChatUser:Updates
 * #f9a0aa09:4188056073:-106911223
 * chat_id:int
 * user_id:InputUser
 * fwd_limit:int
 */
export let CallMessagesAddChatUserM = c;
export type CallMessagesAddChatUserM = (
  invoker: ApiInvoker | Connection,
  req: MessagesAddChatUserM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.deleteChatUser:Updates
 * #e0611f16:3764461334:-530505962
 * chat_id:int
 * user_id:InputUser
 */
export let CallMessagesDeleteChatUserM = c;
export type CallMessagesDeleteChatUserM = (
  invoker: ApiInvoker | Connection,
  req: MessagesDeleteChatUserM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.createChat:Updates
 * #9cb126e:164303470:164303470
 * users:Vector<InputUser>
 * title:string
 */
export let CallMessagesCreateChatM = c;
export type CallMessagesCreateChatM = (
  invoker: ApiInvoker | Connection,
  req: MessagesCreateChatM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * updates.getDifference:updates.Difference
 * #25939651:630429265:630429265
 * flags:#
 * pts:int
 * pts_total_limit:flags.0?int
 * date:int
 * qts:int
 */
export let CallUpdatesGetDifferenceM = c;
export type CallUpdatesGetDifferenceM = (
  invoker: ApiInvoker | Connection,
  req: UpdatesGetDifferenceM
) => Promise<(UpdatesDifferenceT | RpcErrorS) & { dc: number }>;

/**
 * upload.getFile:upload.File
 * #b15a9afc:2975505148:-1319462148
 * flags:#
 * precise:flags.0?true
 * location:InputFileLocation
 * offset:int
 * limit:int
 */
export let CallUploadGetFileM = c;
export type CallUploadGetFileM = (
  invoker: ApiInvoker | Connection,
  req: UploadGetFileM
) => Promise<(UploadFileT | RpcErrorS) & { dc: number }>;

/**
 * help.getAppUpdate:help.AppUpdate
 * #522d5a7d:1378703997:1378703997
 * source:string
 */
export let CallHelpGetAppUpdateM = c;
export type CallHelpGetAppUpdateM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetAppUpdateM
) => Promise<(HelpAppUpdateT | RpcErrorS) & { dc: number }>;

/**
 * photos.getUserPhotos:photos.Photos
 * #91cd32a8:2446144168:-1848823128
 * user_id:InputUser
 * offset:int
 * max_id:long
 * limit:int
 */
export let CallPhotosGetUserPhotosM = c;
export type CallPhotosGetUserPhotosM = (
  invoker: ApiInvoker | Connection,
  req: PhotosGetUserPhotosM
) => Promise<(PhotosPhotosT | RpcErrorS) & { dc: number }>;

/**
 * messages.requestEncryption:EncryptedChat
 * #f64daf43:4132286275:-162681021
 * user_id:InputUser
 * random_id:int
 * g_a:bytes
 */
export let CallMessagesRequestEncryptionM = c;
export type CallMessagesRequestEncryptionM = (
  invoker: ApiInvoker | Connection,
  req: MessagesRequestEncryptionM
) => Promise<(EncryptedChatT | RpcErrorS) & { dc: number }>;

/**
 * contacts.search:contacts.Found
 * #11f812d8:301470424:301470424
 * q:string
 * limit:int
 */
export let CallContactsSearchM = c;
export type CallContactsSearchM = (
  invoker: ApiInvoker | Connection,
  req: ContactsSearchM
) => Promise<(ContactsFoundS | RpcErrorS) & { dc: number }>;

/**
 * account.getPrivacy:account.PrivacyRules
 * #dadbc950:3671837008:-623130288
 * key:InputPrivacyKey
 */
export let CallAccountGetPrivacyM = c;
export type CallAccountGetPrivacyM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetPrivacyM
) => Promise<(AccountPrivacyRulesS | RpcErrorS) & { dc: number }>;

/**
 * account.setPrivacy:account.PrivacyRules
 * #c9f81ce8:3388480744:-906486552
 * key:InputPrivacyKey
 * rules:Vector<InputPrivacyRule>
 */
export let CallAccountSetPrivacyM = c;
export type CallAccountSetPrivacyM = (
  invoker: ApiInvoker | Connection,
  req: AccountSetPrivacyM
) => Promise<(AccountPrivacyRulesS | RpcErrorS) & { dc: number }>;

/**
 * contacts.resolveUsername:contacts.ResolvedPeer
 * #f93ccba3:4181511075:-113456221
 * username:string
 */
export let CallContactsResolveUsernameM = c;
export type CallContactsResolveUsernameM = (
  invoker: ApiInvoker | Connection,
  req: ContactsResolveUsernameM
) => Promise<(ContactsResolvedPeerS | RpcErrorS) & { dc: number }>;

/**
 * auth.importBotAuthorization:auth.Authorization
 * #67a3ff2c:1738800940:1738800940
 * flags:int
 * api_id:int
 * api_hash:string
 * bot_auth_token:string
 */
export let CallAuthImportBotAuthorizationM = c;
export type CallAuthImportBotAuthorizationM = (
  invoker: ApiInvoker | Connection,
  req: AuthImportBotAuthorizationM
) => Promise<(AuthAuthorizationT | RpcErrorS) & { dc: number }>;

/**
 * messages.getWebPagePreview:MessageMedia
 * #8b68b0cc:2338894028:-1956073268
 * flags:#
 * message:string
 * entities:flags.3?Vector<MessageEntity>
 */
export let CallMessagesGetWebPagePreviewM = c;
export type CallMessagesGetWebPagePreviewM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetWebPagePreviewM
) => Promise<(MessageMediaT | RpcErrorS) & { dc: number }>;

/**
 * auth.checkPassword:auth.Authorization
 * #d18b4d16:3515567382:-779399914
 * password:InputCheckPasswordSRP
 */
export let CallAuthCheckPasswordM = c;
export type CallAuthCheckPasswordM = (
  invoker: ApiInvoker | Connection,
  req: AuthCheckPasswordM
) => Promise<(AuthAuthorizationT | RpcErrorS) & { dc: number }>;

/**
 * auth.recoverPassword:auth.Authorization
 * #4ea56e92:1319464594:1319464594
 * code:string
 */
export let CallAuthRecoverPasswordM = c;
export type CallAuthRecoverPasswordM = (
  invoker: ApiInvoker | Connection,
  req: AuthRecoverPasswordM
) => Promise<(AuthAuthorizationT | RpcErrorS) & { dc: number }>;

/**
 * messages.exportChatInvite:ExportedChatInvite
 * #df7534c:234312524:234312524
 * peer:InputPeer
 */
export let CallMessagesExportChatInviteM = c;
export type CallMessagesExportChatInviteM = (
  invoker: ApiInvoker | Connection,
  req: MessagesExportChatInviteM
) => Promise<(ExportedChatInviteT | RpcErrorS) & { dc: number }>;

/**
 * messages.checkChatInvite:ChatInvite
 * #3eadb1bb:1051570619:1051570619
 * hash:string
 */
export let CallMessagesCheckChatInviteM = c;
export type CallMessagesCheckChatInviteM = (
  invoker: ApiInvoker | Connection,
  req: MessagesCheckChatInviteM
) => Promise<(ChatInviteT | RpcErrorS) & { dc: number }>;

/**
 * messages.importChatInvite:Updates
 * #6c50051c:1817183516:1817183516
 * hash:string
 */
export let CallMessagesImportChatInviteM = c;
export type CallMessagesImportChatInviteM = (
  invoker: ApiInvoker | Connection,
  req: MessagesImportChatInviteM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.startBot:Updates
 * #e6df7378:3873403768:-421563528
 * bot:InputUser
 * peer:InputPeer
 * random_id:long
 * start_param:string
 */
export let CallMessagesStartBotM = c;
export type CallMessagesStartBotM = (
  invoker: ApiInvoker | Connection,
  req: MessagesStartBotM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * help.getAppChangelog:Updates
 * #9010ef6f:2417028975:-1877938321
 * prev_app_version:string
 */
export let CallHelpGetAppChangelogM = c;
export type CallHelpGetAppChangelogM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetAppChangelogM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getMessagesViews:Vector<int>
 * #c4c8a55d:3301483869:-993483427
 * peer:InputPeer
 * id:Vector<int>
 * increment:Bool
 */
export let CallMessagesGetMessagesViewsM = c;
export type CallMessagesGetMessagesViewsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetMessagesViewsM
) => Promise<(VectorS<number> | RpcErrorS) & { dc: number }>;

/**
 * channels.readHistory:Bool
 * #cc104937:3423619383:-871347913
 * channel:InputChannel
 * max_id:int
 */
export let CallChannelsReadHistoryM = c;
export type CallChannelsReadHistoryM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsReadHistoryM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * channels.deleteMessages:messages.AffectedMessages
 * #84c1fd4e:2227305806:-2067661490
 * channel:InputChannel
 * id:Vector<int>
 */
export let CallChannelsDeleteMessagesM = c;
export type CallChannelsDeleteMessagesM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsDeleteMessagesM
) => Promise<(MessagesAffectedMessagesS | RpcErrorS) & { dc: number }>;

/**
 * channels.deleteUserHistory:messages.AffectedHistory
 * #d10dd71b:3507345179:-787622117
 * channel:InputChannel
 * user_id:InputUser
 */
export let CallChannelsDeleteUserHistoryM = c;
export type CallChannelsDeleteUserHistoryM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsDeleteUserHistoryM
) => Promise<(MessagesAffectedHistoryS | RpcErrorS) & { dc: number }>;

/**
 * channels.reportSpam:Bool
 * #fe087810:4261967888:-32999408
 * channel:InputChannel
 * user_id:InputUser
 * id:Vector<int>
 */
export let CallChannelsReportSpamM = c;
export type CallChannelsReportSpamM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsReportSpamM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * channels.getMessages:messages.Messages
 * #ad8c9a23:2911672867:-1383294429
 * channel:InputChannel
 * id:Vector<InputMessage>
 */
export let CallChannelsGetMessagesM = c;
export type CallChannelsGetMessagesM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetMessagesM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * channels.getParticipants:channels.ChannelParticipants
 * #123e05e9:306054633:306054633
 * channel:InputChannel
 * filter:ChannelParticipantsFilter
 * offset:int
 * limit:int
 * hash:int
 */
export let CallChannelsGetParticipantsM = c;
export type CallChannelsGetParticipantsM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetParticipantsM
) => Promise<(ChannelsChannelParticipantsT | RpcErrorS) & { dc: number }>;

/**
 * channels.getParticipant:channels.ChannelParticipant
 * #546dd7a6:1416484774:1416484774
 * channel:InputChannel
 * user_id:InputUser
 */
export let CallChannelsGetParticipantM = c;
export type CallChannelsGetParticipantM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetParticipantM
) => Promise<(ChannelsChannelParticipantS | RpcErrorS) & { dc: number }>;

/**
 * channels.getChannels:messages.Chats
 * #a7f6bbb:176122811:176122811
 * id:Vector<InputChannel>
 */
export let CallChannelsGetChannelsM = c;
export type CallChannelsGetChannelsM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetChannelsM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * channels.getFullChannel:messages.ChatFull
 * #8736a09:141781513:141781513
 * channel:InputChannel
 */
export let CallChannelsGetFullChannelM = c;
export type CallChannelsGetFullChannelM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetFullChannelM
) => Promise<(MessagesChatFullS | RpcErrorS) & { dc: number }>;

/**
 * channels.createChannel:Updates
 * #3d5fb10f:1029681423:1029681423
 * flags:#
 * broadcast:flags.0?true
 * megagroup:flags.1?true
 * title:string
 * about:string
 * geo_point:flags.2?InputGeoPoint
 * address:flags.2?string
 */
export let CallChannelsCreateChannelM = c;
export type CallChannelsCreateChannelM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsCreateChannelM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.editAdmin:Updates
 * #d33c8902:3543959810:-751007486
 * channel:InputChannel
 * user_id:InputUser
 * admin_rights:ChatAdminRights
 * rank:string
 */
export let CallChannelsEditAdminM = c;
export type CallChannelsEditAdminM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsEditAdminM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.editTitle:Updates
 * #566decd0:1450044624:1450044624
 * channel:InputChannel
 * title:string
 */
export let CallChannelsEditTitleM = c;
export type CallChannelsEditTitleM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsEditTitleM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.editPhoto:Updates
 * #f12e57c9:4046346185:-248621111
 * channel:InputChannel
 * photo:InputChatPhoto
 */
export let CallChannelsEditPhotoM = c;
export type CallChannelsEditPhotoM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsEditPhotoM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.checkUsername:Bool
 * #10e6bd2c:283557164:283557164
 * channel:InputChannel
 * username:string
 */
export let CallChannelsCheckUsernameM = c;
export type CallChannelsCheckUsernameM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsCheckUsernameM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * channels.updateUsername:Bool
 * #3514b3de:890549214:890549214
 * channel:InputChannel
 * username:string
 */
export let CallChannelsUpdateUsernameM = c;
export type CallChannelsUpdateUsernameM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsUpdateUsernameM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * channels.joinChannel:Updates
 * #24b524c5:615851205:615851205
 * channel:InputChannel
 */
export let CallChannelsJoinChannelM = c;
export type CallChannelsJoinChannelM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsJoinChannelM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.leaveChannel:Updates
 * #f836aa95:4164332181:-130635115
 * channel:InputChannel
 */
export let CallChannelsLeaveChannelM = c;
export type CallChannelsLeaveChannelM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsLeaveChannelM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.inviteToChannel:Updates
 * #199f3a6c:429865580:429865580
 * channel:InputChannel
 * users:Vector<InputUser>
 */
export let CallChannelsInviteToChannelM = c;
export type CallChannelsInviteToChannelM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsInviteToChannelM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.deleteChannel:Updates
 * #c0111fe3:3222347747:-1072619549
 * channel:InputChannel
 */
export let CallChannelsDeleteChannelM = c;
export type CallChannelsDeleteChannelM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsDeleteChannelM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * updates.getChannelDifference:updates.ChannelDifference
 * #3173d78:51854712:51854712
 * flags:#
 * force:flags.0?true
 * channel:InputChannel
 * filter:ChannelMessagesFilter
 * pts:int
 * limit:int
 */
export let CallUpdatesGetChannelDifferenceM = c;
export type CallUpdatesGetChannelDifferenceM = (
  invoker: ApiInvoker | Connection,
  req: UpdatesGetChannelDifferenceM
) => Promise<(UpdatesChannelDifferenceT | RpcErrorS) & { dc: number }>;

/**
 * messages.editChatAdmin:Bool
 * #a9e69f2e:2850463534:-1444503762
 * chat_id:int
 * user_id:InputUser
 * is_admin:Bool
 */
export let CallMessagesEditChatAdminM = c;
export type CallMessagesEditChatAdminM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditChatAdminM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.migrateChat:Updates
 * #15a3b8e3:363051235:363051235
 * chat_id:int
 */
export let CallMessagesMigrateChatM = c;
export type CallMessagesMigrateChatM = (
  invoker: ApiInvoker | Connection,
  req: MessagesMigrateChatM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.searchGlobal:messages.Messages
 * #bf7225a4:3211928996:-1083038300
 * flags:#
 * folder_id:flags.0?int
 * q:string
 * offset_rate:int
 * offset_peer:InputPeer
 * offset_id:int
 * limit:int
 */
export let CallMessagesSearchGlobalM = c;
export type CallMessagesSearchGlobalM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSearchGlobalM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getInlineBotResults:messages.BotResults
 * #514e999d:1364105629:1364105629
 * flags:#
 * bot:InputUser
 * peer:InputPeer
 * geo_point:flags.0?InputGeoPoint
 * query:string
 * offset:string
 */
export let CallMessagesGetInlineBotResultsM = c;
export type CallMessagesGetInlineBotResultsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetInlineBotResultsM
) => Promise<(MessagesBotResultsS | RpcErrorS) & { dc: number }>;

/**
 * messages.setInlineBotResults:Bool
 * #eb5ea206:3948847622:-346119674
 * flags:#
 * gallery:flags.0?true
 * private:flags.1?true
 * query_id:long
 * results:Vector<InputBotInlineResult>
 * cache_time:int
 * next_offset:flags.2?string
 * switch_pm:flags.3?InlineBotSwitchPM
 */
export let CallMessagesSetInlineBotResultsM = c;
export type CallMessagesSetInlineBotResultsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetInlineBotResultsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendInlineBotResult:Updates
 * #220815b0:570955184:570955184
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * hide_via:flags.11?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * random_id:long
 * query_id:long
 * id:string
 * schedule_date:flags.10?int
 */
export let CallMessagesSendInlineBotResultM = c;
export type CallMessagesSendInlineBotResultM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendInlineBotResultM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.exportMessageLink:ExportedMessageLink
 * #ceb77163:3468128611:-826838685
 * channel:InputChannel
 * id:int
 * grouped:Bool
 */
export let CallChannelsExportMessageLinkM = c;
export type CallChannelsExportMessageLinkM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsExportMessageLinkM
) => Promise<(ExportedMessageLinkS | RpcErrorS) & { dc: number }>;

/**
 * channels.toggleSignatures:Updates
 * #1f69b606:527021574:527021574
 * channel:InputChannel
 * enabled:Bool
 */
export let CallChannelsToggleSignaturesM = c;
export type CallChannelsToggleSignaturesM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsToggleSignaturesM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getMessageEditData:messages.MessageEditData
 * #fda68d36:4255550774:-39416522
 * peer:InputPeer
 * id:int
 */
export let CallMessagesGetMessageEditDataM = c;
export type CallMessagesGetMessageEditDataM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetMessageEditDataM
) => Promise<(MessagesMessageEditDataS | RpcErrorS) & { dc: number }>;

/**
 * messages.editMessage:Updates
 * #48f71778:1224152952:1224152952
 * flags:#
 * no_webpage:flags.1?true
 * peer:InputPeer
 * id:int
 * message:flags.11?string
 * media:flags.14?InputMedia
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 * schedule_date:flags.15?int
 */
export let CallMessagesEditMessageM = c;
export type CallMessagesEditMessageM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditMessageM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.editInlineBotMessage:Bool
 * #83557dba:2203418042:-2091549254
 * flags:#
 * no_webpage:flags.1?true
 * id:InputBotInlineMessageID
 * message:flags.11?string
 * media:flags.14?InputMedia
 * reply_markup:flags.2?ReplyMarkup
 * entities:flags.3?Vector<MessageEntity>
 */
export let CallMessagesEditInlineBotMessageM = c;
export type CallMessagesEditInlineBotMessageM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditInlineBotMessageM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getBotCallbackAnswer:messages.BotCallbackAnswer
 * #810a9fec:2164957164:-2130010132
 * flags:#
 * game:flags.1?true
 * peer:InputPeer
 * msg_id:int
 * data:flags.0?bytes
 */
export let CallMessagesGetBotCallbackAnswerM = c;
export type CallMessagesGetBotCallbackAnswerM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetBotCallbackAnswerM
) => Promise<(MessagesBotCallbackAnswerS | RpcErrorS) & { dc: number }>;

/**
 * contacts.getTopPeers:contacts.TopPeers
 * #d4982db5:3566742965:-728224331
 * flags:#
 * correspondents:flags.0?true
 * bots_pm:flags.1?true
 * bots_inline:flags.2?true
 * phone_calls:flags.3?true
 * forward_users:flags.4?true
 * forward_chats:flags.5?true
 * groups:flags.10?true
 * channels:flags.15?true
 * offset:int
 * limit:int
 * hash:int
 */
export let CallContactsGetTopPeersM = c;
export type CallContactsGetTopPeersM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetTopPeersM
) => Promise<(ContactsTopPeersT | RpcErrorS) & { dc: number }>;

/**
 * contacts.resetTopPeerRating:Bool
 * #1ae373ac:451113900:451113900
 * category:TopPeerCategory
 * peer:InputPeer
 */
export let CallContactsResetTopPeerRatingM = c;
export type CallContactsResetTopPeerRatingM = (
  invoker: ApiInvoker | Connection,
  req: ContactsResetTopPeerRatingM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getPeerDialogs:messages.PeerDialogs
 * #e470bcfd:3832593661:-462373635
 * peers:Vector<InputDialogPeer>
 */
export let CallMessagesGetPeerDialogsM = c;
export type CallMessagesGetPeerDialogsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetPeerDialogsM
) => Promise<(MessagesPeerDialogsS | RpcErrorS) & { dc: number }>;

/**
 * messages.saveDraft:Bool
 * #bc39e14b:3157909835:-1137057461
 * flags:#
 * no_webpage:flags.1?true
 * reply_to_msg_id:flags.0?int
 * peer:InputPeer
 * message:string
 * entities:flags.3?Vector<MessageEntity>
 */
export let CallMessagesSaveDraftM = c;
export type CallMessagesSaveDraftM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSaveDraftM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getAllDrafts:Updates
 * #6a3f8d65:1782549861:1782549861
 *
 */
export let CallMessagesGetAllDraftsM = c;
export type CallMessagesGetAllDraftsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetAllDraftsM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.getAdminedPublicChannels:messages.Chats
 * #f8b036af:4172297903:-122669393
 * flags:#
 * by_location:flags.0?true
 * check_limit:flags.1?true
 */
export let CallChannelsGetAdminedPublicChannelsM = c;
export type CallChannelsGetAdminedPublicChannelsM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetAdminedPublicChannelsM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * messages.setGameScore:Updates
 * #8ef8ecc0:2398678208:-1896289088
 * flags:#
 * edit_message:flags.0?true
 * force:flags.1?true
 * peer:InputPeer
 * id:int
 * user_id:InputUser
 * score:int
 */
export let CallMessagesSetGameScoreM = c;
export type CallMessagesSetGameScoreM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetGameScoreM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.setInlineGameScore:Bool
 * #15ad9f64:363700068:363700068
 * flags:#
 * edit_message:flags.0?true
 * force:flags.1?true
 * id:InputBotInlineMessageID
 * user_id:InputUser
 * score:int
 */
export let CallMessagesSetInlineGameScoreM = c;
export type CallMessagesSetInlineGameScoreM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSetInlineGameScoreM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getGameHighScores:messages.HighScores
 * #e822649d:3894568093:-400399203
 * peer:InputPeer
 * id:int
 * user_id:InputUser
 */
export let CallMessagesGetGameHighScoresM = c;
export type CallMessagesGetGameHighScoresM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetGameHighScoresM
) => Promise<(MessagesHighScoresS | RpcErrorS) & { dc: number }>;

/**
 * messages.getInlineGameHighScores:messages.HighScores
 * #f635e1b:258170395:258170395
 * id:InputBotInlineMessageID
 * user_id:InputUser
 */
export let CallMessagesGetInlineGameHighScoresM = c;
export type CallMessagesGetInlineGameHighScoresM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetInlineGameHighScoresM
) => Promise<(MessagesHighScoresS | RpcErrorS) & { dc: number }>;

/**
 * messages.getCommonChats:messages.Chats
 * #d0a48c4:218777796:218777796
 * user_id:InputUser
 * max_id:int
 * limit:int
 */
export let CallMessagesGetCommonChatsM = c;
export type CallMessagesGetCommonChatsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetCommonChatsM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * messages.getAllChats:messages.Chats
 * #eba80ff0:3953659888:-341307408
 * except_ids:Vector<int>
 */
export let CallMessagesGetAllChatsM = c;
export type CallMessagesGetAllChatsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetAllChatsM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * messages.getWebPage:WebPage
 * #32ca8f91:852135825:852135825
 * url:string
 * hash:int
 */
export let CallMessagesGetWebPageM = c;
export type CallMessagesGetWebPageM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetWebPageM
) => Promise<(WebPageT | RpcErrorS) & { dc: number }>;

/**
 * messages.toggleDialogPin:Bool
 * #a731e257:2805064279:-1489903017
 * flags:#
 * pinned:flags.0?true
 * peer:InputDialogPeer
 */
export let CallMessagesToggleDialogPinM = c;
export type CallMessagesToggleDialogPinM = (
  invoker: ApiInvoker | Connection,
  req: MessagesToggleDialogPinM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.reorderPinnedDialogs:Bool
 * #3b1adf37:991616823:991616823
 * flags:#
 * force:flags.0?true
 * folder_id:int
 * order:Vector<InputDialogPeer>
 */
export let CallMessagesReorderPinnedDialogsM = c;
export type CallMessagesReorderPinnedDialogsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReorderPinnedDialogsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getPinnedDialogs:messages.PeerDialogs
 * #d6b94df2:3602468338:-692498958
 * folder_id:int
 */
export let CallMessagesGetPinnedDialogsM = c;
export type CallMessagesGetPinnedDialogsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetPinnedDialogsM
) => Promise<(MessagesPeerDialogsS | RpcErrorS) & { dc: number }>;

/**
 * payments.sendPaymentForm:payments.PaymentResult
 * #2b8879b3:730364339:730364339
 * flags:#
 * msg_id:int
 * requested_info_id:flags.0?string
 * shipping_option_id:flags.1?string
 * credentials:InputPaymentCredentials
 */
export let CallPaymentsSendPaymentFormM = c;
export type CallPaymentsSendPaymentFormM = (
  invoker: ApiInvoker | Connection,
  req: PaymentsSendPaymentFormM
) => Promise<(PaymentsPaymentResultT | RpcErrorS) & { dc: number }>;

/**
 * stickers.createStickerSet:messages.StickerSet
 * #9bd86e6a:2614652522:-1680314774
 * flags:#
 * masks:flags.0?true
 * user_id:InputUser
 * title:string
 * short_name:string
 * stickers:Vector<InputStickerSetItem>
 */
export let CallStickersCreateStickerSetM = c;
export type CallStickersCreateStickerSetM = (
  invoker: ApiInvoker | Connection,
  req: StickersCreateStickerSetM
) => Promise<(MessagesStickerSetT | RpcErrorS) & { dc: number }>;

/**
 * messages.uploadMedia:MessageMedia
 * #519bc2b1:1369162417:1369162417
 * peer:InputPeer
 * media:InputMedia
 */
export let CallMessagesUploadMediaM = c;
export type CallMessagesUploadMediaM = (
  invoker: ApiInvoker | Connection,
  req: MessagesUploadMediaM
) => Promise<(MessageMediaT | RpcErrorS) & { dc: number }>;

/**
 * phone.requestCall:phone.PhoneCall
 * #42ff96ed:1124046573:1124046573
 * flags:#
 * video:flags.0?true
 * user_id:InputUser
 * random_id:int
 * g_a_hash:bytes
 * protocol:PhoneCallProtocol
 */
export let CallPhoneRequestCallM = c;
export type CallPhoneRequestCallM = (
  invoker: ApiInvoker | Connection,
  req: PhoneRequestCallM
) => Promise<(PhonePhoneCallS | RpcErrorS) & { dc: number }>;

/**
 * phone.discardCall:Updates
 * #b2cbc1c0:2999697856:-1295269440
 * flags:#
 * video:flags.0?true
 * peer:InputPhoneCall
 * duration:int
 * reason:PhoneCallDiscardReason
 * connection_id:long
 */
export let CallPhoneDiscardCallM = c;
export type CallPhoneDiscardCallM = (
  invoker: ApiInvoker | Connection,
  req: PhoneDiscardCallM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * phone.setCallRating:Updates
 * #59ead627:1508562471:1508562471
 * flags:#
 * user_initiative:flags.0?true
 * peer:InputPhoneCall
 * rating:int
 * comment:string
 */
export let CallPhoneSetCallRatingM = c;
export type CallPhoneSetCallRatingM = (
  invoker: ApiInvoker | Connection,
  req: PhoneSetCallRatingM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.editBanned:Updates
 * #72796912:1920559378:1920559378
 * channel:InputChannel
 * user_id:InputUser
 * banned_rights:ChatBannedRights
 */
export let CallChannelsEditBannedM = c;
export type CallChannelsEditBannedM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsEditBannedM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.getAdminLog:channels.AdminLogResults
 * #33ddf480:870184064:870184064
 * flags:#
 * channel:InputChannel
 * q:string
 * events_filter:flags.0?ChannelAdminLogEventsFilter
 * admins:flags.1?Vector<InputUser>
 * max_id:long
 * min_id:long
 * limit:int
 */
export let CallChannelsGetAdminLogM = c;
export type CallChannelsGetAdminLogM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetAdminLogM
) => Promise<(ChannelsAdminLogResultsS | RpcErrorS) & { dc: number }>;

/**
 * messages.sendScreenshotNotification:Updates
 * #c97df020:3380473888:-914493408
 * peer:InputPeer
 * reply_to_msg_id:int
 * random_id:long
 */
export let CallMessagesSendScreenshotNotificationM = c;
export type CallMessagesSendScreenshotNotificationM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendScreenshotNotificationM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.setStickers:Bool
 * #ea8ca4f9:3935085817:-359881479
 * channel:InputChannel
 * stickerset:InputStickerSet
 */
export let CallChannelsSetStickersM = c;
export type CallChannelsSetStickersM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsSetStickersM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * channels.readMessageContents:Bool
 * #eab5dc38:3937786936:-357180360
 * channel:InputChannel
 * id:Vector<int>
 */
export let CallChannelsReadMessageContentsM = c;
export type CallChannelsReadMessageContentsM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsReadMessageContentsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.getUnreadMentions:messages.Messages
 * #46578472:1180140658:1180140658
 * peer:InputPeer
 * offset_id:int
 * add_offset:int
 * limit:int
 * max_id:int
 * min_id:int
 */
export let CallMessagesGetUnreadMentionsM = c;
export type CallMessagesGetUnreadMentionsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetUnreadMentionsM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * channels.deleteHistory:Bool
 * #af369d42:2939592002:-1355375294
 * channel:InputChannel
 * max_id:int
 */
export let CallChannelsDeleteHistoryM = c;
export type CallChannelsDeleteHistoryM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsDeleteHistoryM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.getRecentMeUrls:help.RecentMeUrls
 * #3dc0f114:1036054804:1036054804
 * referer:string
 */
export let CallHelpGetRecentMeUrlsM = c;
export type CallHelpGetRecentMeUrlsM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetRecentMeUrlsM
) => Promise<(HelpRecentMeUrlsS | RpcErrorS) & { dc: number }>;

/**
 * channels.togglePreHistoryHidden:Updates
 * #eabbb94c:3938171212:-356796084
 * channel:InputChannel
 * enabled:Bool
 */
export let CallChannelsTogglePreHistoryHiddenM = c;
export type CallChannelsTogglePreHistoryHiddenM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsTogglePreHistoryHiddenM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.readMentions:messages.AffectedHistory
 * #f0189d3:251759059:251759059
 * peer:InputPeer
 */
export let CallMessagesReadMentionsM = c;
export type CallMessagesReadMentionsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesReadMentionsM
) => Promise<(MessagesAffectedHistoryS | RpcErrorS) & { dc: number }>;

/**
 * messages.getRecentLocations:messages.Messages
 * #bbc45b09:3150207753:-1144759543
 * peer:InputPeer
 * limit:int
 * hash:int
 */
export let CallMessagesGetRecentLocationsM = c;
export type CallMessagesGetRecentLocationsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetRecentLocationsM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendMultiMedia:Updates
 * #cc0110cb:3422621899:-872345397
 * flags:#
 * silent:flags.5?true
 * background:flags.6?true
 * clear_draft:flags.7?true
 * peer:InputPeer
 * reply_to_msg_id:flags.0?int
 * multi_media:Vector<InputSingleMedia>
 * schedule_date:flags.10?int
 */
export let CallMessagesSendMultiMediaM = c;
export type CallMessagesSendMultiMediaM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendMultiMediaM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * upload.getFileHashes:Vector<FileHash>
 * #c7025931:3338819889:-956147407
 * location:InputFileLocation
 * offset:int
 */
export let CallUploadGetFileHashesM = c;
export type CallUploadGetFileHashesM = (
  invoker: ApiInvoker | Connection,
  req: UploadGetFileHashesM
) => Promise<(VectorS<FileHashT> | RpcErrorS) & { dc: number }>;

/**
 * help.getProxyData:help.ProxyData
 * #3d7758e1:1031231713:1031231713
 *
 */
export let CallHelpGetProxyDataM = c;
export type CallHelpGetProxyDataM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetProxyDataM
) => Promise<(HelpProxyDataT | RpcErrorS) & { dc: number }>;

/**
 * help.getTermsOfServiceUpdate:help.TermsOfServiceUpdate
 * #2ca51fd1:749019089:749019089
 *
 */
export let CallHelpGetTermsOfServiceUpdateM = c;
export type CallHelpGetTermsOfServiceUpdateM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetTermsOfServiceUpdateM
) => Promise<(HelpTermsOfServiceUpdateT | RpcErrorS) & { dc: number }>;

/**
 * users.setSecureValueErrors:Bool
 * #90c894b5:2429064373:-1865902923
 * id:InputUser
 * errors:Vector<SecureValueError>
 */
export let CallUsersSetSecureValueErrorsM = c;
export type CallUsersSetSecureValueErrorsM = (
  invoker: ApiInvoker | Connection,
  req: UsersSetSecureValueErrorsM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * account.getAuthorizationForm:account.AuthorizationForm
 * #b86ba8e1:3094063329:-1200903967
 * bot_id:int
 * scope:string
 * public_key:string
 */
export let CallAccountGetAuthorizationFormM = c;
export type CallAccountGetAuthorizationFormM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetAuthorizationFormM
) => Promise<(AccountAuthorizationFormS | RpcErrorS) & { dc: number }>;

/**
 * help.getDeepLinkInfo:help.DeepLinkInfo
 * #3fedc75f:1072547679:1072547679
 * path:string
 */
export let CallHelpGetDeepLinkInfoM = c;
export type CallHelpGetDeepLinkInfoM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetDeepLinkInfoM
) => Promise<(HelpDeepLinkInfoT | RpcErrorS) & { dc: number }>;

/**
 * channels.getLeftChannels:messages.Chats
 * #8341ecc0:2202135744:-2092831552
 * offset:int
 */
export let CallChannelsGetLeftChannelsM = c;
export type CallChannelsGetLeftChannelsM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetLeftChannelsM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * messages.markDialogUnread:Bool
 * #c286d98f:3263617423:-1031349873
 * flags:#
 * unread:flags.0?true
 * peer:InputDialogPeer
 */
export let CallMessagesMarkDialogUnreadM = c;
export type CallMessagesMarkDialogUnreadM = (
  invoker: ApiInvoker | Connection,
  req: MessagesMarkDialogUnreadM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * help.getAppConfig:JSONValue
 * #98914110:2559656208:-1735311088
 *
 */
export let CallHelpGetAppConfigM = c;
export type CallHelpGetAppConfigM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetAppConfigM
) => Promise<(JsonValueT | RpcErrorS) & { dc: number }>;

/**
 * help.saveAppLog:Bool
 * #6f02f748:1862465352:1862465352
 * events:Vector<InputAppEvent>
 */
export let CallHelpSaveAppLogM = c;
export type CallHelpSaveAppLogM = (
  invoker: ApiInvoker | Connection,
  req: HelpSaveAppLogM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.updatePinnedMessage:Updates
 * #d2aaf7ec:3534419948:-760547348
 * flags:#
 * silent:flags.0?true
 * peer:InputPeer
 * id:int
 */
export let CallMessagesUpdatePinnedMessageM = c;
export type CallMessagesUpdatePinnedMessageM = (
  invoker: ApiInvoker | Connection,
  req: MessagesUpdatePinnedMessageM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * help.getUserInfo:help.UserInfo
 * #38a08d3:59377875:59377875
 * user_id:InputUser
 */
export let CallHelpGetUserInfoM = c;
export type CallHelpGetUserInfoM = (
  invoker: ApiInvoker | Connection,
  req: HelpGetUserInfoM
) => Promise<(HelpUserInfoT | RpcErrorS) & { dc: number }>;

/**
 * help.editUserInfo:help.UserInfo
 * #66b91b70:1723407216:1723407216
 * user_id:InputUser
 * message:string
 * entities:Vector<MessageEntity>
 */
export let CallHelpEditUserInfoM = c;
export type CallHelpEditUserInfoM = (
  invoker: ApiInvoker | Connection,
  req: HelpEditUserInfoM
) => Promise<(HelpUserInfoT | RpcErrorS) & { dc: number }>;

/**
 * account.getNotifyExceptions:Updates
 * #53577479:1398240377:1398240377
 * flags:#
 * compare_sound:flags.1?true
 * peer:flags.0?InputNotifyPeer
 */
export let CallAccountGetNotifyExceptionsM = c;
export type CallAccountGetNotifyExceptionsM = (
  invoker: ApiInvoker | Connection,
  req: AccountGetNotifyExceptionsM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendVote:Updates
 * #10ea6184:283795844:283795844
 * peer:InputPeer
 * msg_id:int
 * options:Vector<bytes>
 */
export let CallMessagesSendVoteM = c;
export type CallMessagesSendVoteM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendVoteM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getPollResults:Updates
 * #73bb643b:1941660731:1941660731
 * peer:InputPeer
 * msg_id:int
 */
export let CallMessagesGetPollResultsM = c;
export type CallMessagesGetPollResultsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetPollResultsM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getOnlines:ChatOnlines
 * #6e2be050:1848369232:1848369232
 * peer:InputPeer
 */
export let CallMessagesGetOnlinesM = c;
export type CallMessagesGetOnlinesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetOnlinesM
) => Promise<(ChatOnlinesS | RpcErrorS) & { dc: number }>;

/**
 * messages.getStatsURL:StatsURL
 * #812c2ae6:2167155430:-2127811866
 * flags:#
 * dark:flags.0?true
 * peer:InputPeer
 * params:string
 */
export let CallMessagesGetStatsUrlM = c;
export type CallMessagesGetStatsUrlM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetStatsUrlM
) => Promise<(StatsUrlS | RpcErrorS) & { dc: number }>;

/**
 * messages.editChatAbout:Bool
 * #def60797:3740665751:-554301545
 * peer:InputPeer
 * about:string
 */
export let CallMessagesEditChatAboutM = c;
export type CallMessagesEditChatAboutM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditChatAboutM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.editChatDefaultBannedRights:Updates
 * #a5866b41:2777049921:-1517917375
 * peer:InputPeer
 * banned_rights:ChatBannedRights
 */
export let CallMessagesEditChatDefaultBannedRightsM = c;
export type CallMessagesEditChatDefaultBannedRightsM = (
  invoker: ApiInvoker | Connection,
  req: MessagesEditChatDefaultBannedRightsM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * folders.editPeerFolders:Updates
 * #6847d0ab:1749536939:1749536939
 * folder_peers:Vector<InputFolderPeer>
 */
export let CallFoldersEditPeerFoldersM = c;
export type CallFoldersEditPeerFoldersM = (
  invoker: ApiInvoker | Connection,
  req: FoldersEditPeerFoldersM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * folders.deleteFolder:Updates
 * #1c295881:472471681:472471681
 * folder_id:int
 */
export let CallFoldersDeleteFolderM = c;
export type CallFoldersDeleteFolderM = (
  invoker: ApiInvoker | Connection,
  req: FoldersDeleteFolderM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getSearchCounters:Vector<messages.SearchCounter>
 * #732eef00:1932455680:1932455680
 * peer:InputPeer
 * filters:Vector<MessagesFilter>
 */
export let CallMessagesGetSearchCountersM = c;
export type CallMessagesGetSearchCountersM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetSearchCountersM
) => Promise<(VectorS<MessagesSearchCounterS> | RpcErrorS) & { dc: number }>;

/**
 * channels.getGroupsForDiscussion:messages.Chats
 * #f5dad378:4124758904:-170208392
 *
 */
export let CallChannelsGetGroupsForDiscussionM = c;
export type CallChannelsGetGroupsForDiscussionM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsGetGroupsForDiscussionM
) => Promise<(MessagesChatsT | RpcErrorS) & { dc: number }>;

/**
 * channels.setDiscussionGroup:Bool
 * #40582bb2:1079520178:1079520178
 * broadcast:InputChannel
 * group:InputChannel
 */
export let CallChannelsSetDiscussionGroupM = c;
export type CallChannelsSetDiscussionGroupM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsSetDiscussionGroupM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * messages.requestUrlAuth:UrlAuthResult
 * #e33f5613:3812578835:-482388461
 * peer:InputPeer
 * msg_id:int
 * button_id:int
 */
export let CallMessagesRequestUrlAuthM = c;
export type CallMessagesRequestUrlAuthM = (
  invoker: ApiInvoker | Connection,
  req: MessagesRequestUrlAuthM
) => Promise<(UrlAuthResultT | RpcErrorS) & { dc: number }>;

/**
 * messages.acceptUrlAuth:UrlAuthResult
 * #f729ea98:4146719384:-148247912
 * flags:#
 * write_allowed:flags.0?true
 * peer:InputPeer
 * msg_id:int
 * button_id:int
 */
export let CallMessagesAcceptUrlAuthM = c;
export type CallMessagesAcceptUrlAuthM = (
  invoker: ApiInvoker | Connection,
  req: MessagesAcceptUrlAuthM
) => Promise<(UrlAuthResultT | RpcErrorS) & { dc: number }>;

/**
 * messages.hidePeerSettingsBar:Bool
 * #4facb138:1336717624:1336717624
 * peer:InputPeer
 */
export let CallMessagesHidePeerSettingsBarM = c;
export type CallMessagesHidePeerSettingsBarM = (
  invoker: ApiInvoker | Connection,
  req: MessagesHidePeerSettingsBarM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * contacts.addContact:Updates
 * #e8f463d0:3908330448:-386636848
 * flags:#
 * add_phone_privacy_exception:flags.0?true
 * id:InputUser
 * first_name:string
 * last_name:string
 * phone:string
 */
export let CallContactsAddContactM = c;
export type CallContactsAddContactM = (
  invoker: ApiInvoker | Connection,
  req: ContactsAddContactM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * contacts.acceptContact:Updates
 * #f831a20f:4164002319:-130964977
 * id:InputUser
 */
export let CallContactsAcceptContactM = c;
export type CallContactsAcceptContactM = (
  invoker: ApiInvoker | Connection,
  req: ContactsAcceptContactM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.editCreator:Updates
 * #8f38cd1f:2402864415:-1892102881
 * channel:InputChannel
 * user_id:InputUser
 * password:InputCheckPasswordSRP
 */
export let CallChannelsEditCreatorM = c;
export type CallChannelsEditCreatorM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsEditCreatorM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * contacts.getLocated:Updates
 * #a356056:171270230:171270230
 * geo_point:InputGeoPoint
 */
export let CallContactsGetLocatedM = c;
export type CallContactsGetLocatedM = (
  invoker: ApiInvoker | Connection,
  req: ContactsGetLocatedM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * channels.editLocation:Bool
 * #58e63f6d:1491484525:1491484525
 * channel:InputChannel
 * geo_point:InputGeoPoint
 * address:string
 */
export let CallChannelsEditLocationM = c;
export type CallChannelsEditLocationM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsEditLocationM
) => Promise<(BoolT | RpcErrorS) & { dc: number }>;

/**
 * channels.toggleSlowMode:Updates
 * #edd49ef0:3990134512:-304832784
 * channel:InputChannel
 * seconds:int
 */
export let CallChannelsToggleSlowModeM = c;
export type CallChannelsToggleSlowModeM = (
  invoker: ApiInvoker | Connection,
  req: ChannelsToggleSlowModeM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getScheduledHistory:messages.Messages
 * #e2c2685b:3804391515:-490575781
 * peer:InputPeer
 * hash:int
 */
export let CallMessagesGetScheduledHistoryM = c;
export type CallMessagesGetScheduledHistoryM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetScheduledHistoryM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.getScheduledMessages:messages.Messages
 * #bdbb0464:3183150180:-1111817116
 * peer:InputPeer
 * id:Vector<int>
 */
export let CallMessagesGetScheduledMessagesM = c;
export type CallMessagesGetScheduledMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesGetScheduledMessagesM
) => Promise<(MessagesMessagesT | RpcErrorS) & { dc: number }>;

/**
 * messages.sendScheduledMessages:Updates
 * #bd38850a:3174597898:-1120369398
 * peer:InputPeer
 * id:Vector<int>
 */
export let CallMessagesSendScheduledMessagesM = c;
export type CallMessagesSendScheduledMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesSendScheduledMessagesM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;

/**
 * messages.deleteScheduledMessages:Updates
 * #59ae2b16:1504586518:1504586518
 * peer:InputPeer
 * id:Vector<int>
 */
export let CallMessagesDeleteScheduledMessagesM = c;
export type CallMessagesDeleteScheduledMessagesM = (
  invoker: ApiInvoker | Connection,
  req: MessagesDeleteScheduledMessagesM
) => Promise<(UpdatesT | RpcErrorS) & { dc: number }>;
CallDeclareQueue();

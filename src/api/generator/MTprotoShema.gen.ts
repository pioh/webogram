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
 * resPQ:ResPQ
 * #5162463:85337187:85337187
 * nonce:int128
 * server_nonce:int128
 * pq:bytes
 * server_public_key_fingerprints:Vector<long>
 */
export interface ResPqS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array, VectorS<ProtoLong>];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_pq(): Uint8Array;
  set_pq(val: Uint8Array): this;

  get_server_public_key_fingerprints(): VectorS<ProtoLong>;
  set_server_public_key_fingerprints(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ResPqS = r<new () => ResPqS>(0x5162463, "ResPqS", () => [
  "nonce",
  Int128RW,
  "server_nonce",
  Int128RW,
  "pq",
  BytesRW,
  "server_public_key_fingerprints",
  VectorRW(LongRW)
]);

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
export interface PQInnerDataS {
  _id: number;
  _values: [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array
  ];

  get_pq(): Uint8Array;
  set_pq(val: Uint8Array): this;

  get_p(): Uint8Array;
  set_p(val: Uint8Array): this;

  get_q(): Uint8Array;
  set_q(val: Uint8Array): this;

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_new_nonce(): Uint8Array;
  set_new_nonce(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PQInnerDataS = r<new () => PQInnerDataS>(
  0x83c95aec,
  "PQInnerDataS",
  () => [
    "pq",
    BytesRW,
    "p",
    BytesRW,
    "q",
    BytesRW,
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "new_nonce",
    Int256RW
  ]
);

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
export interface PQInnerDataTempS {
  _id: number;
  _values: [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    number
  ];

  get_pq(): Uint8Array;
  set_pq(val: Uint8Array): this;

  get_p(): Uint8Array;
  set_p(val: Uint8Array): this;

  get_q(): Uint8Array;
  set_q(val: Uint8Array): this;

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_new_nonce(): Uint8Array;
  set_new_nonce(val: Uint8Array): this;

  get_expires_in(): number;
  set_expires_in(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PQInnerDataTempS = r<new () => PQInnerDataTempS>(
  0x3c6a84d4,
  "PQInnerDataTempS",
  () => [
    "pq",
    BytesRW,
    "p",
    BytesRW,
    "q",
    BytesRW,
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "new_nonce",
    Int256RW,
    "expires_in",
    IntRW
  ]
);

/**
 * server_DH_params_fail:Server_DH_Params
 * #79cb045d:2043348061:2043348061
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash:int128
 */
export interface ServerDhParamsFailS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_new_nonce_hash(): Uint8Array;
  set_new_nonce_hash(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ServerDhParamsFailS = r<new () => ServerDhParamsFailS>(
  0x79cb045d,
  "ServerDhParamsFailS",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "new_nonce_hash",
    Int128RW
  ]
);

/**
 * server_DH_params_ok:Server_DH_Params
 * #d0e8075c:3504867164:-790100132
 * nonce:int128
 * server_nonce:int128
 * encrypted_answer:bytes
 */
export interface ServerDhParamsOkS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_encrypted_answer(): Uint8Array;
  set_encrypted_answer(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ServerDhParamsOkS = r<new () => ServerDhParamsOkS>(
  0xd0e8075c,
  "ServerDhParamsOkS",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "encrypted_answer",
    BytesRW
  ]
);

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
export interface ServerDhInnerDataS {
  _id: number;
  _values: [Uint8Array, Uint8Array, number, Uint8Array, Uint8Array, number];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_g(): number;
  set_g(val: number): this;

  get_dh_prime(): Uint8Array;
  set_dh_prime(val: Uint8Array): this;

  get_g_a(): Uint8Array;
  set_g_a(val: Uint8Array): this;

  get_server_time(): number;
  set_server_time(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ServerDhInnerDataS = r<new () => ServerDhInnerDataS>(
  0xb5890dba,
  "ServerDhInnerDataS",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "g",
    IntRW,
    "dh_prime",
    BytesRW,
    "g_a",
    BytesRW,
    "server_time",
    IntRW
  ]
);

/**
 * client_DH_inner_data:Client_DH_Inner_Data
 * #6643b654:1715713620:1715713620
 * nonce:int128
 * server_nonce:int128
 * retry_id:long
 * g_b:bytes
 */
export interface ClientDhInnerDataS {
  _id: number;
  _values: [Uint8Array, Uint8Array, ProtoLong, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_retry_id(): ProtoLong;
  set_retry_id(val: ProtoLong): this;

  get_g_b(): Uint8Array;
  set_g_b(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ClientDhInnerDataS = r<new () => ClientDhInnerDataS>(
  0x6643b654,
  "ClientDhInnerDataS",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "retry_id",
    LongRW,
    "g_b",
    BytesRW
  ]
);

/**
 * dh_gen_ok:Set_client_DH_params_answer
 * #3bcbf734:1003222836:1003222836
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash1:int128
 */
export interface DhGenOkS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_new_nonce_hash1(): Uint8Array;
  set_new_nonce_hash1(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DhGenOkS = r<new () => DhGenOkS>(0x3bcbf734, "DhGenOkS", () => [
  "nonce",
  Int128RW,
  "server_nonce",
  Int128RW,
  "new_nonce_hash1",
  Int128RW
]);

/**
 * dh_gen_retry:Set_client_DH_params_answer
 * #46dc1fb9:1188831161:1188831161
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash2:int128
 */
export interface DhGenRetryS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_new_nonce_hash2(): Uint8Array;
  set_new_nonce_hash2(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DhGenRetryS = r<new () => DhGenRetryS>(
  0x46dc1fb9,
  "DhGenRetryS",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "new_nonce_hash2",
    Int128RW
  ]
);

/**
 * dh_gen_fail:Set_client_DH_params_answer
 * #a69dae02:2795351554:-1499615742
 * nonce:int128
 * server_nonce:int128
 * new_nonce_hash3:int128
 */
export interface DhGenFailS {
  _id: number;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_new_nonce_hash3(): Uint8Array;
  set_new_nonce_hash3(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DhGenFailS = r<new () => DhGenFailS>(
  0xa69dae02,
  "DhGenFailS",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "new_nonce_hash3",
    Int128RW
  ]
);

/**
 * rpc_result:RpcResult
 * #f35c6d01:4082920705:-212046591
 * req_msg_id:long
 * result:Object
 */
export interface RpcResultS {
  _id: number;
  _values: [ProtoLong, OneOf | IStruct];

  get_req_msg_id(): ProtoLong;
  set_req_msg_id(val: ProtoLong): this;

  get_result(): OneOf | IStruct;
  set_result(val: OneOf | IStruct): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RpcResultS = r<new () => RpcResultS>(
  0xf35c6d01,
  "RpcResultS",
  () => ["req_msg_id", LongRW, "result", OneOfRW]
);

/**
 * rpc_error:RpcError
 * #2144ca19:558156313:558156313
 * error_code:int
 * error_message:string
 */
export interface RpcErrorS {
  _id: number;
  _values: [number, string];

  get_error_code(): number;
  set_error_code(val: number): this;

  get_error_message(): string;
  set_error_message(val: string): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RpcErrorS = r<new () => RpcErrorS>(0x2144ca19, "RpcErrorS", () => [
  "error_code",
  IntRW,
  "error_message",
  StringRW
]);

/**
 * rpc_answer_unknown:RpcDropAnswer
 * #5e2ad36e:1579864942:1579864942
 *
 */
export interface RpcAnswerUnknownS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RpcAnswerUnknownS = r<new () => RpcAnswerUnknownS>(
  0x5e2ad36e,
  "RpcAnswerUnknownS",
  () => []
);

/**
 * rpc_answer_dropped_running:RpcDropAnswer
 * #cd78e586:3447252358:-847714938
 *
 */
export interface RpcAnswerDroppedRunningS {
  _id: number;
  _values: [];

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RpcAnswerDroppedRunningS = r<new () => RpcAnswerDroppedRunningS>(
  0xcd78e586,
  "RpcAnswerDroppedRunningS",
  () => []
);

/**
 * rpc_answer_dropped:RpcDropAnswer
 * #a43ad8b7:2755319991:-1539647305
 * msg_id:long
 * seq_no:int
 * bytes:int
 */
export interface RpcAnswerDroppedS {
  _id: number;
  _values: [ProtoLong, number, number];

  get_msg_id(): ProtoLong;
  set_msg_id(val: ProtoLong): this;

  get_seq_no(): number;
  set_seq_no(val: number): this;

  get_bytes(): number;
  set_bytes(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RpcAnswerDroppedS = r<new () => RpcAnswerDroppedS>(
  0xa43ad8b7,
  "RpcAnswerDroppedS",
  () => ["msg_id", LongRW, "seq_no", IntRW, "bytes", IntRW]
);

/**
 * future_salt:FutureSalt
 * #949d9dc:155834844:155834844
 * valid_since:int
 * valid_until:int
 * salt:long
 */
export interface FutureSaltS {
  _id: number;
  _values: [number, number, ProtoLong];

  get_valid_since(): number;
  set_valid_since(val: number): this;

  get_valid_until(): number;
  set_valid_until(val: number): this;

  get_salt(): ProtoLong;
  set_salt(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FutureSaltS = r<new () => FutureSaltS>(
  0x949d9dc,
  "FutureSaltS",
  () => ["valid_since", IntRW, "valid_until", IntRW, "salt", LongRW]
);

/**
 * pong:Pong
 * #347773c5:880243653:880243653
 * msg_id:long
 * ping_id:long
 */
export interface PongS {
  _id: number;
  _values: [ProtoLong, ProtoLong];

  get_msg_id(): ProtoLong;
  set_msg_id(val: ProtoLong): this;

  get_ping_id(): ProtoLong;
  set_ping_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PongS = r<new () => PongS>(0x347773c5, "PongS", () => [
  "msg_id",
  LongRW,
  "ping_id",
  LongRW
]);

/**
 * destroy_session_ok:DestroySessionRes
 * #e22045fc:3793765884:-501201412
 * session_id:long
 */
export interface DestroySessionOkS {
  _id: number;
  _values: [ProtoLong];

  get_session_id(): ProtoLong;
  set_session_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DestroySessionOkS = r<new () => DestroySessionOkS>(
  0xe22045fc,
  "DestroySessionOkS",
  () => ["session_id", LongRW]
);

/**
 * destroy_session_none:DestroySessionRes
 * #62d350c9:1658015945:1658015945
 * session_id:long
 */
export interface DestroySessionNoneS {
  _id: number;
  _values: [ProtoLong];

  get_session_id(): ProtoLong;
  set_session_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DestroySessionNoneS = r<new () => DestroySessionNoneS>(
  0x62d350c9,
  "DestroySessionNoneS",
  () => ["session_id", LongRW]
);

/**
 * new_session_created:NewSession
 * #9ec20908:2663516424:-1631450872
 * first_msg_id:long
 * unique_id:long
 * server_salt:long
 */
export interface NewSessionCreatedS {
  _id: number;
  _values: [ProtoLong, ProtoLong, ProtoLong];

  get_first_msg_id(): ProtoLong;
  set_first_msg_id(val: ProtoLong): this;

  get_unique_id(): ProtoLong;
  set_unique_id(val: ProtoLong): this;

  get_server_salt(): ProtoLong;
  set_server_salt(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let NewSessionCreatedS = r<new () => NewSessionCreatedS>(
  0x9ec20908,
  "NewSessionCreatedS",
  () => ["first_msg_id", LongRW, "unique_id", LongRW, "server_salt", LongRW]
);

/**
 * message:Message
 * #5bb8e511:1538843921:1538843921
 * msg_id:long
 * seqno:int
 * bytes:int
 * body:Object
 */
export interface MessageS {
  _id: number;
  _values: [ProtoLong, number, number, OneOf | IStruct];

  get_msg_id(): ProtoLong;
  set_msg_id(val: ProtoLong): this;

  get_seqno(): number;
  set_seqno(val: number): this;

  get_bytes(): number;
  set_bytes(val: number): this;

  get_body(): OneOf | IStruct;
  set_body(val: OneOf | IStruct): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MessageS = r<new () => MessageS>(0x5bb8e511, "MessageS", () => [
  "msg_id",
  LongRW,
  "seqno",
  IntRW,
  "bytes",
  IntRW,
  "body",
  OneOfRW
]);

/**
 * gzip_packed:Object
 * #3072cfa1:812830625:812830625
 * packed_data:bytes
 */
export interface GzipPackedS {
  _id: number;
  _values: [Uint8Array];

  get_packed_data(): Uint8Array;
  set_packed_data(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let GzipPackedS = r<new () => GzipPackedS>(
  0x3072cfa1,
  "GzipPackedS",
  () => ["packed_data", BytesRW]
);

/**
 * msgs_ack:MsgsAck
 * #62d6b459:1658238041:1658238041
 * msg_ids:Vector<long>
 */
export interface MsgsAckS {
  _id: number;
  _values: [VectorS<ProtoLong>];

  get_msg_ids(): VectorS<ProtoLong>;
  set_msg_ids(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgsAckS = r<new () => MsgsAckS>(0x62d6b459, "MsgsAckS", () => [
  "msg_ids",
  VectorRW(LongRW)
]);

/**
 * bad_msg_notification:BadMsgNotification
 * #a7eff811:2817521681:-1477445615
 * bad_msg_id:long
 * bad_msg_seqno:int
 * error_code:int
 */
export interface BadMsgNotificationS {
  _id: number;
  _values: [ProtoLong, number, number];

  get_bad_msg_id(): ProtoLong;
  set_bad_msg_id(val: ProtoLong): this;

  get_bad_msg_seqno(): number;
  set_bad_msg_seqno(val: number): this;

  get_error_code(): number;
  set_error_code(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BadMsgNotificationS = r<new () => BadMsgNotificationS>(
  0xa7eff811,
  "BadMsgNotificationS",
  () => ["bad_msg_id", LongRW, "bad_msg_seqno", IntRW, "error_code", IntRW]
);

/**
 * bad_server_salt:BadMsgNotification
 * #edab447b:3987424379:-307542917
 * bad_msg_id:long
 * bad_msg_seqno:int
 * error_code:int
 * new_server_salt:long
 */
export interface BadServerSaltS {
  _id: number;
  _values: [ProtoLong, number, number, ProtoLong];

  get_bad_msg_id(): ProtoLong;
  set_bad_msg_id(val: ProtoLong): this;

  get_bad_msg_seqno(): number;
  set_bad_msg_seqno(val: number): this;

  get_error_code(): number;
  set_error_code(val: number): this;

  get_new_server_salt(): ProtoLong;
  set_new_server_salt(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BadServerSaltS = r<new () => BadServerSaltS>(
  0xedab447b,
  "BadServerSaltS",
  () => [
    "bad_msg_id",
    LongRW,
    "bad_msg_seqno",
    IntRW,
    "error_code",
    IntRW,
    "new_server_salt",
    LongRW
  ]
);

/**
 * msg_resend_req:MsgResendReq
 * #7d861a08:2105940488:2105940488
 * msg_ids:Vector<long>
 */
export interface MsgResendReqS {
  _id: number;
  _values: [VectorS<ProtoLong>];

  get_msg_ids(): VectorS<ProtoLong>;
  set_msg_ids(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgResendReqS = r<new () => MsgResendReqS>(
  0x7d861a08,
  "MsgResendReqS",
  () => ["msg_ids", VectorRW(LongRW)]
);

/**
 * msgs_state_req:MsgsStateReq
 * #da69fb52:3664378706:-630588590
 * msg_ids:Vector<long>
 */
export interface MsgsStateReqS {
  _id: number;
  _values: [VectorS<ProtoLong>];

  get_msg_ids(): VectorS<ProtoLong>;
  set_msg_ids(val: VectorS<ProtoLong>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgsStateReqS = r<new () => MsgsStateReqS>(
  0xda69fb52,
  "MsgsStateReqS",
  () => ["msg_ids", VectorRW(LongRW)]
);

/**
 * msgs_state_info:MsgsStateInfo
 * #4deb57d:81704317:81704317
 * req_msg_id:long
 * info:bytes
 */
export interface MsgsStateInfoS {
  _id: number;
  _values: [ProtoLong, Uint8Array];

  get_req_msg_id(): ProtoLong;
  set_req_msg_id(val: ProtoLong): this;

  get_info(): Uint8Array;
  set_info(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgsStateInfoS = r<new () => MsgsStateInfoS>(
  0x4deb57d,
  "MsgsStateInfoS",
  () => ["req_msg_id", LongRW, "info", BytesRW]
);

/**
 * msgs_all_info:MsgsAllInfo
 * #8cc0d131:2361446705:-1933520591
 * msg_ids:Vector<long>
 * info:bytes
 */
export interface MsgsAllInfoS {
  _id: number;
  _values: [VectorS<ProtoLong>, Uint8Array];

  get_msg_ids(): VectorS<ProtoLong>;
  set_msg_ids(val: VectorS<ProtoLong>): this;

  get_info(): Uint8Array;
  set_info(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgsAllInfoS = r<new () => MsgsAllInfoS>(
  0x8cc0d131,
  "MsgsAllInfoS",
  () => ["msg_ids", VectorRW(LongRW), "info", BytesRW]
);

/**
 * msg_detailed_info:MsgDetailedInfo
 * #276d3ec6:661470918:661470918
 * msg_id:long
 * answer_msg_id:long
 * bytes:int
 * status:int
 */
export interface MsgDetailedInfoS {
  _id: number;
  _values: [ProtoLong, ProtoLong, number, number];

  get_msg_id(): ProtoLong;
  set_msg_id(val: ProtoLong): this;

  get_answer_msg_id(): ProtoLong;
  set_answer_msg_id(val: ProtoLong): this;

  get_bytes(): number;
  set_bytes(val: number): this;

  get_status(): number;
  set_status(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgDetailedInfoS = r<new () => MsgDetailedInfoS>(
  0x276d3ec6,
  "MsgDetailedInfoS",
  () => [
    "msg_id",
    LongRW,
    "answer_msg_id",
    LongRW,
    "bytes",
    IntRW,
    "status",
    IntRW
  ]
);

/**
 * msg_new_detailed_info:MsgDetailedInfo
 * #809db6df:2157819615:-2137147681
 * answer_msg_id:long
 * bytes:int
 * status:int
 */
export interface MsgNewDetailedInfoS {
  _id: number;
  _values: [ProtoLong, number, number];

  get_answer_msg_id(): ProtoLong;
  set_answer_msg_id(val: ProtoLong): this;

  get_bytes(): number;
  set_bytes(val: number): this;

  get_status(): number;
  set_status(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgNewDetailedInfoS = r<new () => MsgNewDetailedInfoS>(
  0x809db6df,
  "MsgNewDetailedInfoS",
  () => ["answer_msg_id", LongRW, "bytes", IntRW, "status", IntRW]
);

/**
 * bind_auth_key_inner:BindAuthKeyInner
 * #75a3f765:1973679973:1973679973
 * nonce:long
 * temp_auth_key_id:long
 * perm_auth_key_id:long
 * temp_session_id:long
 * expires_at:int
 */
export interface BindAuthKeyInnerS {
  _id: number;
  _values: [ProtoLong, ProtoLong, ProtoLong, ProtoLong, number];

  get_nonce(): ProtoLong;
  set_nonce(val: ProtoLong): this;

  get_temp_auth_key_id(): ProtoLong;
  set_temp_auth_key_id(val: ProtoLong): this;

  get_perm_auth_key_id(): ProtoLong;
  set_perm_auth_key_id(val: ProtoLong): this;

  get_temp_session_id(): ProtoLong;
  set_temp_session_id(val: ProtoLong): this;

  get_expires_at(): number;
  set_expires_at(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let BindAuthKeyInnerS = r<new () => BindAuthKeyInnerS>(
  0x75a3f765,
  "BindAuthKeyInnerS",
  () => [
    "nonce",
    LongRW,
    "temp_auth_key_id",
    LongRW,
    "perm_auth_key_id",
    LongRW,
    "temp_session_id",
    LongRW,
    "expires_at",
    IntRW
  ]
);

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

export const MessageT = MessageS;
export type MessageT = MessageS;

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
export interface ReqPqM {
  _id: number;
  _method(): void;
  _values: [Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReqPqM = r<new () => ReqPqM>(0x60469778, "ReqPqM", () => [
  "nonce",
  Int128RW
]);

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
export interface ReqDhParamsM {
  _id: number;
  _method(): void;
  _values: [
    Uint8Array,
    Uint8Array,
    Uint8Array,
    Uint8Array,
    ProtoLong,
    Uint8Array
  ];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_p(): Uint8Array;
  set_p(val: Uint8Array): this;

  get_q(): Uint8Array;
  set_q(val: Uint8Array): this;

  get_public_key_fingerprint(): ProtoLong;
  set_public_key_fingerprint(val: ProtoLong): this;

  get_encrypted_data(): Uint8Array;
  set_encrypted_data(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let ReqDhParamsM = r<new () => ReqDhParamsM>(
  0xd712e4be,
  "ReqDhParamsM",
  () => [
    "nonce",
    Int128RW,
    "server_nonce",
    Int128RW,
    "p",
    BytesRW,
    "q",
    BytesRW,
    "public_key_fingerprint",
    LongRW,
    "encrypted_data",
    BytesRW
  ]
);

/**
 * set_client_DH_params:set_client_DH_params Set_client_DH_params_answer
 * #f5045f1f:4110704415:-184262881
 * nonce:int128
 * server_nonce:int128
 * encrypted_data:bytes
 */
export interface SetClientDhParamsM {
  _id: number;
  _method(): void;
  _values: [Uint8Array, Uint8Array, Uint8Array];

  get_nonce(): Uint8Array;
  set_nonce(val: Uint8Array): this;

  get_server_nonce(): Uint8Array;
  set_server_nonce(val: Uint8Array): this;

  get_encrypted_data(): Uint8Array;
  set_encrypted_data(val: Uint8Array): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let SetClientDhParamsM = r<new () => SetClientDhParamsM>(
  0xf5045f1f,
  "SetClientDhParamsM",
  () => ["nonce", Int128RW, "server_nonce", Int128RW, "encrypted_data", BytesRW]
);

/**
 * rpc_drop_answer:rpc_drop_answer RpcDropAnswer
 * #58e4a740:1491380032:1491380032
 * req_msg_id:long
 */
export interface RpcDropAnswerM {
  _id: number;
  _method(): void;
  _values: [ProtoLong];

  get_req_msg_id(): ProtoLong;
  set_req_msg_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let RpcDropAnswerM = r<new () => RpcDropAnswerM>(
  0x58e4a740,
  "RpcDropAnswerM",
  () => ["req_msg_id", LongRW]
);

/**
 * get_future_salts:get_future_salts FutureSalts
 * #b921bd04:3105996036:-1188971260
 * num:int
 */
export interface GetFutureSaltsM {
  _id: number;
  _method(): void;
  _values: [number];

  get_num(): number;
  set_num(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let GetFutureSaltsM = r<new () => GetFutureSaltsM>(
  0xb921bd04,
  "GetFutureSaltsM",
  () => ["num", IntRW]
);

/**
 * ping:ping Pong
 * #7abe77ec:2059302892:2059302892
 * ping_id:long
 */
export interface PingM {
  _id: number;
  _method(): void;
  _values: [ProtoLong];

  get_ping_id(): ProtoLong;
  set_ping_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PingM = r<new () => PingM>(0x7abe77ec, "PingM", () => [
  "ping_id",
  LongRW
]);

/**
 * ping_delay_disconnect:ping_delay_disconnect Pong
 * #f3427b8c:4081220492:-213746804
 * ping_id:long
 * disconnect_delay:int
 */
export interface PingDelayDisconnectM {
  _id: number;
  _method(): void;
  _values: [ProtoLong, number];

  get_ping_id(): ProtoLong;
  set_ping_id(val: ProtoLong): this;

  get_disconnect_delay(): number;
  set_disconnect_delay(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let PingDelayDisconnectM = r<new () => PingDelayDisconnectM>(
  0xf3427b8c,
  "PingDelayDisconnectM",
  () => ["ping_id", LongRW, "disconnect_delay", IntRW]
);

/**
 * destroy_session:destroy_session DestroySessionRes
 * #e7512126:3880853798:-414113498
 * session_id:long
 */
export interface DestroySessionM {
  _id: number;
  _method(): void;
  _values: [ProtoLong];

  get_session_id(): ProtoLong;
  set_session_id(val: ProtoLong): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let DestroySessionM = r<new () => DestroySessionM>(
  0xe7512126,
  "DestroySessionM",
  () => ["session_id", LongRW]
);

/**
 * http_wait:http_wait HttpWait
 * #9299359f:2459514271:-1835453025
 * max_delay:int
 * wait_after:int
 * max_wait:int
 */
export interface HttpWaitM {
  _id: number;
  _method(): void;
  _values: [number, number, number];

  get_max_delay(): number;
  set_max_delay(val: number): this;

  get_wait_after(): number;
  set_wait_after(val: number): this;

  get_max_wait(): number;
  set_max_wait(val: number): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let HttpWaitM = r<new () => HttpWaitM>(0x9299359f, "HttpWaitM", () => [
  "max_delay",
  IntRW,
  "wait_after",
  IntRW,
  "max_wait",
  IntRW
]);

/**
 * req_pq:ResPQ
 * #60469778:1615239032:1615239032
 * nonce:int128
 */
export let CallReqPqM = c;
export type CallReqPqM = (
  invoker: ApiInvoker | Connection,
  req: ReqPqM
) => Promise<(ResPqS | RpcErrorS) & { dc: number }>;

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
export let CallReqDhParamsM = c;
export type CallReqDhParamsM = (
  invoker: ApiInvoker | Connection,
  req: ReqDhParamsM
) => Promise<(ServerDhParamsT | RpcErrorS) & { dc: number }>;

/**
 * set_client_DH_params:Set_client_DH_params_answer
 * #f5045f1f:4110704415:-184262881
 * nonce:int128
 * server_nonce:int128
 * encrypted_data:bytes
 */
export let CallSetClientDhParamsM = c;
export type CallSetClientDhParamsM = (
  invoker: ApiInvoker | Connection,
  req: SetClientDhParamsM
) => Promise<(SetClientDhParamsAnswerT | RpcErrorS) & { dc: number }>;

/**
 * rpc_drop_answer:RpcDropAnswer
 * #58e4a740:1491380032:1491380032
 * req_msg_id:long
 */
export let CallRpcDropAnswerM = c;
export type CallRpcDropAnswerM = (
  invoker: ApiInvoker | Connection,
  req: RpcDropAnswerM
) => Promise<(RpcDropAnswerT | RpcErrorS) & { dc: number }>;

/**
 * ping:Pong
 * #7abe77ec:2059302892:2059302892
 * ping_id:long
 */
export let CallPingM = c;
export type CallPingM = (
  invoker: ApiInvoker | Connection,
  req: PingM
) => Promise<(PongS | RpcErrorS) & { dc: number }>;

/**
 * ping_delay_disconnect:Pong
 * #f3427b8c:4081220492:-213746804
 * ping_id:long
 * disconnect_delay:int
 */
export let CallPingDelayDisconnectM = c;
export type CallPingDelayDisconnectM = (
  invoker: ApiInvoker | Connection,
  req: PingDelayDisconnectM
) => Promise<(PongS | RpcErrorS) & { dc: number }>;

/**
 * destroy_session:DestroySessionRes
 * #e7512126:3880853798:-414113498
 * session_id:long
 */
export let CallDestroySessionM = c;
export type CallDestroySessionM = (
  invoker: ApiInvoker | Connection,
  req: DestroySessionM
) => Promise<(DestroySessionResT | RpcErrorS) & { dc: number }>;

/**
 * http_wait:HttpWait
 * #9299359f:2459514271:-1835453025
 * max_delay:int
 * wait_after:int
 * max_wait:int
 */
export let CallHttpWaitM = c;
export type CallHttpWaitM = (
  invoker: ApiInvoker | Connection,
  req: HttpWaitM
) => Promise<(OneOf | IStruct | RpcErrorS) & { dc: number }>;

/**
 * future_salts:FutureSalts
 * #ae500895:2924480661:-1370486635
 * req_msg_id:long
 * now:int
 * salts:vector<future_salt>
 */
export interface FutureSaltsS {
  _id: number;
  _values: [ProtoLong, number, VectorS<FutureSaltT>];

  get_req_msg_id(): ProtoLong;
  set_req_msg_id(val: ProtoLong): this;

  get_now(): number;
  set_now(val: number): this;

  get_salts(): VectorS<FutureSaltT>;
  set_salts(val: VectorS<FutureSaltT>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let FutureSaltsS = r<new () => FutureSaltsS>(
  0xae500895,
  "FutureSaltsS",
  () => [
    "req_msg_id",
    LongRW,
    "now",
    IntRW,
    "salts",
    VectorRW(TypeRW(FutureSaltT), true)
  ]
);

/**
 * msg_container:MessageContainer
 * #73f1f8dc:1945237724:1945237724
 * messages:vector<%Message>
 */
export interface MsgContainerS {
  _id: number;
  _values: [VectorS<MessageS>];

  get_messages(): VectorS<MessageS>;
  set_messages(val: VectorS<MessageS>): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgContainerS = r<new () => MsgContainerS>(
  0x73f1f8dc,
  "MsgContainerS",
  () => ["messages", VectorRW(TypeRW(MessageS, true), true)]
);

/**
 * msg_copy:MessageCopy
 * #e06046b2:3764405938:-530561358
 * orig_message:Message
 */
export interface MsgCopyS {
  _id: number;
  _values: [MessageT];

  get_orig_message(): MessageT;
  set_orig_message(val: MessageT): this;

  _write(buf: ByteBuffer, noId: boolean): this;
  _read(buf: ByteBuffer, noId: boolean): this;
}
export let MsgCopyS = r<new () => MsgCopyS>(0xe06046b2, "MsgCopyS", () => [
  "orig_message",
  TypeRW(MessageT)
]);

export const MessageContainerT = MsgContainerS;
export type MessageContainerT = MsgContainerS;

export const MessageCopyT = MsgCopyS;
export type MessageCopyT = MsgCopyS;

/**
 * get_future_salts:FutureSalts
 * #b921bd04:3105996036:-1188971260
 * num:int
 */
export let CallGetFutureSaltsM = c;
export type CallGetFutureSaltsM = (
  invoker: ApiInvoker | Connection,
  req: GetFutureSaltsM
) => Promise<(FutureSaltsS | RpcErrorS) & { dc: number }>;
CallDeclareQueue();

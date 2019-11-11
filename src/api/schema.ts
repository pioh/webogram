export const NoConstructor = [];

export type ITypePrimitive = never[];
export type ITypeVector = [ITypePrimitive, any, ITypePrimitive?];
export type ITypeStruct = [
  number,
  Array<ITypePrimitive | ITypeVector | IOneOf | IOptional>
];
export type IMethod = [
  number,
  Array<ITypePrimitive | ITypeVector | ITypeStruct | IOptional>,
  ...ITypeStruct[]
];
export type IOneOf = [never[], ...any[]];
export type IOptional = [never[], ...any[]];

export const TypeInt = [];
export const TypeInt64 = [];
export const TypeInt128 = [];
export const TypeInt256 = [];
export const TypeBytes = [];
export const TypeString = [];
export const TypeLong = [];
export const TypeObject = [];
export const TypeVector = [];
export const TypeOneOf = [];
export const TypeFlag = [];
export const TypeVectorLong: ITypeVector = [TypeVector, TypeLong];
export const TypeTrue: ITypePrimitive = [];

export const TypeNonce = TypeInt128;
export const TypeServerNonce = TypeInt128;
export const TypeNewNonce = TypeInt256;
export const TypePQ = TypeBytes;
export const TypeServerPublicKeyFingerprints = TypeVectorLong;

export const schema = new Map<number, ITypeStruct | IMethod>();

function type<T extends ITypeStruct | IMethod>(t: T): T {
  schema.set(t[0], t);
  return t;
}
function struct(
  id: number,
  ...args: Array<ITypePrimitive | ITypeVector | IOptional>
) {
  return type<ITypeStruct>([id, args]);
}
function oneOf(...types: ITypeStruct[]): IOneOf {
  return [TypeOneOf, ...types];
}

export const BoolFalse = struct(0x997275b5);
export const BoolTrue = struct(0xbc799737);
export const Bool = oneOf(BoolFalse, BoolTrue);

function optional(
  ...types: Array<IOneOf | ITypeStruct | ITypePrimitive | null>
): IOptional {
  return [TypeFlag, ...types];
}
export const NoAnswerFound: ITypeStruct = [-1, []];
// p_q_inner_data#83c95aec pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 = P_Q_inner_data

export const TypePQInnerData: ITypeStruct = type([
  0x83c95aec,
  [TypeBytes, TypeBytes, TypeBytes, TypeNonce, TypeNonce, TypeNewNonce]
]);

export const TypeResPQ: ITypeStruct = type([
  0x05162463,
  [TypeNonce, TypeServerNonce, TypePQ, TypeServerPublicKeyFingerprints]
]);
// server_DH_params_ok#d0e8075c nonce:int128 server_nonce:int128 encrypted_answer:string = Server_DH_Params;
export const TypeResDHParamsOk: ITypeStruct = type([
  0xd0e8075c,
  [TypeNonce, TypeServerNonce, TypeBytes]
]);
// server_DH_params_fail#79cb045d nonce:int128 server_nonce:int128 new_nonce_hash:int128 = Server_DH_Params;
export const TypeResDHParamsFail: ITypeStruct = type([
  0x79cb045d,
  [TypeNonce, TypeServerNonce, TypeInt128]
]);
// server_DH_inner_data#b5890dba nonce:int128 server_nonce:int128 g:int dh_prime:string g_a:string server_time:int = Server_DH_inner_data;
export const TypeResDHParamsInner: ITypeStruct = type([
  0xb5890dba,
  [TypeNonce, TypeServerNonce, TypeInt, TypeBytes, TypeBytes, TypeInt]
]);

export const MethodReqPq: IMethod = type([0xbe7e8ef1, [TypeNonce], TypeResPQ]);

// req_DH_params#d712e4be nonce:int128 server_nonce:int128 p:string q:string public_key_fingerprint:long encrypted_data:string = Server_DH_Params
export const MethodReqDHParams: IMethod = type([
  0xd712e4be,
  [TypeNonce, TypeServerNonce, TypeBytes, TypeBytes, TypeLong, TypeBytes],
  TypeResDHParamsOk
]);

// client_DH_inner_data#6643b654 nonce:int128 server_nonce:int128 retry_id:long g_b:string = Client_DH_Inner_Data
export const TypeClientDHInnerData: ITypeStruct = type([
  0x6643b654,
  [TypeNonce, TypeServerNonce, TypeLong, TypeBytes]
]);

// set_client_DH_params#f5045f1f nonce:int128 server_nonce:int128 encrypted_data:string = Set_client_DH_params_answer;
export const MethodSetClientDHParams: ITypeStruct = type([
  0xf5045f1f,
  [TypeNonce, TypeServerNonce, TypeBytes]
]);

// dh_gen_ok#3bcbf734 nonce:int128 server_nonce:int128 new_nonce_hash1:int128 = Set_client_DH_params_answer;
export const TypeDHGenOk: ITypeStruct = type([
  0x3bcbf734,
  [TypeNonce, TypeServerNonce, TypeNonce]
]);

// initConnection#785188b8 {X:Type} flags:# api_id:int device_model:string system_version:string app_version:string
// system_lang_code:string lang_pack:string lang_code:string proxy:flags.0?InputClientProxy query:!X = X;
export const TypeInitLayer: ITypeStruct = type([0xda9b0d0d, [TypeInt]]);
// invokeWithLayer#da9b0d0d {X:Type} layer:int query:!X = X;
export const TypeInitConnection: ITypeStruct = type([
  0x785188b8,
  [
    TypeInt,
    TypeString,
    TypeString,
    TypeString,
    TypeString,
    TypeString,
    TypeString
  ]
]);

// pong#347773c5 msg_id:long ping_id:long = Pong;
export const TypePongStruct: ITypeStruct = type([
  0x347773c5,
  [TypeLong, TypeLong]
]);
// ping#7abe77ec ping_id:long = Pong;
export const MethodPing: IMethod = type([
  0x7abe77ec,
  [TypeLong],
  TypePongStruct
]);

// message msg_id:long seqno:int bytes:int body:Object = Message;
export const TypeMessage: ITypeStruct = [
  0,
  [TypeLong, TypeInt, TypeInt, TypeObject]
];
export const TypeVectorMessage: ITypeVector = [
  TypeVector,
  TypeMessage,
  NoConstructor
];

// msg_container#73f1f8dc messages:vector<%Message> = MessageContainer;
export const TypeMsgContainer: ITypeStruct = type([
  0x73f1f8dc,
  [TypeVectorMessage]
]);

// new_session_created#9ec20908 first_msg_id:long unique_id:long server_salt:long = NewSession;
export const TypeNewSession: ITypeStruct = type([
  0x9ec20908,
  [TypeLong, TypeLong, TypeInt64]
]);

// auth.sentCodeTypeApp#3dbb5986 length:int = auth.SentCodeType;
export const AuthSentCodeTypeApp = struct(0x3dbb5986, TypeInt);
// auth.sentCodeTypeSms#c000bba2 length:int = auth.SentCodeType;
export const AuthSentCodeTypeSms = struct(0xc000bba2, TypeInt);
// auth.sentCodeTypeCall#5353e5a7 length:int = auth.SentCodeType;
export const AuthSentCodeTypeCall = struct(0x5353e5a7, TypeInt);
// auth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;
export const AuthSentCodeTypeFlashCall = struct(0xab03c6d9, TypeString);

export const AuthCodeTypeSms = struct(0x72a3158c);
export const AuthCodeTypeCall = struct(0x741cd3e3);
export const AuthCodeTypeFlashCall = struct(0x226ccefb);

export const AuthSentCodeType = oneOf(
  AuthSentCodeTypeApp,
  AuthSentCodeTypeSms,
  AuthSentCodeTypeCall,
  AuthSentCodeTypeFlashCall
);
export const AuthCodeType = oneOf(
  AuthCodeTypeSms,
  AuthCodeTypeCall,
  AuthCodeTypeFlashCall
);
// auth.sentCode#5e002502 flags:# phone_registered type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType
// timeout:flags.2?int = auth.SentCode;
export const TypeAuthSentCode = type<ITypeStruct>([
  0x5e002502,
  [
    TypeInt,
    Bool,
    AuthSentCodeType,
    TypeString,
    optional(null, AuthCodeType, TypeInt)
  ]
]);
// codeSettings#debebe83 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true = CodeSettings;
export const TypeCodeSettings = struct(
  0xdebebe83,
  optional(TypeTrue, TypeTrue, null, null, TypeTrue)
);
// auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
export const MethodAuthSendCode = type<IMethod>([
  0xa677244f,
  [TypeString, TypeInt, TypeString, TypeCodeSettings],
  TypeAuthSentCode
]);

// rpc_error#2144ca19 error_code:int error_message:string = RpcError;
export const RpcError = struct(0x2144ca19, TypeInt, TypeString);

// bad_msg_notification#a7eff811 bad_msg_id:long bad_msg_seqno:int error_code:int = BadMsgNotification;
// bad_server_salt#edab447b bad_msg_id:long bad_msg_seqno:int error_code:int new_server_salt:long = BadMsgNotification;
export const BadServerSalt = struct(
  0xedab447b,
  TypeLong,
  TypeInt,
  TypeInt,
  TypeInt64
);

// rpc_result#f35c6d01 req_msg_id:long result:Object = RpcResult;
export const RpcResult = struct(0xf35c6d01, TypeLong, TypeObject);

/// bad_msg_notification#a7eff811 bad_msg_id:long bad_msg_seqno:int error_code:int = BadMsgNotification;
export const BadMsgNotification = struct(
  0xa7eff811,
  TypeLong,
  TypeInt,
  TypeInt
);

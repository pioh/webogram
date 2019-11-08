export type ITypePrimitive = never[];
export type ITypeVector = [ITypePrimitive, ITypePrimitive];
export type ITypeStruct = [number, Array<ITypePrimitive | ITypeVector>];
export type IMethod = [
  number,
  Array<ITypePrimitive | ITypeVector>,
  ITypeStruct
];

export const TypeInt128 = [];
export const TypeInt256 = [];
export const TypeBytes = [];
export const TypeString = [];
export const TypeLong = [];
export const TypeVector = [];
export const TypeVectorLong: ITypeVector = [TypeVector, TypeLong];

export const TypeNonce = TypeInt128;
export const TypeServerNonce = TypeInt128;
export const TypeNewNonce = TypeInt256;
export const TypePQ = TypeBytes;
export const TypeServerPublicKeyFingerprints = TypeVectorLong;

// p_q_inner_data#83c95aec pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 = P_Q_inner_data
export const TypePQInnerData: ITypeStruct = [
  0x83c95aec,
  [TypeBytes, TypeBytes, TypeBytes, TypeNonce, TypeNonce, TypeNewNonce]
];

export const TypeResPQ: ITypeStruct = [
  0x05162463,
  [TypeNonce, TypeServerNonce, TypePQ, TypeServerPublicKeyFingerprints]
];
export const TypeResDHParams: ITypeStruct = [
  0x05162463,
  [TypeNonce, TypeServerNonce, TypePQ, TypeServerPublicKeyFingerprints]
];
export const MethodReqPq: IMethod = [0xbe7e8ef1, [TypeNonce], TypeResPQ];

// req_DH_params#d712e4be nonce:int128 server_nonce:int128 p:string q:string public_key_fingerprint:long encrypted_data:string = Server_DH_Params
export const MethodReqDHParams: IMethod = [
  0xd712e4be,
  [TypeNonce, TypeServerNonce, TypeBytes, TypeBytes, TypeLong, TypeBytes],
  TypeResDHParams
];

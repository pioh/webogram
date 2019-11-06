export type ITypePrimitive = never[];
export type ITypeVector = [ITypePrimitive, ITypePrimitive];
export type ITypeStruct = [number, Array<ITypePrimitive | ITypeVector>];
export type IMethod = [
  number,
  Array<ITypePrimitive | ITypeVector>,
  ITypeStruct
];

export const TypeInt128 = [];
export const TypeBytes = [];
export const TypeLong = [];
export const TypeVector = [];
export const TypeVectorLong: ITypeVector = [TypeVector, TypeLong];

export const TypeNonce = TypeInt128;
export const TypeServerNonce = TypeInt128;
export const TypePQ = TypeBytes;
export const TypeServerPublicKeyFingerprints = TypeVectorLong;

export const TypeResPQ: ITypeStruct = [
  85337187,
  [TypeNonce, TypeServerNonce, TypePQ, TypeVectorLong]
];

export const MethodReqPq: IMethod = [1615239032, [TypeNonce], TypeResPQ];

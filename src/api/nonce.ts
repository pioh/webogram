import { GetRandomValues } from "lib/GetRandomValues";

let nonce: Uint8Array | null = null;

export function NewNonce() {
  nonce = GetRandomValues(new Uint8Array(16));
  return nonce;
}

export function GetNonce() {
  return nonce || NewNonce();
}

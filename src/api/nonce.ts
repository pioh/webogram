let nonce: Uint8Array | null = null;

export function NewNonce() {
  nonce = crypto.getRandomValues(new Uint8Array(16));
  return nonce;
}

export function GetNonce() {
  return nonce || NewNonce();
}

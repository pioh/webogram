export function bytesXor(b1: Uint8Array, b2: Uint8Array) {
  let len = b1.length;
  let bytes = new Uint8Array(len);

  for (let i = 0; i < len; ++i) {
    bytes[i] = b1[i] ^ b2[i];
  }

  return bytes;
}

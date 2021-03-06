export async function Sha1(
  data: Uint8Array | Uint32Array | ArrayBuffer | number[]
) {
  if (Array.isArray(data)) {
    data = new Uint8Array(data);
  }
  // let dataSha1 = new Uint8Array(rusha.rawDigest(data.getBuffer()).buffer);
  return new Uint8Array(await self.crypto.subtle.digest("SHA-1", data));
}

export async function Sha512(
  data: Uint8Array | Uint32Array | ArrayBuffer | number[]
) {
  if (Array.isArray(data)) {
    data = new Uint8Array(data);
  }
  // let dataSha1 = new Uint8Array(rusha.rawDigest(data.getBuffer()).buffer);
  return new Uint8Array(await self.crypto.subtle.digest("SHA-512", data));
}
export async function Sha256(
  data: Uint8Array | Uint32Array | ArrayBuffer | number[]
) {
  if (Array.isArray(data)) {
    data = new Uint8Array(data);
  }
  // let dataSha1 = new Uint8Array(rusha.rawDigest(data.getBuffer()).buffer);
  return new Uint8Array(await self.crypto.subtle.digest("SHA-256", data));
}

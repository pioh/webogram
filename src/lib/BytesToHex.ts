export function bytesToHex(bytes: Uint8Array) {
  bytes = bytes || [];
  let arr = [];
  for (let i = 0; i < bytes.length; i++) {
    arr.push((bytes[i] < 16 ? "0" : "") + (bytes[i] || 0).toString(16));
  }
  return arr.join("");
}

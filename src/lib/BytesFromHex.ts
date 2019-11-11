export function bytesFromHex(hexString: string) {
  let len = hexString.length;

  let start = 0;
  let bytes = [];

  if (hexString.length % 2) {
    bytes.push(parseInt(hexString.charAt(0), 16));
    start++;
  }

  for (let i = start; i < len; i += 2) {
    bytes.push(parseInt(hexString.substr(i, 2), 16));
  }

  return new Uint8Array(bytes);
}

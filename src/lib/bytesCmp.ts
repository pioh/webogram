export function bytesCmp(a: Uint8Array, b: Uint8Array) {
  let eq = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) eq = false;
  }
  return eq;
}

let buf = new Uint32Array(1);

export function nextRandomInt(maxValue: number) {
  buf = crypto.getRandomValues(buf);
  return buf[0] % (maxValue + 1);
}

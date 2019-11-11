let support: null | boolean = null;
export function emojiSupport() {
  let context: any;
  let smile: any;
  if (!document.createElement("canvas").getContext) return;
  context = document.createElement("canvas").getContext("2d");
  if (typeof context.fillText != "function") return;
  smile = String.fromCharCode(55357) + String.fromCharCode(56835);

  context.textBaseline = "top";
  context.font = "32px Arial";
  context.fillText(smile, 0, 0);
  return context.getImageData(16, 16, 1, 1).data[0] !== 0;
}
export function emojiSupport2() {
  if (support !== null) {
    return support;
  }

  if (typeof window === "undefined") {
    return false;
  }

  let node = window.document.createElement("canvas");
  let ctx = node.getContext("2d") as any;
  if (!ctx) {
    return false;
  }
  let backingStoreRatio =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
  let offset = 12 * backingStoreRatio;

  ctx.fillStyle = "#f00";
  ctx.textBaseline = "top";
  ctx.font = "32px Arial";
  ctx.fillText("\ud83d\udc28", 0, 0); // U+1F428 KOALA

  support = ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;

  return support;
}

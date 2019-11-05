export function throttle(wait: number, fn: () => void) {
  let time = Date.now();
  let foo = function() {
    let now = Date.now();
    if (time + wait - now <= 0) {
      requestAnimationFrame(fn);
      time = now;
    } else {
      setTimeout(foo, time + wait - now);
    }
  };
  return foo;
}

import * as h from "lib/html";

import * as s from "./Phone.scss";

export class Phone {
  domRoot: HTMLDivElement | null = null;
  domInput: HTMLInputElement | null = null;

  mount(): HTMLElement {
    this.domRoot = h.div(
      h.className(s.root),
      h.input(h.className(s.input), h.cb(el => (this.domInput = el)))
    );
    return this.domRoot;
  }
  unmount() {
    if (this.domRoot) {
      this.domRoot.remove();
      this.domRoot = null;
    }
  }
}

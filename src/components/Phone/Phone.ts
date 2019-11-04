import { html } from "lib/html";

import * as s from "./Phone.scss";

export class Phone {
  domRoot: HTMLDivElement | null = null;
  domInput: HTMLInputElement | null = null;

  mount(): HTMLElement {
    this.domRoot = html<HTMLDivElement>`
      <div class="${s.root}"><input class="${s.input}" /></div>
    `;
    this.domInput = this.domRoot.querySelector<HTMLInputElement>(`.${s.input}`);

    return this.domRoot;
  }
  unmount() {
    if (this.domRoot) {
      this.domRoot.remove();
      this.domRoot = null;
    }
  }
}

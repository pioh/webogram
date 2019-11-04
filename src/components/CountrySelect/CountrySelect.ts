import { html } from "lib/html";

import * as s from "./CountrySelect.scss";

var Country: Promise<
  typeof import("/home/tema/webogram/src/dictionary/Country.en")
> | null = null;

export class CountrySelect {
  domRoot: HTMLDivElement | null = null;
  domInput: HTMLInputElement | null = null;
  domUL: HTMLUListElement | null = null;
  class = new Set([s.root]);
  code = "";
  value = "";

  constructor() {
    this.loadCountry();
  }

  mount(): HTMLElement {
    this.domRoot = html<HTMLDivElement>`
      <div class="${[...this.class].join(" ")}">
        <label for="country-input">Country</label>
        <input
          id="country-input"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          class="${s.input}"
          placeholder="Country"
        />
        <i />
      </div>
    `;
    this.domInput = this.domRoot.querySelector<HTMLInputElement>(
      `.${s.input}`
    )!;
    this.domInput.addEventListener("focus", this.onFocus);
    this.domInput.addEventListener("click", this.onFocus);

    return this.domRoot;
  }
  unmount() {
    if (this.domRoot) {
      this.domRoot.remove();
      this.domRoot = null;
    }
    this.domInput = null;
    this.domUL = null;
    window.removeEventListener("click", this.onClickOutside);
  }
  loadCountry() {
    Country = import("dictionary/Country.en");
  }
  onFocus = () => {
    this.mountSelect();
  };
  onClickOutside = (e: MouseEvent) => {
    this.close(e);
  };
  close = (e?: MouseEvent) => {
    if (!this.domUL) return;
    if (!this.domRoot) return;
    if (e && this.domRoot.contains(e.target as Node)) return;
    window.removeEventListener("click", this.onClickOutside);

    this.domUL.remove();
    this.domUL = null;
    this.class.delete(s.open);
    this.domRoot.setAttribute("class", [...this.class].join(" "));
  };
  setValue(value: string, code: string) {
    this.value = value;
    this.code = code;
    if (this.domInput) this.domInput.value = value;
    if (this.domRoot) {
      this.class.add(s.withLabel);
      this.domRoot.setAttribute("class", [...this.class].join(" "));
    }
  }
  async mountSelect() {
    let country = await Country;
    if (!country) return;
    if (!this.domInput) return;
    if (!this.domRoot) return;
    if (this.domUL) return;

    let inputRect = this.domInput.getBoundingClientRect();
    let maxHeight = Math.max(
      window.innerHeight - inputRect.height - inputRect.top - 16,
      120
    );

    this.domUL = html<HTMLUListElement>`
      <ul class=${s.list} style="max-height: ${maxHeight}px"></ul>
    `;

    for (let c of country.Country) {
      let li = html<HTMLLIElement>`
        <li role="group" tabindex="-1">
          <img src="flags/${c[2].toLowerCase()}.png" />
          <div>${c[1]}</div>
          <span>${c[0]}</div>
        </li>
      `;
      li.addEventListener("click", () => {
        if (!this.domInput) return;
        this.setValue(c[1], c[0]);
        this.close();
      });
      this.domUL.appendChild(li);
    }
    this.domRoot.appendChild(this.domUL);
    this.class.add(s.open);
    this.domRoot.setAttribute("class", [...this.class].join(" "));
    window.addEventListener("click", this.onClickOutside);
    this.domInput.scrollIntoView();
  }
}

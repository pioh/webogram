import { html } from "lib/html";

import * as s from "./CountrySelect.scss";

let Country: Promise<
  typeof import("/home/tema/webogram/src/dictionary/Country.en")
> | null = null;

const MIN_SELECT_HEIGHT = 220;
const LI_HEIGHT = 56;

export class CountrySelect {
  domRoot: HTMLDivElement | null = null;
  domInput: HTMLInputElement | null = null;
  domUL: HTMLUListElement | null = null;
  options: Array<[string, string, string, string?, string?]> = [];
  class = new Set([s.root]);
  scroll = 0;
  offset = 0;
  itemsCount = 0;
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
        <i></i>
      </div>
    `;
    this.domInput = this.domRoot.querySelector<HTMLInputElement>(
      `.${s.input}`
    )!;
    this.domInput.addEventListener("focus", this.onFocus);
    this.domInput.addEventListener("click", this.onFocus);
    this.domInput.addEventListener("input", this.onInput);
    this.domInput.addEventListener("blur", this.onBlur);

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
    window.removeEventListener("resize", this.onResize);
  }
  loadCountry() {
    Country = import("dictionary/Country.en");
  }
  onFocus = () => {
    this.mountSelect();
  };
  onBlur = () => {};
  onInput = async () => {
    if (!this.domInput) return;
    let country = await Country;
    if (!country) return;
    let val = this.domInput.value;
    this.options = country.Country.map(
      o =>
        [this.rate(val, o), o] as [
          string,
          [string, string, string, string?, string?]
        ]
    )
      .filter(o => !!o[0])
      .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
      .map(o => o[1]);
    this.renderOptions();
  };

  onClickOutside = (e: MouseEvent) => {
    this.close(e);
  };
  close = (e?: MouseEvent) => {
    if (!this.domUL) return;
    if (!this.domRoot) return;
    if (e && this.domRoot.contains(e.target as Node)) return;
    window.removeEventListener("click", this.onClickOutside);
    window.removeEventListener("resize", this.onResize);
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
  onResize = () => {
    this.matchUpOrDown();
    this.rerenderListItems();
  };
  matchUpOrDown = () => {
    if (!this.domUL || !this.domInput || !this.domRoot) return;
    let inputRect = this.domInput.getBoundingClientRect();
    let maxHeight = window.innerHeight - inputRect.height - inputRect.top - 16;
    if (maxHeight < MIN_SELECT_HEIGHT) {
      maxHeight = MIN_SELECT_HEIGHT;
      this.class.add(s.upperSelect);
      this.domRoot.setAttribute("class", [...this.class].join(" "));
    } else {
      this.class.delete(s.upperSelect);
      this.domRoot.setAttribute("class", [...this.class].join(" "));
    }
    this.domUL.style.maxHeight = `${maxHeight}px`;
  };
  rate(val: string, o: [string, string, string, string?, string?]): string {
    val = this.strip(val);
    let o0 = this.strip(o[0]).indexOf(val);
    let o1 = this.strip(o[1]).indexOf(val);
    let o2 = this.strip(o[2]).indexOf(val);
    if (o0 < 0 && o1 < 0 && o2 < 0) return "";
    let r = 1333;
    if (o0 === 0) r -= 200;
    else if (o0 > 0) r -= 100;
    if (o1 === 0) r -= 20;
    else if (o1 > 0) r -= 10;
    if (o2 === 0) r -= 2;
    else if (o2 > 0) r -= 1;
    let rate = `${r}${o[1]}`;
    return rate;
  }
  strip(val: string) {
    return val
      .toLowerCase()
      .trim()
      .replace(/[^\w\d]/g, "");
  }
  async mountSelect() {
    let country = await Country;
    if (!country) return;
    if (!this.domInput) return;
    if (!this.domRoot) return;
    if (this.domUL) return;
    this.options = country.Country;
    this.domUL = html<HTMLUListElement>`
      <ul class=${s.list}></ul>
    `;
    this.domUL.addEventListener("scroll", this.onScroll);
    this.matchUpOrDown();
    window.addEventListener("resize", this.onResize);
    this.renderOptions();

    this.domRoot.appendChild(this.domUL);
    this.class.add(s.open);
    this.domRoot.setAttribute("class", [...this.class].join(" "));
    window.addEventListener("click", this.onClickOutside);
    if (this.domUL.style.maxHeight === `${MIN_SELECT_HEIGHT}px`) {
      this.domInput.scrollIntoView();
    }
  }
  onScroll = () => {
    this.rerenderListItems();
  };
  rerenderListItems = () => {
    if (!this.domUL) return;
    let offset = this.offset;
    let itemsCount = this.itemsCount;

    this.scroll = this.domUL.scrollTop;
    if (this.class.has(s.upperSelect)) {
      this.scroll =
        -this.domUL.scrollTop +
        this.domUL.scrollHeight -
        this.domUL.clientHeight;
    }

    this.matchListPaddings();
    let divs = [
      this.domUL.firstChild,
      this.domUL.lastChild
    ] as HTMLDivElement[];
    let lis = Array.prototype.slice.call(this.domUL.querySelectorAll("li"));
    if (this.offset > offset) {
      lis.splice(0, this.offset - offset).forEach(n => n.remove());
      itemsCount -= this.offset - offset;
      offset = this.offset;
    }
    if (this.itemsCount + this.offset < offset + itemsCount) {
      let diff = offset + itemsCount - this.itemsCount - this.offset;
      let removed = lis.splice(itemsCount - diff, diff);
      removed.forEach(n => n.remove());
      itemsCount -= diff;
    }
    if (this.offset < offset) {
      for (let i = offset - 1; i >= this.offset; i--) {
        divs[0].after(this.renderLi(i));
      }
      itemsCount += offset - this.offset;
      offset = this.offset;
    }
    if (this.itemsCount > itemsCount) {
      for (
        let i = this.offset + itemsCount;
        i < this.itemsCount + this.offset;
        i++
      ) {
        divs[1].before(this.renderLi(i));
      }
      itemsCount = this.itemsCount;
    }

    divs[0].style.height = `${this.offset * LI_HEIGHT}px`;
    divs[1].style.height = `${(this.options.length -
      this.offset -
      this.itemsCount) *
      LI_HEIGHT}px`;
    if (!this.class.has(s.upperSelect)) {
      this.domUL.scrollTop = this.scroll;
    } else {
      this.domUL.scrollTop =
        -this.scroll + this.domUL.scrollHeight - this.domUL.clientHeight;
    }
  };

  matchListPaddings() {
    this.itemsCount = Math.ceil(window.innerHeight / LI_HEIGHT);
    this.offset = Math.floor(this.scroll / LI_HEIGHT) - 1;
    if (this.offset >= this.options.length) {
      this.offset = this.options.length - 1;
    }
    if (this.offset < 0) this.offset = 0;
    if (this.offset + this.itemsCount > this.options.length) {
      this.itemsCount = this.options.length - this.offset;
    }
  }
  renderOptions() {
    if (!this.domUL) return;
    this.domUL.innerHTML = "";
    this.matchListPaddings();
    this.scroll = 0;
    this.domUL.append(
      html`
        <div style="height: ${this.offset * LI_HEIGHT}px;"></div>
      `
    );
    for (let i = 0; i < this.itemsCount; i++) {
      if (i + this.offset >= this.options.length) break;
      this.domUL.appendChild(this.renderLi(i));
    }
    this.domUL.append(
      html`
        <div
          style="height: ${(this.options.length -
            this.offset -
            this.itemsCount) *
            LI_HEIGHT}px;"
        ></div>
      `
    );
  }
  renderLi(index: number) {
    let c = this.options[index];
    let li = html<HTMLLIElement>`
      <li role="group" tabindex="-1">
        <i style="background-image: url('flags/${c[2].toLowerCase()}.png');"></i>
        <div>${c[1]}</div>
        <span>${c[0]}</div>
      </li>
    `;
    li.addEventListener("click", () => {
      if (!this.domInput) return;
      this.setValue(c[1], c[0]);
      this.close();
    });
    return li;
  }
}

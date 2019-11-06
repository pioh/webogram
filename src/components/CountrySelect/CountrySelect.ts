import { html } from "lib/html";
import { throttle } from "lib/throttle";

import * as s from "./CountrySelect.scss";

let Country: Promise<
  typeof import("/home/tema/webogram/src/dictionary/Country.en")
> | null = null;

let Emoji: Promise<
  typeof import("/home/tema/webogram/src/dictionary/Emoji")
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
  emoji: Map<string, string> = new Map();
  country: Array<[string, string, string, string?, string?]> = [];
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
    this.domInput.addEventListener("click", this.onInputClick, {
      passive: true
    });
    this.domInput.addEventListener("focus", this.onFocus, { passive: true });
    this.domInput.addEventListener("input", this.onInput, { passive: true });
    this.domInput.addEventListener("blur", this.onBlur, { passive: true });

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
  async loadCountry() {
    if (!Country) {
      Country = new Promise(r =>
        requestAnimationFrame(() => import("dictionary/Country.en").then(r))
      );
    }
    if (!Emoji) {
      Emoji = new Promise(r =>
        requestAnimationFrame(() => import("dictionary/Emoji").then(r))
      );
    }
    this.country = (await Country).Country;
    this.emoji = (await Emoji).Emoji;
  }
  onInputClick = () => {
    this.mountSelect();
  };
  onFocus = () => {
    this.mountSelect();
  };
  onBlur = () => {};
  onInput = async () => {
    if (!this.domInput) return;
    await Country;
    let val = this.domInput.value;
    this.options = this.country
      .map(
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
    this.class.delete(s.upperSelect);
    this.domRoot.setAttribute("class", [...this.class].join(" "));
    if (this.domInput) {
      this.domInput.value = this.value;
    }
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
    if (this.domInput) {
      this.domInput.scrollIntoView();
    }
  };
  matchUpOrDown = () => {
    if (!this.domUL || !this.domInput || !this.domRoot) return;
    let inputRect = this.domInput.getBoundingClientRect();
    let maxHeight = window.innerHeight - inputRect.height - inputRect.top - 16;
    let maxHeightUp = inputRect.top - 16;
    if (maxHeight < MIN_SELECT_HEIGHT) {
      maxHeight = Math.max(MIN_SELECT_HEIGHT, maxHeightUp);
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
    if (o1 === 0) r -= 2;
    else if (o1 > 0) r -= 1;
    if (o2 === 0) r -= 20;
    else if (o2 > 0) r -= 10;
    let rate = `${r}${o[0]}`;
    return rate;
  }
  strip(val: string) {
    return val
      .toLowerCase()
      .trim()
      .replace(/[^\w\d]/g, "");
  }
  async mountSelect() {
    await Country;
    await Emoji;
    if (!this.domInput) return;
    if (!this.domRoot) return;
    if (this.domUL) return;
    this.options = this.country;
    this.domUL = html<HTMLUListElement>`
      <ul class=${s.list}></ul>
    `;
    this.domUL.addEventListener("scroll", this.onScroll, { passive: true });
    this.matchUpOrDown();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.renderOptions();

    this.domRoot.appendChild(this.domUL);
    this.class.add(s.open);
    this.domRoot.setAttribute("class", [...this.class].join(" "));
    window.addEventListener("click", this.onClickOutside, { passive: true });
    // if (this.domUL.style.maxHeight === `${MIN_SELECT_HEIGHT}px`) {
    this.domInput.scrollIntoView();
    // }
  }
  onScroll = () => {
    this.rerenderListItems();
  };
  rerenderListItems = throttle(10, async () => {
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
      let count = this.offset - offset;
      if (count > itemsCount) count = itemsCount;
      lis.splice(0, count).forEach(n => n.remove());
      itemsCount -= count;
      offset = this.offset;
    }
    if (this.itemsCount + this.offset < offset + itemsCount) {
      let diff = offset + itemsCount - this.itemsCount - this.offset;
      if (diff > itemsCount) diff = itemsCount;
      let removed = lis.splice(itemsCount - diff, diff);
      removed.forEach(n => n.remove());
      itemsCount -= diff;
    }
    let push: Node[] = [];
    let unshift: Node[] = [];

    if (this.offset < offset) {
      let count = Math.min(offset - this.offset, this.itemsCount - itemsCount);
      for (let i = this.offset; i < this.offset + count; i++) {
        unshift.push(this.renderLi(i));
      }
      itemsCount += count;
      offset = this.offset;
    }
    if (this.itemsCount > itemsCount) {
      for (
        let i = this.offset + itemsCount;
        i < this.itemsCount + this.offset;
        i++
      ) {
        push.push(this.renderLi(i));
      }
      itemsCount = this.itemsCount;
    }
    divs[0].after(...unshift);
    divs[1].before(...push);

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
  });

  matchListPaddings() {
    if (!this.domUL) return;
    let H = this.domUL.clientHeight;
    if (H < MIN_SELECT_HEIGHT) H = window.innerHeight;
    else H += LI_HEIGHT * 2;
    this.itemsCount = Math.ceil(H / LI_HEIGHT);
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
    this.scroll = 0;
    this.matchListPaddings();
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
    let emoji = this.emoji.get(`:flag_${c[2].toLowerCase()}:`);
    if (!emoji) console.log(...c);
    let icon = emoji
      ? `<i>${emoji}</i>`
      : `<i style="background-image: url('flags/${c[2].toLowerCase()}.png');"></i>`;
    let li = html<HTMLLIElement>`
      <li role="group" tabindex="-1">
        ${icon}
        <div>${c[1]}</div>
        <span>${c[0]}</div>
      </li>
    `;
    li.addEventListener(
      "click",
      () => {
        if (!this.domInput) return;
        this.setValue(c[1], c[0]);
        this.close();
      },
      { passive: true, once: true }
    );
    return li;
  }
}

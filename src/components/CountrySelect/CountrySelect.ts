import { Input } from "components/Input/Input";
import { ITagProps, Tag } from "components/Tag/Tag";
import { GetCountry, ICountry } from "dictionary";
import * as h from "lib/html";
import { throttle } from "lib/throttle";

import * as s from "./CountrySelect.scss";

const MIN_SELECT_HEIGHT = 220;
const LI_HEIGHT = 56;

interface ICountrySelectProps extends ITagProps<HTMLDivElement> {}

export class CountrySelect extends Tag<HTMLDivElement> {
  input: Input;
  ul: Tag<HTMLUListElement> | null = null;

  _onChange: Array<(code: string, country: string) => void> = [];

  options: ICountry[] = [];
  scroll = 0;
  offset = 0;
  // emoji = new Map<string, string>();
  country = GetCountry();
  itemsCount = 0;
  code = "";
  value = "";

  constructor(props: ICountrySelectProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root)).tag
    });

    this.input = new Input({
      forInput: [h.onFocus(this.mountSelect), h.onClick(this.mountSelect)],
      forLabel: ["Country"],
      iconRight: h.i(h.className(s.icon))
    });
    this.input.onChange(this.onInputChange);
    this.append(this.input.tag);
    // GetEmoji().then(e => (this.emoji = e));
    this.autoSetCountry();
  }
  onChange(cb: (code: string, country: string) => void) {
    this._onChange.push(cb);
    return this;
  }
  remove() {
    super.remove();
    this.close();
    return this;
  }

  async autoSetCountry() {
    let country = await this.country;
    if (this.code || this.class.has(s.open)) return this;
    let code = (navigator.language || "").toLowerCase().split("-");
    let found = country.filter(v => {
      if (v[2].toLowerCase() === code[1]) return true;
      if (v.slice(3).find(c => c && c.toLowerCase() === code[1])) return true;
      return false;
    });
    if (found.length === 1) {
      this.setValue(found[0][1], found[0][0]);
    }
    return this;
  }

  onInputChange = async (value: string | number | null) => {
    let country = await this.country;
    this.options = country
      .map(
        o => [this.rate(value ? String(value) : "", o), o] as [string, ICountry]
      )
      .filter(o => !!o[0])
      .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
      .map(o => o[1]);
    this.renderOptions();
    return this;
  };
  close = (e?: MouseEvent) => {
    if (e && this.tag.contains(e.target as Node)) return this;
    window.removeEventListener("click", this.close);
    window.removeEventListener("resize", this.onWindowResize);
    if (!this.ul) return this;
    this.ul.remove();
    this.ul = null;
    this.removeClass(s.open, s.upperSelect);
    this.input.removeForceFocus();
    this.input.value = this.value;
    return this;
  };
  setValue(value: string, code: string) {
    if (this.input.value !== value) {
      this.input.value = value;
    }
    if (value === this.value && code === this.code) return this;
    this.value = value;
    this.code = code;
    this._onChange.map(cb => cb(code, value));
    return this;
  }
  onWindowResize = () => {
    this.matchUpOrDown();
    this.rerenderListItems();
    this.input.tag.scrollIntoView();
    return this;
  };
  matchUpOrDown = () => {
    if (!this.ul) return this;
    let inputRect = this.input.getBoundingClientRect();
    let maxHeight = Math.min(
      window.innerHeight - inputRect.height - inputRect.top - 16,
      376
    );
    // upper scroll reverse not work in wirefox TODO
    // let maxHeightUp = Math.min(inputRect.top - 16, 376);
    // if (maxHeight < MIN_SELECT_HEIGHT) {
    //   maxHeight = Math.max(MIN_SELECT_HEIGHT, maxHeightUp);
    //   this.addClass(s.upperSelect);
    // } else {
    //   this.removeClass(s.upperSelect);
    // }
    this.ul.tag.style.maxHeight = `${maxHeight}px`;
    return this;
  };
  rate(val: string, o: ICountry): string {
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
  mountSelect = async () => {
    let country = await this.country;
    if (this.ul) return;
    this.options = country;
    this.ul = h.ul(
      h.className(s.list),
      h.onScroll(this.onScroll, { passive: true })
    );
    this.matchUpOrDown();
    this.renderOptions();

    this.append(this.ul.tag);
    this.addClass(s.open);
    this.input.addForceFocus();
    window.addEventListener("resize", this.onWindowResize, { passive: true });
    window.addEventListener("click", this.close, { passive: true });
    this.input.scrollIntoView();
    return this;
  };
  onScroll = () => {
    this.rerenderListItems();
    return this;
  };
  rerenderListItems = throttle(10, async () => {
    if (!this.ul) return;
    let offset = this.offset;
    let itemsCount = this.itemsCount;

    this.scroll = this.ul.tag.scrollTop;
    if (this.class.has(s.upperSelect)) {
      this.scroll =
        -this.ul.tag.scrollTop +
        this.ul.tag.scrollHeight -
        this.ul.tag.clientHeight;
    }

    this.matchListPaddings();
    let divs = [
      this.ul.tag.firstChild,
      this.ul.tag.lastChild
    ] as HTMLDivElement[];
    let lis = Array.prototype.slice.call(this.ul.tag.querySelectorAll("li"));
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
        unshift.push(this.renderLi(i).tag);
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
        push.push(this.renderLi(i).tag);
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
      this.ul.tag.scrollTop = this.scroll;
    } else {
      this.ul.tag.scrollTop =
        -this.scroll + this.ul.tag.scrollHeight - this.ul.tag.clientHeight;
    }
    return this;
  });

  matchListPaddings() {
    if (!this.ul) return this;
    let H = this.ul.tag.clientHeight;
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
    return this;
  }
  renderOptions() {
    if (!this.ul) return this;
    this.ul.tag.innerHTML = "";
    this.scroll = 0;
    this.matchListPaddings();
    this.ul.append(h.div(h.style(`height: ${this.offset * LI_HEIGHT}px;`)).tag);
    if (this.itemsCount === 0) this.addClass(s.noItems);
    else this.removeClass(s.noItems);
    for (let i = 0; i < this.itemsCount; i++) {
      if (i + this.offset >= this.options.length) break;
      this.ul.append(this.renderLi(i).tag);
    }
    this.ul.append(
      h.div(
        h.style(
          `height: ${(this.options.length - this.offset - this.itemsCount) *
            LI_HEIGHT}px;`
        )
      ).tag
    );
    return this;
  }
  renderLi(index: number) {
    let c = this.options[index];
    // let emoji = this.emoji.get(`:flag_${c[2].toLowerCase()}:`);

    // let icon = emoji
    // ? h.i(emoji).tag
    let icon = h.i(
      h.style(`background-image: url('flags/${c[2].toLowerCase()}.png');`)
    ).tag;
    let li = h.li(
      h.role("group"),
      h.tabindex("-1"),
      icon,
      h.div(c[1]).tag,
      h.span(c[0]).tag,
      h.onClick(
        () => {
          this.setValue(c[1], c[0]);
          this.close();
        },
        { passive: true, once: true }
      )
    );

    return li;
  }
}

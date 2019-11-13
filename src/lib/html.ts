import { Tag } from "components/Tag/Tag";

export function html<T>(html: TemplateStringsArray, ...keys: any) {
  let template = document.createElement("template");
  template.innerHTML = html
    .reduce((out, next, i) => out + next + keys[i], "")
    .trim();
  return (template.content.firstChild as unknown) as T;
}
export type TagProp<T extends HTMLElement> =
  | Attribute
  | Callback<Tag<T>>
  | string
  | Node
  | Tag<any>
  | Listener<any, T>;

export function HtmlTag<K extends keyof HTMLElementTagNameMap>(name: K) {
  return (
    ..._props: Array<
      | TagProp<HTMLElementTagNameMap[K]>
      | Array<TagProp<HTMLElementTagNameMap[K]>>
      | undefined
      | null
    >
  ): Tag<HTMLElementTagNameMap[K]> => {
    let el = document.createElement<K>(name)!;
    let props: Array<TagProp<HTMLElementTagNameMap[K]>> = _props
      .reduce((a: any, b: any) => [...a, ...(Array.isArray(b) ? b : [b])], [])
      .filter(v => v);

    let children = [];
    for (let i = 0; i < props.length; i++) {
      let p = props[i];
      if (p instanceof Attribute) {
        let v = p.v;
        if (p.n === "class")
          v = [...(p.n || "").split(" "), v].filter(v => v).join(" ");
        if (p.n === "style")
          v = [...(p.n || "").split(";"), v].filter(v => v).join(";");
        el.setAttribute(p.n, String(p.v));
      } else if (p instanceof Callback) {
      } else if (p instanceof Listener) {
        el.addEventListener(p.n, p.c, p.o);
      } else {
        children.push(p);
      }
    }
    let tag = new Tag<HTMLElementTagNameMap[K]>({
      tag: el as HTMLElementTagNameMap[K]
    });
    tag.append(...children);

    for (let i = 0; i < props.length; i++) {
      let p = props[i];
      if (p instanceof Callback) {
        p.c(tag);
      }
    }

    return tag;
  };
}

export class Attribute {
  n: string;
  v: string | number;
  constructor(name: string, val: string | number) {
    this.n = name;
    this.v = val;
  }
}

export class Callback<T> {
  c: (el: T) => void;
  constructor(cb: (el: T) => void) {
    this.c = cb;
  }
}

export class Listener<K extends keyof HTMLElementEventMap, E> {
  n: K;
  c: (this: E, ev: HTMLElementEventMap[K]) => any;
  o?: boolean | AddEventListenerOptions;
  constructor(
    n: K,
    c: (this: E, ev: HTMLElementEventMap[K]) => any,
    o?: boolean | AddEventListenerOptions
  ) {
    this.n = n;
    this.c = c;
    if (typeof o === "object" && o.passive === void 0) o.passive = true;
    this.o = o;
  }
}

function NewEvenListener<K extends keyof HTMLElementEventMap>(n: K) {
  return function listener<E>(
    c: (this: E, ev: HTMLElementEventMap[K]) => any,
    o?: AddEventListenerOptions
  ) {
    return new Listener<K, E>(n, c, o);
  };
}

export function Attr(name: string) {
  return (val: string | number) => new Attribute(name, val);
}

export function cb<T>(cb: (el: T) => void) {
  return new Callback<T>(cb);
}

export const input = HtmlTag("input");
export const div = HtmlTag("div");
export const a = HtmlTag("a");
export const i = HtmlTag("i");
export const img = HtmlTag("img");
export const span = HtmlTag("span");
export const ul = HtmlTag("ul");
export const li = HtmlTag("li");
export const h1 = HtmlTag("h1");
export const p = HtmlTag("p");
export const br = HtmlTag("br");
export const label = HtmlTag("label");
export const button = HtmlTag("button");

export const id = Attr("id");
export const className = Attr("class");
export const style = Attr("style");
export const placeholder = Attr("placeholder");
export const value = Attr("value");
export const htmlFor = Attr("for");
export const role = Attr("role");
export const tabindex = Attr("tabindex");
export const type = Attr("type");

export const autocomplete = Attr("autocomplete");
export const autocorrect = Attr("autocorrect");
export const autocapitalize = Attr("autocapitalize");
export const spellcheck = Attr("spellcheck");

export const autocompleteOff = autocomplete("off");
export const autocorrectOff = autocorrect("off");
export const autocapitalizeOff = autocapitalize("off");
export const spellcheckOff = spellcheck("false");

export const onClick = NewEvenListener("click");
export const onFocus = NewEvenListener("focus");
export const onBlur = NewEvenListener("blur");
export const onInput = NewEvenListener("input");
export const onScroll = NewEvenListener("scroll");

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

export function HtmlTag<T extends HTMLElement>(name: string) {
  return (...props: Array<TagProp<T>>): Tag<T> => {
    let el = document.createElement(name)!;

    let children = [];
    for (let i = 0; i < props.length; i++) {
      let p = props[i];
      if (p instanceof Attribute) {
        el.setAttribute(p.n, String(p.v));
      } else if (p instanceof Callback) {
      } else if (p instanceof Listener) {
        el.addEventListener(p.n, p.c, p.o);
      } else {
        children.push(p);
      }
    }
    let tag = new Tag<T>({ tag: el as T });
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
    this.o = o;
  }
}

function NewEvenListener<K extends keyof HTMLElementEventMap>(n: K) {
  return function listener<E>(
    c: (this: E, ev: HTMLElementEventMap[K]) => any,
    o?: AddEventListenerOptions
  ) {
    return new Listener(n, c, o);
  };
}

export function Attr(name: string) {
  return (val: string | number) => new Attribute(name, val);
}

export function cb<T>(cb: (el: T) => void) {
  return new Callback<T>(cb);
}

export const input = HtmlTag<HTMLInputElement>("input");
export const div = HtmlTag<HTMLDivElement>("div");
export const a = HtmlTag<HTMLLinkElement>("a");
export const i = HtmlTag<HTMLDivElement>("i");
export const img = HtmlTag<HTMLImageElement>("img");
export const span = HtmlTag<HTMLSpanElement>("span");
export const ul = HtmlTag<HTMLUListElement>("ul");
export const li = HtmlTag<HTMLLIElement>("li");
export const h1 = HtmlTag<HTMLDivElement>("h1");
export const p = HtmlTag<HTMLDivElement>("p");
export const br = HtmlTag<HTMLBRElement>("br");
export const label = HtmlTag<HTMLLabelElement>("label");

export const id = Attr("id");
export const className = Attr("class");
export const style = Attr("style");
export const placeholder = Attr("placeholder");
export const value = Attr("value");
export const htmlFor = Attr("for");
export const role = Attr("role");
export const tabindex = Attr("tabindex");

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

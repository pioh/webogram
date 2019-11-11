export function html<T>(html: TemplateStringsArray, ...keys: any) {
  let template = document.createElement("template");
  template.innerHTML = html
    .reduce((out, next, i) => out + next + keys[i], "")
    .trim();
  return (template.content.firstChild as unknown) as T;
}

export function Tag<T extends HTMLElement>(name: string) {
  return (
    ...props: Array<
      Attribute | Callback<T> | string | Node | EvenListener<any, T>
    >
  ): T => {
    let el = document.createElement(name)!;
    let children = [];
    for (let i = 0; i < props.length; i++) {
      let p = props[i];
      if (p instanceof Attribute) {
        el.setAttribute(p.n, String(p.v));
      } else if (p instanceof Callback) {
        p.c(el as T);
      } else if (p instanceof EvenListener) {
        el.addEventListener(p.n, p.c, p.o);
      } else {
        children.push(p);
      }
    }
    if (children.length > 0) {
      el.append(...children);
    }
    return el as T;
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

export class EvenListener<K extends keyof HTMLElementEventMap, E> {
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
  return function onClick<E>(
    c: (this: E, ev: HTMLElementEventMap[K]) => any,
    o?: AddEventListenerOptions
  ) {
    return new EvenListener(n, c, o);
  };
}

export function Attr(name: string) {
  return (val: string | number) => new Attribute(name, val);
}

export function cb<T>(cb: (el: T) => void) {
  return new Callback<T>(cb);
}

export const input = Tag<HTMLInputElement>("input");
export const div = Tag<HTMLDivElement>("div");
export const a = Tag<HTMLLinkElement>("a");
export const i = Tag<HTMLDivElement>("i");
export const img = Tag<HTMLImageElement>("img");
export const span = Tag<HTMLSpanElement>("span");
export const ul = Tag<HTMLUListElement>("ul");
export const li = Tag<HTMLLIElement>("li");
export const h1 = Tag<HTMLDivElement>("h1");
export const p = Tag<HTMLDivElement>("p");
export const br = Tag<HTMLBRElement>("br");
export const label = Tag<HTMLLabelElement>("label");

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

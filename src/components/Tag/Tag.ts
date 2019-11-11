import * as h from "lib/html";

export interface ITagProps<T extends HTMLElement> {
  tag?: T | Tag<T>;
}

export class Tag<T extends HTMLElement, P extends ITagProps<T> = ITagProps<T>> {
  props: P;
  tag: T;
  class: Set<string>;
  listeners: Array<h.Listener<keyof HTMLElementEventMap, T>> = [];
  //   childrens: Array<Tag<any>> = [];

  constructor(props: P) {
    this.props = props;
    let tag = props.tag;
    if (tag instanceof Tag) tag = tag.tag;
    if (!tag) tag = (h.div().tag as unknown) as T;
    this.tag = tag;

    this.class = new Set(
      (this.tag.getAttribute("class") || "")
        .split(/\s+/)
        .filter(v => v && v !== "undefined")
    );
  }
  addClass(...s: string[]) {
    for (let c of s) {
      this.class.add(c.trim());
    }
    this.tag.setAttribute("class", [...this.class].join());
  }
  removeClass(...s: string[]) {
    for (let c of s) {
      this.class.delete(c.trim());
    }
    this.tag.setAttribute("class", [...this.class].join());
  }
  mount(): T {
    return this.tag;
  }
  remove() {
    this.tag.remove();
    this.unlisten(...this.listeners);
  }

  listen(...listeners: Array<h.Listener<keyof HTMLElementEventMap, T>>) {
    for (let l of listeners) {
      this.listeners.push(l);
      this.tag.addEventListener(l.n, l.c, l.o);
    }
  }
  unlisten(...listeners: Array<h.Listener<keyof HTMLElementEventMap, T>>) {
    this.listeners = this.listeners.filter(l => {
      if (
        listeners.find(
          r => r === l || (r.c === l.c && r.n === l.n && r.o === l.o)
        )
      ) {
        return false;
      }
      return true;
    });
    for (let l of listeners) {
      this.tag.removeEventListener(l.n, l.c, l.o);
    }
  }
  append<X extends HTMLElement>(...tags: Array<Node | string | Tag<X>>) {
    this.tag.append(
      ...tags.map(v => {
        if (v instanceof Tag) {
          //   this.childrens.push(v);
          return v.tag;
        }
        return v;
      })
    );
  }
}

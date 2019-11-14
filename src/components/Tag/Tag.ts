import * as h from "lib/html";

import * as s from "./Tag.scss";

export interface ITagProps<T extends HTMLElement> {
  tag?: T | Tag<T, any>;
  hide?: boolean;
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
        .split(" ")
        .filter(v => v && v !== "undefined")
    );
    if (this.props.hide) {
      this.addClass(s.hide);
    }
  }
  hide() {
    this.addClass(s.hide);
    return this;
  }
  show() {
    this.removeClass(s.hide);
  }
  isHidden() {
    return this.class.has(s.hide);
  }
  addClass(...s: string[]) {
    let changed = false;
    for (let c of s) {
      c = c.trim();
      if (this.class.has(c)) continue;
      changed = true;
      this.class.add(c);
    }
    if (!changed) return;
    this.tag.setAttribute("class", [...this.class].join(" "));
  }
  removeClass(...s: string[]) {
    let changed = false;
    for (let c of s) {
      c = c.trim();
      if (!this.class.has(c)) continue;
      changed = true;
      this.class.delete(c);
    }
    if (!changed) return;
    this.tag.setAttribute("class", [...this.class].join(" "));
  }
  mount(): T {
    return this.tag;
  }
  remove() {
    this.tag.remove();
    this.unlisten(...this.listeners);
  }

  listen(...listeners: Array<h.Listener<any, T>>) {
    for (let l of listeners) {
      this.listeners.push(l);
      this.tag.addEventListener(l.n, l.c, l.o);
    }
  }
  unlisten(...listeners: Array<h.Listener<keyof HTMLElementEventMap, T>>) {
    this.listeners = this.listeners.filter(l => {
      if (listeners.find(r => r === l || (r.c === l.c && r.n === l.n))) {
        return false;
      }
      return true;
    });
    for (let l of listeners) {
      this.tag.removeEventListener(l.n, l.c);
    }
  }
  append(...tags: Array<Node | string | Tag<any>>) {
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

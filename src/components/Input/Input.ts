import IMask from "imask";

import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Input.scss";

export interface IInputProps extends ITagProps<HTMLDivElement> {
  forInput?: Array<h.TagProp<HTMLInputElement>>;
  forWrap?: Array<h.TagProp<HTMLDivElement>>;
  forLabel?: Array<h.TagProp<HTMLLabelElement>>;
  iconLeft?: Tag<HTMLElement>;
  iconRight?: Tag<HTMLElement>;
  number?: boolean;
  value?: string | number | null;
  theme?: Exclude<keyof typeof s, "default">;
}

export class Input extends Tag<HTMLDivElement, IInputProps> {
  mask: IMask.InputMask<any> | null = null;
  private input = h.input(
    h.autocapitalizeOff,
    h.autocompleteOff,
    h.autocorrectOff,
    h.spellcheckOff,
    h.onFocus(() => this.addClass(s.focus)),
    h.onBlur(() => this.removeClass(s.focus)),
    this.props.forInput
  );
  _onChange: Array<(val: string | number | null) => void> = [];
  private label = h.label(this.props.forLabel);
  private error = h.label(h.className(s.error));

  constructor(props: IInputProps) {
    super({
      tag: h.div(h.className(s.root), props.forWrap),
      ...props
    });
    if (this.props.theme) this.addClass(s[this.props.theme]);
    this.addClass(s.root);
    this.append(this.label, this.error, this.input);
    if (props.iconRight) {
      this.append(props.iconRight);
      props.iconRight.addClass(s.iconRight);
      this.addClass(s.withIconRight);
    }
    if (props.iconLeft) {
      this.append(props.iconLeft);
      props.iconLeft.addClass(s.iconLeft);
      this.addClass(s.withIconLeft);
    }

    this.processValue();
    if (props.value) this.value = props.value;
    this.onChange(this.processValue);
    this.input.tag.id = this.input.tag.id || String(Math.random()).slice(2);
    this.label.tag.htmlFor = this.input.tag.id;
    this.error.tag.htmlFor = this.input.tag.id;
  }
  doMask = (mask: string) => {
    if (this.mask) this.mask.updateOptions({ mask });
    else {
      this.mask = IMask(this.input.tag, {
        mask
      });
      this.mask.on("accept", () => {
        this.processValue();
        if (this.isComplete()) for (let cb of this._onChange) cb(this.value);
      });
    }
  };
  getBoundingClientRect() {
    return this.input.tag.getBoundingClientRect();
  }
  scrollIntoView() {
    this.input.tag.scrollIntoView();
  }
  maskValue(value: string | number | null): string {
    value = value === null ? "" : String(value);
    return value;
  }

  setError(text: string) {
    this.error.tag.innerText = text;
    this.addClass(s.hasError);
  }
  clearError() {
    this.removeClass(s.hasError);
  }

  focus() {
    this.input.tag.focus();
  }

  unmaskValue(value: string): string | number | null {
    if (value === "") return null;
    if (this.props.number) {
      value = value.replace(/[^-\d]/g, "");
      if (value && Number.isFinite(Number(value))) return Number(value);
      return null;
    }
    return value;
  }
  isComplete() {
    // return this.input.tag.value === this.maskValue(this.value);
    return true;
  }
  get value(): string | number | null {
    return this.unmaskValue(
      this.maskValue(
        this.unmaskValue(this.mask ? this.mask.value : this.input.tag.value)
      )
    );
  }
  set value(value: string | number | null) {
    console.log(
      value,
      this.maskValue(value),
      this.unmaskValue(this.maskValue(value))
    );
    value = this.maskValue(this.unmaskValue(this.maskValue(value)));
    console.log(value);
    let wasValue = this.value;
    this.input.tag.value = value;
    this.processValue();
    if (
      (!wasValue && this.value !== null) ||
      (this.value === null && wasValue)
    ) {
      // disable label animation
      this.label.tag.remove();
      this.append(this.label.tag);
    }
  }
  processValue = () => {
    if (this.value !== null) this.addClass(s.withValue);
    else this.removeClass(s.withValue);
  };
  onChange(cb: (val: string | number | null) => void) {
    this._onChange.push(cb);
    this.input.listen(
      h.onInput<HTMLInputElement>(() => {
        if (this.isComplete()) cb(this.value);
      })
    );
  }
  iconRigth(icon: Tag<HTMLElement> | null) {
    let oldIcon = this.tag.querySelector(`.${s.iconRight}`);
    if (oldIcon) oldIcon.remove();
    if (icon) {
      icon.addClass(s.iconRight);
      this.append(icon);
      this.addClass(s.withIconRight);
    }
  }
  addForceFocus() {
    this.addClass(s.forceFocus);
  }
  removeForceFocus() {
    this.removeClass(s.forceFocus);
  }
}

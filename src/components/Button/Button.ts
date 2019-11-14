import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Button.scss";

interface ButtonProps extends ITagProps<HTMLButtonElement> {
  color?: Exclude<keyof typeof s, "default" | "root">;
  props?: Array<h.TagProp<HTMLButtonElement>>;
}

export class Button extends Tag<HTMLButtonElement, ButtonProps> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      tag: h.button(...(props.props || []))
    });
    this.addClass(s.root);
    if (props.color) this.addClass(s[props.color]);
  }
}

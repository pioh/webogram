import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Input.scss";

export interface IInputProps {
  forInput?: Array<h.TagProp<HTMLInputElement>>;
  forWrap?: Array<h.TagProp<HTMLDivElement>>;
  forLabel?: Array<h.TagProp<HTMLLabelElement>>;
}

export class Input extends Tag<HTMLDivElement> {
  input: Tag<HTMLInputElement>;
  label: Tag<HTMLLabelElement>;

  constructor(props: IInputProps) {
    let input = h.input(...(props.forInput || []));
    let label = h.label(...(props.forLabel || []));
    super({
      ...props,
      tag: h.div(input.tag, label.tag, ...(props.forWrap || [])).tag
    });
    this.input = input;
    this.label = label;

    this.addClass(s.input);
  }
}

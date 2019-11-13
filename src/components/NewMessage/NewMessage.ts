import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./NewMessage.scss";

interface INewMessageProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class NewMessage extends Tag<HTMLDivElement, INewMessageProps> {
  defer = () => {};

  constructor(props: INewMessageProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
  }
}

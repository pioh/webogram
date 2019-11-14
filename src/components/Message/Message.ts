import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Message.scss";

interface IMessageProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class Message extends Tag<HTMLDivElement, IMessageProps> {
  constructor(props: IMessageProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
}

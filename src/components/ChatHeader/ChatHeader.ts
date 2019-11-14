import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./ChatHeader.scss";

interface IChatHeaderProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class ChatHeader extends Tag<HTMLDivElement, IChatHeaderProps> {
  constructor(props: IChatHeaderProps) {
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

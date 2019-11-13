import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./NoChat.scss";

interface INoChatProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class NoChat extends Tag<HTMLDivElement, INoChatProps> {
  defer = () => {};

  constructor(props: INoChatProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
  }
}

import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./LeftPanel.scss";

interface ILeftPanelProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class LeftPanel extends Tag<HTMLDivElement, ILeftPanelProps> {
  defer = () => {};

  constructor(props: ILeftPanelProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
  }
}

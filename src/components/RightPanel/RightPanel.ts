import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./RightPanel.scss";

interface IRightPanelProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class RightPanel extends Tag<HTMLDivElement, IRightPanelProps> {
  defer = () => {};

  constructor(props: IRightPanelProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
  }
}

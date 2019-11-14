import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./LeftPanelItem.scss";

interface ILeftPanelItemProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class LeftPanelItem extends Tag<HTMLDivElement, ILeftPanelItemProps> {
  defer = () => {};

  constructor(props: ILeftPanelItemProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
  }
}

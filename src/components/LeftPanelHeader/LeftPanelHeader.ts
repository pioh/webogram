import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./LeftPanelHeader.scss";

interface ILeftPanelHeaderProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class LeftPanelHeader extends Tag<
  HTMLDivElement,
  ILeftPanelHeaderProps
> {
  constructor(props: ILeftPanelHeaderProps) {
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
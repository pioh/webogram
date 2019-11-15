import { ApiInvoker } from "api/ApiInvoker";
import { Input } from "components/Input/Input";
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
  menu = h.div(h.className(`i-menu ${s.menu}`)).wave("small");
  search = new Input({
    forWrap: [h.className(s.search)],
    forInput: [h.placeholder("Search")],
    iconLeft: h.i(h.className("i-search")),
    theme: "grey"
  });

  constructor(props: ILeftPanelHeaderProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.menu, this.search);
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
}

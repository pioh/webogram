import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Main.scss";
import { LeftPanel } from "components/LeftPanel/LeftPanel";
import { Chat } from "components/Chat/Chat";
import { RightPanel } from "components/RightPanel/RightPanel";
import { UserStore } from "components/User/UserStore";

interface IMainProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  userStore: UserStore;
}

export class Main extends Tag<HTMLDivElement, IMainProps> {
  defer = () => {};
  leftPanel = new LeftPanel({
    apiInoker: this.props.apiInoker
  });
  rightPanel = new RightPanel({
    apiInoker: this.props.apiInoker,
    hide: true
  });
  chat = new Chat({
    apiInoker: this.props.apiInoker
  });

  constructor(props: IMainProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.leftPanel, this.chat, this.rightPanel);
  }
}

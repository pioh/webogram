import { ApiInvoker } from "api/ApiInvoker";
import { Chat } from "components/Chat/Chat";
import { LeftPanel } from "components/LeftPanel/LeftPanel";
import { RightPanel } from "components/RightPanel/RightPanel";
import { ITagProps, Tag } from "components/Tag/Tag";
import { UserStore } from "components/User/UserStore";
import * as h from "lib/html";

import { ChatListStore } from "./ChatListStore";

import * as s from "./Main.scss";

interface IMainProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  userStore: UserStore;
}

export class Main extends Tag<HTMLDivElement, IMainProps> {
  defer: Array<() => void> = [];
  chatListStore = new ChatListStore({
    apiInvoker: this.props.apiInoker,
    userStore: this.props.userStore
  });
  leftPanel = new LeftPanel({
    apiInoker: this.props.apiInoker,
    chatListStore: this.chatListStore
  });
  rightPanel = new RightPanel({
    apiInoker: this.props.apiInoker,
    hide: true
  });
  chat = new Chat({
    apiInoker: this.props.apiInoker,
    chatListStore: this.chatListStore
  });

  constructor(props: IMainProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.defer.push(() => this.chatListStore.destroy());
    this.defer.push(() => this.leftPanel.destroy());
    this.defer.push(() => this.rightPanel.destroy());
    this.defer.push(() => this.chat.destroy());
    this.append(this.leftPanel, this.chat, this.rightPanel);
  }
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
}

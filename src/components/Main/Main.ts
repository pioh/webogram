import { ApiInvoker } from "api/ApiInvoker";
import { Chat } from "components/Chat/Chat";
import { LeftPanel } from "components/LeftPanel/LeftPanel";
import { NoChat } from "components/NoChat/NoChat";
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
  noChat: NoChat | null = null;
  chat: Chat | null = null;

  constructor(props: IMainProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.defer.push(() => this.chatListStore.destroy());
    this.defer.push(() => this.leftPanel.destroy());
    this.defer.push(() => this.rightPanel.destroy());
    this.defer.push(() => this.removeContent());
    this.append(this.leftPanel, this.rightPanel);
    this.onDialogChange();

    this.defer.push(this.chatListStore.onDialog(this.onDialogChange));
  }
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  removeContent() {
    if (this.noChat) {
      this.noChat.remove();
      this.noChat.destroy();
      this.noChat = null;
    }
    if (this.chat) {
      this.chat.remove();
      this.chat.destroy();
      this.chat = null;
    }
  }
  onDialogChange = () => {
    let dialog = this.chatListStore.activeDialog;
    if (!dialog) {
      if (!this.noChat) {
        this.removeContent();
        this.noChat = new NoChat({
          apiInoker: this.props.apiInoker
        });
        this.leftPanel.tag.after(this.noChat.mount());
      }
      return;
    }
    this.removeContent();
    let chatStore = this.chatListStore.getChatStore(dialog);

    this.chat = new Chat({
      apiInoker: this.props.apiInoker,
      chatListStore: this.chatListStore,
      chatStore
    });
    this.leftPanel.tag.after(this.chat.mount());
  };
}

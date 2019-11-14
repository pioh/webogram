import { ApiInvoker } from "api/ApiInvoker";
import { ChatHeader } from "components/ChatHeader/ChatHeader";
import { ChatListStore } from "components/Main/ChatListStore";
import { NewMessage } from "components/NewMessage/NewMessage";
import { NoChat } from "components/NoChat/NoChat";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Chat.scss";

interface IChatProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatListStore: ChatListStore;
}

export class Chat extends Tag<HTMLDivElement, IChatProps> {
  header = new ChatHeader({ apiInoker: this.props.apiInoker });
  newMessage = new NewMessage({ apiInoker: this.props.apiInoker });
  noChat = new NoChat({ apiInoker: this.props.apiInoker, hide: true });
  messagesContent = h.div(h.className(s.messagesContent));
  messages = h.div(h.className(s.messages), this.messagesContent);
  content = h.div(h.className(s.content), this.messages, this.newMessage);

  constructor(props: IChatProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.header, this.content, this.noChat);
    this.defer.push(() => this.header.destroy());
    this.defer.push(() => this.newMessage.destroy());
    this.defer.push(() => this.noChat.destroy());
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
}

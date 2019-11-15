import { ApiInvoker } from "api/ApiInvoker";
import { MessageServiceS } from "api/generator/ApiShema.gen";
import { ChatHeader } from "components/ChatHeader/ChatHeader";
import { ChatListStore } from "components/Main/ChatListStore";
import { Message } from "components/Message/Message";
import { NewMessage } from "components/NewMessage/NewMessage";
import { NoChat } from "components/NoChat/NoChat";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import { ChatStore } from "./ChatStore";

import * as s from "./Chat.scss";

interface IChatProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatListStore: ChatListStore;
  chatStore: ChatStore;
}

export class Chat extends Tag<HTMLDivElement, IChatProps> {
  header = new ChatHeader({
    apiInoker: this.props.apiInoker,
    chatStore: this.props.chatStore
  });
  newMessage = new NewMessage({ apiInoker: this.props.apiInoker });

  messagesContent = h.div(h.className(s.messagesContent));
  messages = h.div(h.className(s.messages), this.messagesContent);
  content = h.div(h.className(s.content), this.messages);
  get store() {
    return this.props.chatStore;
  }
  constructor(props: IChatProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.header, this.content, this.newMessage);
    this.defer.push(() => this.header.destroy());
    this.defer.push(() => this.newMessage.destroy());

    this.defer.push(this.props.chatStore.onUpdate(this.draw));
    this.draw();
    if (!this.props.chatStore.currentView.length) this.props.chatStore.load();
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  draw = () => {
    // this.content.tag.style.visibility = "hidden";
    this.messagesContent.tag.innerText = "";
    let view = this.store.currentView;
    for (let i = 0; i < view.length; i++) {
      let message = view[i];
      let prev = view[i - 1];
      let next = view[i + 1];
      let first = !prev || prev.has_out() !== message.has_out();
      let last = !next || next.has_out() !== message.has_out();
      let right = !message.has_out();
      this.messagesContent.append(
        new Message({
          message,
          chatStore: this.store,
          apiInoker: this.props.apiInoker,
          first,
          last,
          right
        })
      );
    }
    this.content.tag.scrollTop = Number.MAX_SAFE_INTEGER;
    this.content.tag.style.visibility = "hidden";
    requestAnimationFrame(() => {
      this.content.tag.style.visibility = "";
      this.content.tag.scrollTop = Number.MAX_SAFE_INTEGER;
    });
    // this.content.tag.scroll({
    //   top: this.content.tag.scrollHeight + this.props.chatStore.viewOffset
    // });
    // requestAnimationFrame(() => {
    //   this.content.tag.style.visibility = "";
    // });
  };
}

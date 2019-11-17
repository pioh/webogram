import { ApiInvoker } from "api/ApiInvoker";
import { ChannelS, UserS } from "api/generator/ApiShema.gen";
import { ChatHeader } from "components/ChatHeader/ChatHeader";
import { ChatListStore } from "components/Main/ChatListStore";
import { MediaStore } from "components/Message/MediaStore";
import { Message } from "components/Message/Message";
import { NewMessage } from "components/NewMessage/NewMessage";
import { ITagProps, Tag } from "components/Tag/Tag";
import { UserStore } from "components/User/UserStore";
import * as h from "lib/html";

import { ChatStore } from "./ChatStore";

import * as s from "./Chat.scss";

interface IChatProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatListStore: ChatListStore;
  chatStore: ChatStore;
  mediaStore: MediaStore;
  userStore: UserStore;
}

export class Chat extends Tag<HTMLDivElement, IChatProps> {
  header = new ChatHeader({
    apiInoker: this.props.apiInoker,
    chatStore: this.props.chatStore
  });
  newMessage = new NewMessage({ apiInoker: this.props.apiInoker });
  hr = h.div(h.className(s.hr));
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
    this.append(this.header, this.content, this.hr, this.newMessage);
    this.defer.push(() => this.header.destroy());
    this.defer.push(() => this.newMessage.destroy());

    this.defer.push(this.props.chatStore.onUpdate(this.draw));
    this.draw();
    if (!this.props.chatStore.currentView.length) this.props.chatStore.load();
    this.content.listen(h.onScroll(this.onScroll));
    this.onScroll();
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  onScroll = () => {
    // console.log(this.content.tag.scrollTop, this.content.tag.scrollHeight);
    if (
      this.content.tag.scrollTop + this.content.tag.clientHeight !==
      this.content.tag.scrollHeight
    ) {
      this.addClass(s.scroll);
    } else {
      this.removeClass(s.scroll);
    }
  };
  draw = () => {
    // this.content.tag.style.visibility = "hidden";
    this.messagesContent.tag.innerText = "";
    let isBroadcast =
      this.props.chatStore.peer instanceof ChannelS &&
      this.props.chatStore.peer.has_broadcast();
    let isUserChat = this.props.chatStore.peer instanceof UserS;

    if (
      isBroadcast &&
      this.props.chatStore.peer instanceof ChannelS &&
      this.props.chatStore.peer.has_creator()
    ) {
      this.newMessage.hide();
    } else this.newMessage.show();

    let view = this.store.currentView;
    for (let i = 0; i < view.length; i++) {
      let message = view[i];
      let prev = view[i - 1];
      let next = view[i + 1];
      let first = !prev || prev.get_from_id() !== message.get_from_id();
      let last = !next || next.get_from_id() !== message.get_from_id();
      let right = message.get_from_id() === this.props.userStore.user.get_id();
      let leftpad = !right && !isBroadcast && !isUserChat;

      let ava = leftpad && first;
      let m = new Message({
        message,
        chatStore: this.store,
        apiInoker: this.props.apiInoker,
        first,
        ava,
        leftpad,
        last,
        right,
        mediaStore: this.props.mediaStore,
        userStore: this.props.userStore
      });
      this.messagesContent.append(m);
      this.defer.push(() => m.destroy());
    }
    this.content.tag.scrollTop = this.content.tag.scrollHeight;
    this.content.tag.style.visibility = "hidden";
    requestAnimationFrame(() => {
      this.content.tag.style.visibility = "";
      this.content.tag.scrollTop = this.content.tag.scrollHeight;
    });
    // this.content.tag.scroll({
    //   top: this.content.tag.scrollHeight + this.props.chatStore.viewOffset
    // });
    // requestAnimationFrame(() => {
    //   this.content.tag.style.visibility = "";
    // });
  };
}

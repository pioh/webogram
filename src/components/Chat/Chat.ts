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
  rendered = new Map<number, Message>();
  firstRender = true;
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
    // this.draw();
    // if (!this.props.chatStore.currentView.length) this.props.chatStore.load();
    let list = h.onScroll(this.onScroll);
    this.content.listen(list);
    this.defer.push(() => this.content.unlisten(list));
    this.onScroll();
  }
  defer: Array<() => void> = [];
  destroy() {
    let todelete = this.props.chatStore.currentView.splice(20);
    for (let m of todelete) {
      this.props.chatStore.messages.delete(m.get_id());
    }
    let last = this.props.chatStore.currentView[
      this.props.chatStore.currentView.length - 1
    ];
    this.props.chatStore.offsetId = (last && last.get_id()) || 0;
    this.rendered.clear();
    this.messagesContent.tag.innerText = "";
    this.defer.map(v => v());
    this.defer = [];
  }
  onScroll = () => {
    if (this.lock) return;
    // console.log(this.content.tag.scrollTop, this.content.tag.scrollHeight);
    if (
      this.content.tag.scrollTop + this.content.tag.clientHeight !==
      this.content.tag.scrollHeight
    ) {
      this.addClass(s.scroll);
    } else {
      this.removeClass(s.scroll);
    }
    if (this.content.tag.scrollTop < this.content.tag.clientHeight) {
      this.props.chatStore.loadNext();
    }
  };
  lock = false;
  draw = () => {
    // this.content.tag.style.visibility = "hidden";
    // this.messagesContent.tag.innerText = "";
    this.lock = true;
    let isBroadcast =
      this.props.chatStore.peer instanceof ChannelS &&
      this.props.chatStore.peer.has_broadcast();
    let isUserChat = this.props.chatStore.peer instanceof UserS;
    let sbottom =
      this.content.tag.scrollHeight -
      (this.content.tag.scrollTop + this.content.tag.clientHeight);

    if (
      isBroadcast &&
      this.props.chatStore.peer instanceof ChannelS &&
      this.props.chatStore.peer.has_creator()
    ) {
      this.newMessage.hide();
    } else this.newMessage.show();

    let view = this.store.currentView;
    let found = new Set<number>();
    let rendered = 0;
    for (let i = 0; i < view.length; i++) {
      let message = view[i];
      found.add(message.get_id());
      if (this.rendered.has(message.get_id())) {
        continue;
      }
      rendered++;
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
      this.rendered.set(message.get_id(), m);
      this.messagesContent.append(m);
      this.defer.push(() => m.destroy());
    }
    let toRemove: number[] = [];
    for (let [id, m] of this.rendered) {
      if (!found.has(id)) toRemove.push(id);
    }
    for (let id of toRemove) {
      this.rendered.get(id)!.remove();
      this.rendered.delete(id);
    }
    let setScroll =
      this.content.tag.scrollHeight - sbottom - this.content.tag.clientHeight;
    if (this.firstRender && this.rendered.size) {
      setScroll = this.content.tag.scrollHeight;
    }
    this.content.tag.scrollTop = setScroll;
    if (this.firstRender && this.rendered.size)
      this.content.tag.style.visibility = "hidden";
    requestAnimationFrame(() => {
      if (this.firstRender && this.rendered.size) {
        this.content.tag.style.visibility = "";
        this.content.tag.scrollTop =
          this.content.tag.scrollHeight - this.content.tag.clientHeight;
        this.firstRender = false;
      } else {
        this.content.tag.scrollTop = setScroll;
      }

      if (
        rendered > 0 &&
        this.content.tag.scrollTop < this.content.tag.clientHeight
      ) {
        this.props.chatStore.loadNext();
      }
      setTimeout(() => {
        this.lock = false;
      }, 10);
    });
    // } else {
    //   this.content.tag.scrollHeight -
    //   - this.content.tag.scrollTop - this.content.tag.clientHeight;
    // }
    // requestAnimationFrame(() => {});
    // this.content.tag.scroll({
    //   top: this.content.tag.scrollHeight + this.props.chatStore.viewOffset
    // });
    // requestAnimationFrame(() => {
    //   this.content.tag.style.visibility = "";
    // });
  };
}

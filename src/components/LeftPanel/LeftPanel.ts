import { ApiInvoker } from "api/ApiInvoker";
import {
  UserStatusEmptyS,
  UserStatusLastMonthS,
  UserStatusLastWeekS,
  UserStatusOfflineS,
  UserStatusOnlineS,
  UserStatusRecentlyS
} from "api/generator/ApiShema.gen";
import { LeftPanelHeader } from "components/LeftPanelHeader/LeftPanelHeader";
import { ChatListStore } from "components/Main/ChatListStore";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./LeftPanel.scss";

interface ILeftPanelProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatListStore: ChatListStore;
}

export class LeftPanel extends Tag<HTMLDivElement, ILeftPanelProps> {
  header = new LeftPanelHeader({ apiInoker: this.props.apiInoker });
  chats = h.div(h.className(s.chats));
  spinner = h.spinner();

  constructor(props: ILeftPanelProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.header, this.chats, this.spinner);
    this.props.chatListStore.onUpdate(this.redraw);
    this.chats.listen(h.onScroll(this.onScroll));
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  active: Tag<any> | null = null;

  redraw = () => {
    let d = Date.now() - this.time;
    if (d < 300) {
      if (this.timeout) return;
      this.timeout = window.setTimeout(() => {
        this.timeout = 0;
        this.redraw();
      }, 300);
    }
    this.time = Date.now();
    // this.chats.tag.innerText = "";
    let chats = this.chats.tag.querySelectorAll<HTMLDivElement>(`.${s.item}`);
    let map = new Map<string, HTMLDivElement>();
    chats.forEach(el => {
      map.set(el.id, el);
    });
    if (this.props.chatListStore.order.length) this.spinner.hide();
    let needRedraw = new Set([...this.props.chatListStore.needRedraw]);
    this.props.chatListStore.needRedraw = [];
    let j = 0;
    let prev: HTMLDivElement | null = null;
    console.log("redraw");
    for (
      let i = 0;
      i < this.props.chatListStore.order.length &&
      i < this.props.chatListStore.limit;
      i++, j++
    ) {
      let id = this.props.chatListStore.order[i];
      let sid = `chat:${id}`;
      let found = map.get(sid);
      if (!found) {
        let tag = this.drawDialog(id, sid);
        if (!tag) {
          j--;
          continue;
        }
        found = tag.tag;
      } else {
        if (needRedraw.has(id)) {
          found.remove();
          let tag = this.drawDialog(id, sid);
          if (!tag) {
            j--;
            continue;
          }
          found = tag.tag;
          // this.updateDialog(found, id, sid);
        }
      }
      map.delete(sid);
      // let dialog = this.props.chatListStore.
      let ok = false;
      if (chats[j]) {
        if (chats[j].id !== sid || needRedraw.has(id)) {
          chats[j].remove();
        } else {
          ok = true;
        }
      }
      if (!ok) {
        if (prev) prev.after(found);
        else this.chats.tag.prepend(found);
      }

      prev = found;
    }
    for (let [id, t] of map) {
      t.remove();
      map.delete(id);
    }
  };
  time = 0;
  timeout = 0;
  drawDialog(id: number, sid: string) {
    let dialog = this.props.chatListStore.dialogs.get(id);
    if (!dialog) return;
    let peer =
      this.props.chatListStore.chats.get(id) ||
      this.props.chatListStore.users.get(id);
    if (!peer) return null;

    let chat = this.props.chatListStore.getChatStore(peer);
    let ipeer = chat.inputPeer(peer);
    if (!ipeer) return null;

    let name = chat.name(peer);
    let title = h.div(h.className(s.title), name);
    let messageText = h.div(h.className(s.message));
    let messageTime = h.div(h.className(s.time));
    let unread = h.div(h.className(s.unread)).hide();
    let photoDiv = h.div(h.className(s.photo));
    let div = h
      .div(
        h.id(sid),
        h.className(s.item),
        photoDiv,
        h.div(
          h.className(s.col),
          h.div(h.className(s.half), title, messageTime),
          h.div(h.className(s.half), messageText, unread)
        ),
        h.onClick(() => {
          if (this.active) this.active.removeClass(s.active);
          this.active = div.addClass(s.active);
          this.props.chatListStore.openDialog(id);
        })
      )
      .wave();

    let photoText = chat.photoText(name);
    photoDiv.tag.style.backgroundColor = chat.photoColor(photoText);

    let message = this.props.chatListStore.messages.get(
      dialog.get_top_message()
    );
    if (message) {
      messageText.append(message.get_message());
      messageTime.append(chat.messageDate(message));
    }
    let photo = chat.photo(peer);
    if (photo) {
      // requestAnimationFrame(() => {
      // this.props.chatListStore.props.
      chat.loadPhoto(
        photoDiv.tag,
        photo!.get_photo_small(),
        photo!.get_dc_id(),
        peer!
      );
      if (photoDiv.tag.innerHTML === "") {
        photoDiv.append(photoText);
      }
      // });
    } else photoDiv.append(photoText);

    return div;
  }
  get limit() {
    let h = Math.max(this.chats.tag.clientHeight * 3, window.innerHeight * 2);
    return Math.ceil((this.chats.tag.scrollTop + h) / 72);
  }
  onScroll = () => {
    this.props.chatListStore.limit = this.limit;
    // let c = Math.min(
    //   this.props.chatListStore.order.length,
    //   this.props.chatListStore.limit
    // );
    // if (this.chats.tag.children.length < c) {
    this.redraw();
    // }
    if (this.props.chatListStore.order.length >= this.props.chatListStore.max)
      return;
    this.props.chatListStore.load();
  };

  updateDialog(div: HTMLDivElement, id: number, sid: string) {}

  statusToText(
    status:
      | UserStatusEmptyS
      | UserStatusOnlineS
      | UserStatusOfflineS
      | UserStatusRecentlyS
      | UserStatusLastWeekS
      | UserStatusLastMonthS
  ) {
    if (status instanceof UserStatusEmptyS) return h.span();
    if (status instanceof UserStatusOnlineS)
      return h.span(h.className(s.online), "online");
    return h.span();
  }
}

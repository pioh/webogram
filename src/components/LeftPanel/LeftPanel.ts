import { ApiInvoker } from "api/ApiInvoker";
import {
  DialogFolderS,
  DialogS,
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

  constructor(props: ILeftPanelProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.header, this.chats);
    this.props.chatListStore.onUpdate(this.redraw);
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  active: Tag<any> | null = null;

  redraw = () => {
    this.chats.tag.innerText = "";
    for (let dialog of this.props.chatListStore.dialogs) {
      let draw = this.drawDialog(dialog);
      if (draw) this.chats.append(draw);
    }
  };
  drawDialog(dialog: DialogS | DialogFolderS) {
    let peer = dialog.get_peer();
    let chat = this.props.chatListStore.getChatStore(dialog);
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
          this.props.chatListStore.openDialog(dialog);
        })
      )
      .wave();
    let photoText = chat.photoText(name);
    photoDiv.append(photoText);
    photoDiv.tag.style.backgroundColor = chat.photoColor(photoText);

    let message = this.props.chatListStore.messages.get(
      dialog.get_top_message()
    );
    if (message) {
      messageText.append(message.get_message());
      messageTime.append(chat.messageDate(message));
    }
    let photo = chat.photo(peer);
    if (photo)
      chat.loadPhoto(
        photoDiv.tag,
        photo.get_photo_small(),
        photo.get_dc_id(),
        peer
      );

    return div;
  }

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

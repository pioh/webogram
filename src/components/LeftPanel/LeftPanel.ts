import { substr } from "runes";

import { ApiInvoker } from "api/ApiInvoker";
import {
  CallUploadGetCdnFileM,
  CallUploadGetFileM,
  ChannelS,
  ChatEmptyS,
  ChatForbiddenS,
  ChatPhotoEmptyS,
  ChatPhotoS,
  ChatS,
  DialogFolderS,
  DialogS,
  FileLocationT,
  InputFileLocationS,
  InputPeerChannelS,
  InputPeerChatS,
  InputPeerPhotoFileLocationS,
  InputPeerT,
  InputPeerUserS,
  MessageS,
  PeerChannelS,
  PeerChatS,
  PeerT,
  PeerUserS,
  UploadCdnFileReuploadNeededS,
  UploadFileCdnRedirectS,
  UploadGetCdnFileM,
  UploadGetFileM,
  UserEmptyS,
  UserProfilePhotoS,
  UserProfilePhotoT,
  UserStatusEmptyS,
  UserStatusLastMonthS,
  UserStatusLastWeekS,
  UserStatusOfflineS,
  UserStatusOnlineS,
  UserStatusRecentlyS
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";
import { RpcError } from "api/schema";
import { ChatListStore } from "components/Main/ChatListStore";
import { ITagProps, Tag } from "components/Tag/Tag";
import { getBgColor } from "lib/colors";
import * as h from "lib/html";
import { ILong } from "lib/ILong";

import * as s from "./LeftPanel.scss";

interface ILeftPanelProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatListStore: ChatListStore;
}

export class LeftPanel extends Tag<HTMLDivElement, ILeftPanelProps> {
  constructor(props: ILeftPanelProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.props.chatListStore.onUpdate(this.redraw);
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }

  redraw = () => {
    this.tag.innerText = "";
    for (let dialog of this.props.chatListStore.dialogs) {
      let draw = this.drawDialog(dialog);
      if (draw) this.append(draw);
    }
  };
  drawDialog(d: DialogS | DialogFolderS) {
    let peer = d.get_peer();
    let ipeer:
      | InputPeerChatS
      | InputPeerUserS
      | InputPeerChannelS
      | null = null;
    let title = h.div(h.className(s.title));
    let messageText = h.div(h.className(s.message));
    let messageTime = h.div(h.className(s.time));
    let unread = h.div(h.className(s.unread)).hide();
    let photoDiv = h.div(h.className(s.photo));
    let div = h.div(
      h.className(s.item),
      photoDiv,
      h.div(
        h.className(s.col),
        h.div(h.className(s.half), title, messageTime),
        h.div(h.className(s.half), messageText, unread)
      )
    );
    let photo: ChatPhotoS | UserProfilePhotoS | null = null;
    let titleText = "";
    if (peer instanceof PeerUserS) {
      let user = this.props.chatListStore.users.get(peer.get_user_id());
      if (!user || user instanceof UserEmptyS) return null;
      titleText = [user.get_first_name(), user.get_last_name()]
        .filter(v => v)
        .join(" ");

      let _photo = user.get_photo();
      if (_photo instanceof UserProfilePhotoS) photo = _photo;
      ipeer = new InputPeerUserS()
        .set_access_hash(user.get_access_hash())
        .set_user_id(user.get_id());
    } else if (peer instanceof PeerChatS || peer instanceof PeerChannelS) {
      let chat = this.props.chatListStore.chats.get(
        peer instanceof PeerChatS ? peer.get_chat_id() : peer.get_channel_id()
      );
      if (!chat || chat instanceof ChatEmptyS) return null;
      if (peer instanceof PeerChatS) {
        ipeer = new InputPeerChatS().set_chat_id(peer.get_chat_id());
      } else if (chat instanceof ChannelS) {
        ipeer = new InputPeerChannelS()
          .set_channel_id(chat.get_id())
          .set_access_hash(chat.get_access_hash());
      }
      titleText = chat.get_title();
      if (chat instanceof ChatS) {
        let _photo = chat.get_photo();
        if (_photo instanceof ChatPhotoS) photo = _photo;
      } else if (chat instanceof ChannelS) {
        let _photo = chat.get_photo();
        if (_photo instanceof ChatPhotoS) photo = _photo;
      }
    } else return null;

    title.append(titleText);
    let photoText = titleText
      .toLocaleUpperCase()
      .split(/[\s-=_+@#$%\^&*(!"№;%:?*\\\/|,.><]+/)
      .map(v => substr(v, 0, 1))
      .filter(v => v)
      .slice(0, 2)
      .join("");
    photoDiv.append(photoText);
    photoDiv.tag.style.backgroundColor = getBgColor(photoText);

    let message = this.props.chatListStore.messages.get(d.get_top_message());
    if (message instanceof MessageS) {
      messageText.append(message.get_message());
      if (message.get_date()) {
        let d = new Date(message.get_date() * 1000);
        let h = String(d.getHours());
        let m = String(d.getMinutes());
        h = h[1] ? h : `0${h}`;
        m = m[1] ? m : `0${m}`;
        messageTime.append(`${h}:${m}`);
      }
    }

    if (photo && ipeer) {
      this.loadPhoto(
        photoDiv.tag,
        photo.get_photo_small(),
        photo.get_dc_id(),
        ipeer
      );
    }
    return div;
    //     break;
    //   case PeerChatS:
    //     break;
    //   case PeerChannelS:
    //     break;
    //   default:
    //     return null;
    // }
  }
  async loadPhoto(
    tag: HTMLElement,
    location: FileLocationT,
    dc: number,
    peer: InputPeerChatS | InputPeerUserS | InputPeerChannelS
  ) {
    let photo = await CallUploadGetFileM(
      this.props.apiInoker.connection(dc),
      new UploadGetFileM()
        .set_location(
          new InputPeerPhotoFileLocationS()
            .set_peer(peer)
            .set_local_id(location.get_local_id())
            .set_volume_id(location.get_volume_id())
        )
        .set_limit(1024 * 1024)
    );
    if (photo instanceof RpcErrorS) return;
    if (photo instanceof UploadFileCdnRedirectS) {
      await this.loadPhotoCDN(
        tag,
        photo.get_dc_id(),
        photo.get_file_token(),
        location,
        peer
      );
      return;
    }
    // let type = photo.get_type()
    this.handlePhoto(tag, photo.get_bytes());
  }
  async loadPhotoCDN(
    tag: HTMLElement,
    dc: number,
    fileToken: Uint8Array,
    location: FileLocationT,
    peer: InputPeerChatS | InputPeerUserS | InputPeerChannelS
  ) {
    let photo = await CallUploadGetCdnFileM(
      this.props.apiInoker.connection(dc),
      new UploadGetCdnFileM().set_file_token(fileToken).set_limit(1024 * 1024)
    );
    if (photo instanceof RpcErrorS) return;
    if (photo instanceof UploadCdnFileReuploadNeededS) {
      await this.loadPhoto(tag, location, dc, peer);
      return;
    }
    this.handlePhoto(tag, photo.get_bytes());
  }
  async handlePhoto(tag: HTMLElement, bytes: Uint8Array) {
    const blob = new Blob([bytes]);
    const url = window.URL.createObjectURL(blob);
    tag.innerText = "";
    tag.append(h.img(h.src(url)).tag);
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

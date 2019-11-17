import { substr } from "runes";

import { ApiInvoker } from "api/ApiInvoker";
import {
  CallMessagesGetHistoryM,
  CallUploadGetCdnFileM,
  CallUploadGetFileM,
  ChannelS,
  ChatPhotoS,
  ChatS,
  FileLocationT,
  InputPeerChannelS,
  InputPeerChatS,
  InputPeerPhotoFileLocationS,
  InputPeerUserS,
  MessageS,
  MessagesChannelMessagesS,
  MessagesGetHistoryM,
  MessagesMessagesNotModifiedS,
  MessagesMessagesS,
  MessagesMessagesSliceS,
  PeerChannelS,
  PeerChatS,
  PeerT,
  PeerUserS,
  UploadCdnFileReuploadNeededS,
  UploadFileCdnRedirectS,
  UploadGetCdnFileM,
  UploadGetFileM,
  UserProfilePhotoS,
  UserS,
  UserStatusLastMonthS,
  UserStatusLastWeekS,
  UserStatusOfflineS,
  UserStatusOnlineS,
  UserStatusRecentlyS
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";
import { ChatListStore } from "components/Main/ChatListStore";
import { UserStore } from "components/User/UserStore";
import { findError } from "const/errors";
import { getBgColor } from "lib/colors";
import * as h from "lib/html";

interface IChatStoreProps {
  apiInvoker: ApiInvoker;
  userStore: UserStore;
  peer: UserS | ChannelS | ChatS;
  chatListStore: ChatListStore;
}

export const photoCache = new Map<string, Uint8Array>();

export class ChatStore {
  props: IChatStoreProps;
  defer: Array<() => void> = [];

  error = "";
  messages: Map<number, MessageS> = new Map();
  users: Map<number, UserS> = new Map();
  chats: Map<number, ChatS | ChannelS> = new Map();

  currentView: MessageS[] = [];
  viewOffset = 0;

  loading = false;

  limit = 20;
  reqId = 0;
  offsetId = 0;

  private _onError: Set<(err: string) => void> = new Set();
  private _onUpdate: Set<() => void> = new Set();

  constructor(props: IChatStoreProps) {
    this.props = props;
  }
  inited = false;
  init() {
    if (this.inited) return;
    this.inited = true;
    this.defer.push(
      this.props.userStore.onUpdate(async () => {
        this.offsetId = 0;
        this.currentView = [];
        this.loading = true;
        try {
          await this.load();
        } finally {
          this.loading = false;
        }
      })
    );
  }

  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }

  get peer() {
    return this.props.peer;
  }
  type(peer: PeerT) {
    if (peer instanceof PeerUserS) return "user";
    if (peer instanceof ChatS) return "chat";
    if (peer instanceof ChannelS) return "channel";
    return "";
  }
  findUser(id: number) {
    return this.users.get(id) || this.props.chatListStore.users.get(id) || null;
  }
  findMessage(id: number) {
    return (
      this.messages.get(id) || this.props.chatListStore.messages.get(id) || null
    );
  }
  findChat(id: number) {
    return this.chats.get(id) || this.props.chatListStore.chats.get(id) || null;
  }
  user(peer: PeerT | ChannelS | UserS | ChatS): UserS | null {
    if (peer instanceof UserS) return peer;
    if (peer instanceof PeerUserS) {
      let user = this.findUser(peer.get_user_id()) || null;
      if (user && user instanceof UserS) return user;
      return null;
    }
    return null;
  }
  chat(peer: PeerT | ChannelS | UserS | ChatS): ChatS | null {
    if (peer instanceof ChatS) return peer;
    if (peer instanceof PeerChatS) {
      let chat = this.findChat(peer.get_chat_id()) || null;
      if (chat && chat instanceof ChatS) return chat;
      return null;
    }
    return null;
  }
  channel(peer: PeerT | ChannelS | UserS | ChatS): ChannelS | null {
    if (peer instanceof ChannelS) return peer;
    if (peer instanceof PeerChannelS) {
      let channel = this.findChat(peer.get_channel_id()) || null;
      if (channel && channel instanceof ChannelS) return channel;
      return null;
    }
    return null;
  }
  status(peer: PeerT | ChannelS | UserS | ChatS) {
    let user = this.user(peer);
    if (user) {
      let status = user.get_status();
      if (status instanceof UserStatusOnlineS) return "online";
      if (status instanceof UserStatusOfflineS) {
        let time = this.timeToText(status.get_was_online());
        if (time) return `last seen ${time}`;
        return "";
      }
      if (status instanceof UserStatusRecentlyS) return "last seen just now";
      if (status instanceof UserStatusLastWeekS) return "last seen last week";
      if (status instanceof UserStatusLastMonthS) return "last seen last month";
      return "";
    }
    let chat = this.chat(peer) || this.channel(peer);
    let count = chat && chat.get_participants_count();
    if (chat && count) {
      let text = this.prettyInt(count);
      text +=
        chat instanceof ChatS ||
        (chat instanceof ChannelS && !chat.has_broadcast())
          ? "member"
          : "subscriber";
      text += count !== 1 ? "s" : "";
      return text;
    }
    return "";
  }
  prettyInt(int: number) {
    let x = int % 1000;
    int = Math.floor(int / 1000);
    let y = int % 1000;
    int = Math.floor(int / 1000);
    let z = int % 1000;
    let a = [z, y, x];
    a = a.slice(a.findIndex(v => v !== 0));
    return a.join(",");
  }
  photo(peer: PeerT | ChannelS | UserS | ChatS) {
    let someone = this.user(peer) || this.channel(peer) || this.chat(peer);
    if (!someone) return;
    let photo = someone.get_photo();
    if (photo instanceof UserProfilePhotoS || photo instanceof ChatPhotoS) {
      return photo;
    }
    return null;
  }
  inputPeer(
    peer: PeerT | UserS | ChatS | ChannelS
  ): InputPeerChatS | InputPeerUserS | InputPeerChannelS | null {
    let user: UserS | null = null;
    if (peer instanceof UserS) user = peer;
    else if (peer instanceof PeerUserS) user = this.user(peer);

    if (user) {
      return new InputPeerUserS()
        .set_access_hash(user.get_access_hash())
        .set_user_id(user.get_id());
    }
    let chat: ChatS | null;
    if (peer instanceof ChatS) chat = peer;
    else chat = this.chat(peer as PeerT);
    if (chat) return new InputPeerChatS().set_chat_id(chat.get_id());

    let channel: ChannelS | null = null;
    if (peer instanceof ChannelS) channel = peer;
    else channel = this.channel(peer as PeerT);
    if (channel)
      return new InputPeerChannelS()
        .set_access_hash(channel.get_access_hash())
        .set_channel_id(channel.get_id());
    return null;
  }

  name(peer: PeerT | UserS | ChatS | ChannelS) {
    let user: UserS | null = peer as UserS;
    if (!(user instanceof UserS)) {
      user = this.user(peer as PeerT);
    }
    if (user) {
      return [user.get_first_name(), user.get_last_name()]
        .filter(v => v)
        .join(" ");
    }
    let chat =
      this.chat(peer as PeerT) ||
      this.channel(peer as PeerT) ||
      (peer as ChatS | ChannelS);
    if (chat) return chat.get_title();
    return "";
  }

  load = async () => {
    let reqId = ++this.reqId;
    let inputPeer = this.inputPeer(this.peer);
    if (!inputPeer) return;

    let res = await CallMessagesGetHistoryM(
      this.props.apiInvoker,
      new MessagesGetHistoryM()
        .set_peer(inputPeer)
        .set_offset_id(this.offsetId)
        .set_limit(this.limit)
    );
    if (this.reqId !== reqId) return;
    if (res instanceof RpcErrorS)
      return this.handleError(res.get_error_message());
    let wasError = this.error;
    this.error = "";
    if (!(res instanceof MessagesMessagesNotModifiedS)) {
      this.handleMessages(res);
      this.sendUpdate();
    } else if (wasError) this.sendUpdate();
  };
  loadNext = async () => {
    if (this.loading) return;
    this.loading = true;
    try {
      await this.load();
    } finally {
      this.loading = false;
    }
  };
  sendUpdate() {
    for (let cb of this._onUpdate) cb();
  }
  handleMessages(
    messages:
      | MessagesMessagesS
      | MessagesMessagesSliceS
      | MessagesChannelMessagesS
  ) {
    // this.currentView = [];
    for (let m of messages.get_messages().get_values()) {
      if (m instanceof MessageS) {
        this.messages.set(m.get_id(), m);
        this.currentView.push(m);
        this.offsetId = m.get_id();
      }
    }
    for (let m of messages.get_chats().get_values()) {
      if (m instanceof ChatS || m instanceof ChannelS)
        this.chats.set(m.get_id(), m);
    }
    for (let m of messages.get_users().get_values()) {
      if (m instanceof UserS) this.users.set(m.get_id(), m);
    }
    for (let foo of this._onUpdate) foo();
  }

  handleError(err: string) {
    this.error = findError(err).text;
    if (!this.error) return;
    for (let foo of this._onError) foo(this.error);
  }

  onError(foo: (err: string) => void): () => void {
    this._onError.add(foo);
    if (this.error) foo(this.error);
    return () => this._onError.delete(foo);
  }
  onUpdate(foo: () => void): () => void {
    this._onUpdate.add(foo);
    if (this.currentView.length) foo();
    return () => this._onUpdate.delete(foo);
  }
  photoText(name: string) {
    return name
      .toLocaleUpperCase()
      .split(/[\s-=_+@#$%\^&*(!"№;%:?*\\\/|,.><]+/)
      .map(v => substr(v, 0, 1))
      .filter(v => v)
      .slice(0, 2)
      .join("");
  }
  photoKey(peer: PeerT) {
    let photo = this.photo(peer);
    if (!photo) return "";
    let location = photo.get_photo_small();
    return `${location.get_local_id()}:${location.get_volume_id()}`;
  }
  messageDate(message: MessageS) {
    return this.timeToText(message.get_date());
  }
  timeToText(time: number) {
    if (!time) return "";
    let d = new Date(time * 1000);
    let h = String(d.getHours());
    let m = String(d.getMinutes());
    h = h[1] ? h : `0${h}`;
    m = m[1] ? m : `0${m}`;
    return `${h}:${m}`;
  }
  photoColor(photoText: string) {
    return getBgColor(photoText);
  }

  async loadPhoto(
    tag: HTMLElement,
    location: FileLocationT,
    dc: number,
    peer: PeerT | ChannelS | UserS | ChatS
  ) {
    let ipeer = this.inputPeer(peer);
    if (!ipeer) return;
    let key = `${location.get_local_id()}:${location.get_volume_id()}`;
    if (photoCache.has(key)) {
      this.handlePhoto(tag, photoCache.get(key)!);
      return;
    }
    let photo = await CallUploadGetFileM(
      this.props.apiInvoker.connection(dc),
      new UploadGetFileM()
        .set_location(
          new InputPeerPhotoFileLocationS()
            .set_peer(ipeer)
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
    photoCache.set(key, photo.get_bytes());
    this.handlePhoto(tag, photo.get_bytes());
  }
  async loadPhotoCDN(
    tag: HTMLElement,
    dc: number,
    fileToken: Uint8Array,
    location: FileLocationT,
    peer: PeerT | ChannelS | UserS | ChatS
  ) {
    let key = `${location.get_local_id()}:${location.get_volume_id()}`;
    let photo = await CallUploadGetCdnFileM(
      this.props.apiInvoker.connection(dc),
      new UploadGetCdnFileM().set_file_token(fileToken).set_limit(1024 * 1024)
    );
    if (photo instanceof RpcErrorS) return;
    if (photo instanceof UploadCdnFileReuploadNeededS) {
      await this.loadPhoto(tag, location, dc, peer);
      return;
    }
    photoCache.set(key, photo.get_bytes());
    this.handlePhoto(tag, photo.get_bytes());
  }
  async handlePhoto(tag: HTMLElement, bytes: Uint8Array) {
    const blob = new Blob([bytes]);
    const url = window.URL.createObjectURL(blob);
    tag.innerText = "";
    tag.append(h.img(h.src(url)).tag);
  }
}

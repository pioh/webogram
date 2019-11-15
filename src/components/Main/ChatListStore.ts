import { ApiInvoker } from "api/ApiInvoker";
import {
  CallMessagesGetDialogsM,
  ChannelS,
  ChatS,
  ChatT,
  DialogFolderS,
  DialogS,
  DialogT,
  InputPeerEmptyS,
  InputPeerT,
  MessageS,
  MessagesDialogsNotModifiedS,
  MessagesDialogsS,
  MessagesDialogsSliceS,
  MessagesGetDialogsM,
  MessageT,
  PeerChannelS,
  PeerChatS,
  PeerUserS,
  UserS,
  UserT
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";
import { RpcError } from "api/schema";
import { ChatStore } from "components/Chat/ChatStore";
import { UserStore } from "components/User/UserStore";
import { findError } from "const/errors";

interface IChatListStorePRops {
  apiInvoker: ApiInvoker;
  userStore: UserStore;
}

export class ChatListStore {
  props: IChatListStorePRops;
  defer: Array<() => void> = [];

  error = "";
  dialogs: Array<DialogS | DialogFolderS> = [];
  pinned: Array<DialogS | DialogFolderS> = [];
  messages: Map<number, MessageS> = new Map();
  chats: Map<number, ChatS | ChannelS> = new Map();
  users: Map<number, UserS> = new Map();
  loading = true;

  chatStores: Map<number, ChatStore> = new Map();

  activeDialog: DialogS | DialogFolderS | null = null;

  limit = 20;
  reqId = 0;
  offsetId = 0;

  private _onError: Set<(err: string) => void> = new Set();
  private _onUpdate: Set<() => void> = new Set();
  private _onDialog: Set<() => void> = new Set();

  constructor(props: IChatListStorePRops) {
    this.props = props;
    this.defer.push(this.props.userStore.onUpdate(this.load));
  }

  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  getChatStore(dialog: DialogS | DialogFolderS): ChatStore {
    let id = this.peerToId(dialog.get_peer());
    let chat = this.chatStores.get(id);
    if (!chat) {
      chat = new ChatStore({
        chatListStore: this,
        apiInvoker: this.props.apiInvoker,
        dialog,
        userStore: this.props.userStore
      });
      this.chatStores.set(id, chat);
    }
    return chat;
  }
  load = async () => {
    let reqId = ++this.reqId;
    let res = await CallMessagesGetDialogsM(
      this.props.apiInvoker,
      new MessagesGetDialogsM()
        .set_offset_id(this.offsetId)
        .set_limit(this.limit)
        .set_offset_peer(new InputPeerEmptyS())
      // .set_exclude_pinned(true)
    );
    this.loading = false;
    if (this.reqId !== reqId) return;
    if (res instanceof RpcErrorS)
      return this.handleError(res.get_error_message());
    let wasError = this.error;
    this.error = "";
    if (!(res instanceof MessagesDialogsNotModifiedS)) {
      this.handleDialogs(res);
      this.sendUpdate();
    } else if (wasError) this.sendUpdate();
  };
  sendUpdate() {
    for (let cb of this._onUpdate) cb();
  }
  handleDialogs(mdialogs: MessagesDialogsS | MessagesDialogsSliceS) {
    let dialogs = mdialogs.get_dialogs().get_values();
    this.dialogs = [];

    for (let d of dialogs) {
      // if (d.has_pinned()) continue;
      this.dialogs.push(d);
    }
    this.offsetId =
      this.dialogs.length > 0
        ? this.peerToId(this.dialogs[this.dialogs.length - 1].get_peer())
        : 0;
    for (let m of mdialogs.get_chats().get_values()) {
      if (m instanceof ChatS || m instanceof ChannelS)
        this.chats.set(m.get_id(), m);
    }
    for (let m of mdialogs.get_messages().get_values()) {
      if (m instanceof MessageS) this.messages.set(m.get_id(), m);
    }
    for (let m of mdialogs.get_users().get_values()) {
      if (m instanceof UserS) this.users.set(m.get_id(), m);
    }
  }
  peerToId(p: PeerUserS | PeerChatS | PeerChannelS) {
    if (p instanceof PeerUserS) {
      return p.get_user_id();
    } else if (p instanceof PeerChatS) {
      return p.get_chat_id();
    } else if (p instanceof PeerChannelS) {
      return p.get_channel_id();
    }
    return 0;
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
    if (this.dialogs.length) foo();
    return () => this._onUpdate.delete(foo);
  }

  onDialog(foo: () => void): () => void {
    this._onDialog.add(foo);
    if (this.activeDialog) foo();
    return () => this._onDialog.delete(foo);
  }
  openDialog(d: DialogS | DialogFolderS) {
    if (this.activeDialog === d) return;
    this.activeDialog = d;
    this._onDialog.forEach(foo => foo());
  }
}

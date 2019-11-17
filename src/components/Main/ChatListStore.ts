import { ApiInvoker } from "api/ApiInvoker";
import {
  CallMessagesGetDialogsM,
  ChannelS,
  ChatS,
  DialogFolderS,
  DialogS,
  InputPeerEmptyS,
  MessageS,
  MessagesDialogsNotModifiedS,
  MessagesDialogsS,
  MessagesDialogsSliceS,
  MessagesGetDialogsM,
  MessagesMessagesS,
  MessagesMessagesSliceS,
  PeerChannelS,
  PeerChatS,
  PeerT,
  PeerUserS,
  UpdateNewMessageS,
  UpdateShortChatMessageS,
  UpdateShortMessageS,
  UpdateShortS,
  UpdatesS,
  UpdateT,
  UserS
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";
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
  dialogs: Map<number, DialogS | DialogFolderS> = new Map();
  // pinned: Array<DialogS | DialogFolderS> = [];
  messages: Map<number, MessageS> = new Map();
  chats: Map<number, ChatS | ChannelS> = new Map();
  users: Map<number, UserS> = new Map();
  loading = true;

  // messageIDs: number[] = [];
  order: number[] = [];

  chatStores: Map<number, ChatStore> = new Map();

  activeDialog: number = 0;

  limit = 20;
  reqId = 0;
  offsetId = 0;

  private _onError: Set<(err: string) => void> = new Set();
  private _onUpdate: Set<() => void> = new Set();
  private _onDialog: Set<() => void> = new Set();

  constructor(props: IChatListStorePRops) {
    this.props = props;
    this.defer.push(this.props.userStore.onUpdate(this.load));
    this.defer.push(
      this.props.apiInvoker.onMessage(
        new MessagesMessagesSliceS(),
        this.onMessages
      )
    );
    this.defer.push(
      this.props.apiInvoker.onMessage(new MessagesMessagesS(), this.onMessages)
    );
    this.defer.push(
      this.props.apiInvoker.onMessage(new UpdatesS(), this.onUpdatesS)
    );
    this.defer.push(
      this.props.apiInvoker.onMessage(new UpdateShortS(), u =>
        this.onUpdateT(u.get_update())
      )
    );
    this.defer.push(
      this.props.apiInvoker.onMessage(new UpdateShortChatMessageS(), u =>
        this.onUpdateShortChatMessageS(u)
      )
    );

    this.defer.push(
      this.props.apiInvoker.onMessage(
        new UpdateShortMessageS(),
        this.onUpdateShortMessage
      )
    );
  }

  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  getChatStore(peer: UserS | ChannelS | ChatS): ChatStore {
    // let id = this.peerToId(dialog.get_peer());
    let chat = this.chatStores.get(peer.get_id());
    if (!chat) {
      chat = new ChatStore({
        chatListStore: this,
        apiInvoker: this.props.apiInvoker,
        peer,
        userStore: this.props.userStore
      });
      this.chatStores.set(peer.get_id(), chat);
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
    this.order = [...this.messages.entries()]
      .sort((a, b) => (a[1].get_date() > b[1].get_date() ? -1 : 1))
      .map(e => e[0]);

    for (let cb of this._onUpdate) cb();
  }
  handleDialogs(mdialogs: MessagesDialogsS | MessagesDialogsSliceS) {
    let dialogs = mdialogs.get_dialogs().get_values();
    // this.dialogs = [];

    for (let d of dialogs) {
      // if (d.has_pinned()) continue;
      this.dialogs.set(this.idFromPeer(d.get_peer()), d);
    }
    // this.offsetId =
    //   this.dialogs.size > 0
    //     ? this.peerToId(this.dialogs[this.dialogs.length - 1].get_peer())
    //     : 0;
    for (let m of mdialogs.get_chats().get_values()) {
      if (m instanceof ChatS || m instanceof ChannelS)
        this.chats.set(m.get_id(), m);
    }
    for (let m of mdialogs.get_messages().get_values()) {
      if (m instanceof MessageS) {
        let id = this.idFromPeer(m.get_to_id());
        if (!this.chats.has(id)) id = m.get_from_id();
        if (id) {
          let om = this.messages.get(id);
          if (!om || om.get_id() < m.get_id()) {
            this.messages.set(id, m);
          }
        }
      }
    }
    for (let m of mdialogs.get_users().get_values()) {
      if (m instanceof UserS) this.users.set(m.get_id(), m);
    }
  }
  idFromPeer(peer: PeerT) {
    if (peer instanceof PeerChannelS) return peer.get_channel_id();
    else if (peer instanceof PeerChatS) return peer.get_chat_id();
    else if (peer instanceof PeerUserS) return peer.get_user_id();
    return 0;
  }
  onMessages = (messages: MessagesMessagesS | MessagesMessagesSliceS) => {
    for (let m of messages.get_chats().get_values()) {
      if (m instanceof ChatS || m instanceof ChannelS)
        this.chats.set(m.get_id(), m);
    }
    for (let m of messages.get_messages().get_values()) {
      if (m instanceof MessageS) {
        let id = this.idFromPeer(m.get_to_id());
        if (!this.chats.has(id)) id = m.get_from_id();
        if (id) {
          let om = this.messages.get(id);
          if (!om || om.get_id() < m.get_id()) {
            this.messages.set(id, m);
          }
        }
      }
    }
    for (let m of messages.get_users().get_values()) {
      if (m instanceof UserS) this.users.set(m.get_id(), m);
    }
  };
  onUpdatesS = (_updates: UpdatesS) => {
    for (let m of _updates.get_chats().get_values()) {
      if (m instanceof ChatS || m instanceof ChannelS)
        this.chats.set(m.get_id(), m);
    }
    for (let m of _updates.get_users().get_values()) {
      if (m instanceof UserS) this.users.set(m.get_id(), m);
    }
    let needUpdate = false;
    for (let u of _updates.get_updates().get_values()) {
      needUpdate = needUpdate || this.onUpdateT(u, true);
    }
    if (needUpdate) this.sendUpdate();
  };
  onUpdateT = (update: UpdateT, delay = false) => {
    // let update = _update.get_update();
    let needUpdate = false;
    if (update instanceof UpdateNewMessageS) {
      let m = update.get_message();
      if (m instanceof MessageS) {
        let id = this.idFromPeer(m.get_to_id());
        if (!this.chats.has(id)) id = m.get_from_id();
        if (id) {
          let om = this.messages.get(id);
          if (!om || om.get_id() < m.get_id()) {
            this.messages.set(id, m);
            needUpdate = true;
          }
        }
      }
    }
    if (needUpdate && !delay) this.sendUpdate();
    return needUpdate;
  };
  onUpdateShortChatMessageS = (u: UpdateShortChatMessageS) => {
    this.onUpdateShortMessage(u);
  };
  onUpdateShortMessage = (
    update: UpdateShortMessageS | UpdateShortChatMessageS
  ) => {
    let message = this.messages.get(update.get_id());
    if (message) return;
    let id =
      update instanceof UpdateShortMessageS
        ? update.get_user_id()
        : update.get_from_id();
    this.messages.set(
      update.get_id(),
      new MessageS()
        .set_date(update.get_date())
        .set_entities(update.get_entities())
        .set_id(update.get_id())
        .set_media_unread(update.get_media_unread())
        .set_message(update.get_message())
        .set_out(update.get_out())
        .set_mentioned(update.get_mentioned())
        .set_from_id(id)
        .set_reply_to_msg_id(update.get_reply_to_msg_id())
    );
    this.sendUpdate();
  };
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
    if (this.dialogs.size) foo();
    return () => this._onUpdate.delete(foo);
  }

  onDialog(foo: () => void): () => void {
    this._onDialog.add(foo);
    if (this.activeDialog) foo();
    return () => this._onDialog.delete(foo);
  }
  openDialog(d: number) {
    if (this.activeDialog === d) return;
    this.activeDialog = d;
    this._onDialog.forEach(foo => foo());
  }
}

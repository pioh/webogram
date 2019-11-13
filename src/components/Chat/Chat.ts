import { ApiInvoker } from "api/ApiInvoker";
import { ChatHeader } from "components/ChatHeader/ChatHeader";
import { NewMessage } from "components/NewMessage/NewMessage";
import { NoChat } from "components/NoChat/NoChat";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Chat.scss";

interface IChatProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class Chat extends Tag<HTMLDivElement, IChatProps> {
  defer = () => {};
  header = new ChatHeader({ apiInoker: this.props.apiInoker });
  newMessage = new NewMessage({ apiInoker: this.props.apiInoker });
  noChat = new NoChat({ apiInoker: this.props.apiInoker, hide: true });
  messagesContent = h.div(h.className(s.messagesContent));
  messages = h.div(h.className(s.messages), this.messagesContent);
  content = h.div(
    h.className(s.content),
    this.header,
    this.messages,
    this.newMessage
  );

  constructor(props: IChatProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.content);
    this.append(this.noChat);
  }
}

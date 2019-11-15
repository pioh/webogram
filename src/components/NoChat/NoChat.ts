import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./NoChat.scss";

interface INoChatProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class NoChat extends Tag<HTMLDivElement, INoChatProps> {
  topIcon = h.div(h.className(`i-chatsplaceholder ${s.topIcon}`));
  header = h.div(h.className(s.header), "Open Chat\nor create a new one");
  buttonPrivate = h.div(
    h.className(s.button),
    h.i(h.className("i-newprivate")),
    "Private"
  );
  buttonGroup = h.div(
    h.className(s.button),
    h.i(h.className("i-newgroup")),
    "Group"
  );
  buttonChannel = h.div(
    h.className(s.button),
    h.i(h.className("i-newchannel")),
    "Channel"
  );
  buttons = h.div(
    h.className(s.buttons),
    this.buttonPrivate,
    this.buttonGroup,
    this.buttonChannel
  );
  constructor(props: INoChatProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.topIcon, this.header, this.buttons);
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
}

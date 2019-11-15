import { ApiInvoker } from "api/ApiInvoker";
import { ChatStore } from "components/Chat/ChatStore";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./ChatHeader.scss";

interface IChatHeaderProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatStore: ChatStore;
}

export class ChatHeader extends Tag<HTMLDivElement, IChatHeaderProps> {
  photo = h.div(h.className(s.photo));
  title = h.div(h.className(s.title));
  status = h.div(h.className(s.status));
  search = h.i(h.className(`i-search ${s.icon}`)).wave();
  more = h.i(h.className(`i-more ${s.icon}`)).wave();

  constructor(props: IChatHeaderProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(
      this.photo,
      h.div(h.className(s.col), this.title, this.status),
      this.search,
      this.more
    );
    let name = this.store.name(this.peer);
    this.title.append(name);

    let photo = this.store.photo(this.peer);
    if (photo) {
      let photoText = this.store.photoText(name);
      let photoColor = this.store.photoColor(photoText);
      this.photo.append(photoText).tag.style.backgroundColor = photoColor;
      this.store.loadPhoto(
        this.photo.tag,
        photo.get_photo_small(),
        photo.get_dc_id(),
        this.peer
      );
    } else this.photo.remove();
    let status = this.store.status(this.peer);
    this.status.append(status);
    if (status.match(/online/i)) this.status.addClass(s.blue);
  }
  get store() {
    return this.props.chatStore;
  }
  get peer() {
    return this.store.peer;
  }

  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
}

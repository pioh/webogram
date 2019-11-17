import { ApiInvoker, Disposer } from "api/ApiInvoker";
import {
  InputMessageEntityMentionNameS,
  MessageEntityBlockquoteS,
  MessageEntityBoldS,
  MessageEntityCashtagS,
  MessageEntityCodeS,
  MessageEntityEmailS,
  MessageEntityHashtagS,
  MessageEntityItalicS,
  MessageEntityMentionNameS,
  MessageEntityMentionS,
  MessageEntityPhoneS,
  MessageEntityPreS,
  MessageEntityStrikeS,
  MessageEntityTextUrlS,
  MessageEntityUnderlineS,
  MessageEntityUrlS,
  MessageS
} from "api/generator/ApiShema.gen";
import { ChatStore } from "components/Chat/ChatStore";
import { ITagProps, Tag } from "components/Tag/Tag";
import { UserStore } from "components/User/UserStore";
import { getUserColor } from "lib/colors";
import * as h from "lib/html";

import { MediaStore } from "./MediaStore";

import * as s from "./Message.scss";

interface IMessageProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatStore: ChatStore;
  message: MessageS;
  right: boolean;
  first: boolean;
  last: boolean;
  mediaStore: MediaStore;
  ava?: boolean;
  leftpad?: boolean;
  userStore: UserStore;
}

export class Message extends Tag<HTMLDivElement, IMessageProps> {
  text = h.div(h.className(s.text));
  photo = h.div(h.className(s.photo));
  ava = h.div(h.className(s.ava));
  reply: Tag<HTMLDivElement> | null = null;
  title: Tag<HTMLDivElement> | null = null;
  tail = tail(this.props.right, this.self);
  wrap = this.wrapNode();
  disposers: Set<() => void> = new Set();

  constructor(props: IMessageProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    // this.hide();
    this.append(this.ava, this.wrap, this.tail);
    if (this.self) this.addClass(s.self);
    if (this.props.first) this.addClass(s.first);
    if (this.props.last) this.addClass(s.last);
    if (this.props.right && this.self) this.addClass(s.right);
    if (!this.props.right || !this.self) this.addClass(s.left);
    if (this.props.leftpad) {
      this.addClass(s.withAva);
    }
    if (props.ava) {
      let user = this.props.chatStore.findUser(this.message.get_from_id());
      if (user) {
        let title = this.props.chatStore.name(user);
        if (title) {
          this.title = h.div(h.className(s.title), title);
          let avaText = this.props.chatStore.photoText(title);
          let avaBg = this.props.chatStore.photoColor(avaText);
          this.ava.append(avaText);
          this.addClass(s.withAva);
          this.ava.tag.style.backgroundColor = avaBg;
        }
        let photo = this.props.chatStore.photo(user);
        if (photo) {
          this.props.chatStore.loadPhoto(
            this.ava.tag,
            photo.get_photo_small(),
            photo.get_dc_id(),
            user
          );
          this.addClass(s.withAva);
        }
      }
    }

    let photo = this.props.mediaStore.photo(this.message);
    if (photo) {
      this.props.mediaStore.loadPhoto(
        Disposer(cb => {
          this.disposers.add(cb);
          return () => this.disposers.delete(cb);
        }),
        img => {
          // this.show();
          if (this.title) {
            this.title.tag.after(img.tag);
          } else {
            this.wrap.tag.prepend(this.photo.append(img).tag);
          }
          this.wrap.tag.style.maxWidth = img.tag.style.width;
        },
        photo
      );
    }
    this.message.get_media();
    // this.message.getre
    if (
      this.props.chatStore.channel(this.props.chatStore.peer) &&
      this.props.last
    ) {
      if (!this.class.has(s.noText)) {
        let user = this.props.chatStore.findUser(this.message.get_from_id());
        if (user) {
          let title = this.props.chatStore.name(user);
          if (title) {
            let color = getUserColor(title);
            this.title = h.div(h.className(s.title), title);
            if (color) this.title.tag.style.color = color;
            this.wrap.tag.prepend(this.title.tag);
          }
        }
      }
    }
    let rmessage = this.props.chatStore.messages.get(
      this.message.get_reply_to_msg_id()
    );
    if (rmessage) {
      let title = "";
      let user = this.props.chatStore.users.get(rmessage.get_from_id());
      if (user) title = this.props.chatStore.name(user);
      this.reply = h.div(
        h.className(s.reply),
        title ? h.div(h.className(s.title), title) : null,
        h.div(h.className(s.text), rmessage.get_message())
      );
      if (this.title) this.title.tag.after(this.reply.tag);
      else this.wrap.tag.prepend(this.reply.tag);
    }
    if (
      this.class.has(s.noText) &&
      !this.title &&
      this.photo.tag.innerText === "" &&
      !this.reply
    )
      this.hide();
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  get self() {
    return this.message.get_from_id() === this.props.userStore.user.get_id();
  }
  get message() {
    return this.props.message;
  }
  get store() {
    return this.props.chatStore;
  }
  // | MessageEntityUnknownS
  // | MessageEntityMentionS
  // | MessageEntityHashtagS
  // | MessageEntityBotCommandS
  // | MessageEntityUrlS
  // | MessageEntityEmailS
  // | MessageEntityBoldS
  // | MessageEntityItalicS
  // | MessageEntityCodeS
  // | MessageEntityPreS
  // | MessageEntityTextUrlS
  // | MessageEntityMentionNameS
  // | InputMessageEntityMentionNameS
  // | MessageEntityPhoneS
  // | MessageEntityCashtagS
  // | MessageEntityUnderlineS
  // | MessageEntityStrikeS
  // | MessageEntityBlockquoteS;
  wrapNode() {
    let text = this.message.get_message();
    let wrap = h.div(h.className(s.wrap));
    let entities = this.message.get_entities().get_values();
    let nodes: Array<Node | string> = [];
    let last = 0;
    for (let ent of entities) {
      if (ent.get_offset() - last > 0) {
        nodes.push(text.substr(last, ent.get_offset() - last));
      }
      last = ent.get_offset() + ent.get_length();
      if (ent instanceof MessageEntityMentionS) {
        nodes.push(h.a(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityMentionNameS) {
        nodes.push(h.a(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof InputMessageEntityMentionNameS) {
        nodes.push(h.a(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityHashtagS) {
        nodes.push(h.a(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityUrlS) {
        nodes.push(
          h.a(
            h.href(text.substr(ent.get_offset(), ent.get_length())),
            text.substr(ent.get_offset(), ent.get_length()),
            h.blank
          ).tag
        );
      } else if (ent instanceof MessageEntityTextUrlS) {
        nodes.push(
          h.a(
            h.href(ent.get_url()),
            text.substr(ent.get_offset(), ent.get_length()),
            h.blank
          ).tag
        );
      } else if (ent instanceof MessageEntityEmailS) {
        nodes.push(
          h.a(
            h.href(`mailto:${text.substr(ent.get_offset(), ent.get_length())}`),
            text.substr(ent.get_offset(), ent.get_length()),
            h.blank
          ).tag
        );
      } else if (ent instanceof MessageEntityPhoneS) {
        nodes.push(
          h.a(
            h.href(`tel:${text.substr(ent.get_offset(), ent.get_length())}`),
            text.substr(ent.get_offset(), ent.get_length()),
            h.blank
          ).tag
        );
      } else if (
        ent instanceof MessageEntityBoldS ||
        ent instanceof MessageEntityCashtagS
      ) {
        nodes.push(h.b(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityItalicS) {
        nodes.push(h.i(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityUnderlineS) {
        nodes.push(h.u(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityStrikeS) {
        nodes.push(
          h.strike(text.substr(ent.get_offset(), ent.get_length())).tag
        );
      } else if (ent instanceof MessageEntityBlockquoteS) {
        nodes.push(
          h.blockquote(text.substr(ent.get_offset(), ent.get_length())).tag
        );
      } else if (ent instanceof MessageEntityCodeS) {
        nodes.push(h.pre(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else if (ent instanceof MessageEntityPreS) {
        nodes.push(h.pre(text.substr(ent.get_offset(), ent.get_length())).tag);
      } else {
        nodes.push(text.substr(ent.get_offset(), ent.get_length()));
      }
    }
    if (last < text.length - 1) {
      nodes.push(text.substr(last));
    }
    if (nodes.length) {
      // let nodes = text.split(/(\s+)/).map(v => {
      //   if (v.match(/\w+\.\w+/)) return;
      //   return v;
      // });
      this.text.tag.append(...nodes);
      wrap.append(this.text);
      // this.show();
    } else {
      this.addClass(s.noText);
    }
    return wrap;
  }
}

export const tail = (right = false, green = false) => {
  let color = green ? "#EEFFDE" : "#FFFF";
  return h.html<HTMLOrSVGImageElement>([
    `<svg class="${right ? s.right : s.left} ${
      s.tail
    }" width="13" height="21" viewBox="0 0 13 21" fill="none"` +
      `xmlns="http://www.w3.org/2000/svg">` +
      `<g filter="url(#filter0_d)">` +
      `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 18H2V1C2.193 3.8393 2.8762 6.76675 4.04958 9.78235C4.95395 12.1066 6.49587 14.2666 8.67533 16.2625C9.08266 16.6355 9.11048 17.268 8.73748 17.6754C8.54805 17.8822 8.28046 18 7.99997 18Z" fill="${color}"/>` +
      `</g>` +
      `<rect x="0" y="1" width="3" height="17" fill="${color}"/>` +
      `<defs>` +
      `<filter id="filter0_d" x="0" y="0" width="11" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">` +
      `<feFlood flood-opacity="0" result="BackgroundImageFix"/>` +
      `<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>` +
      `<feOffset dy="1"/>` +
      `<feGaussianBlur stdDeviation="1"/>` +
      `<feColorMatrix type="matrix" values="0 0 0 0 0.0621962 0 0 0 0 0.138574 0 0 0 0 0.185037 0 0 0 0.15 0"/>` +
      `<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>` +
      `<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>` +
      `</filter>` +
      `</defs>` +
      `</svg>`
  ]);
};

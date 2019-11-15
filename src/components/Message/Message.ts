import { ApiInvoker } from "api/ApiInvoker";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./Message.scss";
import { ChatStore } from "components/Chat/ChatStore";
import { MessageS } from "api/generator/ApiShema.gen";

interface IMessageProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  chatStore: ChatStore;
  message: MessageS;
  right: boolean;
  first: boolean;
  last: boolean;
}

export class Message extends Tag<HTMLDivElement, IMessageProps> {
  text = this.textNode();

  tail = tail(this.props.right, this.self);

  constructor(props: IMessageProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.text, this.tail);
    if (this.self) this.addClass(s.self);
    if (this.props.first) this.addClass(s.first);
    if (this.props.last) this.addClass(s.last);
    if (this.props.right) this.addClass(s.right);
    if (!this.props.right) this.addClass(s.left);

    this.message.get_media();
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  get self() {
    return !this.message.has_out();
  }
  get message() {
    return this.props.message;
  }
  get store() {
    return this.props.chatStore;
  }

  textNode() {
    let text = this.message.get_message();
    return h.div(h.className(s.text), text);
  }
}

export const tail = (right = false, green = false) => {
  let color = green ? "#EEFFDE" : "#FFFF";
  return h.html<HTMLOrSVGImageElement>([
    // `<svg class="${right ? s.right : s.left} ${
    //   s.tail
    // }" width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">` +
    //   `<g filter="url(#filter0_d)">` +
    //   `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 17H2V0C2.193 2.8393 2.8762 5.76675 4.04958 8.78235C4.95395 11.1066 6.49587 13.2666 8.67533 15.2625C9.08266 15.6355 9.11048 16.268 8.73748 16.6754C8.54805 16.8822 8.28046 17 7.99997 17Z" fill="${color}"/>` +
    //   `</g>` +
    //   `<defs>` +
    //   `<filter id="filter0_d" x="0" y="0" width="11" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">` +
    //   `<feFlood flood-opacity="0" result="BackgroundImageFix"/>` +
    //   `<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>` +
    //   `<feOffset dy="2"/>` +
    //   `<feGaussianBlur stdDeviation="1"/>` +
    //   `<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.137255 0 0 0 0 0.184314 0 0 0 0.15 0"/>` +
    //   `<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>` +
    //   `<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>` +
    //   `</filter>` +
    //   `</defs>` +
    //   `</svg>`,

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

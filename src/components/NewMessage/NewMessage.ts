import { ApiInvoker } from "api/ApiInvoker";
import { tail } from "components/Message/Message";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./NewMessage.scss";

interface INewMessageProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
}

export class NewMessage extends Tag<HTMLDivElement, INewMessageProps> {
  emoji = h.i(h.className(`i-smile ${s.emoji}`));
  attach = h.i(h.className(`i-attach ${s.attach}`));
  back = h.div(h.className(s.back));
  placeholder = h.div(h.className(s.placeholder), "Message").hide();
  input = h.div(
    h.className(s.input),
    h.contenteditable,
    h.spellcheckOff,
    h.autocapitalizeOff,
    h.autocompleteOff,
    h.autocorrectOff,
    h.onInput(() => this.onInput())
  );
  bable = h.div(
    h.className(s.bable),
    this.emoji,
    this.placeholder,
    this.input,
    this.attach,
    tail(true, false)
  );
  sendBack = h.div(h.className(s.sendBack));
  send = h.div(h.className(`i-microphone ${s.send}`), this.sendBack);
  content = h.div(h.className(s.content), this.back, this.bable, this.send);
  constructor(props: INewMessageProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.content);
    this.onInput();
  }
  defer: Array<() => void> = [];
  destroy() {
    this.defer.map(v => v());
    this.defer = [];
  }
  onInput = () => {
    if (this.input.tag.innerText === "") this.placeholder.show();
    else this.placeholder.hide();
  };
}

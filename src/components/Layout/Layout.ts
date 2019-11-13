import { ApiInvoker } from "api/ApiInvoker";
import { SignIn } from "components/SignIn/SignIn";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

export interface ILayoutProps extends ITagProps<HTMLDivElement> {
  apiInvoker: ApiInvoker;
}

export class Layout extends Tag<HTMLDivElement, ILayoutProps> {
  signIn = new SignIn({ apiInoker: this.props.apiInvoker });

  mount() {
    this.append(this.signIn);
    return this.signIn.mount();
  }
}

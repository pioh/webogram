import { SignIn } from "components/SignIn/SignIn";
import { Tag } from "components/Tag/Tag";
import * as h from "lib/html";

export class Layout extends Tag<HTMLDivElement> {
  signIn = new SignIn({});

  mount() {
    this.append(this.signIn);
    return this.signIn.mount();
  }
}

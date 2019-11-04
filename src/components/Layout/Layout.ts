import { SignIn } from "components/SignIn/SignIn";

export class Layout {
  signIn = new SignIn();

  mount() {
    return this.signIn.mount();
  }
}

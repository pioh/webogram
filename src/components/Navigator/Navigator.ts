import { ApiInvoker } from "api/ApiInvoker";
import { Main } from "components/Main/Main";
import { SignIn } from "components/SignIn/SignIn";
import { ITagProps, Tag } from "components/Tag/Tag";
import { UserStore } from "components/User/UserStore";
import * as h from "lib/html";

import * as s from "./Navigator.scss";
export interface INavigatorProps extends ITagProps<HTMLDivElement> {
  apiInvoker: ApiInvoker;
  userStore: UserStore;
}

export class Navigator extends Tag<HTMLDivElement, INavigatorProps> {
  signIn: SignIn | null = null;
  main: Main | null = null;
  defer: Array<() => void> = [];
  deferPage = () => {};

  constructor(props: INavigatorProps) {
    super({ ...props, tag: h.div(h.className(s.root)) });
  }
  mount() {
    this.defer.push(this.props.userStore.onLogin(this.ifLoggedIn));
    this.defer.push(this.props.userStore.onLogout(this.isLoggedOut));
    return super.mount();
  }
  remove() {
    this.defer.map(v => v());
    this.defer = [];
    return super.remove();
  }

  ifLoggedIn = () => {
    this.goToMain();
  };
  isLoggedOut = () => {
    this.goToSignIn();
  };

  goToSignIn() {
    this.deferPage();
    this.signIn = new SignIn({
      apiInoker: this.props.apiInvoker,
      userStore: () => this.props.userStore
    });
    this.append(this.signIn.mount());

    this.deferPage = () => {
      this.signIn!.remove();
      this.signIn!.destroy();
      this.signIn = null;
    };
  }
  goToMain() {
    this.deferPage();
    this.main = new Main({
      apiInoker: this.props.apiInvoker,
      userStore: this.props.userStore
    });
    this.append(this.main.mount());
    this.deferPage = () => {
      this.main!.remove();
      this.main!.destroy();
      this.main = null;
    };
  }
}

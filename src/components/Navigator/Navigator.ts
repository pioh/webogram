import { ApiInvoker } from "api/ApiInvoker";
import { Main } from "components/Main/Main";
import { SignIn } from "components/SignIn/SignIn";
import { ITagProps, Tag } from "components/Tag/Tag";
import { UserStore } from "components/User/UserStore";
import * as h from "lib/html";

export interface INavigatorProps extends ITagProps<HTMLDivElement> {
  apiInvoker: ApiInvoker;
  userStore: UserStore;
}

export class Navigator extends Tag<HTMLDivElement, INavigatorProps> {
  signIn: SignIn | null = null;
  main: Main | null = null;
  deferPage = () => {};

  ifLoggedIn = () => {
    this.goToMain();
  };
  isLoggedOut = () => {
    this.goToSignIn();
  };

  goToSignIn() {
    this.deferPage();
    this.signIn = new SignIn({ apiInoker: this.props.apiInvoker });
    this.append(this.signIn);

    this.deferPage = () => {
      this.signIn!.remove();
      this.signIn = null;
    };
  }
  goToMain() {
    this.deferPage();
    this.main = new Main({
      apiInoker: this.props.apiInvoker,
      userStore: this.props.userStore
    });
    this.deferPage = () => {
      this.main!.remove();
      this.main = null;
    };
  }
}

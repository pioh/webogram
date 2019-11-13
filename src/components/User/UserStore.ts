import { ApiInvoker } from "api/ApiInvoker";
import {
  CallUsersGetUsersM,
  InputUserSelfS,
  UserEmptyS,
  UserS,
  UsersGetUsersM
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";

export interface IUserStoreProps {
  apiInvoker: ApiInvoker;
}
export class UserStore {
  props: IUserStoreProps;

  user = new UserS();
  isLoggedIn = false;

  private _onLogout: Set<() => void> = new Set();
  private _onLogin: Set<() => void> = new Set();
  private _onUpdate: Set<() => void> = new Set();

  constructor(props: IUserStoreProps) {
    this.props = props;
    this.initUser();
    if (!this.isLoggedIn) this.runCallbacks();
  }
  onLogout(foo: () => void) {
    this._onLogout.add(foo);
    if (!this.isLoggedIn) foo();
    return () => this._onLogout.delete(foo);
  }
  onLogin(foo: () => void) {
    this._onLogin.add(foo);
    if (this.isLoggedIn) foo();
    return () => this._onLogin.delete(foo);
  }
  onUpdate(foo: () => void) {
    this._onUpdate.add(foo);
    if (this.isLoggedIn) foo();
    return () => this._onUpdate.delete(foo);
  }
  initUser() {
    let id = Number(localStorage.userID) || 0;
    this.user.set_id(id);
    this.setIsLoggedIn(!!id);
  }

  async loadUser() {
    let response = await CallUsersGetUsersM(
      this.props.apiInvoker,
      new UsersGetUsersM().set_id([new InputUserSelfS()])
    );

    if (response instanceof RpcErrorS || response.length !== 1) {
      this.setIsLoggedIn(false);
      return;
    }
    let user = response[0];
    if (user instanceof UserEmptyS) user = new UserS().set_id(user.get_id());
    let isLoggedIn = !!user.get_id();
    if (this.isLoggedIn && isLoggedIn && this.user.get_id() !== user.get_id()) {
      this.setIsLoggedIn(false);
    }
    this.user = user;
    this.setIsLoggedIn(isLoggedIn);
    if (isLoggedIn) for (let cb of this._onUpdate) cb();
  }
  setIsLoggedIn(is: boolean) {
    if (this.isLoggedIn === is) return;
    this.isLoggedIn = is;
    if (!is) {
      this.user = new UserS();
      delete localStorage.userID;
    } else {
      localStorage.userID = this.user.get_id();
    }
    this.runCallbacks();
  }
  runCallbacks() {
    let cbs = this.isLoggedIn ? this._onLogin : this._onLogout;
    for (let cb of cbs) cb();
  }
}

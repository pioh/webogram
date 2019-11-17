import { ApiInvoker } from "api/ApiInvoker";
import {
  CallUsersGetUsersM,
  InputUserSelfS,
  InputUserT,
  UserEmptyS,
  UserS,
  UsersGetUsersM,
  UserT,
  VectorS
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";

export interface IUserStoreProps {
  apiInvoker: ApiInvoker;
}
export class UserStore {
  props: IUserStoreProps;

  user = new UserS();
  get userDC() {
    return Number(localStorage.userDC || 0);
  }
  set userDC(userDC: number) {
    localStorage.userDC = userDC || this.userDC;
  }
  isLoggedIn = false;

  private _onLogout: Set<() => void> = new Set();
  private _onLogin: Set<() => void> = new Set();
  private _onUpdate: Set<() => void> = new Set();

  constructor(props: IUserStoreProps) {
    this.props = props;
    this.initUser();
    if (!this.isLoggedIn) this.runCallbacks();
  }
  init() {
    setTimeout(() => {
      this.loadUser();
    }, 1000);
    for (let cb of this._onUpdate) cb();
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

  setUser(user: UserT) {
    if (user instanceof RpcErrorS) {
      this.setIsLoggedIn(false);
      return;
    }
    if (user instanceof UserEmptyS) user = new UserS().set_id(user.get_id());
    let isLoggedIn = !!user.get_id();
    if (this.isLoggedIn && isLoggedIn && this.user.get_id() !== user.get_id()) {
      this.setIsLoggedIn(false);
    }
    this.user = user;
    localStorage.userID = user.get_id();
    this.setIsLoggedIn(isLoggedIn);
    for (let cb of this._onUpdate) cb();
  }
  async loadUser() {
    this.userDC = this.userDC || this.props.apiInvoker.dc;
    if (!this.user.get_id()) return;
    let conn = this.props.apiInvoker.connection(this.userDC);
    let response = await CallUsersGetUsersM(
      conn,
      new UsersGetUsersM().set_id(
        new VectorS<InputUserT>().set_values([new InputUserSelfS()])
      )
    );
    if (response instanceof RpcErrorS || response.get_values().length !== 1) {
      // if (response instanceof RpcErrorS) {
      //   let err = findError(response.get_error_message());
      //   if (err.type === "USER_MIGRATE" && Number(err.id)) {
      //     this.userDC = Number(err.id);
      //     localStorage.userDC = this.userDC;
      //     await this.loadUser();
      //     return;
      //   }
      // }
      this.setUser(new UserEmptyS());
      return;
    }
    this.userDC = response.dc || this.userDC;
    this.setUser(response.get_values()[0]);
  }
  setIsLoggedIn(is: boolean) {
    if (this.isLoggedIn === is) return;
    this.isLoggedIn = is;
    if (!is) {
      this.user = new UserS();
      localStorage.userID = 0;
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

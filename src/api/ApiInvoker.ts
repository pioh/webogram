import { UserStore } from "components/User/UserStore";
import { config } from "const/config";
import { AllDc } from "const/dc";

import { Connection } from "./Connection";
import { AuthAuthorizationS } from "./generator/ApiShema.gen";
import { OneOf, TMethod } from "./SchemaHelpers";
import { TimeStore } from "./TimeStore";

interface IApiInvokerProps {
  timeStore: TimeStore;
  userStore: () => UserStore;
}
export class ApiInvoker {
  props: IApiInvokerProps;
  private _connections = new Map<number, Connection>();
  dc = Number(localStorage.dc || config.dc);

  constructor(props: IApiInvokerProps) {
    this.props = props;
    let otherDC = AllDc.filter(
      v => v.isTest === config.test && v.id !== this.dc
    ).map(v => v.id);
    this.connection();
    setTimeout(() => {
      otherDC.forEach(id => this.connection(id));
    }, 100);
  }
  connection(dc: number = this.dc) {
    let connection = this._connections.get(dc);
    if (!connection) {
      connection = new Connection({
        timeStore: this.props.timeStore,
        apiInvoker: this,
        dc
      });
      this._connections.set(dc, connection);
      connection.onNearestDc(dc => {
        this.dc = dc;
        localStorage.dc = dc;
        this.connection(dc); // create if not exists
      });
      connection.init();
    }
    return connection;
  }
  setAuthorization(a: AuthAuthorizationS) {
    let u = a.get_user();
    if (u instanceof OneOf) u = u.unwrap();
    this.props.userStore().setUser(u);
  }
  init() {
    this.props.userStore().onLogin(this.reimportAuth);
  }
  reimportAuth = () => {
    for (let [dc, conn] of this._connections) {
      if (dc === this.props.userStore().userDC) continue;
      conn.reimportAuth();
    }
  };

  async call(req: TMethod): Promise<any> {
    let conn = this.connection();
    await conn.ready();
    return new Promise(r =>
      conn.send({
        name: Object.getPrototypeOf(req).constructor.name,
        method: req,
        cb: instance => {
          r(instance);
        }
      })
    );
  }
}

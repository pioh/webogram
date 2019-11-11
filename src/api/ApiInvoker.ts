import { config } from "const/config";

import { Connection } from "./Connection";
import {
  AuthSendCodeM,
  CallAuthSendCodeM,
  CodeSettingsS,
  AuthSentCodeS
} from "./generator/ApiShema.gen";
import { CallPingM, PingM } from "./generator/MTprotoShema.gen";
import { TMethod } from "./SchemaHelpers";
import { TimeStore } from "./TimeStore";

interface IApiInvokerProps {
  timeStore: TimeStore;
}
export class ApiInvoker {
  props: IApiInvokerProps;
  connection: Connection;
  connectionInited = false;

  constructor(props: IApiInvokerProps) {
    this.props = props;
    this.connection = new Connection({ timeStore: this.props.timeStore });
  }

  async init() {
    await this.connection.init();
    // await this.ping();
    // let config = await CallTMxHelpTGetConfig(this, new TMxHelpTGetConfig());
    // console.log({ config });
    // await this.ping();
    await this.authSendCode();
    setInterval(
      () => CallPingM(this, new PingM().set_ping_id([321, 123])),
      10000
    );
    // setTimeout(() => {
    // await this.authSendCode();
    // }, 10000);
  }

  // async invoke(method: IMethod, params: any[]) {
  //   await this.connection.ready();

  //   // req.writeInt(0xeeeeeeee);

  //   // let types = method.slice(2);
  //   return this.connection.sendRequest(method, params);
  //   // let found: [ITypeStruct, ...any[]] = [NoAnswerFound];
  //   // for (let [type, ...data] of messages) {
  //   //   if (types.includes(type)) found = [type, ...data];
  //   //   else console.log("unexpected msg", type, data);
  //   // }
  //   // return found;
  // }
  // async ping() {
  // console.log(pong);
  // }
  async authSendCode() {
    let res = await CallAuthSendCodeM(
      this,
      new AuthSendCodeM()
        .set_api_hash(config.apiHash)
        .set_api_id(config.apiID)
        // .set_api_hash("8da85b0d5bfe62527e5b244c209159c3")
        // .set_api_id(2496)
        .set_phone_number("+9996628384")
      // .set_phone_number("+79267952303")
      // .set_settings(new CodeSettingsS().set_allow_app_hash(true).set)
    );
    // let res = await this.invoke(MethodAuthSendCode, [
    //   "9996628789",
    //   // "9267952303",
    //   25282,
    //   ,
    //   [0]
    // ]);
    console.log("code", res);
  }
  async call(req: TMethod): Promise<any> {
    await this.connection.ready();
    return new Promise(r =>
      this.connection.send(
        Object.getPrototypeOf(req).constructor.name,
        req,
        instance => {
          r(instance);
        }
      )
    );
  }
}

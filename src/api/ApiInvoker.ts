import { ByteBuffer } from "./ByteBuffer";
import { Connection } from "./Connection";
import {
  CallTMxAuthTSendCode,
  TCodeSettings,
  TMxAuthTSendCode
} from "./generator/ApiShema.gen";
import { CallTMxPing, TMxPing } from "./generator/MTprotoShema.gen";
import { IMethod, MethodAuthSendCode } from "./schema";
import { IStruct } from "./SchemaHelpers";
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
    this.ping();
    setTimeout(() => {
      this.authSendCode();
    }, 10000);
  }

  async invoke(method: IMethod, params: any[]) {
    await this.connection.ready();

    // req.writeInt(0xeeeeeeee);

    // let types = method.slice(2);
    return this.connection.sendRequest(method, params);
    // let found: [ITypeStruct, ...any[]] = [NoAnswerFound];
    // for (let [type, ...data] of messages) {
    //   if (types.includes(type)) found = [type, ...data];
    //   else console.log("unexpected msg", type, data);
    // }
    // return found;
  }
  async ping() {
    let pong = await CallTMxPing(this, new TMxPing().set_ping_id([321, 123]));
    console.log(pong);
  }
  async authSendCode() {
    let res = await CallTMxAuthTSendCode(
      this,
      new TMxAuthTSendCode()
        .set_api_hash("b334f72ad1a3d4e3324894ccde2d2dab")
        .set_api_id(25282)
        .set_phone_number("9996628789")
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
  async call(
    req: IStruct,
    responeReader: (buf: ByteBuffer) => any
  ): Promise<any> {
    return new Promise(r =>
      this.connection.send(req, (instance, buf) => {
        if (!instance) {
          instance = responeReader(buf);
        }
        r(instance);
      })
    );
  }
}

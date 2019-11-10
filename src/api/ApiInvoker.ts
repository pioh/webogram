import { ByteBuffer } from "./ByteBuffer";
import { Connection } from "./Connection";
import { IStruct, OneOf } from "./generator/Generated";
import { IMethod, MethodAuthSendCode, MethodPing } from "./schema";
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
    await this.ping();
    await this.authSendCode();
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
    let res = await this.invoke(MethodPing, [[123, 321]]);
    console.log("pong", res);
  }
  async authSendCode() {
    let res = await this.invoke(MethodAuthSendCode, [
      "9996628789",
      // "9267952303",
      25282,
      "b334f72ad1a3d4e3324894ccde2d2dab",
      [0]
    ]);
    console.log("code", res);
  }
  async call(
    req: IStruct,
    responeReader: (buf: ByteBuffer) => any
  ): Promise<any> {
    return responeReader(new ByteBuffer());
  }
}

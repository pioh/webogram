import { ApiInvoker } from "api/ApiInvoker";
import {
  AccountGetPasswordM,
  AccountPasswordS,
  AuthAuthorizationS,
  AuthAuthorizationSignUpRequiredS,
  AuthCheckPasswordM,
  AuthResendCodeM,
  AuthSendCodeM,
  AuthSentCodeS,
  AuthSentCodeTypeAppS,
  AuthSentCodeTypeCallS,
  AuthSentCodeTypeSmsS,
  AuthSignInM,
  AuthSignUpM,
  CallAccountGetPasswordM,
  CallAuthCheckPasswordM,
  CallAuthResendCodeM,
  CallAuthSendCodeM,
  CallAuthSignInM,
  CallAuthSignUpM,
  InputCheckPasswordSrpS,
  PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";
import { Button } from "components/Button/Button";
import { CountrySelect } from "components/CountrySelect/CountrySelect";
import { Input } from "components/Input/Input";
import { ITagProps, Tag } from "components/Tag/Tag";
import { UserStore } from "components/User/UserStore";
import { config } from "const/config";
import { findError } from "const/errors";
import { GetPhoneFormat } from "dictionary";
import * as h from "lib/html";
import { GetWorker } from "lib/WorkerClient";

import * as s from "./SignIn.scss";

interface ISignInProps extends ITagProps<HTMLDivElement> {
  apiInoker: ApiInvoker;
  userStore: () => UserStore;
}

export class SignIn extends Tag<HTMLDivElement, ISignInProps> {
  worker = GetWorker();
  defer: Array<() => void> = [];
  heder = h.h1("Sign in to Telegram");
  action = h.p(
    h.className(s.action),
    "Please confirm your country and\nenter your phone number"
  );
  resendCode = h
    .div(
      h.className(s.resendCode),
      "resend code",
      h.onClick(() => this.onResendCode())
    )
    .hide();
  error = new Tag<HTMLDivElement>({
    tag: h.div(h.className(s.error)),
    hide: true
  });
  countrySelect = new CountrySelect({ hide: true });
  phone = new Input({
    number: true,
    forLabel: ["Phone Number"],
    hide: true,
    value: localStorage.getItem("phone") || ""
  });
  code = new Input({
    forLabel: ["Code"],
    hide: true
  });
  password = new Input({
    forInput: [
      h.type("password"),
      h.autocapitalizeOff,
      h.autocompleteOff,
      h.autocorrectOff,
      h.spellcheckOff
    ],
    forLabel: ["Password"],
    hide: true
  });
  name = new Input({
    forLabel: ["Name"],
    hide: true
  });
  lastName = new Input({
    forLabel: ["Last Name (optional)"],
    hide: true
  });
  passwordHint = new Tag<HTMLDivElement>({
    tag: h.div(h.className(s.passwordHint)),
    hide: true
  });
  buttonNext = new Button({
    color: "primary",
    props: ["NEXT", h.onClick(() => this.onNextClick())],
    hide: true
  });
  accountPassword: Promise<AccountPasswordS | RpcErrorS> = Promise.resolve(
    new RpcErrorS().set_error_message("INTERNAL")
  );
  content = h.div(
    h.className(s.content),
    h.div(h.className(s.logo)),
    this.heder,
    this.action,
    this.countrySelect,
    this.phone,
    this.code,
    this.resendCode,
    this.password,
    this.passwordHint,
    this.name,
    this.lastName,
    this.buttonNext,
    this.error
  );
  sentCode = new AuthSentCodeS().set_phone_code_hash(
    localStorage.getItem("phoneCodeHash") || ""
  );
  codeLength = Number(localStorage.getItem("code-length") || 0);
  signInState =
    localStorage.getItem("signInState") ||
    ("" as
      | "code-sms"
      | "code-app"
      | "code-call"
      | "code-other"
      | "password"
      | "sign-up"
      | "done"
      | "");

  deferStep = () => {};

  constructor(props: ISignInProps) {
    super({
      ...props,
      tag: h.div(h.className(s.root))
    });
    this.append(this.content);
    this.countrySelect.onChange(this.onCountryChange);
    this.phone.onChange(this.phoneOnChange);
    this.code.onChange(this.codeOnChange);
    this.password.onChange(() => this.clearErrors());
    if (this.signInState.startsWith("code-")) this.goToCode();
    switch (this.signInState) {
      case "password":
        this.goTo2FA();
        this.fetchAccountPassword();
        break;
      case "sign-up":
        this.goToSignUp();
        break;
      default:
        this.goToSignIn();
    }
  }
  onCountryChange = async (c: string) => {
    if (!c) return;
    if (this.countrySelect.isHidden()) return;
    if (!this.phone.value) this.phone.value = c;
    let format = await GetPhoneFormat();
    let found = format.get(Number(c.replace(/\D/g, "")));
    found = found || [2, 2, 2, 2, 2, 2];
    // console.log(found);
    let mask = "+" + found.map(v => this.repeat(v, "0")).join(" ");
    this.phone.doMask(mask);
    // console.log(mask);
    this.phone.show();
  };
  repeat(n: number, c: string) {
    let out = "";
    for (let i = 0; i < n; i++) out += c;
    return out;
  }
  destroy() {
    this.deferStep();
    this.deferStep = () => {};
    this.defer.map(v => v());
    this.defer = [];
  }
  get phoneValue() {
    return this.phone.value ? `+${this.phone.value}` : "";
  }
  onResendCode = async () => {
    this.resendCode.remove();
    let phone = String(this.phoneValue);
    setTimeout(() => this.code.tag.after(this.resendCode.mount()), 30000);
    let res = await CallAuthResendCodeM(
      this.props.apiInoker.connection(this.props.userStore().userDC),
      new AuthResendCodeM()
        .set_phone_code_hash(this.sentCode.get_phone_code_hash())
        .set_phone_number(phone)
    );
    this.onAuthSentCode(res, phone, res.dc);
  };
  phoneOnChange = () => {
    this.clearErrors();
    let v = String(this.phoneValue || "");
    if (v.length > 7) this.buttonNext.show();
    else this.buttonNext.hide();
  };
  codeOnChange = (code: string | number | null) => {
    this.clearErrors();
    if (!this.sentCode) {
      this.buttonNext.show();
      this.code.hide();
      this.phone.show();
      return;
    }
    if (!code) return;
    code = String(code);
    if (code.length < this.codeLength && this.codeLength) return;
    this.signIn(code);
  };
  goToSignIn = () => {
    this.deferStep();
    this.countrySelect.show();
    if (this.countrySelect.code) {
      if (!this.phoneValue) this.phone.value = this.countrySelect.code;
      this.phone.show();
    }
    this.phoneOnChange();
    this.deferStep = () => {
      this.countrySelect.hide();
      this.phone.hide();
      this.buttonNext.hide();
    };
  };
  async onNextClick() {
    this.clearErrors();
    if (!this.phone.isHidden()) this.sendCode();
    if (!this.password.isHidden()) this.sendPassword();
    if (!this.name.isHidden()) this.sendSignUp();
  }
  async sendCode() {
    if (!this.phoneValue) return;
    this.clearErrors();
    let phone = String(this.phoneValue);
    let res = await CallAuthSendCodeM(
      this.props.apiInoker,
      new AuthSendCodeM()
        .set_api_hash(config.apiHash)
        .set_api_id(config.apiID)
        .set_phone_number(phone)
    );
    this.onAuthSentCode(res, phone, res.dc);
  }
  onAuthSentCode(res: AuthSentCodeS | RpcErrorS, phone: string, dc: number) {
    this.props.userStore().userDC = dc;
    if (String(this.phoneValue) !== phone) return;

    if (res instanceof RpcErrorS) {
      this.setError(this.phone, res.get_error_message());
      return;
    }
    localStorage.setItem("phone", phone);
    localStorage.setItem("phoneCodeHash", res.get_phone_code_hash());
    this.sentCode = res;

    let type = res.get_type();
    if (type instanceof AuthSentCodeTypeAppS) {
      this.codeLength = type.get_length();
      localStorage.setItem("signInState", "code-app");
    } else if (type instanceof AuthSentCodeTypeCallS) {
      this.codeLength = type.get_length();
      localStorage.setItem("signInState", "code-call");
    } else if (type instanceof AuthSentCodeTypeSmsS) {
      this.codeLength = type.get_length();
      localStorage.setItem("signInState", "code-sms");
    } else localStorage.setItem("signInState", "code-other");
    localStorage.setItem("code-length", String(this.codeLength));
    this.goToCode();
  }
  goToCode() {
    this.clearErrors();
    this.deferStep();
    this.deferStep = () => {
      this.code.hide();
      this.resendCode.hide();
    };
    this.code.show();
    this.resendCode.show();
    this.heder.tag.innerText = localStorage.getItem("phone") || "";
    switch (localStorage.getItem("signInState")) {
      case "code-sms":
        this.action.tag.innerText = "We have sent you an SMS\nwith the code";
        break;
      case "code-app":
        this.action.tag.innerText =
          "We have sent you an Message\nwith the code";
        break;
      case "code-call":
        this.action.tag.innerText =
          "We have sent you an code\nwith the phone call";
        break;
      default:
        this.action.tag.innerText = "We have sent you the code";
    }
  }
  async signIn(code: string) {
    if (!this.sentCode || !this.phoneValue || !code) return;
    console.log(
      code,
      this.sentCode.get_phone_code_hash(),
      String(this.phoneValue)
    );
    this.clearErrors();
    let authorization = await CallAuthSignInM(
      this.props.apiInoker,
      new AuthSignInM()
        .set_phone_code(code)
        .set_phone_code_hash(this.sentCode.get_phone_code_hash())
        .set_phone_number(String(this.phoneValue))
    );
    if (String(this.code.value) !== code) return;
    if (authorization instanceof RpcErrorS) {
      let err = findError(authorization.get_error_message());
      if (err.type === "SESSION_PASSWORD_NEEDED") {
        localStorage.setItem("signInState", "password");
        this.goTo2FA();
        this.fetchAccountPassword();
        return;
      }
      this.setError(this.code, authorization.get_error_message());
      return;
    }
    if (authorization instanceof AuthAuthorizationSignUpRequiredS) {
      localStorage.setItem("signInState", "sign-up");
      this.goToSignUp();
      return;
    }
    this.props.apiInoker.setAuthorization(authorization);
    this.finish();
  }
  async goToSignUp() {
    this.deferStep();
    this.deferStep = () => {
      this.name.hide();
      this.lastName.hide();
      this.buttonNext.hide();
    };
    this.name.show();
    this.lastName.show();
    this.buttonNext.show();
    this.buttonNext.tag.innerText = "START MESSAGING";
    this.heder.tag.innerText = "Your Name";
    this.action.tag.innerText = "Enter your name and add\na profile picture";
  }
  async goTo2FA() {
    this.deferStep();
    this.deferStep = () => {
      this.password.hide();
      this.passwordHint.hide();
      this.buttonNext.hide();
    };
    this.password.show();
    this.passwordHint.show();
    this.buttonNext.show();
    this.action.tag.innerText =
      "Your account is protected with\nan additional password.";
  }
  async fetchAccountPassword() {
    this.accountPassword = new Promise(async resolve => {
      let passwordS = await CallAccountGetPasswordM(
        this.props.apiInoker,
        new AccountGetPasswordM()
      );
      if (passwordS instanceof AccountPasswordS) {
        this.passwordHint.tag.innerText = passwordS.get_hint();
      }
      resolve(passwordS);
    });
  }
  async sendPassword() {
    this.clearErrors();
    let password = String(this.password.value || "");
    if (!password) this.setError(this.password, "EMPTY_PASSWORD");
    let accPass = await this.accountPassword;
    if (accPass instanceof RpcErrorS) {
      this.setError(this.password, accPass.get_error_message());
      return;
    }
    let alg = accPass.get_current_algo();
    if (
      !(
        alg instanceof
        PasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPowS
      )
    ) {
      this.setError(this.password, "PASS_CHECK_ALG_NOT_SUPPORTED");
      return;
    }
    let M1: Uint8Array;
    let g_a: Uint8Array;
    let passphraseKey = new TextEncoder().encode(password);
    try {
      [M1, g_a] = await this.worker.srp(
        passphraseKey,
        alg.get_g(),
        alg.get_p(),
        alg.get_salt1(),
        alg.get_salt2(),
        accPass.get_srp_B()
      );
    } catch (e) {
      console.error(e.stack);
      this.setError(this.password, e.message);
      return;
    }
    // alg.get
    // accPass.get

    let authorization = await CallAuthCheckPasswordM(
      this.props.apiInoker,
      new AuthCheckPasswordM().set_password(
        new InputCheckPasswordSrpS()
          .set_A(g_a)
          .set_M1(M1)
          .set_srp_id(accPass.get_srp_id())
      )
    );
    if (authorization instanceof RpcErrorS) {
      this.setError(this.password, authorization.get_error_message());
      return;
    }
    this.password.hide();
    this.passwordHint.hide();
    if (authorization instanceof AuthAuthorizationS) {
      this.props.apiInoker.setAuthorization(authorization);
      this.finish();
      return;
    }
    this.goToSignUp();
  }
  async sendSignUp() {
    let firstName = String(this.name.value || "");
    let lastName = String(this.lastName.value || "");
    let authorization = await CallAuthSignUpM(
      this.props.apiInoker,
      new AuthSignUpM()
        .set_first_name(firstName) // TODO
        .set_last_name(lastName)
        .set_phone_code_hash(this.sentCode!.get_phone_code_hash())
        .set_phone_number(String(this.phoneValue))
    );
    if (authorization instanceof RpcErrorS) {
      this.setError(this.name, authorization.get_error_message());
      return;
    }
    if (authorization instanceof AuthAuthorizationSignUpRequiredS) {
      localStorage.setItem("signInState", "password");
      this.goToSignUp();
      return;
    }
    this.props.apiInoker.setAuthorization(authorization);
    this.finish();
  }
  finish() {
    this.deferStep();
    localStorage.removeItem("signInState");
    localStorage.removeItem("phone");
    localStorage.removeItem("phoneCodeHash");
    localStorage.removeItem("code-length");
  }
  setError(tag: Input | null, errType: string) {
    let err = findError(errType);
    if (err.text) {
      if (tag && this.phone && err.text.length < 50) {
        tag.setError(err.text);
        tag.focus();
      } else {
        this.error.tag.innerText = err.text;
        this.error.show();
        this.error.tag.scrollIntoView();
      }
    }
  }
  clearErrors() {
    this.error.hide();
    this.phone.clearError();
    this.code.clearError();
    this.password.clearError();
    this.name.clearError();
    this.lastName.clearError();
  }
  mount() {
    return super.mount();
  }
}

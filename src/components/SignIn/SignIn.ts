import { CountrySelect } from "components/CountrySelect/CountrySelect";
import { Phone } from "components/Phone/Phone";
import { ITagProps, Tag } from "components/Tag/Tag";
import * as h from "lib/html";

import * as s from "./SignIn.scss";

interface ISignInProps extends ITagProps<HTMLDivElement> {}

export class SignIn extends Tag<HTMLDivElement> {
  countrySelect = new CountrySelect({});
  phone = new Phone({});
  constructor(props: ISignInProps) {
    super({
      ...props,
      tag: h.div(
        h.className(s.root),
        h.div(h.className(s.logo)),
        h.h1("Sign in to Telegram"),
        h.p(
          "Please confirm your country and",
          h.br(),
          "enter your phone number"
        )
      )
    });
  }
  mount() {
    this.append(this.countrySelect.mount());
    if (this.countrySelect.code) {
      this.append(this.phone.mount());
    }

    return super.mount();
  }
}

import { CountrySelect } from "components/CountrySelect/CountrySelect";
import { Phone } from "components/Phone/Phone";
import * as h from "lib/html";

import * as s from "./SignIn.scss";

export class SignIn {
  rootNode: HTMLDivElement | null = null;
  countrySelect = new CountrySelect();
  phone = new Phone();

  mount(): HTMLElement {
    this.rootNode = h.div(
      h.className(s.root),
      h.div(h.className(s.logo)),
      h.h1("Sign in to Telegram"),
      h.p("Please confirm your country and", h.br(), "enter your phone number"),
      this.countrySelect.mount()
    );

    return this.rootNode;
  }
}

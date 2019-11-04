import { CountrySelect } from "components/CountrySelect/CountrySelect";
import { Phone } from "components/Phone/Phone";
import { html } from "lib/html";

import * as s from "./SignIn.scss";

export class SignIn {
  rootNode: HTMLDivElement | null = null;
  countrySelect = new CountrySelect();
  phone = new Phone();

  mount(): HTMLElement {
    this.rootNode = html<HTMLDivElement>`
      <div class=${s.root}>
        <div class=${s.logo}></div>
        <h1>Sign in to Telegram</h1>
        <p>
          Please confirm your country and<br />
          enter your phone number
        </p>
      </div>
    `;
    this.rootNode.appendChild(this.countrySelect.mount());
    return this.rootNode;
  }
}

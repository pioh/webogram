import { Phone } from "components/Phone/Phone";
import { html } from "lib/html";

import * as s from "./SignIn.scss";

export class SignIn {
  rootNode: HTMLDivElement | null = null;
  phone = new Phone();

  mount(): HTMLElement {
    this.rootNode = html<HTMLDivElement>`
      <div class=${s.root}>
        <div class=${s.logo}></div>
        <h1>Sign in to Telegram</h1>
        <h4>Please confirm your country and</h4>
        <b>enter your phone number</b>
      </div>
    `;
    this.rootNode.appendChild(this.phone.mount());
    return this.rootNode;
  }
}

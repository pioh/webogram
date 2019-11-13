import { ApiInvoker } from "api/ApiInvoker";
import { TimeStore } from "api/TimeStore";
import { Navigator } from "components/Navigator/Navigator";
import { UserStore } from "components/User/UserStore";
import "static/font.css";

import "./main.scss";

(window as any).self = window;

const timeStore = new TimeStore();
const apiInvoker = new ApiInvoker({ timeStore });

const userStore = new UserStore({
  apiInvoker
});

const navigator = new Navigator({ apiInvoker, userStore });
document.body.appendChild(navigator.mount());

requestAnimationFrame(() => apiInvoker.init());

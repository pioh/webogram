import { ApiInvoker } from "api/ApiInvoker";
import { TimeStore } from "api/TimeStore";
import { Layout } from "components/Layout/Layout";
import "static/font.css";

import "./main.scss";

(window as any).self = window;

const timeStore = new TimeStore();
const apiInvoker = new ApiInvoker({ timeStore });

const layout = new Layout({ apiInvoker });
document.body.appendChild(layout.mount());

requestAnimationFrame(() => apiInvoker.init());

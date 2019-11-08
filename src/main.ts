import { Connection } from "api/Connection";
import { TimeStore } from "api/TimeStore";
import { Layout } from "components/Layout/Layout";

import "./static/font.css";

import "./main.scss";

const timeStore = new TimeStore();
const connection = new Connection({ timeStore });
(window as any).connection = connection;
const layout = new Layout();
document.body.appendChild(layout.mount());

requestAnimationFrame(() => connection.fetchPQ());

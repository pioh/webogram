import { config } from "./config";

export interface IDC {
  id: number;
  host: string;
  port: number;
  domain: string;
  isTest: boolean;
}

export const AllDc: IDC[] = [
  { id: 1, host: "149.154.175.50", port: 80, domain: "pluto", isTest: false },
  { id: 2, host: "149.154.167.51", port: 80, domain: "venus", isTest: false },
  { id: 3, host: "149.154.175.100", port: 80, domain: "aurora", isTest: false },
  { id: 4, host: "149.154.167.91", port: 80, domain: "vesta", isTest: false },
  { id: 5, host: "149.154.171.5", port: 80, domain: "flora", isTest: false },

  { id: 1, host: "149.154.175.10", port: 80, domain: "pluto", isTest: true },
  { id: 2, host: "149.154.167.40", port: 80, domain: "venus", isTest: true },
  { id: 3, host: "149.154.175.117", port: 80, domain: "aurora", isTest: true }
];
export function GetDcHref(dcID: number) {
  let dc = AllDc.find(d => d.id === dcID && config.test === d.isTest);
  if (!dc) throw new Error(`unknown dc with id ${dcID} isTest:${config.test}`);

  return (
    `https://${dc.domain}.web.telegram.org/apiw1` + (config.test ? "_test" : "")
  );
}

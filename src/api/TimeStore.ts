import { ILong } from "lib/long";

export class TimeStore {
  offset = 0;
  lastMessageIDTime = 0;

  now() {
    return Date.now() + this.offset;
  }
  generateMessageID(): ILong {
    let time = this.now();
    if (this.lastMessageIDTime >= time) time = this.lastMessageIDTime + 1;
    this.lastMessageIDTime = time;

    let random = crypto.getRandomValues(new Uint16Array(1));

    let messageID: ILong = [
      (time % 1000 << 21) | (random[0] << 3) | 4,
      Math.floor(time / 1000)
    ];

    return messageID;
  }
}

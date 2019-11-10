import { ILong } from "lib/ILong";

export class TimeStore {
  perfomaceTimeOffset = Date.now() / 1000 - performance.now() / 1000;
  serverOffset = 0.0; // sec
  lastNow = 0.0; // sec

  now() {
    let time =
      performance.now() / 1000 + this.serverOffset + this.perfomaceTimeOffset;
    if (this.lastNow >= time) time += 0.0001;
    this.lastNow = time;
    return time;
  }
  syncWithServer(clientTime: ILong, serverTime: ILong, ping: number) {
    if (this.serverOffset !== 0.0) return;
    let ct = this.longToTime(clientTime);
    let st = this.longToTime(serverTime);
    this.serverOffset = st - ping / 3 - ct;
    this.lastNow = 0.0;
  }
  longToTime(long: ILong) {
    return long[0] / Math.pow(2, 32) + long[1];
  }
  timeToLong(time: number): ILong {
    let high = Math.floor(time);
    let low = Math.ceil((time - high) * Math.pow(2, 30)) * 4;
    return [low, high];
  }
  generateMessageID(): ILong {
    return this.timeToLong(this.now());
  }
}

export type ICountry = [string, string, string, ...string[]];
let CountryP: Promise<{ Country: ICountry[] }> | null = null;
export const GetCountry = async () => {
  if (!CountryP)
    CountryP = new Promise(r =>
      requestAnimationFrame(() => r(import("./Country.en")))
    );
  return (await CountryP).Country;
};

export type IEmoji = Map<string, string>;
let EmojiP: Promise<{ Emoji: IEmoji }> | null = null;
export const GetEmoji = async () => {
  if (!EmojiP)
    EmojiP = new Promise(r =>
      requestAnimationFrame(() => r(import("./Emoji")))
    );
  return (await EmojiP).Emoji;
};

let PhoneFormatP: Promise<{ PhoneFormat: Map<number, number[]> }> | null = null;
export const GetPhoneFormat = async () => {
  if (!PhoneFormatP)
    PhoneFormatP = new Promise(r =>
      requestAnimationFrame(() => r(import("./PhoneFormat")))
    );
  return (await PhoneFormatP).PhoneFormat;
};

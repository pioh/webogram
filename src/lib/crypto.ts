// import CryptoJS from "crypto-js";
// import { mode } from "crypto-js";
// import AES from "crypto-js/aes";
// import LibTypedarrays from "crypto-js/lib-typedarrays/index";
// import NoPadding from "crypto-js/pad-nopadding";

import { CryptoJS } from "lib/aes.js";

import { addPadding } from "./RsaEncrypt";

function bytesToWords(bytes: Uint8Array) {
  let len = bytes.length;
  let words: number[] = [];
  let i;
  for (i = 0; i < len; i++) {
    words[i >>> 2] |= bytes[i] << (24 - (i % 4) * 8);
  }

  return new CryptoJS.lib.WordArray.init(words, len);
}
function bytesFromWords(wordArray: { sigBytes: number; words: number[] }) {
  let words = wordArray.words;
  let sigBytes = wordArray.sigBytes;
  let bytes = [];

  for (let i = 0; i < sigBytes; i++) {
    bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff);
  }

  return new Uint8Array(bytes);
}
export function AesDecrypt(
  data: Uint8Array,
  keyBytes: Uint8Array,
  iv: Uint8Array
): Uint8Array {
  // let key = await crypto.subtle.importKey("raw", keyBytes, "AES-CBC", true, [
  //   "decrypt"
  // ]);

  // return new Uint8Array(
  //   await window.crypto.subtle.decrypt(
  //     {
  //       name: "AES-CBC",
  //       iv: iv
  //     },
  //     key,
  //     data
  //   )
  // );
  let a = CryptoJS.AES.decrypt(
    { ciphertext: bytesToWords(data) },
    bytesToWords(keyBytes),
    {
      iv: bytesToWords(iv),
      padding: CryptoJS.pad.NoPadding,
      mode: CryptoJS.mode.IGE
    }
  );
  // let a = AES.decrypt(bytesToWords(data), bytesToWords(keyBytes), {
  //   iv: bytesToWords(iv),
  //   padding: NoPadding,
  //   mode: mode.CBC
  // });
  // console.log(a);
  return bytesFromWords(a);
}

export function AesEncrypt(
  bytes: Uint8Array,
  keyBytes: Uint8Array,
  iv: Uint8Array
): Uint8Array {
  bytes = addPadding(bytes);
  let encryptedWords = CryptoJS.AES.encrypt(
    bytesToWords(bytes),
    bytesToWords(keyBytes),
    {
      iv: bytesToWords(iv),
      padding: CryptoJS.pad.NoPadding,
      mode: CryptoJS.mode.IGE
    }
  ).ciphertext;

  let encryptedBytes = bytesFromWords(encryptedWords);

  return encryptedBytes;
}

export function sha256Hash(bytes: Uint8Array): Uint8Array {
  // console.log(dT(), 'SHA-2 hash start', bytes.byteLength || bytes.length)
  let hashWords = CryptoJS.SHA256(bytesToWords(bytes));
  // console.log(dT(), 'SHA-2 hash finish')

  let hashBytes = bytesFromWords(hashWords);

  return hashBytes;
}

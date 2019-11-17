import { ApiInvoker, IDisposer } from "api/ApiInvoker";
import {
  CallUploadGetCdnFileM,
  CallUploadGetFileM,
  InputPhotoFileLocationS,
  MessageMediaPhotoS,
  MessageS,
  PhotoCachedSizeS,
  PhotoEmptyS,
  PhotoS,
  PhotoSizeS,
  PhotoStrippedSizeS,
  StorageFilePartialS,
  UploadCdnFileReuploadNeededS,
  UploadCdnFileS,
  UploadCdnFileT,
  UploadFileCdnRedirectS,
  UploadFileS,
  UploadFileT,
  UploadGetCdnFileM,
  UploadGetFileM
} from "api/generator/ApiShema.gen";
import { RpcErrorS } from "api/generator/MTprotoShema.gen";
import { Tag } from "components/Tag/Tag";
import * as h from "lib/html";

export interface IMediaStoreProps {
  apiInvoker: ApiInvoker;
}
const OPTIMAL_SIZE = 500;
const MB = 1024 * 1024;
const CHUNK = MB;

interface QItem {
  disposer: IDisposer;
  photo: PhotoS;
  found: string;
  img: Tag<HTMLImageElement>;
  done: () => void;
}
let queue = new Set<QItem>();
let maxLoading = 4;
export class MediaStore {
  props: IMediaStoreProps;
  constructor(props: IMediaStoreProps) {
    this.props = props;
  }
  photo(message: MessageS) {
    let type = message.get_media();
    if (!(type instanceof MessageMediaPhotoS)) return null;
    let photo = type.get_photo();
    if (photo instanceof PhotoEmptyS) return null;
    return photo;
  }
  loading = 0;

  loadPhoto(
    disposer: IDisposer,
    cb: Tag<HTMLImageElement> | ((img: Tag<HTMLImageElement>) => void),
    photo: PhotoS
  ) {
    let sizes = photo.get_sizes().get_values();
    let distance = Number.MAX_SAFE_INTEGER;
    let found: string = "";
    let width = 0;
    let height = 0;
    // let weight = CHUNK;
    // let striped: Uint8Array | null = null;
    //     PhotoSizeEmptyS
    //   | PhotoSizeS
    //   | PhotoCachedSizeS
    //   | PhotoStrippedSizeS;
    let bytes: Uint8Array | null = null;
    for (let size of sizes) {
      if (size instanceof PhotoCachedSizeS || size instanceof PhotoSizeS) {
        if (size instanceof PhotoCachedSizeS) bytes = size.get_bytes();
        let dist =
          Math.abs(size.get_h() - OPTIMAL_SIZE) +
          Math.abs(size.get_w() - OPTIMAL_SIZE);
        if (dist < distance) {
          found = size.get_type();
          width = size.get_w();
          height = size.get_h();
          distance = dist;
        }
      } else if (size instanceof PhotoStrippedSizeS) {
        bytes = size.get_bytes();
      }
    }
    // if (striped) this.appendPhoto(tag, striped);
    if (!found) return;
    let h2 = Math.min(360, height);
    let w2 = (width * h2) / height;
    w2 = Math.min(w2, 480);
    height *= w2 / width;
    width = w2;
    if (typeof cb === "function") {
      let img = h.img();
      img.tag.setAttribute("width", `${width}px`);
      img.tag.setAttribute("height", `${height}px`);
      img.tag.style.width = `${width}px`;
      img.tag.style.opacity = "0";
      img.tag.style.height = `${height}px`;
      cb(img);
      cb = img;
    } else {
      cb.tag.setAttribute("width", `${width}px`);
      cb.tag.setAttribute("height", `${height}px`);
      cb.tag.style.opacity = "0";
      cb.tag.style.width = `${width}px`;
      cb.tag.style.height = `${height}px`;
    }
    if (bytes && bytes.length) {
      const blob = fromCached(bytes);
      const url = window.URL.createObjectURL(blob);
      cb.tag.setAttribute("src", url);
      cb.tag.style.opacity = "1";
      cb.tag.style.filter = "blur(4px)";
    }

    let o = { disposer, cb, photo, found, img: cb, done: () => {} };
    queue.add(o);
    o.done = disposer(() => queue.delete(o));
    if (this.loading < maxLoading) {
      requestAnimationFrame(() => {
        if (this.loading < maxLoading) {
          this.fetchLoadPhoto();
        }
      });
    }
  }
  async fetchLoadPhoto() {
    let o = queue.values().next().value;
    if (!o) return;
    this.loading++;
    queue.delete(o);
    let { photo, found, img, done } = o;

    let bytes: number[] = [];
    let offset = 0;
    let res: UploadFileT | RpcErrorS;
    let receiveSize = 0;
    do {
      res = await CallUploadGetFileM(
        this.props.apiInvoker.connection(photo.get_dc_id()),
        new UploadGetFileM()
          .set_limit(CHUNK)
          .set_offset(offset)
          .set_location(
            new InputPhotoFileLocationS()
              .set_access_hash(photo.get_access_hash())
              .set_file_reference(photo.get_file_reference())
              .set_thumb_size(found)
              .set_id(photo.get_id())
          )
      );
      offset += CHUNK;
      receiveSize = 0;
      if (res instanceof UploadFileS) {
        bytes = [...bytes, ...res.get_bytes()];
        receiveSize = res.get_bytes().length;
      }
    } while (
      res instanceof UploadFileS &&
      res.get_type() instanceof StorageFilePartialS &&
      receiveSize === CHUNK
    );
    if (res instanceof RpcErrorS) {
      done();
      this.loading--;
      if (queue.size) this.fetchLoadPhoto();
      return;
    }
    if (res instanceof UploadFileCdnRedirectS) {
      // r.get_file_hashes().
      await this.loadPhotoCDN(o, res.get_dc_id(), res.get_file_token(), photo);
      return;
    }
    done();
    this.loading--;
    if (queue.size) this.fetchLoadPhoto();
    this.appendPhoto(img, new Uint8Array(bytes));
  }

  private async loadPhotoCDN(
    o: QItem,
    dc: number,
    fileToken: Uint8Array,
    _photo: PhotoS
  ) {
    let bytes: number[] = [];
    let offset = 0;
    let res: UploadCdnFileT | RpcErrorS;
    do {
      res = await CallUploadGetCdnFileM(
        this.props.apiInvoker.connection(dc),
        new UploadGetCdnFileM()
          .set_file_token(fileToken)
          .set_limit(CHUNK)
          .set_offset(offset)
      );
      offset += CHUNK;
      if (res instanceof UploadCdnFileS) bytes = [...bytes, ...res.get_bytes()];
    } while (res instanceof UploadCdnFileS && res.get_bytes().length === MB);
    o.done();
    this.loading--;
    if (queue.size) this.fetchLoadPhoto();
    if (res instanceof RpcErrorS) {
      return;
    }
    if (res instanceof UploadCdnFileReuploadNeededS) {
      // r.get_file_hashes().
      // this.loadPhoto(disposer, img, _photo);
      return;
    }

    // photoCache.set(key, photo.get_bytes());
    this.appendPhoto(o.img, new Uint8Array(bytes));
  }

  private appendPhoto(img: Tag<HTMLImageElement>, bytes: Uint8Array) {
    const blob = new Blob([bytes]);
    const url = window.URL.createObjectURL(blob);
    img.tag.setAttribute("src", url);
    requestAnimationFrame(() => {
      img.tag.style.opacity = "1";
      img.tag.style.filter = "blur(0px)";
    });
  }
}
//         MessageMediaEmptyS
//   | MessageMediaPhotoS
//   | MessageMediaGeoS
//   | MessageMediaContactS
//   | MessageMediaUnsupportedS
//   | MessageMediaDocumentS
//   | MessageMediaWebPageS
//   | MessageMediaVenueS
//   | MessageMediaGameS
//   | MessageMediaInvoiceS
//   | MessageMediaGeoLiveS
//   | MessageMediaPollS;

function fromCached(bytes: Uint8Array) {
  if (bytes.length < 3 || bytes[0] !== 1)
    return new Blob([bytes], { type: "image/jpeg" });
  let buf = [...jpegHeader, ...bytes.slice(3), ...jpegFooter];
  buf[164] = bytes[1];
  buf[166] = bytes[2];
  return new Blob([new Uint8Array(buf)], { type: "image/jpeg" });
}
// if len(stripped) < 3 or stripped[0] != 1:
// return stripped

const jpegHeader = '\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00\xff\xdb\x00C\x00(\x1c\x1e#\x1e\x19(#!#-+(0<dA<77<{X]Id\x91\x80\x99\x96\x8f\x80\x8c\x8a\xa0\xb4\xe6\xc3\xa0\xaa\xda\xad\x8a\x8c\xc8\xff\xcb\xda\xee\xf5\xff\xff\xff\x9b\xc1\xff\xff\xff\xfa\xff\xe6\xfd\xff\xf8\xff\xdb\x00C\x01+--<5<vAAv\xf8\xa5\x8c\xa5\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xf8\xff\xc0\x00\x11\x08\x00\x00\x00\x00\x03\x01"\x00\x02\x11\x01\x03\x11\x01\xff\xc4\x00\x1f\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\xff\xc4\x00\xb5\x10\x00\x02\x01\x03\x03\x02\x04\x03\x05\x05\x04\x04\x00\x00\x01}\x01\x02\x03\x00\x04\x11\x05\x12!1A\x06\x13Qa\x07"q\x142\x81\x91\xa1\x08#B\xb1\xc1\x15R\xd1\xf0$3br\x82\t\n\x16\x17\x18\x19\x1a%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz\x83\x84\x85\x86\x87\x88\x89\x8a\x92\x93\x94\x95\x96\x97\x98\x99\x9a\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xff\xc4\x00\x1f\x01\x00\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\xff\xc4\x00\xb5\x11\x00\x02\x01\x02\x04\x04\x03\x04\x07\x05\x04\x04\x00\x01\x02w\x00\x01\x02\x03\x11\x04\x05!1\x06\x12AQ\x07aq\x13"2\x81\x08\x14B\x91\xa1\xb1\xc1\t#3R\xf0\x15br\xd1\n\x16$4\xe1%\xf1\x17\x18\x19\x1a&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x92\x93\x94\x95\x96\x97\x98\x99\x9a\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xff\xda\x00\x0c\x03\x01\x00\x02\x11\x03\x11\x00?\x00'
  .split("")
  .map(v => v.charCodeAt(0));
const jpegFooter = "\xff\xd9".split("").map(v => v.charCodeAt(0));
// header[164] = stripped[1]
// header[166] = stripped[2]
// return bytes(header) + stripped[3:] + footer

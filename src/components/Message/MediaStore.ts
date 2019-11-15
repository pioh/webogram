import { ApiInvoker } from "api/ApiInvoker";
import {
  CallPhotosUploadProfilePhotoM,
  CallUploadGetFileM,
  InputPhotoFileLocationS,
  MessageMediaPhotoS,
  MessageS,
  PhotoEmptyS,
  PhotoS,
  PhotosUploadProfilePhotoM,
  UploadGetFileM
} from "api/generator/ApiShema.gen";
import { ChatStore } from "components/Chat/ChatStore";

export interface IMediaStoreProps {
  message: MessageS;
  chatStore: ChatStore;
  apiInvoker: ApiInvoker;
}

export class MediaStore {
  props: IMediaStoreProps;
  constructor(props: IMediaStoreProps) {
    this.props = props;
  }
  photo() {
    let type = this.props.message.get_media();
    if (!(type instanceof MessageMediaPhotoS)) return null;
    let photo = type.get_photo();
    if (photo instanceof PhotoEmptyS) return null;
    return photo;
  }

  async loadPhoto(tag: HTMLElement, photo: PhotoS) {
    let sizes = photo.get_sizes().get_values();
    // for (let photo of sizes) {

    // }

    await CallUploadGetFileM(
      this.props.apiInvoker,
      new UploadGetFileM().set_limit(1024 * 1024 * 10).set_location(
        new InputPhotoFileLocationS()
          .set_access_hash(photo.get_access_hash())
          .set_file_reference(photo.get_file_reference())
          .set_id(photo.get_id())
        //   .set_thumb_size()
      )
    );
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

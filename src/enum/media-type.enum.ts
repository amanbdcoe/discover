export enum MediaType {
  MOVIE = "movie",
  TV = "tv"
}

export class MediaTypeEnumUtils {
  static getMediaTypeTitle(mediaType: MediaType): string {
    const mType = mediaType.toString();
    return mType.charAt(0).toUpperCase() + mType.slice(1)
  }
}

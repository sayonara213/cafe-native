export interface IEditInitialValues {
  username: string;
  email: string;
  phone: string;

  [key: string]: string;
}

export interface IGalleryOptions {
  mediaType: 'photo' | 'video';
  selectionLimit: number;
  includeBase64: boolean;
}

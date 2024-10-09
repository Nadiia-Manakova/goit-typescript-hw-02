export interface ImageItem {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string | null;
}

export interface ImageGalleryProps {
  items: ImageItem[];
  onOpenModal: (url: string) => void;
}

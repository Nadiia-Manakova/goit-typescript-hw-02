export interface ImageCardProps {
  url: string;
  alt: string;
  link?: string;
  onClick?: () => void;
}

export interface ImageData {
  id: string;
  url: string;
  alt: string;
}

export interface ApiResponse {
  images: ImageData[];
}

export interface ImageSearchState {
  images: ImageData[];
  isLoading: boolean;
  error: string | null;
}

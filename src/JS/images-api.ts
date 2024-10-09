import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "0386rkY-S1KlZPrziZdIWT7g3iIU2_BhA6_kAajp7bc",
});

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string | null;
}

interface FetchImagesResponse {
  images: UnsplashImage[];
  total: number;
}

export const fetchImagesWithTopic = async (
  topic: string,
  page: number = 1,
  perPage: number = 10
): Promise<FetchImagesResponse> => {
  try {
    const response = await unsplash.search.getPhotos({
      query: topic,
      page: page,
      perPage: perPage,
    });

    if (response.response) {
      return {
        images: response.response.results,
        total: response.response.total,
      };
    } else {
      throw new Error("No response from Unsplash API");
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

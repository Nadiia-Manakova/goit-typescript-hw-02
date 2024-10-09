import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "0386rkY-S1KlZPrziZdIWT7g3iIU2_BhA6_kAajp7bc",
});

export const fetchImagesWithTopic = async (topic, page = 1, perPage = 10) => {
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

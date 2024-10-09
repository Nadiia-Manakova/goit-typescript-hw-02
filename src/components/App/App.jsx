import React, { useState } from "react";
import Notiflix from "notiflix";
import { fetchImagesWithTopic } from "../../JS/images-api";

import { ImageGallery } from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import { ImageModal } from "../ImageModal/ImageModal";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [totalImages, setTotalImages] = useState(0);

  const handleSearch = async (searchTopic) => {
    setImages([]);
    setPage(1);
    setTopic(searchTopic);
    loadImages(searchTopic, 1);
  };

  const loadImages = async (searchTopic, pageNumber) => {
    try {
      setLoading(true);
      setError(null);

      const { images, total } = await fetchImagesWithTopic(
        searchTopic,
        pageNumber
      );

      if (images.length === 0 && pageNumber === 1) {
        Notiflix.Notify.failure(
          "Sorry, there are no images matching your search query. Please try again.",
          { position: "center-center" }
        );
      } else {
        setImages((prevImages) => [...prevImages, ...images]);
        setTotalImages(total); // Обновляем общее количество изображений
      }
    } catch (error) {
      setError(error.message);
      Notiflix.Notify.failure(
        "Whoops, something went wrong! Please try reloading this page!",
        { position: "center-center" }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadImages(topic, nextPage);
  };

  const openModal = (imageData) => {
    setModalData(imageData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <section className={css.section}>
        <h1>Your Amazing Images</h1>
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {images.length > 0 && (
          <>
            <ImageGallery items={images} onOpenModal={openModal} />
            {images.length < totalImages && (
              <LoadMoreBtn onClick={handleLoadMore} />
            )}
          </>
        )}
        {modalIsOpen && (
          <ImageModal
            modalIsOpen={modalIsOpen}
            onRequestClose={closeModal}
            data={modalData}
          />
        )}
      </section>
    </div>
  );
};

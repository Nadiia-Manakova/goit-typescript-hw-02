import React from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items, onOpenModal }) => (
  <ul className={css.imageGallery}>
    {items.map(({ id, urls, alt_description }) => (
      <li key={id} className={css.imageGalleryItem}>
        <ImageCard
          url={urls.small}
          alt={alt_description}
          link={urls.full}
          onClick={() => onOpenModal(urls.full)}
        />
      </li>
    ))}
  </ul>
);

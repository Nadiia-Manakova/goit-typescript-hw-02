import React from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

export const ImageCard: React.FC<ImageCardProps> = ({
  url,
  alt,
  link,
  onClick,
}) => (
  <div className={css.imageCard}>
    <img className={css.image} src={url} alt={alt} onClick={onClick} />
  </div>
);

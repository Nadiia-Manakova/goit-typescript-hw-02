import React from "react";
import Modal from "react-modal";
import { TfiClose } from "react-icons/tfi";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

export const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  onRequestClose,
  data,
}) => {
  const customStyles = {
    content: {
      width: "100%",
      maxWidth: "1280px",
      height: " 100%",
      maxHeight: "800px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      overflow: "hidden",
      borderRadius: "10px",
    },
    overlay: {
      backgroundColor: "rgba(54, 37, 59, 0.5)",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <button onClick={onRequestClose} className={css.closeModalBtn}>
        <TfiClose />
      </button>
      {data ? (
        <img className={css.imageLarge} src={data} alt="" />
      ) : (
        <p>No image available</p>
      )}
    </Modal>
  );
};

import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "0",
    padding: "0",
    backgroundColor: "transparent",
    pointerEvents: "none",
  },
};

Modal.setAppElement("body");

const ImageModal = ({ image, closeModal }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

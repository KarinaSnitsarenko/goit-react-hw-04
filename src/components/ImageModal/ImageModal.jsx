import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, bigImage, imageDescription, onClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={css.modalContent}
    overlayClassName={css.modalOverlay}
  >
    <div>
      <img src={bigImage} alt={imageDescription} />
      <div className={css.modalInfo}>
        <p>{imageDescription}</p>
      </div>
    </div>
  </Modal>
);

export default ImageModal;

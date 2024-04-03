import css from "./ImageCard.module.css";

const ImageCard = ({ image, onOpen }) => (
  <div className={css.contimg}>
    <img
      className={css.img}
      onClick={() =>
        onOpen({
          isModalOpen: true,
          bigImage: image.urls.regular,
          imageDescription: image.alt_description,
        })
      }
      src={image.urls.small}
      alt={image.alt_description}
    />
  </div>
);

export default ImageCard;

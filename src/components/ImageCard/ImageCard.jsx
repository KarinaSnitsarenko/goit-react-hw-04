import css from "./ImageCard.module.css";

const ImageCard = ({ image, onOpen }) => (
  <div>
    <img
      className={css.img}
      onClick={() =>
        onOpen({
          isOpen: true,
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

import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul className={css.galleryList}>
    {images.map((image, index) => (
      <li className={css.galleryListItem} key={image.id + index}>
        <ImageCard image={image} onOpen={() => openModal(image)} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;

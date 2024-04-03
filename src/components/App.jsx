import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import getImages from "./getImages";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [hasMore, setHasMore] = useState(0);

  async function searchImages(inputValue) {
    setQuery(`${Date.now()}/${inputValue}`);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const response = await getImages(query, page);
        const data = response.data;
        if (!data.results.length) {
          toast.error("Oops, something went wrong. Give it another shot.", {
            position: "top-right",
          });
        }
        setImages((prevImages) => [...prevImages, ...data.results]);
        setHasMore(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSearch={searchImages} />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {selectedImage && (
            <ImageModal
              isOpen={selectedImage.isModalOpen}
              bigImage={selectedImage.bigImage}
              imageDescription={selectedImage.imageDescription}
              onClose={closeModal}
            />
          )}
          {images.length > 0 && !loading && hasMore > page && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </div>
  );
};

export default App;

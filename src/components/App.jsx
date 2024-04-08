import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar/SearchBar.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import getImages from "./getImages";
import ImageModal from "./ImageModal/ImageModal.jsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      try {
        setLoading(true);
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setError(false);
        setHasMore(data.total_pages > 1);
      } catch (error) {
        setError(true);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setSelectedImage(null);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {error && <ErrorMessage />}
      {images && <ImageGallery images={images} openModal={openModal} />}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          closeModal={() => setSelectedImage(null)}
        />
      )}
      {loading && <Loader />}
      {hasMore && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  );
}

export default App;

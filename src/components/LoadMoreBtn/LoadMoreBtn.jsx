import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.loadMore}>
      <button onClick={onLoadMore} className={css.loadMoreButton} type="button">
        Load more ⬇️
      </button>
    </div>
  );
};

export default LoadMoreBtn;

import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

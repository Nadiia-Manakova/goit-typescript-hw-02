import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

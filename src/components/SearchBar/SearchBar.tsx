import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const topic = form.elements.namedItem("topic") as HTMLInputElement;

    if (topic.value.trim() === "") {
      toast("Please enter search term!");
      return;
    }

    onSearch(topic.value.trim());
    form.reset();
  };

  return (
    <header>
      <form className={css.section} onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          placeholder="Search images and photos"
          className={css.formField}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <Toaster
        toastOptions={{
          style: {
            marginTop: "50px",
          },
        }}
      />
    </header>
  );
};

export default SearchBar;

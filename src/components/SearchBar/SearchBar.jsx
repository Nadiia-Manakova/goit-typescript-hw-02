import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      toast("Please enter search term!");
      return;
    }

    onSearch(topic);
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
}

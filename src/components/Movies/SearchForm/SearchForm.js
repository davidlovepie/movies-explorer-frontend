import "./SearchForm.css";
import { FilterCheckbox } from "../../FilterCheckbox/FilterCheckbox";

export const SearchForm = () => {
  return (
    <section className="search-form">
      <form class="search-form__search">
        <div className="search-form__container">
        <label class="search-form__label">
          <input
            class="search-form__input"
            placeholder="Фильм"
            required
          ></input>
        </label>
        <button type="submit" class="search-form__button">
          Найти
        </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};

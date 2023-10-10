import "./SearchForm.css";
import { FilterCheckbox } from "../../FilterCheckbox/FilterCheckbox";

export const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__search">
        <label className="search-form__label">
          <input className="search-form__input" placeholder="Фильм" required></input>
          <button className="search-form__button">Найти</button>
        </label>
        <FilterCheckbox />
      </form>
    </section>
  );
};

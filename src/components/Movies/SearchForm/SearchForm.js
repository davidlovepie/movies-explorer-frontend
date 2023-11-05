import "./SearchForm.css";
import { FilterCheckbox } from "../../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const SearchForm = ({
  handleSearch,
  handleCheckBox,
  flag,
  isShorts,
}) => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState(
    location.pathname === "/movies"
      ? localStorage.getItem("moviesQuery")
      : localStorage.getItem("savedMoviesQuery")
  );

  useEffect(() => {
    if (localStorage.getItem("moviesQuery") && flag) {
      setSearchValue(localStorage.getItem("moviesQuery"));
    }
    if (localStorage.getItem("savedMoviesQuery") && !flag) {
      setSearchValue(localStorage.getItem("savedMoviesQuery"));
    }
  }, []);
  return (
    <section className="search-form">
      <form
        className="search-form__search"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchValue);
        }}
      >
        <div className="search-form__container">
          <label className="search-form__label">
            <input
              className="search-form__input"
              placeholder="Фильм"
              required
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                flag
                  ? localStorage.setItem("moviesQuery", e.target.value)
                  : localStorage.setItem("savedMoviesQuery", e.target.value);
              }}
            ></input>
          </label>
          <button type="submit" className="search-form__button">
            Найти
          </button>
        </div>
        <FilterCheckbox handleCheckBox={handleCheckBox} isShorts={isShorts} />
      </form>
    </section>
  );
};

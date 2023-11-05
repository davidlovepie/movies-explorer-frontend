import "./SavedMovies.css";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const SavedMovies = ({
  movies,
  shortMovies,
  savedMovies,
  like,
  deleteLike,
  setSavedMovies,
}) => {
  const [searchedMovies, setSearchedMovies] = useLocalStorage(
    "searchedSavedMovies",
    movies
  );
  const [shorts, setShorts] = useLocalStorage("searchedShortSavedMovies", []);
  const [isShorts, setIsShorts] = useLocalStorage("checkbox", "");
  const [error, setError] = useState("");

  function filterMovies(searchValue) {
    const filteredShortMovies = shortMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
    );
    localStorage.setItem(
      "searchedShortSavedMovies",
      JSON.stringify(filteredShortMovies)
    );
    setShorts(filteredShortMovies);

    if (movies.length !== 0) {
      const filteredMovies = movies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
      );
      localStorage.setItem(
        "searchedSavedMovies",
        JSON.stringify(filteredMovies)
      );
      filteredMovies.length === 0 && setError("Ничего не найдено");
      filteredMovies.length !== 0 && setError("");
      setSearchedMovies(filteredMovies);
    }
  }
  function handleSearch(searchValue) {
    filterMovies(searchValue);
  }

  function handleCheckBox(flag) {
    flag
      ? localStorage.setItem("checkbox", true)
      : localStorage.setItem("checkbox", "");
    setIsShorts(flag);
    handleSearch(localStorage.getItem("moviesQuery") || "");
  }

  useEffect(() => {
    setSearchedMovies(movies);
  }, [movies]);

  useEffect(() => {
    setSearchedMovies(JSON.parse(localStorage.getItem("searchedSavedMovies")));
  }, [isShorts]);
  return (
    <main className="movies">
      <div className="movies__content">
        <SearchForm
          handleSearch={handleSearch}
          handleCheckBox={handleCheckBox}
          flag={false}
          isShorts={isShorts}
        />
        {error && <p className="movies__error">{error}</p>}
        {!error && (
          <MoviesCardList
            movies={isShorts ? shorts : searchedMovies}
            savedMovies={savedMovies}
            like={like}
            deleteLike={deleteLike}
            setSavedMovies={setSavedMovies}
          />
        )}
      </div>
    </main>
  );
};

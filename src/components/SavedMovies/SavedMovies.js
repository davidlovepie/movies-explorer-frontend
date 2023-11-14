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
  setStatus,
  setIsOpen,
  error,
  setError,
  shortError,
  setShortError,
}) => {
  const [searchedMovies, setSearchedMovies] = useState(movies);
  const [shorts, setShorts] = useState(
    movies.filter((movie) => movie.duration < 40)
  );
  const [isShorts, setIsShorts] = useState(false);
  const [saveQuery, setSaveQuery] = useState("");

  function filterMovies(searchValue) {
    const filteredShortMovies = movies
      .filter((movie) => movie.duration < 40)
      .filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(saveQuery.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(saveQuery.toLowerCase())
      );
    filteredShortMovies.length === 0 && setShortError("Ничего не найдено");
    filteredShortMovies.length !== 0 && setShortError("");
    setShorts(filteredShortMovies);
    if (movies.length !== 0) {
      const filteredMovies = movies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
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
    setIsShorts(flag);
    handleSearch(saveQuery || "");
  }

  useEffect(() => {
    searchedMovies.length > 0 && setError("");
  }, [searchedMovies]);

  useEffect(() => {
    shorts.length > 0 && setShortError("");
  }, [shorts]);

  useEffect(() => {
    saveQuery ? filterMovies(saveQuery) : setSearchedMovies(movies);
  }, [movies]);

  useEffect(() => {
    saveQuery ? filterMovies(saveQuery) : setShorts(shortMovies);
  }, [shortMovies]);

  useEffect(() => {
    setShorts(searchedMovies.filter((movie) => movie.duration < 40));
  }, [isShorts]);

  return (
    <main className="movies">
      <div className="movies__content">
        <SearchForm
          handleSearch={handleSearch}
          handleCheckBox={handleCheckBox}
          flag={false}
          isShorts={isShorts}
          saveQuery={saveQuery}
          setSaveQuery={setSaveQuery}
        />
        {!isShorts ? (
          error ? (
            <p className="movies__error">{error}</p>
          ) : (
            <MoviesCardList
              movies={searchedMovies || movies}
              savedMovies={savedMovies}
              like={like}
              deleteLike={deleteLike}
              setSavedMovies={setSavedMovies}
              setStatus={setStatus}
              setIsOpen={setIsOpen}
            />
          )
        ) : shortError ? (
          <p className="movies__error">{shortError}</p>
        ) : (
          <MoviesCardList
            movies={shorts}
            savedMovies={savedMovies}
            like={like}
            deleteLike={deleteLike}
            setSavedMovies={setSavedMovies}
            setStatus={setStatus}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </main>
  );
};

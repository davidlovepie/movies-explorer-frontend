import "./Movies.css";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Movies = ({
  movies,
  like,
  shortMovies,
  savedMovies,
  deleteLike,
  setSavedMovies,
  setStatus,
  setIsOpen,
}) => {
  const [searchedMovies, setSearchedMovies] = useState(JSON.parse(localStorage.getItem("searchedMovies" || [])));
  const [shorts, setShorts] = useState(JSON.parse(localStorage.getItem("searchedShortMovies" || [])));
  const [isShorts, setIsShorts] = useState(localStorage.getItem("checkbox") || "");
  const [error, setError] = useState("");
  function filterMovies(searchValue) {
    if (searchValue) {
      const filteredShortMovies = shortMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
      );
      localStorage.setItem(
        "searchedShortMovies",
        JSON.stringify(filteredShortMovies)
      );
      setShorts(filteredShortMovies);
    }
    if (searchValue) {
      if (movies.length !== 0) {
        const filteredMovies = movies.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
        );
        localStorage.setItem("searchedMovies", JSON.stringify(filteredMovies));
        setSearchedMovies(filteredMovies);
        filteredMovies.length === 0 && setError("Ничего не найдено");
        filteredMovies.length !== 0 && setError("");
      }
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
    handleSearch(localStorage.getItem("moviesQuery"));
  }

  useEffect(() => {
    if (isShorts) {
      setSearchedMovies((prev) => {
        const filteredShortMovies = prev.filter((film) => film.duration < 40);
        if (filteredShortMovies.length === 0) {
          setError("Ничего не найдено");
        } else {
          setError("");
        }
        return filteredShortMovies;
      });
    } else {
      setSearchedMovies(
        JSON.parse(localStorage.getItem("searchedMovies")) || []
      );
    }
  }, [isShorts]);

  return (
    <main className="movies">
      <div className="movies__content">
        <SearchForm
          handleSearch={handleSearch}
          handleCheckBox={handleCheckBox}
          flag={true}
          isShorts={isShorts}
        />
        {error && <p className="movies__error">{error}</p>}
        {!error && (
          <MoviesCardList
            movies={isShorts ? shorts : searchedMovies}
            like={like}
            savedMovies={savedMovies}
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

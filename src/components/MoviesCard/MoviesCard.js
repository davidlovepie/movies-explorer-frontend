import { useState, useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const MoviesCard = ({
  link,
  title,
  duration,
  like,
  card,
  savedMovies,
  deleteLike,
  setSavedMovies,
  setStatus,
  setIsOpen,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const location = useLocation();

  function deleteSavedCard() {
    deleteLike(card._id);
    setSavedMovies((prev) =>
      prev.filter((savedMovie) => savedMovie._id !== card._id)
    );
  }

  function likeMovie() {
    if (isLiked) {
      deleteLike(movieId);
      setSavedMovies((prev) =>
        prev.filter((savedMovie) => savedMovie._id !== movieId)
      );
      setIsLiked((prev) => !prev);
    } else {
      like(card)
        .then((res) => {
          if (!res.data) {
            throw new Error(404);
          }
          setSavedMovies((prev) => [...prev, res.data]);
          setIsLiked((prev) => !prev);
        })
        .catch((err) => {
          console.log("catch", err);
          setStatus(false);
          setIsOpen(true);
        });
    }
  }

  useEffect(() => {
    const isCardLiked = savedMovies.some(
      (savedMovie) => savedMovie.movieId === card.id
    );

    setIsLiked(isCardLiked);

    const foundMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === card.id
    );
    if (foundMovie) {
      setMovieId(foundMovie._id);
    }
  }, [savedMovies, card.id]);
  return (
    <li className="moviescard">
      <Link to={card.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="moviescard__image" src={link} alt={title} />{" "}
      </Link>
      <div className="moviescard__info">
        <h2 className="moviescard__title">{title}</h2>
        <div className="moviescard__like-counter">
          {location.pathname === "/movies" && (
            <button
              type="button"
              className={`moviescard__like-button ${
                isLiked ? "moviescard__like-button_active" : ""
              }`}
              onClick={likeMovie}
            ></button>
          )}{" "}
          {location.pathname === "/saved-movies" && (
            <button
              type="button"
              className={`moviescard__delete-button`}
              onClick={deleteSavedCard}
            ></button>
          )}
        </div>
      </div>
      <div className="moviescard__duration">{duration}</div>
    </li>
  );
};

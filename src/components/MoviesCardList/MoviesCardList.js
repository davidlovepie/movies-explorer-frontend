import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { minutesToHoursAndMinutes } from "../../utils/helpers";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { getCardsToAdd } from "../../utils/helpers";

export const MoviesCardList = ({
  movies,
  like,
  savedMovies,
  deleteLike,
  setSavedMovies,
  setStatus,
  setIsOpen,
}) => {
  const location = useLocation();
  const [cardsToAdd, setCardsToAdd] = useState(4);
  const { width } = useWindowSize();
  useEffect(() => {
    function updateCardsToAdd() {
      if (width >= 1280) {
        setCardsToAdd(4);
      } else if (width >= 768) {
        setCardsToAdd(2);
      } else if (width >= 320) {
        setCardsToAdd(1);
      }
    }

    updateCardsToAdd();
    window.addEventListener("resize", updateCardsToAdd);

    return () => {
      window.removeEventListener("resize", updateCardsToAdd);
    };
  }, []);

  const showMoreCards = () => {
    setCardsToAdd(cardsToAdd + 1);
  };
  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__list">
        {movies &&
          movies
            .filter((_, index) => index < cardsToAdd * getCardsToAdd(width))
            .map((movieCard) => (
              <MoviesCard
                key={movieCard._id}
                link={`https://api.nomoreparties.co/${
                  location.pathname === "/saved-movies"
                    ? movieCard.image
                    : movieCard.image.url
                }`}
                title={movieCard.nameRU}
                duration={minutesToHoursAndMinutes(movieCard.duration)}
                like={like}
                card={movieCard}
                savedMovies={savedMovies}
                deleteLike={deleteLike}
                setSavedMovies={setSavedMovies}
                movies={movieCard.image}
                setStatus={setStatus}
                setIsOpen={setIsOpen}
              />
            ))}
      </ul>
      {movies && cardsToAdd * getCardsToAdd(width) < movies.length && (
        <button
          type="button"
          className="moviescardlist__more"
          onClick={showMoreCards}
        >
          Ещё
        </button>
      )}
    </section>
  );
};

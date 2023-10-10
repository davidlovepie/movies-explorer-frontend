import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = ({ initialMovies }) => {
  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__list">
        {initialMovies.map((movieCard, id) => (
          <MoviesCard
            key={id}
            link={movieCard.link}
            title={movieCard.title}
            duration={movieCard.duration}
            isLiked={movieCard.isLiked}
          />
        ))}
      </ul>
      {initialMovies.length ? (
        <button type="button" className="moviescardlist__more">Ещё</button>
      ) : (
        ""
      )}
    </section>
  );
};

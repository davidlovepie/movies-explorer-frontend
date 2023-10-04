import "./MoviesCard.css";

export const MoviesCard = ({ link, title, duration, isLiked }) => {
  return (
    <li className="moviescard">
      <img className="moviescard__image" src={link} alt={title} />
      <div className="moviescard__info">
        <h2 className="moviescard__title">{title}</h2>
        <div className="moviescard__like-counter">
          <button
            type="button"
            className={`moviescard__like-button ${
              isLiked ? "moviescard__like-button_active" : ""
            }`}
          ></button>
        </div>
      </div>
      <div className="moviescard__duration">{duration}</div>
    </li>
  );
};

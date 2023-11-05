import { Link } from "react-router-dom";
import "./NavigationBurger.css";
export const NavigationBurger = () => {
  return (
    <nav className="burger-links">
      <Link className="burger-links__movies" to="/movies">
        Фильмы
      </Link>
      <Link className="burger-links__movies" to="/saved-movies">
        Сохраненные фильмы
      </Link>
    </nav>
  );
};

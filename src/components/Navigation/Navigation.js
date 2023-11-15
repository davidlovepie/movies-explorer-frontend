import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="links">
      <Link
        className={`links__movies ${
          location.pathname !== "/" ? "links__movies_black" : ""
        } ${location.pathname === "/movies" ? "links__movies_active" : ""}`}
        to="/movies"
      >
        Фильмы
      </Link>
      <Link
        className={`links__movies ${
          location.pathname !== "/" ? "links__movies_black" : ""
        } ${
          location.pathname === "/saved-movies" ? "links__movies_active" : ""
        }`}
        to="/saved-movies"
      >
        Сохраненные фильмы
      </Link>
    </nav>
  );
};

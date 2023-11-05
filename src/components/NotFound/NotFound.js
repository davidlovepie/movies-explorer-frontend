import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <main className="notfound">
      <div className="notfound__text">
        <h1 className="notfound__title">404</h1>
        <h2 className="notfound__subtitle">Страница не найдена</h2>
      </div>
      <Link className="notfound__link" to="/">
        Назад
      </Link>
    </main>
  );
};

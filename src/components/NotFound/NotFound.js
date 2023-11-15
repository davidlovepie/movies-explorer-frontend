import { useNavigate} from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="notfound">
      <div className="notfound__text">
        <h1 className="notfound__title">404</h1>
        <h2 className="notfound__subtitle">Страница не найдена</h2>
      </div>
      <button className="notfound__link" onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
};

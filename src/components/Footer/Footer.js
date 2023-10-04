import { Link } from "react-router-dom";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
      <div className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__info">
        <div className="footer__copyright">© 2023</div>
        <div className="footer__links">
          <Link
            className="footer__link"
            to="https://practicum.yandex.ru/"
          >Яндекс.Практикум</Link>
          <Link
            className="footer__link"
            to="https://github.com/davidlovepie"
          >Github</Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

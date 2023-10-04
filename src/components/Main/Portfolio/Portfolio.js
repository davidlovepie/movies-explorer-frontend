import { Link } from "react-router-dom";
import "./Portfolio.css";
import face from "../../../images/face.png";
import useMediaQueries from "../../../hooks/useMediaQueries";

export const Portfolio = () => {
  const { md, lg } = useMediaQueries();
  if (lg) {
    return (
      <section className="portfolio">
        <div className="portfolio__content">
          <h2 className="portfolio__title">Студент</h2>
          <div className="portfolio__wrapper">
            <div className="portfolio__texts">
              <h3 className="portfolio__content-title">Виталий</h3>
              <h4 className="portfolio__subtitle">
                Фронтенд-разработчик, 30 лет
              </h4>
              <p className="portfolio__text">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
              <Link
                className="portfolio__link"
                to="https://github.com/davidlovepie"
              >
                GitHub
              </Link>
            </div>
            <img className="portfolio__image" src={face} alt="Лого из слов" />
          </div>
          <div className="portfolio__links">
            <h3 className="portfolio__links-title">Портфолио</h3>
            <div className="portfolio__link-webs">
              <Link className="portfolio__link-string" to="https://davidlovepie.github.io/russian-travel/">Статичный сайт</Link>
              <Link className="portfolio__link-arrow" to="https://davidlovepie.github.io/russian-travel/"></Link>
            </div>
            <div className="portfolio__link-webs">
              <Link className="portfolio__link-string" to="https://davidlovepie.github.io/russian-travel/">Адаптивный сайт</Link>
              <Link className="portfolio__link-arrow" to="https://davidlovepie.github.io/russian-travel/"></Link>
            </div>
            <div className="portfolio__link-webs">
              <Link className="portfolio__link-string" to="https://davidlovepie.github.io/russian-travel/">Одностраничное приложение</Link>
              <Link className="portfolio__link-arrow" to="https://davidlovepie.github.io/russian-travel/"></Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Студент</h2>
        <div className="portfolio__wrapper">
          <img className="portfolio__image" src={face} alt="Лого из слов" />
          <div className="portfolio__texts">
            <h3 className="portfolio__content-title">Виталий</h3>
            <h4 className="portfolio__subtitle">
              Фронтенд-разработчик, 30 лет
            </h4>
            <p className="portfolio__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link
              className="portfolio__link"
              to="https://github.com/davidlovepie"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="portfolio__links">
            <h3 className="portfolio__links-title">Портфолио</h3>
            <div className="portfolio__link-webs">
              <Link className="portfolio__link-string" to="https://davidlovepie.github.io/russian-travel/">Статичный сайт</Link>
              <Link className="portfolio__link-arrow" to=""></Link>
            </div>
            <div className="portfolio__link-webs">
              <Link className="portfolio__link-string" to="https://davidlovepie.github.io/russian-travel/">Адаптивный сайт</Link>
              <Link className="portfolio__link-arrow" to="https://davidlovepie.github.io/russian-travel/"></Link>
            </div>
            <div className="portfolio__link-webs">
              <Link className="portfolio__link-string" to="https://davidlovepie.github.io/russian-travel/">Одностраничное приложение</Link>
              <Link className="portfolio__link-arrow" to="https://davidlovepie.github.io/russian-travel/"></Link>
            </div>
          </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import "./Promo.css";
import wordslogo from '../../../images/wordslogo.png';
import useMediaQueries from "../../../hooks/useMediaQueries";
import { HashLink } from 'react-router-hash-link';



export const Promo = () => {
  const { md, lg } = useMediaQueries();
  
  if (lg) {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__texts">
          <h1 className="promo__title">Учебный проект студента факультета <span className="promo__span">Веб-разработки.</span></h1>
          <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
          <HashLink className="promo__link" smooth to='/#about' > Узнать больше </HashLink>
        </div>
        <img className="promo__image" src={ wordslogo } alt="Лого из слов"/>
      </div>
    </section>
  );
};
  return (
    <section className="promo">
    <div className="promo__content">
    <img className="promo__image" src={ wordslogo } alt="Лого из слов"/>
      <div className="promo__texts">
        <h1 className="promo__title">Учебный проект студента факультета <span className="promo__span">Веб-разработки.</span></h1>
        <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
        <HashLink className="promo__link" smooth to='/#about' > Узнать больше </HashLink>
      </div>
    </div>
  </section>
  )

}

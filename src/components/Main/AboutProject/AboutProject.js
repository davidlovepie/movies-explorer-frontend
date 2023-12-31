import { NavTab } from "../NavTab/NavTab";
import "./AboutProject.css";

export const AboutProject = () => {
  return (
    <section className="about-project" id="about">
      <div className="about-project__content">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__texts">
          <div className="about-project__text-container">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__text-container">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <NavTab />
      </div>
    </section>
  );
};

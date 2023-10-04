import { Link } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";
import headerlogo from "./../../images/headerlogo.svg";

export const Profile = () => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  return (
    <div className={`profile`}>
      <div className={`profile__container`}>
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" name={"form"}>
          <fieldset className="profile__info">
            <div className="profile__info-row">
              <span className="profile__input-name">Имя</span>
              <input
                className={`profile__input ${
                  !password && "profile__input-error_active"
                }`}
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="200"
                onChange={(e) => setPassword(e.target.validity.valid)}
                // onChange={handlePassword}
                value={"Виталий"}
              />
            </div>
            <div className="profile__info-row">
              <span className="profile__input-name">E-mail</span>
              <input
                className={`profile__input ${
                  !email && "profile__input-error_active"
                }`}
                name="email"
                type="email"
                required
                minLength="2"
                maxLength="40"
                onChange={(e) => setEmail(e.target.validity.valid)}
                // onChange={handleEmail}
                value={"pochta@yandex.ru"}
              />
            </div>
          </fieldset>
          <div className="profile__buttons">
          <button className={`profile__submit`} type="submit">
          Редактировать
          </button>
            <Link className="profile__small-text" to={"/signin"}>
            Выйти из аккаунта
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";
import headerlogo from "./../../images/headerlogo.svg";

export const Profile = () => {
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [emailError, setEmailError] = useState(true);
  const [nameError, setNameError] = useState(true);
  const [name, setName] = useState('Виталий');

  function handleName(e) {
    setNameError(e.target.validity.valid)
    setName(e.target.value)
  }

  function handleEmail(e) {
    setEmailError(e.target.validity.valid)
    setEmail(e.target.value)
  }
  return (
    <main className={`profile`}>
      <section className={`profile__container`}>
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name={"form"}>
          <fieldset className="profile__info">
            <div className="profile__info-row">
              <label className="profile__input-name">Имя</label>
              <input
                className={`profile__input ${
                  !nameError && "profile__input-error_active"
                }`}
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="200"
                onChange= {handleName}
                // onChange={handlePassword}
                value={ name }
              />
            </div>
            <div className="profile__info-row">
              <label className="profile__input-name">E-mail</label>
              <input
                className={`profile__input ${
                  !emailError && "profile__input-error_active"
                }`}
                name="email"
                type="email"
                required
                minLength="2"
                maxLength="40"
                onChange={handleEmail}
                value={email}
              />
            </div>
          </fieldset>
          <div className="profile__buttons">
            <button className={`profile__submit`} type="button">
              Редактировать
            </button>
            <Link className="profile__small-text" to={"/"}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

import { Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import headerlogo from "./../../images/headerlogo.svg";
export const Register = () => {
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  return (
    <main className={`register`}>
      <div className={`register__container`}>
        <Link className="header__link" to="/">
          <img className="login__logo" src={headerlogo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" name={"form"}>
          <fieldset className="register__info">
            <label className="register__input-name">Имя</label>
            <input
              className={`register__input ${
                !name && "register__input-error_active"
              }`}
              name="name"
              type="text"
              required
              minLength="2"
              maxLength="40"
              onChange={(e) => setName(e.target.validity.valid)}
              placeholder="Имя"
              // onChange={handleEmail}
              // value={email || ""}
            />
            <span
              className={`register__input-error ${
                !name && "register__input-error_active"
              }`}
            >
              Что-то пошло не так...
            </span>

            <label className="register__input-name">E-mail</label>
            <input
              className={`register__input ${
                !email && "register__input-error_active"
              }`}
              name="email"
              type="email"
              required
              minLength="2"
              maxLength="40"
              onChange={(e) => setEmail(e.target.validity.valid)}
              placeholder="E-mail"
              // onChange={handleEmail}
              // value={email || ""}
            />
            <span
              className={`register__input-error ${
                !email && "register__input-error_active"
              }`}
            >
              Что-то пошло не так...
            </span>
            <label className="register__input-name">Пароль</label>
            <input
              className={`register__input ${
                !password && "register__input-error_active"
              }`}
              name="password"
              type="password"
              required
              minLength="2"
              maxLength="200"
              onChange={(e) => setPassword(e.target.validity.valid)}
              placeholder="Пароль"
              // onChange={handlePassword}
              // value={password || ""}
            />
            <span
              className={`register__input-error ${
                !password && "register__input-error_active"
              }`}
            >
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className={`register__submit`} type="submit">
            Зарегистрироваться
          </button>
          <p className="register__small-text">
            Уже зарегистрированы?{" "}
            <Link className="register__smaller-text" to={"/signin"}>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

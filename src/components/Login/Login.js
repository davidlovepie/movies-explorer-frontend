import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import headerlogo from "./../../images/headerlogo.svg";

export const Login = () => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  return (
    <div className={`login`}>
      <div className={`login__container`}>
        <img className="login__logo" src={headerlogo} alt="Логотип" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name={"form"}>
          <fieldset className="login__info">
            <span className="login__input-name">E-mail</span>
            <input
              className={`login__input ${
                !email && "login__input-error_active"
              }`}
              name="email"
              type="email"
              required
              minLength="2"
              maxLength="40"
              onChange={(e) => setEmail(e.target.validity.valid)}
              // onChange={handleEmail}
              // value={email || ""}
            />
            <span
              className={`login__input-error ${
                !email && "login__input-error_active"
              }`}
            >
              Что-то пошло не так...
            </span>
            <span className="login__input-name">Пароль</span>
            <input
              className={`login__input ${
                !password && "login__input-error_active"
              }`}
              name="password"
              type="password"
              required
              minLength="2"
              maxLength="200"
              onChange={(e) => setPassword(e.target.validity.valid)}
              // onChange={handlePassword}
              // value={password || ""}
            />
            <span
              className={`login__input-error ${
                !password && "login__input-error_active"
              }`}
            >
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className={`login__submit`} type="submit">
            Войти
          </button>
          <p className="login__small-text">
            Ещё не зарегистрированы?{" "}
            <Link className="login__smaller-text" to={"/signup"}>
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

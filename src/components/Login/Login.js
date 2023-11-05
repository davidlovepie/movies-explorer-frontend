import { Link } from "react-router-dom";
import "./Login.css";
import headerlogo from "./../../images/headerlogo.svg";
import { useFormWithValidation } from "../../hooks/useForm.js";

export const Login = ({ login }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  return (
    <main className={`login`}>
      <div className={`login__container`}>
        <Link className="header__link" to="/">
          <img className="login__logo" src={headerlogo} alt="Логотип" />
        </Link>

        <h1 className="login__title">Рады видеть!</h1>
        <form
          className="login__form"
          name={"form"}
          onSubmit={(e) => {
            e.preventDefault();
            login({
              email: values["email"],
              password: values["password"],
            });
          }}
        >
          <fieldset className="login__info">
            <label className="login__input-name">E-mail</label>
            <input
              className={`login__input ${
                !isValid && "login__input-error_active"
              }`}
              name="email"
              type="email"
              required
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              placeholder="E-mail"
              value={values["email"] || ""}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <span
              className={`login__input-error ${
                !isValid && "login__input-error_active"
              }`}
            >
              {errors["email"]}
            </span>
            <label className="login__input-name">Пароль</label>
            <input
              className={`login__input ${
                !isValid && "login__input-error_active"
              }`}
              name="password"
              type="password"
              required
              minLength="2"
              maxLength="200"
              onChange={handleChange}
              placeholder="Пароль"
              value={values["password"] || ""}
            />
            <span
              className={`login__input-error ${
                !isValid && "login__input-error_active"
              }`}
            >
              {errors["password"]}
            </span>
          </fieldset>
          <button
            className={`login__submit ${!isValid && "login__submit_disabled"}`}
            disabled={!isValid}
            type="submit"
          >
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
    </main>
  );
};

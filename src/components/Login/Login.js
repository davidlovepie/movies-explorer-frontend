import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import headerlogo from "./../../images/headerlogo.svg";
import { useFormWithValidation } from "../../hooks/useForm.js";
import { useEffect } from "react";

export const Login = ({ login, interfaceError, setInterfaceError }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("JWT")) {
      navigate("/", { replace: true });
    }
  }, []);
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
          <span className="login__error">{interfaceError}</span>
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
              onChange={(e) => {
                handleChange(e);
                setInterfaceError('');
              }}
              placeholder="E-mail"
              value={values["email"] || ""}
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
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

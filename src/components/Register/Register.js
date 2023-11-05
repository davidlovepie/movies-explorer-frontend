import { Link } from "react-router-dom";
import "./Register.css";
import headerlogo from "./../../images/headerlogo.svg";
import { useFormWithValidation } from "../../hooks/useForm.js";
export const Register = ({ createUser }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  return (
    <main className={`register`}>
      <div className={`register__container`}>
        <Link className="header__link" to="/">
          <img className="login__logo" src={headerlogo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form
          className="register__form"
          name={"form"}
          onSubmit={(e) => {
            e.preventDefault();
            createUser({
              name: values["name"],
              email: values["email"],
              password: values["password"],
            });
          }}
        >
          <fieldset className="register__info">
            <label className="register__input-name">Имя</label>
            <input
              className={`register__input ${
                !isValid && "register__input-error_active"
              }`}
              name="name"
              type="text"
              required
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              placeholder="Имя"
              value={values["name"] || ""}
            />
            <span
              className={`register__input-error ${
                !isValid && "register__input-error_active"
              }`}
            >
              {errors["name"]}
            </span>
            <label className="register__input-name">E-mail</label>
            <input
              className={`register__input ${
                !isValid && "register__input-error_active"
              }`}
              name="email"
              type="email"
              required
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              placeholder="E-mail"
              value={values["email"] || ""}
            />
            <span
              className={`register__input-error ${
                !isValid && "register__input-error_active"
              }`}
            >
              {errors["email"]}
            </span>
            <label className="register__input-name">Пароль</label>
            <input
              className={`register__input ${
                !isValid && "register__input-error_active"
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
              className={`register__input-error ${
                !isValid && "register__input-error_active"
              }`}
            >
              {errors["password"]}
            </span>
          </fieldset>
          <button
            className={`register__submit ${
              !isValid && "register__submit_disabled"
            }`}
            disabled={!isValid}
            type="submit"
          >
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

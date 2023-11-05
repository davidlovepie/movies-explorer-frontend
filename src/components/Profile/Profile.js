import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm.js";

export const Profile = ({ logOut, updateProfile }) => {
  const user = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const { values, handleChange, errors, isValid, resetForm, setIsValid } =
    useFormWithValidation();
  const [isDifferentName, setIsDifferentName] = useState(false);
  const [isDifferentEmail, setIsDifferentEmail] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const userName = values.name || name;
    const userEmail = values.email || email;
    updateProfile({ name: userName, email: userEmail });
  }

  function checkIsDifferent(diffName, diffEmail) {
    if (diffName !== user.data.name && diffName !== undefined) {
      setIsDifferentName(true);
    } else {
      setIsDifferentName(false);
    }
    if (diffEmail !== user.data.email && diffEmail !== undefined) {
      setIsDifferentEmail(true);
    } else {
      setIsDifferentEmail(false);
    }
  }

  function checkInputs(e) {
    let diffName;
    let diffEmail;
    if (e.target.name === "name") {
      setName(e.target.value);
      diffName = e.target.value || user.data.name;
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
      diffEmail = e.target.value || email;
    }
    checkIsDifferent(diffName, diffEmail);
    handleChange(e);
  }

  useEffect(() => {
    if (user) {
      setEmail(user.data.email);
      setName(user.data.name);
      setIsValid(true);
    }
  }, [user]);
  return (
    <main className={`profile`}>
      <section className={`profile__container`}>
        <h1 className="profile__title">Привет, {name}!</h1>
        <form
          className="profile__form"
          name={"form"}
          onSubmit={(e) => handleSubmit(e)}
        >
          <fieldset className="profile__info">
            <div className="profile__info-row">
              <label className="profile__input-name">Имя</label>
              <input
                className={`profile__input ${
                  !isValid && "profile__input-error_active"
                }`}
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="200"
                onChange={checkInputs}
                value={values.name || (isDifferentName ? "" : name)}
              />
            </div>
            <div className="profile__info-row">
              <label className="profile__input-name">E-mail</label>
              <input
                className={`profile__input ${
                  !isValid && "profile__input-error_active"
                }`}
                name="email"
                type="email"
                required
                minLength="2"
                maxLength="40"
                onChange={checkInputs}
                value={values.email || (isDifferentEmail ? "" : email)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </div>
          </fieldset>
          <div className="profile__buttons">
            <button
              className={`profile__submit ${
                (!isValid || (!isDifferentName && !isDifferentEmail)) &&
                "profile__submit_disabled"
              }`}
              disabled={!isValid || (!isDifferentName && !isDifferentEmail)}
              type="submit"
            >
              Редактировать
            </button>
            <Link className="profile__small-text" to={"/"} onClick={logOut}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

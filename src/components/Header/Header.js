import { Navigation } from "../Navigation/Navigation";
import headerlogo from "./../../images/headerlogo.svg";
import profilelogo from "./../../images/profilelogo.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";

function Header({ isLoggedIn, openMenu }) {
  const { md, lg } = useMediaQueries();
  const location = useLocation();
  if (lg) {
    return (
      <header
        className={`header ${location.pathname !== "/" ? "header_white" : ""}`}
      >
        <div className="header__content">
          <Link className="header__link" to="/">
            <img className="header__logo" src={headerlogo} alt="Логотип" />
          </Link>
          {isLoggedIn ? (
            <>
              <Navigation />
              <Link
                to="/profile"
                className={`header__profile ${
                  location.pathname !== "/" ? "header__profile_white" : ""
                }`}
              >
                Аккаунт
                <div
                  className={`header__profile-circle ${
                    location.pathname !== "/"
                      ? "header__profile-circle_white"
                      : ""
                  }`}
                >
                  <img
                    className="header__profile_logo"
                    src={profilelogo}
                    alt="Логотип"
                  />
                </div>
              </Link>
            </>
          ) : (
            <nav className="header__authorization">
              <Link className="header__signup" to="/signup">
                Регистрация
              </Link>
              <div className="header__profile-square">
                <Link className="header__signin" to="/signin">
                  Войти
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    );
  }
  return (
    <header
      className={`header ${location.pathname !== "/" ? "header_white" : ""}`}
    >
      <div className="header__content">
        <Link className="header__link" to="/">
          <img className="header__logo" src={headerlogo} alt="Логотип" />
        </Link>
        {isLoggedIn ? (
          <>
            <button type="button" className="header__burger" onClick={openMenu}></button>
          </>
        ) : (
          <div className="header__authorization">
            <Link className="header__signup" to="/signup">
              Регистрация
            </Link>
            <div className="header__profile-square">
              <Link className="header__signin" to="/signin">
                Войти
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

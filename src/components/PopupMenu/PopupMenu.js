import { NavigationBurger } from "../NavigationBurger/NavigationBurger";
import './PopupMenu.css';
import profilelogo from "./../../images/profilelogo.png";
import { Link } from "react-router-dom";

export const PopupMenu = ({ closeMenu }) => {
  return (

      <div className="popup-menu">
        <div className="popup-menu__menu">
          <button className="popup-menu__close-button" onClick={()=>closeMenu(false)}></button>
          <Link to="/" className="popup-menu__title">Главная</Link>
          <NavigationBurger />
          <Link to="/profile" className="popup-menu__profile">
            Аккаунт
            <div className="popup-menu__profile_circle">
              <img className="popup-menu__profile_logo" src={profilelogo} alt="Логотип" />
            </div>
          </Link>
        </div>
      </div>

  );
};
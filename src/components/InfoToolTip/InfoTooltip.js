import formTrue from "../../images/successImage.svg";
import formFalse from "../../images/errorImage.svg";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_type_enlarge">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          src={status ? formTrue : formFalse}
          alt={"Статус"}
        />
        <p className="popup__text">
          {status ? "Успешно!" : "Что-то пошло не так..."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;

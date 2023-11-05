import "./FilterCheckbox.css";

export const FilterCheckbox = ({ handleCheckBox, isShorts }) => {
  function changeCheckbox() {
    handleCheckBox(!isShorts);
  }
  return (
    <label className="filtercheckbox">
      <input
        type="checkbox"
        className="filtercheckbox__checkbox"
        checked={isShorts}
      ></input>
      <span className="filtercheckbox__image" onClick={changeCheckbox}></span>
      <span className="filtercheckbox__name">Короткометражки</span>
    </label>
  );
};

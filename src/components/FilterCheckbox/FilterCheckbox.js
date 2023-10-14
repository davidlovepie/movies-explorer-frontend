import './FilterCheckbox.css'

export const FilterCheckbox = () => {
  return (
    <label className="filtercheckbox">
      <input type="checkbox" className="filtercheckbox__checkbox"></input>
      <span className="filtercheckbox__image"></span>
      <span className="filtercheckbox__name">Короткометражки</span>
    </label>
  )
};
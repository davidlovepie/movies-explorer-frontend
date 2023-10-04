import './FilterCheckbox.css'

export const FilterCheckbox = () => {
  return (
    <label className="filtercheckbox">
      <input type="checkbox" className="filtercheckbox__checkbox"></input>
      <div className="filtercheckbox__image"></div>
      <p className="filtercheckbox__name">Короткометражки</p>
    </label>
  )
};
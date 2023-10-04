import './SearchForm.css';
import { FilterCheckbox } from '../../FilterCheckbox/FilterCheckbox';

export const SearchForm = ()=>{
  return (
 <div className='search-form'>
  <div className='search-form__search'>
<input className='search-form__input' placeholder='Фильм'></input>
<button className='search-form__button'>Найти</button>
</div>
<FilterCheckbox />
 </div>
  )
};
import './SavedMovies.css';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../Movies/SearchForm/SearchForm';

export const SavedMovies = ()=>{
  return (
 <section className='movies'>
  <div className='movies__content'>
    <SearchForm />
    <MoviesCardList initialMovies={[]}/>
  </div>
 </section>
  )
};
import './SavedMovies.css';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../Movies/SearchForm/SearchForm';

export const SavedMovies = ()=>{
  return (
 <main className='movies'>
  <div className='movies__content'>
    <SearchForm />
    <MoviesCardList initialMovies={[]}/>
  </div>
 </main>
  )
};
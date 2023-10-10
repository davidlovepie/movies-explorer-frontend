import './Movies.css';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from './SearchForm/SearchForm';
import { initialMovies } from "../../utils/db";
export const Movies = ()=>{
  return (
 <main className='movies'>
  <div className='movies__content'>
    <SearchForm />
    <MoviesCardList initialMovies={initialMovies} />
  </div>
 </main>
  )
};
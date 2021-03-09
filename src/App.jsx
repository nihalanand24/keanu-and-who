import './styles/App.scss';
import Header from './Header';
import SearchBar from './SearchBar';
import { useState } from 'react';
import getCommonMovies from './getCommonMovies';
import MoviesGallery from './MoviesGallery';

function App() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [actor1, setActor1] = useState('');
  const [actor2, setActor2] = useState('');

  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    getCommonMovies(actor1, actor2).then((response) => {
      setMoviesArray(response);
      console.log(moviesArray);
    });

  };


  return (
    <>
      <Header />
      <SearchBar
        value1={actor1}
        value2={actor2}
        onSubmit={handleSubmit}
        onChange1={(event) => {
          setActor1(event.target.value);
        }}
        onChange2={(event) => {
          setActor2(event.target.value);
        }}
        placeholder1='Keanu'
        placeholder2='Halle Berry'
      />
      <MoviesGallery className='moviesGallery' moviesArray={moviesArray} />
    </>
  );
}

export default App;

import './styles/App.scss';
import Header from './Header';
import SearchBar from './SearchBar';
import { useState } from 'react';
import getMovies from './Movies';
// import getCommonMovies from './getCommonMovies';
// import MoviesGallery from './MoviesGallery';

function App() {
  // const [moviesArray, setMoviesArray] = useState([]);
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();
    getMovies(search1, search2);
    // console.log(ids);

  };


  return (
    <>
      <Header />
      <SearchBar
        value1={search1}
        value2={search2}
        onSubmit={handleSubmit}
        onChange1={(event) => {
          setSearch1(event.target.value);
        }}
        onChange2={(event) => {
          setSearch2(event.target.value);
        }}
        placeholder1='Keanu Reeves'
        placeholder2='Steve Martin'
      />
      {/* <MoviesGallery moviesArray={moviesArray} /> */}
    </>
  );
}

export default App;

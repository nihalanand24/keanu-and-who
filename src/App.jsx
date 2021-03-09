import './styles/App.scss';
import Header from './Header';
import SearchBar from './SearchBar';
import { useState } from 'react';
// import Movies from './Movies';
import getCommonMovies from './getCommonMovies';
import MoviesGallery from './MoviesGallery';

function App() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  // const [userSearched, setUserSearched] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search1, search2);
    // setUserSearched(true);

    getCommonMovies(search1, search2).then((response) => {
      setMoviesArray(response);
      console.log(moviesArray);
    });
  };

  // useEffect(() => {
  //   getCommonMovies(search1, search2).then((response) => {
  //     setMoviesArray(response);
  //   });

  // },[userSearched, search1, search2]);

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
        placeholder1='Keanu'
        placeholder2='Al Pacino'
      />
      <MoviesGallery className='moviesGallery' moviesArray={moviesArray} />
    </>
  );
}

export default App;

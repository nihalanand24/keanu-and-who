import Header from './Header';
import SearchBar from './SearchBar';
import { useState } from 'react';
import getMovies from './getMovies';
import MoviesGallery from './MoviesGallery';
import './styles/App.scss';

function App() {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    getMovies(search1, search2, setDataFromApi);
  };

  // const DisplayError = () => {
  //   return <p>ERROR</p>
  // }

  return (
    <>
      <div className='wrapper'>
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
          <MoviesGallery actor1={search1} actor2={search2} moviesArray={dataFromApi} />
      </div>
    </>
  );
}

export default App;

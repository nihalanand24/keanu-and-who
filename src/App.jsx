import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import getMovies from './getMovies';
import MoviesGallery from './components/MoviesGallery';
import './styles/App.scss';
import Footer from './components/Footer';
import Autocomplete from './components/Autocomplete';
import useRovingFocus from './useRovingFocus';

function App() {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');

  const [size1, setSize1] = useState(0);
  const [size2, setSize2] = useState(0);

  const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '0f71218e40b140c550833011fa9c4afb';


const [focus1, setFocus1] = useRovingFocus(size1, 'actor1');
const [focus2, setFocus2] = useRovingFocus(size2, 'actor2');

  const handleSubmit = async (event) => {
    event.preventDefault();
    getMovies(search1, search2, setDataFromApi, baseUrl, apiKey);
  };

  

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
          autocomplete1={<Autocomplete propID='ac1' focus={focus1} setFocus={setFocus1} setSize={setSize1} setSearch={setSearch1} search={search1}/>}
          autocomplete2={<Autocomplete propID='ac2' focus={focus2} setFocus={setFocus2} setSize={setSize2} setSearch={setSearch2} search={search2}/>}
        />          
        <MoviesGallery
          actor1={search1}
          actor2={search2}
          moviesArray={dataFromApi}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;

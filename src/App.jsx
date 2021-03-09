import './styles/App.scss';
import Header from './Header';
import SearchBar from './SearchBar';
import { useState } from 'react';
import getCommonMovies from './getCommonMovies';


function App() {
  
  const [actor1, setActor1] = useState('');
  const [actor2, setActor2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    getCommonMovies(actor1, actor2)

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
        placeholder1='Keanu Reeves'
        placeholder2='Halle Berry'
      />
    </>
  );
}

export default App;

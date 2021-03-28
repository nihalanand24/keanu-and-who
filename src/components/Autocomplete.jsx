import { useEffect, useState } from 'react';
import useRovingFocus from '../useRovingFocus';
import Suggestion from './Suggestion';


const Autocomplete = ({ search, setSearch, propID }) => {
  const [suggestions, setSuggestions] = useState([]);
    const [focus, setFocus] = useState(suggestions.length);



  useEffect(() => {
    if (search.length > 2) {
      const getData = async () => {
        const url = new URL(`https://api.themoviedb.org/3/search/person`);
        url.search = new URLSearchParams({
          api_key: '0f71218e40b140c550833011fa9c4afb',
          query: search,
        });

        try {
          const res = await fetch(url);
          const jsonRes = await res.json();
          const allResults = await jsonRes.results;
          let actorResults = []; 
          allResults.forEach(
            actor => {
                let repeat = false;
                if (actor.known_for_department === 'Acting'){
                    actorResults.forEach(resActor => {
                        if(resActor.name === actor.name){
                            repeat = true;
                        }
                    })
                    if(!repeat){
                        actorResults.push(actor)
                    }
                }
            }
          );
          setSuggestions(actorResults.slice(0, 5));
        } catch (e) {
          console.log(e);
          return;
        }
      };
      getData();
    } else {
      setSuggestions([]);
    }
  }, [search]);

  const handleClick = (actor) => {
      document.getElementById(propID).style.display = 'none';
      setSearch(actor.name);
  }

  return suggestions.length ? (
    <ul id={propID} className='autocomplete'>
        <li><button className='hiddenButton' aria-hidden></button></li>
      {suggestions.map((actor, index) => 
          <Suggestion key={index} setFocus={setFocus} index={index} focus={focus === index} actor={actor.name} setName={setSearch}/>
        //   return (
        //   <li key={index}>
        //     <button className='suggestion' onClick={() => handleClick(actor)}>{actor.name}</button>
        //   </li>
        // );
      )}
    </ul>
  ) : null;
};

export default Autocomplete;

import AutosizeInput from 'react-input-autosize';


const SearchBar = props => {
  return (
    <form id='searchBar' className='searchBar' onSubmit={props.onSubmit}>
      <label className='sr-only' htmlFor='actor1'>
        Enter First Actor's Name
      </label>
      <span>
        Has
        <span className='searchBoxContainer'>
          <AutosizeInput
            required
            id='actor1'
            placeholder={props.placeholder1}
            placeholderIsMinWidth
            className='searchBox'
            value={props.value1}
            onChange={props.onChange1}
            inputStyle={{ fontSize: 19 }}
          />
          {props.autocomplete1}
        </span>
        ever been in a movie with
        <label className='sr-only' htmlFor='actor2'>
          Enter Second Actor's Name
        </label>
        <span className='searchBoxContainer'>
          <AutosizeInput
            required
            id='actor2'
            placeholder={props.placeholder2}
            placeholderIsMinWidth
            className='searchBox'
            value={props.value2}
            onChange={props.onChange2}
            inputStyle={{ fontSize: 19 }}
          />
          {props.autocomplete2}
        </span>
        ?
      </span>
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;

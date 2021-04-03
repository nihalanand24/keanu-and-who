import { useCallback, useEffect, useRef } from 'react';

const Suggestion = ({ actor, focus, index, setFocus, setName, propID }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  const handleTab = (e) => {
    if(e.key === 'Tab') {
      e.preventDefault();
      handleClick(e.target.textContent);
    }
  }

  const handleClick = (name) => {
    setName(name); 
    document.getElementById(propID).style.display = "none";
    const actor1 = document.getElementById('actor1');
    const actor2 = document.getElementById('actor2');
    const submitButton = document.querySelector('button[type=submit');
    if(propID === 'ac1' && !actor2.value.length){
      actor2.focus();
    } else if (propID === 'ac2' && !actor1.value.length){
      actor1.focus();
    } else {
      submitButton.focus();
    }
  };
  return (
    <li>
      <button
      type='button'
      className='suggestion'
        tabIndex={focus ? 0 : -1}
        ref={ref}
        onClick={() => handleClick(actor)}
        onKeyPress={handleSelect}
        onKeyDown={handleTab}>
        {actor}
      </button>
    </li>
  );
};

export default Suggestion;

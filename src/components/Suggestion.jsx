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

  const handleClick = (name) => {
    document.getElementById(propID).style.display = "none";
    setName(name);
  };
  return (
    <li>
      <button
      type='button'
      className='suggestion'
        tabIndex={focus ? 0 : -1}
        ref={ref}
        onClick={() => handleClick(actor)}
        onMouseOver={handleSelect}
        onKeyPress={handleSelect}>
        {actor}
      </button>
    </li>
  );
};

export default Suggestion;

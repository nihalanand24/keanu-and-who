import { useCallback, useEffect, useRef } from 'react';

const Suggestion = ({ actor, focus, index, setFocus, setName }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  return (
    <li>
      <button
      className='suggestion'
        tabIndex={focus ? 0 : -1}
        ref={ref}
        onClick={() => setName(actor)}
        onKeyPress={handleSelect}>
        {actor}
      </button>
    </li>
  );
};

export default Suggestion;

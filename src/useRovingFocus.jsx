import { useCallback, useEffect, useState } from "react";

const useRovingFocus = (size) => {
    
  const [currentFocus, setCurrentFocus] = useState(0);

  const search = document.getElementById('searchMovie');

  const handleKeyDown = useCallback(e => {
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        if (currentFocus === size - 1) {
          setCurrentFocus(- 1);
          search.focus();
        } else {
          setCurrentFocus(currentFocus + 1);
        }
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        if (currentFocus === 0) {
          setCurrentFocus(-1);
          search.focus();
        } else if (document.activeElement === search) {
          setCurrentFocus(size - 1);
        } else {
          setCurrentFocus(currentFocus - 1);
        }
      } else if (e.keyCode === 27) {
        // escape Key to allow escape to searchBar
        setCurrentFocus(-1);
        search.focus();
      } else {
        // allow user to continue typing movie name
        setCurrentFocus(-1);
      }
    },
    [size, currentFocus, setCurrentFocus, search]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRovingFocus;

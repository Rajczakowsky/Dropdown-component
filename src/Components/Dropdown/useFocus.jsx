import { useCallback, useState, useEffect } from 'react';

function useFocus(size) {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyPress = useCallback(
    event => {
      if (event.keyCode === 40) {
        // On down arrow press
        event.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (event.keyCode === 38) {
        // On down arrow press
        event.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return [currentFocus, setCurrentFocus];
}

export default useFocus;
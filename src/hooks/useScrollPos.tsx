/** measuring distance to the top of the window */

import { useState, useEffect } from 'react';

const UseScrollFade = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  /** useEffect from React. It uses event listeners from JS. */
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtTop;
};

export default UseScrollFade;
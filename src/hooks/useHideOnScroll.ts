import { useEffect, useState } from 'react';

function getWindowDistance() {
  const { pageYOffset: vertical, pageXOffset: horizontal } = window;
  return {
    vertical,
    horizontal,
  };
}

export default function useWindowDistance() {
  const [windowDistance, setWindowDistance] = useState({ vertical: 0, horizontal: 0 });

  useEffect(() => {
    function handleScroll() {
      setWindowDistance(getWindowDistance());
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return windowDistance;
}

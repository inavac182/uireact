import { useState, useEffect } from 'react';

import { breakpointsSizes } from '../responsive';

interface WindowDimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: breakpointsSizes.l.min,
    height: breakpointsSizes.l.min,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  return windowDimensions;
};

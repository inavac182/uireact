import { useState, useEffect } from 'react';

import { BreakpointsSizes } from '../responsive/breakpoints-sizes';

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
    width: BreakpointsSizes.l.min,
    height: BreakpointsSizes.l.min,
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

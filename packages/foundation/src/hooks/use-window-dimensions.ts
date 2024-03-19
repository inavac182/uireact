'use client';
import { useState, useEffect } from 'react';
import { WindowDimensions, getWindowDimensions } from './utils/get-window-deimensions';

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  return windowDimensions;
};

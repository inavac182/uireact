'use client';
import { useState, useEffect } from 'react';
import { UiWindowDimensions, getUiWindowDimensions } from './utils/get-window-dimensions';

export const useWindowDimensions = (): UiWindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(getUiWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getUiWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWindowDimensions(getUiWindowDimensions());
  }, []);

  return windowDimensions;
};

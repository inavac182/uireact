'use client';
import { useWindowDimensions } from './use-window-dimensions';
import { BreakpointsSizes } from '../responsive/breakpoints-sizes';
import { useEffect, useMemo, useState } from 'react';

export type useViewportResponse = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
};

export const useViewport = (): useViewportResponse => {
  const { width } = useWindowDimensions();
  const [hydratred, setHydrated] = useState(false);
  const viewportResponse = useMemo((): useViewportResponse => {
    const isSmall = width <= BreakpointsSizes.s.max;
    const isMedium = width >= BreakpointsSizes.m.min && width <= BreakpointsSizes.m.max;
    const isLarge = width >= BreakpointsSizes.l.min && width <= BreakpointsSizes.l.max;
    const isXLarge = width >= BreakpointsSizes.xl.min;

    return {
      isSmall,
      isMedium,
      isLarge,
      isXLarge,
    };
  }, [width]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydratred) {
    return viewportResponse;
  }

  return {
    isSmall: false,
    isMedium: false,
    isLarge: true,
    isXLarge: false,
  };
};

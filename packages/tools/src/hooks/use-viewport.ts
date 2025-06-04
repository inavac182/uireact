'use client';
import { useEffect, useMemo, useState } from "react";

import { useWindowDimensions } from "./use-window-dimensions";
import { useViewportData } from "./utils/use-viewport-data";

type UseViewportResponse = {
  isSmall: boolean,
  isMedium: boolean,
  isLarge: boolean,
  isXLarge: boolean
}

export const useViewport = (): UseViewportResponse => {
  const { width } = useWindowDimensions();
  const { small, medium, large } = useViewportData();
  const [hydratred, setHydrated] = useState(false);
  const viewportResponse = useMemo((): UseViewportResponse => {
    const isSmall = width <= small;
    const isMedium = width <= medium && width > small;
    const isLarge = width > medium;
    const isXLarge = width >= large;

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
}
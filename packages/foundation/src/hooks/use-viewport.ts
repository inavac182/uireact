import { useWindowDimensions } from './use-window-dimensions';
import { BreakpointsSizes } from '../responsive/breakpoints-sizes';

type useViewportResponse = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
};

export const useViewport = (): useViewportResponse => {
  const { width } = useWindowDimensions();

  const isSmall = width <= BreakpointsSizes.s.max;
  const isMedium = width >= BreakpointsSizes.m.min && width <= BreakpointsSizes.m.max;
  const isLarge = width >= BreakpointsSizes.l.min && width < BreakpointsSizes.xl.min;
  const isXLarge = width >= BreakpointsSizes.xl.min;

  return {
    isSmall,
    isMedium,
    isLarge,
    isXLarge,
  };
};

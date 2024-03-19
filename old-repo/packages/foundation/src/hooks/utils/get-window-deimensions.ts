import { BreakpointsSizes } from '../../responsive/breakpoints-sizes';

export interface WindowDimensions {
  width: number;
  height: number;
}

export const getWindowDimensions = (): WindowDimensions => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }

  return {
    width: BreakpointsSizes.l.min,
    height: BreakpointsSizes.l.min,
  };
};

import * as React from 'react';

import { Breakpoints } from '../types';
import { useWindowDimensions } from '../hooks/use-window-dimensions';
import { breakpointsSizes } from './breakpoints-sizes';

type BreakpointString = 'l|s' | 'l|m' | 'm|s';

interface ViewportProps {
  children?: React.ReactNode;
  breakpoint?: Breakpoints;
  breakpoints?: BreakpointString;
}

export const UiViewport: React.FC<ViewportProps> = ({ children, breakpoint, breakpoints }) => {
  const { width } = useWindowDimensions();
  const childrenMemo = React.useMemo(() => <>{children}</>, []);

  if ((breakpoint === Breakpoints.SMALL || breakpoints?.includes('s')) && width <= breakpointsSizes.s.max) {
    return childrenMemo;
  }

  if (
    (breakpoint === Breakpoints.MEDIUM || breakpoints?.includes('m')) &&
    width >= breakpointsSizes.m.min &&
    width <= breakpointsSizes.m.max
  ) {
    return childrenMemo;
  }

  if ((breakpoint === Breakpoints.LARGE || breakpoints?.includes('l')) && width >= breakpointsSizes.l.min) {
    return childrenMemo;
  }

  return null;
};

UiViewport.displayName = 'UiViewport';

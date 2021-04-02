import * as React from 'react';

import { Breakpoints } from '../types';
import { useWindowDimensions } from '../hooks/use-window-dimensions';
import { BreakpointsSizes } from './breakpoints-sizes';

type BreakpointString = 'l|s' | 'l|m' | 'm|s';

interface ViewportProps {
  children?: React.ReactNode;
  /** breakpoint where UiViewport render it children see [Breakpoints Enum](./packages-foundation-docs-breakpoints) */
  breakpoint?: Breakpoints;
  /** combination of breakpoints where UiViewport render its children */
  breakpoints?: BreakpointString;
}

export const UiViewport: React.FC<ViewportProps> = ({ children, breakpoint, breakpoints }) => {
  const { width } = useWindowDimensions();
  const childrenMemo = React.useMemo(() => <>{children}</>, []);

  if ((breakpoint === Breakpoints.SMALL || breakpoints?.includes('s')) && width <= BreakpointsSizes.s.max) {
    return childrenMemo;
  }

  if (
    (breakpoint === Breakpoints.MEDIUM || breakpoints?.includes('m')) &&
    width >= BreakpointsSizes.m.min &&
    width <= BreakpointsSizes.m.max
  ) {
    return childrenMemo;
  }

  if ((breakpoint === Breakpoints.LARGE || breakpoints?.includes('l')) && width >= BreakpointsSizes.l.min) {
    return childrenMemo;
  }

  return null;
};

UiViewport.displayName = 'UiViewport';

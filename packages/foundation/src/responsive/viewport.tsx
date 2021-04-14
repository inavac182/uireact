import * as React from 'react';

import { Breakpoints } from '../types';
import { useWindowDimensions } from '../hooks/use-window-dimensions';
import { BreakpointsSizes } from './breakpoints-sizes';

type BreakpointString = 'l|s' | 'l|m' | 'm|s';

interface ViewportProps {
  children?: React.ReactNode;
  /** Breakpoint(s) criteria where UiViewport render it children see [Breakpoints Enum](./packages-foundation-docs-breakpoints) */
  criteria: Breakpoints | BreakpointString;
}

export const UiViewport: React.FC<ViewportProps> = ({ children, criteria }) => {
  const { width } = useWindowDimensions();
  const childrenMemo = React.useMemo(() => <>{children}</>, []);
  const isSmall = width <= BreakpointsSizes.s.max;
  const isMedium = width >= BreakpointsSizes.m.min && width <= BreakpointsSizes.m.max;
  const isLarge = width >= BreakpointsSizes.l.min;

  if (isSmall) {
    const matchesCriteria = criteria === Breakpoints.SMALL || criteria === 'l|s' || criteria === 'm|s';
    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  if (isMedium) {
    const matchesCriteria = criteria === Breakpoints.MEDIUM || criteria === 'l|m' || criteria === 'm|s';

    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  if (isLarge) {
    const matchesCriteria = criteria === Breakpoints.LARGE || criteria === 'l|m' || criteria === 'l|s';

    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  return null;
};

UiViewport.displayName = 'UiViewport';

import * as React from 'react';

import { Breakpoints } from '../types';
import { useWindowDimensions } from '../hooks/use-window-dimensions';
import { BreakpointsSizes } from './breakpoints-sizes';

type BreakpointString = 's|m' | 'm|l' | 'l|xl';

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
  const isLarge = width >= BreakpointsSizes.l.min && width < BreakpointsSizes.xl.min;
  const isXLarge = width >= BreakpointsSizes.xl.min;

  if (isSmall) {
    const matchesCriteria = criteria === Breakpoints.SMALL || criteria === 's|m';
    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  if (isMedium) {
    const matchesCriteria = criteria === Breakpoints.MEDIUM || criteria === 's|m' || criteria === 'm|l';

    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  if (isLarge) {
    const matchesCriteria = criteria === Breakpoints.LARGE || criteria === 'm|l' || criteria === 'l|xl';

    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  if (isXLarge) {
    const matchesCriteria = criteria === Breakpoints.XLARGE || criteria === 'l|xl';

    if (matchesCriteria) {
      return childrenMemo;
    }
  }

  return null;
};

UiViewport.displayName = 'UiViewport';

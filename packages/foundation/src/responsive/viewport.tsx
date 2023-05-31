import * as React from 'react';

import { Breakpoints } from '../types';
import { useViewport } from '../hooks';

type BreakpointString = 's|m' | 'm|l' | 'l|xl' | 'm|l|xl';

interface ViewportProps {
  children?: React.ReactNode;
  /** Breakpoint(s) criteria where UiViewport render it children see [Breakpoints Enum](./packages-foundation-docs-breakpoints) */
  criteria: Breakpoints | BreakpointString;
  /* As we are defaulting to large when we are in SSR this prop is useful if you prefer to just render nothing in SSR */
  skipSSr?: boolean;
}

export const UiViewport: React.FC<ViewportProps> = ({ children, criteria, skipSSr }: ViewportProps) => {
  const [hydrated, setHydrated] = React.useState(false);
  const { isSmall, isMedium, isLarge, isXLarge } = useViewport();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (skipSSr && !hydrated) {
    return null;
  }

  // Only during SSR we won't take in consideration the user window
  if (!hydrated) {
    const isCriteriaLarge =
      criteria === Breakpoints.LARGE || criteria === 'm|l' || criteria === 'l|xl' || criteria === 'm|l|xl';
    const isCriteriaXLarge = criteria === Breakpoints.XLARGE || criteria === 'l|xl' || criteria === 'm|l|xl';

    // Only render if criteria is large or Xlarge
    if (isCriteriaLarge || isCriteriaXLarge) {
      return <>{children}</>;
    }

    // Returns null on first render if SSR and skipSSr is enabled, so the client and server match
    return null;
  }

  if (isSmall) {
    const matchesCriteria = criteria === Breakpoints.SMALL || criteria === 's|m';
    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  if (isMedium) {
    const matchesCriteria =
      criteria === Breakpoints.MEDIUM || criteria === 's|m' || criteria === 'm|l' || criteria === 'm|l|xl';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  if (isLarge) {
    const matchesCriteria =
      criteria === Breakpoints.LARGE || criteria === 'm|l' || criteria === 'l|xl' || criteria === 'm|l|xl';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  if (isXLarge) {
    const matchesCriteria = criteria === Breakpoints.XLARGE || criteria === 'l|xl' || criteria === 'm|l|xl';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  return null;
};

UiViewport.displayName = 'UiViewport';

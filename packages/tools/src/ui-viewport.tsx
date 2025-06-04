'use client';
import * as React from 'react';

import { useViewport } from './hooks';

type UiBreakpointsMixture = 's|m' | 'm|l';

export type UiViewportProps = {
  children?: React.ReactNode;
  /** The viewport breaking where the content of this component should be rendered */
  criteria: UiBreakpointsMixture | 'small' | 'medium' | 'large' | 'xlarge';
  /* As we are defaulting to large when we are in SSR this prop is useful if you prefer to just render nothing in SSR */
  skipSSr?: boolean;
}

export const UiViewport: React.FC<UiViewportProps> = ({ children, criteria, skipSSr }: UiViewportProps) => {
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
    const isCriteriaLarge = criteria === 'large';
    const isCriteriaXLarge = criteria === 'xlarge';

    // Only render if criteria is large or Xlarge
    if (isCriteriaLarge || isCriteriaXLarge) {
      return <>{children}</>;
    }

    // Returns null on first render if SSR and skipSSr is enabled, so the client and server match
    return null;
  }

  if (isSmall) {
    const matchesCriteria = criteria === 'small' || criteria === 's|m';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  if (isMedium) {
    const matchesCriteria = criteria === 'medium' || criteria === 'm|l' || criteria === 's|m';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  if (isXLarge) {
    const matchesCriteria = criteria === 'xlarge';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  if (isLarge) {
    const matchesCriteria = criteria === 'large' || criteria === 'm|l';

    if (matchesCriteria) {
      return <>{children}</>;
    }
  }

  return null;
};

UiViewport.displayName = 'UiViewport';

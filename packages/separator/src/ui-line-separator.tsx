import React from 'react';

import { ThemeContext, UiReactElementProps } from '@uireact/foundation';

import { AnimatedContainer } from './helpers';

type UiLineSeparatorProps = {
  delay?: number;
  inverse?: boolean;
} & UiReactElementProps;

export const UiLineSeparator: React.FC<UiLineSeparatorProps> = ({
  className,
  delay,
  inverse,
  testId,
}: UiLineSeparatorProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <AnimatedContainer
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $delay={delay}
      $inverse={inverse}
      className={className}
      data-testid={testId}
    />
  );
};

UiLineSeparator.displayName = 'UiLineSeparator';

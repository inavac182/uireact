'use client';
import React from 'react';

import { UiReactElementProps } from '@uireact/foundation';

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
}: UiLineSeparatorProps) => (
  <AnimatedContainer $delay={delay} $inverse={inverse} className={className} data-testid={testId} />
);

UiLineSeparator.displayName = 'UiLineSeparator';

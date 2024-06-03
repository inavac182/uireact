import React from 'react';

import { UiReactElementProps } from '@uireact/foundation';

import styles from './ui-line-separator.scss';

export type UiLineSeparatorProps = {
  inverse?: boolean;
} & UiReactElementProps;

export const UiLineSeparator: React.FC<UiLineSeparatorProps> = ({
  className = '',
  inverse = false,
  testId,
}: UiLineSeparatorProps) => (
  <div className={`${className} ${styles.lineSeparator} ${inverse ? styles.lineInverseAnimation : styles.lineAnimation}`} data-testid={testId} />
);

UiLineSeparator.displayName = 'UiLineSeparator';

'use client';
import React from 'react';

import { getSpacingClass } from './spacing-helpers';
import { UiHeadingProps } from './types';

import styles from './ui-text.scss';

export const UiHeading: React.FC<UiHeadingProps> = ({
  className = '',
  category = 'fonts',
  level = 3,
  inverseColoration,
  coloration,
  centered,
  children,
  wrap,
  margin,
  padding
}: UiHeadingProps) => {
  let classes = `${className} color-${inverseColoration ? 'inverse-' : ''}${category}-100 heading-level${level}`;

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (wrap) {
    classes = `${classes} ${styles.wrap}`;
  }

  if (centered) {
    classes = `${classes} ${styles.alignCenter}`;
  }

  if (margin || padding) {
    classes = `${classes} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)}`;
  }

  switch (level) {
    case 1:
      return (
        <h1 className={classes}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={classes}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={classes}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={classes}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={classes}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={classes}>
          {children}
        </h6>
      );
    default:
      return (
        <h3 className={classes}>
          {children}
        </h3>
      );
  }
};

UiHeading.displayName = 'UiHeading';

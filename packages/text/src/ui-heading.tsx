'use client';
import React from 'react';

import { getSpacingClass } from './spacing-helpers';
import { UiHeadingProps } from './types';

import styles from './ui-text.scss';
import headingStyles from './ui-heading.module.scss';

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
  padding,
  gradient,
  animated,
  ...props
}: UiHeadingProps) => {
  let classes = `${className}`;

  if (gradient) {
    classes = `${classes} ${headingStyles.gradientHeading} heading-level${level}`;
  } else {
    classes = `${classes} color-${inverseColoration ? 'inverse-' : ''}${category}-100 heading-level${level}`;
  }

  if (animated) {
    classes = `${classes} ${headingStyles.animatedBackground}`;
  }

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (wrap) {
    classes = `${classes} ${styles[`wrap-${wrap}`]}`;
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
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={classes} {...props}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={classes} {...props}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={classes} {...props}>
          {children}
        </h6>
      );
    default:
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );
  }
};

UiHeading.displayName = 'UiHeading';

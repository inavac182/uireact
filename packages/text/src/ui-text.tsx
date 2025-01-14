'use client';
import React from 'react';

import { getSpacingClass } from './spacing-helpers';
import { UiTextProps } from './types';
import styles from './ui-text.scss';

export const UiText: React.FC<UiTextProps> = ({
  align = 'left',
  children,
  className = '',
  coloration,
  inline,
  fontStyle,
  size = 'regular',
  category = 'fonts',
  inverseColoration,
  wrap = 'normal',
  margin,
  padding,
  ...props
}: UiTextProps) => {
  let classes = `${className} ${styles.text} color-${inverseColoration ? 'inverse-' : ''}${category}-100 size-${size}`;

  if (align === 'center') {
    classes = `${classes} ${styles.alignCenter}`;
  }

  if (align === 'right') {
    classes = `${classes} ${styles.alignRight}`;
  }

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (wrap) {
    classes = `${classes} ${styles[`wrap-${wrap}`]}`;
  }

  if (margin || padding) {
    classes = `${classes} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)}`;
  }

  if (fontStyle) {
    classes = `${classes} ${styles[fontStyle]}`;
  }

  if (inline) {
    return (
      <span className={classes}>
        {children}
      </span>
    );
  }

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

UiText.displayName = 'UiText';

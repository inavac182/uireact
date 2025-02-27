'use client';
import React from 'react';

import { getSpacingClass } from './spacing-helpers';
import { UiLabelProps } from './types';

export const UiLabel: React.FC<UiLabelProps> = ({
  children,
  className = '',
  coloration,
  htmlFor,
  size = 'small',
  category = 'fonts',
  margin,
  padding,
  ...props
}: UiLabelProps) => {
  let classes = `${className} color-${category}-100 size-${size}`;

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (margin || padding) {
    classes = `${classes} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)}`;
  }

  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
    </label>
  );
};

UiLabel.displayName = 'UiLabel';

'use client';
import React from 'react';

import { getSpacingClass } from './spacing-helpers';
import { UiLinkProps } from './types';

import styles from './ui-text.scss';

export const UiLink: React.FC<UiLinkProps> = ({
  category = 'tertiary',
  children,
  coloration,
  className = '',
  fullWidth,
  fontStyle,
  size = 'regular',
  wrap = 'normal',
  margin,
  padding,
  ...props
}: UiLinkProps) => {
  let classes = `${className} color-${category}-100 size-${size}`;

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (wrap) {
    classes = `${classes} ${styles[`wrap-${wrap}`]}`;
  }

  if (fullWidth) {
    classes = `${classes} fullWidth`;
  }

  if (margin || padding) {
    classes = `${classes} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)}`;
  }

  if (fontStyle) {
    classes = `${classes} ${styles[fontStyle]}`;
  }

  if (children && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { className: classes, ...props });
  }

  return null;
};

UiLink.displayName = 'UiLink';

'use client';
import React from 'react';

import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

import { UiButtonLinkProps } from './types';
import { getButtonLinkStyling } from './utils';
import styles from './ui-text.scss';

const defaultPadding: SpacingDistribution = { inline: 'four', block: 'three'};

export const UiButtonLink: React.FC<UiButtonLinkProps> = ({
  category = 'tertiary',
  children,
  coloration,
  className = '',
  fullWidth,
  fontStyle,
  size = 'regular',
  wrap,
  inverseTextColoration,
  margin,
  padding,
  styling
}: UiButtonLinkProps) => {
  let classes = `${className} ${styles.buttonLink} ${getButtonLinkStyling(category, styling)}`;
  classes = `${classes} color-${inverseTextColoration ? 'inverse-' : ''}fonts-100 size-${size}`;

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (fullWidth) {
    classes = `${classes} ${styles.fullWidth}`;
  }

  if (fontStyle) {
    classes = `${classes} ${fontStyle}`;
  }

  if (wrap) {
    classes = `${classes} ${styles.wrap}`;
  }

  if (margin) {
    classes = `${classes} ${getSpacingClass('margin', margin)}`;
  }

  if (padding) {
    classes = `${classes} ${getSpacingClass('padding', padding)}`;
  } else if (styling !== 'icon') {
    classes = `${classes} ${getSpacingClass('padding', defaultPadding)}`;
  }

  if (children && React.isValidElement(children)) {
    const Element = React.cloneElement(children as React.ReactElement, { className: classes });

    return (
      <>
        {Element}
      </>
    );
  }

  return null;
};

UiButtonLink.displayName = 'UiButtonLink';

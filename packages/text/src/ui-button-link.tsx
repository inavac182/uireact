'use client';
import React from 'react';

import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

import { UiButtonLinkProps } from './types';

import styles from './ui-text.scss';

const defaultPadding: SpacingDistribution = { inline: 'four', block: 'three'};

export const UiButtonLink: React.FC<UiButtonLinkProps> = ({
  category = 'tertiary',
  children,
  coloration,
  handleClick,
  className = '',
  fullWidth,
  fontStyle,
  size = 'regular',
  testId,
  wrap,
  inverseTextColoration,
  margin,
  padding = defaultPadding
}: UiButtonLinkProps) => {
  let classes = `${className} ${styles.buttonLink} bg-${category}-100 hover-bg-${category}-150 active-bg-${category}-200`;

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (fullWidth) {
    classes = `${classes} fullWidth`;
  }

  if (fontStyle) {
    classes = `${classes} ${fontStyle}`;
  }

  let linkClasses = `color-${inverseTextColoration ? 'inverse-' : ''}fonts-100 size-${size}`;

  if (coloration) {
    linkClasses = `${linkClasses} ${coloration}`;
  }

  if (wrap) {
    linkClasses = `${linkClasses} ${styles.wrap}`;
  }

  if (margin || padding) {
    linkClasses = `${linkClasses} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)}`;
  }

  if (children && React.isValidElement(children)) {
    const Element = React.cloneElement(children as React.ReactElement, { className: linkClasses });

    return (
      <button
        onClick={handleClick}
        className={classes}
        data-testid={testId}
      >
        {Element}
      </button>
    );
  }

  return null;
};

UiButtonLink.displayName = 'UiButtonLink';

import * as React from 'react';

import { motion as MotionParent } from 'framer-motion';
import { getSpacingClass } from '@uireact/foundation';

import { UiButtonProps } from './types';
import { getButtonStylingClasses } from './helpers';

import styles from './ui-button.scss';

export const UiButton: React.FC<UiButtonProps> = ({
  onClick,
  className = '',
  disabled = false,
  children,
  id,
  category = 'primary',
  fullHeight = false,
  fullWidth = false,
  styling = 'filled',
  padding,
  margin,
  motion,
  ref,
  rounded = false,
  type = 'button',
  roundedSize = 'regular',
  testId,
  ...props
}: UiButtonProps) => {
  let classes = `${className} ${styles.button} ${getButtonStylingClasses(styling, category)}`;

  if (fullWidth) {
    classes = `${classes} ${styles.buttonFullWidth}`;
  }

  if (fullHeight) {
    classes = `${classes} ${styles.buttonFullHeight}`;
  }

  if (padding) {
    classes = `${classes} ${getSpacingClass('padding', padding)}`;
  }

  if (margin) {
    classes = `${classes} ${getSpacingClass('margin', margin)}`;
  }

  if (rounded) {
    classes = `${classes} radius-${roundedSize}`;
  } else if (styling === 'icon') {
    classes = `${classes} ${styles.buttonIcon}}`;
  } else {
    classes = `${classes} ${styles.buttonRadius}`;
  }

  return (
    <MotionParent.button
      onClick={onClick}
      data-testid={testId}
      id={id}
      className={classes}
      disabled={disabled}
      type={type}
      ref={ref}
      {...motion}
      {...props}
    >
      {children}
    </MotionParent.button>
  );
};

UiButton.displayName = 'UiButton';

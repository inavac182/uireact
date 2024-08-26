import * as React from 'react';

import { motion as MotionParent } from 'framer-motion';
import { getSpacingClass, SpacingDistribution } from '@uireact/foundation';

import { UiSecondaryButtonProps } from './types';
import { getSecondaryClasses } from './helpers';

import styles from './ui-button.scss';

const defaultPadding: SpacingDistribution = { block: 'one', inline: 'two' };

export const UiSecondaryButton: React.FC<UiSecondaryButtonProps> = ({
  onClick,
  className = '',
  disabled = false,
  children,
  id,
  fullHeight = false,
  fullWidth = false,
  padding,
  margin,
  motion,
  ref,
  icon = false,
  rounded = false,
  type = 'button',
  size = 'regular',
  testId,
  ...props
}: UiSecondaryButtonProps) => {
  let classes = `size-${size} ${className} ${styles.button} ${getSecondaryClasses(disabled)}`;

  if (fullWidth) {
    classes = `${classes} ${styles.buttonFullWidth}`;
  }

  if (fullHeight) {
    classes = `${classes} ${styles.buttonFullHeight}`;
  }

  classes = `${classes} ${getSpacingClass('padding', padding ?? defaultPadding)}`;

  if (margin) {
    classes = `${classes} ${getSpacingClass('margin', margin)}`;
  }

  if (rounded) {
    classes = `${classes} radius-${size}`;
  } else if (icon) {
    classes = `${classes} ${styles.buttonIcon}`;
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

UiSecondaryButton.displayName = 'UiSecondaryButton';

import React from 'react';

import { motion as MotionParent } from 'framer-motion';

import { UiIconProps } from './types';
import { IconComponent } from './public';

import styles from './ui-icon.scss';

export const UiIcon: React.FC<UiIconProps> = ({
  category = 'fonts',
  className = '',
  coloration,
  icon,
  size = 'regular',
  testId,
  inverseColoration,
  motion,
  weight = '100',
  ...props
}: UiIconProps) => {
  return (
    <MotionParent.span className={`${className} ${styles.icon} ${coloration ? coloration : ''} inline-block fill-${inverseColoration ? 'inverse-' : ''}${category}-${weight} size-${size} w-${size} h-${size}`} data-testid={testId} {...motion} {...props}>
      <IconComponent icon={icon} />
    </MotionParent.span>
  );
};

UiIcon.displayName = 'UiIcon';

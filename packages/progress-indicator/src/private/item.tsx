import React, { useEffect } from 'react';

import { privateProgressIndicatorItemProps } from '../types';
import styles from '../ui-progress-indicator-item.scss';

export const PrivateItem: React.FC<privateProgressIndicatorItemProps> = ({
  children,
  completed,
  current,
  completedStepClick,
  missing,
  step,
}: privateProgressIndicatorItemProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  let classes = `${styles.progressIndicatorItem}`

  if (missing) {
    classes = `${classes} ${styles.missing}`;
  }

  if (completedStepClick && completed) {
    classes = `${classes} pointer`;
  }

  if (current) {
    classes = `${classes} ${styles.currentStep}`;
  } else {
    classes = `${classes} ${styles.unbordered}`;
  }

  const handleOnClick = React.useCallback(() => {
    completed && completedStepClick?.(step);
  }, [completed, completedStepClick, step]);

  useEffect(() => {
    //istanbul ignore next
    if (current && ref.current?.scrollIntoView) {
      //istanbul ignore next
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }, [current]);

  return (
    <div
      className={classes}
      onClick={handleOnClick}
      ref={ref}
    >
      {children}
    </div>
  );
};

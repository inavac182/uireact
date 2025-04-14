import React, { useCallback, useState } from 'react';
import { motion } from 'motion/react';

import { UiText } from '@uireact/text';
import { UiIcon } from '@uireact/icons';

import { UiTooltipProps } from './types';

import styles from './ui-tooltip.scss';

const getAnimation = (position?: 'top' | 'bottom' | 'left' | 'right') => {
  if (position === 'bottom') {
    return { initial: { x: "-50%", y: "-10px"}, animate: { x: "-50%", y: "0px" } };
  } else if (position === 'left') {
    return { initial: { x: "10%", y: "-50%"}, animate: { x: "0%", y: "-50%" } };
  } else if (position === 'right') {
    return { initial: { x: "-10%", y: "-50%"}, animate: { x: "0%", y: "-50%" } };
  } else {
    return { initial: { x: "-50%", y: "10px"}, animate: { x: "-50%", y: "0px" } };
  }
};

export const UiTooltip: React.FC<UiTooltipProps> = ({
  category = 'primary',
  children,
  className = '',
  inverse = true,
  position = 'top',
  text,
  testId
}: UiTooltipProps) => {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const animation = getAnimation(position);
  let classes = `${className} ${styles.tooltip} bg-${inverse ? 'inverse-' : ''}${category}-100 color-${inverse ? 'inverse-' : ''}${category}-100 ${styles[`${position}Tooltip`]}`;

  const onMouseEnter = useCallback(() => {
    setToolbarVisible(true);
  }, [setToolbarVisible]);

  const onMouseLeave = useCallback(() => {
    setToolbarVisible(false);
  }, [setToolbarVisible]);

  return (
    <div className={styles.tooltipWrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {toolbarVisible && (
          <motion.div
            className={classes}
            data-testid={testId}
            role="tooltip"
            {...animation}
          >
            <UiIcon icon="CaretDown" className={`${styles[`${position}Caret`]} ${styles.caret}`} inverseColoration={inverse} category={category} size='large' />
            <UiText inverseColoration={inverse} inline>{text}</UiText>
          </motion.div>
      )}
    </div>
  );
};

UiTooltip.displayName = 'UiTooltip';

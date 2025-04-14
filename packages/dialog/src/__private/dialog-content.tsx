import React, { useContext } from 'react';

import { motion as MotionParent } from 'motion/react';

import { privateUiDialogProps } from '../types';
import { getDialogClasses } from './utils/get-dialog-classes';
import { useThemeDetector } from './utils/use-theme-detector';

export const DialogContent: React.FC<privateUiDialogProps> = ({ children, motion, gradientBorder, type }: privateUiDialogProps) => {
  const isDarkEnabled = useThemeDetector();
  const classes = getDialogClasses(type, gradientBorder, isDarkEnabled);

  return (
    <MotionParent.div className={classes.wrapper} role="dialog" {...motion} data-testid="UiDialogContentWrapper">
      <div className={classes.border} data-testid="UiDialogContentBorder">
        <div className={classes.content}  data-testid="UiDialogContent">
          {children}
        </div>
      </div>
    </MotionParent.div>
  );
};

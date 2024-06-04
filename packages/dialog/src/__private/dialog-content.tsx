import React, { useContext } from 'react';

import { motion as MotionParent } from 'framer-motion';
import { ThemeContext } from '@uireact/foundation';

import { privateUiDialogProps } from '../types';
import { getDialogClasses } from './utils/get-dialog-classes';

export const DialogContent: React.FC<privateUiDialogProps> = ({ children, motion, gradientBorder, type }: privateUiDialogProps) => {
  const themeContext = useContext(ThemeContext);
  const classes = getDialogClasses(type, gradientBorder, themeContext.selectedTheme);

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

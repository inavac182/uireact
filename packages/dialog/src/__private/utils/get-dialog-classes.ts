import { ThemeColor } from '@uireact/foundation';
import { UiDialogType } from '../../types';

import styles from '../../ui-dialog.scss';

type DialogClasses = { 
    wrapper: string, 
    content: string, 
    border: string 
}

export const getDialogClasses = (
    type?: UiDialogType, 
    gradientBorder?: 'all' | 'dark' | 'light', 
    selectedTheme?: ThemeColor
): DialogClasses => {
    let wrapperClasses = styles.contentWrapper;
    let borderClasses = styles.border;
    let contentClasses = styles.content;
  
    switch (type) {
      case UiDialogType.BOTTOM: 
        wrapperClasses = `${wrapperClasses} ${styles.bottom}`;
        contentClasses = `${contentClasses} ${styles.bottomRadius}`;
        borderClasses = `${borderClasses} ${styles.bottomRadius}`;
  
        if (gradientBorder === 'all') {
          borderClasses = `${borderClasses} ${styles.borderedBottom}`;
        } else if (gradientBorder === 'dark' && selectedTheme === ThemeColor.dark) {
          borderClasses = `${borderClasses} ${styles.borderedBottom}`;
        } else if (gradientBorder === 'light' && selectedTheme === ThemeColor.light) {
          borderClasses = `${borderClasses} ${styles.borderedBottom}`;
        }
  
        return {
          wrapper: wrapperClasses,
          border: borderClasses,
          content: contentClasses
        }
      case UiDialogType.CENTERED: 
        wrapperClasses = `${wrapperClasses} ${styles.centered}`;
        contentClasses = `${contentClasses} ${styles.centeredRadius}`;
        borderClasses = `${borderClasses} ${styles.centeredRadius}`;
  
        if (gradientBorder === 'all') {
          borderClasses = `${borderClasses} ${styles.bordered}`;
        } else if (gradientBorder === 'dark' && selectedTheme === ThemeColor.dark) {
          borderClasses = `${borderClasses} ${styles.bordered}`;
        } else if (gradientBorder === 'light' && selectedTheme === ThemeColor.light) {
          borderClasses = `${borderClasses} ${styles.bordered}`;
        }
  
        return {
          wrapper: wrapperClasses,
          border: borderClasses,
          content: contentClasses
        }
      case UiDialogType.LEFT: 
        wrapperClasses = `${wrapperClasses} ${styles.left}`;
        return {
          wrapper: wrapperClasses,
          border: borderClasses,
          content: contentClasses
        }
      case UiDialogType.RIGHT: 
        wrapperClasses = `${wrapperClasses} ${styles.right}`;
        return {
          wrapper: wrapperClasses,
          border: borderClasses,
          content: contentClasses
        }
      default: 
        wrapperClasses = `${wrapperClasses} ${styles.fullScreen}`;
        return {
          wrapper: wrapperClasses,
          border: borderClasses,
          content: contentClasses
        }
    }
};
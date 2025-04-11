import { UiDialogType } from '../../types';

import styles from '../../ui-dialog.scss';

type DialogClasses = { 
    wrapper: string, 
    content: string, 
    border: string 
}

export const getDialogClasses = (
    type?: UiDialogType, 
    gradientBorder?: 'all' | 'dark' | 'light' | 'none',
    isDarkEnabled?: boolean
): DialogClasses => {
    let wrapperClasses = styles.contentWrapper;
    let borderClasses = styles.border;
    let contentClasses = styles.content;
  
    switch (type) {
      case UiDialogType.BOTTOM: 
        wrapperClasses = `${wrapperClasses} ${styles.bottom}`;
        contentClasses = `${contentClasses} ${styles.bottomRadius}`;
        borderClasses = `${styles.bottomRadius}`;

        if (gradientBorder === 'all') {
          borderClasses = `${styles.border} ${borderClasses} ${styles.borderedBottom}`;
        } else if (gradientBorder === 'dark' && isDarkEnabled) {
          borderClasses = `${styles.border} ${borderClasses} ${styles.borderedBottom}`;
        } else if (gradientBorder === 'light' && !isDarkEnabled) {
          borderClasses = `${styles.border} ${borderClasses} ${styles.borderedBottom}`;
        }
  
        return {
          wrapper: wrapperClasses,
          border: borderClasses,
          content: contentClasses
        }
      case UiDialogType.CENTERED: 
        wrapperClasses = `${wrapperClasses} ${styles.centered}`;
        contentClasses = `${contentClasses} ${styles.centeredRadius}`;
        borderClasses = `${styles.centeredRadius}`;
  
        if (gradientBorder === 'all') {
          borderClasses = `${styles.border} ${borderClasses} ${styles.bordered}`;
        } else if (gradientBorder === 'dark' && isDarkEnabled) {
          borderClasses = `${styles.border} ${borderClasses} ${styles.bordered}`;
        } else if (gradientBorder === 'light' && !isDarkEnabled) {
          borderClasses = `${styles.border} ${borderClasses} ${styles.bordered}`;
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
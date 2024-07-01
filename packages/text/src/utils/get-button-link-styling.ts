import { ColorCategory } from "@uireact/foundation";
import styles from '../ui-text.scss';

export const getButtonLinkStyling = (category?: ColorCategory, styling?: 'clear' | 'icon') => {
  if (styling === 'clear') {
    return `hover-bg-${category}-150 hover-border-${category}-200 active-bg-${category}-200 active-border-${category}-200 ${styles.buttonLinkRadius}`;
  }

  if (styling === 'icon') {
    return `hover-bg-${category}-150 hover-border-${category}-200 active-bg-${category}-200 active-border-${category}-200 ${styles.buttonLinkIcon}`;
  }

  return `bg-${category}-100 border-${category}-100 hover-border-${category}-150 hover-bg-${category}-150 active-bg-${category}-200 ${styles.buttonLinkRadius}`;
};

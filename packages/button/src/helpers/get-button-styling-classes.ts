import { ColorCategory } from "@uireact/foundation";
import styles from '../ui-button.scss';

export const getButtonStylingClasses = (styling: 'filled' | 'clear' | 'icon' | 'outlined', category: ColorCategory, disabled?: boolean): string => {
    if (styling === 'icon') {
        if (disabled) {
            return `${styles.buttonIcon} bg-${category}-10`;
        }

        return `${styles.buttonIcon} clear-bg hover-bg-${category}-150 active-bg-${category}-200`;
    }

    if (styling === 'clear') {
        if (disabled) {
            return `${styles.buttonClear} bg-${category}-10`;
        }

        return `${styles.buttonClear} clear-bg hover-bg-${category}-100 active-bg-${category}-200`;
    }

    if (styling === 'outlined') {
        if (disabled) {
            return `${styles.buttonOutlined} border-${category}-10`;
        }

        return `${styles.buttonOutlined} border-${category}-100 hover-bg-${category}-100 active-bg-${category}-200 active-border-${category}-200 color-${category}-100 hover-color-${category}-100`;
    }

    if (disabled) {
        return `bg-${category}-10`;
    }

    return `bg-${category}-100 border-${category}-150 hover-bg-${category}-150 active-bg-${category}-200`;
};

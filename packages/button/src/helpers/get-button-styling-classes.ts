import { ColorCategory } from "@uireact/foundation";
import styles from '../ui-button.scss';

export const getButtonStylingClasses = (styling: 'filled' | 'clear' | 'icon' | 'outlined', category: ColorCategory): string => {
    if (styling === 'icon') {
        return `${styles.buttonIcon} hover-bg-${category}-100 active-bg-${category}-200`;
    }

    if (styling === 'clear') {
        return `${styles.buttonClear} hover-bg-${category}-100 active-bg-${category}-200`;
    }

    if (styling === 'outlined') {
        return `${styles.buttonOutlined} border-${category}-100 hover-bg-${category}-100 active-bg-${category}-200 color-${category}-100 hover-color-${category}-10`;
    }

    return `bg-${category}-100 border-${category}-150 hover-bg-${category}-150 active-bg-${category}-200`;
};

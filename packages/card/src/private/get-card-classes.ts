import { ColorCategory, ColorToken } from "@uireact/foundation";

import styles from '../ui-card.scss';

export const getCardClasses = (styling: 'filled' | 'outlined', category: ColorCategory, weight: ColorToken): string => {
    if (styling === 'outlined') {
        return `${styles.cardOutlined} border-${category}-100 color-${category}-100`;
    }

    return `bg-${category}-${weight} color-fonts-100`;
};

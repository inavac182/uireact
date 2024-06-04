import { UiGridProps } from '../types';

import styles from '../ui-grid.scss';

export const getGridClasses = (props: UiGridProps): string => {
    let classes = '';

    if (props.inlineGrid) {
        classes = `${classes} ${styles.inlineGrid}`
    } else {
        classes = `${classes} ${styles.grid}`
    }

    if (props.justifyItems) {
        classes = `${classes} ${styles[`justify-${props.justifyItems}`]}`
    }

    if (props.autoFlow) {
        classes = `${classes} ${styles[`autoflow-${props.autoFlow}`]}`
    }

    if (props.colsGap) {
        classes = `${classes} ${styles[`columnGap${props.colsGap}`]}`;
    }

    if (props.rowsGap) {
        classes = `${classes} ${styles[`rowGap${props.rowsGap}`]}`;
    }

    if(props.className) {
        classes = `${classes} ${props.className}`;
    }


    return classes;
}
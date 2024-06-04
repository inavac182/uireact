import { UiFlexGridProps } from '..';
import styles from '../ui-flex-grid.scss';

export const getFlexClasses = (props: UiFlexGridProps): string => {
    let classes = '';

    if (props.inline) {
        classes = `${classes} ${styles.inlineFlex}`
    } else {
        classes = `${classes} ${styles.flexGrid}`
    }

    if(props.alignItems) {
        classes = `${classes} ${styles[`align-${props.alignItems}`]}`;
    }

    if (props.direction) {
        classes = `${classes} ${styles[props.direction]}`;
    }
    
    if (props.gap) {
        classes = `${classes} gap-${props.gap}`;
    }

    if (props.columnGap) {
        classes = `${classes} ${styles[`columnGap${props.columnGap}`]}`;
    }

    if (props.rowGap) {
        classes = `${classes} ${styles[`rowGap${props.rowGap}`]}`;
    }

    if (props.wrap) {
        classes = `${classes} ${styles[props.wrap]}`;
    }

    if (props.justifyContent) {
        classes = `${classes} ${styles[`justify-${props.justifyContent}`]}`;
    }

    return classes;
};

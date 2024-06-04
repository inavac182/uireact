import { UiFlexGridItemProps } from '..';
import styles from '../ui-flex-grid-item.scss';

export const getFlexItemClasses = (props: UiFlexGridItemProps): string => {
    let classes = '';

    if (props.align) {
        classes = `${classes} ${styles[`align-${props.align}`]}`;
    }

    if (props.grow) {
        classes = `${classes} ${styles[`grow-${props.grow}`]}`;
    }

    if (props.shrink) {
        classes = `${classes} ${styles[`shrink-${props.shrink}`]}`;
    }

    return classes;
};

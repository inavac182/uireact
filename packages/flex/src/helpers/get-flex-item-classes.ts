import { UiFlexGridItemProps } from '..';
import styles from '../ui-flex-grid-item.scss';

export const getFlexItemClasses = (props: UiFlexGridItemProps): string => {
    let classes = '';

    if (props.align) {
        classes = `${classes} ${styles[`align-${props.align}`]}`;
    }

    return classes;
};
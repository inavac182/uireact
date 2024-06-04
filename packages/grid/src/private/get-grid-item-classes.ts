import { UiGridItemProps } from '../';

import styles from '../ui-grid-item.scss';

export const getGridItemClasses = (props: UiGridItemProps): string => {
    let classes = '';

    if(props.className) {
        classes = `${classes} ${props.className}`;
    }

    if (props.alignSelf) {
        classes = `${classes} ${styles[`align-self-${props.alignSelf}`]}`;
    }

    if (props.justifySelf) {
        classes = `${classes} ${styles[`justify-self-${props.justifySelf}`]}`;
    }

    if (props.placeSelf) {
        classes = `${classes} ${styles[`place-self-${props.placeSelf}`]}`;
    }

    return classes;
}
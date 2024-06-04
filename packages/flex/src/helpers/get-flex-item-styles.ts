import { CSSProperties } from "react";

import { UiFlexGridItemProps } from '../';

export const getFlexItemStyles = (props: UiFlexGridItemProps): CSSProperties => {
    return {
        flexGrow: props.grow ? props.grow : undefined,
        order: props.order ? props.order : undefined,
        flexShrink: props.shrink ? props.shrink : undefined
    };
};

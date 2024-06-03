import { AriaAttributes } from 'react';
import { SpacingDistribution, UiReactElementProps } from '@uireact/foundation';

export type UiListItemProps = {
    padding?: SpacingDistribution;
} & UiReactElementProps & AriaAttributes;

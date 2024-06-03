import { SpacingDistribution, UiReactElementProps } from '@uireact/foundation';
import { AriaAttributes } from 'react';

export type UiListProps = {
  /** Type of list, default UNORDERED */
  type?: 'BULLETED' | 'ORDERED' | 'UNORDERED';
  /** Padding to be applied to list */
  padding?: SpacingDistribution;
} & UiReactElementProps & AriaAttributes;

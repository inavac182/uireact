import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiListItemProps = {
  /** Type of list, default UNORDERED */
  type?: 'BULLETED' | 'ORDERED' | 'UNORDERED';
} & UiReactElementProps;

export type privateListItemProps = UiListItemProps & {
  type: 'BULLETED' | 'ORDERED' | 'UNORDERED';
} & UiReactPrivateElementProps;

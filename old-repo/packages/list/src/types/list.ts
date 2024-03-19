import { UiReactElementProps } from '@uireact/foundation';

export type UiListProps = {
  /** Type of list, default UNORDERED */
  type?: 'BULLETED' | 'ORDERED' | 'UNORDERED';
} & UiReactElementProps;

export type privateListProps = UiListProps & {
  type: 'BULLETED' | 'ORDERED' | 'UNORDERED';
};

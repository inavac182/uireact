import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiTabsProps = {
  /** For rounded corners */
  rounded?: boolean;
} & UiReactElementProps;

export type privateTabsProps = UiTabsProps & UiReactPrivateElementProps;

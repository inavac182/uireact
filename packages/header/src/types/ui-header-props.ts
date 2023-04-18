import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiHeaderProps = {
  /** Should the header render centered or fullscreen */
  centered?: boolean;

  /** Fixed at the top of the content */
  fixed?: boolean;
} & UiReactElementProps;

export type privateUiHeaderProps = UiHeaderProps & UiReactPrivateElementProps;

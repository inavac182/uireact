import { ColorToken, UiReactElementProps } from '@uireact/foundation';

export type UiHeaderProps = {
  /** Should the header render centered or fullscreen */
  centered?: boolean;

  /** Fixed at the top of the content */
  fixed?: boolean;

  /** Color weight for the header */
  weight?: ColorToken;
} & UiReactElementProps;

export type privateUiHeaderProps = {
  /** Fixed at the top of the content */
  $fixed?: boolean;
  /** Color weight for the header */
  $weight?: ColorToken;
};

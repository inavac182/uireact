import { ColorToken, SpacingDistribution, UiReactElementProps } from '@uireact/foundation';

export type UiHeaderProps = {
  /** Should the header render centered or fullscreen */
  centered?: boolean;
  /** Fixed at the top of the content */
  fixed?: boolean;
  /** Color weight for the header */
  weight?: ColorToken;
  /** Padding for header */
  padding?: SpacingDistribution;
} & UiReactElementProps;

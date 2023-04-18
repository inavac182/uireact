import { Theme, ThemeColor, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiViewProps = {
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** Selected color from theme */
  selectedTheme: ThemeColor;
  /** Theme for the view */
  theme: Theme;
} & UiReactElementProps;

export type privateViewProps = UiViewProps & UiReactPrivateElementProps;

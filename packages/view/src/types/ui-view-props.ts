import { Theme, ThemeColor, UiReactElementProps, IDialogController, ColorCategory } from '@uireact/foundation';

export type UiViewProps = {
  /** Color category for view row */
  category?: ColorCategory;
  /** Custom dialog controller for dialogs handling */
  dialogController?: IDialogController;
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** Selected color from theme */
  selectedTheme?: ThemeColor;
  /** If the view container should not render a bg */
  noBackground?: boolean;
  /** The weigth of the background color to use */
  weight?: '10' | '50' | '100' | '150' | '200';
  /** Disables the theme detector for user's device */
  skipThemeDetector?: boolean;
} & UiReactElementProps;

export type UiViewRowProps = {
  /** Color category for view row */
  category?: ColorCategory;
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** If the font color is inversed */
  inverseFont?: boolean;
  /** The weigth of the background color to use */
  weight?: '10' | '50' | '100' | '150' | '200';
  /** If the view container should not render a bg */
  noBackground?: boolean;
} & UiReactElementProps;

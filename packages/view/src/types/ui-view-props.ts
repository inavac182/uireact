import {
  Theme,
  ThemeColor,
  UiReactElementProps,
  UiReactPrivateElementProps,
  IDialogController,
  ColorCategory,
} from '@uireact/foundation';

export type UiViewProps = {
  dialogController?: IDialogController;
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** Selected color from theme */
  selectedTheme: ThemeColor;
  /** Theme for the view */
  theme: Theme;
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
} & UiReactElementProps;

export type privateViewProps = Omit<Omit<Omit<UiViewProps, 'selectedTheme'>, 'theme'>, 'dialogController'> &
  UiReactPrivateElementProps;
export type privateViewRowProps = {
  $centeredContent?: boolean;
  $weight?: '10' | '50' | '100' | '150' | '200';
  $category?: ColorCategory;
  $inverseFont?: boolean;
} & UiReactPrivateElementProps;

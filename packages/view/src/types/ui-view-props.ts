import {
  Theme,
  ThemeColor,
  UiReactElementProps,
  UiReactPrivateElementProps,
  IDialogController,
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
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** The weigth of the background color to use */
  weight?: '10' | '50' | '100' | '150' | '200';
} & UiReactElementProps;

export type privateViewProps = Omit<Omit<Omit<UiViewProps, 'selectedTheme'>, 'theme'>, 'dialogController'> &
  UiReactPrivateElementProps;
export type privateViewRowProps = UiViewRowProps & UiReactPrivateElementProps;

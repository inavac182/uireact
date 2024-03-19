import { ThemeColor } from './enums';
import { Theme } from './themes/theme';

export interface UiReactElementProps {
  /** Children components to render inside a react element */
  children?: React.ReactNode;
  /** Class name for HTML element */
  className?: string;
  /** Test id attribute used for UI Automation testing */
  testId?: string;
}

export type UiReactPrivateElementProps = UiReactElementProps & {
  /** Theme that is being used to retrieve tokens */
  $customTheme: Theme;
  /** selected theme color */
  $selectedTheme: ThemeColor;
};

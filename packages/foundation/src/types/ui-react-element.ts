import { Theme } from './themes/theme';

export interface UiReactElementProps {
  children?: React.ReactNode;
  className?: string;
  testId?: string;
}

export type UiReactPrivateElementProps = UiReactElementProps & {
  customTheme: Theme;
};

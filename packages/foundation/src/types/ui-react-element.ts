import { ThemeType } from './themes';

export interface UiReactElementProp {
  customTheme: ThemeType;
  children?: React.ReactNode;
  className?: string;
  testId?: string;
}

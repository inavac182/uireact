interface ThemeType {
  main: string;
}

export interface UiReactElementProp {
  theme?: ThemeType;
  children?: React.ReactNode;
  className?: string;
  testId?: string;
}

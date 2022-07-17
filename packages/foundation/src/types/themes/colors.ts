import { Tokens } from '.';

export interface Colors {
  backgrounds: Tokens;
  fonts: Tokens;
  primary: Tokens;
  secondary: Tokens;
  tertiary: Tokens;
  success?: Tokens;
  warning?: Tokens;
  errors?: Tokens;
  disabled?: Tokens;
}

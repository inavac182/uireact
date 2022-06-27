import { Colors, Spacing } from '.';

export interface Theme {
  /** Identifier of the theme */
  name: string;
  /** Set of color tokens for the theme */
  colors: Colors;
  /** Set of color tokens for the theme */
  spacing: Spacing;
}

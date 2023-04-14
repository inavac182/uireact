import { Texts, Sizes, Colors, Spacing } from './internal';

export type Theme = {
  /** Identifier of the theme */
  name: string;
  /** Texts values */
  texts: Texts;
  /** Set of sizes for theme */
  sizes: Sizes;
  /** Set of color tokens for the light theme */
  light: Colors;
  /** Set of color tokens for the dark theme */
  dark: Colors;
  /** Set of tokens spacing */
  spacing: Spacing;
};

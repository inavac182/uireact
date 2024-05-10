import { Texts, Sizes, Coloration, Spacing } from './internal';

export type Theme = {
  /** Identifier of the theme */
  name: string;
  /** Texts values */
  texts: Texts;
  /** Set of sizes for theme */
  sizes: Sizes;
  /** Set of color tokens for the light theme */
  light: Coloration;
  /** Set of color tokens for the dark theme */
  dark: Coloration;
  /** Set of tokens spacing */
  spacing: Spacing;
};

export enum ThemeProperties {
  name = "name",
  texts = "texts",
  sizes = "sizes",
  light = "light",
  dark = "dark",
  spacing = "spacing"
};

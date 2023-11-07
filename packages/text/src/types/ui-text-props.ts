import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

export type FontStyle = 'italic' | 'bold' | 'regular' | 'light';

export type InverseColorationProp = {
  light: boolean;
  dark: boolean;
};

export type UiTextProps = {
  /* Text size to be used, default is regular */
  size?: SizesProp;
  /* Render text centered */
  centered?: boolean;
  /** Font style */
  fontStyle?: FontStyle;
  /* Render text inlined */
  inline?: boolean;
  /* Represents the color category to use for the text, default PRIMARY */
  category?: ColorCategory;
  /** If the font color should be inversed to use its counter part coloration. */
  inverseColoration?: boolean | InverseColorationProp;
  /** Align text left or right, default LEFT */
  align?: 'left' | 'right';
  wrap?: boolean;
} & UiReactElementProps;

export type privateTextProps = {
  /* Text size to be used, default is regular */
  $size: SizesProp;
  /* Render text centered */
  $centered?: boolean;
  /** Font style */
  $fontStyle?: FontStyle;
  /* Render text inlined */
  $inline?: boolean;
  $category?: ColorCategory;
  $inverseColoration?: boolean | InverseColorationProp;
  $align?: 'left' | 'right';
  $wrap?: boolean;
};

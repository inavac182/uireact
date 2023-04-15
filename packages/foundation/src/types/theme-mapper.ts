import { ColorCategories, ColorTokens } from './enums';

/** Enum of possible HTML states */
export enum ThemeMapperStates {
  normal = 'normal',
  hover = 'hover',
  active = 'active',
  selected = 'selected',
  disabled = 'disabled',
  visited = 'visited',
  focus = 'focus',
}

/** Enum of possible CSS properties */
export enum ThemeMapperStyles {
  color = 'color',
  background = 'background',
  borderColor = 'border-color',
}

export type ThemeMapperValue = {
  /** Color category to be used in the current property */
  category: ColorCategories;
  /** Color token to be used in the current style */
  token: ColorTokens;
  /** Inverse theme, if dark is selected, light color will be used */
  inverse: boolean;
};

export type ThemeMapperStyle = {
  /** Mapping of CSS property with specific theme token value */
  [key in ThemeMapperStyles]?: ThemeMapperValue;
};

export type ThemeMapper = {
  /** Mapping of a HTML element state to specific styles */
  [key in ThemeMapperStates]?: ThemeMapperStyle;
};

/*
Example of a mapper object:

const mapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_10,
    },
  },
};

*/

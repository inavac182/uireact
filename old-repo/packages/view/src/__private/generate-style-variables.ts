import { css } from 'styled-components';

import { ColorCategories, ColorTokens, HeadingLevel, Sizing, TextSize, Theme, ThemeColor } from '@uireact/foundation';

export const generateColorsVariables = (theme: Theme, color: ThemeColor, preffix?: string): string => {
  let variables = '';
  const themeColoration = theme[color];

  Object.keys(themeColoration).map((category: string) => {
    const categoryTokens = themeColoration[category as ColorCategories];
    Object.keys(categoryTokens).map((token: string) => {
      const value = categoryTokens[token as ColorTokens];
      variables = `${variables} --${preffix ? `${preffix}-` : ''}${category}-${token}: ${value};`;
    });
  });

  return variables;
};

export const generateSizesVariables = (theme: Theme): string => {
  const headings = theme.sizes.headings;
  const texts = theme.sizes.texts;
  let sizes = '';

  Object.keys(headings).map((sizeKey) => {
    const value = headings[sizeKey as HeadingLevel];
    sizes = `${sizes} --headings-${sizeKey}: ${value};`;
  });

  Object.keys(texts).map((sizeKey) => {
    const value = texts[sizeKey as TextSize];
    sizes = `${sizes} --texts-${sizeKey}: ${value};`;
  });

  return sizes;
};

export const generateSpacingVariables = (theme: Theme): string => {
  const spacing = theme.spacing;
  let spacings = '';

  Object.keys(spacing).map((spacingKey) => {
    const value = spacing[spacingKey as Sizing];
    spacings = `${spacings} --spacing-${spacingKey}: ${value};`;
  });

  return spacings;
};

/* istanbul ignore next */
export const DarkThemeStyleVariables = css<{ $customTheme: Theme }>`
  ${(props) => generateColorsVariables(props.$customTheme, ThemeColor.dark)}
  ${(props) => generateColorsVariables(props.$customTheme, ThemeColor.light, 'inverse')}
`;

/* istanbul ignore next */
export const LightThemeStyleVariables = css<{ $customTheme: Theme }>`
  ${(props) => generateColorsVariables(props.$customTheme, ThemeColor.light)}
  ${(props) => generateColorsVariables(props.$customTheme, ThemeColor.dark, 'inverse')}
`;

/* istanbul ignore next */
export const SizesVariables = css<{ $customTheme: Theme }>`
  ${(props) => generateSizesVariables(props.$customTheme)}
`;

/* istanbul ignore next */
export const SpacingVariables = css<{ $customTheme: Theme }>`
  ${(props) => generateSpacingVariables(props.$customTheme)}
`;

/* istanbul ignore next */
export const FontFamilyVariable = css<{ $customTheme: Theme }>`
  ${(props) => `--font-family: ${props.$customTheme.texts.font};`}
`;

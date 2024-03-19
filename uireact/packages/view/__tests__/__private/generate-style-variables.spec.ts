import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import {
  generateColorsVariables,
  generateSizesVariables,
  generateSpacingVariables,
} from '../../src/__private/generate-style-variables';

describe('generateColorsVariables', () => {
  it('Should create correct color variables', () => {
    const colorVariables = generateColorsVariables(DefaultTheme, ThemeColor.dark);

    expect(colorVariables).toContain(`--primary-token_100: ${DefaultTheme.dark.primary.token_100};`);
    expect(colorVariables).toContain(`--secondary-token_10: ${DefaultTheme.dark.secondary.token_10};`);
    expect(colorVariables).toContain(`--tertiary-token_150: ${DefaultTheme.dark.tertiary.token_150};`);
    expect(colorVariables).toContain(`--positive-token_200: ${DefaultTheme.dark.positive.token_200};`);
  });

  it('Should create correct color variables with light theme', () => {
    const colorVariables = generateColorsVariables(DefaultTheme, ThemeColor.light);

    expect(colorVariables).toContain(`--primary-token_100: ${DefaultTheme.light.primary.token_100};`);
    expect(colorVariables).toContain(`--secondary-token_10: ${DefaultTheme.light.secondary.token_10};`);
    expect(colorVariables).toContain(`--tertiary-token_150: ${DefaultTheme.light.tertiary.token_150};`);
    expect(colorVariables).toContain(`--positive-token_200: ${DefaultTheme.light.positive.token_200};`);
  });

  it('Should create correct color variables with inverse', () => {
    const colorVariables = generateColorsVariables(DefaultTheme, ThemeColor.light, 'inverse');

    expect(colorVariables).toContain(`--inverse-positive-token_200: ${DefaultTheme.light.positive.token_200};`);
  });
});

describe('generateSizesVariables', () => {
  it('Should create correct texts variables', () => {
    const colorVariables = generateSizesVariables(DefaultTheme);

    expect(colorVariables).toContain(`--headings-level1: ${DefaultTheme.sizes.headings.level1};`);
    expect(colorVariables).toContain(`--headings-level6: ${DefaultTheme.sizes.headings.level6};`);
    expect(colorVariables).toContain(`--texts-xsmall: ${DefaultTheme.sizes.texts.xsmall};`);
    expect(colorVariables).toContain(`--texts-regular: ${DefaultTheme.sizes.texts.regular};`);
  });
});

describe('generateSpacingVariables', () => {
  it('Should create correct spacing variables', () => {
    const colorVariables = generateSpacingVariables(DefaultTheme);

    expect(colorVariables).toContain(`--spacing-one: ${DefaultTheme.spacing.one};`);
    expect(colorVariables).toContain(`--spacing-five: ${DefaultTheme.spacing.five};`);
  });
});

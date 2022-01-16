import { getColor } from '../../src';
import { Themes } from '../../src/themes/themes';
import { CategoryTheme } from '../../src/types';
import { StyleProps } from '../../src/types/themes/static-styles';

describe('getColor', () => {
  test('Should get the correct text colors from dark theme', () => {
    let value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, Themes.dark);
    expect(value).toBe(Themes.dark.colors.texts.paragraph);

    value = getColor(CategoryTheme.TEXTS, StyleProps.heading, Themes.dark);
    expect(value).toBe(Themes.dark.colors.texts.heading);
  });

  test('Should get the correct texts colors from light theme', () => {
    let value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, Themes.light);
    expect(value).toBe(Themes.light.colors.texts.paragraph);

    value = getColor(CategoryTheme.TEXTS, StyleProps.heading, Themes.light);
    expect(value).toBe(Themes.light.colors.texts.heading);
  });

  test('Should get the correct texts colors from a custom theme', () => {
    const customTheme = {
      ...Themes.dark,
      colors: {
        ...Themes.dark.colors,
        texts: { ...Themes.dark.colors.texts, paragraph: 'custom-color-paragraph', heading: 'custom-color-heading' },
      },
    };
    let value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, customTheme);
    expect(value).toBe('custom-color-paragraph');

    value = getColor(CategoryTheme.TEXTS, StyleProps.heading, customTheme);
    expect(value).toBe('custom-color-heading');
  });

  test('Should log error when color is not found', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = {
      ...Themes.dark,
      colors: { ...Themes.dark.colors, texts: { ...Themes.dark.colors.texts, paragraph: undefined } },
    };
    const value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'COLOR NOT FOUND IN CATEGORY');
    console.error = consoleError;
  });

  test('Should log error when static element is not found in theme', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {} };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'CATEGORY NOT FOUND IN THEME');
    console.error = consoleError;
  });

  test('Should log error when theme is an empty object', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });

  test('Should log error when theme is undefined', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getColor(CategoryTheme.TEXTS, StyleProps.paragraph, undefined);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });
});

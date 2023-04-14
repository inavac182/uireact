import { getThemeColor } from '../../src/themes';
import { Theme, ColorTokens, ColorCategories, ThemeColor } from '../../src/types';

const mockedTheme: Theme = {
  light: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    primary: {
      token_10: 'SomeValue',
    },
  },
};

it('get correct theme token', () => {
  const value = getThemeColor(mockedTheme, ThemeColor.light, ColorCategories.primary, ColorTokens.token_10);

  expect(value).toBe(mockedTheme.light.primary.token_10);
});

it('Should not break if theme color is not found', () => {
  const value = getThemeColor(mockedTheme, ThemeColor.dark, ColorCategories.primary, ColorTokens.token_10);

  expect(value).toBe('');
});

it('Should not break if theme category is not found', () => {
  const value = getThemeColor(mockedTheme, ThemeColor.light, ColorCategories.backgrounds, ColorTokens.token_10);

  expect(value).toBe('');
});

it('Should not break if category token is not found', () => {
  const value = getThemeColor(mockedTheme, ThemeColor.light, ColorCategories.backgrounds, ColorTokens.token_100);

  expect(value).toBe('');
});

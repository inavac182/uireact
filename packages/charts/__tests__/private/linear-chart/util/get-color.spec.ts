import { ColorCategories, DefaultTheme, ThemeColor } from '@uireact/foundation';
import { getColor } from '../../../../src/private/linear-chart/util';

describe('getColor', () => {
  it('Should get color string when string is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, ColorCategories.primary, '#ffffff');
    expect(color).toBe('#ffffff');
  });

  it('Should get color from dark theme when no color is passed and selected theme is dark', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, ColorCategories.primary);
    expect(color).toBe(DefaultTheme.dark.primary.token_100);
  });

  it('Should get correct color when themed color is passed and dark theme is selected', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, ColorCategories.primary, {
      dark: 'darkColor',
      light: 'lightColor',
    });
    expect(color).toBe('darkColor');
  });

  it('Should get correct color when themed color is passed and light theme is selected', () => {
    const color = getColor(DefaultTheme, ThemeColor.light, ColorCategories.primary, {
      dark: 'darkColor',
      light: 'lightColor',
    });
    expect(color).toBe('lightColor');
  });
});

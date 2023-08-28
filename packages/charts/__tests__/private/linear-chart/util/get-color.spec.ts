import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { getColor } from '../../../../src/private/linear-chart/util';

describe('getColor', () => {
  it('Should get color string when string is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, '#ffffff');
    expect(color).toBe('#ffffff');
  });

  it('Should get correct color when primary category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'primary');
    expect(color).toBe(DefaultTheme.dark.primary.token_100);
  });

  it('Should get correct color when secondary category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'secondary');
    expect(color).toBe(DefaultTheme.dark.secondary.token_100);
  });

  it('Should get correct color when tertiary category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'tertiary');
    expect(color).toBe(DefaultTheme.dark.tertiary.token_100);
  });

  it('Should get correct color when positive category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'positive');
    expect(color).toBe(DefaultTheme.dark.positive.token_100);
  });

  it('Should get correct color when error category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'error');
    expect(color).toBe(DefaultTheme.dark.error.token_100);
  });

  it('Should get correct color when negative category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'negative');
    expect(color).toBe(DefaultTheme.dark.negative.token_100);
  });

  it('Should get correct color when warning category is passed', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, 'warning');
    expect(color).toBe(DefaultTheme.dark.warning.token_100);
  });

  it('Should get color from dark theme when no color is passed and selected theme is dark', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark);
    expect(color).toBe(DefaultTheme.dark.primary.token_100);
  });

  it('Should get correct color when themed color is passed and dark theme is selected', () => {
    const color = getColor(DefaultTheme, ThemeColor.dark, {
      dark: 'darkColor',
      light: 'lightColor',
    });
    expect(color).toBe('darkColor');
  });

  it('Should get correct color when themed color is passed and light theme is selected', () => {
    const color = getColor(DefaultTheme, ThemeColor.light, {
      dark: 'darkColor',
      light: 'lightColor',
    });
    expect(color).toBe('lightColor');
  });
});

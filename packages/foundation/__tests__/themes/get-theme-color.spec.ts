import { DefaultTheme, getThemeColor } from '../../src/themes';
import { ColorCategories, ColorTokens, ThemeColor } from '../../src/types';

describe('getThemeColor', () => {
  it('Should get correct color', () => {
    const color = getThemeColor(
      DefaultTheme,
      ThemeColor.dark,
      ColorCategories.backgrounds,
      ColorTokens.token_100,
      false
    );

    expect(color).toBe(DefaultTheme.dark.backgrounds.token_100);
  });

  it('Should get correct color when using inverse', () => {
    let color = getThemeColor(DefaultTheme, ThemeColor.dark, ColorCategories.backgrounds, ColorTokens.token_100, true);

    expect(color).toBe(DefaultTheme.light.backgrounds.token_100);

    color = getThemeColor(DefaultTheme, ThemeColor.light, ColorCategories.backgrounds, ColorTokens.token_100, true);

    expect(color).toBe(DefaultTheme.dark.backgrounds.token_100);
  });

  it('Gets empty string when params are not recognized, dark theme and not inverse', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    let color = getThemeColor(DefaultTheme, 'XXXX', ColorCategories.backgrounds, ColorTokens.token_100, false);

    expect(color).toBe('');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    color = getThemeColor(DefaultTheme, ThemeColor.dark, 'XXXX', ColorTokens.token_100, true);

    expect(color).toBe('');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    color = getThemeColor(DefaultTheme, ThemeColor.light, ColorCategories.backgrounds, 'XXX', true);

    expect(color).toBe('');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    color = getThemeColor(null, ThemeColor.dark, ColorCategories.backgrounds, ColorTokens.token_100, false);

    expect(color).toBe('');
  });
});

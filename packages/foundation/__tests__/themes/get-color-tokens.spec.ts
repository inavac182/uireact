import { DefaultTheme, getColorTokens } from '../../src/themes';
import { ColorCategories, ThemeColor } from '../../src/types';

describe('getColorTokens', () => {
  it('Should get the correct color tokens for backgrounds', () => {
    const tokens = getColorTokens(DefaultTheme, ThemeColor.dark, ColorCategories.backgrounds);

    expect(tokens).toBe(DefaultTheme.dark.backgrounds);
  });
});

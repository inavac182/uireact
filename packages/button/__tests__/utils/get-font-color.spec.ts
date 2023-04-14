import { ThemeColor } from '@uireact/foundation';
import { getFontColor } from '../../src/utils/get-font-color';

describe('getFontColor', () => {
  describe('dark theme', () => {
    it('Should get font DARK color when category is primary', () => {
      const color = getFontColor(ThemeColor.dark, 'primary');

      expect(color).toBe(ThemeColor.light);
    });
    it('Should get font LIGHT color when category is secondary', () => {
      const color = getFontColor(ThemeColor.dark, 'secondary');

      expect(color).toBe(ThemeColor.dark);
    });
    it('Should get font DARK color when category is tertiary', () => {
      const color = getFontColor(ThemeColor.dark, 'tertiary');

      expect(color).toBe(ThemeColor.light);
    });
    it('Should get font DARK color when category is positive', () => {
      const color = getFontColor(ThemeColor.dark, 'positive');

      expect(color).toBe(ThemeColor.light);
    });
    it('Should get font DARK color when category is negative', () => {
      const color = getFontColor(ThemeColor.dark, 'negative');

      expect(color).toBe(ThemeColor.light);
    });
    it('Should get font DARK color when category is error', () => {
      const color = getFontColor(ThemeColor.dark, 'error');

      expect(color).toBe(ThemeColor.light);
    });
  });

  describe('light theme', () => {
    it('Should get font LIGHT color when category is primary', () => {
      const color = getFontColor(ThemeColor.light, 'primary');

      expect(color).toBe(ThemeColor.dark);
    });
    it('Should get font DARK color when category is secondary', () => {
      const color = getFontColor(ThemeColor.light, 'secondary');

      expect(color).toBe(ThemeColor.light);
    });
    it('Should get font LIGHT color when category is tertiary', () => {
      const color = getFontColor(ThemeColor.light, 'tertiary');

      expect(color).toBe(ThemeColor.dark);
    });
    it('Should get font LIGHT color when category is positive', () => {
      const color = getFontColor(ThemeColor.light, 'positive');

      expect(color).toBe(ThemeColor.dark);
    });
    it('Should get font LIGHT color when category is negative', () => {
      const color = getFontColor(ThemeColor.light, 'negative');

      expect(color).toBe(ThemeColor.dark);
    });
    it('Should get font LIGHT color when category is error', () => {
      const color = getFontColor(ThemeColor.light, 'error');

      expect(color).toBe(ThemeColor.dark);
    });
  });

  it('Should default to DARK color when category is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const color = getFontColor(ThemeColor.light);

    expect(color).toBe(ThemeColor.dark);
  });
});

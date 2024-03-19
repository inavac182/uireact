import {
  DefaultTheme,
  getTextSize,
  getHeadingSize,
  TextSize,
  getSpacingSize,
  getTextSizeFromSizeString,
} from '../../src';

describe('getTextSize', () => {
  it('Should get correct size', () => {
    const size = getTextSize(DefaultTheme, TextSize.large);

    expect(size).toBe(DefaultTheme.sizes.texts.large);
  });
});

describe('getSpacingSize', () => {
  it('Should get correct spacing', () => {
    const spacing = getSpacingSize(DefaultTheme, 'one');

    expect(spacing).toBe(DefaultTheme.spacing.one);
  });
});

describe('getHeadingSize', () => {
  it('Should default to level 3 when level is unrecognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const size = getHeadingSize(DefaultTheme, 'XXXXX');

    expect(size).toBe(DefaultTheme.sizes.headings.level3);
  });

  it('Should get correct size when level is 1', () => {
    const size = getHeadingSize(DefaultTheme, 1);

    expect(size).toBe(DefaultTheme.sizes.headings.level1);
  });

  it('Should get correct size when level is 2', () => {
    const size = getHeadingSize(DefaultTheme, 2);

    expect(size).toBe(DefaultTheme.sizes.headings.level2);
  });

  it('Should get correct size when level is 3', () => {
    const size = getHeadingSize(DefaultTheme, 3);

    expect(size).toBe(DefaultTheme.sizes.headings.level3);
  });

  it('Should get correct size when level is 4', () => {
    const size = getHeadingSize(DefaultTheme, 4);

    expect(size).toBe(DefaultTheme.sizes.headings.level4);
  });

  it('Should get correct size when level is 5', () => {
    const size = getHeadingSize(DefaultTheme, 5);

    expect(size).toBe(DefaultTheme.sizes.headings.level5);
  });

  it('Should get correct size when level is 6', () => {
    const size = getHeadingSize(DefaultTheme, 6);

    expect(size).toBe(DefaultTheme.sizes.headings.level6);
  });
});

describe('getTextSizeFromSizeString', () => {
  it('Should get correct size', () => {
    const size = getTextSizeFromSizeString(DefaultTheme, 'large');

    expect(size).toBe(DefaultTheme.sizes.texts.large);
  });
});

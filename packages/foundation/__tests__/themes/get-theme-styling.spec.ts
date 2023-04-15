import { DefaultTheme, getThemeStyling } from '../../src/themes';
import { ColorCategories, ColorTokens, ThemeColor, ThemeMapper } from '../../src/types';

const mockedMapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.backgrounds,
      inverse: false,
      token: ColorTokens.token_100,
    },
    color: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_150,
    },
  },
};

const mockedMapperWithHover: ThemeMapper = {
  hover: {
    background: {
      category: ColorCategories.backgrounds,
      inverse: false,
      token: ColorTokens.token_150,
    },
  },
};

const mockedMapperWithMultipleStates: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.backgrounds,
      inverse: false,
      token: ColorTokens.token_100,
    },
  },
  active: {
    background: {
      category: ColorCategories.backgrounds,
      inverse: false,
      token: ColorTokens.token_50,
    },
  },
  hover: {
    background: {
      category: ColorCategories.backgrounds,
      inverse: false,
      token: ColorTokens.token_150,
    },
  },
};

describe('getThemeStyling', () => {
  it('Should get correct styling when is not inverse', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.dark, mockedMapper);

    expect(style).toContain(`background: ${DefaultTheme.dark.backgrounds.token_100}`);
  });

  it('Should get correct styling when is inverse', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.dark, mockedMapper);

    expect(style).toContain(`color: ${DefaultTheme.light.fonts.token_150}`);
  });

  it('Should get correct styling when is inverse', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.light, mockedMapper);

    expect(style).toContain(`color: ${DefaultTheme.dark.fonts.token_150}`);
  });

  it('Should get correct styling when using a state different than normal', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.dark, mockedMapperWithHover);

    expect(style).toContain(`:hover {\nbackground: ${DefaultTheme.dark.backgrounds.token_150};\n}\n`);
  });

  it('Should get correct styling when using multiple states', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.dark, mockedMapperWithMultipleStates);

    expect(style).toContain(`background: ${DefaultTheme.dark.backgrounds.token_100}`);
    expect(style).toContain(`:hover {\nbackground: ${DefaultTheme.dark.backgrounds.token_150};\n}\n`);
    expect(style).toContain(`:active {\nbackground: ${DefaultTheme.dark.backgrounds.token_50};\n}\n`);
  });
});

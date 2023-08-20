import { DefaultTheme, getThemeStyling } from '../../src/themes';
import { ColorCategories, ColorTokens, ThemeColor, ThemeMapper } from '../../src/types';

const mockedMapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.primary,
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
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_150,
    },
  },
};

const mockedMapperWithMultipleStates: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_100,
    },
  },
  active: {
    background: {
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_50,
    },
  },
  hover: {
    background: {
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_150,
    },
  },
};

describe('getThemeStyling', () => {
  it('Should get correct styling when is not inverse', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.dark, mockedMapper);

    expect(style).toContain(`background: ${DefaultTheme.dark.primary.token_100}`);
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

    expect(style).toContain(`:hover {\nbackground: ${DefaultTheme.dark.primary.token_150};\n}\n`);
  });

  it('Should get correct styling when using multiple states', () => {
    const style = getThemeStyling(DefaultTheme, ThemeColor.dark, mockedMapperWithMultipleStates);

    expect(style).toContain(`background: ${DefaultTheme.dark.primary.token_100}`);
    expect(style).toContain(`:hover {\nbackground: ${DefaultTheme.dark.primary.token_150};\n}\n`);
    expect(style).toContain(`:active {\nbackground: ${DefaultTheme.dark.primary.token_50};\n}\n`);
  });

  describe('Incorrect mapper', () => {
    it('Should NOT break if mapper gets incorrect category', () => {
      const incorrectMapper = {
        active: {
          background: {
            category: 'INCORRECT-CATEGORY',
            inverse: false,
            token: ColorTokens.token_100,
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(`:active {\n}`);
    });

    it('Should NOT break if mapper does NOT include inverse', () => {
      const incorrectMapper = {
        active: {
          background: {
            category: 'INCORRECT-CATEGORY',
            token: ColorTokens.token_100,
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(`:active {\n}`);
    });

    it('Should NOT break if mapper does NOT include token', () => {
      const incorrectMapper = {
        active: {
          background: {
            category: 'INCORRECT-CATEGORY',
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(`:active {\n}`);
    });

    it('Should NOT break if mapper does NOT include styling property', () => {
      const incorrectMapper = {
        active: {
          background: {},
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(`:active {\n}`);
    });

    it('Should NOT break if mapper inclues incorrect styling', () => {
      const incorrectMapper = {
        normal: {
          WHATEVERSTYLE: {
            category: ColorCategories.primary,
            inverse: false,
            token: ColorTokens.token_100,
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(`WHATEVERSTYLE: ${DefaultTheme.dark.primary.token_100};`);
    });

    it('Should NOT break if mapper gets incorrect category', () => {
      const incorrectMapper = {
        WHATEVERCATEGORY: {
          background: {
            category: ColorCategories.primary,
            inverse: false,
            token: ColorTokens.token_100,
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(`:WHATEVERCATEGORY {\nbackground: ${DefaultTheme.dark.primary.token_100};\n}\n`);
    });

    it('Should NOT break if mapper does NOT includes styles', () => {
      const incorrectMapper = {
        normal: null,
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const style = getThemeStyling(DefaultTheme, ThemeColor.dark, incorrectMapper);

      expect(style).toContain(``);
    });
  });
});

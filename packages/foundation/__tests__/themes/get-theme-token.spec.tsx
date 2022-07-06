import { getThemeToken } from '../../src/themes';
import { Theme, ThemeMapper, ThemeMapperLevel, ThemeStyleProperty } from '../../src/types';

const mockedMapper: ThemeMapper = {
  base: {
    color: {
      state: 'primary',
      token: 'token_100',
    },
    border: {
      state: 'primary',
      token: 'token_200',
    },
  },
};

const mockedTheme: Theme = {
  colors: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    primary: {
      token_100: 'something',
    },
  },
};

beforeEach(() => {
  console.error = jest.fn();
});

it('get correct theme token', () => {
  const token = getThemeToken(ThemeMapperLevel.base, ThemeStyleProperty.color, mockedTheme, mockedMapper);

  expect(token).toBe(mockedTheme.colors.primary.token_100);
});

it('Should not break if level is not found in mapper', () => {
  const token = getThemeToken(ThemeMapperLevel.active, ThemeStyleProperty.color, mockedTheme, mockedMapper);

  expect(token).toBe('');
  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith('LEVEL IN THEME MAPPER NOT FOUND');
});

it('Should not break if style property is not found in mapper', () => {
  const token = getThemeToken(ThemeMapperLevel.base, ThemeStyleProperty.background, mockedTheme, mockedMapper);

  expect(token).toBe('');
  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith('STYLE PROPERTY IN THEME MAPPER NOT FOUND');
});

it('Should not break if token is not found in theme', () => {
  const token = getThemeToken(ThemeMapperLevel.base, ThemeStyleProperty.border, mockedTheme, mockedMapper);

  expect(token).toBe('');
  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith('COLOR NOT FOUND IN THEME');
});

import { Theme, ThemeMapper, ThemeMapperLevel, ThemeStyleProperty } from '../types';

export const getThemeToken = (
  level: ThemeMapperLevel,
  property: ThemeStyleProperty,
  theme: Theme,
  mapper: ThemeMapper
): string => {
  if (!mapper[level]) {
    console.error('LEVEL IN THEME MAPPER NOT FOUND');
    return '';
  }

  if (!mapper[level]?.[property]) {
    console.error('STYLE PROPERTY IN THEME MAPPER NOT FOUND');
    return '';
  }

  const themeKeys = mapper[level]?.[property] ?? {
    state: 'primary',
    token: 'token_100',
  };

  if (!theme.colors[themeKeys.state][themeKeys.token]) {
    console.error('COLOR NOT FOUND IN THEME');
    return '';
  }

  return theme.colors[themeKeys.state][themeKeys.token];
};

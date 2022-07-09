import { Theme, ThemeMapper, MapperLevel, MapperStyleProperty } from '../types';

export const getThemeToken = (
  level: MapperLevel,
  styleProperty: MapperStyleProperty,
  theme: Theme,
  mapper: ThemeMapper
): string => {
  if (!mapper[level]) {
    console.error('LEVEL IN THEME MAPPER NOT FOUND');
    return '';
  }

  if (!mapper[level]?.[styleProperty]) {
    console.error('STYLE PROPERTY IN THEME MAPPER NOT FOUND');
    return '';
  }

  const themeKeys = mapper[level]?.[styleProperty] ?? {
    key: 'base',
    token: 'token_100',
  };

  if (!theme.colors[themeKeys.key]?.[themeKeys.token]) {
    console.error('COLOR NOT FOUND IN THEME');
    return '';
  }

  return theme.colors[themeKeys.key]?.[themeKeys.token] || '';
};

export type ThemeKeys = {
  state: string;
  token: string;
};

export enum ThemeStyleProperty {
  color = 'color',
  background = 'background',
  border = 'border',
}

export type ThemeMapperProperty = {
  [keys in ThemeStyleProperty]?: ThemeKeys;
};

export enum ThemeMapperLevel {
  base = 'base',
  hover = 'hover',
  active = 'active',
  disabled = 'disabled',
}

export type ThemeMapper = {
  [keys in ThemeMapperLevel]?: ThemeMapperProperty;
};

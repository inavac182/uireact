import { Colors, Tokens } from '.';

export type TokenKey = {
  key: keyof Colors;
  token: keyof Tokens;
};

export enum MapperStyleProperty {
  color = 'color',
  background = 'background',
  border = 'border',
}

export type ThemeMapperStyleProperty = {
  [keys in MapperStyleProperty]?: TokenKey;
};

export enum MapperLevel {
  default = 'default',
  hover = 'hover',
  active = 'active',
  disabled = 'disabled',
}

export type ThemeMapper = {
  [keys in MapperLevel]?: ThemeMapperStyleProperty;
};

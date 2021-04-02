import { ThemeType } from '../types';
import { Dark } from './dark';
import { Light } from './light';

export interface DetaultThemesType {
  dark: ThemeType;
  light: ThemeType;
}

export const Themes: DetaultThemesType = {
  dark: Dark,
  light: Light,
};

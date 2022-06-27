import { Theme } from '../types';
import { Dark } from './dark';
import { Light } from './light';

interface DetaultThemesType {
  dark: Theme;
  light: Theme;
}

export const Themes: DetaultThemesType = {
  dark: Dark,
  light: Light,
};

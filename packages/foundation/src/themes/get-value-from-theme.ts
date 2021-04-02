import { CategoryTheme, DynamicElementsType, ThemeType } from '../types';
import { DynamicElementActionEnum, DynamicElementStateEnum } from '../types/themes/dynamicElement';
import { StaticElementEnum, StaticElementType } from '../types/themes/staticElement';
import { Themes } from './themes';

export const getValueFromStaticThemeElement = (
  category: CategoryTheme,
  value: StaticElementEnum,
  theme: 'dark' | 'light' | ThemeType
): string => {
  const selectedTheme = typeof theme === 'string' ? Themes[theme] : theme;

  if (!selectedTheme || !selectedTheme.colors) {
    console.error('THEME ERROR', 'THEME IS NOT VALID');
    return '';
  }

  const themeValues = selectedTheme.colors[category] as StaticElementType;

  if (!themeValues) {
    console.error('THEME ERROR', 'CATEGORY NOT FOUND IN THEME');
    return '';
  }

  const color = themeValues[value];

  if (!color) {
    console.error('THEME ERROR', 'COLOR NOT FOUND IN CATEGORY');
    return '';
  }

  return color;
};

export const getValueFromDynamicThemeElement = (
  category: CategoryTheme,
  value: StaticElementEnum,
  state: DynamicElementStateEnum,
  action: DynamicElementActionEnum,
  theme: 'dark' | 'light' | ThemeType
): string => {
  const selectedTheme = typeof theme === 'string' ? Themes[theme] : theme;

  if (!selectedTheme || !selectedTheme.colors) {
    console.error('THEME ERROR', 'THEME IS NOT VALID');
    return '';
  }

  const dynamicElements = selectedTheme.colors[category] as DynamicElementsType;

  if (!dynamicElements) {
    console.error('THEME ERROR', 'DYNAMIC ELEMENT CATEGORY NOT FOUND IN THEME');
    return '';
  }

  const dynamicElementState = dynamicElements[state];

  if (!dynamicElementState) {
    console.error('THEME ERROR', 'STATE NOT FOUND IN DYNAMIC THEME CATEGORY');
    return '';
  }

  const dynamicElementStateAction = dynamicElementState[action];

  if (!dynamicElementStateAction) {
    console.error('THEME ERROR', 'ACTION NOT FOUND IN STATE IN DYNAMIC THEME CATEGORY');
    return '';
  }

  const color = dynamicElementStateAction[value];

  if (!color) {
    console.warn('THEME WARN', 'color was NOT found');
    return '';
  }

  return color;
};

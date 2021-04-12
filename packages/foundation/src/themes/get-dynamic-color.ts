import {
  CategoryTheme,
  DynamicElementsType,
  ThemeType,
  DynamicElementActionEnum,
  DynamicElementStateEnum,
  StaticElementEnum,
} from '../types';

export const getDynamicColor = (
  category: CategoryTheme,
  value: StaticElementEnum,
  state: DynamicElementStateEnum,
  action: DynamicElementActionEnum,
  theme: ThemeType
): string => {
  if (!theme || !theme.colors) {
    console.error('THEME ERROR', 'THEME IS NOT VALID');
    return '';
  }

  const dynamicElements = theme.colors[category] as DynamicElementsType;

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

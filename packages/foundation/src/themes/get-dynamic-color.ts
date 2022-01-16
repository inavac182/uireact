import { StyleProps, ThemeType, Action, Status } from '../types';

export const getDynamicColor = (theme: ThemeType, style: StyleProps, action: Action, status: Status): string => {
  if (!theme || !theme.colors) {
    console.error('THEME ERROR', 'THEME IS NOT VALID');
    return '';
  }

  if (!theme.colors.statefulElements || !theme.colors.statefulElements[status]) {
    console.error('THEME ERROR', 'STATE NOT FOUND IN THEME');
    return '';
  }

  const stateFulElement = theme.colors.statefulElements[status];

  if (!stateFulElement) {
    console.error('THEME ERROR', 'ACTIONABLE ELEMENT NOT FOUND IN THEME');
    return '';
  }

  const actionableStyles = stateFulElement[action];

  if (!actionableStyles) {
    console.error('THEME ERROR', 'ACTION NOT FOUND IN THIS THEME');
    return '';
  }

  const color = actionableStyles[style];

  if (!color) {
    console.warn('THEME WARN', 'Color was NOT found');
    return '';
  }

  return color;
};

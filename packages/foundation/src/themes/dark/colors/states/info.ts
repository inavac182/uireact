import { ActionableStyles } from '../../../../types/themes/actionable-styles';
import { StaticStyles } from '../../../../types/themes/static-styles';

const normal: StaticStyles = {
  background: '#99ddff',
  border: '#4dc3ff',
  paragraph: '#000000',
  shadows: '#004080',
};

const active: StaticStyles = {
  background: '#0066cc',
  border: '#004d99',
  paragraph: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticStyles = {
  background: '#cce6ff',
  border: '#99ccff',
  paragraph: '#000000',
  shadows: '#66b3ff',
};

const hover: StaticStyles = {
  background: '#0080ff',
  border: '#0073e6',
  paragraph: '#ffffff',
  shadows: '#000000',
};

export const info: ActionableStyles = {
  normal,
  active,
  disabled,
  hover,
};

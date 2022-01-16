import { ActionableStyles } from '../../../../types/themes/actionable-styles';
import { StaticStyles } from '../../../../types/themes/static-styles';

const normal: StaticStyles = {
  background: '#1ab2ff',
  border: '#0099e6',
  paragraph: '#ffffff',
  shadows: '#004080',
};

const active: StaticStyles = {
  background: '#0066cc',
  border: '#004d99',
  paragraph: '#1a1a1a',
  shadows: '#000000',
};

const disabled: StaticStyles = {
  background: '#cce6ff',
  border: '#99ccff',
  paragraph: '#1a1a1a',
  shadows: '#66b3ff',
};

const hover: StaticStyles = {
  background: '#0080ff',
  border: '#0073e6',
  paragraph: '#1a1a1a',
  shadows: '#000000',
};

export const info: ActionableStyles = {
  normal,
  active,
  disabled,
  hover,
};

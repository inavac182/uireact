import { ActionableStyles } from '../../../../types/themes/actionable-styles';
import { StaticStyles } from '../../../../types/themes/static-styles';

const normal: StaticStyles = {
  background: '#ff1a1a',
  border: '#ff0000',
  paragraph: '#ffffff',
  shadows: '#000000',
};

const active: StaticStyles = {
  background: '#990000',
  border: '#800000',
  paragraph: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticStyles = {
  background: '#ffb3b3',
  border: '#ff9999',
  paragraph: '#330000',
  shadows: '#000000',
};

const hover: StaticStyles = {
  background: '#e60000',
  border: '#cc0000',
  paragraph: '#ffffff',
  shadows: '#000000',
};

export const error: ActionableStyles = {
  normal,
  active,
  disabled,
  hover,
};

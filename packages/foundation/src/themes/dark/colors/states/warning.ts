import { ActionableStyles } from '../../../../types/themes/actionable-styles';
import { StaticStyles } from '../../../../types/themes/static-styles';

const normal: StaticStyles = {
  background: '#ffa64d',
  border: '#ff9933',
  paragraph: '#000000',
  shadows: '#cc6600',
};

const active: StaticStyles = {
  background: '#b35900',
  border: '#994d00',
  paragraph: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticStyles = {
  background: '#fff2e6',
  border: '#ffe6cc',
  paragraph: '#000000',
  shadows: '#ffcc99',
};

const hover: StaticStyles = {
  background: '#ff8000',
  border: '#e67300',
  paragraph: '#ffffff',
  shadows: '#000000',
};

export const warning: ActionableStyles = {
  normal,
  active,
  disabled,
  hover,
};

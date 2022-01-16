import { ActionableStyles } from '../../../../types/themes/actionable-styles';
import { StaticStyles } from '../../../../types/themes/static-styles';

const normal: StaticStyles = {
  background: '#009933',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#009933',
  shadows: '#000000',
};

const active: StaticStyles = {
  background: '#248f24',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#009933',
  shadows: '#000000',
};

const disabled: StaticStyles = {
  background: '#d6f5d6',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#009933',
  shadows: '#000000',
};

const hover: StaticStyles = {
  background: '#33cc33',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#009933',
  shadows: '#000000',
};

export const success: ActionableStyles = {
  normal,
  active,
  disabled,
  hover,
};

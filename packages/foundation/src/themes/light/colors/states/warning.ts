import { DynamicElementType } from '../../../../types/themes/dynamicElement';
import { StaticElementType } from '../../../../types/themes/staticElement';

const normal: StaticElementType = {
  background: '#ffa64d',
  border: '#ff9933',
  paragraph: '#000000',
  shadows: '#cc6600',
};

const active: StaticElementType = {
  background: '#b35900',
  border: '#994d00',
  paragraph: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticElementType = {
  background: '#fff2e6',
  border: '#ffe6cc',
  paragraph: '#000000',
  shadows: '#ffcc99',
};

const hover: StaticElementType = {
  background: '#ff8000',
  border: '#e67300',
  paragraph: '#ffffff',
  shadows: '#000000',
};

export const warning: DynamicElementType = {
  normal,
  active,
  disabled,
  hover,
};

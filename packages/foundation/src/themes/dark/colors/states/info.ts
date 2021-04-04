import { DynamicElementType } from '../../../../types/themes/dynamicElement';
import { StaticElementType } from '../../../../types/themes/staticElement';

const normal: StaticElementType = {
  background: '#99ddff',
  border: '#4dc3ff',
  paragraph: '#000000',
  shadows: '#004080',
};

const active: StaticElementType = {
  background: '#0066cc',
  border: '#004d99',
  paragraph: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticElementType = {
  background: '#cce6ff',
  border: '#99ccff',
  paragraph: '#000000',
  shadows: '#66b3ff',
};

const hover: StaticElementType = {
  background: '#0080ff',
  border: '#0073e6',
  paragraph: '#ffffff',
  shadows: '#000000',
};

export const info: DynamicElementType = {
  normal,
  active,
  disabled,
  hover,
};

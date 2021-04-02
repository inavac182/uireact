import { DynamicElementType } from '../../../../types/themes/dynamicElement';
import { StaticElementType } from '../../../../types/themes/staticElement';

const normal: StaticElementType = {
  background: '#3399ff',
  border: '#0080ff',
  font: '#ffffff',
  shadows: '#004080',
};

const active: StaticElementType = {
  background: '#0066cc',
  border: '#004d99',
  font: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticElementType = {
  background: '#cce6ff',
  border: '#99ccff',
  font: '#000000',
  shadows: '#66b3ff',
};

const hover: StaticElementType = {
  background: '#0080ff',
  border: '#0073e6',
  font: '#ffffff',
  shadows: '#000000',
};

export const info: DynamicElementType = {
  normal,
  active,
  disabled,
  hover,
};

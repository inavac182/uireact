import { DynamicElementType } from '../../../../types/themes/dynamicElement';
import { StaticElementType } from '../../../../types/themes/staticElement';

const normal: StaticElementType = {
  background: '#1ab2ff',
  border: '#0099e6',
  paragraph: '#ffffff',
  shadows: '#004080',
};

const active: StaticElementType = {
  background: '#0066cc',
  border: '#004d99',
  paragraph: '#1a1a1a',
  shadows: '#000000',
};

const disabled: StaticElementType = {
  background: '#cce6ff',
  border: '#99ccff',
  paragraph: '#1a1a1a',
  shadows: '#66b3ff',
};

const hover: StaticElementType = {
  background: '#0080ff',
  border: '#0073e6',
  paragraph: '#1a1a1a',
  shadows: '#000000',
};

export const info: DynamicElementType = {
  normal,
  active,
  disabled,
  hover,
};

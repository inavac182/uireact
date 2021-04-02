import { DynamicElementType } from '../../../../types/themes/dynamicElement';
import { StaticElementType } from '../../../../types/themes/staticElement';

const normal: StaticElementType = {
  background: '#ff1a1a',
  border: '#ff0000',
  font: '#ffffff',
  shadows: '#000000',
};

const active: StaticElementType = {
  background: '#990000',
  border: '#800000',
  font: '#ffffff',
  shadows: '#000000',
};

const disabled: StaticElementType = {
  background: '#ffb3b3',
  border: '#ff9999',
  font: '#330000',
  shadows: '#000000',
};

const hover: StaticElementType = {
  background: '#e60000',
  border: '#cc0000',
  font: '#ffffff',
  shadows: '#000000',
};

export const error: DynamicElementType = {
  normal,
  active,
  disabled,
  hover,
};

import { StaticStyles } from '.';

export enum Action {
  NORMAL = 'normal',
  ACTIVE = 'active',
  HOVER = 'hover',
  DISABLED = 'disabled',
}

export type ActionableStyles = {
  [key in Action]: StaticStyles;
};

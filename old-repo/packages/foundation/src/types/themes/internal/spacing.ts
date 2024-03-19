import { Sizing } from '../../enums';

export type Spacing = {
  [key in Sizing]: string;
};

import { Tokens } from '.';
import { ColorCategories } from '../../enums';

export type Colors = {
  [key in ColorCategories]: Tokens;
};

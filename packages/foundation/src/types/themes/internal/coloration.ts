import { Tokens } from '.';
import { ColorCategories } from '../../enums';

export type Coloration = {
  [key in ColorCategories]: Tokens;
};

import { SpacingType } from './enums';

export type SpacingDistribution = {
  /** Applies size to all sides */
  all?: SpacingType;
  /** Applies size to top and bottom */
  block?: SpacingType;
  /** Applies size to left and right */
  inline?: SpacingType;
  /** Applies size to left */
  left?: SpacingType;
  /** Applies size to right */
  right?: SpacingType;
  /** Applies size to top */
  top?: SpacingType;
  /** Applies size to bottom */
  bottom?: SpacingType;
};

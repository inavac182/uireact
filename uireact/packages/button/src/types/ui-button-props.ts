import { MouseEvent } from 'react';

import { ColorCategory, SpacingDistribution } from '@uireact/foundation';

export type UiButtonProps = {
  /** onClick Handler */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
  /** Button id */
  id?: string;
  /** Button theme */
  category?: ColorCategory;
  /** If button should take full height */
  fullHeight?: boolean;
  /** If button should take full width */
  fullWidth?: boolean;
  /** Button paggin */
  padding?: SpacingDistribution;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
  /** Button with rounded corners */
  rounded?: boolean;
  /** The styling of the button to render */
  styling?: 'clear' | 'icon' | 'outlined';
};

export type privateButtonProps = {
  /** onClick Handler */
  $onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  styling?: 'clear' | 'icon' | 'outlined';
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
  /** render button without normal background */
  id?: string;
  /** Button theme */
  $category?: ColorCategory;
  /** If button should take full height */
  $fullHeight?: boolean;
  /** If button should take full width */
  $fullWidth?: boolean;
  $padding?: SpacingDistribution;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
  $rounded?: boolean;
  $styling?: 'clear' | 'icon' | 'outlined';
};

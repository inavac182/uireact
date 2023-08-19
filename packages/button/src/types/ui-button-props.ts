import { MouseEvent } from 'react';

import { ColorCategory, UiReactPrivateElementProps } from '@uireact/foundation';

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
  /** render button without normal background */
  cristal?: boolean;
  /** Button stylized for an icon */
  iconized?: boolean;
  /** Button id */
  id?: string;
  /** Button theme */
  theme?: ColorCategory;
  /** If button should take full height */
  fullHeight?: boolean;
  /** If button should take full width */
  fullWidth?: boolean;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
  /** Button with rounded corners */
  rounded?: boolean;
};

export type privateButtonProps = {
  /** onClick Handler */
  $onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
  /** render button without normal background */
  id?: string;
  $cristal?: boolean;
  /** Button theme */
  $theme?: ColorCategory;
  /** If button should take full height */
  $fullHeight?: boolean;
  /** If button should take full width */
  $fullWidth?: boolean;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
  $rounded?: boolean;
  $iconized?: boolean;
} & UiReactPrivateElementProps;

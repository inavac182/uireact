import { MouseEvent } from 'react';

import { UiReactPrivateElementProps } from '@uireact/foundation';

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
  /** Button type */
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'error';
  /** Visual button type */
  fullWidth?: boolean;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
};

export type privateButtonProps = UiButtonProps & UiReactPrivateElementProps;

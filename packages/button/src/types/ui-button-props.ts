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
};

export type privateButtonProps = UiButtonProps & UiReactPrivateElementProps;

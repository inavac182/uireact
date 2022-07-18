import { MouseEvent } from 'react';

import { UiReactPrivateElementProps } from '@uireact/foundation';

export interface UiButtonProps {
  /** onClick Handler */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
}

export type privateButtonProps = UiButtonProps & UiReactPrivateElementProps;

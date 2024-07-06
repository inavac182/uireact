import { AriaAttributes } from 'react';
import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

export type UiDigitsInputProps = {
  digits: number;
  disabled?: boolean;
  error?: string;
  label?: string;
  name?: string;
  category?: ColorCategory;
  onChange?: (digits: string) => void;
  onComplete?: (digits: string) => void;
  size?: SizesProp;
  required?: boolean;
  centered?: boolean;
} & UiReactElementProps & AriaAttributes;

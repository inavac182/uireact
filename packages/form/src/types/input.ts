import { ColorCategory, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiInputProps = {
  /** Input field disabled state */
  disabled?: boolean;
  /** Error label for input field */
  error?: string;
  /** Input name for form submittion */
  name?: string;
  /** Label for input field */
  label?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  theme?: ColorCategory;
  /** Input field type */
  type?: HTMLInputElement['type'];
  /** Input field value */
  value?: HTMLInputElement['value'];
} & UiReactElementProps;

export type privateInputProps = Omit<UiInputProps, 'theme'> & {
  category?: ColorCategory;
} & UiReactPrivateElementProps;

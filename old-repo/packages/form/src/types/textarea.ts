import { ColorCategory, UiReactElementProps } from '@uireact/foundation';

export type UiTextAreaProps = {
  /** Textarea cols */
  cols?: number;
  /** Textarea disabled state */
  disabled?: boolean;
  /** Error label for Textarea */
  error?: string;
  /** Textarea name for form submittion */
  name?: string;
  /** Label for Textarea field */
  label?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** Textarea max length */
  maxlength?: number;
  /** CB for when value in Textarea changes */
  onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  /** Placeholder string to render inside Textarea */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLTextAreaElement>;
  /** Textarea show resize option */
  resize?: boolean;
  /** Textarea rows*/
  rows?: number;
  /** Textarea state */
  category?: ColorCategory;
  /** Textarea value */
  value?: HTMLInputElement['value'];
  /** If the input is required */
  required?: boolean;
} & UiReactElementProps;

export type privateTextAreaProps = {
  /** Textarea cols */
  cols?: number;
  /** Textarea disabled state */
  disabled?: boolean;
  /** Error label for Textarea */
  $error?: string;
  /** Textarea name for form submittion */
  name?: string;
  /** Label for Textarea field */
  $label?: string;
  /** Label on top of field */
  $labelOnTop?: boolean;
  /** Textarea max length */
  $maxlength?: number;
  /** CB for when value in Textarea changes */
  onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  /** Placeholder string to render inside Textarea */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLTextAreaElement>;
  /** Textarea show resize option */
  $resize?: boolean;
  /** Textarea rows*/
  $rows?: number;
  /** Textarea value */
  value?: HTMLInputElement['value'];
  $category?: ColorCategory;
  required?: boolean;
};

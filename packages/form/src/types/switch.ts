import { ColorCategory, UiReactElementProps } from '@uireact/foundation';

export type UiSwitchProps = {
  /** If checkbox is checked */
  checked?: boolean;
  /** If checkbox is disabled */
  disabled?: boolean;
  /** Checkbox name used to identify it */
  name: string;
  /** Label to render next to checkbox */
  label?: string;
  /** Label position */
  labelPosition?: 'START' | 'END';
  /** On change CB to handle checked state */
  onChange?: () => void;
  /** React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Checkbox theme to render when checked */
  category?: ColorCategory;
} & UiReactElementProps;

export type privateSwitchProps = {
  /** If checkbox is checked */
  checked?: boolean;
  /** If checkbox is disabled */
  disabled?: boolean;
  /** Checkbox name used to identify it */
  name?: string;
  /** Label to render next to checkbox */
  $label?: string;
  /** Label position */
  $labelPosition?: 'START' | 'END';
  /** On change CB to handle checked state */
  onChange?: () => void;
  /** React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Checkbox theme to render when checked */
  $category?: ColorCategory;
};

export type privateSwitchLabelProps = {
  htmlFor?: string;
  $labelPosition?: 'START' | 'END';
};

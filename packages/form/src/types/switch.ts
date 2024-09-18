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
  /** The error label to be rendered in this input */
  error?: boolean;
  /** Label position */
  labelPosition?: 'start' | 'end';
  /** On change CB to handle checked state */
  onChange?: () => void;
  /** React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Checkbox theme to render when checked */
  category?: ColorCategory;
} & UiReactElementProps;

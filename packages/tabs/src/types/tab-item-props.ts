import { UiReactElementProps } from '@uireact/foundation';

export type UiTabItemProps<T> = {
  /** Tab identifier to be shared when clicked */
  identifier: T;
  /** Selected state for tab item */
  selected?: boolean;
  /** On click CB for tab item */
  handleClick: (identifier: T) => void;
} & UiReactElementProps;

import { UiReactElementProps } from '@uireact/foundation';

export type UiTimepickerProps = {
  /** The default selected hour in a 24 hours format, valid values: 0-24 */
  defaultHour?: number;
  /** The default selected minute in a 60 minutes, valid values: 0-60 */
  defaultMinute?: number;
  /** Callback executed when a date is selected */
  onTimeChange: (selectedHour?: number, selectedMinute?: number) => void;
  /** Callback executed when a closure action is triggered */
  onClose?: () => void;
  /** If the datepicker is opened */
  isOpen?: boolean;
  /** The close label used in the close button when `useDialogOnSmall` is passed and datepicker is opened on small breakpoint */
  closeLabel?: string;
  /** The label that renders on the hours heading */
  hoursLabel?: string;
  /** The label that renders on the minutes heading */
  minutesLabel?: string;
} & UiReactElementProps;

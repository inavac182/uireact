import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

import { DateTitleFormats } from './date-titles';

export type privateInputDatepickerProps = {
  /** Input autocomplete setting */
  autocomplete?: string;
  /** Input field disabled state */
  disabled?: boolean;
  /** Error label for input field */
  $error?: string;
  /** An icon element to be rendered inside the input */
  $icon?: React.ReactElement;
  /** Input name for form submittion */
  name?: string;
  /** Label for input field */
  $label?: string;
  /** Label on top of field */
  $labelOnTop?: boolean;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  $category?: ColorCategory;
  /** Input field value */
  value?: HTMLInputElement['value'];
  /** Input font size */
  $size?: SizesProp;
  /** If input is required */
  required?: boolean;
  $withIcon?: boolean;
};

export type UiDatePickerDateFormats = 'yyyy/mm/dd' | 'yyyy-mm-dd' | 'mm/dd/yyyy' | 'dd/mm/yyyy';

export type UiInputDatepickerProps = {
  /** Input field disabled state */
  disabled?: boolean;
  /** Error label for input field */
  error?: string;
  /** An icon element to be rendered inside the input */
  icon?: React.ReactElement;
  /** Input name for form submittion */
  name?: string;
  /** Date format for the input value */
  dateFormat?: UiDatePickerDateFormats;
  /** Label for input field */
  label?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange: (date: string) => void;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  category?: ColorCategory;
  /** Input field value, if not present will detault to today's date. */
  date?: Date;
  /** Input font size */
  size?: SizesProp;
  /** If input is required */
  required?: boolean;
  /** The format of the day title, e.g. Sunday vs Sun vs S */
  dayTitlesFormat?: DateTitleFormats;
  /** The format of the month title, e.g. December vs Dec vs D */
  monthTitlesFormat?: DateTitleFormats;
  /** This adds a highlighted background to todau's day in the datepicker */
  highlightToday?: boolean;
  /** The close label used in the close button when `useDialogOnSmall` is passed and datepicker is opened on small breakpoint */
  closeLabel?: string;
  /** Makes the following month from the passed `date` shown in the datepicker */
  showNextMonth?: boolean;
  /** Makes the datepicker render as fullscreen dialog on small devices */
  useDialogOnSmall?: boolean;
  /** Disables the dates in the past from the given date, if no date is passed today's date is used */
  disablePastDates?: boolean;
} & UiReactElementProps;

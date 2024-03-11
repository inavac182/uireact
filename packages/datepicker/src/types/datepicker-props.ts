import { UiReactElementProps } from '@uireact/foundation';
import { DateTitleFormats } from './date-titles';

export type UiDatepickerProps = {
  /** The date used to focus the datepicker */
  date?: Date;
  /** The format of the day title, e.g. Sunday vs Sun vs S */
  dayTitlesFormat?: DateTitleFormats;
  /** The format of the month title, e.g. December vs Dec vs D */
  monthTitlesFormat?: DateTitleFormats;
  /** This adds a highlighted background to todau's day in the datepicker */
  highlightToday?: boolean;
  /** Callback executed when a date is selected */
  onSelectDate: (selectedDate: Date) => void;
  /** Callback executed when a closure action is triggered */
  onClose?: () => void;
  /** Makes the following month from the passed `date` shown in the datepicker */
  showNextMonth?: boolean;
  /** Makes the datepicker render as fullscreen dialog on small devices */
  useDialogOnSmall?: boolean;
  /** If the datepicker is opened */
  isOpen?: boolean;
  /** The close label used in the close button when `useDialogOnSmall` is passed and datepicker is opened on small breakpoint */
  closeLabel?: string;
  /** Disable all past dates from the given date */
  disablePastDates?: boolean;
  /** Select init date */
  selectInitDate?: boolean;
} & UiReactElementProps;

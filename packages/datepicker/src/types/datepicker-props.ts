import { UiReactElementProps } from '@uireact/foundation';
import { DateTitleFormats } from './date-titles';

export type UiDatepickerLocalizedLabels = {
  months: {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
  },
  weekDays: {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
  }
}

export type UiDatepickerProps = {
  /** The date to initialize the datepicker, if empty today date is used */
  date?: Date;
  /** The format of the day title, e.g. Sunday vs Sun vs S, No usable if localized label provided */
  dayTitlesFormat?: DateTitleFormats;
  /** The format of the month title, e.g. December vs Dec vs D, No usable if localized label provided */
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
  /** Localized strings if you want to replace the current US locale labels */
  localizedLabels?: UiDatepickerLocalizedLabels;
  /** Render the datepicker without a floating menu */
  flatPicker?: boolean;
} & UiReactElementProps;

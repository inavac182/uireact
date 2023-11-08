import { UiReactElementProps } from '@uireact/foundation';
import { DateTitleFormats } from './date-titles';

export type UiDatepickerProps = {
  date: Date;
  dayTitlesFormat?: DateTitleFormats;
  monthTitlesFormat?: DateTitleFormats;
  highlightToday?: boolean;
  onSelectDate: (selectedDate: Date) => void;
  onClose?: () => void;
} & UiReactElementProps;

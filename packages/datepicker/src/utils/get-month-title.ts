import { DateTitle, DateTitleFormats, UiDatepickerLocalizedLabels } from '../types';

const months: DateTitle[] = [
  {
    complete: 'January',
    simple: 'Jan',
    minimal: 'J',
  },
  {
    complete: 'February',
    simple: 'Feb',
    minimal: 'F',
  },
  {
    complete: 'March',
    simple: 'Mar',
    minimal: 'M',
  },
  {
    complete: 'April',
    simple: 'Apr',
    minimal: 'A',
  },
  {
    complete: 'May',
    simple: 'May',
    minimal: 'M',
  },
  {
    complete: 'June',
    simple: 'Jun',
    minimal: 'J',
  },
  {
    complete: 'July',
    simple: 'Jul',
    minimal: 'J',
  },
  {
    complete: 'August',
    simple: 'Aug',
    minimal: 'A',
  },
  {
    complete: 'September',
    simple: 'Sep',
    minimal: 'S',
  },
  {
    complete: 'October',
    simple: 'Oct',
    minimal: 'O',
  },
  {
    complete: 'November',
    simple: 'Nov',
    minimal: 'N',
  },
  {
    complete: 'December',
    simple: 'Dec',
    minimal: 'D',
  },
];

export const getMonthTitle = (month: number, format: DateTitleFormats): string => {
  return months[month][format];
};

export const getLocalizedMonthLabel = (day: number, localizedLabels: UiDatepickerLocalizedLabels): string => {
  switch(day) {
    case 0: 
      return localizedLabels.months.january
    case 1: 
      return localizedLabels.months.february
    case 2: 
      return localizedLabels.months.march
    case 3: 
      return localizedLabels.months.april
    case 4: 
      return localizedLabels.months.may
    case 5: 
      return localizedLabels.months.june
    case 6: 
      return localizedLabels.months.july
    case 7: 
      return localizedLabels.months.august
    case 8: 
      return localizedLabels.months.september
    case 9: 
      return localizedLabels.months.october
    case 10: 
      return localizedLabels.months.november
    case 11: 
      return localizedLabels.months.december
    default:
      return '';
  }
}

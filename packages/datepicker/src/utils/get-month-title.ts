import { DateTitle, DateTitleFormats } from '../types';

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

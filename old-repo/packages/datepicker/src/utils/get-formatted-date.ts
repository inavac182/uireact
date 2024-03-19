import { UiDatePickerDateFormats } from '../types';

const getFormattedNumber = (day: number): string | number => {
  if (day < 10) {
    return `0${day}`;
  }

  return day;
};

export const getFormattedDate = (format: UiDatePickerDateFormats, date: Date): string => {
  if (format === 'yyyy/mm/dd') {
    return `${date.getFullYear()}/${getFormattedNumber(date.getMonth() + 1)}/${getFormattedNumber(date.getDate())}`;
  } else if (format === 'yyyy-mm-dd') {
    return `${date.getFullYear()}-${getFormattedNumber(date.getMonth() + 1)}-${getFormattedNumber(date.getDate())}`;
  } else if (format === 'dd/mm/yyyy') {
    return `${getFormattedNumber(date.getDate())}/${getFormattedNumber(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  return `${getFormattedNumber(date.getMonth() + 1)}/${getFormattedNumber(date.getDate())}/${date.getFullYear()}`;
};

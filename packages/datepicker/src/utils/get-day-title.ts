import { DateTitle } from '../types/date-titles';

const days: DateTitle[] = [
  { minimal: 'S', simple: 'Sun', complete: 'Sunday' },
  { minimal: 'M', simple: 'Mon', complete: 'Monday' },
  { minimal: 'T', simple: 'Tue', complete: 'Tuesday' },
  { minimal: 'W', simple: 'Wed', complete: 'Wednesday' },
  { minimal: 'T', simple: 'Thu', complete: 'Thursday' },
  { minimal: 'F', simple: 'Fri', complete: 'Friday' },
  { minimal: 'S', simple: 'Sat', complete: 'Saturday' },
];

export const getDayTitle = (day: number): DateTitle => {
  return days[day];
};

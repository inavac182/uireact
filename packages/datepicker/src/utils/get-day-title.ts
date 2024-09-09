import { UiDatepickerLocalizedLabels } from 'types';
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

export const getLocalizedWeekLabel = (day: number, localizedLabels: UiDatepickerLocalizedLabels): string => {
  switch(day) {
    case 0: 
      return localizedLabels.weekDays.sunday
    case 1: 
      return localizedLabels.weekDays.monday
    case 2: 
      return localizedLabels.weekDays.tuesday
    case 3: 
      return localizedLabels.weekDays.wednesday
    case 4: 
      return localizedLabels.weekDays.thursday
    case 5: 
      return localizedLabels.weekDays.friday
    case 6: 
      return localizedLabels.weekDays.saturday
    default:
      return '';
  }
}


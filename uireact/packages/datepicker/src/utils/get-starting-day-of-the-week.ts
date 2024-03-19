export const getStartingDayOfTheWeek = (month: number, year: number): number => {
  return new Date(year, month, 1).getDay();
};

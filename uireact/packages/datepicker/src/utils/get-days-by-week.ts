export const getDaysByWeek = (days: number, startingDayOfWeek: number): number[][] => {
  let daysTillEndOfFirstWeek = 7 - startingDayOfWeek;
  const weeks: number[][] = [];
  const week: number[] = [];

  [...Array(days)].map((value, index) => {
    const day = index + 1;
    week.push(day);

    if (day === daysTillEndOfFirstWeek) {
      weeks.push([...week]);
      week.length = 0;
      daysTillEndOfFirstWeek = day + 7;
    }
  });

  if (week.length > 0) {
    weeks.push(week);
  }

  return weeks;
};

export const getPercentage = (limit: number, current: number): number => {
  let percentage = 0;

  if (current > limit) {
    percentage = 100;
  } else {
    percentage = Math.round((current * 100) / limit);
  }

  return percentage;
};

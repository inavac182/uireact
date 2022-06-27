export const scaleColor = (perc: number, color: string): string => {
  let r, g;
  const b = 0;

  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * perc);
  }

  const h = r * 0x10000 + g * 0x100 + b * 0x1;

  return '#' + (color + h.toString(16)).slice(-6);
};

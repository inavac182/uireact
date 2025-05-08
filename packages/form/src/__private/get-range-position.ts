export const getRangePosition = (min: number, max: number, value?: number, step?: number) => {
  if (value === 0 || !value) {
    return 0;
  }

  const numericValue = parseInt(value.toString());

  if (numericValue < min) {
    return 0;
  }

  if (numericValue > max) {
    return 100;
  }

  const range = max - min;
  let selected = numericValue - min;

  if (step) {
    const baseValue = numericValue - min;
    const isSelectable = (baseValue % step) === 0;

    if (!isSelectable) {
      const nextSelectable = numericValue + (baseValue % step);
      selected = nextSelectable - min;
    }
  }

  return (selected / range) * 100;
};


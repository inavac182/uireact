export const getRangePosition = (min: number, max: number, value?: number, step?: number) => {
  if (value === 0 || !value) {
    return 0;
  }

  const range = max - min;
  let selected = value - min;

  if (step) {
    const baseValue = value - min;
    const isSelectable = (baseValue % step) === 0;

    if (!isSelectable) {
      const nextSelectable = value + (baseValue % step);
      selected = nextSelectable - min;
    }
  }

  return (selected / range) * 100;
};


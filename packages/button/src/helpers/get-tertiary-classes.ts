export const getTertiaryClasses = (disabled?: boolean) => {
  if (disabled) {
    return 'transparent bg-primary-100 color-secondary-50';
  }

  return 'transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 ';
};

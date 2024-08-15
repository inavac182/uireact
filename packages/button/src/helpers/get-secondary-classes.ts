export const getSecondaryClasses = (disabled?: boolean) => {
  if (disabled) {
    return 'bg-secondary-50 border-secondary-100 color-inverse-fonts-50';
  }

  return 'bg-primary-100 border-primary-150 hover-bg-primary-150 hover-border-primary-200 active-bg-primary-200 active-border-primary-200 color-secondary-100';
}
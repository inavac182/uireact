export const getPrimaryClasses = (disabled?: boolean) => {
  if (disabled) {
    return 'bg-secondary-50 border-secondary-100 color-inverse-fonts-50';
  }

  return 'bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10';
}

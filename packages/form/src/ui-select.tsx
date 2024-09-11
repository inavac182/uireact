import React, { FormEvent, useCallback } from 'react';

import { UiText, UiLabel } from '@uireact/text';

import { UiSelectProps } from './types';
import styles from './ui-select.scss';

export const UiSelect: React.FC<UiSelectProps> = ({
  children,
  className = '',
  testId,
  disabled,
  defaultValue,
  error,
  label,
  labelOnTop,
  name = 'select-name',
  ref,
  category = 'primary',
  value,
  onChange,
  required,
  size = 'regular',
  ...props
}: UiSelectProps) => {
  const handleChange = useCallback(
    (e: FormEvent<HTMLSelectElement> | undefined) => {
      // istanbul ignore next
      onChange?.(e?.currentTarget.value);
    },
    [onChange]
  );

  return (
    <div className={`${styles.selectWrapper} ${labelOnTop ? styles.selectWrapperAlignedColumn : ''}`} data-testid={testId}>
      {label && (
        <UiLabel htmlFor={name} category={category === 'primary' ? 'fonts' : category}>
          {label}
        </UiLabel>
      )}
      <div className={styles.selectDiv}>
        <div className={styles.selectContainer}>
          <select
            className={`${className} ${styles.select} bg-primary-10 border-${category}-150 color-fonts-100 hover-border-${category}-200 size-${size} focus-border-tertiary-200`}
            disabled={disabled}
            id={name}
            name={name}
            onChange={handleChange}
            ref={ref}
            value={value}
            required={required}
            defaultValue={defaultValue}
            {...props}
          >
            {children}
          </select>
          {error && <UiText category={category}>{error}</UiText>}
        </div>
      </div>
    </div>
  );
};

UiSelect.displayName = 'UiSelect';

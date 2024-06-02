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
    <div className={styles.selectWrapper} data-testid={testId}>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} category={category}>
            {label}
          </UiLabel>
        </div>
      )}
      <div>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name} category={category}>
              {label} &nbsp;
            </UiLabel>
          </div>
        )}
        <div className={styles.selectContainer}>
          <select
            className={`${className} ${styles.select} bg-${category}-100 border-${category}-150 color-fonts-100 hover-bg-${category}-150 hover-border-${category}-200 size-${size} focus-border-tertiary-200`}
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

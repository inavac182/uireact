import React from 'react';

import { UiText, UiLabel } from '@uireact/text';
import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

import { UiInputProps } from './types';
import styles from './ui-input.scss';

const defaultPadding: SpacingDistribution = { block: 'one', inline: 'one' };

export const UiInput: React.FC<UiInputProps> = ({
  autoComplete,
  className = '',
  testId,
  disabled,
  error,
  icon,
  label,
  labelOnTop,
  name = 'input-name',
  placeholder,
  ref,
  category,
  type,
  value,
  onChange,
  size = 'regular',
  padding = defaultPadding,
  required,
  ...props
}: UiInputProps) => {
  const paddingClass = getSpacingClass('padding', padding);

  return (
    <div className={`${styles.wrapperInput} ${labelOnTop ? styles.wrapperAlignedColumn : ''}`} data-testid={testId}>
      {label && (
          <UiLabel htmlFor={name} category={category === 'primary' ? 'fonts' : category}>
            {label} &nbsp;
          </UiLabel>
      )}
      <div className={styles.inputDiv}>
        <div className={styles.inputContentDiv}>
          {icon && <div className={styles.inputIconContainer} aria-hidden>{icon}</div>}
          <input
            autoComplete={autoComplete}
            disabled={disabled}
            className={`${className} ${styles.input} ${paddingClass} bg-primary-10 border-${category ? category : 'primary'}-100 focus-border-${category ? category : 'tertiary'}-100 ${icon ? styles.inputIcon : ''} size-${size}`}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            type={type}
            value={value}
            required={required}
            {...props}
          />
        </div>
        {error && <UiText category={category}>{error}</UiText>}
      </div>
    </div>
  );
};
UiInput.displayName = 'UiInput';

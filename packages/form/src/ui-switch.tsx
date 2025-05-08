'use client';
import React from 'react';

import { UiText } from '@uireact/text';

import { UiSwitchProps } from './types';
import styles from './ui-switch.scss';

export const UiSwitch: React.FC<UiSwitchProps> = ({
  checked,
  disabled,
  label,
  error,
  className = '',
  testId,
  labelPosition = 'end',
  name,
  ref,
  category = 'tertiary',
  onChange,
}: UiSwitchProps) => (
  <div className={`${className} ${styles.switch}`} data-testid={testId}>
    <div>
      <input
        checked={checked}
        disabled={disabled}
        id={name}
        name={name}
        type="checkbox"
        ref={ref}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <label htmlFor={name} className={styles.switchLabel} tabIndex={0}>
        <>
          {labelPosition === 'start' && <span>{label}</span>}
          <span className={`${styles.checkboxPillWrapper} ${checked ? `bg-${category}-100` : 'bg-primary-100'} border-primary-200`} >
            <span className={`${styles.checkboxPillDot}  ${checked ? styles.checkedDot : ''}`} />
          </span>
          {labelPosition === 'end' && <span>{label}</span>}
        </>
      </label>
    </div>
    {error && <UiText category='error'>{error}</UiText>}
  </div>
);

UiSwitch.displayName = 'UiSwitch';

'use client';
import React from 'react';

import { UiSwitchProps } from './types';
import styles from './ui-switch.scss';

export const UiSwitch: React.FC<UiSwitchProps> = ({
  checked,
  disabled,
  label,
  className,
  testId,
  labelPosition = 'end',
  name,
  ref,
  category = 'tertiary',
  onChange,
}: UiSwitchProps) => (
  <div className={`${className} ${styles.switch}`} data-testid={testId}>
    <input
      checked={checked}
      disabled={disabled}
      id={name}
      name={name}
      type="checkbox"
      ref={ref}
      onChange={onChange}
      className={styles.checkboxInput}
    />{' '}
    <label htmlFor={name} className={styles.switchLabel}>
      <>
        {labelPosition === 'start' && <span>{label}</span>}
        <span className={`${styles.checkboxPillWrapper} ${checked ? `bg-${category}-100` : 'bg-fonts-100'}`}>
          <span className={`${styles.checkboxPillDot}  ${checked ? styles.checkedDot : ''}`} />
        </span>
        {labelPosition === 'end' && <span>{label}</span>}
      </>
    </label>
  </div>
);

UiSwitch.displayName = 'UiSwitch';

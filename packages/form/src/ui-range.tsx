import React from 'react';

import { UiText, UiLabel } from '@uireact/text';
import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

import { UiRangeInputProps } from './types';
import styles from './ui-range.scss';
import inputStyles from './ui-input.scss';

const defaultPadding: SpacingDistribution = { block: 'one', inline: 'one' };

export const UiRangeInput: React.FC<UiRangeInputProps> = ({
  className = '',
  testId,
  disabled,
  error,
  icon,
  label,
  labelOnTop,
  name = 'input-name',
  ref,
  category,
  min,
  max,
  value,
  onChange,
  padding = defaultPadding,
  showRangeLabels,
  required,
  ...props
}: UiRangeInputProps) => {
  const paddingClass = getSpacingClass('padding', padding);
  const alignment = labelOnTop ? "Start" : showRangeLabels ? "End" : "Center";

  return (
    <div 
      className={`${labelOnTop ? styles.wrapperAlignedColumn : styles.wrapperInput} ${styles[`alignment${alignment}`]}`} 
      data-testid={testId}
    >
      {label && (
          <UiLabel htmlFor={name} category={category === 'primary' ? 'fonts' : category}>
            {label} &nbsp;
          </UiLabel>
      )}
      <div className={inputStyles.inputDiv}>
        <div className={inputStyles.inputContentDiv}>
          {icon && <div className={inputStyles.inputIconContainer} aria-hidden>{icon}</div>}
          <div className={`${styles.inputContainer} ${icon ? styles.inputIcon : ''} ${paddingClass}`}>
            {showRangeLabels && (
              <div className={styles.rangeLabelsContainer}>
                <p>{min}</p>
                <p>{max}</p>
              </div>
            )}
            <input
              disabled={disabled}
              className={`${className} ${category ? styles[category] : "tertiary"} ${styles.uiRangeInput}`}
              id={name}
              name={name}
              onChange={onChange}
              ref={ref}
              type="range"
              value={value}
              required={required}
              {...props}
            />
          </div>
        </div>
        {error && <UiText category={category}>{error}</UiText>}
      </div>
    </div>
  );
};

UiRangeInput.displayName = 'UiRangeInput';

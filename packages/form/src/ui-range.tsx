import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { UiText, UiLabel } from '@uireact/text';
import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

import { UiRangeInputProps } from './types';
import styles from './ui-range.scss';
import inputStyles from './ui-input.scss';
import { getRangePosition } from './__private';

const defaultPadding: SpacingDistribution = { block: 'one', inline: 'one' };

export const UiRangeInput: React.FC<UiRangeInputProps> = ({
  className = '',
  testId,
  disabled,
  error,
  icon,
  label,
  labelOnTop,
  name,
  ref,
  category,
  min,
  max,
  value,
  onChange,
  padding = defaultPadding,
  showRangeLabels,
  step,
  required,
  prefix,
  ...props
}: UiRangeInputProps) => {
  const [innerValue, setInnerValue] = useState<number>(value || min);
  const [position, setPosition] = useState(0);
  const paddingClass = getSpacingClass('padding', padding);
  const alignment = labelOnTop ? "Start" : showRangeLabels ? "End" : "Center";
  const minLabel = prefix ? `${prefix}${min}` : min;
  const maxLabel = prefix ? `${prefix}${max}` : max;
  const valueLabel = prefix ? `${prefix}${innerValue}` : innerValue;

  const internalOnChange = useCallback((value: FormEvent<HTMLInputElement>) => {
    onChange(value);
  }, [onChange]);

  useEffect(() => {
    setPosition(getRangePosition(min, max, value, step));
  }, [min, max, value, step]);

  useEffect(() => {
    const cleanedValue = value || min;

    if (step) {
      const baseValue = cleanedValue - min;
      const isSelectable = (baseValue % step) === 0;

      if (isSelectable) {
        setInnerValue(cleanedValue);
      } else {
        const nextSelectable = cleanedValue + (baseValue % step);
        setInnerValue(nextSelectable);
      }
    } else {
      setInnerValue(cleanedValue);
    }
  }, [value, step, min]);

  return (
    <div 
      className={`${labelOnTop ? styles.wrapperAlignedColumn : styles.wrapperInput} ${styles[`alignment${alignment}`]}`} 
      data-testid={testId}
    >
      {label && (
          <UiLabel htmlFor={name} category={category !== 'error' ? 'fonts' : category}>
            {label} &nbsp;
          </UiLabel>
      )}
      <div className={inputStyles.inputDiv}>
        <div className={inputStyles.inputContentDiv}>
          {icon && <div className={inputStyles.inputIconContainer} aria-hidden>{icon}</div>}
          <div className={`${styles.inputContainer} ${icon ? styles.inputIcon : ''} ${paddingClass}`}>
            {showRangeLabels && <p>{minLabel}</p>}
              <div className={styles.rangeContainer}>
                <div className={styles.selectedValueLabelContainer}>
                  <p className={styles.selectedValueLabel} style={{ left: `${position}%`, transform: `translateX(-${position}%)` }}>{valueLabel}</p>
                </div>
                <input
                  disabled={disabled}
                  className={`${className} ${category ? styles[category] : "tertiary"} ${styles.uiRangeInput}`}
                  id={name}
                  name={name}
                  step={step}
                  onChange={internalOnChange}
                  ref={ref}
                  type="range"
                  value={innerValue}
                  required={required}
                  min={min}
                  max={max}
                  {...props}
                />
              </div>
              {showRangeLabels && <p>{maxLabel}</p>}
          </div>
        </div>
        {error && <UiText category={category}>{error}</UiText>}
      </div>
    </div>
  );
};

UiRangeInput.displayName = 'UiRangeInput';

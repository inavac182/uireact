import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { UiText, UiLabel } from '@uireact/text';
import { SpacingDistribution, getSpacingClass, useViewport } from '@uireact/foundation';

import { UiRangeInputProps } from './types';
import styles from './ui-range.scss';
import inputStyles from './ui-input.scss';
import { getRangePosition } from './__private';
import { UiInput } from './ui-input';

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
  showTextInput,
  ...props
}: UiRangeInputProps) => {
  const [innerValue, setInnerValue] = useState<number>(value || min);
  const [visibleValue, setVisibleValue] = useState<number>(value || min);
  const [position, setPosition] = useState(0);
  const paddingClass = getSpacingClass('padding', padding);
  const alignment = labelOnTop ? "Start" : showRangeLabels ? "End" : "Center";
  const minLabel = prefix ? `${prefix}${min}` : min;
  const maxLabel = prefix ? `${prefix}${max}` : max;
  const valueLabel = prefix ? `${prefix}${innerValue}` : innerValue;

  const internalOnChange = useCallback((value: FormEvent<HTMLInputElement>) => {
    onChange(name, parseInt(value.currentTarget.value || "0"));
  }, [onChange, name]);

  useEffect(() => {
    setPosition(getRangePosition(min, max, value, step));
  }, [min, max, value, step]);

  useEffect(() => {
    if (!value) {
      setVisibleValue(0);
      setInnerValue(min);
    } else if (step) {
      const baseValue = value - min;
      const isSelectable = (baseValue % step) === 0;

      if (isSelectable) {
        setInnerValue(value);
        setVisibleValue(value);
      } else {
        const nextSelectable = value + (baseValue % step);
        setInnerValue(nextSelectable);
        setVisibleValue(nextSelectable);
      }
    } else {
      setInnerValue(value);
      setVisibleValue(value);
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
        <div className={`${styles.inputContainer} ${paddingClass}`}>
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
        {showTextInput && (
          <div className={styles.smallInputWrapper}>
            <UiInput 
              value={visibleValue.toString()} 
              name={`text-input-for-${name}`}
              icon={icon}
              category={category}
              type='number'
              className={styles.rangeTextInput} 
              onChange={internalOnChange} 
              />
            </div>
        )}
      </div>
      {error && <UiText category={category}>{error}</UiText>}
    </div>
  );
};

UiRangeInput.displayName = 'UiRangeInput';

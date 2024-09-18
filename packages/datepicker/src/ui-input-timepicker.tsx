'use client';
import React, { Ref, useCallback, useEffect, useRef, useState } from 'react';

import { UiLabel, UiText } from '@uireact/text';

import { UiInputTimepickerProps } from './types';
import { UiTimepicker } from './';

import styles from './ui-input-timepicker.scss';

const parseTime = (hour?: number, minute?: number): string => {
  const stringHour = hour !== undefined && hour < 10 ? `0${hour}` : hour;
  const stringMinute = minute !== undefined && minute < 10 ? `0${minute}` : minute;

  if (hour !== undefined && minute !== undefined) {
    return `${stringHour}:${stringMinute}`;
  } else if (hour !== undefined) {
    return `${stringHour}:`
  } else if (minute !== undefined) {
    return `:${stringMinute}`
  }

  return '';
};

export const UiInputTimepicker: React.FC<UiInputTimepickerProps> = ({
  className = '',
  hour,
  minute,
  testId,
  disabled,
  error,
  icon,
  label,
  labelOnTop,
  name = 'timepicker-input-name',
  placeholder,
  category,
  onChange,
  hoursLabel,
  minutesLabel,
  size = 'regular',
  ref,
  required
}: UiInputTimepickerProps) => {
  const [timepickerTime, setTimepickerTime] = useState<string>(parseTime(hour, minute));
  const [timepickerVisible, setTimepickerVisible] = useState(false);
  let classes = `${className} ${styles.input} size-${size} border-${category || 'primary'}-100 active-border-${category || 'tertiary'}-100 focus-border-${category || 'tertiary'}-100 ${styles[`inputPadding${size}`]}`;

  if (icon) {
    classes = `${classes} ${styles.inputIconPadding}`;
  }

  useEffect(() => {
    setTimepickerTime(parseTime(hour, minute));
  }, [hour, minute]);

  const onTimechange = useCallback((hour?: number, minute?: number) => {
    onChange(hour, minute);
  }, [onChange]);

  const onInputClicked = useCallback(() => {
    if (!timepickerVisible) {
      setTimepickerVisible(true);
    }
  }, [timepickerVisible]);

  const openTimepicker = useCallback(() => {
    setTimepickerVisible(true);
  }, []);

  const closeTimepicker = useCallback(() => {
    setTimepickerVisible(false);
  }, []);

  return (
    <div className={className} data-testid={testId}>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} category={category}>
            {label} &nbsp;
          </UiLabel>
        </div>
      )}
      <div className={styles.inputWrapper}>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name} category={category}>
              {label} &nbsp;
            </UiLabel>
          </div>
        )}
        <div className={styles.inputDiv}>
          <div className={styles.inputContent}>
            {icon && <span className={styles.iconContainer}>{icon}</span>}
            <input
              className={classes}
              autoComplete="off"
              disabled={disabled}
              id={name}
              name={name}
              placeholder={placeholder}
              ref={ref}
              value={timepickerTime}
              required={required}
              onFocus={openTimepicker}
              onClick={onInputClicked}
              readOnly
              inputMode='none'
            />
          </div>
          {error && <UiText category={category}>{error}</UiText>}
        </div>
      </div>
      <UiTimepicker
        isOpen={timepickerVisible}
        onClose={closeTimepicker}
        defaultHour={hour}
        defaultMinute={minute}
        onTimeChange={onTimechange}
        hoursLabel={hoursLabel}
        minutesLabel={minutesLabel}
      />
    </div>
  );
};

UiInputTimepicker.displayName = 'UiInputTimepicker';

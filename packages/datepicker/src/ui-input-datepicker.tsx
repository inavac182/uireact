'use client';
import React, { useCallback, useRef, useState } from 'react';

import { UiLabel, UiText } from '@uireact/text';

import { UiInputDatepickerProps } from './types';
import { getFormattedDate } from './utils';
import { UiDatepicker } from './';

import styles from './ui-input-datepicker.scss';

export const UiInputDatepicker: React.FC<UiInputDatepickerProps> = ({
  className,
  testId,
  disabled,
  dateFormat = 'yyyy-mm-dd',
  error,
  icon,
  label,
  labelOnTop,
  name = 'input-name',
  placeholder,
  category,
  date,
  onChange,
  size = 'regular',
  required,
  dayTitlesFormat,
  monthTitlesFormat,
  highlightToday,
  closeLabel,
  showNextMonth,
  useDialogOnSmall,
  disablePastDates = false,
}: UiInputDatepickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [datepickerDate, setDatepickerDate] = useState<Date | undefined>(date);
  const [inputValue, setInputValue] = useState<string>(
    datepickerDate ? getFormattedDate(dateFormat, datepickerDate) : ''
  );
  const [datepickerVisible, setDatepickerVisible] = useState(false);
  let classes = `${styles.input} size-${size} border-${category || 'primary'}-100 active-border-${category || 'tertiary'}-100 focus-border-${category || 'tertiary'}-100 ${styles[`inputPadding${size}`]}`;

  if (icon) {
    classes = `${classes} ${styles.inputIconPadding}`;
  }

  const onChangeInternal = useCallback(() => {
    return;
  }, []);

  const onSelectDate = useCallback(
    (newDate: Date) => {
      setDatepickerDate(newDate);
      setInputValue(getFormattedDate(dateFormat, newDate));
      onChange(getFormattedDate(dateFormat, newDate));
    },
    [dateFormat, onChange]
  );

  const openDatepicker = useCallback(() => {
    setDatepickerVisible(true);
  }, [setDatepickerVisible]);

  const closeDatepicker = useCallback(() => {
    setDatepickerVisible(false);
  }, [setDatepickerVisible]);

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
              ref={inputRef}
              value={inputValue}
              onChange={onChangeInternal}
              required={required}
              onFocus={openDatepicker}
            />
          </div>
          {error && <UiText category={category}>{error}</UiText>}
        </div>
      </div>
      <UiDatepicker
        isOpen={datepickerVisible}
        date={datepickerDate}
        onSelectDate={onSelectDate}
        onClose={closeDatepicker}
        dayTitlesFormat={dayTitlesFormat}
        monthTitlesFormat={monthTitlesFormat}
        highlightToday={highlightToday}
        closeLabel={closeLabel}
        showNextMonth={showNextMonth}
        useDialogOnSmall={useDialogOnSmall}
        disablePastDates={disablePastDates}
        selectInitDate
      />
    </div>
  );
};

UiInputDatepicker.displayName = 'UiInputDatepicker';

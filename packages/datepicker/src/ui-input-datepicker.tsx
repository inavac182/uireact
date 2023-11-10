'use client';
import React, { useCallback, useRef, useState } from 'react';

import { UiLabel, UiText } from '@uireact/text';

import { UiInputDatepickerProps } from './types';
import { getFormattedDate } from './utils';
import { UiDatepicker } from './';
import { IconContainer, Input, InputContentDiv, InputDiv, WrapperDiv } from './private';

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
  size,
  required,
  dayTitlesFormat,
  monthTitlesFormat,
  highlightToday,
  closeLabel,
  showNextMonth,
  useDialogOnSmall,
  useDateAsDefaultInputValue = false,
}: UiInputDatepickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [datepickerDate, setDatepickerDate] = useState<Date>(date || new Date());
  const [inputValue, setInputValue] = useState<string>(
    useDateAsDefaultInputValue ? getFormattedDate(dateFormat, datepickerDate) : ''
  );
  const [datepickerVisible, setDatepickerVisible] = useState(false);

  const onChangeInternal = useCallback(() => {
    return;
  }, []);

  const onSelectDate = useCallback(
    (newDate: Date) => {
      setDatepickerDate(newDate);
      setInputValue(getFormattedDate(dateFormat, newDate));
      onChange(getFormattedDate(dateFormat, newDate));
    },
    [setDatepickerDate, setInputValue, onChange]
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
      <WrapperDiv>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name} category={category}>
              {label} &nbsp;
            </UiLabel>
          </div>
        )}
        <InputDiv>
          <InputContentDiv>
            {icon && <IconContainer>{icon}</IconContainer>}
            <Input
              autoComplete="off"
              disabled={disabled}
              id={name}
              name={name}
              placeholder={placeholder}
              ref={inputRef}
              onChange={onChangeInternal}
              $category={category}
              value={inputValue}
              $size={size}
              required={required}
              $withIcon={icon !== undefined}
              onFocus={openDatepicker}
            />
          </InputContentDiv>
          {error && <UiText category={category}>{error}</UiText>}
        </InputDiv>
      </WrapperDiv>
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
      />
    </div>
  );
};

UiInputDatepicker.displayName = 'UiInputDatepicker';
'use client';
import React, { FormEvent, useCallback, useState } from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';
import { UiInputTimepicker } from '@uireact/datepicker';

const buttonPadding: UiSpacingProps['padding'] = { all: 'two' };
const formSpacing: UiSpacingProps['padding'] = { block: 'four' };
const buttonMargin: UiSpacingProps['margin'] = { block: 'four' };

export const TimepickerInputExample: React.FC = () => {
  const [hourSelected, setHourSelected] = useState<number>();
  const [minuteSelected, setMinuteSelected] = useState<number>();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onChange = useCallback((hour?: number, minute?: number) => {
    setHourSelected(hour);
    setMinuteSelected(minute);
  },[]);

  const onReset = useCallback(() => {
    setHourSelected(undefined);
    setMinuteSelected(undefined);
    setSuccessMessageVisible(false);
    setErrorMessage('');
  },[]);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessageVisible(false);
    setErrorMessage('');

    if (!hourSelected || !minuteSelected) {
      setErrorMessage('Complete the time selection');
      return;
    }
    
    setSuccessMessageVisible(true);
  },[hourSelected, minuteSelected]);

  return (
    <div style={{ height: '350px' }}>
      <UiText>Select a complete time, if not an error will be shown:</UiText>
      <UiSpacing padding={formSpacing}>
        <form onSubmit={onSubmit}>
          <UiInputTimepicker
            hour={hourSelected}
            minute={minuteSelected}
            label="Select a time:"
            labelOnTop
            placeholder="Pick a time"
            onChange={onChange}
            icon={<UiIcon icon="CalendarLines" />}
            size="large"
            error={errorMessage}
            category={errorMessage ? 'error' : undefined}
          />
          <UiSpacing padding={buttonMargin}>
            <UiButton type="submit" category="tertiary">
              <UiSpacing padding={buttonPadding}>
                <UiText>Submit</UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
          <UiSpacing padding={buttonMargin}>
            <UiButton type="button" onClick={onReset} category="primary">
              <UiSpacing padding={buttonPadding}>
                <UiText>Reset</UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
        </form>
      </UiSpacing>
      {successMessageVisible && (
        <UiCard category="positive">
          <UiText>
            <UiIcon icon="CheckCircle" /> The time is valid
          </UiText>
        </UiCard>
      )}
    </div>
  );
};

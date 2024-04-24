'use client';
import React, { FormEvent, useCallback, useState } from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';
import { UiInputDatepicker } from '@uireact/datepicker';

const buttonPadding: UiSpacingProps['padding'] = { all: 'four' };
const formSpacing: UiSpacingProps['padding'] = { block: 'four' };
const buttonMargin: UiSpacingProps['margin'] = { block: 'four' };

export const DatePickerInputExample: React.FC = () => {
  const [dateSelected, setDateSelected] = useState<string>();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onChange = useCallback(
    (date: string) => {
      setDateSelected(date);
      setSuccessMessageVisible(false);
      setErrorMessage('');
    },
    [setDateSelected]
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!dateSelected) {
        setSuccessMessageVisible(false);
        setErrorMessage('Please select a date');
      } else {
        const today = new Date();
        const selectedDate = new Date(dateSelected);

        if (today < selectedDate) {
          setSuccessMessageVisible(true);
          setErrorMessage('');
        } else {
          setSuccessMessageVisible(false);
          setErrorMessage('Please select a date in the future');
        }
      }
    },
    [dateSelected]
  );

  return (
    <div style={{ height: '350px' }}>
      <UiText>Select a date in the future, if not an error will be shown:</UiText>
      <UiSpacing padding={formSpacing}>
        <form onSubmit={onSubmit}>
          <UiInputDatepicker
            label="Date"
            labelOnTop
            placeholder="Select a future date"
            highlightToday
            onChange={onChange}
            icon={<UiIcon icon="CalendarLines" />}
            size="large"
            closeLabel="Done"
            error={errorMessage}
            category={errorMessage ? 'error' : undefined}
            showNextMonth
            useDialogOnSmall
          />
          <UiSpacing padding={buttonMargin}>
            <UiButton type="submit" category="tertiary">
              <UiSpacing padding={buttonPadding}>
                <UiText>Submit</UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
        </form>
      </UiSpacing>
      {successMessageVisible && (
        <UiCard category="positive">
          <UiText>
            <UiIcon icon="CheckCircle" /> The date is valid
          </UiText>
        </UiCard>
      )}
    </div>
  );
};

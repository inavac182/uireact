'use client';
import React, { useCallback, useState } from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiTimepicker } from '@uireact/datepicker';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const buttonSpacing: UiSpacingProps['padding'] = { all: 'four' };
const textSpacing: UiSpacingProps['padding'] = { block: 'four' };

export const TimepickerExample: React.FC = () => {
  const [timeSelected, setTimeSelected] = useState<string>();
  const [timeCompleted, setTimeCompleted] = useState(false);
  const [timepickerVisible, setDatepickerVisible] = useState<boolean>(false);

  const onSelectTime = useCallback(
    (hour?: number, minute?: number) => {
      if (hour !== undefined && minute !== undefined) {
        setTimeSelected(`${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`);
        setTimeCompleted(true);
      }
    },
    [setTimeSelected]
  );

  const onOpenClick = useCallback(() => {
    setDatepickerVisible(true);
  }, [setDatepickerVisible]);

  const onClose = useCallback(() => {
    setDatepickerVisible(false);
  }, [setDatepickerVisible]);

  return (
    <div>
      <UiText size='large'>Selected time:  {timeCompleted ? <UiText fontStyle='bold' size='large' inline>{timeSelected}</UiText> : <UiText fontStyle='bold' inline>Select hour and minutes</UiText>}</UiText>
      <br />
      <UiButton onClick={onOpenClick} category="tertiary">
        <UiSpacing padding={buttonSpacing}>Open time picker</UiSpacing>
      </UiButton>
      <UiTimepicker
        onTimeChange={onSelectTime}
        isOpen={timepickerVisible}
        onClose={onClose}
      />
    </div>
  );
};

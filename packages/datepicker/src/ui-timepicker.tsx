'use client';
import React, { MouseEvent, useCallback, useMemo, useState } from 'react';

import { UiMenu } from '@uireact/menu';
import { UiPrimaryButton, UiSecondaryButton } from '@uireact/button';
import { UiText } from '@uireact/text';

import { UiTimepickerProps } from './types';
import styles from './ui-timepicker.scss';

const parseTimeString = (numericValue: number) => {
  if (numericValue < 10) {
    return `0${numericValue}`;
  }

  return numericValue;
}

export const UiTimepicker: React.FC<UiTimepickerProps> = ({
  defaultHour,
  defaultMinute,
  onTimeChange,
  onClose,
  testId,
  isOpen = false,
  hoursLabel = 'Hours',
  minutesLabel = 'Minutes'
}: UiTimepickerProps) => {
  const [hour, setHour] = useState<number | undefined>(defaultHour);
  const [minute, setMinute] = useState<number | undefined>(defaultMinute);

  const onHourSelect = useCallback((e?: MouseEvent<HTMLButtonElement>) => {
    // istanbul ignore next
    const index = e?.currentTarget.id;

    if (index) {
      const selectedHour = parseInt(index);

      setHour(selectedHour);
      onTimeChange(selectedHour, minute);
    }
  }, [setHour, onTimeChange, minute]);

  const onMinuteSelect = useCallback((e?: MouseEvent<HTMLButtonElement>) => {
    // istanbul ignore next
    const index = e?.currentTarget.id;

    if (index) {
      const selectedMinute = parseInt(index);

      setMinute(selectedMinute);
      onTimeChange(hour, selectedMinute);
    }
  }, [setMinute, hour, onTimeChange]);

  const Hours = useMemo(() => {
    return (
      <div>
        {[... Array(25)].map(
          (h, index) => 
            hour === index ? 
            <UiPrimaryButton key={`hour-button-${index}`} fullWidth onClick={onHourSelect} id={`${index}`}>
              <UiText inverseColoration>{parseTimeString(index)}</UiText>
            </UiPrimaryButton> 
            : 
            <UiSecondaryButton key={`hour-button-${index}`} fullWidth onClick={onHourSelect} id={`${index}`}>
              <UiText>{parseTimeString(index)}</UiText>
            </UiSecondaryButton>
        )}
      </div>
    )
  }, [hour, onHourSelect]);
  const Minutes = useMemo(() => {
    return (
      <div>
        {[...Array(60)].map(
          (m, index) => 
            minute === index ?
              <UiPrimaryButton key={`minute-button-${index}`} onClick={onMinuteSelect} fullWidth id={`${index}`}>
                <UiText inverseColoration>{parseTimeString(index)}</UiText>
              </UiPrimaryButton> 
            : 
              <UiSecondaryButton key={`minute-button-${index}`} onClick={onMinuteSelect} fullWidth id={`${index}`}>
                <UiText>{parseTimeString(index)}</UiText>
              </UiSecondaryButton>
        )}
      </div>
    )
  }, [minute, onMinuteSelect]);
  const onCloseMenu = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <UiMenu visible={isOpen} closeMenuCB={onCloseMenu} testId={testId}>
      <div className={styles.headingsContainer}>
        <UiText align='center' fontStyle='bold'>{hoursLabel}</UiText>
        <UiText align='center' fontStyle='bold'>{minutesLabel}</UiText>
      </div>
      <div className={styles.timepickerContainer}>
        <div className={styles.timepickerValuesWrapper}>
          {Hours}
        </div>
        <div className={styles.timepickerValuesWrapper}>  
          {Minutes}
        </div>
      </div>
    </UiMenu>
  );
};

UiTimepicker.displayName = 'UiTimepicker';

import React, { useCallback, useState } from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';

import { UiDatepicker } from '../../src';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const today = new Date();
const buttonSpacing: UiSpacingProps['padding'] = { all: 'four' };
const textSpacing: UiSpacingProps['padding'] = { block: 'four' };

export const DatePickerExample: React.FC = () => {
  const [dateSelected, setDateSelected] = useState<Date | undefined>();
  const [datepickerVisible, setDatepickerVisible] = useState<boolean>(false);

  const onSelectDate = useCallback(
    (date) => {
      setDateSelected(date);
    },
    [setDateSelected]
  );

  const onOpenClick = useCallback(() => {
    setDatepickerVisible(true);
  }, [setDatepickerVisible]);

  const onClose = useCallback(() => {
    setDatepickerVisible(false);
  }, [setDatepickerVisible]);

  return (
    <div>
      <UiButton onClick={onOpenClick} category="tertiary">
        <UiSpacing padding={buttonSpacing}>Open date picker</UiSpacing>
      </UiButton>
      <UiDatepicker
        date={today}
        onSelectDate={onSelectDate}
        highlightToday
        isOpen={datepickerVisible}
        onClose={onClose}
        useDialogOnSmall
        showNextMonth
        closeLabel="Accept"
      />
      {dateSelected && (
        <UiSpacing padding={textSpacing}>
          <UiText>
            Date selected: {`${dateSelected.getFullYear()}/${dateSelected.getMonth() + 1}/${dateSelected.getDate()}`}
          </UiText>
        </UiSpacing>
      )}
    </div>
  );
};

import React from 'react';

import { UiButton } from '@uireact/button';
import { DefaultTheme, Sizing, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView } from '@uireact/view';

import { UiDialog, UiDialogType, useDialog } from '../../src';

type DialogsExampleProps = {
  type?: UiDialogType;
};

export const DialogsExample: React.FC<DialogsExampleProps> = ({ type }: DialogsExampleProps) => {
  const { actions } = useDialog('example');

  const onClickCB = () => {
    actions.openDialog();
  };

  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
      <UiButton onClick={onClickCB}>Open dialog</UiButton>
      <UiDialog dialogId="example" type={type}>
        <UiSpacing margin={{ inline: Sizing.four }}>
          <p>Some content</p>
        </UiSpacing>
      </UiDialog>
    </UiView>
  );
};

DialogsExample.displayName = 'DialogsExample';

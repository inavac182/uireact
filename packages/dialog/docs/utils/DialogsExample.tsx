import React from 'react';

import { UiButton } from '@uireact/button';
import { DefaultTheme, Sizing, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView } from '@uireact/view';

import { UiDialog, UiDialogType, useDialog } from '../../src';

type DialogsExampleProps = {
  type?: UiDialogType;
  title?: string;
  hideCloseIcon?: boolean;
};

export const DialogsExample: React.FC<DialogsExampleProps> = ({ type, title, hideCloseIcon }: DialogsExampleProps) => {
  const { actions } = useDialog('example');

  const onClickCB = () => {
    actions.openDialog();
  };

  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
      <UiButton onClick={onClickCB}>Open dialog</UiButton>
      <UiDialog dialogId="example" type={type} title={title} hideCloseIcon={hideCloseIcon}>
        <UiSpacing margin={{ inline: Sizing.four }}>
          <p>Some content</p>
        </UiSpacing>
      </UiDialog>
    </UiView>
  );
};

DialogsExample.displayName = 'DialogsExample';

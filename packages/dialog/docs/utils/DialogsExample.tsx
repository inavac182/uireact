import React from 'react';

import { UiButton } from '@uireact/button';
import { DefaultTheme, Sizing, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView } from '@uireact/view';

import { UiDialog, useDialog } from '../../src';

export const DialogsExample: React.FC = () => {
  const { isOpen, actions } = useDialog('example');

  const onClickCB = () => {
    actions.openDialog();
  };

  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
      <UiButton onClick={onClickCB}>Open dialog</UiButton>
      <UiDialog dialogId="example">
        <UiSpacing margin={{ inline: Sizing.four }}>
          <p>Some content</p>
        </UiSpacing>
      </UiDialog>
    </UiView>
  );
};

DialogsExample.displayName = 'DialogsExample';

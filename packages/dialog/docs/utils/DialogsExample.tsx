import React from 'react';

import { UiButton } from '@uireact/button';
import { TextSize, UiSpacing } from '@uireact/foundation';
import { UiText } from '@uireact/text';

import { UiDialog, UiDialogType, useDialog } from '../../src';

type DialogsExampleProps = {
  type?: UiDialogType;
  title?: string;
  hideCloseIcon?: boolean;
  dialogId: string;
};

export const DialogsExample: React.FC<DialogsExampleProps> = ({
  dialogId,
  type,
  title,
  hideCloseIcon,
}: DialogsExampleProps) => {
  const { actions } = useDialog(dialogId);

  const onClickCB = () => {
    actions.openDialog();
  };

  return (
    <>
      <UiButton onClick={onClickCB}>Open dialog</UiButton>
      <UiDialog dialogId={dialogId} type={type} title={title} hideCloseIcon={hideCloseIcon}>
        <UiSpacing margin={{ all: 'four' }}>
          <UiText size={TextSize.large}>Some content</UiText>
        </UiSpacing>
      </UiDialog>
    </>
  );
};

DialogsExample.displayName = 'DialogsExample';

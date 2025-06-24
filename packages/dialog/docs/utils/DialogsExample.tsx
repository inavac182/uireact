'use client';
import React from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiDialog, UiDialogType, useDialog } from '@uireact/dialog';
import { UiFlexGrid } from '@uireact/flex';

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
      <UiButton onClick={onClickCB} category='tertiary'>Open dialog</UiButton>
      <UiDialog dialogId={dialogId} type={type} title={title} hideCloseIcon={hideCloseIcon}>
        <UiFlexGrid alignItems='center' justifyContent='space-between' direction='column' fullHeight>
          <UiText>Some text</UiText>
          <UiButton>Some button</UiButton>
        </UiFlexGrid>
      </UiDialog>
    </>
  );
};

DialogsExample.displayName = 'DialogsExample';

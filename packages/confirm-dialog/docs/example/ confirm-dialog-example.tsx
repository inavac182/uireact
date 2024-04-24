'use client';
import React, { useCallback } from 'react';

import { UiButton } from '@uireact/button';
import { useConfirmDialog, UiConfirmDialog } from '@uireact/confirm-dialog';
import { UiConfirmDialogOptions } from '@uireact/foundation';

type ConfirmDialogExampleProps = {
  onConfirmCB?: () => void;
  onDenyCB?: () => void;
  options?: UiConfirmDialogOptions;
};

export const ConfirmDialogExample: React.FC<ConfirmDialogExampleProps> = ({
  onConfirmCB,
  onDenyCB,
  options,
}: ConfirmDialogExampleProps) => {
  const { showConfirmDialog } = useConfirmDialog();

  const onConfirm = useCallback(() => {
    console.log('Action Confirmed');
    onConfirmCB?.();
  }, [onConfirmCB]);

  const onDeny = useCallback(() => {
    console.log('Action denied');
    onDenyCB?.();
  }, [onDenyCB]);

  const onClick = useCallback(() => {
    showConfirmDialog(
      {
        title: 'Are you sure?',
        message: 'Only accept this if you are completely sure',
        confirmLabel: 'Accept',
        denyLabel: 'Cancel',
      },
      onConfirm,
      onDeny,
      options
    );
  }, [showConfirmDialog, options, onConfirm, onDeny]);

  return (
    <div>
      <UiButton onClick={onClick}>Open confirm dialog</UiButton>
      <UiConfirmDialog />
    </div>
  );
};

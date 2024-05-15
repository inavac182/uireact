'use client';
import React from 'react';

import { DialogBackground, DialogContent, DialogToolbar, DialogWrapper, getAnimationForDialog } from './__private';

import { UiDialogProps, UiDialogType } from './types';
import { useDialog } from '.';

export const UiDialog: React.FC<UiDialogProps> = ({
  closeLabel,
  className,
  testId,
  children,
  dialogId,
  handleDialogClose,
  type = UiDialogType.CENTERED,
  hideCloseIcon = false,
  title,
}: UiDialogProps) => {
  const { isOpen, actions } = useDialog(dialogId);
  const animation = getAnimationForDialog(type);

  const closeCB = React.useCallback(() => {
    actions.closeDialog();
    handleDialogClose?.();
  }, [actions]);

  const escCB = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCB();
      }
    },
    [closeCB]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escCB, false);

    return () => {
      document.removeEventListener('keydown', escCB, false);
    };
  }, [escCB]);

  if (!isOpen) {
    return null;
  }

  if (type !== UiDialogType.CENTERED) {
    return (
      <DialogContent $type={type} className={className} data-testId={testId} motion={animation}>
        <DialogToolbar title={title} hideCloseIcon={hideCloseIcon} closeCB={closeCB} closeLabel={closeLabel} />
        {children}
      </DialogContent>
    );
  }

  return (
    <DialogWrapper className={className} data-testId={testId}>
      <>
        <DialogBackground onClick={closeCB} />
        <DialogContent $type={type} motion={animation}>
          <DialogToolbar
            title={title}
            hideCloseIcon={hideCloseIcon}
            closeCB={closeCB}
            closeLabel={closeLabel}
            data-testid="UiDialogToolbar"
          />
          {children}
        </DialogContent>
      </>
    </DialogWrapper>
  );
};

UiDialog.displayName = 'UiDialog';

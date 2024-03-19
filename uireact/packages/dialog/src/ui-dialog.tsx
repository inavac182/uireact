'use client';
import React from 'react';

import styled from 'styled-components';

import { UiIcon } from '@uireact/icons';

import { DialogBackground, DialogContent, DialogToolbar, DialogWrapper } from './__private';

import { UiDialogProps, UiDialogType } from './types';
import { useDialog } from '.';

const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  padding-left: 10px;
`;

export const UiDialog: React.FC<UiDialogProps> = ({
  closeLabel,
  className,
  testId,
  children,
  dialogId,
  handleDialogClose,
  type = UiDialogType.CENTERED,
  hideCloseIcon,
  title,
}: UiDialogProps) => {
  const { isOpen, actions } = useDialog(dialogId);

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
      <DialogContent $type={type} className={className} data-testId={testId}>
        {title && (
          <DialogToolbar title={title} hideCloseIcon={hideCloseIcon} closeCB={closeCB} closeLabel={closeLabel} />
        )}
        {!title && !hideCloseIcon && (
          <Button onClick={closeCB} aria-label={closeLabel} data-testid="UiDialogCloseBtn">
            <UiIcon icon="X" />
          </Button>
        )}
        {children}
      </DialogContent>
    );
  }

  return (
    <DialogWrapper className={className} data-testId={testId}>
      <>
        <DialogBackground onClick={closeCB} />
        <DialogContent $type={type}>
          {title && (
            <DialogToolbar
              title={title}
              hideCloseIcon={hideCloseIcon}
              closeCB={closeCB}
              closeLabel={closeLabel}
              data-testid="UiDialogToolbar"
            />
          )}
          {!title && !hideCloseIcon && (
            <Button onClick={closeCB} aria-label={closeLabel} data-testid="UiDialogCloseBtn">
              <UiIcon icon="X" />
            </Button>
          )}
          {children}
        </DialogContent>
      </>
    </DialogWrapper>
  );
};

UiDialog.displayName = 'UiDialog';

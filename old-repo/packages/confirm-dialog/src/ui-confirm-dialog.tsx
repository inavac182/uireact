import React, { useCallback, useContext } from 'react';

import { UiConfirmDialogContext, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiHeading, UiText } from '@uireact/text';
import { UiButton } from '@uireact/button';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { Dialog, DialogBackground, DialogBorder, DialogContent, DialogWrapper } from './private';

const buttonPadding: UiSpacingProps['padding'] = { block: 'four' };
const actionsPadding: UiSpacingProps['padding'] = { top: 'five' };
const messagePadding: UiSpacingProps['padding'] = { top: 'four' };

export const UiConfirmDialog: React.FC = () => {
  const { confirmDialog, visible, hideConfirmDialog } = useContext(UiConfirmDialogContext);

  const onCofirm = useCallback(() => {
    hideConfirmDialog();
    // istanbul ignore next
    confirmDialog?.confirm();
  }, [confirmDialog]);

  const onDeny = useCallback(() => {
    hideConfirmDialog();
    // istanbul ignore next
    confirmDialog?.deny();
  }, [confirmDialog]);

  const closeCB = useCallback(() => {
    hideConfirmDialog();
    // istanbul ignore next
    confirmDialog?.deny();
  }, [hideConfirmDialog, confirmDialog]);

  if (visible && confirmDialog) {
    const { options, data } = confirmDialog;

    return (
      <DialogWrapper>
        <DialogBackground onClick={closeCB} data-testid="confirm-dialog-bg" />
        <Dialog role="dialog">
          <DialogBorder>
            <DialogContent>
              <UiHeading centered>{data.title}</UiHeading>
              <UiSpacing padding={messagePadding}>
                <UiText centered>{data.message}</UiText>
              </UiSpacing>
              <UiSpacing padding={actionsPadding}>
                <UiFlexGrid
                  columnGap="four"
                  rowGap="four"
                  justifyContent={options?.direction === 'stacked' ? undefined : 'center'}
                  alignItems={options?.direction === 'stacked' ? 'stretch' : undefined}
                  direction={options?.direction === 'stacked' ? 'column' : 'row'}
                >
                  <UiFlexGridItem>
                    <UiButton category="tertiary" onClick={onCofirm} fullWidth>
                      <UiSpacing padding={buttonPadding}>
                        <UiText>{confirmDialog.data.confirmLabel}</UiText>
                      </UiSpacing>
                    </UiButton>
                  </UiFlexGridItem>
                  <UiFlexGridItem>
                    <UiButton category="error" onClick={onDeny} styling="clear" fullWidth>
                      <UiSpacing padding={buttonPadding}>
                        <UiText>{confirmDialog.data.denyLabel}</UiText>
                      </UiSpacing>
                    </UiButton>
                  </UiFlexGridItem>
                </UiFlexGrid>
              </UiSpacing>
            </DialogContent>
          </DialogBorder>
        </Dialog>
      </DialogWrapper>
    );
  }

  return null;
};

UiConfirmDialog.displayName = 'UiConfirmDialog';

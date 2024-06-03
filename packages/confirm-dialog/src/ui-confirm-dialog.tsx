import React, { useCallback, useContext } from 'react';
import { MotionProps, motion as MotionParent } from 'framer-motion';

import { UiConfirmDialogContext, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiHeading, UiText } from '@uireact/text';
import { UiButton } from '@uireact/button';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import styles from './ui-confirm-dialog.scss';

const buttonPadding: UiSpacingProps['padding'] = { block: 'four' };
const actionsPadding: UiSpacingProps['padding'] = { top: 'five' };
const messagePadding: UiSpacingProps['padding'] = { top: 'four' };

const animation: MotionProps = { 
  initial: { 
    opacity: 0, 
    x: '-50%', 
    y: '-50%', 
    scale: 0.8 
  }, 
  animate: {
    opacity: 1,
    x: '-50%',
    y: '-50%',
    scale: 1
  }
};

export const UiConfirmDialog: React.FC = () => {
  const { confirmDialog, visible, hideConfirmDialog } = useContext(UiConfirmDialogContext);

  const onCofirm = useCallback(() => {
    hideConfirmDialog();
    // istanbul ignore next
    confirmDialog?.confirm();
  }, [confirmDialog, hideConfirmDialog]);

  const onDeny = useCallback(() => {
    hideConfirmDialog();
    // istanbul ignore next
    confirmDialog?.deny();
  }, [confirmDialog, hideConfirmDialog]);

  const closeCB = useCallback(() => {
    hideConfirmDialog();
    // istanbul ignore next
    confirmDialog?.deny();
  }, [hideConfirmDialog, confirmDialog]);

  if (visible && confirmDialog) {
    const { options, data } = confirmDialog;

    return (
      <div className={styles.dialogWrapper}>
        <div className={styles.dialogBackground} onClick={closeCB} data-testid="confirm-dialog-bg" />
        <MotionParent.div role="dialog" className={styles.dialog} {...animation}>
          <div className={styles.dialogBorder}>
            <div className={styles.dialogContent}>
              <UiHeading centered level={4}>{data.title}</UiHeading>
              <UiSpacing padding={messagePadding}>
                <UiText align='center' wrap>{data.message}</UiText>
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
            </div>
          </div>
        </MotionParent.div>
      </div>
    );
  }

  return null;
};

UiConfirmDialog.displayName = 'UiConfirmDialog';

import React, { useCallback, useContext, useState } from 'react';
import { MotionProps, motion as MotionParent } from 'framer-motion';

import { UiConfirmDialogContext, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiHeading, UiText } from '@uireact/text';
import { UiButton, UiPrimaryButton, UiTertiaryButton } from '@uireact/button';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';

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

const confirmButtonPadding: UiSpacingProps['padding'] = { block: 'two', inline: 'four' };

export const UiConfirmDialog: React.FC = () => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [denyLoading, setDenyLoading] = useState(false);
  const { confirmDialog, visible, hideConfirmDialog } = useContext(UiConfirmDialogContext);

  const onCofirm = useCallback(async () => {
    setConfirmLoading(true);
    // istanbul ignore next
    await confirmDialog?.confirm();
    hideConfirmDialog();
    setConfirmLoading(false);
  }, [confirmDialog, hideConfirmDialog, setConfirmLoading]);

  const onDeny = useCallback(async () => {
    setDenyLoading(true);
    // istanbul ignore next
    await confirmDialog?.deny();

    hideConfirmDialog();
    setDenyLoading(false);
  }, [confirmDialog, hideConfirmDialog, setDenyLoading]);

  const closeCB = useCallback(async () => {
    setDenyLoading(true);
    // istanbul ignore next
    await confirmDialog?.deny();

    hideConfirmDialog();
    setDenyLoading(false);
  }, [hideConfirmDialog, confirmDialog, setDenyLoading]);

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
                <UiText align='center'>{data.message}</UiText>
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
                    <UiPrimaryButton onClick={onCofirm} fullWidth disabled={confirmLoading || denyLoading} padding={confirmButtonPadding}>
                        {confirmLoading ? <UiIcon icon="LoadingSpinner" inverseColoration /> : confirmDialog.data.confirmLabel}
                    </UiPrimaryButton>
                  </UiFlexGridItem>
                  <UiFlexGridItem>
                    <UiTertiaryButton onClick={onDeny} fullWidth disabled={confirmLoading || denyLoading} padding={confirmButtonPadding}>
                        {denyLoading ? <UiIcon icon="LoadingSpinner" /> : confirmDialog.data.denyLabel}
                    </UiTertiaryButton>
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

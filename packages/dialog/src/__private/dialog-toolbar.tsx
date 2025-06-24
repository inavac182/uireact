import React from 'react';

import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiHeading } from '@uireact/text';

import styles from '../ui-dialog.scss';

type DialogToolbarProps = {
  closeLabel?: string;
  title?: string;
  hideCloseIcon?: boolean;
  closeCB?: () => void;
};

export const DialogToolbar: React.FC<DialogToolbarProps> = ({
  closeLabel,
  closeCB,
  hideCloseIcon,
  title,
}: DialogToolbarProps) => (
  <div className={styles.toolbar} data-testid="UiDialogToolbar">
    {!hideCloseIcon && (
      <UiButton onClick={closeCB} aria-label={closeLabel} styling='icon'>
        <UiIcon icon="X" size='small' />
      </UiButton>
    )}
    {title && (
      <UiHeading centered>{title}</UiHeading>
    )}
  </div>
);

DialogToolbar.displayName = 'DialogToolbar';

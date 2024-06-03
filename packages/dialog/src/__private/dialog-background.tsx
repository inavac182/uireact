import React from 'react';

import styles from '../ui-dialog.scss';

type DialogBackgroundProps = {
  onClick: () => void;
};

export const DialogBackground: React.FC<DialogBackgroundProps> = ({ onClick }: DialogBackgroundProps) => (
  <div className={styles.background} onClick={onClick} data-testid="UiDialogBackground" />
);

DialogBackground.displayName = 'DialogBackground';

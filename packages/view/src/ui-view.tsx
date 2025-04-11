import React from 'react';

import { useConfirmDialogController } from '@uireact/foundation';
import {
  UiDialogsControllerContext,
  useDialogController,
  UiNotificationsContext,
  useNotificationsController,
  UiConfirmDialogContext,
} from '@uireact/foundation';

import { UiViewProps } from './types/ui-view-props';
import { useThemeDetector } from './hooks';

import styles from './ui-view.scss';

export const UiView: React.FC<UiViewProps> = ({
  dialogController,
  category = 'primary',
  centeredContent = false,
  className = '',
  children,
  noBackground = false,
  weight = '100'
}: UiViewProps) => {
  const defaultDialogController = useDialogController();
  const notificationsController = useNotificationsController();
  const confirmDialogController = useConfirmDialogController();

  return (
    <>
      <div className={`${styles.uireactViewContainer} ${noBackground ? 'transparent' : `bg-${category}-${weight}`} ${className}`} data-testid="UiView">
          <UiDialogsControllerContext.Provider value={dialogController ?? defaultDialogController}>
            <UiNotificationsContext.Provider value={notificationsController}>
              <UiConfirmDialogContext.Provider value={confirmDialogController}>
                <div className={`${centeredContent ? styles.centered : ''}`}>{children}</div>
              </UiConfirmDialogContext.Provider>
            </UiNotificationsContext.Provider>
          </UiDialogsControllerContext.Provider>
      </div>
    </>
  );
};

UiView.displayName = 'UiView';

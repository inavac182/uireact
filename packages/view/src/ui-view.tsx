import React, { useEffect, useState } from 'react';

import { ThemeContext, ThemeColor, useConfirmDialogController } from '@uireact/foundation';
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
  selectedTheme = ThemeColor.dark,
  children,
  noBackground = false,
  weight = '100',
  skipThemeDetector
}: UiViewProps) => {
  const defaultDialogController = useDialogController();
  const notificationsController = useNotificationsController();
  const confirmDialogController = useConfirmDialogController();
  const isDarkEnabled = useThemeDetector();
  const [internalSelectedTheme, setSelectedTheme] = useState(selectedTheme);

  useEffect(() => {
    if (selectedTheme === ThemeColor.light) {
      setSelectedTheme(ThemeColor.light);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      setSelectedTheme(ThemeColor.dark);
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (skipThemeDetector) {
      return;
    }

    if (isDarkEnabled) {
      setSelectedTheme(ThemeColor.dark);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setSelectedTheme(ThemeColor.light);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkEnabled, skipThemeDetector]);

  return (
    <>
      <div className={`${styles.uireactViewContainer} ${noBackground ? 'transparent' : `bg-${category}-${weight}`} ${className}`} data-testid="UiView">
        <ThemeContext.Provider value={{ selectedTheme: internalSelectedTheme }}>
          <UiDialogsControllerContext.Provider value={dialogController ?? defaultDialogController}>
            <UiNotificationsContext.Provider value={notificationsController}>
              <UiConfirmDialogContext.Provider value={confirmDialogController}>
                <div className={`${centeredContent ? styles.centered : ''}`}>{children}</div>
              </UiConfirmDialogContext.Provider>
            </UiNotificationsContext.Provider>
          </UiDialogsControllerContext.Provider>
        </ThemeContext.Provider>
      </div>
    </>
  );
};

UiView.displayName = 'UiView';

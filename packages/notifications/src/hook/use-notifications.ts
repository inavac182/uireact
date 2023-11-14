import React from 'react';
import { UiNotification, UiNotificationsContext } from '@uireact/foundation';

type UseUiNotificationsHook = {
  notifications: UiNotification[];
  showNotification: (notification: UiNotification) => void;
};

export const useNotifications = (): UseUiNotificationsHook => {
  const notificationsController = React.useContext(UiNotificationsContext);

  return {
    notifications: notificationsController.notifications,
    showNotification: notificationsController.showNotification,
  };
};

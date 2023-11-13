import React from 'react';
import { UiNotification, UiNotificationsContext } from '@uireact/foundation';

type UseNotificationHook = {
  notifications: UiNotification[];
  showNotification: (notification: UiNotification) => void;
};

export const useNotifications = (): UseNotificationHook => {
  const notificationsController = React.useContext(UiNotificationsContext);

  return {
    notifications: notificationsController.notifications,
    showNotification: notificationsController.showNotification,
  };
};

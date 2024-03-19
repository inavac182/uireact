import { useCallback, useState } from 'react';
import { INotificationsController, UiNotification } from '../types';

export const useNotificationsController = (): INotificationsController => {
  const [notifications, setNotifications] = useState<UiNotification[]>([]);
  const showNotification = useCallback(
    (notification: UiNotification) => {
      setNotifications([...notifications, notification]);
    },
    [notifications, setNotifications]
  );

  return {
    notifications,
    showNotification,
  };
};

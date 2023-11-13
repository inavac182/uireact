import React from 'react';

import { NotificationsContainer, UiNotificationWrapper } from './private';
import { useNotifications } from './hook';

export const UiNotifications: React.FC = () => {
  const { notifications } = useNotifications();

  return (
    <NotificationsContainer>
      {notifications.map((notification, index) => (
        <UiNotificationWrapper notification={notification} key={`notitication-in-${index}`} />
      ))}
    </NotificationsContainer>
  );
};

UiNotifications.displayName = 'UiNotifications';

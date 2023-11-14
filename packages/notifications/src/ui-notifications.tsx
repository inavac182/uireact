'use client';
import React from 'react';

import { useViewport } from '@uireact/foundation';

import { NotificationsContainer, BottomNotificationsContainer, UiNotificationWrapper } from './private';
import { useNotifications } from './hook';

export const UiNotifications: React.FC = () => {
  const { isSmall } = useViewport();
  const { notifications } = useNotifications();

  if (isSmall) {
    return (
      <BottomNotificationsContainer>
        {notifications.map((notification, index) => (
          <UiNotificationWrapper notification={notification} key={`notitication-in-${index}`} />
        ))}
      </BottomNotificationsContainer>
    );
  }

  return (
    <NotificationsContainer>
      {notifications.map((notification, index) => (
        <UiNotificationWrapper notification={notification} key={`notitication-in-${index}`} />
      ))}
    </NotificationsContainer>
  );
};

UiNotifications.displayName = 'UiNotifications';

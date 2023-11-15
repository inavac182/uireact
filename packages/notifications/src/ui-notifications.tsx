'use client';
import React, { useCallback, useMemo, useState } from 'react';

import { useViewport } from '@uireact/foundation';

import { NotificationsContainer, BottomNotificationsContainer, UiNotificationWrapper } from './private';
import { useNotifications } from './hook';

export const UiNotifications: React.FC = () => {
  const { isSmall } = useViewport();
  const { notifications } = useNotifications();

  const [hiddenNotifications, setHiddenNotifications] = useState<number[]>([]);

  const onClose = useCallback(
    (index: number) => {
      setHiddenNotifications([...hiddenNotifications, index]);
    },
    [hiddenNotifications, setHiddenNotifications]
  );

  const NotificationsComponent = useMemo(() => {
    return (
      <>
        {notifications.map((notification, index) => {
          const isHidden = hiddenNotifications.filter((hiddenId) => hiddenId === index).length > 0;

          return isHidden ? null : (
            <UiNotificationWrapper
              notification={notification}
              key={`notitication-in-${index}`}
              id={index}
              onClose={onClose}
            />
          );
        })}
      </>
    );
  }, [notifications, hiddenNotifications]);

  if (isSmall) {
    return <BottomNotificationsContainer>{NotificationsComponent}</BottomNotificationsContainer>;
  }

  return <NotificationsContainer>{NotificationsComponent}</NotificationsContainer>;
};

UiNotifications.displayName = 'UiNotifications';

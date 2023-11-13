import React from 'react';

import { INotificationsController } from '../types';

const noOpNotification = () => {
  console.error('No show notification fn implemented');
};

export const UiNotificationsContext = React.createContext<INotificationsController>({
  showNotification: noOpNotification,
  notifications: [],
});

UiNotificationsContext.displayName = 'UiNotificationsContext';

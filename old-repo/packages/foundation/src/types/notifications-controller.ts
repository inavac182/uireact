import { UiNotification } from '.';

export type INotificationsController = {
  showNotification: (notification: UiNotification) => void;
  notifications: UiNotification[];
};

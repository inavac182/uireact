import { ColorCategory } from '.';

export type UiNotificationLink = {
  label: string;
  url: string;
  target?: string;
};

export type UiNotification = {
  icon?: string;
  title?: string;
  message?: string;
  link?: UiNotificationLink;
  category?: ColorCategory;
};

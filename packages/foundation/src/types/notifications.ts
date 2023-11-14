import { ColorCategory } from '.';

export type UiNotificationLink = {
  /** The notification link label */
  label: string;
  /** The notification link url */
  url: string;
  /** The notification link target */
  target?: string;
};

export type UiNotification = {
  /** The notification icon */
  icon?: string;
  /** The notification title */
  title?: string;
  /** The notification message */
  message?: string;
  /** The notification link */
  link?: UiNotificationLink;
  /** The notification options */
  options?: UiNotificationOptions;
};

export type UiNotificationOptions = {
  /** The color catefory of the notificaion */
  category?: ColorCategory;
  /** The timer for the notification to be removed, if 0 provide then it won't be removed automatically. */
  timer?: number;
  /** If the close button should render */
  closeButton?: boolean;
};

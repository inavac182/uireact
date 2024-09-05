import React, { useCallback, useEffect, useMemo } from 'react';

import { UiNotification } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon, UiIconProps } from '@uireact/icons';
import { UiHeading, UiLink, UiText } from '@uireact/text';
import { UiButton } from '@uireact/button';

import { NotificationTimer } from './notification-timer';
import styles from '../ui-notification.scss';

type UiNotificationProps = {
  notification: UiNotification;
  id: number;
  onClose: (index: number) => void;
};

export const UiNotificationWrapper: React.FC<UiNotificationProps> = ({
  id,
  notification,
  onClose,
}: UiNotificationProps) => {
  const options = useMemo(() => {
    return {
      category: notification.options?.category || 'primary',
      closeButton: notification.options?.closeButton !== undefined ? notification.options.closeButton : true,
      timer: notification.options?.timer !== undefined ? notification.options.timer : 5000,
      onLinkClicked: notification.options?.onLinkClicked,
      onNotificationDismissed: notification.options?.onNotificationDismissed,
      onNotificationShown: notification.options?.onNotificationShown,
    };
  }, [notification]);

  useEffect(() => {
    if (options.timer === 0) {
      return;
    }

    const timer = setTimeout(() => {
      onClose(id);
    }, options.timer);

    return () => clearTimeout(timer);
  }, [id, onClose, options.timer]);

  useEffect(() => {
    options.onNotificationShown?.();
  }, [options]);

  const closeNotification = useCallback(() => {
    options.onNotificationDismissed?.();
    onClose(id);
  }, [id, onClose, options]);

  return (
    <>
      <div className={`${styles.notificationWrapper} bg-${notification.options?.category || 'primary'}-100`}>
        <div className={styles.notificationContent}>
          <UiFlexGrid columnGap="three" alignItems="center">
            {notification.icon && (
              <div className={styles.iconWrapper}>
                <UiIcon icon={notification.icon as UiIconProps['icon']} size='large' />
              </div>
            )}
            <UiFlexGridItem grow={1}>
              <UiFlexGrid direction="column" rowGap="two">
                {notification.title && <UiText size='large' fontStyle='bold'>{notification.title}</UiText>}
                {notification.message && <UiText>{notification.message}</UiText>}
                {notification.link && (
                  <UiLink>
                    <a href={notification.link.url} target={notification.link.target} onClick={options.onLinkClicked}>
                      {notification.link.label}
                    </a>
                  </UiLink>
                )}
              </UiFlexGrid>
            </UiFlexGridItem>
            {options.closeButton && (
              <UiFlexGridItem>
                <UiButton
                  onClick={closeNotification}
                  styling="icon"
                  category={options.category}
                  type="button"
                  testId="notification-close-button"
                >
                  <UiIcon icon={'X'} size="xsmall" />
                </UiButton>
              </UiFlexGridItem>
            )}
          </UiFlexGrid>
        </div>
        {options.timer && options.timer > 0 ? (
          <NotificationTimer time={options.timer} category={options.category} />
        ) : null}
      </div>
    </>
  );
};

UiNotificationWrapper.displayName = 'UiNotificationWrapper';

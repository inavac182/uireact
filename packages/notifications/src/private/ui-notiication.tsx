import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { ColorCategory, UiNotification } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon, UiIconProps } from '@uireact/icons';
import { UiHeading, UiLink, UiText } from '@uireact/text';
import { UiButton } from '@uireact/button';
import { NotificationTimer } from './notification-timer';

const NotificationWrapper = styled.div<{ $category: ColorCategory; $hasTimer: boolean }>`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ${(props) => `
    background-color: var(--${props.$category}-token_50);
  `}
`;

const NotificationContent = styled.div`
  padding: 10px 10px 10px 10px;
`;

const IconWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

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
  }, [onClose]);

  const closeNotification = useCallback(() => {
    onClose(id);
  }, [onClose]);

  return (
    <>
      <NotificationWrapper
        $category={notification.options?.category || 'primary'}
        $hasTimer={options.timer && options.timer > 0 ? true : false}
      >
        <NotificationContent>
          <UiFlexGrid columnGap="four" alignItems="center">
            {notification.icon && (
              <IconWrapper>
                <UiIcon icon={notification.icon as UiIconProps['icon']} />
              </IconWrapper>
            )}
            <UiFlexGridItem grow={1}>
              <UiFlexGrid direction="column" rowGap="three">
                {notification.title && <UiHeading>{notification.title}</UiHeading>}
                {notification.message && <UiText>{notification.message}</UiText>}
                {notification.link && (
                  <UiLink>
                    <a href={notification.link.url} target={notification.link.target}>
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
        </NotificationContent>
        {options.timer && options.timer > 0 ? (
          <NotificationTimer time={options.timer} category={options.category} />
        ) : null}
      </NotificationWrapper>
    </>
  );
};

UiNotificationWrapper.displayName = 'UiNotificationWrapper';

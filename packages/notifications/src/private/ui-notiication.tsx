import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ColorCategory, UiNotification } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon, UiIconProps } from '@uireact/icons';
import { UiHeading, UiLink, UiText } from '@uireact/text';

const NotificationWrapper = styled.div<{ category: ColorCategory }>`
  width: 100%;
  min-height: 50px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  ${(props) => `
    background-color: var(--${props.category}-token_100);
  `}
`;

const IconWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

type UiNotificationProps = {
  notification: UiNotification;
};

export const UiNotificationWrapper: React.FC<UiNotificationProps> = ({ notification }: UiNotificationProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, [setVisible]);

  if (!visible) {
    return null;
  }

  return (
    <NotificationWrapper category={notification.category || 'primary'}>
      <UiFlexGrid columnGap="four" alignItems="center">
        {notification.icon && (
          <IconWrapper>
            <UiIcon icon={notification.icon as UiIconProps['icon']} />
          </IconWrapper>
        )}
        <UiFlexGridItem>
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
      </UiFlexGrid>
    </NotificationWrapper>
  );
};

UiNotificationWrapper.displayName = 'UiNotificationWrapper';

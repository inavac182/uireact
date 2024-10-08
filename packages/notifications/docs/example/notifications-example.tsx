'use client';
import React, { useCallback } from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiNotifications, useNotifications } from '@uireact/notifications';
import { UiFlexGrid } from '@uireact/flex';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const buttonContentPadding: UiSpacingProps['padding'] = { block: 'two', inline: 'three' };

type NotificationsExampleProps = {
  onNotificationShown?: () => void;
  onNotificationDismissed?: () => void;
  onLinkClicked?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const NotificationsExample: React.FC<NotificationsExampleProps> = ({
  onNotificationShown,
  onNotificationDismissed,
  onLinkClicked,
}: NotificationsExampleProps) => {
  const { showNotification } = useNotifications();

  const addNotification = useCallback(() => {
    showNotification({
      icon: 'Check',
      title: 'New notification',
      message: 'This is a new notification',
    });
  }, [showNotification]);

  const addLinkNotification = useCallback(() => {
    showNotification({
      icon: 'Link',
      title: 'Notification with link',
      message: 'This is a new notification that shows a link',
      link: {
        label: 'Ui React docs',
        url: 'https://uireact.io',
      },
      options: {
        onNotificationShown,
        onNotificationDismissed,
        onLinkClicked
      },
    });
  }, [showNotification, onNotificationShown, onNotificationDismissed, onLinkClicked]);

  const addNotificationWithOptions = useCallback(() => {
    showNotification({
      icon: 'ArrowTrendDown',
      title: 'Notification with options',
      options: {
        category: 'error',
        closeButton: false,
        timer: 25000,
      },
    });
  }, [showNotification]);

  const addNotificationWithNoTimer = useCallback(() => {
    showNotification({
      icon: 'ArrowTrendDown',
      title: 'Notification with no timer',
      message: 'This notification has to be closed otherwise will always be present',
      options: {
        category: 'warning',
        timer: 0,
      },
    });
  }, [showNotification]);

  return (
    <>
      <UiNotifications topSpacing="100px" />
      <UiFlexGrid columnGap="four">
        <UiButton onClick={addNotification} category="positive">
          <UiSpacing padding={buttonContentPadding}>
            <UiText>Add notification</UiText>
          </UiSpacing>
        </UiButton>
        <UiButton onClick={addLinkNotification} category="tertiary">
          <UiSpacing padding={buttonContentPadding}>
            <UiText>Notification with link</UiText>
          </UiSpacing>
        </UiButton>
        <UiButton onClick={addNotificationWithOptions} category="error">
          <UiSpacing padding={buttonContentPadding}>
            <UiText>Notification with options</UiText>
          </UiSpacing>
        </UiButton>
        <UiButton onClick={addNotificationWithNoTimer} category="warning">
          <UiSpacing padding={buttonContentPadding}>
            <UiText>No timer</UiText>
          </UiSpacing>
        </UiButton>
      </UiFlexGrid>
    </>
  );
};

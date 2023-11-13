import React, { useCallback } from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';

import { UiNotifications } from '../../src';
import { useNotifications } from '../../src/hook';
import { UiFlexGrid } from '@uireact/flex';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const buttonContentPadding: UiSpacingProps['padding'] = { block: 'four' };

export const NotificationsExample: React.FC = () => {
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
    });
  }, [showNotification]);

  return (
    <>
      <UiNotifications />
      <UiFlexGrid columnGap="four">
        <UiButton onClick={addNotification} category="positive">
          <UiSpacing padding={buttonContentPadding}>
            <UiText>Add notification</UiText>
          </UiSpacing>
        </UiButton>
        <UiButton onClick={addLinkNotification} category="tertiary">
          <UiSpacing padding={buttonContentPadding}>
            <UiText>Add a notification with link</UiText>
          </UiSpacing>
        </UiButton>
      </UiFlexGrid>
    </>
  );
};

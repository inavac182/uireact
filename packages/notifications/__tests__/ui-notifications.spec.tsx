import React, { useCallback } from 'react';

import { act, fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';

import { UiButton } from '@uireact/button';
import { UiFlexGrid } from '@uireact/flex';
import { UiSpacingProps, UiSpacing } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { useNotifications, UiNotifications } from '../src';

const buttonContentPadding: UiSpacingProps['padding'] = { block: 'four' };

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
      <UiNotifications />
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


describe('<UiNotifications />', () => {
  it('renders fine', () => {
    jest.useFakeTimers();

    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Add notification' }));

    expect(screen.getByRole('heading', { name: 'New notification' })).toBeVisible();
    expect(screen.getByText('This is a new notification')).toBeVisible();
    expect(screen.getByTestId('notification-close-button')).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders fine on small breakpoint', () => {
    global.innerWidth = 400;
    jest.useFakeTimers();

    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Add notification' }));

    expect(screen.getByRole('heading', { name: 'New notification' })).toBeVisible();
    expect(screen.getByText('This is a new notification')).toBeVisible();
    expect(screen.getByTestId('notification-close-button')).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders fine with link', () => {
    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Notification with link' }));

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();
    expect(screen.getByText('This is a new notification that shows a link')).toBeVisible();
    expect(screen.getByRole('link', { name: 'Ui React docs' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Ui React docs' })).toHaveAttribute('href', 'https://uireact.io');
    expect(screen.getByTestId('notification-close-button')).toBeVisible();

    fireEvent.click(screen.getByTestId('notification-close-button'));

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();
  });

  it('renders fine without close button', () => {
    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Notification with options' }));

    expect(screen.getByRole('heading', { name: 'Notification with options' })).toBeVisible();
    expect(screen.queryByTestId('notification-close-button')).not.toBeInTheDocument();
  });

  it('renders fine with no timer', () => {
    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'No timer' }));

    expect(screen.getByRole('heading', { name: 'Notification with no timer' })).toBeVisible();
    expect(screen.queryByTestId('notification-close-button')).toBeVisible();
  });

  it('delete notification when close button is used', () => {
    const onNotificationDismissed = jest.fn();
    const onNotificationShown = jest.fn();

    uiRender(
      <NotificationsExample
        onNotificationDismissed={onNotificationDismissed}
        onNotificationShown={onNotificationShown}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Notification with link' }));

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();

    fireEvent.click(screen.getByTestId('notification-close-button'));

    expect(onNotificationDismissed).toHaveBeenCalledTimes(1);
    expect(onNotificationShown).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();
  });

  it('notiticaion does not appear again when resizing', () => {
    global.innerWidth = 400;

    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Notification with link' }));

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();

    fireEvent.click(screen.getByTestId('notification-close-button'));

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();

    act(() => {
      global.innerWidth = 1000;
      global.dispatchEvent(new Event('resize'));
    });

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();
  });

  it('Only new notifications are rendered, closed notifications doe not appear', () => {
    global.innerWidth = 400;

    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Notification with link' }));

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();

    fireEvent.click(screen.getByTestId('notification-close-button'));

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Notification with options' }));

    expect(screen.getByRole('heading', { name: 'Notification with options' })).toBeVisible();
  });

  it('Timer should not reset when another notification is closed', () => {
    jest.useFakeTimers();

    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Notification with link' }));

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Add notification' }));

    expect(screen.getByRole('heading', { name: 'New notification' })).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'New notification' })).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByRole('heading', { name: 'Notification with link' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'New notification' })).not.toBeInTheDocument();
  });
});

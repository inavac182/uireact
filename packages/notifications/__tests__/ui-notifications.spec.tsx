import React from 'react';

import { act, fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';

import { NotificationsExample } from '../docs/example';

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
});

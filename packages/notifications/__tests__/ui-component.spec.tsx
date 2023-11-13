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

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders fine with link', () => {
    uiRender(<NotificationsExample />);

    fireEvent.click(screen.getByRole('button', { name: 'Add a notification with link' }));

    expect(screen.getByRole('heading', { name: 'Notification with link' })).toBeVisible();
    expect(screen.getByText('This is a new notification that shows a link')).toBeVisible();
    expect(screen.getByRole('link', { name: 'Ui React docs' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Ui React docs' })).toHaveAttribute('href', 'https://uireact.io');
  });
});

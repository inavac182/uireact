import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { UiNotificationsContext } from '../../src/providers';
import { INotificationsController } from '../../src/types';

const showNotification = jest.fn();

const dialogContext: INotificationsController = {
  notifications: [],
  showNotification,
};

const ChildComponent = () => {
  const notificationsContext = React.useContext(UiNotificationsContext);

  return (
    <>
      <button
        onClick={() =>
          notificationsContext.showNotification({
            title: 'Notification title',
          })
        }
      >
        Add
      </button>
    </>
  );
};

const MockedComponent = () => {
  return (
    <UiNotificationsContext.Provider value={dialogContext}>
      <ChildComponent />
    </UiNotificationsContext.Provider>
  );
};

describe('Notification context', () => {
  it('Should execute showNotification', () => {
    render(<MockedComponent />);

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(showNotification).toHaveBeenCalledTimes(1);
    expect(showNotification).toHaveBeenCalledWith({
      title: 'Notification title',
    });
  });
});

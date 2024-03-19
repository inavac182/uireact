import { renderHook } from '@testing-library/react-hooks/server';
import { act } from '@testing-library/react';
import { useNotificationsController } from '../../src/hooks';

describe('useDialogController', () => {
  it('Should retrieve correct controller', () => {
    const { result } = renderHook(() => useNotificationsController());

    expect(result.current.notifications).toHaveLength(0);
    expect(result.current.showNotification).not.toBeNull();
  });

  it('Should add notifications', () => {
    const { result, hydrate } = renderHook(() => useNotificationsController());

    hydrate();

    act(() => {
      result.current.showNotification({
        title: 'A notification',
      });
    });

    expect(result.current.notifications).toHaveLength(1);
    expect(result.current.notifications[0].title).toBe('A notification');
  });
});

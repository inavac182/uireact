import { act, renderHook } from '@testing-library/react';
import { useNotificationsController } from '../../src/hooks';

describe('useDialogController', () => {
  it('Should retrieve correct controller', () => {
    const { result } = renderHook(() => useNotificationsController());

    expect(result.current.notifications).toHaveLength(0);
    expect(result.current.showNotification).not.toBeNull();
  });

  it('Should add notifications', () => {
    const { result } = renderHook(() => useNotificationsController());

    act(() => {
      result.current.showNotification({
        title: 'A notification',
      });
    });

    expect(result.current.notifications).toHaveLength(1);
    expect(result.current.notifications[0].title).toBe('A notification');
  });
});

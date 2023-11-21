import { renderHook } from '@testing-library/react-hooks/server';
import { act } from '@testing-library/react';
import { useConfirmDialogController } from '../../src/hooks';

describe('useDialogController', () => {
  it('Should retrieve correct controller', () => {
    const { result } = renderHook(() => useConfirmDialogController());

    expect(result.current.confirmDialog).toBeNull();
    expect(result.current.hideConfirmDialog).not.toBeNull();
    expect(result.current.showConfirmDialog).not.toBeNull();
    expect(result.current.visible).toBeFalsy();
  });

  it('Should add notifications', () => {
    const { result, hydrate } = renderHook(() => useConfirmDialogController());
    const onConfirmCB = jest.fn();
    const onDenyCB = jest.fn();
    hydrate();

    act(() => {
      result.current.showConfirmDialog(
        {
          title: 'Some title',
          message: 'Some messaging',
          confirmLabel: 'Accept',
          denyLabel: 'Cancel',
        },
        onConfirmCB,
        onDenyCB
      );
    });

    expect(result.current.confirmDialog).not.toBeNull();
    expect(result.current.confirmDialog?.data.title).toBe('Some title');
    expect(result.current.visible).toBeTruthy();

    act(() => {
      result.current.hideConfirmDialog();
    });

    expect(result.current.visible).toBeFalsy();
  });
});

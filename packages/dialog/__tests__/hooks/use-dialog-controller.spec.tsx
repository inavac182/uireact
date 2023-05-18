import { renderHook } from '@testing-library/react-hooks/server';
import { act } from '@testing-library/react';

import { useDialogController } from '@uireact/dialog/hooks';

describe('useDialogController', () => {
  it('Should retrieve correct controller', () => {
    const { result } = renderHook(() => useDialogController());

    expect(result.current.openedDialogs).toHaveLength(0);
    expect(result.current.openDialog).not.toBeNull();
    expect(result.current.closeDialog).not.toBeNull();
  });

  it('Should add dialogs', () => {
    const { result, hydrate } = renderHook(() => useDialogController());

    hydrate();
    act(() => {
      result.current.openDialog('newDialog');
    });

    expect(result.current.openedDialogs).toHaveLength(1);
    expect(result.current.openedDialogs[0]).toBe('newDialog');
  });

  it('Should NOT add the same dialog twice', () => {
    const { result, hydrate } = renderHook(() => useDialogController());

    hydrate();
    act(() => {
      result.current.openDialog('newDialog');
    });

    expect(result.current.openedDialogs).toHaveLength(1);
    expect(result.current.openedDialogs[0]).toBe('newDialog');

    act(() => {
      result.current.openDialog('newDialog');
    });

    expect(result.current.openedDialogs).toHaveLength(1);
    expect(result.current.openedDialogs[0]).toBe('newDialog');
  });

  it('Should remove dialogs', () => {
    const { result, hydrate } = renderHook(() => useDialogController());

    hydrate();

    act(() => {
      result.current.openDialog('newDialog');
    });

    expect(result.current.openedDialogs).toHaveLength(1);
    expect(result.current.openedDialogs[0]).toBe('newDialog');

    act(() => {
      result.current.closeDialog('newDialog');
    });

    expect(result.current.openedDialogs).toHaveLength(0);
  });
});

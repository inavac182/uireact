import React, { useCallback, act } from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiButton } from '@uireact/button';
import { UiConfirmDialogOptions } from '@uireact/foundation';
import { useConfirmDialog, UiConfirmDialog } from '../src';

type ConfirmDialogExampleProps = {
  onConfirmCB?: () => void;
  onDenyCB?: () => void;
  options?: UiConfirmDialogOptions;
};

export const ConfirmDialogExample: React.FC<ConfirmDialogExampleProps> = ({
  onConfirmCB,
  onDenyCB,
  options,
}: ConfirmDialogExampleProps) => {
  const { showConfirmDialog } = useConfirmDialog();

  const onConfirm = useCallback(() => {
    console.log('Action Confirmed');
    onConfirmCB?.();
  }, [onConfirmCB]);

  const onDeny = useCallback(() => {
    console.log('Action denied');
    onDenyCB?.();
  }, [onDenyCB]);

  const onClick = useCallback(() => {
    showConfirmDialog(
      {
        title: 'Are you sure?',
        message: 'Only accept this if you are completely sure',
        confirmLabel: 'Accept',
        denyLabel: 'Cancel',
      },
      onConfirm,
      onDeny,
      options
    );
  }, [showConfirmDialog, options, onConfirm, onDeny]);

  return (
    <div>
      <UiButton onClick={onClick}>Open confirm dialog</UiButton>
      <UiConfirmDialog />
    </div>
  );
};

describe('<UiConfirmDialog />', () => {
  it('renders fine and closes fine on confirm', async () => {
    const onConfirmStub = jest.fn();

    uiRender(<ConfirmDialogExample onConfirmCB={onConfirmStub} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
    });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    expect(onConfirmStub).toHaveBeenCalledTimes(1);
  });

  it('renders fine and closes fine on deny', async () => {
    const onDenyStub = jest.fn();
    uiRender(<ConfirmDialogExample onDenyCB={onDenyStub} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    expect(onDenyStub).toHaveBeenCalledTimes(1);
  });

  it('renders fine and closes fine on background click', async () => {
    const onDenyStub = jest.fn();
    uiRender(<ConfirmDialogExample onDenyCB={onDenyStub} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    act(() => {
      fireEvent.click(screen.getByTestId('confirm-dialog-bg'));
    });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    expect(onDenyStub).toHaveBeenCalledTimes(1);
  });

  it('renders fine without options', async () => {
    uiRender(<ConfirmDialogExample />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });

  it('renders fine with inline options', async () => {
    uiRender(<ConfirmDialogExample options={{ direction: 'inline' }} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });

  it('renders fine with stacked options', async () => {
    uiRender(<ConfirmDialogExample options={{ direction: 'stacked' }} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });
});

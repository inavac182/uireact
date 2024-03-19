import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { ConfirmDialogExample } from '../docs/example';

describe('<UiConfirmDialog />', () => {
  it('renders fine and closes fine on confirm', () => {
    const onConfirmStub = jest.fn();

    uiRender(<ConfirmDialogExample onConfirmCB={onConfirmStub} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    expect(screen.getByRole('dialog')).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Accept' }));

    expect(onConfirmStub).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders fine and closes fine on deny', () => {
    const onDenyStub = jest.fn();
    uiRender(<ConfirmDialogExample onDenyCB={onDenyStub} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    expect(screen.getByRole('dialog')).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onDenyStub).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders fine and closes fine on background click', () => {
    const onDenyStub = jest.fn();
    uiRender(<ConfirmDialogExample onDenyCB={onDenyStub} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    expect(screen.getByRole('dialog')).toBeVisible();

    fireEvent.click(screen.getByTestId('confirm-dialog-bg'));

    expect(onDenyStub).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders fine without options', () => {
    uiRender(<ConfirmDialogExample />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    expect(screen.getByRole('dialog')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });

  it('renders fine with inline options', () => {
    uiRender(<ConfirmDialogExample options={{ direction: 'inline' }} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    expect(screen.getByRole('dialog')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });

  it('renders fine with stacked options', () => {
    uiRender(<ConfirmDialogExample options={{ direction: 'stacked' }} />);

    expect(screen.getByRole('button', { name: 'Open confirm dialog' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Open confirm dialog' }));

    expect(screen.getByRole('dialog')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });
});

import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTimepicker } from '../src';

describe('<UiDatepicker />', () => {
  it('renders fine', async () => {
    uiRender(<UiTimepicker onTimeChange={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Hours')).toBeVisible();
    expect(screen.getByText('Minutes')).toBeVisible();
    expect(screen.getAllByRole('button', { name: '00' })[0]).toBeVisible();
    expect(screen.getAllByRole('button', { name: '00' })[1]).toBeVisible();
  });

  it('is hidden when isOpen is false', async () => {
    uiRender(<UiTimepicker onTimeChange={jest.fn()} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('Executes callback on time change when default hour is passed', async () => {
    const onTimeChange = jest.fn();

    uiRender(<UiTimepicker defaultHour={5} onTimeChange={onTimeChange} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Hours')).toBeVisible();
    expect(screen.getByText('Minutes')).toBeVisible();
    
    fireEvent.click(screen.getAllByRole('button', { name: '00' })[1]);

    expect(onTimeChange).toHaveBeenCalledTimes(1);
    expect(onTimeChange).toHaveBeenCalledWith(5, 0);
  });

  it('Executes callback on time change when default minute is passed', async () => {
    const onTimeChange = jest.fn();

    uiRender(<UiTimepicker defaultMinute={30} onTimeChange={onTimeChange} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Hours')).toBeVisible();
    expect(screen.getByText('Minutes')).toBeVisible();
    
    fireEvent.click(screen.getAllByRole('button', { name: '05' })[0]);

    expect(onTimeChange).toHaveBeenCalledTimes(1);
    expect(onTimeChange).toHaveBeenCalledWith(5, 30);
  });

  it('Executes call onClose when Esc key is pressed', async () => {
    const onTimeChange = jest.fn();
    const onClose = jest.fn();

    uiRender(<UiTimepicker defaultMinute={30} onTimeChange={onTimeChange} isOpen testId='time-picker-element' onClose={onClose} />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Hours')).toBeVisible();
    expect(screen.getByText('Minutes')).toBeVisible();
    
    const timepicker = screen.getByTestId('time-picker-element');

    fireEvent.keyDown(timepicker, { key: 'Escape', code: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onTimeChange).not.toHaveBeenCalled();
  });


  it('Nothing happens if Esc key is pressed and no onClose CB is passed', async () => {
    const onTimeChange = jest.fn();

    uiRender(<UiTimepicker defaultMinute={30} onTimeChange={onTimeChange} isOpen testId='time-picker-element' />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Hours')).toBeVisible();
    expect(screen.getByText('Minutes')).toBeVisible();
    
    const timepicker = screen.getByTestId('time-picker-element');

    fireEvent.keyDown(timepicker, { key: 'Escape', code: 'Escape' });

    expect(screen.getByRole('menu')).toBeVisible();
  });
});

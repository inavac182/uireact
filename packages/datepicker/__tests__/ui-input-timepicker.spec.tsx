import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';
import { UiIcon } from '@uireact/icons';

import { uiRender } from '../../../__tests__/utils/render';
import { UiInputTimepicker } from '../src';

describe('<UiInputTimepicker />', () => {
  it('renders fine', async () => {
    uiRender(<UiInputTimepicker onChange={jest.fn()} label='Select a time' />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByRole('textbox', { name: 'Select a time'} )).toBeVisible();
    expect(screen.getByText('Hours')).toBeVisible();
  });

  it('renders fine on Click', async () => {
    uiRender(<UiInputTimepicker onChange={jest.fn()} label='Select a time' />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByRole('textbox', { name: 'Select a time'} )).toBeVisible();
    expect(screen.getByText('Hours')).toBeVisible();
  });

  it('renders fine with error', async () => {
    uiRender(<UiInputTimepicker onChange={jest.fn()} label='Select a time' error='There is an error with the time selected' />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    expect(screen.getByRole('textbox', { name: 'Select a time'} )).toBeVisible();
    expect(screen.getByText('There is an error with the time selected')).toBeVisible();
  });

  it('renders fine with custom labels', async () => {
    uiRender(<UiInputTimepicker onChange={jest.fn()} hoursLabel='Horas' minutesLabel='Minutos' icon={<UiIcon icon="Clock" />} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Horas')).toBeVisible();
    expect(screen.getByText('Minutos')).toBeVisible();
  });

  it('Executes onChange callback when hour is selected', async () => {
    const onChage = jest.fn();

    uiRender(<UiInputTimepicker onChange={onChage} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getAllByRole('button', { name: '01' })[0]);
    
    expect(onChage).toHaveBeenCalledTimes(1);
    expect(onChage).toHaveBeenCalledWith(1, undefined);
  });

  it('Executes onChange callback when minute is selected', async () => {
    const onChage = jest.fn();

    uiRender(<UiInputTimepicker onChange={onChage} hour={12} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getAllByRole('button', { name: '20' })[1]);
    
    expect(onChage).toHaveBeenCalledTimes(1);
    expect(onChage).toHaveBeenCalledWith(12, 20);
  });

  it('Executes onChange callback when hour is selected and minutes are provided', async () => {
    const onChage = jest.fn();

    uiRender(<UiInputTimepicker label='Select a time' labelOnTop onChange={onChage} minute={5} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getAllByRole('button', { name: '01' })[0]);
    
    expect(onChage).toHaveBeenCalledTimes(1);
    expect(onChage).toHaveBeenCalledWith(1, 5);
  });

  it('timepicker closes on Esc key pressed', async () => {
    uiRender(<UiInputTimepicker onChange={jest.fn()} testId='time-picker-input' />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    const timepicker = screen.getByTestId('time-picker-input');
    
    fireEvent.keyDown(timepicker, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});

import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTable } from '../src';
import { UiTableData } from '../src/types';

describe('<Component />', () => {
  const data: UiTableData = {
    headings: ['id', 'summary'],
    items: [
      { id: '1', cols: ['1', 'summary 1'] },
      { id: '2', cols: ['2', 'summary 2'] },
    ],
  };

  it('renders fine', () => {
    uiRender(<UiTable data={data} />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine with selected item', () => {
    uiRender(<UiTable data={data} selected="2" />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine without filter', () => {
    uiRender(<UiTable data={data} withFilter={false} />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('renders fine with category', () => {
    uiRender(<UiTable data={data} category="secondary" />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
  });

  it('renders fine with filter position', () => {
    uiRender(<UiTable data={data} category="secondary" filterBoxPosition="right" />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
  });

  it('Filters correctly', () => {
    uiRender(<UiTable data={data} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'summary 1' } });

    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
    expect(screen.queryByRole('cell', { name: /summary 2/i })).not.toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'summary' } });

    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 2/i })).toBeVisible();
  });

  it('Executes onClick CB when row is selected and passes correct id', () => {
    const mockedFn = jest.fn();
    uiRender(<UiTable data={data} onClick={mockedFn} />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    fireEvent.click(screen.getByRole('cell', { name: /summary 1/i }));

    expect(mockedFn).toHaveBeenCalledTimes(1);
    expect(mockedFn).toHaveBeenCalledWith('1');
  });

  it('Does anything if clicked but no CB is provided', () => {
    uiRender(<UiTable data={data} />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    // Select a Row
    fireEvent.click(screen.getByRole('cell', { name: /summary 1/i }));
  });
});

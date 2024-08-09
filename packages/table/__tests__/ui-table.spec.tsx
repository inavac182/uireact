import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTable } from '../src';
import { UiTableData } from '../src/types';

describe('<Component />', () => {
  const data: UiTableData = {
    headings: [{ label: 'id' }, { label: 'summary' }],
    items: [
      { id: '1', cols: [1, 'summary 1'] },
      { id: '2', cols: [2, 'summary 2'] },
    ],
  };

  it('renders fine', () => {
    uiRender(<UiTable data={data} />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    expect(screen.getAllByTestId('sort-icon')).toHaveLength(2);
    expect(screen.queryByTestId('sort-icon-up')).not.toBeInTheDocument();
    expect(screen.queryByTestId('sort-icon-down')).not.toBeInTheDocument();

    expect(screen.getAllByTestId('sort-icon')[0]).toBeVisible();

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  
  it('renders fine with styling', () => {
    uiRender(<UiTable data={data} bordered />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    expect(screen.getAllByTestId('sort-icon')).toHaveLength(2);
    expect(screen.queryByTestId('sort-icon-up')).not.toBeInTheDocument();
    expect(screen.queryByTestId('sort-icon-down')).not.toBeInTheDocument();

    expect(screen.getAllByTestId('sort-icon')[0]).toBeVisible();

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

  it('renders fine without sort', () => {
    uiRender(<UiTable data={data} withSort={false} />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();

    expect(screen.queryByTestId('sort-icon')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeVisible();
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

  it('Sorts correctly and shows sort icon up when sorting upwards', () => {
    uiRender(<UiTable data={data} />);

    fireEvent.click(screen.getByText('summary'));

    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 2/i })).toBeVisible();

    expect(screen.getAllByTestId('sort-icon')).toHaveLength(1);
    expect(screen.getByTestId('sort-icon-up')).toBeVisible();
    expect(screen.queryByTestId('sort-icon-down')).not.toBeInTheDocument();
  });

  it('Sorts correctly and shows sort icon down when sorting downwards', () => {
    uiRender(<UiTable data={data} />);

    //Clicking twice as 1 click is up sort, 2 click is down sort.

    fireEvent.click(screen.getByText('summary'));
    fireEvent.click(screen.getByText('summary'));

    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 2/i })).toBeVisible();

    expect(screen.getAllByTestId('sort-icon')).toHaveLength(1);
    expect(screen.queryByTestId('sort-icon-up')).not.toBeInTheDocument();
    expect(screen.getByTestId('sort-icon-down')).toBeVisible();
  });

  it('Resets sort correctly when clicking on same heading after is sorting downwards', () => {
    uiRender(<UiTable data={data} />);

    //Clicking twice as 1 click is up sort, 2 click is down sort.

    fireEvent.click(screen.getByText('summary'));
    fireEvent.click(screen.getByText('summary'));
    fireEvent.click(screen.getByText('summary'));

    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 2/i })).toBeVisible();

    expect(screen.getAllByTestId('sort-icon')).toHaveLength(2);
    expect(screen.queryByTestId('sort-icon-up')).not.toBeInTheDocument();
    expect(screen.queryByTestId('sort-icon-down')).not.toBeInTheDocument();
  });

  it('Sorts and filters correctly when used together', () => {
    const data: UiTableData = {
      headings: [{ label: 'index' }, { label: 'summary' }],
      items: [
        { id: '1', cols: [1, 'summary'] },
        { id: '2', cols: [2, 'summary'] },
        { id: '3', cols: [3, 'something else'] },
      ],
    };

    uiRender(<UiTable data={data} />);

    expect(screen.getAllByRole('cell', { name: /summary/i })).toHaveLength(2);
    expect(screen.getByRole('cell', { name: /something else/i })).toBeVisible();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'summary' } });

    expect(screen.getAllByRole('cell', { name: /summary/i })).toHaveLength(2);
    expect(screen.queryByRole('cell', { name: /something else/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('index'));

    expect(screen.getAllByRole('cell', { name: /summary/i })).toHaveLength(2);
    expect(screen.queryByRole('cell', { name: /something else/i })).not.toBeInTheDocument();
    expect(screen.getByTestId('sort-icon-up')).toBeVisible();
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

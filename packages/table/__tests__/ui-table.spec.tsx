import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTable } from '../src';
import { UiTableData } from '../src/types';

describe('<Component />', () => {
  const data: UiTableData = {
    headings: ['id', 'summary'],
    fields: [
      ['1', 'summary 1'],
      ['2', 'summary 2'],
    ],
  };

  it('renders fine', () => {
    uiRender(<UiTable data={data} />);

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
});

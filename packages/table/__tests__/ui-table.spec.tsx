import React from 'react';

import { screen } from '@testing-library/react';

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
  });

  it('renders fine with category', () => {
    uiRender(<UiTable data={data} category="secondary" />);

    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeVisible();
    expect(screen.getByRole('cell', { name: /summary 1/i })).toBeVisible();
  });
});

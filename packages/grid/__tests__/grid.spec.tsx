import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiGrid } from '../src';

test('renders the grid when is rendered with 2 items', () => {
  render(
    <UiGrid cols={2}>
      <p>Item 1</p>
      <p>Item 2</p>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when is rendered inline', () => {
  render(
    <UiGrid cols={2} inlineGrid>
      <p>Item 1</p>
      <p>Item 2</p>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when is rendered center justified and in 2 rows', () => {
  render(
    <UiGrid rows={2} justifyItems="center">
      <p>Item 1</p>
      <p>Item 2</p>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

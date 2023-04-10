import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiGrid, UiGridItem } from '../src';

test('renders the grid when is rendered with 2 items', () => {
  render(
    <UiGrid cols={2} justifyItems="center" colsGap={3} rowsGap={10}>
      <UiGridItem placeSelf="center">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when is rendered inline', () => {
  render(
    <UiGrid cols={2} inlineGrid>
      <UiGridItem>Item 1</UiGridItem>
      <UiGridItem alignSelf="center">Item 2</UiGridItem>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when is rendered center justified and in 2 rows', () => {
  render(
    <UiGrid rows={2} justifyItems="center" autoFlow="column">
      <UiGridItem justifySelf="center">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when width is specified', () => {
  render(
    <UiGrid rows={2} gridWidth="200px" gridHeight="100px">
      <UiGridItem justifySelf="center">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

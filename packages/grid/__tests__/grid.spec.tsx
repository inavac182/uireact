import * as React from 'react';
import { act, render, screen } from '@testing-library/react';

import { UiGrid, UiGridItem } from '../src';

beforeEach(() => {
  global.innerWidth = 1200;
});

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

test('renders the grid when using a breakpoints object as cols', () => {
  global.innerWidth = 300;

  const MockedComponent = () => (
    <UiGrid cols={{ small: 1, medium: 1, large: 2, xlarge: 2 }} justifyItems="center" colsGap={3} rowsGap={10}>
      <UiGridItem placeSelf="center">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  const { rerender } = render(<MockedComponent />);

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();

  act(() => {
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));
  });

  rerender(<MockedComponent />);

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();

  act(() => {
    global.innerWidth = 1050;
    global.dispatchEvent(new Event('resize'));
  });

  rerender(<MockedComponent />);

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();

  act(() => {
    global.innerWidth = 1500;
    global.dispatchEvent(new Event('resize'));
  });

  rerender(<MockedComponent />);

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when using a breakpoints object is unrecognized', () => {
  global.innerWidth = 1500;

  const MockedComponent = () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <UiGrid cols="XXXX" justifyItems="center" colsGap={3} rowsGap={10}>
      <UiGridItem placeSelf="center">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  render(<MockedComponent />);

  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('renders the grid when using a breakpoints object as rows', () => {
  render(
    <UiGrid rows={{ small: 1, medium: 1, large: 2, xlarge: 2 }} justifyItems="center" colsGap={3} rowsGap={10}>
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

test('renders grid item with class name', () => {
  render(
    <UiGrid cols={2} justifyItems="center" colsGap={3} rowsGap={10}>
      <UiGridItem className="someclass">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  expect(screen.getByText('Item 1')).toHaveClass('someclass');
});

test('renders grid item with test id', () => {
  render(
    <UiGrid cols={2} justifyItems="center" colsGap={3} rowsGap={10}>
      <UiGridItem testId="someTestId">Item 1</UiGridItem>
      <UiGridItem>Item 2</UiGridItem>
    </UiGrid>
  );

  expect(screen.getByTestId('someTestId')).toBeVisible();
});

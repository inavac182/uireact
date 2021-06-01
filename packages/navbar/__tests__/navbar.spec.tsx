import React from 'react';

import { render, screen } from '@testing-library/react';

import { UiNavbar, UiNavbarItem } from '../src';

test('Should render navbar if orientation is inline', () => {
  render(
    <UiNavbar orientation="inline">
      <UiNavbarItem>Option 1</UiNavbarItem>
      <UiNavbarItem>Option 2</UiNavbarItem>
    </UiNavbar>
  );

  expect(screen.getByText('Option 1')).toBeVisible();
  expect(screen.getByText('Option 2')).toBeVisible();
});

test('Should render navbar if orientation is stacked', () => {
  render(
    <UiNavbar orientation="stacked">
      <UiNavbarItem>Option 1</UiNavbarItem>
      <UiNavbarItem>Option 2</UiNavbarItem>
    </UiNavbar>
  );

  expect(screen.getByText('Option 1')).toBeVisible();
  expect(screen.getByText('Option 2')).toBeVisible();
});

test('Should render navbar if navbar item has alignments', () => {
  render(
    <UiNavbar orientation="stacked">
      <UiNavbarItem align='center'>Option 1</UiNavbarItem>
      <UiNavbarItem align='left'>Option 2</UiNavbarItem>
      <UiNavbarItem align='right'>Option 3</UiNavbarItem>
    </UiNavbar>
  );

  expect(screen.getByText('Option 1')).toBeVisible();
  expect(screen.getByText('Option 2')).toBeVisible();
  expect(screen.getByText('Option 3')).toBeVisible();
});


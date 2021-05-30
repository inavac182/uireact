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

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiPrimaryButton, UiSecondaryButton, UiTertiaryButton } from '../src';

test('renders primary button', () => {
  render(<UiPrimaryButton>MyButton</UiPrimaryButton>);

  expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
});

test('renders secondary button', () => {
  render(<UiSecondaryButton>MyButton</UiSecondaryButton>);

  expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
});

test('renders tertiary button', () => {
  render(<UiTertiaryButton>MyButton</UiTertiaryButton>);

  expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
});

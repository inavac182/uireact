import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { UiButton } from '../src';

test('renders button', () => {
  render(<UiButton>MyButton</UiButton>);

  expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
});

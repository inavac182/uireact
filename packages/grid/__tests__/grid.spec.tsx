import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiGrid } from '../src';

test('renders the grid', () => {
  render(<UiGrid>This is the grid</UiGrid>);

  expect(screen.getByText('This is the grid')).toBeVisible();
});

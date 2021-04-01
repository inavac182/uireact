import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiCard } from '../src';

test('renders button', () => {
  render(<UiCard>This is my card</UiCard>);

  expect(screen.getByText('This is my card')).toBeVisible();
});

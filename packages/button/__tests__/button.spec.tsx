import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Status } from '@uireact/foundation';

import { UiButton } from '../src';

test('renders button', () => {
  render(<UiButton status={Status.INFO}>MyButton</UiButton>);

  expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
});

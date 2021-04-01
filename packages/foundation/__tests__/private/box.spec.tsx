import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiBox } from '../../src/private';

test('should render correctly', () => {
  render(<UiBox>This is the box</UiBox>);

  expect(screen.getByText('This is the box')).toBeVisible();
});
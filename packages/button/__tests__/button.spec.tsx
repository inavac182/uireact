import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { DynamicElementStateEnum } from '@uireact/foundation';

import { UiButton } from '../src';

test('renders button', () => {
  render(<UiButton state={DynamicElementStateEnum.INFO}>MyButton</UiButton>);

  expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
});

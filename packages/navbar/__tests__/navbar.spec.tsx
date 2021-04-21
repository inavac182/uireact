import React from 'react';
import { UiNavbar } from '../src';
import { render, screen } from '@testing-library/react';

test('Should render navbar', () => {
  render(
    <UiNavbar>
      <p>TEST</p>
    </UiNavbar>
  );

  expect(screen.getByText('TEST')).toBeVisible();
});

import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiComponent } from '../src/ui-component';

describe('<Component />', () => {
  it('renders fine', () => {
    uiRender(<UiComponent />);

    expect(screen.getByText('UiComponent')).toBeVisible();
  });
});

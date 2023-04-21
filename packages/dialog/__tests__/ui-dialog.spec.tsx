import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDialog } from '../src/ui-dialog';

describe('<Component />', () => {
  it('renders fine', () => {
    uiRender(<UiDialog />);

    expect(screen.getByText('UiDialog')).toBeVisible();
  });
});

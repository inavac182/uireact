import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiView } from '../src/ui-view';

describe('<UiView />', () => {
  it('renders fine', () => {
    uiRender(<UiView />);

    expect(screen.getByText('UiView')).toBeVisible();
  });
});

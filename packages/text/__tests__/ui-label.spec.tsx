import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLabel } from '../src';
import { TextSize } from '@uireact/foundation';

describe('<UiLabel />', () => {
  it('renders fine', () => {
    uiRender(<UiLabel>Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine with category', () => {
    uiRender(<UiLabel category="positive">Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(<UiLabel size={TextSize.large}>Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
  });
});

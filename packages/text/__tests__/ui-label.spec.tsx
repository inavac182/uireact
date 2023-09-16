import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLabel } from '../src';

import 'jest-styled-components';

describe('<UiLabel />', () => {
  it('renders fine', () => {
    uiRender(<UiLabel>Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveStyleRule('color', 'var(--fonts-token_100)');
  });

  it('renders fine with category', () => {
    uiRender(<UiLabel category="positive">Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(<UiLabel size="large">Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveStyleRule('font-size', 'var(--texts-large)');
  });
});

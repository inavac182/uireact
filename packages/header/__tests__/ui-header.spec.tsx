import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiHeader } from '../src/ui-header';

describe('<UiHeader />', () => {
  beforeEach(() => {
    global.innerWidth = 1080;
  });

  it('renders fine', () => {
    uiRender(
      <UiHeader>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });

  it('renders fine if is centered', () => {
    uiRender(
      <UiHeader centered>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });

  it('renders fine if is fixed', () => {
    uiRender(
      <UiHeader fixed>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });

  it('renders fine if is centered and xl', () => {
    global.innerWidth = 1450;

    uiRender(
      <UiHeader centered>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });
});

import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils';
import { UiViewRow } from '../src';

describe('<UiViewRow />', () => {
  it('Should render fine', () => {
    uiRender(
      <UiViewRow>
        <p>Content 1</p>
        <p>Content 2</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('Should render fine when is centered', () => {
    uiRender(
      <UiViewRow centeredContent>
        <p>Content 1</p>
        <p>Content 2</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });
});

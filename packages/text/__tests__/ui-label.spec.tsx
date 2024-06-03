import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLabel } from '../src';

describe('<UiLabel />', () => {
  it('renders fine', () => {
    uiRender(<UiLabel>Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-small');
  });

  it('renders fine with spacing', () => {
    uiRender(<UiLabel margin={{all: 'five'}} padding={{all: 'four'}}>Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-small margin-five padding-four');
  });

  it('renders fine with category', () => {
    uiRender(<UiLabel category="positive">Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(<UiLabel size="large">Text</UiLabel>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-large');
  });

  it('renders fine with dark coloration', () => {
    uiRender(
      <UiLabel size="large" coloration="dark">
        Text
      </UiLabel>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-large dark');
  });

  it('renders fine with light coloration', () => {
    uiRender(
      <UiLabel size="large" coloration="light">
        Text
      </UiLabel>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-large light');
  });
});

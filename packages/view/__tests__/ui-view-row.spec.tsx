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

  it('Should render fine when is centered and width xlarge', () => {
    global.innerWidth = 1450;
    uiRender(
      <UiViewRow centeredContent>
        <p>Content 1</p>
        <p>Content 2</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('Should add class name', () => {
    uiRender(<UiViewRow className="someClass">Content 1</UiViewRow>);

    expect(screen.getByText('Content 1')).toHaveClass('someClass');
  });

  it('Should render fine with category', () => {
    uiRender(
      <UiViewRow category="secondary">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('Should render fine with inversed font', () => {
    uiRender(
      <UiViewRow category="secondary" inverseFont>
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('Should render fine with noBackground', () => {
    uiRender(
      <UiViewRow inverseFont noBackground>
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
  });
});

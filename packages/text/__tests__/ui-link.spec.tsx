import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLink } from '../src';

import { TextSize } from '@uireact/foundation';

const onClick = jest.fn();

describe('<UiLink />', () => {
  afterEach(() => {
    onClick.mockClear();
  });

  it('renders fine', () => {
    uiRender(
      <UiLink>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with wrap', () => {
    uiRender(
      <UiLink wrap>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(
      <UiLink size="large">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is italic', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="italic">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is bold', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="bold">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is regular', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="regular">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is light', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="light">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with color category', () => {
    uiRender(
      <UiLink href="#" category="positive">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with fullWidth', () => {
    uiRender(
      <UiLink href="#" category="positive" fullWidth>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('trigger onClick when clicked', () => {
    uiRender(
      <UiLink handleClick={onClick} category="positive">
        <a href="#">Link</a>
      </UiLink>
    );

    fireEvent.click(screen.getByRole('link', { name: 'Link' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';

import { screen, render } from '@testing-library/react';
import { TextSize } from '@uireact/foundation';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLink } from '../src';

describe('<UiLink />', () => {
  it('renders fine', () => {
    uiRender(
      <UiLink>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders nothing when children is not valid element', () => {
    const { container } = render(
      <UiLink>dasdas</UiLink>
    );

    expect(container.innerHTML).toBe('');
  });

  it('renders fine with spacing', () => {
    uiRender(
      <UiLink padding={{ all: 'four' }} margin={{ all: 'five' }}>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-regular margin-five padding-four');
  });

  it('renders fine with wrap', () => {
    uiRender(
      <UiLink wrap='normal'>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-regular wrap-normal');
  });

  it('renders fine with size', () => {
    uiRender(
      <UiLink size="large">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large');
  });

  it('renders fine when fontStyle is italic', () => {
    uiRender(
      <UiLink size={TextSize.large} fontStyle="italic">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large italic');
  });

  it('renders fine when fontStyle is bold', () => {
    uiRender(
      <UiLink size={TextSize.large} fontStyle="bold">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large bold');
  });

  it('renders fine with light coloration', () => {
    uiRender(
      <UiLink size={TextSize.large} fontStyle="bold" coloration="light">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large light bold');
  });

  it('renders fine with dark coloration', () => {
    uiRender(
      <UiLink size={TextSize.large} fontStyle="bold" coloration="dark">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large dark bold');
  });

  it('renders fine when fontStyle is bold', () => {
    uiRender(
      <UiLink size={TextSize.large} fontStyle="bold">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large bold');
  });

  it('renders fine when fontStyle is slim', () => {
    uiRender(
      <UiLink size={TextSize.large} fontStyle="slim">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-tertiary-100 size-large slim');
  });

  it('renders fine with color category', () => {
    uiRender(
      <UiLink category="positive">
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-positive-100 size-regular');
  });

  it('renders fine with fullWidth', () => {
    uiRender(
      <UiLink category="positive" fullWidth>
        <a href="#">Link</a>
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('color-positive-100 size-regular fullWidth');
  });
});

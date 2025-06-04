import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTooltip } from '../src';

describe('<Component />', () => {
  it('renders fine', () => {
    uiRender(<UiTooltip text="Some text">Content</UiTooltip>);

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with top position', () => {
    uiRender(
      <UiTooltip text="Some text" position="top">
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with left position', () => {
    uiRender(
      <UiTooltip text="Some text" position="left">
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with bottom position', () => {
    uiRender(
      <UiTooltip text="Some text" position="bottom">
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with right position', () => {
    uiRender(
      <UiTooltip text="Some text" position="right">
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine and hides tooltip when mouse is not over', () => {
    uiRender(<UiTooltip text="Some text">Content</UiTooltip>);

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.queryByRole('tooltip', { name: 'Some text' })).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();

    fireEvent.mouseLeave(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.queryByRole('tooltip', { name: 'Some text' })).not.toBeInTheDocument();
  });

  it('renders fine with top with category', () => {
    uiRender(
      <UiTooltip text="Some text" position="top" category="positive" inverse={false}>
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with top with category and bottom', () => {
    uiRender(
      <UiTooltip text="Some text" position="bottom" category="positive" inverse={false}>
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with top with category and left', () => {
    uiRender(
      <UiTooltip text="Some text" position="left" category="secondary" inverse={false}>
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with top with category and right', () => {
    uiRender(
      <UiTooltip text="Some text" position="right" category="error" inverse={false}>
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });

  it('renders fine with top with inverse', () => {
    uiRender(
      <UiTooltip text="Some text" position="top" category="positive" inverse={false}>
        Content
      </UiTooltip>
    );

    fireEvent.mouseOver(screen.getByText('Content'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByRole('tooltip', { name: 'Some text' })).toBeVisible();
  });
});

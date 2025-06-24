import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiFlexGrid, UiFlexGridItem } from '../src';

import 'jest-styled-components';

describe('<UiFlexGrid />', () => {
  it('renders fine', () => {
    uiRender(
      <UiFlexGrid testId="grid">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('flexGrid');
  });

  it('renders fine when is inline', () => {
    uiRender(
      <UiFlexGrid testId="grid" inline>
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('inlineFlex');
  });

  it('renders fine with alignments', () => {
    uiRender(
      <UiFlexGrid alignItems="center" justifyContent="center" testId="grid">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('flexGrid align-center justify-center');
  });

  it('renders fine with gaps', () => {
    uiRender(
      <UiFlexGrid gap="three" columnGap="five" rowGap="three" testId="grid">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('flexGrid gap-three columnGapfive rowGapthree');
  });

  it('renders fine with direction', () => {
    uiRender(
      <UiFlexGrid direction="column" testId="grid">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('flexGrid column');
  });

  it('renders fine with wrap', () => {
    uiRender(
      <UiFlexGrid wrap="nowrap" testId="grid">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('flexGrid nowrap');
  });

    it('renders fine with fullHeight', () => {
    uiRender(
      <UiFlexGrid wrap="nowrap" testId="grid" fullHeight>
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('grid')).toHaveClass('flexGrid nowrap fullHeight');
  });
});

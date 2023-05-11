import React from 'react';

import { screen } from '@testing-library/react';

import { Sizing } from '@uireact/foundation';

import { uiRender } from '../../../__tests__/utils/render';
import { UiFlexGrid, UiFlexGridItem } from '../src';

describe('<UiFlexGrid />', () => {
  it('renders fine', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with alignments', () => {
    uiRender(
      <UiFlexGrid alignItems="center" justifyContent="center">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with gaps', () => {
    uiRender(
      <UiFlexGrid gap={Sizing.three} columnGap={Sizing.five} rowGap={Sizing.three}>
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with direction', () => {
    uiRender(
      <UiFlexGrid direction="column">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with wrap', () => {
    uiRender(
      <UiFlexGrid wrap="nowrap">
        <UiFlexGridItem>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });
});

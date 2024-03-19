import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiFlexGrid, UiFlexGridItem } from '../src';

describe('<UiFlexGridItem />', () => {
  it('renders fine with alignment', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem align="center">Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with grow', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem grow={1}>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with order', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem order={1}>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with shrink', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem shrink={1}>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });
});

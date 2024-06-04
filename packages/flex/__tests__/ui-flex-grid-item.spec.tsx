import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiFlexGrid, UiFlexGridItem } from '../src';

describe('<UiFlexGridItem />', () => {
  it('renders fine with alignment', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem align="center" testId='item'>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('item')).toHaveClass('align-center');
  });

  it('renders fine with class name', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem align="center" testId='item' className='someClass'>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByTestId('item')).toHaveClass('align-center someClass');
  });


  it('renders fine with grow', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem grow={1} testId="item">Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine with shrink', () => {
    uiRender(
      <UiFlexGrid>
        <UiFlexGridItem shrink={1} testId='item'>Item 1</UiFlexGridItem>
        <UiFlexGridItem>Item 2</UiFlexGridItem>
      </UiFlexGrid>
    );

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });
});

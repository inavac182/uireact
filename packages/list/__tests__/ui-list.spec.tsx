import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiList, UiListItem } from '../src';

describe('<UiList />', () => {
  it('renders fine', () => {
    uiRender(
      <UiList>
        <UiListItem>Item 1</UiListItem>
        <UiListItem>Item 2</UiListItem>
      </UiList>
    );

    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getAllByRole('listitem')[0]).toBeVisible();
    expect(screen.getAllByRole('listitem')[1]).toBeVisible();
    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
  });

  it('renders fine', () => {
    uiRender(
      <UiList type="ORDERED">
        <UiListItem>Item 1</UiListItem>
        <UiListItem>Item 2</UiListItem>
      </UiList>
    );

    expect(screen.getByRole('list')).toBeVisible();
  });

  it('renders fine', () => {
    uiRender(
      <UiList type="BULLETED">
        <UiListItem>Item 1</UiListItem>
        <UiListItem>Item 2</UiListItem>
      </UiList>
    );

    expect(screen.getByRole('list')).toBeVisible();
  });
});

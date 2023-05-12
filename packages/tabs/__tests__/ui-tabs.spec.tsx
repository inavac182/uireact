import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTabs, UiTabItem } from '../src';

const onClick = jest.fn();

const MockedComponent = () => (
  <UiTabs>
    <UiTabItem identifier="1" handleClick={onClick} selected>
      Item 1
    </UiTabItem>
    <UiTabItem identifier="2" handleClick={onClick}>
      Item 2
    </UiTabItem>
    <UiTabItem identifier="3" handleClick={onClick}>
      Item 3
    </UiTabItem>
  </UiTabs>
);

describe('<UiTabs />', () => {
  it('renders fine', () => {
    uiRender(<MockedComponent />);

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByText('Item 3')).toBeVisible();
  });

  it('Triggers CB when tab item is clicked', () => {
    uiRender(<MockedComponent />);

    fireEvent.click(screen.getByText('Item 2'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0]).toBe('2');
  });
});

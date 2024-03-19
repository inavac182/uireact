import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiProgressIndicator, UiProgressIndicatorItem } from '../src/';

type MockedComponentProps = {
  allowGoBack?: boolean;
  currentSelected?: number;
  invalidComponent?: boolean;
  clickCB?: () => void;
};

const goBackFn = jest.fn();

const MockedComponent: React.FC<MockedComponentProps> = ({
  allowGoBack,
  clickCB,
  currentSelected,
}: MockedComponentProps) => {
  const [current] = React.useState(currentSelected);

  return (
    <UiProgressIndicator allowGoBack={allowGoBack} current={current} handleCompletedStepClick={clickCB}>
      <UiProgressIndicatorItem>Item 1</UiProgressIndicatorItem>
      <UiProgressIndicatorItem>Item 2</UiProgressIndicatorItem>
      <UiProgressIndicatorItem>Item 3</UiProgressIndicatorItem>
    </UiProgressIndicator>
  );
};

describe('<Component />', () => {
  afterEach(() => {
    goBackFn.mockClear();
  });

  it('renders fine', () => {
    uiRender(<MockedComponent />);

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByText('Item 3')).toBeVisible();
  });

  it('renders fine when all are completed', () => {
    uiRender(<MockedComponent currentSelected={3} allowGoBack />);

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByText('Item 3')).toBeVisible();
  });

  it('renders fine currentSelected is provided', () => {
    uiRender(<MockedComponent currentSelected={1} />);

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(screen.getByText('Item 2')).toBeVisible();
    expect(screen.getByText('Item 3')).toBeVisible();
  });

  it('allowGoBack executes callback', () => {
    uiRender(<MockedComponent allowGoBack currentSelected={3} clickCB={goBackFn} />);

    fireEvent.click(screen.getByText('Item 2'));

    expect(goBackFn).toHaveBeenCalledTimes(1);
    expect(goBackFn).toHaveBeenCalledWith(2);
  });

  it('Does not break if CB is not provided', () => {
    uiRender(<MockedComponent allowGoBack currentSelected={2} />);

    fireEvent.click(screen.getByText('Item 1'));

    expect(screen.getByText('Item 1')).toBeVisible();
    expect(goBackFn).toHaveBeenCalledTimes(0);
  });
});

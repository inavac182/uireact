import React from 'react';
import { UiViewport, UiViewportContextData, UiViewportProvider } from '../src';
import { uiRender } from '../../../__tests__/utils';
import { screen } from '@testing-library/react';

const CustomBreakpoints: UiViewportContextData = {
  small: 600,
  medium: 900,
  large: 1400
}

const MockedComponent = () => {
  return (
    <UiViewportProvider data={CustomBreakpoints}>
      <UiViewport criteria='small'>
        <p>Render on small</p>
      </UiViewport>
      <UiViewport criteria='medium'>
        <p>Render on medium</p>
      </UiViewport>
      <UiViewport criteria='large'>
        <p>Render on large</p>
      </UiViewport>
    </UiViewportProvider>
  )
}

describe('<UiViewportProvider />', () => {
  it('Should render on small', () => {
    global.innerWidth = CustomBreakpoints.small;

    uiRender(<MockedComponent />);

    expect(screen.getByText('Render on small')).toBeVisible();
    expect(screen.queryByText('Render on medium')).not.toBeInTheDocument();
    expect(screen.queryByText('Render on large')).not.toBeInTheDocument();
  });

  it('Should render on small', () => {
    global.innerWidth = CustomBreakpoints.medium;

    uiRender(<MockedComponent />);

    expect(screen.getByText('Render on medium')).toBeVisible();
    expect(screen.queryByText('Render on small')).not.toBeInTheDocument();
    expect(screen.queryByText('Render on large')).not.toBeInTheDocument();
  });

  it('Should render on small', () => {
    global.innerWidth = CustomBreakpoints.large;

    uiRender(<MockedComponent />);

    expect(screen.queryByText('Render on small')).not.toBeInTheDocument();
    expect(screen.queryByText('Render on medium')).not.toBeInTheDocument();
    expect(screen.getByText('Render on large')).toBeVisible();
  });
});

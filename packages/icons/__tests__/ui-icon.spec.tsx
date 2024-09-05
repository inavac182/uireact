import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import { UiReactFadeUp } from '@uireact/framer-animations';

import { uiRender } from '../../../__tests__/utils/render';
import { UiIcon } from '../src';


describe('<UiIcon />', () => {
  it('renders fine', () => {
    uiRender(<UiIcon icon="Search" testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveClass('icon fill-fonts-100 size-regular w-regular h-regular');
  });

  it('renders fine with weight', () => {
    uiRender(<UiIcon icon="Search" testId="UiIcon" weight='200' />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveClass('icon fill-fonts-200 size-regular w-regular h-regular');
  });

  it('renders fine with motion animation', async () => {
    uiRender(<UiIcon icon="Search" testId="UiIcon" motion={UiReactFadeUp} />);

    await waitFor(() => {
      expect(screen.getByTestId('Icon')).toBeVisible();
    });

    expect(screen.getByTestId('UiIcon')).toHaveClass('icon fill-fonts-100 size-regular w-regular h-regular');
  });

  it('renders fine with theme', () => {
    uiRender(<UiIcon icon="Search" category="error" testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveClass('icon fill-error-100 size-regular w-regular h-regular');
  });

  it('renders fine with size', () => {
    uiRender(<UiIcon icon="Search" size="regular" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiIcon icon="Search" category="secondary" inverseColoration testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveClass('icon fill-inverse-secondary-100 size-regular w-regular h-regular');
  });

  it('renders fine with inverse coloration props on light', () => {
    uiRender(<UiIcon icon="Search" category="error" coloration="light" testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveClass('light icon fill-error-100 size-regular w-regular h-regular');
  });

  it('renders fine with inverse coloration props on dark', () => {
    uiRender(<UiIcon icon="Search" category="error" coloration="dark" testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveClass('dark icon fill-error-100 size-regular w-regular h-regular');
  });

  it('renders nothing if id is unrecognized', () => {
    //@ts-ignore
    uiRender(<UiIcon icon="XXXX" />);

    expect(screen.queryByTestId('Icon')).not.toBeInTheDocument();
  });
});

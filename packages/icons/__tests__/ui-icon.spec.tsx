import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiIcon } from '../src';
import { ThemeColor } from '@uireact/foundation';

describe('<UiIcon />', () => {
  it('renders fine', () => {
    uiRender(<UiIcon icon="At" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with theme', () => {
    uiRender(<UiIcon icon="At" theme="error" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(<UiIcon icon="At" size="regular" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiIcon icon="At" theme="error" inverseColoration />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with inverse coloration props on light', () => {
    uiRender(<UiIcon icon="At" theme="error" inverseColoration={{ light: true, dark: false }} />, ThemeColor.light);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with inverse coloration props on dark', () => {
    uiRender(<UiIcon icon="At" theme="error" inverseColoration={{ light: true, dark: false }} />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders nothing if id is unrecognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    uiRender(<UiIcon icon="XXXX" />);

    expect(screen.queryByTestId('Icon')).not.toBeInTheDocument();
  });
});

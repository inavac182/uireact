import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiIcon } from '../src';
import { ThemeColor } from '@uireact/foundation';

import 'jest-styled-components';

describe('<UiIcon />', () => {
  it('renders fine', () => {
    uiRender(<UiIcon icon="Search" testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveStyleRule('fill', 'var(--fonts-token_100)');
  });

  it('renders fine with theme', () => {
    uiRender(<UiIcon icon="Search" category="error" testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveStyleRule('fill', 'var(--error-token_100)');
  });

  it('renders fine with size', () => {
    uiRender(<UiIcon icon="Search" size="regular" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiIcon icon="Search" category="secondary" inverseColoration testId="UiIcon" />);

    expect(screen.getByTestId('Icon')).toBeVisible();
    expect(screen.getByTestId('UiIcon')).toHaveStyleRule('fill', 'var(--inverse-secondary-token_100)');
  });

  it('renders fine with inverse coloration props on light', () => {
    uiRender(
      <UiIcon icon="Search" category="error" inverseColoration={{ light: true, dark: false }} />,
      ThemeColor.light
    );

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders fine with inverse coloration props on dark', () => {
    uiRender(<UiIcon icon="Search" category="error" inverseColoration={{ light: true, dark: false }} />);

    expect(screen.getByTestId('Icon')).toBeVisible();
  });

  it('renders nothing if id is unrecognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    uiRender(<UiIcon icon="XXXX" />);

    expect(screen.queryByTestId('Icon')).not.toBeInTheDocument();
  });
});

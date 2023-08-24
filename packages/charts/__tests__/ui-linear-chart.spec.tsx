import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLinearChart, UiLinearChartData } from '../src/';

describe('<UiLinearChart />', () => {
  it('renders fine', () => {
    const data: UiLinearChartData = {
      current: {
        value: 30,
      },
      limit: {
        value: 30,
      },
    };

    uiRender(<UiLinearChart data={data} testId="linear-chart" />);

    expect(screen.getByTestId('linear-chart')).toBeVisible();
  });

  it('renders limit label', () => {
    const data: UiLinearChartData = {
      current: {
        value: 30,
      },
      limit: {
        label: 'Limit label',
        value: 30,
      },
    };

    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('Limit label')).toBeVisible();
  });

  it('renders current label', () => {
    const data: UiLinearChartData = {
      current: {
        label: 'Current label',
        value: 30,
      },
      limit: {
        value: 30,
      },
    };

    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('Current label')).toBeVisible();
  });

  it('renders current static label', () => {
    const data: UiLinearChartData = {
      current: {
        label: 'Current label',
        labelStatic: true,
        value: 30,
      },
      limit: {
        value: 30,
      },
    };
    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('Current label')).toBeVisible();
  });

  it('renders chart label', () => {
    const data: UiLinearChartData = {
      title: 'chart label',
      current: {
        value: 30,
      },
      limit: {
        value: 30,
      },
    };
    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('chart label')).toBeVisible();
  });
});

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
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveStyle('width: 100%');
  });

  it('renders fine if current is 0', () => {
    const data: UiLinearChartData = {
      current: {
        value: 0,
      },
      limit: {
        value: 30,
      },
    };

    uiRender(<UiLinearChart data={data} testId="linear-chart" />);

    expect(screen.getByTestId('linear-chart')).toBeVisible();
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveStyle('width: 0%');
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
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
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
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
  });

  it('renders current label when value is 0', () => {
    const data: UiLinearChartData = {
      current: {
        label: 'Current label',
        value: 0,
      },
      limit: {
        value: 30,
      },
    };

    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('Current label')).toBeVisible();
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
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
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
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
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-primary-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-tertiary-100');
  });

  it('renders with custom color', () => {
    const data: UiLinearChartData = {
      title: 'chart label',
      current: {
        value: 20,
        color: '#fff'
      },
      limit: {
        color: '#000',
        value: 30,
      },
    };
    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('chart label')).toBeVisible();
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit');
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveStyle('backgroundColor: #000');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveStyle('backgroundColor: #fff');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveStyle('width: 66.66666666666667%');
  });

  it('current bar max out at 100%', () => {
    const data: UiLinearChartData = {
      title: 'chart label',
      current: {
        value: 150,
        color: '#fff'
      },
      limit: {
        color: '#000',
        value: 100,
      },
    };
    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('chart label')).toBeVisible();
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit');
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveStyle('backgroundColor: #000');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveStyle('backgroundColor: #fff');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveStyle('width: 100%');
  });

  it('renders with category classes when colors are categories', () => {
    const data: UiLinearChartData = {
      current: {
        color: 'positive',
        label: 'Current label',
        value: 0,
      },
      limit: {
        color: 'negative',
        value: 30,
      },
    };

    uiRender(<UiLinearChart data={data} />);

    expect(screen.getByText('Current label')).toBeVisible();
    expect(screen.getByTestId('UiLinearChartLimitBlock')).toHaveClass('limit bg-negative-100');
    expect(screen.getByTestId('UiLinearChartCurrentBlock')).toHaveClass('current bg-positive-100');
  });
});

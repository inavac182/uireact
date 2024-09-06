import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiHeading } from '../src';

describe('<UiHeading />', () => {
  it('renders fine with default level', () => {
    uiRender(<UiHeading>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('color-fonts-100 heading-level3');
  });

  it('renders fine with gradient', () => {
    uiRender(<UiHeading gradient>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('gradientHeading heading-level3');
  });

  it('renders fine with animated', () => {
    uiRender(<UiHeading animated>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('color-fonts-100 heading-level3 animatedBackground');
  });

  it('renders fine with default level spacing', () => {
    uiRender(<UiHeading margin={{ all: 'four' }} padding={{all: 'five'}}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('color-fonts-100 heading-level3 margin-four padding-five');
  });

  it('renders fine when is wrapped', () => {
    uiRender(<UiHeading wrap='ellipsis'>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiHeading inverseColoration>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('color-inverse-fonts-100 heading-level3');
  });

  it('renders fine when level is unrecognized', () => {
    //@ts-ignore
    uiRender(<UiHeading level="XXXXX">Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine with centered heading', () => {
    uiRender(<UiHeading centered>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  it('renders fine with level 1', () => {
    uiRender(<UiHeading level={1}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 1 })).toBeVisible();
  });

  it('renders fine with level 1 and centered', () => {
    uiRender(
      <UiHeading level={1} centered>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 1 })).toBeVisible();
  });

  it('renders fine with level 1 and wrapped', () => {
    uiRender(
      <UiHeading level={1} wrap='normal'>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 1 })).toBeVisible();
  });

  it('renders fine with level 2', () => {
    uiRender(<UiHeading level={2}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 2 })).toBeVisible();
  });

  it('renders fine with level 2 and centered', () => {
    uiRender(
      <UiHeading level={2} centered>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 2 })).toBeVisible();
  });

  it('renders fine with level 2 and wrapped', () => {
    uiRender(
      <UiHeading level={2} wrap='break'>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 2 })).toBeVisible();
  });

  it('renders fine with level 3', () => {
    uiRender(<UiHeading level={3}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine with level 3 and centered', () => {
    uiRender(
      <UiHeading level={3} centered>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine with level 3 and wrap', () => {
    uiRender(
      <UiHeading level={3} wrap='normal'>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine with level 4', () => {
    uiRender(<UiHeading level={4}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 4 })).toBeVisible();
  });

  it('renders fine with level 4 and centered', () => {
    uiRender(
      <UiHeading level={4} centered>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 4 })).toBeVisible();
  });

  it('renders fine with level 4 and wrap', () => {
    uiRender(
      <UiHeading level={4} wrap='normal'>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 4 })).toBeVisible();
  });

  it('renders fine with level 5', () => {
    uiRender(<UiHeading level={5}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 5 })).toBeVisible();
  });

  it('renders fine with level 5 and centered', () => {
    uiRender(
      <UiHeading level={5} centered>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 5 })).toBeVisible();
  });

  it('renders fine with level 5 and wrap', () => {
    uiRender(
      <UiHeading level={5} wrap='break'>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 5 })).toBeVisible();
  });

  it('renders fine with level 6', () => {
    uiRender(<UiHeading level={6}>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 6 })).toBeVisible();
  });

  it('renders fine with level 6 and centered', () => {
    uiRender(
      <UiHeading level={6} centered>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 6 })).toBeVisible();
  });

  it('renders fine with level 6 and wrap', () => {
    uiRender(
      <UiHeading level={6} wrap='ellipsis'>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 6 })).toBeVisible();
  });

  it('renders fine with coloration dark', () => {
    uiRender(<UiHeading coloration="dark">Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('color-fonts-100 heading-level3 dark');
  });

  it('renders fine with coloration light', () => {
    uiRender(<UiHeading coloration="light">Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByRole('heading')).toHaveClass('color-fonts-100 heading-level3 light');
  });
});

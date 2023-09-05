import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiHeading } from '../src';

describe('<UiHeading />', () => {
  it('renders fine with default level', () => {
    uiRender(<UiHeading>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine when is wrapped', () => {
    uiRender(<UiHeading wrap>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiHeading inverseColoration>Heading</UiHeading>);

    expect(screen.getByRole('heading', { name: 'Heading', level: 3 })).toBeVisible();
  });

  it('renders fine when level is unrecognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
      <UiHeading level={1} wrap>
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
      <UiHeading level={2} wrap>
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
      <UiHeading level={3} wrap>
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
      <UiHeading level={4} wrap>
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
      <UiHeading level={5} wrap>
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
      <UiHeading level={6} wrap>
        Heading
      </UiHeading>
    );

    expect(screen.getByRole('heading', { name: 'Heading', level: 6 })).toBeVisible();
  });
});

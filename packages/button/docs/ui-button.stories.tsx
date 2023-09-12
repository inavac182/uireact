import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UiButton } from '../src';
import { UiIcon } from '@uireact/icons';

type Story = StoryObj<typeof UiButton>;

export const WithText: Story = {
  args: {
    theme: 'primary',

    cristal: false,
    disabled: false,
    fullWidth: false,
    iconized: false,
    rounded: false,
    type: 'button',
    testId: 'some-test-id',
    className: 'some-class-name',
    onClick: () => {
      console.log('clicked');
    },
    id: 'some-id',
    children: 'Some text 🎃',
    fullHeight: false,
  },
};

export const OnlyIcon: Story = {
  args: {
    theme: 'primary',
    cristal: false,
    disabled: false,
    fullWidth: false,
    iconized: true,
    rounded: false,
    type: 'button',
    testId: 'some-test-id',
    className: 'some-class-name',
    onClick: () => {
      console.log('clicked');
    },
    id: 'some-id',
    children: <UiIcon icon="CirclePhone" size="large" />,
    fullHeight: false,
  },
};

const meta: Meta<typeof UiButton> = {
  title: 'Forms/UiButton',
  tags: ['autodocs'],
  component: UiButton,
};

export default meta;

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UiButton } from '.';

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  render: () => <UiButton>Test</UiButton>,
};

export const Secondary: Story = {
  render: () => <UiButton theme="secondary">Test</UiButton>,
};

export const Tertiary: Story = {
  render: () => <UiButton theme="tertiary">Test</UiButton>,
};

const meta: Meta<typeof UiButton> = {
  component: UiButton,
};

export default meta;

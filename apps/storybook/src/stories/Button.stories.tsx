import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { UiButton } from '@uireact/button';
import { UiSpacing } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiIcon } from '@uireact/icons';

const ButtonContent = () => (
  <UiSpacing padding={{ inline: 'five', block: 'four' }}>
    <UiText>
      Button
    </UiText>
  </UiSpacing>
)

const ButtonIconContent = () => (
  <UiIcon icon="EarthAmericas" />
)

export const WithText: Story = {
  args: {
    category: 'primary',
    children: <ButtonContent />
  },
};

export const WithIcon: Story = {
  args: {
    category: 'primary',
    styling: 'icon',
    children: <ButtonIconContent />
  },
};


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '@UiButton',
  component: UiButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    category: { options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    fullHeight: { control: 'boolean' },
    styling: { control: 'inline-radio' },
    type: { control: 'inline-radio' },
    children: { control: { disable: true }  },
    ref: { control: { disable: true }  },
    id: { control: 'text' },
    className: { control: 'text' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;


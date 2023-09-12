import React from 'react';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { PreviewWrapper } from './preview-wrapper';

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <PreviewWrapper storyBookTheme={context.globals.theme}>
        <Story />
      </PreviewWrapper>
    ),
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'chromatic',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export default preview;

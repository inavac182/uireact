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
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;

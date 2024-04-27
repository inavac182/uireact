import React from 'react';
import type { Preview, StoryContext } from '@storybook/react';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';


type ViewWrapperProps = {
  children: React.ReactNode;
  context: StoryContext;
}

const ViewWrapper = ({ children, context }: ViewWrapperProps) => {
  const theme = ThemeColor[context.globals.theme];

  return (
    <UiView selectedTheme={theme} theme={DefaultTheme} noBackground>
      {children}
    </UiView>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [ThemeColor.light, ThemeColor.dark],
        dynamicTitle: true
      },
    }
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story, context) => (
    <ViewWrapper context={context}>
      <Story />
    </ViewWrapper>
  )]
};

export default preview;

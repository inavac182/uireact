import React, { useEffect, useState } from 'react';

import { UiView } from '@uireact/view';
import { ThemeColor } from '@uireact/foundation';
import { DocsTheme } from '../src/gatsby-theme-docz/custom-theme/custom-docs-theme';

type PreviewWrapper = {
  storyBookTheme?: any;
};

export const PreviewWrapper: React.FC<PreviewWrapper> = ({ children, storyBookTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(storyBookTheme === 'dark' ? ThemeColor.dark : ThemeColor.light);

  useEffect(() => {
    setSelectedTheme(storyBookTheme === 'dark' ? ThemeColor.dark : ThemeColor.light);
  }, [storyBookTheme]);

  return (
    <UiView theme={DocsTheme} selectedTheme={selectedTheme} noBackground>
      {children}
    </UiView>
  );
};

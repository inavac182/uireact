import React from 'react';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiHeading } from '@uireact/text';

export const ProgressIndicatorExample: React.FC = () => {
  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
      <UiHeading>Progress Indicator example</UiHeading>
    </UiView>
  );
};

import { AriaAttributes } from 'react';

import { SpacingType, UiReactElementProps } from '@uireact/foundation';

export type UiTabsProps = {
  /** Radius sizing */
  radius?: SpacingType;
} & UiReactElementProps & AriaAttributes;

import React from 'react';

import { UiHeading, UiLink } from '@uireact/text';

export const Logo = (): React.ReactElement => {
  return (
    <UiLink href="/">
      <UiHeading level={1}>@uireact</UiHeading>
    </UiLink>
  );
};

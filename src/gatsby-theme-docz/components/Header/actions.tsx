import React from 'react';

import { useColorMode } from 'theme-ui';

import { UiButton } from '@uireact/button';
import { UiIcon } from '@uireact/icons';
import { UiLink } from '@uireact/text';
import { UiFlexGrid } from '@uireact/flex';

export const Actions = (): React.ReactElement => {
  const [colorMode, setColorMode] = useColorMode();

  const themeSwitcherCB = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  return (
    <>
      <UiFlexGrid alignItems="center" gap="four">
        <UiLink href="https://github.com/inavac182/uireact" target="_blank">
          <img src="/public/gh-logo.png" width="20px" height="20px" />
        </UiLink>
        <UiButton onClick={themeSwitcherCB} rounded iconized theme="secondary">
          <UiIcon icon="ColorDrop" size="xlarge" />
        </UiButton>
      </UiFlexGrid>
    </>
  );
};

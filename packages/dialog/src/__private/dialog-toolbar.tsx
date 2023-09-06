import React from 'react';

import styled from 'styled-components';

import { UiReactPrivateElementProps, getThemeStyling, ThemeContext } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';

import { UiHeading } from '@uireact/text';

import { dialogToolbarMapper } from '../theme/dialog-toolbar-mapper';

type DialogToolbarProps = {
  closeLabel?: string;
  title: string;
  hideCloseIcon?: boolean;
  closeCB?: () => void;
};

const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 5px;
`;

const Div = styled.div<UiReactPrivateElementProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, dialogToolbarMapper)}

  border-style: solid;
  border-width: 0 0 2px 0;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const DialogToolbar: React.FC<DialogToolbarProps> = ({
  closeLabel,
  closeCB,
  hideCloseIcon,
  title,
}: DialogToolbarProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Div $customTheme={theme.theme} $selectedTheme={theme.selectedTheme}>
      {!hideCloseIcon && (
        <Button onClick={closeCB} aria-label={closeLabel}>
          <UiIcon icon="X" />
        </Button>
      )}
      <UiHeading centered>{title}</UiHeading>
    </Div>
  );
};

DialogToolbar.displayName = 'DialogToolbar';

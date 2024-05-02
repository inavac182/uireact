import React from 'react';

import styled from 'styled-components';

import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiHeading } from '@uireact/text';

type DialogToolbarProps = {
  closeLabel?: string;
  title?: string;
  hideCloseIcon?: boolean;
  closeCB?: () => void;
};

const Div = styled.div`
  display: flex;
  gap: 10px;
  border-color: var(--primary-token_100);
  border-style: solid;
  border-width: 0 0 2px 0;
  padding-bottom: 5px;
`;

export const DialogToolbar: React.FC<DialogToolbarProps> = ({
  closeLabel,
  closeCB,
  hideCloseIcon,
  title,
}: DialogToolbarProps) => (
  <Div data-testid="UiDialogToolbar">
    {!hideCloseIcon && (
      <UiButton onClick={closeCB} aria-label={closeLabel} styling='icon'>
        <UiIcon icon="X" size='small' />
      </UiButton>
    )}
    {title && (
      <UiHeading centered>{title}</UiHeading>
    )}
  </Div>
);

DialogToolbar.displayName = 'DialogToolbar';

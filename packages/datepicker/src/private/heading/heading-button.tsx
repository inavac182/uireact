import React from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';

type HeadingButtonProps = {
  label: string;
  callback: () => void;
};

export const HeadingButton = ({ callback, label }: HeadingButtonProps) => {
  return (
    <UiButton category="primary" styling="clear" onClick={callback}>
      <UiText>{label}</UiText>
    </UiButton>
  );
};

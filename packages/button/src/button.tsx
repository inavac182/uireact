import * as React from 'react';
import { MouseEvent } from 'react';

interface UiButtonProps {
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const UiButton: React.FC = (props: UiButtonProps) => {
  return <button onClick={props.onClick}>{props?.children}</button>;
};

UiButton.displayName = 'UiTulkitButton';

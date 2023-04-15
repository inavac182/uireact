import * as React from 'react';

import styled from 'styled-components';

import { ThemeContext, ColorCategories, getThemeStyling } from '@uireact/foundation';

import { privateButtonProps, UiButtonProps } from './types';
import { getDynamicMapper } from './theme';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => {
    const buttonType = props.buttonType ?? 'primary';
    const mapper = getDynamicMapper(ColorCategories[buttonType]);

    return `
      ${getThemeStyling(props.customTheme, props.selectedTheme, mapper)}
      ${props.fullWidth ? 'width: 100%;' : ''}
    `;
  }}

  font-weight: bold;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const UiButton: React.FC<UiButtonProps> = ({
  onClick,
  testId,
  className,
  disabled,
  children,
  buttonType,
  fullWidth,
  type,
  ref,
}: UiButtonProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <StyledButton
      customTheme={themeContext.theme}
      selectedTheme={themeContext.selectedTheme}
      buttonType={buttonType}
      onClick={onClick}
      data-testid={testId}
      className={className}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
};

UiButton.displayName = 'UiPrimaryButton';

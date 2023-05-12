import React from 'react';

import styled from 'styled-components';

import { ColorCategories, ColorTokens, getThemeColor } from '@uireact/foundation';

import { privateDivItemProps, privateProgressIndicatorItemProps } from '../types';

const Div = styled.div<privateDivItemProps>`
  ${(props) => `
    ${props.completed && props.allowGoBack ? 'cursor: pointer;' : ''}
    ${props.missing && props.disabledCursorForMissingStep ? 'cursor: not-allowed;' : ''}
    ${
      props.current
        ? `
          border-color: ${getThemeColor(
            props.theme,
            props.selectedTheme,
            ColorCategories.primary,
            ColorTokens.token_100
          )};
          font-weight: bold;
        `
        : ''
    }

    ${props.completed || props.missing ? 'border-color: transparent;' : ''}
    ${props.missing ? 'opacity: 0.6;' : ''}
    border-width: 0 0 2px 0;
    border-style: solid;
  `}
`;

export const PrivateItem: React.FC<privateProgressIndicatorItemProps> = ({
  allowGoBack,
  customTheme,
  children,
  completed,
  current,
  disabledCursorForMissingStep,
  handleCompletedStepClick,
  missing,
  selectedTheme,
  step,
}: privateProgressIndicatorItemProps) => {
  const handleOnClick = React.useCallback(() => {
    completed && handleCompletedStepClick(step);
  }, [completed, handleCompletedStepClick, step]);

  return (
    <Div
      allowGoBack={allowGoBack}
      disabledCursorForMissingStep={disabledCursorForMissingStep}
      completed={completed}
      current={current}
      customTheme={customTheme}
      missing={missing}
      onClick={handleOnClick}
      selectedTheme={selectedTheme}
    >
      {children}
    </Div>
  );
};

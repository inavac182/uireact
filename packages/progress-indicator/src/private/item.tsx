import React, { useEffect } from 'react';

import { styled } from 'styled-components';

import { privateDivItemProps, privateProgressIndicatorItemProps } from '../types';

const Div = styled.div<privateDivItemProps>`
  ${(props) => `
    ${props.$completed && props.$allowGoBack ? 'cursor: pointer;' : ''}
    ${props.$missing && props.$disabledCursorForMissingStep ? 'cursor: not-allowed;' : ''}
    ${props.$current ? 'border-color: var(--primary-token_100);' : ''}

    ${props.$completed || props.$missing ? 'border-color: transparent;' : ''}
    ${props.$missing ? 'opacity: 0.6;' : ''}

    border-width: 0 0 2px 0;
    border-style: solid;
    white-space: nowrap;
  `}
`;

export const PrivateItem: React.FC<privateProgressIndicatorItemProps> = ({
  $allowGoBack,
  children,
  $completed,
  $current,
  $disabledCursorForMissingStep,
  $handleCompletedStepClick,
  $missing,
  $step,
}: privateProgressIndicatorItemProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const handleOnClick = React.useCallback(() => {
    $completed && $handleCompletedStepClick($step);
  }, [$completed, $handleCompletedStepClick, $step]);

  useEffect(() => {
    //istanbul ignore next
    if ($current && ref.current?.scrollIntoView) {
      //istanbul ignore next
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }, [$current]);

  return (
    <Div
      $allowGoBack={$allowGoBack}
      $disabledCursorForMissingStep={$disabledCursorForMissingStep}
      $completed={$completed}
      $current={$current}
      $missing={$missing}
      onClick={handleOnClick}
      ref={ref}
    >
      {children}
    </Div>
  );
};

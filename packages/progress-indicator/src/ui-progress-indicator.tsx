import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiIcon } from '@uireact/icons';

import { PrivateItem } from './private';
import { UiProgressIndicatorProps, privateProgressIndicatorProps } from './types';

const Div = styled.div<privateProgressIndicatorProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  overflow-y: auto;
`;

const getNumberOfSteps = (children: React.ReactNode) => {
  let count = 0;

  React.Children.map(children, () => {
    count++;
  });

  return count;
};

export const UiProgressIndicator: React.FC<UiProgressIndicatorProps> = ({
  allowGoBack,
  children,
  className,
  current = 1,
  handleCompletedStepClick,
}: UiProgressIndicatorProps) => {
  const theme = React.useContext(ThemeContext);
  const steps = getNumberOfSteps(children);

  const handleCompletedStepClickCB = React.useCallback(
    (step: number) => {
      handleCompletedStepClick?.(step);
    },
    [handleCompletedStepClick]
  );

  const ProgressIndicatorContent = React.useMemo(() => {
    const elements: React.ReactNode[] = [];

    React.Children.map(children, (child, index) => {
      elements.push(
        <PrivateItem
          $allowGoBack={allowGoBack}
          $customTheme={theme.theme}
          $completed={index + 1 < current}
          $current={index + 1 === current}
          $disabledCursorForMissingStep={allowGoBack}
          $handleCompletedStepClick={handleCompletedStepClickCB}
          key={`progress-indicator-item-${index}`}
          $missing={index + 1 > current}
          $selectedTheme={theme.selectedTheme}
          $step={index + 1}
        >
          {child}
        </PrivateItem>
      );

      if (index < steps - 1) {
        elements.push(
          <UiText inline size={TextSize.small} key={`progress-indicator-item-arrow-${index}`}>
            <UiIcon icon="CaretRight" />
          </UiText>
        );
      }
    });

    return elements;
  }, [children, theme]);

  return (
    <Div $customTheme={theme.theme} className={className} $selectedTheme={theme.selectedTheme}>
      {ProgressIndicatorContent}
    </Div>
  );
};

UiProgressIndicator.displayName = 'UiProgressIndicator';

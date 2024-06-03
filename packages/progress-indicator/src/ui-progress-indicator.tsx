import React from 'react';

import { TextSize } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiIcon } from '@uireact/icons';

import { PrivateItem } from './private';
import { UiProgressIndicatorProps } from './types';
import styles from './ui-progress-indicator.scss';

const getNumberOfSteps = (children: React.ReactNode) => {
  let count = 0;

  React.Children.map(children, () => {
    count++;
  });

  return count;
};

export const UiProgressIndicator: React.FC<UiProgressIndicatorProps> = ({
  children,
  className = '',
  current = 1,
  completedStepClick
}: UiProgressIndicatorProps) => {
  const steps = getNumberOfSteps(children);

  const ProgressIndicatorContent = React.useMemo(() => {
    const elements: React.ReactNode[] = [];

    React.Children.map(children, (child, index) => {
      elements.push(
        <PrivateItem
          completed={index + 1 < current}
          current={index + 1 === current}
          completedStepClick={completedStepClick}
          key={`progress-indicator-item-${index}`}
          missing={index + 1 > current}
          step={index + 1}
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
  }, [children, current, completedStepClick, steps]);

  return <div className={`${className} ${styles.progressIndicator}`}>{ProgressIndicatorContent}</div>;
};

UiProgressIndicator.displayName = 'UiProgressIndicator';

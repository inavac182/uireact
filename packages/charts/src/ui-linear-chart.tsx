import React, { useEffect, useMemo, useState } from 'react';

import { UiReactElementProps } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiFlexGrid } from '@uireact/flex';

import { UiLinearChartData } from './types';
import { getCategoryClass } from './private';

import styles from './ui-linear-chart.scss';

export type UiLinearChartProps = {
  data: UiLinearChartData;
} & UiReactElementProps;

export const UiLinearChart: React.FC<UiLinearChartProps> = ({ className, testId, data }: UiLinearChartProps) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const currentColorClass = getCategoryClass(data.current.color) || '';
  const limitColorClass = getCategoryClass(data.limit.color) || '';

  let currentClasses = `${styles.current} ${currentColorClass ? currentColorClass : ''}`;
  let limitClasses = `${styles.limit} ${limitColorClass ? limitColorClass : ''}`;

  if (!data.current.color) {
    currentClasses = `${currentClasses} bg-tertiary-100`;
  }

  if (!data.limit.color) {
    limitClasses = `${limitClasses} bg-primary-100`;
  }

  const currentStyles = useMemo(() => {
    if (data.current.color && !currentColorClass) {
      return { width: `${currentWidth}%`,  backgroundColor: data.current.color };
    }

    return { width: `${currentWidth}%` };
  }, [currentColorClass, currentWidth, data]);

  const limitStyles = useMemo(() => {
    if (data.limit.color && !limitColorClass) {
      return { backgroundColor: data.limit.color };
    }

    return undefined;
  }, [data.limit.color, limitColorClass]);

  useEffect(() => {
    if (data.current.value > data.limit.value) {
      setCurrentWidth(100);
    } else {
      setCurrentWidth((data.current.value * 100) / data.limit.value);
    }
  }, [data]);

  return (
    <div className={className} data-testid={testId}>
      <UiFlexGrid justifyContent="space-between">
        <UiText>{data.title}</UiText>
        {data.limit.label && <UiText>{data.limit.label}</UiText>}
      </UiFlexGrid>
      <div className={styles.wrapper}>
        <div className={limitClasses} style={limitStyles} data-testid="UiLinearChartLimitBlock" />
        <div className={currentClasses} style={currentStyles} data-testid="UiLinearChartCurrentBlock">
          {data.current.label && !data.current.labelStatic && (
            <div className={styles.currentLabelSpacing}>
              <UiText align="right">{data.current.label}</UiText>
            </div>
          )}
        </div>
      </div>
      {data.current.label && data.current.labelStatic && <UiText>{data.current.label}</UiText>}
    </div>
  );
};

UiLinearChart.displayName = 'UiLinearChart';

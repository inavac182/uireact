'use client';
import React from 'react';

import { UiSpacing } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiCard } from '@uireact/card';
import { UiButton } from '@uireact/button';

import { UiProgressIndicator, UiProgressIndicatorItem } from '@uireact/progress-indicator';

export const ProgressIndicatorExample: React.FC = () => {
  const [step, setStep] = React.useState(1);

  const changeStep = React.useCallback(
    (newStep: number) => {
      setStep(newStep);
    },
    [setStep]
  );

  return (
    <>
      <UiSpacing padding={{ all: 'five' }}>
        <UiProgressIndicator current={step} completedStepClick={changeStep}>
          <UiProgressIndicatorItem>
            <UiText>This is the step 1</UiText>
          </UiProgressIndicatorItem>
          <UiProgressIndicatorItem>
            <UiText>This is the step 2</UiText>
          </UiProgressIndicatorItem>
          <UiProgressIndicatorItem>
            <UiText>This is the step 3</UiText>
          </UiProgressIndicatorItem>
        </UiProgressIndicator>

        {step === 1 && (
          <UiCard>
            <UiText>This is step 1</UiText>
            <UiButton onClick={() => changeStep(2)} category='tertiary'>Next Step</UiButton>
          </UiCard>
        )}

        {step === 2 && (
          <UiCard>
            <UiText>This is step 2</UiText>
            <UiButton onClick={() => changeStep(1)} category='tertiary'>Go Back</UiButton>{' '}
            <UiButton onClick={() => changeStep(3)} category='tertiary'>Next Step</UiButton>
          </UiCard>
        )}

        {step === 3 && (
          <UiCard>
            <UiText>This is step 3</UiText>
            <UiButton onClick={() => changeStep(2)} category='tertiary'>Go Back</UiButton>
          </UiCard>
        )}
      </UiSpacing>
    </>
  );
};

import React from 'react';

import { DefaultTheme, Sizing, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiHeading, UiText } from '@uireact/text';
import { UiCard } from '@uireact/card';
import { UiButton } from '@uireact/button';

import { UiProgressIndicator, UiProgressIndicatorItem } from '../../src';

export const ProgressIndicatorExample: React.FC = () => {
  const [step, setStep] = React.useState(1);

  const changeStep = React.useCallback(
    (newStep) => {
      setStep(newStep);
    },
    [setStep]
  );

  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
      <UiHeading>Progress Indicator example</UiHeading>
      <UiSpacing padding={{ all: Sizing.five }}>
        <UiProgressIndicator current={step} allowGoBack handleCompletedStepClick={changeStep}>
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
          <UiCard bordered>
            <UiText>This is step 1</UiText>
            <UiButton onClick={() => changeStep(2)}>Next Step</UiButton>
          </UiCard>
        )}

        {step === 2 && (
          <UiCard bordered>
            <UiText>This is step 2</UiText>
            <UiButton onClick={() => changeStep(1)}>Go Back</UiButton>{' '}
            <UiButton onClick={() => changeStep(3)}>Next Step</UiButton>
          </UiCard>
        )}

        {step === 3 && (
          <UiCard bordered>
            <UiText>This is step 3</UiText>
            <UiButton onClick={() => changeStep(2)}>Go Back</UiButton>
          </UiCard>
        )}
      </UiSpacing>
    </UiView>
  );
};

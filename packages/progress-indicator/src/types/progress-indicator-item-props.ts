import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiProgressIndicatorItemProps = UiReactElementProps;

export type privateProgressIndicatorItemProps = UiProgressIndicatorItemProps & {
  allowGoBack?: boolean;
  completed: boolean;
  current: boolean;
  disabledCursorForMissingStep?: boolean;
  handleCompletedStepClick: (step: number) => void;
  missing: boolean;
  step: number;
  ref?: React.Ref<HTMLDivElement>;
} & UiReactPrivateElementProps;

export type privateDivItemProps = Omit<Omit<privateProgressIndicatorItemProps, 'step'>, 'handleCompletedStepClick'>;

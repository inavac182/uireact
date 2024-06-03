import { UiReactElementProps } from '@uireact/foundation';

export type UiProgressIndicatorItemProps = UiReactElementProps;

export type privateProgressIndicatorItemProps = UiProgressIndicatorItemProps & {
  completed: boolean;
  current: boolean;
  disabledCursorForMissingStep?: boolean;
  completedStepClick?: (step: number) => void;
  missing: boolean;
  step: number;
  ref?: React.Ref<HTMLDivElement>;
};

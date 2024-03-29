import { UiReactElementProps } from '@uireact/foundation';

export type UiProgressIndicatorItemProps = UiReactElementProps;

export type privateProgressIndicatorItemProps = UiProgressIndicatorItemProps & {
  $allowGoBack?: boolean;
  $completed: boolean;
  $current: boolean;
  $disabledCursorForMissingStep?: boolean;
  $handleCompletedStepClick: (step: number) => void;
  $missing: boolean;
  $step: number;
  ref?: React.Ref<HTMLDivElement>;
};

export type privateDivItemProps = {
  $allowGoBack?: boolean;
  $completed: boolean;
  $current: boolean;
  $disabledCursorForMissingStep?: boolean;
  $missing: boolean;
  ref?: React.Ref<HTMLDivElement>;
};

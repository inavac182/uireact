import { UiReactElementProps } from '@uireact/foundation';

export type UiProgressIndicatorProps = {
  /** If allowGoBack is enabled when click in completed step CB is executed */
  completedStepClick?: (step: number) => void;
  /** Current step */
  current?: number;
} & UiReactElementProps;

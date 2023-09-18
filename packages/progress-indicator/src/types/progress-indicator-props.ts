import { UiReactElementProps } from '@uireact/foundation';

export type UiProgressIndicatorProps = {
  /** Click in completed steps triggers CB, when used a disabled cursor will show in missing steps */
  allowGoBack?: boolean;
  /** If allowGoBack is enabled when click in completed step CB is executed */
  handleCompletedStepClick?: (step: number) => void;
  /** Current step */
  current?: number;
} & UiReactElementProps;

export type privateProgressIndicatorProps = UiProgressIndicatorProps;

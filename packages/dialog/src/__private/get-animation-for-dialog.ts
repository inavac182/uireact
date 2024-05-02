import { UiReactFadeDown, UiReactFadeLeft, UiReactFadeRight, UiReactFadeUp } from "@uireact/framer-animations";
import { MotionProps } from "framer-motion";
import { UiDialogType } from "types";

export const getAnimationForDialog = (type: UiDialogType): MotionProps | undefined => {
    switch (type) {
        case UiDialogType.BOTTOM: 
        case UiDialogType.CENTERED:
            return UiReactFadeUp;
        case UiDialogType.LEFT:
            return UiReactFadeRight;
        case UiDialogType.RIGHT:
            return UiReactFadeLeft;
        case UiDialogType.FULLSCREEN:
            return UiReactFadeDown;
        default:
            return undefined;
    }
};

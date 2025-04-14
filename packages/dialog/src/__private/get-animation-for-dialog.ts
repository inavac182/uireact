import { UiReactFadeLeft, UiReactFadeRight } from "@uireact/framer-animations";
import { MotionProps } from "motion/react";
import { UiDialogType } from "../types";

export const getAnimationForDialog = (type: UiDialogType): MotionProps | undefined => {
    switch (type) {
        case UiDialogType.CENTERED:
            return { initial: { opacity: 0, y: '-40%', x: '-50%', scale: 0.8 }, animate: { opacity: 1, y: '-50%', x: '-50%', scale: 1} };
        case UiDialogType.BOTTOM: 
            return { initial: { opacity: 0, x: '-50%', y: 10 }, animate: { opacity: 1, x: '-50%', y: 0} };
        case UiDialogType.LEFT:
            return UiReactFadeRight;
        case UiDialogType.RIGHT:
            return UiReactFadeLeft;
        case UiDialogType.FULLSCREEN:
        default:
            return { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1} };
    }
};

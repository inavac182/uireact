import { MotionProps } from "framer-motion";

export const UiReactFadeUp = {
    initial: {
        y: 10,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
};

export const UiReactFadeDown: MotionProps = {
    initial: {
        y: -10,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
};

export const UiReactFadeLeft: MotionProps = {
    initial: {
        x: 10,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    }
};

export const UiReactFadeRight: MotionProps = {
    initial: {
        x: -10,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    }
};

import { MotionProps } from 'framer-motion';

export const UiReactHoverScaleUp: MotionProps = {
    whileHover: {
        scale: 1.1
    }
};

export const UiReactHoverElevate: MotionProps = {
    whileHover: {
        y: -10
    }
};

export const UiReactHoverDance: MotionProps = {
    whileHover: {
        rotate: [0, 45, -45, 0],
        transition: {
            duration: .5,
            repeat: Infinity,
            repeatDelay: 1
        }
    }
};

export const UiReactHoverShake: MotionProps = {
    whileHover: {
        rotate: [0, 45, -45, 0],
        transition: {
            duration: .5,
            repeat: Infinity
        }
    }
};

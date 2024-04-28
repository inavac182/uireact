import { MotionProps } from 'framer-motion';

export const UiReactViewFloat: MotionProps = {
    whileInView: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

export const UiReactViewPulse: MotionProps = {
    whileInView: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

export const UiReactViewAppearUp: MotionProps = {
    whileInView: {
        y: [10, 0],
        opacity: [0, 1],
        transition: {
            duration: 2
        }
    }
}

export const UiReactViewAppearRight: MotionProps = {
    whileInView: {
        x: [-10, 0],
        opacity: [0, 1],
        transition: {
            duration: 2
        }
    }
}

export const UiReactViewAppearLeft: MotionProps = {
    whileInView: {
        x: [10, 0],
        opacity: [0, 1],
        transition: {
            duration: 2
        }
    }
}

import { SVGMotionProps } from 'framer-motion';

export const UiReactSvgPulse: SVGMotionProps<SVGSVGElement> = {
    animate: {
        scale: [1,1.3,1]
    },
    transition: {
        repeat: Infinity,
        duration: 2
    }
};

export const UiReactSvgDraw: SVGMotionProps<SVGPathElement> = {
    initial: {
        pathLength: 0
    },
    animate: {
        pathLength: 1
    },
    transition: {
        duration: 2
    },
    strokeWidth: 3,
    strokeLinejoin: 'round',
    fill: 'none',
    strokeDasharray: "0 1",
    strokeLinecap: 'round'
};
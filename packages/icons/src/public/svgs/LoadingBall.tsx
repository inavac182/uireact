import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgLoadingBall = (props: SvgProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props.motionSvg}
  >
    <circle cx={50} cy={23} r={13}>
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="1s"
        keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="23;77;23"
      />
    </circle>
  </motion.svg>
);
export default SvgLoadingBall;

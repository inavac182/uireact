import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleClearRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M7 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.17-8.17a3 3 0 0 0 0-4.24L6.29 1.71A1 1 0 0 1 7.71.29l8.17 8.17a5 5 0 0 1 0 7.08l-8.17 8.17A1 1 0 0 1 7 24Z" />
  </motion.svg>
);
export default SvgAngleClearRight;

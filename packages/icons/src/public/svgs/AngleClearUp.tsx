import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleClearUp = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="m23.71 16.29-8.17-8.17a5 5 0 0 0-7.08 0L.29 16.29a1 1 0 0 0 1.42 1.42l8.17-8.17a3 3 0 0 1 4.24 0l8.17 8.17a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" />
  </motion.svg>
);
export default SvgAngleClearUp;

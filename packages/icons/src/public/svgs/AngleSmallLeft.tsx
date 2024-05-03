import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleSmallLeft = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M10.6 12.71a1 1 0 0 1 0-1.42l4.59-4.58a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0L9.19 9.88a3 3 0 0 0 0 4.24l4.59 4.59a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42Z" />
  </motion.svg>
);
export default SvgAngleSmallLeft;

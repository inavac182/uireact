import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleDoubleLeft = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M10.48 19a1 1 0 0 1-.7-.29l-4.59-4.59a3 3 0 0 1 0-4.24l4.59-4.59a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L6.6 11.29a1 1 0 0 0 0 1.42l4.59 4.58a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
    <motion.path {...props.pathSvg} d="M17.48 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L12.9 12l5.29 5.29a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
  </motion.svg>
);
export default SvgAngleDoubleLeft;

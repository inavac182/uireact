import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgShareSquare = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M16 10c1.654 0 3-1.346 3-3s-1.346-3-3-3a3.004 3.004 0 0 0-2.958 3.5L8.985 9.754A2.987 2.987 0 0 0 7 9.001c-1.654 0-3 1.346-3 3s1.346 3 3 3c.761 0 1.456-.285 1.985-.753l4.057 2.254a3.004 3.004 0 0 0 2.958 3.5c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.761 0-1.456.285-1.985.753l-4.057-2.254a3.048 3.048 0 0 0 0-1l4.057-2.254A2.987 2.987 0 0 0 16 10Zm0-4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1Zm-9 7a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm9 3a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1Zm3-16H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14Z" />
  </motion.svg>
);
export default SvgShareSquare;

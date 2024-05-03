import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgMenuSquare = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14ZM8 12a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 12Zm11 0a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 19 12Zm-5.5 0a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13.5 12Z" />
  </motion.svg>
);
export default SvgMenuSquare;

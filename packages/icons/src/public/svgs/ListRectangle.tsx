import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgListRectangle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M19 1H5C2.243 1 0 3.243 0 6v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5Zm3 17c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v12ZM19 7a1 1 0 0 1-1 1h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 1 1ZM8 7a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 7Zm11 5a1 1 0 0 1-1 1h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 1 1ZM8 12a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 12Zm11 5a1 1 0 0 1-1 1h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 1 1ZM8 17a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 17Z" />
  </motion.svg>
);
export default SvgListRectangle;

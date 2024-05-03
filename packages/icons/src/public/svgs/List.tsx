import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgList = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M16 18h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2Zm5 1V7c0-2.757-2.243-5-5-5h-.171A3.006 3.006 0 0 0 13 0h-2a3.006 3.006 0 0 0-2.829 2H8C5.243 2 3 4.243 3 7v12c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5ZM9 4c.552 0 1-.447 1-1s.449-1 1-1h2c.551 0 1 .448 1 1s.448 1 1 1h1c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h1ZM8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9-3a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1Zm-9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9-3a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1ZM8 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
  </motion.svg>
);
export default SvgList;

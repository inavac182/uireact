import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowSquareDown = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14Zm-5.087-5.65-4.361 4.418a.773.773 0 0 1-1.104 0L7.087 13.35c-.492-.498-.143-1.35.552-1.35H11V7a1 1 0 0 1 2 0v5h3.361c.695 0 1.044.852.552 1.35Z" />
  </motion.svg>
);
export default SvgArrowSquareDown;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowClearDown = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="m16.913 19.35-4.361 4.418a.773.773 0 0 1-1.104 0L7.087 19.35c-.492-.498-.143-1.35.552-1.35H11V1a1 1 0 1 1 2 0v17h3.361c.695 0 1.044.852.552 1.35Z" />
  </motion.svg>
);
export default SvgArrowClearDown;

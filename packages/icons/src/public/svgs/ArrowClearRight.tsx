import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowClearRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M23.768 11.448 19.35 7.087c-.498-.492-1.35-.143-1.35.552V11H1a1 1 0 1 0 0 2h17v3.361c0 .695.852 1.044 1.35.552l4.418-4.361a.773.773 0 0 0 0-1.104Z" />
  </motion.svg>
);
export default SvgArrowClearRight;

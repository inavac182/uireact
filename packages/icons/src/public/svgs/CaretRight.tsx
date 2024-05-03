import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCaretRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M9 17.88V6.71A1 1 0 0 1 10.71 6l5.58 5.59a1 1 0 0 1 0 1.41l-5.58 5.59A1 1 0 0 1 9 17.88Z" />
  </motion.svg>
);
export default SvgCaretRight;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowClearUp = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M16.361 6H13v17a1 1 0 1 1-2 0V6H7.639c-.695 0-1.044-.852-.552-1.35L11.448.232a.773.773 0 0 1 1.104 0l4.361 4.418c.492.498.143 1.35-.552 1.35Z" />
  </motion.svg>
);
export default SvgArrowClearUp;

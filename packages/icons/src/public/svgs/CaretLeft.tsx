import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCaretLeft = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M13.29 18.59 7.71 13a1 1 0 0 1 0-1.41L13.29 6a1 1 0 0 1 1.71.71v11.17a1 1 0 0 1-1.71.71Z" />
  </motion.svg>
);
export default SvgCaretLeft;

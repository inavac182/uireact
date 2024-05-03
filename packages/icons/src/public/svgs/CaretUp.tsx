import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCaretUp = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M6.41 16h11.18a1 1 0 0 0 .7-1.71l-5.58-5.58a1 1 0 0 0-1.42 0l-5.58 5.58a1 1 0 0 0 .7 1.71Z" />
  </motion.svg>
);
export default SvgCaretUp;

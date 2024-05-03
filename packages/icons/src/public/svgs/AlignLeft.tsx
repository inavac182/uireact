import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAlignLeft = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM1 11h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM15 19H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
  </motion.svg>
);
export default SvgAlignLeft;

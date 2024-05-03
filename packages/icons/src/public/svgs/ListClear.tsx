import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgListClear = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
    <circle cx={2} cy={5} r={2} />
    <circle cx={2} cy={12} r={2} />
    <circle cx={2} cy={19} r={2} />
  </motion.svg>
);
export default SvgListClear;

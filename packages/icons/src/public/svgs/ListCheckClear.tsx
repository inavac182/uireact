import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgListCheckClear = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M4 6a2.982 2.982 0 0 1-2.122-.879L.334 3.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04L8.311.276a1 1 0 0 1 1.378 1.448L6.1 5.138A2.964 2.964 0 0 1 4 6zm20-2a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zM6.1 13.138l3.589-3.414a1 1 0 1 0-1.378-1.448l-3.6 3.431a1.023 1.023 0 0 1-1.414 0l-1.59-1.585a1 1 0 0 0-1.414 1.414l1.585 1.585a3 3 0 0 0 4.226.017zM24 12a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zM6.1 21.138l3.585-3.414a1 1 0 1 0-1.378-1.448l-3.6 3.431a1 1 0 0 1-1.456-.04l-1.585-1.414a1 1 0 0 0-1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017zM24 20a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1z" />
  </motion.svg>
);
export default SvgListCheckClear;

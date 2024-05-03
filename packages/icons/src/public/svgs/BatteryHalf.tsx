import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBatteryHalf = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M23 8h-1.101A5.01 5.01 0 0 0 17 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h12a5.009 5.009 0 0 0 4.899-4H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-6 10H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h12c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3ZM11 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z" />
  </motion.svg>
);
export default SvgBatteryHalf;

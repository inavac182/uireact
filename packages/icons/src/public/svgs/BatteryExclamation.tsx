import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBatteryExclamation = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M12.5 18.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001ZM11 15a1 1 0 0 0 1-1V5a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1ZM7 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h1a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h2a1 1 0 1 0 0-2Zm16 4h-1.101A5.01 5.01 0 0 0 17 4h-2a1 1 0 1 0 0 2h2c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3h-1a1 1 0 1 0 0 2h1a5.009 5.009 0 0 0 4.899-4H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z" />
  </motion.svg>
);
export default SvgBatteryExclamation;

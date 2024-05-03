import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgHouseBlank = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M19 24H5c-2.757 0-5-2.243-5-5V9.724c0-1.665.824-3.215 2.204-4.145L9.203.855a4.98 4.98 0 0 1 5.594 0l7 4.724A4.992 4.992 0 0 1 24 9.724V19c0 2.757-2.243 5-5 5ZM12 1.997a2.99 2.99 0 0 0-1.678.517l-7 4.723A2.993 2.993 0 0 0 2 9.723v9.276c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V9.724c0-.999-.494-1.929-1.321-2.486l-7.001-4.724A2.99 2.99 0 0 0 12 1.997Z" />
  </motion.svg>
);
export default SvgHouseBlank;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUser = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M19 2H5C2.24 2 0 4.24 0 7v10c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5Zm3 15c0 1.65-1.35 3-3 3h-1.35a5.99 5.99 0 0 0-11.3 0H5c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v10Zm-6-7c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Z" />
  </motion.svg>
);
export default SvgUser;

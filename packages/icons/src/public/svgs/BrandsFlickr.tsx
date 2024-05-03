import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsFlickr = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M21.429 0H2.571A2.572 2.572 0 0 0 0 2.571v18.857A2.572 2.572 0 0 0 2.571 24h18.857A2.572 2.572 0 0 0 24 21.429V2.571A2.572 2.572 0 0 0 21.429 0zM7.741 15.375c-1.88 0-3.402-1.521-3.402-3.402S5.86 8.571 7.741 8.571s3.402 1.521 3.402 3.402-1.522 3.402-3.402 3.402zm8.518 0c-1.88 0-3.402-1.521-3.402-3.402s1.521-3.402 3.402-3.402 3.402 1.521 3.402 3.402-1.522 3.402-3.402 3.402z" />
  </motion.svg>
);
export default SvgBrandsFlickr;

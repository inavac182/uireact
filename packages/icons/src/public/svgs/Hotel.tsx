import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgHotel = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M16 0H8C5.243 0 3 2.243 3 5v14c0 2.757 2.243 5 5 5h2a1 1 0 0 0 1-1v-5h2v5a1 1 0 0 0 1 1h2c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3h-1v-4h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h1v4H8c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v14Zm-8-6a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-5-8a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-5 4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Z" />
  </motion.svg>
);
export default SvgHotel;

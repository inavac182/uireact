import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgEditSquare = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14ZM13.879 6.379l-6.707 6.707A3.975 3.975 0 0 0 6 15.914V17.5a1 1 0 0 0 1 1h1.586a3.971 3.971 0 0 0 2.828-1.172l6.707-6.707a3.002 3.002 0 0 0 0-4.242c-1.134-1.133-3.11-1.133-4.243 0ZM10 15.914a2.017 2.017 0 0 1-1.414.586H8v-.586c0-.534.208-1.036.586-1.414l4.25-4.25 1.414 1.414-4.25 4.25Zm6.707-6.707-1.043 1.043-1.414-1.414 1.043-1.043a1.021 1.021 0 0 1 1.414 0 1 1 0 0 1 0 1.414Z" />
  </motion.svg>
);
export default SvgEditSquare;

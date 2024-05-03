import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgXSquare = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14ZM17.769 6.641 13.303 12l4.466 5.359a1 1 0 1 1-1.538 1.281L12 13.562 7.769 18.64a1.002 1.002 0 0 1-1.41.128 1.001 1.001 0 0 1-.128-1.409L10.697 12 6.231 6.641A1 1 0 0 1 7.768 5.36l4.231 5.078L16.23 5.36a1.001 1.001 0 0 1 1.537 1.281Z" />
  </motion.svg>
);
export default SvgXSquare;

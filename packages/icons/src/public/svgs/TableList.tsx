import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgTableList = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM2 10h4v4H2v-4Zm6 0h14v4H8v-4Zm14-3v1H8V4h11c1.654 0 3 1.346 3 3ZM5 4h1v4H2V7c0-1.654 1.346-3 3-3ZM2 17v-1h4v4H5c-1.654 0-3-1.346-3-3Zm17 3H8v-4h14v1c0 1.654-1.346 3-3 3Z" />
  </motion.svg>
);
export default SvgTableList;

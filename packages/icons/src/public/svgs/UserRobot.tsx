import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUserRobot = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M21 23a1 1 0 1 1-2 0c0-2.206-1.794-4-4-4H9c-2.206 0-4 1.794-4 4a1 1 0 1 1-2 0c0-3.309 2.691-6 6-6h6c3.309 0 6 2.691 6 6Zm1-15.5v2c0 .827-.673 1.5-1.5 1.5H20c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4h-.5C2.673 11 2 10.327 2 9.5v-2C2 6.673 2.673 6 3.5 6H4c0-2.206 1.794-4 4-4h3V1a1 1 0 1 1 2 0v1h3c2.206 0 4 1.794 4 4h.5c.827 0 1.5.673 1.5 1.5ZM18 6c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V6ZM9.5 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 9.5 7Zm5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 14.5 7Z" />
  </motion.svg>
);
export default SvgUserRobot;

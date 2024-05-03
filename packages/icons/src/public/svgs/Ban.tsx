import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBan = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 2a9.949 9.949 0 0 1 6.324 2.262L4.262 18.324A9.992 9.992 0 0 1 12 2Zm0 20a9.949 9.949 0 0 1-6.324-2.262L19.738 5.676A9.992 9.992 0 0 1 12 22Z" />
  </motion.svg>
);
export default SvgBan;

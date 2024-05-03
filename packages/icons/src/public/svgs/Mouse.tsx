import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgMouse = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M13 3V1a1 1 0 0 0-2 0v2a7.008 7.008 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.008 7.008 0 0 0-7-7Zm5 13a6 6 0 0 1-12 0v-6a5.006 5.006 0 0 1 5-5h2a5.006 5.006 0 0 1 5 5Z" />
    <motion.path {...props.motionPath} d="M12 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z" />
  </motion.svg>
);
export default SvgMouse;

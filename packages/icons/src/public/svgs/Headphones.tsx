import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgHeadphones = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 5 5 0 0 0 2-9.576ZM5 20a3 3 0 0 1 0-6Zm14 0v-6a3 3 0 0 1 0 6Z" />
  </motion.svg>
);
export default SvgHeadphones;

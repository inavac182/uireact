import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleDoubleRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M13.1 19a1 1 0 0 1-.7-1.71l4.6-4.58a1 1 0 0 0 0-1.42l-4.6-4.58a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4.59 4.59a3 3 0 0 1 0 4.24l-4.59 4.59a1 1 0 0 1-.71.29Z" />
    <motion.path {...props.pathSvg} d="M6.1 19a1 1 0 0 1-.7-1.71L10.69 12 5.4 6.71a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l6 6a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-.71.29Z" />
  </motion.svg>
);
export default SvgAngleDoubleRight;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgLayoutFluid = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M2 11h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Zm0-9h11v7H2ZM22 0h-3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 9h-3V2h3ZM5 13H2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm0 9H2v-7h3ZM22 13H11a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm0 9H11v-7h11Z" />
  </motion.svg>
);
export default SvgLayoutFluid;

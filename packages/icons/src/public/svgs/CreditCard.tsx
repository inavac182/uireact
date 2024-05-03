import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCreditCard = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <circle cx={5.5} cy={15.5} r={1.5} />
    <motion.path {...props.pathSvg} d="M19 3H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5ZM5 5h14a3 3 0 0 1 3 3H2a3 3 0 0 1 3-3Zm14 14H5a3 3 0 0 1-3-3v-6h20v6a3 3 0 0 1-3 3Z" />
  </motion.svg>
);
export default SvgCreditCard;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgLink = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="m13.845 17.267-3.262 3.262a5.028 5.028 0 0 1-7.111-7.109l3.262-3.265a1 1 0 0 0-1.415-1.414l-3.261 3.265A7.027 7.027 0 0 0 12 21.943l3.262-3.262a1 1 0 0 0-1.414-1.414ZM21.944 2.061A6.979 6.979 0 0 0 16.975 0a6.983 6.983 0 0 0-4.968 2.057L8.74 5.32a1 1 0 0 0 1.414 1.415l3.265-3.262A4.993 4.993 0 0 1 16.973 2a5.028 5.028 0 0 1 3.554 8.583l-3.262 3.262a1 1 0 1 0 1.415 1.415L21.942 12a7.037 7.037 0 0 0 .002-9.939Z" />
    <motion.path {...props.pathSvg} d="m14.293 8.293-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0-1.414-1.414Z" />
  </motion.svg>
);
export default SvgLink;

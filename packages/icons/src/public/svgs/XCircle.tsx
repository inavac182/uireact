import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgXCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M12.038.02c-6.617 0-12 5.382-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12Zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10Zm4.765-14.105-3.457 4.105 3.457 4.105a1 1 0 1 1-1.53 1.289l-3.235-3.842-3.235 3.842a.998.998 0 0 1-1.41.12.999.999 0 0 1-.12-1.409l3.457-4.105-3.457-4.105a1 1 0 0 1 1.529-1.289l3.235 3.842 3.235-3.842a1 1 0 1 1 1.529 1.289Z" />
  </motion.svg>
);
export default SvgXCircle;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleDoubleUp = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M6 18a1 1 0 0 1-.705-1.71l6.001-5.964a1 1 0 0 1 1.41 0l5.999 5.964a.999.999 0 1 1-1.41 1.418l-5.294-5.263-5.296 5.264A.997.997 0 0 1 6 18Zm12.712-6.56a.999.999 0 0 0-.01-1.414l-3.925-3.875C14.036 5.409 13.049 5 12 5s-2.036.409-2.772 1.146l-3.93 3.88a1 1 0 1 0 1.404 1.423l3.935-3.884c.729-.729 1.993-.733 2.731.004l3.93 3.88a.996.996 0 0 0 1.414-.008Z" />
  </motion.svg>
);
export default SvgAngleDoubleUp;

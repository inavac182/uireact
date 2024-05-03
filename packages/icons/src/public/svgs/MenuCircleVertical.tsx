import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgMenuCircleVertical = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm1.5-15.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13.5 6.5Zm0 11a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001Zm0-5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13.5 12Z" />
  </motion.svg>
);
export default SvgMenuCircleVertical;

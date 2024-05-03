import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgChartCandlestick = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M24 23c0 .55-.45 1-1 1H5c-2.76 0-5-2.24-5-5V1c0-.55.45-1 1-1s1 .45 1 1v18c0 1.65 1.35 3 3 3h18c.55 0 1 .45 1 1Zm-9-12V5c0-1.1.9-2 2-2V1c0-.55.45-1 1-1s1 .45 1 1v2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c-1.1 0-2-.9-2-2Zm2 0h2V5h-2v6ZM6 14V5c0-1.1.9-2 2-2V1c0-.55.45-1 1-1s1 .45 1 1v2c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c-1.1 0-2-.9-2-2Zm2 0h2V5H8v9Z" />
  </motion.svg>
);
export default SvgChartCandlestick;

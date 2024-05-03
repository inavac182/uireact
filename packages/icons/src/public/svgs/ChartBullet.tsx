import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgChartBullet = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M4 10h11v1c0 .55.45 1 1 1s1-.45 1-1v-1h3c2.21 0 4-1.79 4-4s-1.79-4-4-4h-3V1c0-.55-.45-1-1-1s-1 .45-1 1v1H4C1.79 2 0 3.79 0 6s1.79 4 4 4Zm16-6c1.1 0 2 .9 2 2s-.9 2-2 2h-3V4h3Zm-5 4h-3V4h3v4ZM4 4h6v4H4c-1.1 0-2-.9-2-2s.9-2 2-2Zm16 10h-8v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-2.21 0-4 1.79-4 4s1.79 4 4 4h6v1c0 .55.45 1 1 1s1-.45 1-1v-1h8c2.21 0 4-1.79 4-4s-1.79-4-4-4ZM2 18c0-1.1.9-2 2-2h1v4H4c-1.1 0-2-.9-2-2Zm5 2v-4h3v4H7Zm13 0h-8v-4h8c1.1 0 2 .9 2 2s-.9 2-2 2Z" />
  </motion.svg>
);
export default SvgChartBullet;

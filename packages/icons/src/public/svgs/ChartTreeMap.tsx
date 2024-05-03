import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgChartTreeMap = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M21 9h-5c-1.65 0-3 1.35-3 3s1.35 3 3 3h5c1.65 0 3-1.35 3-3s-1.35-3-3-3Zm0 4h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1Zm-5-7h5c1.65 0 3-1.35 3-3s-1.35-3-3-3h-5c-1.65 0-3 1.35-3 3s1.35 3 3 3Zm0-4h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1Zm5 16h-5c-1.65 0-3 1.35-3 3s1.35 3 3 3h5c1.65 0 3-1.35 3-3s-1.35-3-3-3Zm0 4h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1ZM7 13H4c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3ZM7 0H4C1.79 0 0 1.79 0 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3Z" />
  </motion.svg>
);
export default SvgChartTreeMap;

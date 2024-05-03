import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBarsProgress = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M4 11h16c2.206 0 4-1.794 4-4s-1.794-4-4-4H4C1.794 3 0 4.794 0 7s1.794 4 4 4Zm18-4c0 1.103-.897 2-2 2h-4V5h4c1.103 0 2 .897 2 2ZM4 5h10v4H4c-1.103 0-2-.897-2-2s.897-2 2-2Zm16 8H4c-2.206 0-4 1.794-4 4s1.794 4 4 4h16c2.206 0 4-1.794 4-4s-1.794-4-4-4ZM2 17c0-1.103.897-2 2-2h4v4H4c-1.103 0-2-.897-2-2Zm18 2H10v-4h10c1.103 0 2 .897 2 2s-.897 2-2 2Z" />
  </motion.svg>
);
export default SvgBarsProgress;

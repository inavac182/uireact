import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsSlack = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M5.053 15.158a2.526 2.526 0 1 1-2.527-2.526h2.526v2.526zM6.316 15.158a2.526 2.526 0 0 1 5.052 0v6.316a2.526 2.526 0 0 1-5.052 0v-6.316zM8.842 5.053a2.526 2.526 0 1 1 2.526-2.527v2.526H8.842zM8.842 6.316a2.526 2.526 0 0 1 0 5.052H2.526a2.526 2.526 0 0 1 0-5.052h6.316zM18.947 8.842a2.526 2.526 0 1 1 2.527 2.526h-2.526V8.842zM17.684 8.842a2.526 2.526 0 0 1-5.052 0V2.526a2.526 2.526 0 0 1 5.052 0v6.316zM15.158 18.947a2.526 2.526 0 1 1-2.526 2.526v-2.526h2.526zM15.158 17.684a2.526 2.526 0 0 1 0-5.052h6.316a2.526 2.526 0 0 1 0 5.052h-6.316z" />
  </motion.svg>
);
export default SvgBrandsSlack;

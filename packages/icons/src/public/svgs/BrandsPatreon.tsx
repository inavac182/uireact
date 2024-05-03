import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsPatreon = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg}
      d="M15.385.48c-4.765 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.624 8.641 8.624 4.75 0 8.615-3.869 8.615-8.624C24 4.36 20.136.48 15.385.48zM0 23.52h4.219V.48H0v23.04z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsPatreon;

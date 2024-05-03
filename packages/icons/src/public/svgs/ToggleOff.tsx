import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgToggleOff = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M16 4H8c-4.411 0-8 3.589-8 8s3.589 8 8 8h8c4.411 0 8-3.589 8-8s-3.589-8-8-8Zm0 14H8c-3.309 0-6-2.691-6-6s2.691-6 6-6h8c3.309 0 6 2.691 6 6s-2.691 6-6 6ZM8 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z" />
  </motion.svg>
);
export default SvgToggleOff;

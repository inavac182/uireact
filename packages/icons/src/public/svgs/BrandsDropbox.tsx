import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsDropbox = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 5.634 6 9.455l6 3.822-6 3.821-6-3.821 6-3.822-6-3.821 6-3.821 6 3.821zM5.982 18.366l6-3.821 6 3.821-6 3.821-6-3.821zM12 13.277l6-3.822-6-3.821 6-3.821 6 3.821-6 3.821 6 3.822-6 3.821-6-3.821z" />
  </motion.svg>
);
export default SvgBrandsDropbox;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgXRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="m23.794 11.393-5.381-7.037A6.034 6.034 0 0 0 13.646 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h8.646c1.857 0 3.64-.881 4.766-2.355l5.382-7.037a1 1 0 0 0 0-1.215Zm-6.971 7.038a4.02 4.02 0 0 1-3.177 1.57H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h8.646c1.238 0 2.426.587 3.178 1.57L21.741 12l-4.918 6.43Zm-3.116-8.723-2.293 2.293 2.293 2.293a.999.999 0 1 1-1.414 1.414L10 13.415l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.293-2.293-2.293-2.293a.999.999 0 1 1 1.414-1.414L10 10.587l2.293-2.293a.999.999 0 1 1 1.414 1.414Z" />
  </motion.svg>
);
export default SvgXRight;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBell = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="m22.555 13.662-1.9-6.836A9.321 9.321 0 0 0 2.576 7.3l-1.471 6.615A5 5 0 0 0 5.986 20H7.1a5 5 0 0 0 9.8 0h.838a5 5 0 0 0 4.818-6.338ZM12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22Zm8.126-5.185A2.977 2.977 0 0 1 17.737 18H5.986a3 3 0 0 1-2.928-3.651l1.47-6.616a7.321 7.321 0 0 1 14.2-.372l1.9 6.836a2.977 2.977 0 0 1-.502 2.618Z" />
  </motion.svg>
);
export default SvgBell;

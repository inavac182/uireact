import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBook = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M17 0H7a5.006 5.006 0 0 0-5 5v15a4 4 0 0 0 4 4h11a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 5v11H8V2h9a3 3 0 0 1 3 3ZM6 2.172V16a3.98 3.98 0 0 0-2 .537V5a3 3 0 0 1 2-2.828ZM17 22H6a2 2 0 0 1 0-4h14v1a3 3 0 0 1-3 3Z" />
  </motion.svg>
);
export default SvgBook;

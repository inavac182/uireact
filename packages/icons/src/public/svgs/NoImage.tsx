import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgNoImage = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M18 8a2 2 0 1 1-3.999.001A2 2 0 0 1 18 8Zm5.707 15.707a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l1.536 1.536A4.998 4.998 0 0 1 6 1h12c2.757 0 5 2.243 5 5v12c0 .987-.291 1.944-.829 2.757l1.536 1.536a.999.999 0 0 1 0 1.414Zm-19-20.414 16 16c.191-.4.293-.842.293-1.293V6c0-1.654-1.346-3-3-3H6c-.451 0-.892.102-1.293.293ZM17 21H6a3.003 3.003 0 0 1-2.974-2.612l4.681-4.681a.999.999 0 1 0-1.414-1.414L3 15.586V7a1 1 0 1 0-2 0v11c0 2.757 2.243 5 5 5h11a1 1 0 1 0 0-2Z" />
  </motion.svg>
);
export default SvgNoImage;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowsRetweet = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="m23.68 16.73-2.59 2.41c-.54.54-1.3.85-2.1.85s-1.55-.31-2.12-.88l-2.56-2.39a.997.997 0 1 1 1.36-1.46l2.32 2.16V9c0-1.65-1.35-3-3-3h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c2.76 0 5 2.24 5 5v8.43l2.32-2.16a.996.996 0 1 1 1.36 1.46ZM13 18H9c-1.65 0-3-1.35-3-3V6.57l2.32 2.16c.19.18.44.27.68.27.27 0 .53-.11.73-.32.38-.4.35-1.04-.05-1.41L7.12 4.88C5.99 3.75 3.99 3.77 2.9 4.86L.32 7.27a.997.997 0 0 0-.05 1.41c.38.41 1.01.43 1.41.05L4 6.57V15c0 2.76 2.24 5 5 5h4c.55 0 1-.45 1-1s-.45-1-1-1Z" />
  </motion.svg>
);
export default SvgArrowsRetweet;

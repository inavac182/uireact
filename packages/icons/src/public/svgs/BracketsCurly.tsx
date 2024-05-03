import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBracketsCurly = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M23 12c0 .27-.11.52-.29.71l-1.83 1.83c-.57.57-.88 1.32-.88 2.12V19c0 2.76-2.24 5-5 5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c1.65 0 3-1.35 3-3v-2.34c0-1.34.52-2.59 1.46-3.54L20.58 12l-1.12-1.12C18.52 9.94 18 8.68 18 7.34V5c0-1.65-1.35-3-3-3h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c2.76 0 5 2.24 5 5v2.34c0 .8.31 1.56.88 2.12l1.83 1.83c.19.19.29.44.29.71ZM6 7.34V5c0-1.65 1.35-3 3-3h1c.55 0 1-.45 1-1s-.45-1-1-1H9C6.24 0 4 2.24 4 5v2.34c0 .8-.31 1.56-.88 2.12l-1.83 1.83c-.19.19-.29.44-.29.71s.11.52.29.71l1.83 1.83c.57.57.88 1.32.88 2.12V19c0 2.76 2.24 5 5 5h1c.55 0 1-.45 1-1s-.45-1-1-1H9c-1.65 0-3-1.35-3-3v-2.34c0-1.34-.52-2.59-1.46-3.54L3.42 12l1.12-1.12C5.48 9.94 6 8.68 6 7.34Z" />
  </motion.svg>
);
export default SvgBracketsCurly;

import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBracketCurlyRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M10 24H9c-.55 0-1-.45-1-1s.45-1 1-1h1c1.65 0 3-1.35 3-3v-2.34c0-1.34.52-2.59 1.46-3.54L15.58 12l-1.12-1.12C13.52 9.94 13 8.68 13 7.34V5c0-1.65-1.35-3-3-3H9c-.55 0-1-.45-1-1s.45-1 1-1h1c2.76 0 5 2.24 5 5v2.34c0 .79.32 1.56.88 2.12l1.83 1.83c.39.39.39 1.02 0 1.41l-1.83 1.83c-.56.56-.88 1.33-.88 2.12v2.34c0 2.76-2.24 5-5 5Z" />
  </motion.svg>
);
export default SvgBracketCurlyRight;

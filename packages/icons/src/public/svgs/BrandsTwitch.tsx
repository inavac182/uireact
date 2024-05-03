import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsTwitch = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M6 0 1.714 4.286v15.429h5.143V24l4.286-4.286h3.429L22.286 12V0H6zm14.571 11.143-3.429 3.429h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" />
    <motion.path {...props.motionPath} d="M16.286 4.714H18v5.143h-1.714zM11.571 4.714h1.714v5.143h-1.714z" />
  </motion.svg>
);
export default SvgBrandsTwitch;
